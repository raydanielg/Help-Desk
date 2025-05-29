<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KnowledgeBase extends Model
{
    use HasFactory;
    protected $table = 'knowledge_base';
    public function scopeOrderByTitle($query){
        $query->orderBy('title');
    }

    public function type(){
        return $this->belongsTo(Type::class, 'type_id');
    }

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('title', 'like', '%'.$search.'%')->orWhere('details', 'like', '%'.$search.'%');
            });
        });
    }
}
