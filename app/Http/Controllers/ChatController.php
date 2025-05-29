<?php

namespace App\Http\Controllers;

use App\Events\NewPublicChatMessage;
use App\Http\Middleware\RedirectIfCustomer;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\Contact;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\Participant;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use App\Events\NewChatMessage;

class ChatController extends Controller {

    public function index(){
        $this->middleware(RedirectIfCustomer::class);
        return Inertia::render('Chat/Index', [
            'title' => 'Chat',
            'filters' => Request::all(['search']),
            'chat' => null,
            'conversations' => Conversation::orderBy('updated_at', 'DESC')
                ->filter(Request::all(['search']))
                ->withCount([
                    'messages',
                    'messages as messages_count' => function ($query) {
                        $query->whereNotNull('user_id')->where('is_read', '==', 0);
                    }])
                ->paginate(10)
                ->withQueryString()
                ->through(function ($chat) {
                    return [
                        'id' => $chat->id,
                        'slug' => $chat->slug??'',
                        'total_entry' => $chat->messages_count,
                        'title' => $chat->title,
                        'creator' => $chat->creator,
                        'created_at' => $chat->created_at,
                        'updated_at' => $chat->updated_at,
                    ];
                }),
        ]);
    }

    public function init(){
        $request = Request::all();
        $existingContact = Contact::where('email', $request['email'])->first();
        $newConversation = null;
        if(empty($existingContact)){
            $existingContact = new Contact;
            $existingContact->first_name = $request['firstName'];
            $existingContact->last_name = $request['lastName'];
            $existingContact->email = $request['email'];
            $existingContact->save();
        }else{
            $newConversation = Conversation::where('contact_id', $existingContact->id)->first();
        }

        if(empty($newConversation)){
            $newConversation = new Conversation;
            $newConversation->contact_id = $existingContact->id;
            $initialMessage = "Hey ". $existingContact->first_name. ', welcome to HelpDesk support - how can I help?';
            $newConversation->title = $initialMessage;
            $newConversation->save();

            $adminRole = Role::where('slug', 'admin')->first();
            $user = User::where('role_id','!=', $adminRole ? $adminRole->id : 0)->orderBy('role_id', 'ASC')->first();
            $message = new Message;
            $message->conversation_id = $newConversation->id;
            if(!empty($user)){
                $message->user_id = $user->id;
            }
            $message->message = $initialMessage;
            $message->save();

            $participant = new Participant;
            if(!empty($user)){
                $participant->user_id = $user->id;
            }
            $participant->contact_id = $existingContact->id;
            $participant->conversation_id = $newConversation->id;
            $participant->save();

            $message->creator = $existingContact;
            broadcast(new NewChatMessage($message))->toOthers();
        }

        $conversation = Conversation::with([
            'creator',
            'messages' => function($q){
                $q->orderBy('updated_at', 'asc');
            },
            'messages.attachments',
            'participant',
            'participant.user'
        ])->find($newConversation->id);

        return response()->json($conversation);
    }

    public function getConversation($id, $contact_id){
        $this->middleware(RedirectIfCustomer::class);
        $conversation = Conversation::with([
            'creator',
            'messages' => function($q){
                $q->orderBy('updated_at', 'asc');
            },
            'messages.attachments',
            'participant',
            'participant.user'
        ])->where(function ($query) use ($id) {
            $query->where('id', $id)->orWhere('slug', $id);
        })->where('contact_id', $contact_id)->first();
        return response()->json($conversation);
    }

    public function chat($id){
        Message::where(['conversation_id' => $id, 'is_read' => 0])->update(array('is_read' => 1));
        return Inertia::render('Chat/Index', [
            'title' => 'Chat',
            'filters' => Request::all(['search']),
            'chat' => Conversation::with([
                'creator',
                'messages' => function($q){
                    $q->orderBy('updated_at', 'asc');
                },
                'messages.contact',
                'messages.user',
                'messages.attachments',
                'participant',
                'participant.creator'
            ])
                ->where(function ($query) use ($id) {
                    $query->where('id', $id)->orWhere('slug', $id);
                })->first(),
            'conversations' => Conversation::orderBy('updated_at', 'DESC')
                ->filter(Request::all(['search']))
                ->withCount([
                    'messages',
                    'messages as messages_count' => function ($query) {
                        $query->whereNotNull('user_id')->where('is_read', '==', 0);
                    }])
                ->paginate(10)
                ->withQueryString()
                ->through(function ($chat) {
                    return [
                        'id' => $chat->id,
                        'slug' => $chat->slug??'',
                        'total_entry' => $chat->messages_count,
                        'title' => $chat->title,
                        'creator' => $chat->creator,
                        'created_at' => $chat->created_at,
                        'updated_at' => $chat->updated_at,
                    ];
                }),
        ]);
    }

    public function emptyChat(){
        return Inertia::render('Chat/Index', [
            'filters' => Request::all('search'),
            'chat' => Conversation::with([
                'creator',
                'messages' => function($q){
                    $q->orderBy('updated_at', 'asc');
                },
                'messages.contact',
                'messages.user',
                'messages.attachments',
                'participant',
                'participant.creator'
            ])->first(),
            'conversations' => Conversation::orderBy('updated_at', 'DESC')
                ->filter(Request::only('search'))
                ->withCount([
                    'messages',
                    'messages as messages_count' => function ($query) {
                        $query->where('is_read', '==', 0);
                    }])
                ->paginate(10)
                ->withQueryString()
                ->through(function ($chat) {
                    return [
                        'id' => $chat->id,
                        'total_entry' => $chat->messages_count,
                        'title' => $chat->title,
                        'creator' => $chat->creator,
                        'created_at' => $chat->created_at,
                        'updated_at' => $chat->updated_at,
                    ];
                }),
        ]);
    }

    public function newMessage(){
        $this->middleware(RedirectIfCustomer::class);
        $request = Request::all();
        $newMessage = new Message;
        if(isset($request['user_id'])){
            $newMessage->user_id = $request['user_id'];
        }
        $newMessage->message = $request['message'];
        $newMessage->conversation_id = $request['conversation_id'];
        $newMessage->save();

        Conversation::where('id', $newMessage->conversation_id)->update(['title' => $newMessage->message]);
        broadcast(new NewPublicChatMessage($newMessage))->toOthers();

        return response()->json($newMessage);
    }

    public function sendPublicMessage(){
        $request = Request::all();
        $newMessage = new Message;
        if(isset($request['contact_id'])){
            $newMessage->contact_id = $request['contact_id'];
        }
        $newMessage->message = $request['message'];
        $newMessage->conversation_id = $request['conversation_id'];
        $newMessage->save();

        Conversation::where('id', $newMessage->conversation_id)->update(['title' => $newMessage->message]);
        $message = Message::with(['contact', 'user'])->where('id', $newMessage->id)->first();

        broadcast(new NewChatMessage($message))->toOthers();

        return response()->json($message);
    }

    public function create()
    {
        $this->middleware(RedirectIfCustomer::class);
        return Inertia::render('Chat/Create');
    }

    public function store()
    {
        $this->middleware(RedirectIfCustomer::class);
        Conversation::create(
            Request::validate([
                'creator' => ['required', 'max:100'],
            ])
        );

        return Redirect::route('chat')->with('success', 'Chat created.');
    }

    public function edit(Conversation $chat)
    {
        $this->middleware(RedirectIfCustomer::class);
        return Inertia::render('Chat/Edit', [
            'chat' => [
                'id' => $chat->id,
                'title' => $chat->title,
                'creator' => $chat->creator(),
                'created_at' => $chat->created_at,
                'updated_at' => $chat->updated_at,
            ],
        ]);
    }

    public function update(Conversation $chat)
    {
        $chat->update(
            Request::validate([
                'title' => ['nullable', 'max:100']
            ])
        );

        return Redirect::back()->with('success', 'Conversation updated.');
    }

    public function destroy(Conversation $chat) {
        $chat->delete();
        return Redirect::route('chat')->with('success', 'Conversation deleted.');
    }

    public function restore(Conversation $chat)
    {
        $chat->restore();

        return Redirect::back()->with('success', 'Conversation restored.');
    }
}
