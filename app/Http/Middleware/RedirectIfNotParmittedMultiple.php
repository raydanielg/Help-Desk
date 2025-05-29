<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotParmittedMultiple{
    public function handle(Request $request, Closure $next, ...$pages) {
        $access = Auth::user()->access;
        foreach ($pages as $page){
            if (!($access[$page]['read'] || $access[$page]['update'] || $access[$page]['create'] || $access[$page]['delete'])) {
                return redirect()->route('dashboard');
            }
        }
        return $next($request);
    }
}
