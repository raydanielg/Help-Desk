<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfNotAdmin;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\Category;
use App\Models\Department;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':category');
    }

    public function index()
    {
        return Inertia::render('Categories/Index', [
            'title' => 'Categories',
            'filters' => Request::all(['search']),
            'categories' => Category::filter(Request::all(['search']))
                ->paginate(100)
                ->withQueryString()
                ->through(function ($category) {
                    return [
                        'id' => $category->id,
                        'name' => $category->name,
                        'color' => $category->color,
                        'department_id' => $category->department_id,
                        'department' => $category->department_id && $category->department ? $category->department: null,
                        'parent' => $category->parent_id && $category->parent ? $category->parent: null,
                    ];
                } ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Categories/Create',[
            'categories' => Category::whereNull('parent_id')->get(),
            'departments' => Department::orderBy('name')->get(),
            'title' => 'Create a new category',
        ]);
    }

    public function store()
    {
        Category::create(
            Request::validate([
                'name' => ['required', 'max:100'],
                'color' => ['nullable', 'max:50'],
                'department_id' => ['nullable'],
                'parent_id' => ['nullable'],
            ])
        );

        return Redirect::route('categories')->with('success', 'Category created.');
    }

    public function edit(Category $category) {
        return Inertia::render('Categories/Edit', [
            'categories' => Category::whereNull('parent_id')->where('id', '!=', $category->id)->get(),
            'departments' => Department::orderBy('name')->get(),
            'title' => $category->name,
            'category' => [
                'id' => $category->id,
                'name' => $category->name,
                'department_id' => $category->department_id,
                'parent_id' => $category->parent_id,
                'color' => $category->color,
            ],
        ]);
    }

    public function update(Category $category)
    {
        $category->update(
            Request::validate([
                'name' => ['required', 'max:100'],
                'color' => ['nullable', 'max:50'],
                'department_id' => ['nullable'],
                'parent_id' => ['nullable'],
            ])
        );

        return Redirect::back()->with('success', 'Category updated.');
    }

    public function destroy(Category $category){
        $category->delete();
        return Redirect::route('categories')->with('success', 'Category deleted.');
    }

    public function restore(Category $category){
        $category->restore();
        return Redirect::back()->with('success', 'Category restored.');
    }
}
