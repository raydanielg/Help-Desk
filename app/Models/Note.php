<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model {
    use HasFactory;

    public function getCreatedAtAttribute($date){
        return Carbon::parse($date)->format('jS F, Y');
    }

    public function scopeByUser($query, $id){
        if(!empty($id)){
            $query->where('user_id', $id);
        }
    }

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('details', 'like', '%'.$search.'%');
            });
        });
    }
}
