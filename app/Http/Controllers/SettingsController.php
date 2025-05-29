<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfNotParmittedMultiple;
use App\Models\Language;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;

class SettingsController extends Controller {
    public function __construct(){
        $this->middleware(RedirectIfNotParmittedMultiple::class.':global,smtp,pusher');
    }

    const BASE_URL = 'https://gitlab.com';
    const TOKEN = 'glpat-5qTxAqKbZdD--SLJrFzr';
    const PROJECT_ID = '44441130';
    const TOKEN_FULL = 'Bearer glpat-5vwciPyLT6WSuMK7_zJr';

    public function systemUpdate() {
        $env = DotenvEditor::load();
        $demo = config('app.demo');
        return Inertia::render('Settings/Update', [
            'title' => 'System Update',
            'current_version' => $env->getValue('VERSION'),
            'demo' => boolval($demo),
        ]);
    }

    public function systemUpdateCheck()
    {
        $env = DotenvEditor::load();
        $current_tag = $env->getValue('VERSION');
        $new_tag = $this->getVersionAvailable($current_tag);
        $diffs = [];
        if($new_tag) {
            $headers = [
                'PRIVATE-TOKEN' => self::TOKEN,
            ];
            $res = Http::withHeaders($headers)->get(self::BASE_URL.'/api/v4/projects/'.self::PROJECT_ID.'/repository/compare?from='.$current_tag.'&to='.$new_tag);
            $json = $res->json();
            $diffs = $json['diffs'];
        }
        return response()->json(['files'=> $diffs, 'version' => $new_tag]);
    }

    protected function getVersionAvailable($current){
        $headers = [
            'PRIVATE-TOKEN' => self::TOKEN,
        ];
        $response = Http::withHeaders($headers)->get(self::BASE_URL.'/api/v4/projects/'.self::PROJECT_ID.'/repository/tags');
        $releaseCollection = collect(\json_decode($response->body()));
        $tag = $releaseCollection->first();
        if(!empty($tag)){
            if (version_compare($current, $tag->name, '<')) {
                return $tag->name;
            }
        }
        return false;
    }

    private function configExist($array){
        $hasValue = true;
        $envLoad = DotenvEditor::load();
        $keys = $envLoad->getKeys($array);
        foreach ($keys as $key){
            if(!$key['value']){
                $hasValue = false;
                break;
            }
        }
        return $hasValue;
    }

    public function index(){
        $pusher_setup = $this->configExist(['PUSHER_APP_ID','PUSHER_APP_KEY','PUSHER_APP_SECRET']);
        $piping_setup = $this->configExist(['IMAP_HOST','IMAP_PORT','IMAP_PROTOCOL','IMAP_ENCRYPTION','IMAP_USERNAME','IMAP_PASSWORD']);
        $settings = Setting::orderBy('id')->get();
        $settingData = [];
        foreach ($settings as $setting){
            $settingData[$setting['slug']] = ['id' => $setting->id, 'name' => $setting->name, 'slug' => $setting->slug, 'type' => $setting->type, 'value' => $setting->value];
            if($setting->type === 'json'){
                $settingData[$setting['slug']]['value'] = $setting->value? json_decode($setting->value, true): null;
            }
        }
        $customCss = File::get(public_path('css/custom.css'));
        $settingData['custom_css'] = ['slug' => 'custom_css', 'name' => 'Custom CSS', 'value' => $customCss];
        $env = DotenvEditor::load();
        $site_key = $env->keyExists('RE_CAPTCHA_KEY')?$env->getValue('RE_CAPTCHA_KEY'):'';
        return Inertia::render('Settings/Index', [
            'title' => 'Global Settings',
            'site_key' => $site_key,
            'settings' => $settingData,
            'pusher' => $pusher_setup,
            'piping' => $piping_setup,
            'languages' => Language::orderBy('name')
                ->get()
                ->map
                ->only('code', 'name'),
            'users' => User::orderBy('first_name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function update(){
        $requests = Request::all();

        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Updating global settings are not allowed for the live demo.');
        }

        if(!empty($requests['custom_css'])){
            Storage::disk('public_path')->put('css/custom.css', $requests['custom_css']);
        }

        if(!empty($requests['site_key'])){
            $env = DotenvEditor::load();
            $env->setKey('RE_CAPTCHA_KEY', $requests['site_key']);
            $env->save();
        }
        array_splice($requests, array_search($requests['custom_css'], array_values($requests)), 1);
        $jsonFields = ['hide_ticket_fields', 'required_ticket_fields'];


        foreach ($requests as $requestKey => $requestValue){
            $setting = Setting::where('slug', $requestKey)->first();
            if(isset($setting)){
                if($setting->type == 'json'){
                    if(!in_array($setting->slug, $jsonFields)) {
                        foreach ($requestValue as &$rv) {
                            $rv['value'] = (bool)$rv['value'];
                        }
                    }
                    $setting->value = json_encode($requestValue);
                }else{
                    $setting->value = $requestValue;
                }
                $setting->save();
            }else{
                Setting::create([
                    'slug' => $requestKey,
                    'name' => ucfirst(str_replace('_', ' ', $requestKey)),
                    'type' => in_array($requestKey, $jsonFields)? 'json' : 'text',
                    'value' => in_array($requestKey, $jsonFields)? json_encode($requestValue) : $requestValue,
                ]);
            }
        }

        if(Request::file('logo') && !empty(Request::file('logo'))){
            Request::file('logo')->storeAs('/', 'logo.png', ['disk' => 'image']);
        }

        if(Request::file('logo_white') && !empty(Request::file('logo_white'))){
            Request::file('logo_white')->storeAs('/', 'logo_white.png', ['disk' => 'image']);
        }

        if(Request::file('favicon')){
            Request::file('favicon')->storeAs('/', 'favicon.png', ['disk' => 'public_path']);
        }

        if(Request::file('logo') || Request::file('logo_white') || Request::file('favicon')){
            Artisan::call('cache:clear');
        }

        if(!empty($requests['default_language'])){
            /*
            $user = Auth::user();
            $user->locale = $requests['default_language'];
            $user->save();
             */
            User::whereNotNull('locale')->update(['locale' => $requests['default_language']]);
        }

        return Redirect::back()->with('success', 'Settings updated.');
    }

    public function smtp(){
        $demo = config('app.demo');
        $env = DotenvEditor::load();
        $keys = $env->getKeys(['MAIL_HOST','MAIL_PORT','MAIL_USERNAME','MAIL_PASSWORD','MAIL_ENCRYPTION','MAIL_FROM_ADDRESS','MAIL_FROM_NAME']);
        return Inertia::render('Settings/Smtp', [
            'title' => 'SMTP Settings',
            'keys' => $keys,
            'demo' => boolval($demo),
        ]);
    }

    public function updateSmtp(){
        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Updating pusher setup is not allowed for the live demo.');
        }

        $mailVariables = Request::validate([
            'MAIL_HOST' => ['required'],
            'MAIL_PORT' => ['required'],
            'MAIL_USERNAME' => ['required'],
            'MAIL_PASSWORD' => ['required'],
            'MAIL_ENCRYPTION' => ['required'],
            'MAIL_FROM_ADDRESS' => ['nullable', 'email'],
            'MAIL_FROM_NAME' => ['nullable'],
        ]);
        $this->setEnvVariables($mailVariables);
        return Redirect::back()->with('success', 'SMTP configuration updated!');
    }

    public function updatePusher(){

        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Updating pusher setup is not allowed for the live demo.');
        }

        $mailVariables = Request::validate([
            'PUSHER_APP_ID' => ['required'],
            'PUSHER_APP_KEY' => ['required'],
            'PUSHER_APP_SECRET' => ['required'],
            'PUSHER_APP_CLUSTER' => ['required']
        ]);

        $this->setEnvVariables($mailVariables);
        $this->setEnvVariableToJsFile();

        return Redirect::back()->with('success', 'Pusher configuration updated!');
    }

    private function setEnvVariableToJsFile(){
        $env = DotenvEditor::load();
        $pusherAppKey = $env->getKey('PUSHER_APP_KEY');
        $pusherAppCluster = $env->getKey('PUSHER_APP_CLUSTER');

        $jsFile = File::get(public_path('js/app.js'));
        $linePosition = strrpos($jsFile, 'broadcaster:"pusher",key:');
        if($linePosition){
            $pusherKey = substr($jsFile, $linePosition + 26, 20);
            $cluster = substr($jsFile, $linePosition + 57, 3);

            if(strlen($pusherKey) == 20){
                $jsFile = str_replace($pusherKey, $pusherAppKey['value'], $jsFile);
            }

            if(strlen($cluster) == 3){
                $jsFile = str_replace($cluster, $pusherAppCluster['value'], $jsFile);
            }

            File::delete(public_path('js/app.js'));

            Storage::disk('public_path')->put('js/app.js', $jsFile);
        }
    }

    private function setEnvVariables($data) {
        $env = DotenvEditor::load();
        foreach ($data as $data_key => $data_value){
            $env->setKey($data_key, $data_value);
        }
        $env->save();
    }

    public function pusher(){
        $env = DotenvEditor::load();
        $keys = $env->getKeys(['PUSHER_APP_ID','PUSHER_APP_KEY','PUSHER_APP_SECRET','PUSHER_APP_CLUSTER']);

        if (config('app.demo')) {
            $keys['PUSHER_APP_ID']['value'] = '*******';
            $keys['PUSHER_APP_KEY']['value'] = '*********************';
            $keys['PUSHER_APP_SECRET']['value'] = '********************';
        }

        return Inertia::render('Settings/Pusher', [
            'title' => 'Pusher Settings',
            'keys' => $keys,
        ]);
    }

    public function piping(){
        $env = DotenvEditor::load();
        $keys = $env->getKeys(['IMAP_HOST','IMAP_PORT','IMAP_PROTOCOL','IMAP_ENCRYPTION','IMAP_USERNAME','IMAP_PASSWORD']);
        $setting = Setting::where('slug', 'enable_options')->first();
        $options = $setting->value? json_decode($setting->value, true): null;
        $key = array_search('enable_piping', array_column($options, 'slug'));
        $option = $options[$key];
        $demoMode = !!config('app.demo');

        if ($demoMode) {
            $keys['IMAP_HOST']['value'] = '*********************';
            $keys['IMAP_PORT']['value'] = '*********************';
            $keys['IMAP_PROTOCOL']['value'] = '********************';
            $keys['IMAP_ENCRYPTION']['value'] = '********************';
            $keys['IMAP_USERNAME']['value'] = '********************';
            $keys['IMAP_PASSWORD']['value'] = '********************';
        }

        return Inertia::render('Settings/Piping', [
            'title' => 'Email Piping Settings',
            'keys' => $keys,
            'option' => $option,
            'demo' => $demoMode,
        ]);
    }

    public function updatePiping(){

        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Updating piping setup is not allowed for the live demo.');
        }

        if(!empty(Request::input('enable_piping'))){
            $pipingObject = Request::input('enable_piping');
            $setting = Setting::where('slug', 'enable_options')->first();
            $options = $setting->value? json_decode($setting->value, true): null;
            $key = array_search('enable_piping', array_column($options, 'slug'));
            $options[$key]['value'] = $pipingObject['value'];
            $setting->value = json_encode($options);
            $setting->save();
        }

        $pipingVariables = Request::validate([
            'IMAP_HOST' => ['required'],
            'IMAP_PORT' => ['required'],
            'IMAP_PROTOCOL' => ['required'],
            'IMAP_ENCRYPTION' => ['required'],
            'IMAP_USERNAME' => ['required'],
            'IMAP_PASSWORD' => ['required'],
        ]);

        $this->setEnvVariables($pipingVariables);

        return Redirect::back()->with('success', 'Piping settings are updated!');
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
}
