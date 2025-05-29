<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfNotAdmin;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\Priority;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class PrioritiesController extends Controller
{
    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':priority');
    }

    public function index(){
        return Inertia::render('Priorities/Index', [
            'title' => 'Priorities',
            'filters' => Request::all(['search']),
            'priorities' => Priority::orderBy('name')
                ->filter(Request::all(['search']))
                ->paginate(10)
                ->withQueryString()
                ->through(function ($priority) {
                    return [
                        'id' => $priority->id,
                        'name' => $priority->name,
                    ];
                } ),
        ]);
    }

    public function create(){
        return Inertia::render('Priorities/Create',[
            'title' => 'Create a new priority',
        ]);
    }

    public function store()
    {
        Priority::create(
            Request::validate([
                'name' => ['required', 'max:100'],
            ])
        );

        return Redirect::route('priorities')->with('success', 'Priority created.');
    }

    public function edit(Priority $priority)
    {
        return Inertia::render('Priorities/Edit', [
            'title' => $priority->name,
            'priority' => [
                'id' => $priority->id,
                'name' => $priority->name,
            ],
        ]);
    }

    public function update(Priority $priority)
    {
        $priority->update(
            Request::validate([
                'name' => ['required', 'max:100'],
            ])
        );

        return Redirect::back()->with('success', 'Priority updated.');
    }

    public function destroy(Priority $priority){
        $priority->delete();
        return Redirect::route('priorities')->with('success', 'Priority deleted.');
    }

    public function restore(Priority $priority){
        $priority->restore();
        return Redirect::back()->with('success', 'Priority restored.');
    }
}
