<?php

namespace App\Listeners;

use App\Events\TicketUpdated;
use App\HelpDesk;
use App\Mail\SendMailFromHtml;
use App\Mail\TicketCreatedMessage;
use App\Models\EmailTemplate;
use App\Models\Setting;
use App\Models\Ticket;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendTicketUpdatedNotification
{
    use Queueable;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct() {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\TicketUpdated  $event
     * @return void
     */
    public function handle(TicketUpdated $event) {
        $ticketInfo = $event->data;
        $ticket = Ticket::where('id', $ticketInfo['ticket_id'])->with(['user','ticketType','assignedTo','priority','status','department','category'])->first();
        $notifications = app('App\HelpDesk')->getSettingsEmailNotifications();
        if(!empty($ticket) && $notifications['status_priority']){
            $template = EmailTemplate::where('slug', 'ticket_updated')->first();
            if(!empty($template)){
                $template = $template->html;
                $variables = [
                    'name' => $ticket->user->first_name,
                    'email' => $ticket->user->email,
                    'url' => config('app.url').'/dashboard/tickets/'.$ticket->uid,
                    'update_message' => $ticketInfo['update_message'],
                    'sender_name' => 'Manager',
                    'ticket_id' => $ticket->id,
                    'priority' => $ticket->priority?$ticket->priority->name:null,
                    'status' => $ticket->status?$ticket->status->name:null,
                    'department' => $ticket->department?$ticket->department->name:null,
                    'category' => $ticket->category?$ticket->category->name:null,
                    'uid' => $ticket->uid,
                    'subject' => $ticket->subject,
                    'type' => $ticket->ticketType ? $ticket->ticketType->name: '',
                ];
                $this->prepareMessage($template, $variables, $ticket, $ticket->user->email);
                if(!empty($ticket->assignedTo)){
                    $variables['name'] = $ticket->assignedTo->first_name;
                    $variables['email'] = $ticket->assignedTo->email;
                    $this->prepareMessage($template, $variables, $ticket, $ticket->assignedTo->email);
                }
            }
        }
    }

    private function prepareMessage($template, $variables, $ticket, $email){
        if (preg_match_all("/{(.*?)}/", $template, $m)) {
            foreach ($m[1] as $i => $varname) {
                $template = str_replace($m[0][$i], sprintf($variables[$m[1][$i]], $varname), $template);
            }
        }
        $messageData = ['html' => $template, 'subject' => '[Ticket#'.$ticket->uid.'] - '.$variables['update_message']];
        if(config('queue.enable')){
            Mail::to($email)->queue(new SendMailFromHtml($messageData));
        }else{
            Mail::to($email)->send(new SendMailFromHtml($messageData));
        }
    }
}
