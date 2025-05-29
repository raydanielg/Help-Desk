<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Organization;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('contacts')->truncate();
        $organizations = Organization::limit(15)->get();
        Contact::factory(12)->create()->each(function ($contact) use ($organizations) {
            $contact->update(['organization_id' => $organizations->random()->id]);
        });
    }
}
