<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('types')->truncate();
        Type::factory()->createMany([
            ['name' => 'Service'],
            ['name' => 'Hardware'],
            ['name' => 'Software'],
            ['name' => 'Issues'],
        ]);
    }
}
