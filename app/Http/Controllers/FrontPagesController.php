<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfNotAdmin;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\FrontPage;
use App\Models\Language;
use App\Models\Setting;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class FrontPagesController extends Controller {

    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':front_page');
    }

    public function page($slug){
        $page = FrontPage::where('slug', $slug)->first();
        $components = [
            'home' => 'FrontPages/Home',
            'contact' => 'FrontPages/Contact',
            'services' => 'FrontPages/Services',
            'privacy' => 'FrontPages/PrivacyPolicy',
            'terms' => 'FrontPages/TermsOfServices',
            'footer' => 'FrontPages/Footer',
        ];
        if(empty($components[$slug])){
            return abort(404);
        }
        return Inertia::render($components[$slug], [
            'title' => $page?$page->title:'',
            'page' => $page,
        ]);
    }

    public function update($slug){
        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Updating front pages are not allowed for the live demo.');
        }
        $requests = Request::validate([
            'title' => ['required'],
            'slug' => ['required', 'max:50'],
            'is_active' => ['nullable'],
            'html' => ['required']
        ]);
        $page = FrontPage::where('slug', $slug)->first();
        $page->update($requests);
        return Redirect::back()->with('success', $requests['title'].' updated.');
    }

    public function uploadImage(){
        $file_path = '';
        if(Request::hasFile('image')){
            $image = Request::file('image');
            $file_path = $image->store('pages', ['disk' => 'image']);
        }
        return response()->json(['image' => $file_path ?'/images/'.$file_path : '']);
    }
}
