<?php

namespace Database\Seeders;

use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('messages')->truncate();
        $conversations = Conversation::limit(20)->get();
        $messages = [
            "I’m unable to reset my password. The reset link says it's expired even though I just received it.",
            "Can you please activate our Pro plan? Payment was made this morning via Stripe.",
        ];
        foreach ($conversations as $conversation) {
            foreach ($messages as $text) {
                $message = Message::factory()->create([
                    'message' => $text,
                    'conversation_id' => $conversation->id,
                    'contact_id' => $conversation->contact_id,
                ]);

                $message->update([
                    'guid' => floor(rand(500, 999) * 10000) + $message->id,
                ]);
            }
        }
    }
}
