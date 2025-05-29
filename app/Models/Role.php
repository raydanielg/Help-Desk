<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model {
    use HasFactory;

    public function users() {
        return $this->hasMany(User::class);
    }

    public function scopeOrderByName($query) {
        $query->orderBy('name');
    }

    public function scopeFilter($query, array $filters) {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('slug', 'like', '%'.$search.'%');
            });
        });
    }
}
