<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfCustomer;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\Faq;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class FaqsController extends Controller {

    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':faq');
    }

    public function index() {
        return Inertia::render('Faqs/Index', [
            'title' => 'FAQs',
            'filters' => Request::all('search'),
            'faqs' => Faq::orderBy('name')
                ->filter(Request::only('search'))
                ->paginate(10)
                ->withQueryString()
                ->through(function ($faq) {
                    return [
                        'id' => $faq->id,
                        'name' => $faq->name,
                        'status' => $faq->status,
                        'details' => $faq->details,
                    ];
                } ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Faqs/Create',[
            'title' => 'Create a new FAQ',
        ]);
    }

    public function store()
    {
        Faq::create(
            Request::validate([
                'name' => ['required', 'max:150'],
                'status' => ['nullable'],
                'details' => ['required']
            ])
        );

        return Redirect::route('faqs')->with('success', 'Faq created.');
    }

    public function edit(Faq $faq) {
        return Inertia::render('Faqs/Edit', [
            'title' => $faq->name,
            'faq' => [
                'id' => $faq->id,
                'name' => $faq->name,
                'status' => $faq->status,
                'details' => $faq->details,
            ],
        ]);
    }

    public function update(Faq $faq)
    {
        $faq->update(
            Request::validate([
                'name' => ['required', 'max:150'],
                'status' => ['nullable'],
                'details' => ['required']
            ])
        );

        return Redirect::back()->with('success', 'Faq updated.');
    }

    public function destroy(Faq $faq) {
        $faq->delete();
        return Redirect::route('faqs')->with('success', 'Faq deleted.');
    }
}
