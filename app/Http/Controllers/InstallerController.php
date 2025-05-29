<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InstallerController extends Controller
{
    public function welcome() {
        return view('vendor.installer.welcome');
    }
}
