<?php

namespace App\Http\Controllers;

use App\Mail\SendMailFromHtml;
use App\Models\Faq;
use App\Models\Role;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Schema;

class BackupController extends Controller {
    public function restore(){
//        if(!Schema::hasColumn('users', 'role_id')){
//            $this->role();
//        }

//        Artisan::call('optimize');
//        Artisan::call('cache:clear');
//        Artisan::call('route:cache');
//        Artisan::call('view:clear');
//        Artisan::call('config:cache');
//        Artisan::call('clear-compiled');


//        $role = Role::whereSlug('admin')->first();
//        $user = User::whereEmail('sapradeep123@gmail.com')->first();
//        if(!empty($user) && !empty($role)){
//            $user->role_id = $role->id;
//            $user->save();
//        }
        $tickets = Ticket::limit(100)->get();
        dd($tickets);
    }

    private function role(){
        $users = User::pluck('role', 'id')->all();
        Artisan::call('migrate');
        $this->import_sql('role');
        $userRoles = Role::pluck('id', 'slug')->all();
        foreach ($users as $k => $v){
            User::where('id', $k)->update(['role_id' => $userRoles[$v]]);
        }
    }

    private function import_sql($file) {
        $sql_path = base_path('database/backup/'.$file.'.sql');
        DB::unprepared(file_get_contents($sql_path));
    }

    public function testMail()
    {
        Mail::to('robinbdseo1@gmail.com')->send(new SendMailFromHtml(['html' => '<h1>Thank you for your email!</h1>','subject' => 'Thank you mail']));
    }

    public function clearCache($slug){
        // php artisan optimize && php artisan cache:clear && php artisan route:cache && php artisan view:clear && php artisan config:cache
        $slugArray = [
            'config' => 'config:cache', 'optimize' => 'optimize', 'cache' => 'cache:clear',
            'route' => 'route:cache', 'view' => 'view:clear'
        ];
        if(isset($slugArray[$slug])){
            Artisan::call($slugArray[$slug]);
        }elseif($slug == 'all'){
            Artisan::call('optimize');
            Artisan::call('cache:clear');
            Artisan::call('route:cache');
            Artisan::call('view:clear');
            Artisan::call('config:cache');
            Artisan::call('clear-compiled');
        }
        return response()->json(['success'=>true]);
    }

    public function fixUid()
    {
        $tickets = Ticket::limit(500)->get();
        foreach ($tickets as $ticket){
            $ticket->uid = app('App\HelpDesk')->getUniqueUid($ticket->id);
            $ticket->save();
        }
        dd('done!');
    }

    private function getUniqueUid($id)
    {
        do {
            $uid = random_int(100000, 909999)+(int) $id;
            $ticketByUid = Ticket::where('uid', $uid)->first();
        } while (!empty($ticketByUid));
        return $uid;
    }
}
