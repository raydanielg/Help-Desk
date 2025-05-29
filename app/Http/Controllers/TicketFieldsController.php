<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\TicketField;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TicketFieldsController extends Controller
{
    public function builder()
    {
        return Inertia::render('Tickets/builder',[
            'title' => 'Ticket form builder',
            'fields' => TicketField::orderBy('id')
                ->paginate(100)
                ->withQueryString()
                ->through(function ($field) {
                    return [
                        'id' => $field->id,
                        'type' => $field->type,
                        'label' => $field->label,
                        'name' => $field->name,
                        'placeholder' => $field->placeholder,
                        'required' => $field->required,
                        'hint' => $field->hint,
                        'options' => json_decode($field->options, true),
                    ];
                }),
        ]);
    }

    public function store(Request $request)
    {
        $message = '';
        $ticket_field_requests = $request->validate([
            'type' => ['required'],
            'label' => ['required'],
            'name' => ['required'],
            'placeholder' => ['nullable'],
            'options' => ['nullable'],
            'required' => ['nullable'],
            'hint' => ['nullable'],
        ]);
        if(!empty($ticket_field_requests['options'])){
            $ticket_field_requests['options'] = json_encode($ticket_field_requests['options']);
        }
        if(!empty($request->input('id'))){
            $ticket_field = TicketField::where('id', $request->input('id'))->first();
            if(!empty($ticket_field)){
                foreach ($ticket_field_requests as $qfr_k => $qfr_v){
                    $ticket_field->{$qfr_k} = $qfr_v;
                }
                $ticket_field->save();
                $message = 'The field has been updated!';
            }
        }else{
            $field_count = TicketField::count();
            if(config('app.demo') && $field_count > 2){
                return Redirect::back()->with('error', 'You can not add more than 3 custom input in the live demo!');
            }

            TicketField::create($ticket_field_requests);
            $message = 'A new field has been added!';
        }

        return Redirect::route('tickets.builder')->with('message', $message);
    }

    public function delete(Request $request) {
        $id = $request->input('id');
        if(is_array($id)){
            TicketField::whereIn('id', $id)->delete();
            $message = 'The selected field items have been deleted!';
        }else{
            TicketField::where('id', $id)->delete();
            $message = 'The field has been deleted!';
        }
        return Redirect::route('tickets.builder')->with('message', $message);
    }
}
