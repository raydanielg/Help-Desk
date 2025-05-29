<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->truncate();
        DB::table('settings')->insert(['name' => 'App Name', 'slug' => 'app_name', 'type' => 'text', 'value' => 'Help Desk']);
        DB::table('settings')->insert(['name' => 'Email Recipient for customer ticket', 'slug' => 'default_recipient', 'type' => 'text', 'value' => 1]);
        DB::table('settings')->insert(['name' => 'Default Language', 'slug' => 'default_language', 'type' => 'text', 'value' => 'en']);
        DB::table('settings')->insert(['name' => 'Main_logo', 'slug' => 'main_logo', 'type' => 'text', 'value' => '/images/logo.png']);
        DB::table('settings')->insert(['name' => 'Main_favicon', 'slug' => 'main_favicon', 'type' => 'text', 'value' => '/favicon.png']);
        DB::table('settings')->insert(['name' => 'Hide_ticket_fields', 'slug' => 'hide_ticket_fields', 'type' => 'json', 'value' => \json_encode([])]);
        DB::table('settings')->insert(['name' => 'Required ticket fields', 'slug' => 'required_ticket_fields', 'type' => 'json', 'value' => \json_encode([])]);
        DB::table('settings')->insert(['name' => 'Footer Text', 'slug' => 'footer_text', 'type' => 'text', 'value' => 'Help Desk © 2022 - Powered by W3BD']);
        DB::table('settings')->insert(['name' => 'Enable Options', 'slug' => 'enable_options', 'type' => 'json',
            'value' => json_encode([
                ['name' => 'Chat', 'slug' => 'chat', 'value' => true],
                ['name' => 'FAQ', 'slug' => 'faq', 'value' => true],
                ['name' => 'Knowledge Base', 'slug' => 'kb', 'value' => true],
                ['name' => 'Blog', 'slug' => 'blog', 'value' => true],
                ['name' => 'Contacts', 'slug' => 'contact', 'value' => true],
                ['name' => 'Organizations', 'slug' => 'organization', 'value' => true],
                ['name' => 'Notes', 'slug' => 'note', 'value' => true],
                ['name' => 'Show Login on front page', 'slug' => 'show_login', 'value' => true],
                ['name' => 'Email to tickets(piping)', 'slug' => 'enable_piping', 'value' => true],
                ['name' => 'Service Page', 'slug' => 'service', 'value' => true],
                ['name' => 'Show Color Picker', 'slug' => 'color_picker', 'value' => true],
                ['name' => 'Require Login to Submit Ticket', 'slug' => 'require_login_submit_ticket', 'value' => false],
            ])
        ]);
        DB::table('settings')->insert(['name' => 'Email Notifications', 'slug' => 'email_notifications', 'type' => 'json',
                'value' => json_encode([
                    ['name' => 'Create ticket by new customer', 'slug' => 'create_ticket_new_customer', 'value' => false],
                    ['name' => 'Create ticket from dashboard', 'slug' => 'create_ticket_dashboard', 'value' => false],
                    ['name' => 'Notification for the first comment', 'slug' => 'first_comment', 'value' => false],
                    ['name' => 'User got assigned for a task', 'slug' => 'assigned_ticket', 'value' => false],
                    ['name' => 'Status or priority changes', 'slug' => 'status_priority', 'value' => false],
                    ['name' => 'Create a new user', 'slug' => 'user_created', 'value' => false],
                ])
            ]);
    }
}
