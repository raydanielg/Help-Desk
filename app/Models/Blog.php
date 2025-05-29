<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model {
    use HasFactory;
    protected $table = 'posts';

    public function scopeOrderByTitle($query){
        $query->orderBy('title');
    }

    public function type(){
        return $this->belongsTo(Type::class, 'type_id');
    }

    public function author(){
        return $this->belongsTo(User::class, 'author_id');
    }

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('title', 'like', '%'.$search.'%');
            });
        });
    }

    public function getCreatedAtAttribute($date){
        return Carbon::parse($date)->format('jS F, Y');
    }
}
