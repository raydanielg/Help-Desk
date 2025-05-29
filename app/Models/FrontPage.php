<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FrontPage extends Model
{
    use HasFactory;
    protected $table = 'front_pages';

    public function getUpdatedAtAttribute($date){
        return Carbon::parse($date)->format('jS F, Y');
    }
}
