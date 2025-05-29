<?php

namespace Database\Seeders;

use App\Models\Note;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('notes')->truncate();
        $users = User::limit(4)->orderBy('id')->get();

        $notes = [
            ['name' => 'Follow up with customer on billing concern', 'details' => 'Reminder to check in with the customer about their billing issue raised last week.'],
            ['name' => 'Waiting for logs from user', 'details' => 'User has been asked to provide system logs for troubleshooting. Follow up if not received by tomorrow.'],
            ['name' => 'Assign ticket to technical team', 'details' => 'Issue appears to be backend-related. Assign to tech team once triage is complete.'],
            ['name' => 'Customer requested call back', 'details' => 'Customer prefers a phone call. Coordinate with support lead to schedule.'],
            ['name' => 'Possible duplicate ticket', 'details' => 'Ticket may be a duplicate of #294. Verify before closing.'],
            ['name' => 'Escalate if no update in 24h', 'details' => 'If no response from engineering team by EOD tomorrow, escalate to lead.'],
            ['name' => 'Request screenshots from user', 'details' => 'Issue unclear. Ask user to send a screenshot of the error.'],
            ['name' => 'Document workaround for export bug', 'details' => 'Customer using workaround for export issue. Add to knowledge base.'],
            ['name' => 'Awaiting client feedback on fix', 'details' => 'Patch was deployed. Awaiting confirmation from client.'],
            ['name' => 'Verify SLA compliance', 'details' => 'Ensure ticket was handled within SLA timeline for internal audit.'],
            ['name' => 'Check feature availability', 'details' => 'Confirm if this feature is available in their subscription tier.'],
            ['name' => 'User issue with mobile app', 'details' => 'Reported problem with login flow on Android app version 5.1.'],
            ['name' => 'Sync status with CRM', 'details' => 'Ticket needs to be tagged in CRM for cross-team visibility.'],
            ['name' => 'Bug reproducibility steps unclear', 'details' => 'Reproduction steps provided are incomplete. Follow up for more info.'],
            ['name' => 'Internal review of response quality', 'details' => 'Evaluate how the support agent handled this case.'],
            ['name' => 'Auto-response triggered incorrectly', 'details' => 'Review trigger conditions for auto-replies.'],
            ['name' => 'Ticket reopened due to customer reply', 'details' => 'Customer responded post-closure. Mark as reopened.'],
            ['name' => 'Flag for product feedback', 'details' => 'This note includes a customer suggestion for improvement.'],
            ['name' => 'Notify QA team for regression test', 'details' => 'Resolved issue should be added to regression testing checklist.'],
            ['name' => 'License verification needed', 'details' => 'Customer requested support for premium feature. Verify license key.'],
            ['name' => 'Confirm timezone setting mismatch', 'details' => 'User seeing wrong timestamps. Check if profile timezone is correct.'],
            ['name' => 'Inactive user ticket', 'details' => 'User hasn’t replied in 5 days. Mark for auto-close review.'],
            ['name' => 'Update onboarding checklist', 'details' => 'Add this issue as a known scenario in onboarding documentation.'],
            ['name' => 'Mark as spam for training set', 'details' => 'Ticket identified as spam. Label accordingly for AI model.'],
            ['name' => 'Request manual DB check', 'details' => 'Issue may involve a data inconsistency. Forward to DB admin.'],
        ];

        foreach ($notes as $note) {
            Note::factory()->create([
                'name' => $note['name'],
                'details' => $note['details'],
                'user_id' => $users->random()->id,
            ]);
        }


    }
}
