<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketField extends Model
{
    use HasFactory;
    protected $table = 'ticket_fields';
    public $timestamps = false;

    protected $fillable = ['type', 'label', 'placeholder', 'options', 'required', 'hint', 'name'];

    public function resolveRouteBinding($value, $field = null)
    {
        return $this->where($field ?? 'id', $value)->firstOrFail();
    }
}
