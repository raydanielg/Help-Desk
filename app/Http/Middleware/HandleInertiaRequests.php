<?php

namespace App\Http\Middleware;

use App\Models\FrontPage;
use App\Models\Language;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    private function getSettings()
    {
        try {
            // Check if the database connection is working
            \DB::connection()->getPdo();

            // Fetch settings only if the database is available
            return cache()->remember('settings', now()->addMinutes(60), function () {
                return Setting::pluck('value', 'slug')->toArray();
            });

        } catch (\Exception $e) {
            // If database is not connected, return an empty array
            return [];
        }
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request) {
        return array_merge(parent::share($request), [
            'auth' => function () use ($request) {
                return [
                    'user' => $request->user() ? [
                        'id' => $request->user()->id,
                        'first_name' => $request->user()->first_name,
                        'last_name' => $request->user()->last_name,
                        'email' => $request->user()->email,
                        'city' => $request->user()->city,
                        'locale' => $request->user()->locale,
                        'country_id' => $request->user()->country_id,
                        'role' => $request->user()->role ?? ['slug' => 'na', 'name' => 'Not Assigned'],
                        'access' => $request->user()->access,
                        'photo' => $request->user()->photo_path ?? null,
                    ] : null,
                ];
            },
            'settings' => $this->getSettings(),
            'enable_options' => !$request->is(['install', 'install/*', 'update', 'update/*'])?Setting::where('slug','enable_options')->first():null,
            'languages' => !$request->is(['install', 'install/*', 'update', 'update/*'])?Language::get():null,
            'footer' => !$request->is(['install', 'install/*', 'update', 'update/*']) && !$request->is('dashboard/*')?FrontPage::where('slug', 'footer')->first():null,
            'flash' => function () use ($request) {
                return [
                    'success' => $request->session()->get('success'),
                    'error' => $request->session()->get('error'),
                ];
            },
        ]);
    }

}
