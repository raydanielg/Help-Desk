<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $subject = fake()->unique()->randomElement(array_column($this->getDummyTickets(), 'subject'));
        $array = array_filter($this->getDummyTickets(), fn($ticket) => $ticket['subject'] === $subject);
        return [
            'subject' => $subject,
            'details' => reset($array)['details'],
            'open' => $this->faker->dateTimeBetween('-1 week', 'now')->format('Y-m-d H:i:s'),
            'due' => $this->faker->dateTimeBetween('now', '+1 week')->format('Y-m-d H:i:s'),
            'response' => $this->faker->dateTime('now')->format('Y-m-d H:i:s'),
        ];
    }

    private function getDummyTickets()
    {
        $tickets = [
            [
                'subject' => 'Unable to access account',
                'details' => 'Unable to access account. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Password reset not working',
                'details' => 'Password reset not working. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Payment not reflecting',
                'details' => 'Payment not reflecting. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Bug in dashboard reports',
                'details' => 'Bug in dashboard reports. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Feature request: Dark mode',
                'details' => 'Feature request: Dark mode. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Email notifications not received',
                'details' => 'Email notifications not received. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Mobile app crashes on login',
                'details' => 'Mobile app crashes on login. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Incorrect invoice generated',
                'details' => 'Incorrect invoice generated. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Unable to attach files to ticket',
                'details' => 'Unable to attach files to ticket. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Performance issue on dashboard',
                'details' => 'Performance issue on dashboard. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Data export fails intermittently',
                'details' => 'Data export fails intermittently. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Two-factor authentication issue',
                'details' => 'Two-factor authentication issue. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Ticket history not showing',
                'details' => 'Ticket history not showing. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Error 500 on contact form',
                'details' => 'Error 500 on contact form. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Missing fields in profile settings',
                'details' => 'Missing fields in profile settings. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Unable to update billing address',
                'details' => 'Unable to update billing address. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Search feature returns wrong results',
                'details' => 'Search feature returns wrong results. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Auto logout too frequent',
                'details' => 'Auto logout too frequent. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Requesting upgrade to Pro plan',
                'details' => 'Requesting upgrade to Pro plan. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Cancel subscription request',
                'details' => 'Cancel subscription request. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Misleading UI for billing cycle',
                'details' => 'Misleading UI for billing cycle. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Time zone not saving correctly',
                'details' => 'Time zone not saving correctly. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Broken links in help center',
                'details' => 'Broken links in help center. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Issue with API authentication',
                'details' => 'Issue with API authentication. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Webhook not triggering events',
                'details' => 'Webhook not triggering events. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Language preference not retained',
                'details' => 'Language preference not retained. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'UI glitch on mobile viewport',
                'details' => 'UI glitch on mobile viewport. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'New team member cant log in',
                'details' => 'New team member cant log in. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Download button not responding',
                'details' => 'Download button not responding. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ],
            [
                'subject' => 'Slow response time after login',
                'details' => 'Slow response time after login. Please look into this issue as it is impacting my workflow. Let me know if more information is needed.'
            ]
        ];
        return $tickets;
    }
}
