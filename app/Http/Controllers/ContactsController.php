<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfCustomer;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\City;
use App\Models\Contact;
use App\Models\Country;
use App\Models\Organization;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ContactsController extends Controller
{
    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':contact');
    }

    public function index()
    {
        return Inertia::render('Contacts/Index', [
            'title' => 'Contacts',
            'filters' => Request::all(['search']),
            'contacts' => Contact::with('organization')
                ->orderByName()
                ->filter(Request::only(['search']))
                ->paginate(8)
                ->withQueryString()
                ->through(function ($contact){
                    return [
                        'id' => $contact->id,
                        'name' => $contact->name,
                        'phone' => $contact->phone,
                        'city' => $contact->city,
                        'email' => $contact->email,
                    ];
                }),
        ]);
    }

    public function create()
    {
        return Inertia::render('Contacts/Create', [
            'title' => 'Create a new contact',
            'countries' => Country::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'cities' => City::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'organizations' => Organization::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function store()
    {
        Contact::create(
            Request::validate([
                'first_name' => ['required', 'max:50'],
                'last_name' => ['required', 'max:50'],
                'organization_id' => ['nullable', Rule::exists('organizations', 'id')],
                'email' => ['nullable', 'max:50', 'email'],
                'phone' => ['nullable', 'max:50'],
                'address' => ['nullable', 'max:150'],
                'city' => ['nullable', 'max:50'],
                'region' => ['nullable', 'max:50'],
                'country' => ['nullable', 'max:2'],
                'postal_code' => ['nullable', 'max:25'],
            ])
        );

        return Redirect::route('contacts')->with('success', 'Contact created.');
    }

    public function edit(Contact $contact)
    {
        return Inertia::render('Contacts/Edit', [
            'title' => $contact->name,
            'countries' => Country::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'cities' => City::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
            'contact' => [
                'id' => $contact->id,
                'first_name' => $contact->first_name,
                'last_name' => $contact->last_name,
                'organization_id' => $contact->organization_id,
                'email' => $contact->email,
                'phone' => $contact->phone,
                'address' => $contact->address,
                'city' => $contact->city,
                'region' => $contact->region,
                'country' => $contact->country,
                'postal_code' => $contact->postal_code,
            ],
            'organizations' => Organization::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function update(Contact $contact)
    {
        $contact->update(
            Request::validate([
                'first_name' => ['required', 'max:50'],
                'last_name' => ['required', 'max:50'],
                'organization_id' => [
                    'nullable',
                    Rule::exists('organizations', 'id'),
                ],
                'email' => ['nullable', 'max:50', 'email'],
                'phone' => ['nullable', 'max:50'],
                'address' => ['nullable', 'max:150'],
                'city' => ['nullable', 'max:50'],
                'region' => ['nullable', 'max:50'],
                'country' => ['nullable', 'max:2'],
                'postal_code' => ['nullable', 'max:25'],
            ])
        );

        return Redirect::back()->with('success', 'Contact updated.');
    }

    public function destroy(Contact $contact) {
        $contact->delete();
        return Redirect::route('contact')->with('success', 'Contact deleted.');
    }

    public function restore(Contact $contact) {
        $contact->restore();
        return Redirect::back()->with('success', 'Contact restored.');
    }
}
