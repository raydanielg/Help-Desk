<?php

namespace App\Http\Controllers;

use App\Events\TicketCreated;
use App\Models\Attachment;
use App\Models\Category;
use App\Models\Department;
use App\Models\FrontPage;
use App\Models\Role;
use App\Models\Setting;
use App\Models\Status;
use App\Models\Ticket;
use App\Models\TicketEntry;
use App\Models\TicketField;
use App\Models\Type;
use App\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index(){
        return Inertia::render('Landing/Home', [
            'title' => 'Home - Helpdesk',
            'page' => FrontPage::where('slug', 'home')->first(),
//            'footer' => FrontPage::where('slug', 'footer')->first(),
            'custom_fields' => TicketField::get(),

            'hide_ticket_fields' => json_decode(Setting::where('slug', 'hide_ticket_fields')->value('value') ?? '[]', true),
            'require_login' => collect(json_decode(Setting::where('slug', 'enable_options')->value('value') ?? '[]', true))
                ->first(fn($option) => $option['slug'] === 'require_login_submit_ticket' && ($option['value'] ?? false)),
            'departments' => Department::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'all_categories' => Category::orderBy('name')
                ->get(),
            'types' => Type::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function ticketOpen(){
        $enable_options = Setting::where('slug', 'enable_options')->value('value');
        $require_login = collect(json_decode($enable_options, true))
            ->first(fn($option) => $option['slug'] === 'require_login_submit_ticket' && $option['value'] ?? false);

        if ($require_login) {
            return Redirect::route('login');
        }

        $hide_ticket_fields = [];

        $get_hide_ticket_fields = Setting::where('slug', 'hide_ticket_fields')->first();
        if(!empty($get_hide_ticket_fields)){
            $hide_ticket_fields = json_decode($get_hide_ticket_fields->value, true);
        }
        return Inertia::render('Landing/OpenTicket', [
            'footer' => FrontPage::where('slug', 'footer')->first(),
            'title' => 'Open Ticket - Helpdesk',
            'custom_fields' => TicketField::get(),
            'hide_ticket_fields' => $hide_ticket_fields,
            'departments' => Department::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'all_categories' => Category::orderBy('name')
                ->get(),
            'types' => Type::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function ticketPublicStore() {
        $required_fields = [];
        $hide_ticket_fields = [];

        $get_required_fields = Setting::where('slug', 'required_ticket_fields')->first();
        $get_hide_ticket_fields = Setting::where('slug', 'hide_ticket_fields')->first();
        if(!empty($get_required_fields)){
            $required_fields = json_decode($get_required_fields->value, true);
        }
        if(!empty($get_hide_ticket_fields)){
            $hide_ticket_fields = json_decode($get_hide_ticket_fields->value, true);
        }

        $is_required = array_filter($required_fields, function ($rf) use ($hide_ticket_fields){
            return !in_array($rf, $hide_ticket_fields);
        });

        $ticket_data = Request::validate([
            'first_name' => ['required', 'max:40'],
            'last_name' => ['required', 'max:40'],
            'subject' => ['required'],
            'department_id' => [in_array('department', $is_required)?'required':'nullable', Rule::exists('departments', 'id')],
            'category_id' => [in_array('category', $is_required)?'required':'nullable', Rule::exists('categories', 'id')],
            'sub_category_id' => [in_array('sub_category', $is_required)?'required':'nullable', Rule::exists('categories', 'id')],
            'type_id' => [in_array('ticket_type', $is_required)?'required':'nullable', Rule::exists('types', 'id')],
            'email' => ['required', 'max:60', 'email'],
            'details' => ['required'],
            'custom_field' => ['nullable'],
        ]);

        $user = User::where('email', $ticket_data['email'])->first();

        if(empty($user)){
            $plain_password = $this->genRendomPassword();
            $customerRole = Role::where('slug', 'customer')->first();
            $user = User::create([
                'first_name' => $ticket_data['first_name'],
                'last_name' => $ticket_data['last_name'],
                'email' => $ticket_data['email'],
                'role_id' => $customerRole ? $customerRole->id : null,
                'password' => $plain_password,
            ]);
        }

        $status = Status::where('slug', 'LIKE', '%pending%')->first();
        $ticketObject = [
            'subject' => $ticket_data['subject'],
            'details' => $ticket_data['details'],
            'department_id' => $ticket_data['department_id'],
            'category_id' => $ticket_data['category_id'],
            'sub_category_id' => $ticket_data['sub_category_id'],
            'type_id' => $ticket_data['type_id'],
            'user_id' => $user->id
        ];

        if($status){
            $ticketObject['status_id'] = $status->id;
        }

        $ticket = Ticket::create($ticketObject);

        if(!empty($ticket_data['custom_field'])){
            foreach ($ticket_data['custom_field'] as $cfk => $cfv){
                $ticket_field = TicketField::where('name', $cfk)->first();
                if(!empty($ticket_field)){
                    TicketEntry::create(['ticket_id' => $ticket->id, 'field_id' => $ticket_field->id, 'name' => $cfk, 'label' => $ticket_field->label, 'value' => $cfv]);
                }
            }
        }

        if(Request::hasFile('files')){
            $files = Request::file('files');
            foreach($files as $file){
                $file_path = $file->store('tickets', ['disk' => 'file_uploads']);
                Attachment::create(['ticket_id' => $ticket->id, 'name' => $file->getClientOriginalName(), 'size' => $file->getSize(), 'path' => $file_path]);
            }
        }

        $variables = [
            'name' => $user->first_name,
            'email' => $user->email,
            'password' => $plain_password??null,
            'login_url' => URL::to('login'),
            'sender_name' => config('mail.from.name', 'support@web.com'),
            'ticket_id' => $ticket->id,
            'uid' => $ticket->uid,
            'subject' => $ticket->subject,
        ];
        event(new TicketCreated($variables));

        return Redirect::route('ticket_open')->with('success', 'The ticket has been submitted, we will get a message from us to follow up the ticket update. Please check the spam folder and make sure you got the mail from us.');
    }

    private function genRendomPassword() {
        $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 13; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return implode($pass); //turn the array into a string
    }
}
