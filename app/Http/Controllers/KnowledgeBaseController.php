<?php

namespace App\Http\Controllers;

use App\Http\Middleware\RedirectIfCustomer;
use App\Http\Middleware\RedirectIfNotParmitted;
use App\Models\KnowledgeBase;
use App\Models\Type;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class KnowledgeBaseController extends Controller {

    public function __construct(){
        $this->middleware(RedirectIfNotParmitted::class.':knowledge_base');
    }

    public function index() {
        return Inertia::render('KnowledgeBase/Index', [
            'title' => 'Knowledge base',
            'filters' => Request::all('search'),
            'knowledge_base' => KnowledgeBase::orderBy('title')
                ->filter(Request::only('search'))
                ->paginate(10)
                ->withQueryString()
                ->through(function ($knowledge_base) {
                    return [
                        'id' => $knowledge_base->id,
                        'title' => $knowledge_base->title,
                        'type' => $knowledge_base->type?$knowledge_base->type->name:'',
                        'details' => $knowledge_base->details
                    ];
                } ),
        ]);
    }

    public function create()
    {
        return Inertia::render('KnowledgeBase/Create',[
            'title' => 'Create a new knowledge base',
            'types' => Type::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function store()
    {
        KnowledgeBase::create(
            Request::validate([
                'title' => ['required', 'max:150'],
                'type_id' => ['required'],
                'details' => ['required']
            ])
        );

        return Redirect::route('knowledge_base')->with('success', 'Knowledge base created.');
    }

    public function edit(KnowledgeBase $knowledge_base)
    {
        return Inertia::render('KnowledgeBase/Edit', [
            'title' => $knowledge_base->title,
            'knowledge_base' => [
                'id' => $knowledge_base->id,
                'title' => $knowledge_base->title,
                'type_id' => $knowledge_base->type_id,
                'details' => $knowledge_base->details,
            ],
            'types' => Type::orderBy('name')
                ->get()
                ->map
                ->only('id', 'name'),
        ]);
    }

    public function update(KnowledgeBase $knowledge_base)
    {
        $knowledge_base->update(
            Request::validate([
                'title' => ['required', 'max:150'],
                'type_id' => ['nullable'],
                'details' => ['required']
            ])
        );

        return Redirect::back()->with('success', 'Knowledge base updated.');
    }

    public function destroy(KnowledgeBase $knowledge_base)
    {
        $knowledge_base->delete();
        return Redirect::route('knowledge_base')->with('success', 'Knowledge base deleted.');
    }
}
