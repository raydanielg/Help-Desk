<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\Status;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class StatusController extends Controller
{
    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':status');
    }
    public function index() {
        return Inertia::render('Status/Index', [
            'filters' => Request::all(['search']),
            'status' => Status::orderBy('name')
                ->filter(Request::all(['search']))
                ->paginate(10)
                ->withQueryString()
                ->through(function ($status) {
                    return [
                        'id' => $status->id,
                        'name' => $status->name,
                        'color' => $status->color,
                    ];
                } ),
        ]);
    }

    public function create(){
        return Inertia::render('Status/Create',[
            'title' => 'Create a new status',
        ]);
    }

    public function store(){
        Status::create(
            Request::validate([
                'name' => ['required', 'max:100'],
                'color' => ['nullable', 'max:50']
            ])
        );

        return Redirect::route('status')->with('success', 'Status created.');
    }

    public function edit(Status $status)
    {
        return Inertia::render('Status/Edit', [
            'title' => $status->name,
            'status' => [
                'id' => $status->id,
                'name' => $status->name,
                'color' => $status->color,
            ],
        ]);
    }

    public function update(Status $status)
    {
        $status->update(
            Request::validate([
                'name' => ['required', 'max:100'],
                'color' => ['nullable', 'max:50']
            ])
        );

        return Redirect::back()->with('success', 'Status updated.');
    }

    public function destroy(Status $status)
    {
        $status->delete();
        return Redirect::route('statuses')->with('success', 'Status deleted.');
    }

    public function restore(Status $status)
    {
        $status->restore();
        return Redirect::back()->with('success', 'Status restored.');
    }
}
