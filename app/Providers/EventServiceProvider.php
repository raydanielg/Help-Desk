<?php

namespace App\Providers;

use App\Events\AssignedUser;
use App\Events\CommentAdded;
use App\Events\ForgotPassword;
use App\Events\SendMail;
use App\Events\TicketAdded;
use App\Events\TicketCreated;
use App\Events\TicketNewComment;
use App\Events\TicketUpdated;
use App\Events\UserCreated;
use App\Listeners\CommentAddedNotification;
use App\Listeners\SendAssignedUserNotification;
use App\Listeners\SendForgotPasswordNotification;
use App\Listeners\SendMailNotification;
use App\Listeners\SendTicketNewCommentNotification;
use App\Listeners\SendTicketUpdatedNotification;
use App\Listeners\TicketAddingOption;
use App\Listeners\TicketCreatedNotification;
use App\Listeners\UserCreatedNotification;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        'App\Events\NewChatMessage' => [
            'App\Listeners\SendChatMessageNotification'
        ],
        TicketAdded::class => [
            TicketAddingOption::class
        ],
        TicketCreated::class => [
            TicketCreatedNotification::class
        ],
        AssignedUser::class => [
            SendAssignedUserNotification::class
        ],
        TicketUpdated::class => [
            SendTicketUpdatedNotification::class
        ],
        TicketNewComment::class => [
            SendTicketNewCommentNotification::class
        ],
        UserCreated::class => [
            UserCreatedNotification::class
        ],
        ForgotPassword::class => [
            SendForgotPasswordNotification::class
        ],
        SendMail::class => [
            SendMailNotification::class
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
