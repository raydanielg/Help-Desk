<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Conversation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConversationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('conversations')->truncate();
        $contacts = Contact::limit(25)->get();

        $titles = [
            "Issue with login credentials",
            "Billing question regarding invoice #2481",
            "Feature request: export as CSV",
            "Bug report: dropdown not working",
            "Clarification needed on support tiers",
            "Unable to receive password reset email",
            "Need help setting up webhook integration",
            "Account upgrade not reflecting",
            "Mobile view layout broken",
            "Feedback on recent UI changes"
        ];

        foreach ($titles as $title) {
            Conversation::factory()->create([
                'title' => $title,
                'contact_id' => $contacts->random()->id,
                'slug' => md5(uniqid($title, true)),
            ]);
        }


    }
}
