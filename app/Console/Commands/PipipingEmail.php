<?php

namespace App\Console\Commands;

use App\Models\Attachment;
use App\Models\Role;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Webklex\IMAP\Facades\Client;

class PipipingEmail extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:piping_email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Email to tickets';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle() {
        $client = Client::account('default');
        $client->connect();
        $folders = $client->getFolders();
        foreach($folders as $folder){
            $allMessages = $folder->messages()->all()->whereUnseen()->get();
            foreach($allMessages as $message){
                $from = $message->getFrom();

                $fromData = $from[0];
                $user = User::where('email', $fromData->mail)->first();
                if(empty($user)){
                    $role = Role::where('slug', 'customer')->first();
                    $name = $this->split_name($fromData->personal);
                    $user = User::create(['email' => $fromData->mail, 'password' => 'secret', 'role_id' => !empty($role) ? $role->id : 5, 'first_name' => $name[0], 'last_name' => $name[1]]);
                }

                $subject = $message->getSubject();
                $body = $message->getHTMLBody();
                $messageIdObj = $message->getMessageId();
                $messageId = null;
                if(!empty($messageIdObj) && isset($messageIdObj[0])){
                    $messageId = $messageIdObj[0];
                }
                if(!empty($messageId)){
                    $ticket = Ticket::factory()->create([
                        'subject' => $subject,
                        'details' => $body,
                        'user_id' => $user->id,
                        'open' => date('Y-m-d H:i:s'),
                        'response' => null,
                        'due' => null,
                    ]);
                    $message->getAttachments()->each(function ($attachment) use ($message, $ticket, $user) {
                        $origin_name = $message->getMessageId() . $attachment->name;
                        $public_path = public_path('files/tickets/') . $origin_name;
                        $fp = fopen($public_path,"wb");
                        file_put_contents($public_path, $attachment->content);
                        fclose($fp);
                        $file_path = 'tickets/'.$origin_name;
                        Attachment::create(['ticket_id' => $ticket->id, 'name' => $attachment->name, 'size' => $attachment->size, 'path' => $file_path, 'user_id' => $user->id]);
                    });
                    $message->setFlag('SEEN');
                }
            }
        }

        dd('done!');
    }


    private function split_name($name) {
        $name = trim($name);
        $last_name = (strpos($name, ' ') === false) ? '' : preg_replace('#.*\s([\w-]*)$#', '$1', $name);
        $first_name = trim( preg_replace('#'.preg_quote($last_name,'#').'#', '', $name ) );
        return array($first_name, $last_name);
    }
}
