<?php

namespace Database\Seeders;

use App\Models\EmailTemplate;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;

class EmailTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){

        DB::table('email_templates')->truncate();
        $logo = URL::to('/images/logo.png');
        $html = File::get(public_path('html/email_templates/create_ticket_new_customer.html'));
        EmailTemplate::factory()->create([
            'name' => 'Create ticket by new customer',
            'slug' => 'create_ticket_new_customer',
            'details' => 'When customer create a new ticket from the landing page',
            'language' => 'en',
            'html' => str_replace('https://res.cloudinary.com/robinbd/image/upload/v1663394454/mail-template/help-desk-logo.png', $logo, $html)
        ]);

        $html = File::get(public_path('html/email_templates/create_ticket_from_dashboard.html'));
        EmailTemplate::factory()->create([
            'name' => 'Create ticket from dashboard',
            'slug' => 'create_ticket_dashboard',
            'details' => 'When a ticket created from the admin page',
            'language' => 'en',
            'html' => str_replace('https://res.cloudinary.com/robinbd/image/upload/v1663394454/mail-template/help-desk-logo.png', $logo, $html)
        ]);

        $html = File::get(public_path('html/email_templates/custom_mail.html'));
        EmailTemplate::factory()->create([
            'name' => 'Custom Mail',
            'slug' => 'custom_mail',
            'details' => 'It will use to send any custom email.',
            'language' => 'en',
            'html' => str_replace('https://res.cloudinary.com/robinbd/image/upload/v1663394454/mail-template/help-desk-logo.png', $logo, $html)
        ]);

        $html = File::get(public_path('html/email_templates/ticket_assigned_user.html'));
        EmailTemplate::factory()->create([
            'name' => 'Got assigned for a ticket',
            'slug' => 'assigned_ticket',
            'details' => 'When a user got assigned for a ticket.',
            'language' => 'en',
            'html' => str_replace('https://res.cloudinary.com/robinbd/image/upload/v1663394454/mail-template/help-desk-logo.png', $logo, $html)
        ]);

        $html = File::get(public_path('html/email_templates/ticket_updated.html'));
        EmailTemplate::factory()->create([
            'name' => 'The ticket has been updated',
            'slug' => 'ticket_updated',
            'details' => 'When a ticket has been updated.',
            'language' => 'en',
            'html' => str_replace('https://res.cloudinary.com/robinbd/image/upload/v1663394454/mail-template/help-desk-logo.png', $logo, $html)
        ]);

        $html = File::get(public_path('html/email_templates/ticket_new_comment.html'));
        EmailTemplate::factory()->create([
            'name' => 'A new comment has been added on the ticket',
            'slug' => 'ticket_new_comment',
            'details' => 'When a comment has been added on a ticket.',
            'language' => 'en',
            'html' => str_replace('https://res.cloudinary.com/robinbd/image/upload/v1663394454/mail-template/help-desk-logo.png', $logo, $html)
        ]);

        $html = File::get(public_path('html/email_templates/user_created.html'));
        EmailTemplate::factory()->create([
            'name' => 'User created',
            'slug' => 'user_created',
            'details' => 'When a new user created.',
            'language' => 'en',
            'html' => str_replace('https://res.cloudinary.com/robinbd/image/upload/v1663394454/mail-template/help-desk-logo.png', $logo, $html)
        ]);
        //
    }
}
