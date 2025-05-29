<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('departments')->truncate();
        Department::factory()->createMany([
            ['id' => 1, 'name' => 'Sales'],
            ['id' => 2, 'name' => 'Management'],
            ['id' => 3, 'name' => 'Technical'],
            ['id' => 4, 'name' => 'Billing'],
        ]);
    }
}
