<?php

namespace App\Listeners;

use App\Events\TicketAdded;
use App\Mail\SendMailFromHtml;
use App\Mail\TicketAddedMessage;
use App\Models\Ticket;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class TicketAddingOption
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
     * @param  object  $event
     * @return void
     */
    public function handle(TicketAdded $event) {
        $ticket = Ticket::with(['user', 'status', 'contact', 'priority', 'department', 'category', 'assignedTo', 'ticketType', 'review'])->findOrFail($event->ticketId);
        if(config('queue.enable')){
            Mail::to($ticket->email)->queue(new TicketAddedMessage());
        }else{
            Mail::to($ticket->email)->send(new TicketAddedMessage());
        }
        //
    }
}
