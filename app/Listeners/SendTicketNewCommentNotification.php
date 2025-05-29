<?php

namespace App\Listeners;

use App\Events\TicketNewComment;
use App\Mail\SendMailFromHtml;
use App\Models\EmailTemplate;
use App\Models\Ticket;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendTicketNewCommentNotification
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
     * @param  \App\Events\TicketNewComment  $event
     * @return void
     */
    public function handle(TicketNewComment $event) {
        $data = $event->data;
        $ticket = Ticket::where('id', $data['ticket_id'])->with(['user','assignedTo','comments'])->first();
        $notifications = app('App\HelpDesk')->getSettingsEmailNotifications();
        if(!empty($ticket) && $notifications['first_comment']){
            $template = EmailTemplate::where('slug', 'ticket_new_comment')->first();
            if(!empty($template)){
                $template = $template->html;
                $variables = [
                    'name' => $ticket->user?$ticket->user->first_name:'',
                    'email' => $ticket->user?$ticket->user->email:'',
                    'comment' => $data['comment'],
                    'url' => config('app.url').'/dashboard/tickets/'.$ticket->uid,
                    'sender_name' => 'Manager',
                    'uid' => $ticket->uid,
                ];
                if(!empty($variables['email'])){
                    $this->prepareMessage($template, $variables, $ticket, $ticket->user->email);
                }
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
        $messageData = ['html' => $template, 'subject' => '[Ticket#'.$ticket->uid.'] - A new comment'];
        if(config('queue.enable')){
            Mail::to($email)->queue(new SendMailFromHtml($messageData));
        }else{
            Mail::to($email)->send(new SendMailFromHtml($messageData));
        }
    }
}
