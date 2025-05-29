<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotParmitted{
    public function handle(Request $request, Closure $next, $page) {
        $access = Auth::user()->access;
        if (!($access[$page]['read'] || $access[$page]['update'] || $access[$page]['create'] || $access[$page]['delete'])) {
            return redirect()->route('dashboard');
        }
        return $next($request);
    }
}
