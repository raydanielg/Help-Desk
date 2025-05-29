<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CitiesController extends Controller
{
    public function index(){
        return Inertia::render('Cities/Index', [
            'filters' => \Illuminate\Support\Facades\Request::all('search'),
            'cities' => City::orderBy('name')
                ->filter(Request::only('search'))
                ->paginate(10)
                ->withQueryString()
                ->through(function ($city) {
                    return [
                        'id' => $city->id,
                        'name' => $city->name,
                    ];
                } ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Cities/Create');
    }

    public function store()
    {
        City::create(
            Request::validate([
                'name' => ['required', 'max:100'],
            ])
        );

        return Redirect::route('cities')->with('success', 'City created.');
    }

    public function edit(City $city) {
        return Inertia::render('Cities/Edit', [
            'city' => [
                'id' => $city->id,
                'name' => $city->name,
            ],
        ]);
    }

    public function update(City $city) {
        $city->update(
            Request::validate([
                'name' => ['required', 'max:100'],
            ])
        );

        return Redirect::back()->with('success', 'City updated.');
    }

    public function destroy(City $city) {
        $city->delete();
        return Redirect::route('cities')->with('success', 'City deleted.');
    }
}
