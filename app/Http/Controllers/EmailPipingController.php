<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Contact;
use App\Models\Priority;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class EmailPipingController extends Controller
{
    public function receiveEmailWebhook(Request $request)
    {
//        Log::info('Incoming email webhook:', $request->all());

        $data = $request->validate([
            'from' => 'required|string',
            'from_name' => 'nullable|string',
            'to' => 'nullable|string',
            'subject' => 'nullable|string',
            'body' => 'nullable|string',
            'date' => 'nullable|string',
            'message_id' => 'nullable|string|unique:tickets,message_id',
            'in_reply_to' => 'nullable|string',
        ]);

        if (!empty($data['date'])) {
            $data['date'] = Carbon::parse($data['date'])->format('Y-m-d H:i:s');
        }

        // For Contact ID
        $name = trim($data['from_name'] ?? 'Unknown');
        $nameParts = preg_split('/\s+/', $name, 2); // split into max 2 parts

        $firstName = $nameParts[0] ?? 'Unknown';
        $lastName = $nameParts[1] ?? null;

        $contact = Contact::firstOrCreate(
            ['email' => $data['from']],
            [
                'first_name' => $firstName,
                'last_name'  => $lastName,
            ]
        );

        // Try to find parent ticket based on in_reply_to
        $parentTicket = null;
        if (!empty($data['in_reply_to'])) {
            $parentTicket = Ticket::where('message_id', $data['in_reply_to'])->first();
        }

        $subject = strtolower($data['subject'] ?? '');
        $priority_id = $this->detectPriorityId($subject);
        $category_id = $this->detectCategoryId($subject);

        $cleanBody = $this->getCleanPlainBody($data['body'] ?? '');
        $cleanHtml = $this->getCleanHtmlBody($data['body'] ?? '');

        // Save new ticket (or reply entry)
        $ticket = Ticket::create([
            'subject' => $data['subject'] ?? '(no subject)',
            'email' => $data['from'],
            'details' => $cleanHtml ?? $cleanBody ?? '',
            'message_id' => $data['message_id'] ?? null,
            'in_reply_to' => $data['in_reply_to'] ?? null,
            'contact_id'    => $contact->id,
            'priority_id'   => $priority_id,
            'category_id'   => $category_id,
            'parent_id' => $parentTicket?->id,
            'created_by' => null, // or from config
            'status_id' => 1, // e.g. open
            'open' => now(),
            'created_at' => $data['date'] ?? now(),
        ]);

//        Log::info('New ticket saved with ID: ' . $ticket->id);

        return response()->json(['status' => 'ticket saved', 'id' => $ticket->id]);
    }

    protected function getCleanPlainBody(string $rawEmail): ?string
    {
        if (preg_match('/Content-Type:\s*text\/plain;.*?\r?\n\r?\n(.*?)\r?\n--/s', $rawEmail, $matches)) {
            return trim(quoted_printable_decode($matches[1]));
        }

        $split = preg_split("/\r?\n\r?\n/", $rawEmail, 2);
        return trim(quoted_printable_decode($split[1] ?? $rawEmail));
    }

    protected function getCleanHtmlBody(string $rawEmail): ?string
    {
        if (preg_match('/Content-Type:\s*text\/html;.*?\r?\n\r?\n(.*?)\r?\n--/s', $rawEmail, $matches)) {
            return trim(quoted_printable_decode($matches[1]));
        }

        return null;
    }

    protected function detectPriorityId(string $subject, int $threshold = 80): ?int
    {
        $subjectWords = preg_split('/\W+/', strtolower($subject), -1, PREG_SPLIT_NO_EMPTY);
        $priorities = Priority::all();

        foreach ($priorities as $priority) {
            $priorityWords = preg_split('/\W+/', strtolower($priority->name), -1, PREG_SPLIT_NO_EMPTY);

            foreach ($subjectWords as $sw) {
                foreach ($priorityWords as $pw) {
                    similar_text($sw, $pw, $percent);
                    if ($percent >= $threshold) {
                        return $priority->id;
                    }
                }
            }
        }

        return null;
    }

    protected function detectCategoryId(string $subject, int $threshold = 80): ?int
    {
        $subjectWords = preg_split('/\W+/', strtolower($subject), -1, PREG_SPLIT_NO_EMPTY);
        $categories = Category::all();

        foreach ($categories as $category) {
            $categoryWords = preg_split('/\W+/', strtolower($category->name), -1, PREG_SPLIT_NO_EMPTY);

            foreach ($subjectWords as $sw) {
                foreach ($categoryWords as $cw) {
                    similar_text($sw, $cw, $percent);
                    if ($percent >= $threshold) {
                        return $category->id;
                    }
                }
            }
        }

        return null;
    }
}
