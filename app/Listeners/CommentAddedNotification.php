<?php

namespace App\Listeners;

use App\Events\CommentAdded;
use App\Models\Comment;
use App\Models\Ticket;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CommentAddedNotification
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
     * @param  \App\Events\CommentAdded  $event
     * @return void
     */
    public function handle(CommentAdded $event) {
        $commentId = $event->commentId;
        $comment = Comment::where('id', $commentId)->first();
        $ticket = Ticket::where('id', $comment->ticket_id)->with(['user',''])->first();
    }
}
