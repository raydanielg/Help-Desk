<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Redirect;

class RedirectToInstallerIfNotInstalled
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (! config('app.installed') && ! $request->is(['install', 'install/*', 'update', 'update/*'])) {
            return Redirect::to('/install');
        }
        return $next($request);
    }
}
