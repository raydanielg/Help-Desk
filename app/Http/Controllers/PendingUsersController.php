<?php

namespace App\Http\Controllers;

use App\Models\PendingEmail;
use App\Models\PendingUser;
use App\Models\Role;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class PendingUsersController extends Controller {
    //
    public function index(){
        return Inertia::render('PendingUsers/Index', [
            'title' => 'Pending users',
            'filters' => \Illuminate\Support\Facades\Request::all('search'),
            'users' => PendingUser::orderBy('created_at', 'desc')
                ->filter(Request::only('search'))
                ->get()
                ->transform(fn ($user) => [
                    'id' => $user->id,
                    'first_name' => $user->first_name,
                    'last_name' => $user->last_name,
                    'email' => $user->email,
                    'phone' => $user->phone,
                    'address' => $user->address,
                    'country' => $user->country_id ? $user->country->name: null,
                    'city' => $user->city,
                    'created_at' => $user->created_at,
                ]),
        ]);
    }

    public function active($id){

        $responseData = [];
        try {
            $pendingUser = PendingUser::where('id', $id)->first();
            $plain_password = $this->genRendomPassword();
            $customerRole = Role::where('slug', 'customer')->first();
            $user = User::create([
                'first_name' => $pendingUser->first_name,
                'last_name' => $pendingUser->last_name,
                'phone' => $pendingUser->phone,
                'email' => $pendingUser->email,
                'password' => $plain_password,
                'address' => $pendingUser->address,
                'country_id' => $pendingUser->country_id,
                'city' => $pendingUser->city,
                'role' => $customerRole ? $customerRole->id: null,
            ]);
            $responseData['success'] = true;
            $responseData['user'] = $user;

            $this->sendMailCron($user->id, 'password', $plain_password);

        }catch (\Throwable $e){
            $responseData['error'] = $e;
        }
        $pendingUser->delete();
        return response()->json($responseData);
    }

    public function decline($id){
        $pendingUser = PendingUser::where('id', $id)->first();
        if(!empty($pendingUser)){
            $pendingUser->delete();
            return response()->json(['message' => 'Request has been declined!']);
        }
    }

    private function genRendomPassword() {
        $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 13; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return implode($pass); //turn the array into a string
    }

    private function sendMailCron($id, $type = null, $value = null){
        PendingEmail::create(['user_id' => $id, 'type' => $type, 'value' => $value]);
    }

}
