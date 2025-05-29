<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Note;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class NotesController extends Controller {

    public function index(){
        $user_id = Auth()->id();
        return Inertia::render('Notes/Index', [
            'title' => 'Notes',
            'filters' => Request::all(['search']),
            'notes' => Note::byUser($user_id)
                ->orderBy('name')
                ->filter(Request::only('search'))
                ->paginate(15)
                ->withQueryString()
                ->through(function ($note) {
                    return [
                        'id' => $note->id,
                        'name' => $note->name,
                        'color' => $note->color,
                        'details' => $note->details,
                        'created_at' => $note->created_at,
                    ];
                } ),
        ]);
    }

    public function saveNote($id = null){
        $noteFields = Request::validate([
            'name' => ['required', 'max:100'],
            'details' => ['required'],
            'color' => ['nullable']
        ]);
        $noteFields['user_id'] = Auth()->id();
        if(!empty($id)){
            Note::where('id', $id)->update($noteFields);
            $message = 'Note updated!';
        }else{
            Note::create($noteFields);
            $message = 'Note created!';
        }
        return Redirect::route('notes')->with('success', $message);
    }

    public function delete(Note $note){
        $note->delete();
        return Redirect::back()->with('success', 'Note deleted!');
    }
}
