<?php

namespace App\Http\Controllers;

use App\Events\AssignedUser;
use App\Events\TicketCreated;
use App\Events\TicketNewComment;
use App\Events\TicketUpdated;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\Attachment;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Contact;
use App\Models\Department;
use App\Models\PendingEmail;
use App\Models\Priority;
use App\Models\Review;
use App\Models\Role;
use App\Models\Setting;
use App\Models\Status;
use App\Models\Ticket;
use App\Models\TicketEntry;
use App\Models\TicketField;
use App\Models\Type;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class TicketsController extends Controller
{

    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':ticket');
    }

    public function index(){
        $byCustomer = null;
        $byAssign = null;
        $user = Auth()->user();
        $hiddenFields = Setting::where('slug', 'hide_ticket_fields')->first();
        if(in_array($user['role']['slug'], ['customer'])){
            $byCustomer = $user['id'];
        }elseif(in_array($user['role']['slug'], ['manager'])){
            $byAssign = $user['id'];
        }else{
            $byAssign = Request::input('assigned_to');
        }
        $whereAll = [];
        $type = Request::input('type');
        $limit = Request::input('limit', 10);
        $customer = Request::input('customer_id');

        if(!empty($customer)){
            $whereAll[] = ['user_id', '=', $customer];
        }

        if($type == 'un_assigned'){
            $whereAll[] = ['assigned_to', '=', null];
        }elseif ($type == 'open'){
            $opened_status = Status::where('slug', 'like', '%closed%')->first();
            $whereAll[] = ['status_id', '!=', $opened_status->id];
        }elseif ($type == 'new'){
            $whereAll[] = ['created_at', '>=', date('Y-m-d').' 00:00:00'];
        }

        $ticketQuery = Ticket::where($whereAll);

        if (Request::has(['field', 'direction'])) {
            if(Request::input('field') == 'tech'){
                $ticketQuery
                    ->join('users', 'tickets.assigned_to', '=', 'users.id')
                    ->orderBy('users.first_name', Request::input('direction'))->select('tickets.*');
            }else{
                $ticketQuery->orderBy(Request::input('field'), Request::input('direction'));
            }
        }else{
            $ticketQuery->orderBy('updated_at', 'DESC');
        }

        return Inertia::render('Tickets/Index', [
            'title' => 'Tickets',
            'filters' => Request::all(),
            'hidden_fields' => $hiddenFields && $hiddenFields->value ? json_decode($hiddenFields->value) : null ,
            'priorities' => Priority::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'assignees' => [],
            'types' => Type::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'categories' => Category::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'departments' => Department::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'statuses' => Status::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'tickets' => $ticketQuery
                ->filter(Request::only(['search', 'priority_id', 'status_id', 'type_id', 'category_id', 'department_id']))
                ->byCustomer($byCustomer)
                ->byAssign($byAssign)
                ->paginate($limit)
                ->withQueryString()
                ->through(function ($ticket){
                    return [
                        'id' => $ticket->id,
                        'uid' => $ticket->uid,
                        'subject' => $ticket->subject,
                        'user' => $ticket->user ? $ticket->user->first_name.' '.$ticket->user->last_name : null,
                        'priority' => $ticket->priority ? $ticket->priority->name : null,
                        'category' => $ticket->category ? $ticket->category->name: null,
                        'sub_category' => $ticket->subCategory ? $ticket->subCategory->name: null,
                        'rating' => $ticket->review ? $ticket->review->rating : 0,
                        'status' => $ticket->status ? $ticket->status->name : null,
                        'due' => $ticket->due,
                        'assigned_to' => $ticket->assignedTo? $ticket->assignedTo->first_name.' '.$ticket->assignedTo->last_name : null,
                        'created_at' => $ticket->created_at,
                        'updated_at' => $ticket->updated_at,
                    ];
                }),
        ]);
    }

    public function csvImport()
    {
        $file = Request::file('file');
        if(!empty($file)){

            $fileContents = $this->csvToArray($file->getPathname());
            foreach ($fileContents as $data) {
                $findExistingTicket = Ticket::where('uid', $data['UID'])->first();
                if(empty($findExistingTicket)){
                    $priority = Priority::firstOrCreate(['name' => $data['Priority']]);
                    $category = Category::firstOrCreate(['name' => $data['Category']]);
                    $sub_category = Category::firstOrCreate(['name' => $data['Sub Category']]);
                    $department = Department::firstOrCreate(['name' => $data['Department']]);
                    $status = Status::firstOrCreate(['name' => $data['Status']]);
                    $assignTo = User::where(['email' => $data['Assigned To Email']])->first();
                    if(empty($assignTo) && !empty($data['Assigned To Email']) && !empty($data['Assigned To Name'])){
                        $aName = $this->splitName($data['Assigned To Name']);
                        $assignTo = User::create(['email' => $data['Assigned To Email'], 'first_name' => $aName[0], 'last_name' => $aName[1]]);
                    }

                    $ticket = Ticket::create([
                        'uid' => $data['UID'],
                        'subject' => $data['Subject'],
                        'priority_id' => $priority->id,
                        'category_id' => $category->id,
                        'sub_category_id' => $sub_category->id,
                        'department_id' => $department->id,
                        'status_id' => $status->id,
                        'assigned_to' => $assignTo?$assignTo->id:null
                    ]);
                }
            }
            return redirect()->back()->with('success', 'CSV file imported successfully.');
        }else{
            return redirect()->back()->with('error', 'CSV file import issue!');
        }
    }

    public function csvExport()
    {
        $tickets = Ticket::all();
        $csvFileName = 'tickets.csv';

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="' . $csvFileName . '"',
        ];

        $handle = fopen('php://output', 'w');
        fputcsv($handle, ['UID', 'Subject', 'Priority', 'Category', 'Sub Category', 'Department', 'Status', 'Assigned To Email', 'Assigned To Name', 'Created']);

        foreach ($tickets as $ticket) {
            fputcsv($handle, [$ticket->uid, $ticket->subject, $ticket->priority ? $ticket->priority->name : null,
                $ticket->category ? $ticket->category->name: null, $ticket->subCategory ? $ticket->subCategory->name: null,
                $ticket->department ? $ticket->department->name: null,
                $ticket->status ? $ticket->status->name : null,
                $ticket->assignedTo? $ticket->assignedTo->email : null,
                $ticket->assignedTo? $ticket->assignedTo->first_name.' '.$ticket->assignedTo->last_name : null,
                $ticket->created_at
                ]);
        }

        fclose($handle);

        return Response::make('', 200, $headers);
    }

    public function create(){
        $user = Auth()->user();
        $roles = Role::pluck('id', 'slug')->all();
        $hiddenFields = Setting::where('slug', 'hide_ticket_fields')->first();
        $custom_fields = TicketField::get();
        return Inertia::render('Tickets/Create', [
            'title' => 'Create a new ticket',
            'custom_fields' => $custom_fields,
            'hidden_fields' => $hiddenFields && $hiddenFields->value ? json_decode($hiddenFields->value) : null ,
            'customers' => User::where('role_id', $roles['customer'] ?? 0)->orWhere('id', Request::input('customer_id'))->orderBy('first_name')
                ->limit(6)
                ->get()
                ->map
                ->only('id', 'name'),
            'usersExceptCustomers' => User::where('role_id', '!=', $roles['customer'] ?? 0)->orWhere('id', Request::input('user_id'))->orderBy('first_name')
                ->limit(6)
                ->get()
                ->map
                ->only('id', 'name'),
            'priorities' => Priority::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'departments' => Department::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'all_categories' => Category::orderBy('name')
                ->get(),
            'statuses' => Status::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'types' => Type::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function store(Request $request) {
        $required_fields = [];

        $get_required_fields = Setting::where('slug', 'required_ticket_fields')->first();
        if(!empty($get_required_fields)){
            $required_fields = json_decode($get_required_fields->value, true);
        }
        $user = Auth()->user();
        $request_data = Request::validate([
            'user_id' => ['nullable', Rule::exists('users', 'id')],
            'priority_id' => ['nullable', Rule::exists('priorities', 'id')],
            'status_id' => ['nullable', Rule::exists('status', 'id')],
            'department_id' => [in_array('department', $required_fields)?'required':'nullable', Rule::exists('departments', 'id')],
            'assigned_to' => [in_array('assigned_to', $required_fields)?'required':'nullable', Rule::exists('users', 'id')],
            'category_id' => [in_array('category', $required_fields)?'required':'nullable', Rule::exists('categories', 'id')],
            'sub_category_id' => [in_array('sub_category', $required_fields)?'required':'nullable', Rule::exists('categories', 'id')],
            'type_id' => [in_array('ticket_type', $required_fields)?'required':'nullable', Rule::exists('types', 'id')],
            'subject' => ['required'],
            'details' => ['required'],
        ]);

        if(in_array($user['role']['slug'], ['customer'])){
            $request_data['user_id'] = $user['id'];
        }

        if(is_null($request_data['priority_id'])){
            $priority = Priority::orderBy('name')->first();
            if(!empty($priority)){
                $request_data['priority_id'] = $priority->id;
            }
        }

        if(is_null($request_data['status_id'])){
            $status = Status::where('slug', 'like', '%active%')->first();
            if(!empty($status)){
                $request_data['status_id'] = $status->id;
            }
        }

        $request_data['created_by'] = $user['id'];
        $ticket = Ticket::create($request_data);

        if(Request::hasFile('files')){
            $files = Request::file('files');
            foreach($files as $file){
                $file_path = $file->store('tickets', ['disk' => 'file_uploads']);
                Attachment::create(['ticket_id' => $ticket->id, 'name' => $file->getClientOriginalName(), 'size' => $file->getSize(), 'path' => $file_path]);
            }
        }

        $custom_inputs = Request::input('custom_field');

        if(!empty($custom_inputs)){
            foreach ($custom_inputs as $cfk => $cfv){
                $ticket_field = TicketField::where('name', $cfk)->first();
                if(!empty($ticket_field)){
                    TicketEntry::create(['ticket_id' => $ticket->id, 'field_id' => $ticket_field->id, 'name' => $cfk, 'label' => $ticket_field->label, 'value' => $cfv]);
                }
            }
        }

        event(new TicketCreated(['ticket_id' => $ticket->id]));

        if(!empty($ticket->assigned_to)){
            event(new AssignedUser($ticket->id));
        }


        return Redirect::route('tickets')->with('success', 'Ticket created.');
    }

    public function edit($uid){
        $user = Auth()->user();
        $byCustomer = null;
        $byAssign = null;
        if(in_array($user['role']['slug'], ['customer'])){
            $byCustomer = $user['id'];
        }elseif(in_array($user['role']['slug'], ['manager'])){
            $byAssign = $user['id'];
        }else{
            $byAssign = Request::input('assigned_to');
        }
        $ticket = Ticket::byCustomer($byCustomer)
            ->byAssign($byAssign)
            ->where(function($query) use ($uid){
                $query->where('uid', $uid);
                $query->orWhere('id', $uid);
            })->first();
        if(empty($ticket)){
            abort(404);
        }
        $hiddenFields = Setting::where('slug', 'hide_ticket_fields')->first();
        $comment_access = 'read';
        if($user['role']['slug'] === 'admin'){
            $comment_access = 'delete';
        }elseif($user['role']['slug'] === 'manager'){
            $comment_access = 'view';
        }

        $roles = Role::pluck('id', 'slug')->all();

        return Inertia::render('Tickets/Edit', [
            'hidden_fields' => $hiddenFields ? json_decode($hiddenFields->value) : null ,
            'title' => $ticket->subject ? '#'.$ticket->uid.' '.$ticket->subject : '',
            'entries' => TicketEntry::where('ticket_id', $ticket->id)->get(),
            'customers' => User::where('role_id', $roles['customer'] ?? 0)->orWhere('id', Request::input('customer_id'))->orderBy('first_name')
                ->limit(6)
                ->get()
                ->map
                ->only('id', 'name'),
            'usersExceptCustomers' => User::where('role_id', '!=', $roles['customer'] ?? 0)->orWhere('id', Request::input('user_id'))->orderBy('first_name')
                ->limit(6)
                ->get()
                ->map
                ->only('id', 'name'),
            'priorities' => Priority::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'departments' => Department::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'all_categories' => Category::orderBy('name')
                ->get(),
            'statuses' => Status::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'attachments' => Attachment::orderBy('name')->with('user')->where('ticket_id', $ticket->id??null)->get(),
            'comments' => Comment::orderBy('created_at', 'asc')->with('user')->where('ticket_id', $ticket->id??null)->get(),
            'types' => Type::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'ticket' => [
                'id' => $ticket->id,
                'uid' => $ticket->uid,
                'user_id' => $ticket->user_id,
                'contact_id' => $ticket->contact_id,
                'user' => $ticket->user?$ticket->user->name: 'N/A',
                'contact' => $ticket->contact?: null,
                'priority_id' => $ticket->priority_id,
                'created_at' => $ticket->created_at,
                'priority' => $ticket->priority? $ticket->priority->name : 'N/A',
                'status_id' => $ticket->status_id,
                'status' => $ticket->status?: null,
                'closed' => $ticket->status && $ticket->status->slug == 'closed',
                'review' => $ticket->review,
                'department_id' => $ticket->department_id,
                'department' => $ticket->department? $ticket->department->name : 'N/A',
                'category_id' => $ticket->category_id,
                'sub_category_id' => $ticket->sub_category_id,
                'category' => $ticket->category ? $ticket->category->name : 'N/A',
                'sub_category' => $ticket->subCategory ? $ticket->subCategory->name : 'N/A',
                'assigned_to' => $ticket->assigned_to,
                'assigned_user' => $ticket->assignedTo ? $ticket->assignedTo->first_name .' '.$ticket->assignedTo->last_name : 'N/A',
                'type_id' => $ticket->type_id,
                'type' => $ticket->ticketType ? $ticket->ticketType->name : 'N/A',
                'ticket_id' => $ticket->ticket_id,
                'subject' => $ticket->subject,
                'details' => $ticket->details,
                'files' => [],
                'comment_access' => $comment_access,
            ],
        ]);
    }

    public function update(Ticket $ticket){
        $user = Auth()->user();
        $request_data = Request::validate([
            'user_id' => ['nullable', Rule::exists('users', 'id')],
            'contact_id' => ['nullable', Rule::exists('contacts', 'id')],
            'priority_id' => ['nullable', Rule::exists('priorities', 'id')],
            'status_id' => ['nullable', Rule::exists('status', 'id')],
            'department_id' => ['nullable', Rule::exists('departments', 'id')],
            'assigned_to' => ['nullable', Rule::exists('users', 'id')],
            'category_id' => ['nullable', Rule::exists('categories', 'id')],
            'sub_category_id' => ['nullable', Rule::exists('categories', 'id')],
            'type_id' => ['nullable', Rule::exists('types', 'id')],
            'subject' => ['required'],
            'due' => ['nullable'],
            'details' => ['required'],
        ]);

        if(!empty(Request::input('review')) || !empty(Request::input('rating'))){
            $review = Review::create([
                'review' => Request::input('review'),
                'rating' => Request::input('rating'),
                'ticket_id' => $ticket->id,
                'user_id' => $user['id']
            ]);
            $ticket->update(['review_id' => $review->id]);
            return Redirect::route('tickets.edit', $ticket->uid)->with('success', 'Added the review!');
        }

        $closed_status = Status::where('slug', 'like', '%close%')->first();

        $update_message = null;
        if($closed_status && ($ticket->status_id != $closed_status->id) && $request_data['status_id'] == $closed_status->id){
            $update_message = 'The ticket has been closed.';
        }elseif($ticket->status_id != $request_data['status_id']){
            $update_message = 'The status has been changed for this ticket.';
        }

        if($ticket->priority_id != $request_data['priority_id']){
            $update_message = 'The priority has been changed for this ticket.';
        }

        if(empty($ticket->response) && $user['role']['slug'] === 'admin'){
            $request_data['response'] = date('Y-m-d H:i:s');
        }

        if(isset($request_data['due']) && !empty($request_data['due'])){
            $request_data['due'] = date('Y-m-d', strtotime($request_data['due']));
        }

        $assigned = (!empty($request_data['assigned_to']) && ($ticket->assigned_to != $request_data['assigned_to']))??false;

        $ticket->update($request_data);

        if($assigned){
            event(new AssignedUser(['ticket_id' => $ticket->id]));
        }

        if(!empty($update_message)){
            event(new TicketUpdated(['ticket_id' => $ticket->id, 'update_message' => $update_message]));
        }

        if(!empty(Request::input('comment'))){
            Comment::create([
                'details' => Request::input('comment'),
                'ticket_id' => $ticket->id,
                'user_id' => $user['id']
            ]);
            $this->sendMailCron( $ticket->id, 'response' , Request::input('comment') );
        }

        $removedFiles = Request::input('removedFiles');
        if(!empty($removedFiles)){
            $attachments = Attachment::where('ticket_id', $ticket->id)->whereIn('id', $removedFiles)->get();
            foreach ($attachments as $attachment){
                if(Storage::disk('file_uploads')->exists($attachment->path)){
                    Storage::disk('file_uploads')->delete($attachment->path);
                }
                $attachment->delete();
            }
        }

        if(Request::hasFile('files')){
            $files = Request::file('files');
            foreach($files as $file){
                $file_path = $file->store('tickets', ['disk' => 'file_uploads']);
                Attachment::create(['ticket_id' => $ticket->id, 'user_id' => $user['id'], 'name' => $file->getClientOriginalName(), 'size' => $file->getSize(), 'path' => $file_path]);
            }
        }

        return Redirect::route('tickets.edit', $ticket->uid)->with('success', 'Ticket updated.');
    }

    public function newComment(){
        $request = Request::all();
        $ticket = Comment::where('ticket_id', $request['ticket_id'])->count();
        if(empty($ticket)){
            event(new TicketNewComment(['ticket_id' => $request['ticket_id'], 'comment' => $request['comment']]));
        }

        $newComment = new Comment;
        if(isset($request['user_id'])){
            $newComment->user_id = $request['user_id'];
        }
        if(isset($request['ticket_id'])){
            $newComment->ticket_id = $request['ticket_id'];
        }
        $newComment->details = $request['comment'];

        $newComment->save();

        return response()->json($newComment);
    }

    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
        return Redirect::route('tickets')->with('success', 'Ticket deleted.');
    }

    public function restore(Ticket $ticket){
        $ticket->restore();
        return Redirect::back()->with('success', 'Ticket restored.');
    }

    private function sendMailCron($id, $type = null, $value = null){
        PendingEmail::create(['ticket_id' => $id, 'type' => $type, 'value' => $value]);
    }

    private function csvToArray($filename = '', $delimiter = ',')
    {
        if (!file_exists($filename) || !is_readable($filename))
            return false;

        $header = null;
        $data = array();
        if (($handle = fopen($filename, 'r')) !== false)
        {
            while (($row = fgetcsv($handle, 1000, $delimiter)) !== false)
            {
                if (!$header)
                    $header = $row;
                else
                    $data[] = array_combine($header, $row);
            }
            fclose($handle);
        }

        return $data;
    }

    private function splitName($name) {
        $name = trim($name);
        $last_name = (!str_contains($name, ' ')) ? '' : preg_replace('#.*\s([\w-]*)$#', '$1', $name);
        $first_name = trim( preg_replace('#'.preg_quote($last_name,'#').'#', '', $name ) );
        return array($first_name, $last_name);
    }
}
