<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use League\Glide\ServerFactory;
use Illuminate\Contracts\Filesystem\Filesystem;
use League\Glide\Responses\LaravelResponseFactory;

class ImagesController extends Controller
{
    public function show(Filesystem $filesystem, Request $request, $path)
    {
        $server = ServerFactory::create([
            'response' => new LaravelResponseFactory($request),
            'source' => $filesystem->getDriver(),
            'cache' => $filesystem->getDriver(),
            'cache_path_prefix' => '.glide-cache',
        ]);

        return $server->getImageResponse($path, $request->all());
    }

    public function ckeImageUpload(Request $request){
        $file_url  = 'http://127.0.0.1:8000/images/logo.png';
        if($request->file('upload')){
            $file_url = '/files/'.$request->file('upload')->store('kb', ['disk' => 'file_uploads']);
        }

        return response()->json(['fileName' => 'okay', 'uploaded'=> 1, 'url' => $file_url]);
    }
}
