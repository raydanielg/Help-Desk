<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function resolveRouteBinding($value, $field = null) {
        return $this->where($field ?? 'id', $value)->firstOrFail();
    }

    public function country(){
        return $this->belongsTo(Country::class, 'country_id');
    }

//    public function city(){
//        return $this->belongsTo(City::class, 'city_id');
//    }

    public function getNameAttribute()
    {
        return $this->first_name.' '.$this->last_name;
    }

    public function getAccessAttribute() {
        $itemAccess = [];
        $access = ['read' => false,'create' => false,'delete' => false,'update' => false];
        $items = ['faq','blog','chat','smtp','type','user','global','front_page','pusher','status','ticket','contact','category','customer','language','priority','department','organization','email_template','knowledge_base'];
        if($this->role && $this->role->access){
            return json_decode($this->role->access, true);
        }else{
            foreach ($items as $item){ $itemAccess[$item] = $access; }
            return $itemAccess;
        }
    }

    public function getCreatedAtAttribute($date){
        return Carbon::parse($date)->format('jS F, Y');
    }

    public function role() {
        return $this->belongsTo(Role::class);
    }

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = Hash::needsRehash($password) ? Hash::make($password) : $password;
    }

    public function isDemoUser()
    {
        return $this->email === 'johndoe@example.com';
    }

    public function scopeOrderByName($query)
    {
        $query->orderBy('last_name')->orderBy('first_name');
    }

    public function scopeByRole($query, array $filters){
        $query->when($filters['role'] ?? null, function ($query, $role) {
            $query->whereRole($role);
        });
    }

    public function contacts() {
        return $this->hasMany(Contact::class);
    }

    public function comments() {
        return $this->hasMany(Comment::class);
    }

    public function tickets(){
        return $this->hasMany(Ticket::class);
    }

    public function organizations() {
        return $this->hasMany(Organization::class);
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getFullNameAttribute(){
        return ucfirst($this->first_name) . ' ' . ucfirst($this->last_name);
    }

    public function scopeFilter($query, array $filters) {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('first_name', 'like', '%'.$search.'%')
                    ->orWhere('last_name', 'like', '%'.$search.'%')
                    ->orWhere('phone', 'like', '%'.$search.'%')
                    ->orWhere('email', 'like', '%'.$search.'%');
            });
        })->when($filters['role_id'] ?? null, function ($query, $role_id) {
            $query->whereRoleId($role_id);
        });
    }
}
