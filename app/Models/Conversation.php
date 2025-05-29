<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model {
    use HasFactory;

    public function resolveRouteBinding($value, $field = null) {
        return $this->where($field ?? 'id', $value)->firstOrFail();
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function creator()
    {
        return $this->belongsTo(Contact::class, 'contact_id');
    }

    public function participant()
    {
        return $this->hasOne(Participant::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->whereHas('creator', function($q) use($search){
                $q->where('first_name', 'like', '%'.$search.'%')
                ->orWhere('last_name', 'like', '%'.$search.'%')
                ->orWhere('email', 'like', '%'.$search.'%');
            });
        });
    }
}
