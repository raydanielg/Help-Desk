<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfNotAdmin;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\Department;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class DepartmentsController extends Controller
{
    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':department');
    }

    public function index(){
        return Inertia::render('Departments/Index', [
            'title' => 'Departments',
            'filters' => Request::all(['search']),
            'departments' => Department::orderBy('name')
                ->filter(Request::all(['search']))
                ->paginate(10)
                ->withQueryString()
                ->through(function ($department) {
                    return [
                        'id' => $department->id,
                        'name' => $department->name,
                    ];
                } ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Departments/Create',[
            'title' => 'Create a new department',
        ]);
    }

    public function store()
    {
        Department::create(
            Request::validate([
                'name' => ['required', 'max:100'],
            ])
        );

        return Redirect::route('departments')->with('success', 'Department created.');
    }

    public function edit(Department $department){
        return Inertia::render('Departments/Edit', [
            'title' => $department->name,
            'department' => [
                'id' => $department->id,
                'name' => $department->name,
            ],
        ]);
    }

    public function update(Department $department)
    {
        $department->update(
            Request::validate([
                'name' => ['required', 'max:100'],
            ])
        );

        return Redirect::back()->with('success', 'Department updated.');
    }

    public function destroy(Department $department) {
        $department->delete();
        return Redirect::route('departments')->with('success', 'Department deleted.');
    }

    public function restore(Department $department){
        $department->restore();
        return Redirect::back()->with('success', 'Department restored.');
    }
}
