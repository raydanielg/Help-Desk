<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\HelpDesk;
use Illuminate\Support\Str;

class Ticket extends Model
{
    use HasFactory;

    protected static function booted()
    {

        static::created(function ($ticket) {
            if (!$ticket->uid) {
                $ticket->uid = (string) (100000 + $ticket->id);
                $ticket->saveQuietly();
            }
        });

        static::deleting(function ($ticket) {
            $ticket->comments()->delete();
            $ticket->attachments()->delete();
            $ticket->reviews()->delete();
            $ticket->ticketEntries()->delete();
        });
    }

    public function resolveRouteBinding($value, $field = null) {
        return $this->where($field ?? 'id', $value)->firstOrFail();
    }

    public function scopeOrderBySubject($query){
        $query->orderBy('subject');
    }

    public function createdBy(){
        return $this->belongsTo(User::class, 'created_by');
    }

    public function priority(){
        return $this->belongsTo(Priority::class, 'priority_id');
    }

    public function review(){
        return $this->belongsTo(Review::class, 'review_id');
    }

    public function attachments(){
        return $this->hasMany(Attachment::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function ticketEntries(){
        return $this->hasMany(TicketEntry::class, 'ticket_id');
    }

    public function reviews(){
        return $this->hasMany(Review::class);
    }

    public function status(){
        return $this->belongsTo(Status::class, 'status_id');
    }

    public function department(){
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function ticketType(){
        return $this->belongsTo(Type::class, 'type_id');
    }

    public function contact(){
        return $this->belongsTo(Contact::class, 'contact_id');
    }

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function category(){
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function parent()
    {
        return $this->belongsTo(Ticket::class, 'parent_id');
    }

    public function replies()
    {
        return $this->hasMany(Ticket::class, 'parent_id');
    }

    public function subCategory(){
        return $this->belongsTo(Category::class, 'sub_category_id');
    }

    public function assignedTo(){
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function getDueAttribute($date){
        return Carbon::parse($date)->format('Y-m-d');
    }

    public function scopeByCustomer($query, $id){
        if(!empty($id)){
            $query->where('user_id', $id);
        }
    }

    public function scopeByUser($query, $id){
        if(!empty($id)){
            $query->where('user_id', $id);
        }
    }

    public function scopeByAssign($query, $id){
        if(!empty($id)){
            $query->where('assigned_to', $id);
        }
    }

    public function scopeFilter($query, array $filters){
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $statusIds = Status::where('slug', 'like', '%'.$search.'%')->pluck('id');
            $priorityIds = Priority::where('name', 'like', '%'.$search.'%')->pluck('id');
            $assignedIds = User::where('first_name', 'like', '%'.$search.'%')->orWhere('last_name', 'like', '%'.$search.'%')->pluck('id');
            $query
                ->where('subject', 'like', '%'.$search.'%')
                ->orWhere('uid', 'like', '%'.$search.'%')
                ->orWhereIn('status_id', $statusIds)
                ->orWhereIn('priority_id', $priorityIds)
                ->orWhereIn('assigned_to', $assignedIds)
                ->orWhereIn('user_id', $assignedIds);
        })->when($filters['priority_id'] ?? null, function ($query, $priority) {
            $query->where('priority_id', $priority);
        })->when($filters['status_id'] ?? null, function ($query, $status) {
            $query->where('status_id', $status);
        })->when($filters['type_id'] ?? null, function ($query, $status) {
            $query->where('type_id', $status);
        })->when($filters['category_id'] ?? null, function ($query, $status) {
            $query->where('category_id', $status);
        })->when($filters['department_id'] ?? null, function ($query, $status) {
            $query->where('department_id', $status);
        });
    }
}
