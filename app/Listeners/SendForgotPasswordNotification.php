<?php

namespace App\Listeners;

use App\Events\ForgotPassword;
use App\Mail\SendMailFromHtml;
use App\Models\EmailTemplate;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

class SendForgotPasswordNotification
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
     * @param  \App\Events\ForgotPassword  $event
     * @return void
     */
    public function handle(ForgotPassword $event) {
        $data = $event->data;
        $email = $data['email'];
        $user = User::where('email', $email)->first();

        if(!empty($user) && !empty($data['token'])){
            $template = EmailTemplate::where('slug', 'custom_mail')->first();
            if(!empty($template)){
                $template = $template->html;
                $variables = [
                    'name' => $user->first_name,
                    'to' => $user->email,
                    'subject' => 'Reset Password Link',
                    'sender_name' => 'Support'
                ];

                $resetPasswordLink = route('password.reset.token', $data['token']);
                $variables['body'] = '<p>You can reset password from bellow link:</p>';
                $variables['body'].= "<p><a href='$resetPasswordLink'>Reset Password</a></p>";

                if (preg_match_all("/{(.*?)}/", $template, $m)) {
                    foreach ($m[1] as $i => $varname) {
                        $template = str_replace($m[0][$i], sprintf($variables[$m[1][$i]], $varname), $template);
                    }
                }
                $messageData = ['html' => $template, 'subject' => $variables['subject']];
                if(config('queue.enable')){
                    Mail::to($variables['to'])->queue(new SendMailFromHtml($messageData));
                }else{
                    Mail::to($variables['to'])->send(new SendMailFromHtml($messageData));
                }
            }
        }
    }
}
