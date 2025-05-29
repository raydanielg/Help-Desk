<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfCustomer;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\Blog;
use App\Models\Type;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BlogController extends Controller{

    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':blog');
    }

    public function index(){
        return Inertia::render('Blogs/Index', [
            'title' => 'All Posts',
            'filters' => Request::all('search'),
            'posts' => Blog::orderBy('title')
                ->filter(Request::only('search'))
                ->paginate(10)
                ->withQueryString()
                ->through(function ($post) {
                    return [
                        'id' => $post->id,
                        'title' => $post->title,
                        'isActive' => $post->is_active?'Yes':'No',
                        'type' => $post->type?$post->type->name:'',
                        'typeId' => $post->type_id,
                        'image' => $post->image,
                        'details' => $post->details,
                        'updated_at' => $post->updated_at,
                        'created_at' => $post->created_at,
                    ];
                } ),
        ]);
    }

    public function create() {
        return Inertia::render('Blogs/Create',[
            'title' => 'Create a new post',
            'types' => Type::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function store() {
        $userRequest = Request::validate([
            'title' => ['required', 'max:150'],
            'is_active' => ['nullable'],
            'author_id' => ['nullable'],
            'type_id' => ['nullable'],
            'image' => ['nullable'],
            'details' => ['required']
        ]);

        $userRequest['author_id'] = Auth()->id();

        if(Request::file('image')){
            $userRequest['image'] = '/files/'.Request::file('image')->store('posts', ['disk' => 'file_uploads']);
        }

        Blog::create($userRequest);

        return Redirect::route('posts')->with('success', 'Post created.');
    }

    public function edit(Blog $post)
    {
        return Inertia::render('Blogs/Edit', [
            'title' => $post->title,
            'post' => [
                'id' => $post->id,
                'title' => $post->title,
                'is_active' => $post->is_active,
                'type_id' => $post->type_id,
                'image' => $post->image,
                'details' => $post->details,
                'updated_at' => $post->updated_at,
                'created_at' => $post->created_at,
            ],
            'types' => Type::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function update(Blog $post)
    {
        $userRequest = Request::validate([
            'title' => ['required', 'max:150'],
            'is_active' => ['nullable'],
            'type_id' => ['nullable'],
            'details' => ['required']
        ]);

        if(Request::file('image')){

            if(isset($post->image) && !empty($post->image) && File::exists(public_path($post->image))){
                File::delete(public_path($post->image));
            }
            $userRequest['image'] = '/files/'.Request::file('image')->store('posts', ['disk' => 'file_uploads']);
        }

        $post->update($userRequest);

        return Redirect::route('posts')->with('success', 'Post updated.');
    }

    public function destroy(Blog $post)
    {
        $post->delete();
        return Redirect::route('posts')->with('success', 'Post deleted.');
    }
}
