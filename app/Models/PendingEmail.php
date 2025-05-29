<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendingEmail extends Model
{
    use HasFactory;

    protected $table = 'pending_emails';

    public function ticket(){
        return $this->belongsTo(Ticket::class, 'ticket_id');
    }
}
