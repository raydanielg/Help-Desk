<?php

namespace Database\Seeders;

use App\Models\KnowledgeBase;
use App\Models\Type;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KnowledgeBaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('knowledge_base')->truncate();
        $types = Type::limit(5)->get();

        $kbItems = [
            [
                'title' => 'How to Submit a Support Ticket',
                'details' => '<p>To submit a ticket, log in to your account, go to the Support section, and click "Create Ticket." Fill in the required details and submit.</p>',
            ],
            [
                'title' => 'Understanding Ticket Statuses',
                'details' => '<p>Each ticket has a status like Open, Pending, or Resolved. These indicate the current stage of the support process.</p>',
            ],
            [
                'title' => 'How to Attach Files to Tickets',
                'details' => '<p>When creating or replying to a ticket, use the attachment option to upload relevant documents or screenshots.</p>',
            ],
            [
                'title' => 'How to Escalate a Ticket',
                'details' => '<p>If your issue is not resolved in a timely manner, you can escalate it by replying to the ticket and requesting escalation.</p>',
            ],
            [
                'title' => 'Using Search in the Help Center',
                'details' => '<p>Use keywords or phrases in the search bar to quickly find relevant articles, FAQs, or documentation.</p>',
            ],
            [
                'title' => 'Managing Multiple Tickets',
                'details' => '<p>You can view all your tickets under "My Tickets" and sort or filter them by date, status, or priority.</p>',
            ],
            [
                'title' => 'How to Rate Support Responses',
                'details' => '<p>After your ticket is resolved, you may be asked to rate the response. Your feedback helps us improve our service.</p>',
            ],
            [
                'title' => 'Live Chat vs. Ticket Support',
                'details' => '<p>Live chat is ideal for quick questions. For more complex issues, submitting a support ticket is recommended.</p>',
            ],
            [
                'title' => 'How to Reopen a Closed Ticket',
                'details' => '<p>To reopen a closed ticket, simply reply to the last message within the ticket thread and it will be reopened.</p>',
            ],
            [
                'title' => 'Understanding Support SLAs',
                'details' => '<p>SLAs define how quickly we respond to different types of issues. You can view the SLA tiers in your support plan details.</p>',
            ],
        ];

        foreach ($kbItems as $item) {
            KnowledgeBase::factory()->create([
                'title' => $item['title'],
                'details' => $item['details'],
                'type_id' => $types->random()->id
            ]);
        }


    }
}
