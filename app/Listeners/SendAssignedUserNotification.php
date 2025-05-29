<?php

namespace App\Listeners;

use App\Events\AssignedUser;
use App\Mail\SendMailFromHtml;
use App\Mail\TicketCreatedMessage;
use App\Models\EmailTemplate;
use App\Models\Setting;
use App\Models\Ticket;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendAssignedUserNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\AssignedUser  $event
     * @return void
     */
    public function handle(AssignedUser $event) {
        $ticketId = $event->ticketId;
        $ticket = Ticket::where('id', $ticketId)->with(['user','ticketType', 'assignedTo'])->first();
        $notifications = app('App\HelpDesk')->getSettingsEmailNotifications();
        if(!empty($ticket) && $notifications['assigned_ticket']){
            $template = EmailTemplate::where('slug', 'assigned_ticket')->first();
            if(!empty($template) && !empty($ticket->assignedTo) && isset($ticket->assignedTo->email)){
                $template = $template->html;
                $variables = [
                    'name' => $ticket->assignedTo->first_name??'Dear',
                    'email' => $ticket->assignedTo->email,
                    'url' => config('app.url').'/dashboard/tickets/'.$ticket->uid,
                    'sender_name' => 'Manager',
                    'ticket_id' => $ticket->id,
                    'uid' => $ticket->uid,
                    'subject' => $ticket->subject,
                    'type' => $ticket->ticketType ? $ticket->ticketType->name: '',
                ];
                if (preg_match_all("/{(.*?)}/", $template, $m)) {
                    foreach ($m[1] as $i => $varname) {
                        $template = str_replace($m[0][$i], sprintf($variables[$m[1][$i]], $varname), $template);
                    }
                }
                $messageData = ['html' => $template, 'subject' => '[Ticket#'.$ticket->uid.'] - You got assigned'];
                if(config('queue.enable')){
                    Mail::to($ticket->assignedTo->email)->queue(new SendMailFromHtml($messageData));
                }else{
                    Mail::to($ticket->assignedTo->email)->send(new SendMailFromHtml($messageData));
                }
            }
        }
    }
}
