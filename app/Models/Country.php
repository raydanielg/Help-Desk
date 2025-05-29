<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function users(){
        return $this->hasMany(User::class);
    }

    public function contacts(){
        return $this->hasMany(Contact::class);
    }
}
