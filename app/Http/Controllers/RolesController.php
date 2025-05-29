<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfNotAdmin;
use App\Models\Role;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class RolesController extends Controller {
    public function __construct(){
        $this->middleware(RedirectIfNotAdmin::class);
    }

    public function create(){
        return Inertia::render('Roles/Create',[
            'title' => 'Create a new role'
        ]);
    }

    public function index(){
        return Inertia::render('Roles/Index', [
            'title' => 'User Roles',
            'filters' => Request::all(['search', 'role_id']),
            'roles' => Role::orderByName()
                ->filter(Request::all(['search']))
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($role) => [
                    'id' => $role->id,
                    'name' => $role->name,
                    'slug' => $role->slug,
                    'updated_at' => $role->updated_at,
                ]),
        ]);
    }

    public function store(){
        $userRequest = Request::validate([
            'name' => ['required', 'max:50'],
            'slug' => ['required', 'max:50'],
            'access' => ['required'],
        ]);

        $accessData = [];
        foreach ($userRequest['access'] as $ak => $av){
            $accessData[$ak] = [
                'read' => filter_var($av['read'], FILTER_VALIDATE_BOOLEAN),
                'update' => filter_var($av['update'], FILTER_VALIDATE_BOOLEAN),
                'create' => filter_var($av['create'], FILTER_VALIDATE_BOOLEAN),
                'delete' => filter_var($av['delete'], FILTER_VALIDATE_BOOLEAN)
            ];
        }

        Role::create(['access' => json_encode($accessData), 'slug' => $userRequest['slug'], 'name' => $userRequest['name']]);
        return Redirect::route('roles')->with('success', 'Role created.');
    }

    public function edit(Role $role) {
        return Inertia::render('Roles/Edit', [
            'title' => $role->name,
            'role' => [
                'id' => $role->id,
                'name' => $role->name,
                'slug' => $role->slug,
                'access' => $role->access,
                'updated_at' => $role->updated_at,
            ],
        ]);
    }

    public function update(Role $role) {
        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Updating role is not allowed for the live demo.');
        }

        $userRequest = Request::validate([
            'name' => ['required', 'max:50'],
            'slug' => ['required', 'max:50'],
            'access' => ['required'],
        ]);

        $accessData = [];
        foreach ($userRequest['access'] as $ak => $av){
            $accessData[$ak] = [
                'read' => filter_var($av['read'], FILTER_VALIDATE_BOOLEAN),
                'update' => filter_var($av['update'], FILTER_VALIDATE_BOOLEAN),
                'create' => filter_var($av['create'], FILTER_VALIDATE_BOOLEAN),
                'delete' => filter_var($av['delete'], FILTER_VALIDATE_BOOLEAN)
            ];
        }

        $role->update(['access' => $accessData, 'slug' => $userRequest['slug'], 'name' => $userRequest['name']]);
        return Redirect::back()->with('success', 'Role updated.');
    }

    public function destroy(Role $role) {
        if (config('app.demo')) {
            return Redirect::back()->with('error', 'Deleting role is not allowed for the live demo.');
        }
        $role->delete();
        return Redirect::route('roles')->with('success', 'The role has been deleted!');
    }
}
