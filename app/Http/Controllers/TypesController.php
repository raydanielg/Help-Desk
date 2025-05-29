<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfNotAdmin;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\Type;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class TypesController extends Controller
{
    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':type');
    }

    public function index(){
        return Inertia::render('Types/Index', [
            'title' => 'Ticket Types',
            'filters' => Request::all(['search']),
            'types' => Type::orderBy('name')
                ->filter(Request::all(['search']))
                ->paginate(10)
                ->withQueryString()
                ->through(function ($type) {
                    return [
                        'id' => $type->id,
                        'name' => $type->name,
                    ];
                } ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Types/Create',[
            'title' => 'Create a new type',
        ]);
    }

    public function store()
    {
        Type::create(
            Request::validate([
                'name' => ['required', 'max:100'],
            ])
        );

        return Redirect::route('types')->with('success', 'Type created.');
    }

    public function edit(Type $type)
    {
        return Inertia::render('Types/Edit', [
            'title' => $type->name,
            'type' => [
                'id' => $type->id,
                'name' => $type->name,
            ],
        ]);
    }

    public function update(Type $type)
    {
        $type->update(
            Request::validate([
                'name' => ['required', 'max:100'],
            ])
        );

        return Redirect::back()->with('success', 'Type updated.');
    }

    public function destroy(Type $type) {
        $type->delete();
        return Redirect::route('types')->with('success', 'Type deleted.');
    }

    public function restore(Type $type){
        $type->restore();
        return Redirect::back()->with('success', 'Department restored.');
    }
}
