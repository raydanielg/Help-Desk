<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfNotAdmin;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\EmailTemplate;
use App\Models\Language;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class LanguagesController extends Controller {
    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':language');
    }

    public function index(){
        return Inertia::render('Languages/Index', [
            'title' => 'Languages',
            'filters' => Request::all('search'),
        ]);
    }

    public function create() {
        return Inertia::render('Languages/Create',[
            'title' => 'Add a new language',
        ]);
    }

    public function store() {
        $data = Request::validate([
            'name' => ['required', 'max:50'],
            'code' => ['required', 'max:3'],
        ]);
        File::put(language_path($data['code'].'.json'), \json_encode([]));
        Language::create($data);

        return Redirect::route('languages')->with('success', 'Language created.');
    }

    public function delete($language){
        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Deleting language is not allowed for the live demo.');
        }
        $language = Language::where('id', $language)->first();
        if(!empty($language)){
            if(File::exists(language_path($language->code.'.json'))){
                File::delete(language_path($language->code.'.json'));
            }
            $language->delete();
            return Redirect::back()->with('success', 'Language deleted!');
        }else{
            return Redirect::back()->with('error', 'Can not delete the language!');
        }
    }

    public function newItem(){
        $languageItems = Request::input('new_data');
        $origin = $languageItems['en'];
        foreach ($languageItems as $languageItemKey => $languageItemValue){
            $language_file = language_path($languageItemKey . '.json');
            $decoded_file = json_decode(file_get_contents($language_file), true);
            $decoded_file[$origin] = $languageItemValue;
            file_put_contents($language_file, json_encode($decoded_file, JSON_UNESCAPED_UNICODE));
        }
        return Redirect::back()->with('success', 'Language data added!');
    }

    public function deleteItem($value){
        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Deleting language is not allowed for the live demo.');
        }elseif($value == 'en'){
            return Redirect::back()->with('error', 'You can not delete the default(english) language.');
        }
        $languageItems = Language::get();
        foreach ($languageItems as $languageItem){
            $language_file = language_path($languageItem->code . '.json');
            $decoded_file = json_decode(file_get_contents($language_file), true);
            unset($decoded_file[$value]);
            file_put_contents($language_file, json_encode($decoded_file, JSON_UNESCAPED_UNICODE));
        }
        return Redirect::back()->with('success', 'Language item has been deleted!');
    }

    public function edit(Language $language){
        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Updating language is not allowed for the live demo.');
        }
        $language_file = language_path($language->code . '.json');
        $decoded_file = json_decode(file_get_contents($language_file), true);
        $languageData = [];
        foreach ($decoded_file as $dfk => $dfv){
            $languageData[] = ['name' => $dfk, 'value' => $dfv];
        }
        return Inertia::render('Languages/Edit', [
            'title' => $language->name,
            'languages' => Language::get(),
            'language_data' => [
                'id' => $language->id,
                'name' => $language->name,
                'code' => $language->code,
                'data' => $languageData,
            ],
        ]);
    }

    public function update(Language $language) {
        $languageData = Request::input('language_values');

        $decodedData = [];
        foreach ($languageData as $dataValue){
            $decodedData[$dataValue['name']] = $dataValue['value'];
        }

        $languagePath = language_path($language->code . '.json');
        file_put_contents($languagePath, json_encode($decodedData, JSON_UNESCAPED_UNICODE));

        return Redirect::back()->with('success', 'Language data updated!');
    }

    public function newLanguageManually($code){
        $language_file = language_path($code . '.json');
        $decoded_file = json_decode(file_get_contents($language_file), true);
        print_r(implode(',', array_keys($decoded_file)));exit;
//        dd();
//        dd($decoded_file);
        $phpString = "";
        $languageData = [];
        $inc = 0;
        $phpStringArr = explode('||',$phpString);
        foreach ($decoded_file as $dfk => $dfv){
//            print_r($dfk);
//            echo "<br>";
//            echo "<br>";
//            $languageData[] = ['name' => $dfk, 'value' => $dfv];
            $languageData[$dfk] = $phpStringArr[$inc];
            $inc+=1;
        }
        file_put_contents($language_file, json_encode($languageData, JSON_UNESCAPED_UNICODE));
        dd($languageData);
        exit;
        return Inertia::render('Languages/Edit', [
            'title' => $language->name,
            'languages' => Language::get(),
            'language_data' => [
                'id' => $language->id,
                'name' => $language->name,
                'code' => $language->code,
                'data' => $languageData,
            ],
        ]);
    }
}
