<?php

namespace App\Listeners;

use App\Events\ContactMessage;
use App\Mail\SendMailFromHtml;
use App\Models\EmailTemplate;
use App\Models\FrontPage;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class ContactMessageNotification
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
     * @param  \App\Events\ContactMessage  $event
     * @return void
     */
    public function handle(ContactMessage $event) {
        $data = $event->data;
        $email = $data['email'];
        $name = $data['name'];
        $phone = $data['phone'];
        $message = $data['message'];
        $res_user = User::where('role_id', 1)->first();
        $contactPage = FrontPage::where('slug', 'contact')->first();


        if(!empty($contactPage)){
            $contactHtml = json_decode($contactPage->html, true);
            if(isset($contactHtml['contact_recipient']) && !empty($contactHtml['contact_recipient'])){
                $res_email = $contactHtml['contact_recipient'];
            }elseif(!empty($contactHtml['email'])){
                $res_email = $contactHtml['email'];
            }else{
                $res_email = $res_user->email;
            }


            $appName = Setting::where('slug', 'app_name')->first();
            $res_name = $appName?$appName->name:'Pro Schedule';
        }else{
            $res_email = $res_user->email;
            $res_name = $res_user->first_name;
        }

        $template = EmailTemplate::where('slug', 'custom_mail')->first();
        if(!empty($template)){
            $template = $template->html;
            $variables = [
                'name' => $res_name,
                'to' => $res_email,
                'subject' => 'A new message from the Contact Page',
                'sender_name' => $name
            ];

            $variables['body'] = 'Send From: '.$email;
            $variables['body'].= '<br><br>Phone: '.$phone;
            $variables['body'].= '<br><br>Message: '.$message;

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
