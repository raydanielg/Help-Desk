<?php

namespace App\Broadcasting;

use App\Models\User;
use App\Models\Contact;
use App\Models\Conversation;

class NewChatMessage
{
    /**
     * Create a new channel instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Authenticate the user's access to the channel.
     *
     * @param  \App\Models\User  $user
     * @return array|bool
     */
    public function join(User $user, Contact $contact, Conversation $conversation) {
        return true;
        //
    }
}
