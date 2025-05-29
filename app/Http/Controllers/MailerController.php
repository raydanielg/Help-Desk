<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MailerController extends Controller {
    //

    public function email() {
        return view("email");
    }

    private function getBody($ticket, $messageData, $footer){
        $ticketObject = [
            'Ticket' => $ticket->uid,
            'Subject' => $ticket->subject,
            'Priority' => $ticket->priority? $ticket->priority->name : null,
            'Status' => $ticket->status? $ticket->status->name: null,
            'Type' => $ticket->ticketType ? $ticket->ticketType->name : null,
            'Category' => $ticket->category ? $ticket->category->name : null,
            'Client' => $ticket->client? $ticket->client->first_name.' '.$ticket->client->last_name: null,
            'Department' => $ticket->department? $ticket->department->name : null,
            'Assigned' => $ticket->assignedTo ? $ticket->assignedTo->first_name.' '.$ticket->assignedTo->last_name : null,
            'Details' => $ticket->details,
        ];

        $ticketDetails = '<table style="width:100%" role="presentation">';
        foreach ($ticketObject as $kTicket => $vTicket){
            $ticketDetails.='<tr>';
            $ticketDetails.='<th>'.__($kTicket).'</th>';
            $ticketDetails.='<td>'.$vTicket.'</td>';
            $ticketDetails.='</tr>';
        }
        $ticketDetails .= '</table>';

        $html = "<!doctype html>
  <head>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <title>".$messageData['subject']."</title>
    <style>
                    table, th, td {
                      border: 1px solid black;
                      border-collapse: collapse;
                    }
                    th, td {
                      padding: 5px;
                      text-align: left;
                    }
                    </style></head><body style='background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'>
                    <span class='preheader' style='color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;'>".$messageData['subject']."</span>
                    <p>親愛的 ".$ticketObject['Client']."</p>
                    <p>以下為你所輸入之支援內容:</p>";

        if($messageData['type'] == 'change_status'){

            $html .= "<p>The ticket status has been changed to ".$ticketObject['Status']."</p>";
            $html .= "<p>馬上查看</p>";

        }elseif($messageData['type'] == 'response'){

            $html .="<p>您好, 我們的支援人員已回覆你的支援, 以下為支援人員之回覆</p>";
            $html .= "<p>".$messageData['value']."</p>";
            $html .= "<p>馬上查看</p>";

        }else{

            $html.= $ticketDetails ;
            $html.="<p>馬上檢視/更新你的內容</p>";

        }

        $html.="<p>".$footer."</p>
                </body></html>";

        return $html;
    }

    private function getMessageBody($messageData){
        $html = "<!doctype html>
  <head>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <title>".$messageData['subject']."</title>
    <style>
                    table, th, td {
                      border: 1px solid black;
                      border-collapse: collapse;
                    }
                    th, td {
                      padding: 5px;
                      text-align: left;
                    }
                    </style></head><body style='background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'>
                    <span class='preheader' style='color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;'>".$messageData['subject']."</span>
                    <p>親愛的 ".$messageData['name']."</p>";

        $html.= $messageData['html'] ;

        $html.="<p>".$messageData['footer']."</p>
                </body></html>";

        return $html;
    }

    public function composeTicket($id, $type = null, $value = null){
        $ticket = Ticket::where('id', $id)->first();
        $owner_name = config('app.owner_name');
        $owner_email = config('app.owner_email');
        $ticket_url = url("dashboard/tickets/{$ticket->id}/edit");
        $footer = "<p><a href='{$ticket_url}'>按此</a></p>";
        $messageData = [
            'subject' => '[Ticket#'.$ticket->uid.'] - 已為您產生一筆支援紀錄',
            'type' => $type,
            'value' => $value
        ];

        $messageData['message'] = $this->getBody($ticket, $messageData, $footer);

        if(!empty($type) && $type == 'test'){
            $messageData['to'] = ['email' => 'test-4094yu@experte-test.com', 'name' => 'Robin Hossain'];
            $this->compose($messageData);
            print_r('done!');
            exit;
        }

        if($ticket->client && $ticket->client->email){
            $messageData['to'] = ['email' => $ticket->client->email, 'name' => $ticket->client->first_name.' '.$ticket->client->last_name];
            if(!empty($type) && $type == 'close_ticket'){
                $footer = "<p>Please write a review to the <a href='{$ticket_url}'>ticket</a>!</p>";
                $messageData['message'] = $this->getBody($ticket, $messageData, $footer);
            }
            $this->compose($messageData);
        }

        if($ticket->assignedTo && $ticket->assignedTo->email){
            $messageData['to'] = ['email' => $ticket->assignedTo->email, 'name' => $ticket->assignedTo->first_name.' '.$ticket->assignedTo->last_name];
            $this->compose($messageData);
        }elseif(empty($type)){
            $messageData['to'] = ['email' => 'superadmin@s.gtrainers.org', 'name' => 'Super Admin'];
            $this->compose($messageData);
        }

        if(!empty($owner_email)){
            $messageData['to'] = ['email' => $owner_email, 'name' => null];
            if(!empty($owner_name)){
                $messageData['to']['name'] = $owner_name;
            }
            $this->compose($messageData);
        }

    }

    public function sendPasswordMail($id, $type = null, $value = null){
        $user = User::where('id', $id)->first();
        $owner_name = config('app.owner_name');
        $owner_email = config('app.owner_email');
        $login_url = url("/login");
        $messageData = [
            'subject' => 'Welcome - '.$user->first_name.' '.$user->last_name,
            'type' => $type,
            'value' => $value,
            'email' => $user->email,
            'name' => $user->first_name.' '.$user->last_name
        ];

        if($type == 'password'){
            $messageData['to'] = ['email' => $messageData['email'], 'name' => $messageData['name']];
            $messageData['footer'] = "<p>即可前往Help Desk <a href='{$login_url}'>按此</a> !</p>";
            $messageData['html'] = "<p>您已完成註冊囉！</p><p>以下是您的帳號與密碼：</p><p>帳號: {$user->email}, 密碼: {$value}</p>";
            $messageData['message'] = $this->getMessageBody($messageData);
            $this->compose($messageData);
        }

        if(!empty($owner_email)){
            $messageData['to'] = ['email' => $owner_email, 'name' => null];
            if(!empty($owner_name)){
                $messageData['to']['name'] = $owner_name;
            }
            $this->compose($messageData);
        }
    }

    public function compose($data) {
        require base_path("vendor/autoload.php");
        $mail = new PHPMailer(true);     // Passing `true` enables exceptions

        try {

            // Email server settings
            $mail->SMTPDebug = 0;
            $mail->CharSet = 'utf-8';
            $mail->Encoding = 'base64';
            $mail->isSMTP();
            $mail->Host = config('mail.mailers.smtp.host');             //  smtp host
            $mail->SMTPAuth = true;
            $mail->Username = config('mail.mailers.smtp.username');   //  sender username
            $mail->Password = config('mail.mailers.smtp.password');       // sender password
            $mail->SMTPSecure = 'tls';                  // encryption - ssl/tls
            $mail->Port = config('mail.mailers.smtp.port');                          // port - 587/465

            $mail->setFrom(config('mail.from.address'), config('mail.from.name'));
            $mail->addAddress($data['to']['email'], $data['to']['name']);
//            $mail->addCC($request->emailCc);
//            $mail->addBCC($request->emailBcc);

            $mail->addReplyTo(config('mail.from.address'), config('mail.from.name'));

            if(isset($_FILES['emailAttachments'])) {
                for ($i=0; $i < count($_FILES['emailAttachments']['tmp_name']); $i++) {
                    $mail->addAttachment($_FILES['emailAttachments']['tmp_name'][$i], $_FILES['emailAttachments']['name'][$i]);
                }
            }


            $mail->isHTML(true);                // Set email content format to HTML

            $mail->Subject = html_entity_decode($data['subject']);
            $mail->Body    = $data['message'];

            // $mail->AltBody = plain text version of email body;

            if( !$mail->send() ) {
                return response()->json(['error' => $mail->ErrorInfo, 'message' => 'Email not sent.', 'success' => false]);
            }

            else {
                return response()->json(['message' => 'Email has been sent.', 'success' => true]);
            }

        } catch (Exception $e) {
            return response()->json(['message' => 'Email not sent.', 'success' => false]);
        }
    }
}
