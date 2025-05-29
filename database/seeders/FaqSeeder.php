<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('faqs')->truncate();

        $faqs = [
            [
                'name' => 'How can I reset my password?',
                'details' => 'To reset your password, click on "Forgot Password" at the login page and follow the email instructions sent to you.'
            ],
            [
                'name' => 'Where can I view my invoices?',
                'details' => 'You can view and download your invoices from the "Billing" section in your account settings.'
            ],
            [
                'name' => 'How do I contact customer support?',
                'details' => 'You can contact support by submitting a ticket through the "Help" section or emailing support@yourdomain.com.'
            ],
            [
                'name' => 'Can I upgrade my subscription plan?',
                'details' => 'Yes, you can upgrade your plan anytime from the "Subscription" page in your account dashboard.'
            ],
            [
                'name' => 'What payment methods are accepted?',
                'details' => 'We accept credit/debit cards, PayPal, and bank transfers depending on your region.'
            ],
            [
                'name' => 'Is my data secure?',
                'details' => 'Yes, we use industry-standard encryption and follow best practices to keep your data secure.'
            ],
            [
                'name' => 'How do I change my account email?',
                'details' => 'Navigate to your profile settings and update your email address. A verification email will be sent to confirm the change.'
            ],
            [
                'name' => 'Why is my account temporarily locked?',
                'details' => 'Accounts may be temporarily locked after multiple failed login attempts. Please wait a few minutes or reset your password.'
            ],
            [
                'name' => 'Can I cancel my subscription anytime?',
                'details' => 'Yes, subscriptions can be canceled anytime from your account settings. Your access will remain active until the current billing cycle ends.'
            ],
            [
                'name' => 'Do you offer discounts for teams or nonprofits?',
                'details' => 'Yes, we offer special pricing for teams and nonprofit organizations. Please contact our sales team for more information.'
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::factory()->create([
                'name' => $faq['name'],
                'details' => $faq['details'],
            ]);
        }

    }
}
