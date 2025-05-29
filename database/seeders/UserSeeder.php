<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        User::factory()->createMany([
            ['email' => 'john.due.helo@mail.com', 'password' => 'w3bd.com', 'role_id' => 1],
            ['email' => 'robert.slaughter@mail.com', 'password' => 'w3bd.com', 'role_id' => 4],
            ['email' => 'mmarks@example.com', 'password' => 'w3bd.com', 'role_id' => 2],
            ['email' => 'pat@example.com', 'password' => 'w3bd.com', 'role_id' => 3],
            ['email' => 'taylor@example.com', 'password' => 'w3bd.com', 'role_id' => 5]
        ]);
        User::factory(100)->create();
    }
}
