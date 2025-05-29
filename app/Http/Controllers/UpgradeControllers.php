<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class UpgradeControllers extends Controller
{
    //

    public function db(){
        Artisan::call('migrate', [ '--force' => true ]);
        Artisan::call('optimize');
        Artisan::call('cache:clear');
        Artisan::call('route:cache');
        Artisan::call('view:clear');
        Artisan::call('config:cache');
        Artisan::call('clear-compiled');
        dd('done');
    }
}
