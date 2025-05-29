<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    use HasFactory;

    public function resolveRouteBinding($value, $field = null)
    {
        return $this->where($field ?? 'id', $value)->firstOrFail();
    }

    public function creator()
    {
        return $this->belongsTo(Contact::class, 'contact_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function conversation()
    {
        return $this->hasOne(Conversation::class, 'conversation_id' );
    }
}
