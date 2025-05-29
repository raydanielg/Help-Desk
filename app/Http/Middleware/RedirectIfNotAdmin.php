<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotAdmin{
    public function handle(Request $request, Closure $next) {
        if (Auth::user()['role']['slug'] != 'admin') {
            return redirect()->route('dashboard');
        }
        return $next($request);
    }
}
