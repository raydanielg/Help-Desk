<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendingUser extends Model
{
    use HasFactory;

    protected $table = 'pending_users';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'city',
        'country_id',
        'address',
        'role',
    ];

    public function scopeFilter($query, array $filters) {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('first_name', 'like', '%'.$search.'%')
                    ->orWhere('last_name', 'like', '%'.$search.'%');
            });
        });
    }
}
