<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Department;
use App\Models\Priority;
use App\Models\Status;
use App\Models\Ticket;
use App\Models\Type;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::limit(20)->get();
        $departments = Department::limit(10)->get();
        $categories = Category::limit(10)->get();
        $statuses = Status::limit(10)->get();
        $priorities = Priority::limit(10)->get();

        $tickets = Ticket::all();
        foreach ($tickets as $ticket) {
            $ticket->delete();
        }

        DB::table('tickets')->truncate();
        Ticket::factory(20)->create()->each(function ($ticket) use($users, $departments, $categories, $statuses, $priorities){
            $ticket->update(['status_id' => $statuses->random()->id,
                'user_id' => $users->random()->id, 'created_by' => $users->random()->id,
                'priority_id' => $priorities->random()->id, 'department_id' => $departments->random()->id,
                'category_id' => $categories->random()->id, 'assigned_to' => $users->random()->id
            ]);
        });
    }
}
