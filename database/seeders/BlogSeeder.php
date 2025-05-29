<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->truncate();
        $users = User::limit(4)->orderBy('id')->get();
        $types = Category::limit(5)->orderBy('id')->get();
        $blogs = [
            [
                'title' => 'Top 10 PHP Performance Tips for 2025',
                'details' => '<p>Discover techniques to boost your PHP applications, including opcode caching, just-in-time compilation, and using Laravel Octane.</p>',
            ],
            [
                'title' => 'Why Laravel 11 is a Game Changer for Developers',
                'details' => '<p>Explore the latest features in Laravel 11, including new boot methods, improved job batching, and native support for typed enums.</p>',
            ],
            [
                'title' => 'Building Scalable APIs with Laravel and MySQL',
                'details' => '<p>Learn how to design RESTful APIs that can handle scale using Laravel’s resources, query scopes, and indexing strategies in MySQL.</p>',
            ],
            [
                'title' => 'Understanding Inertia.js in Full-Stack Applications',
                'details' => '<p>This post explains how Inertia.js bridges Laravel and modern JavaScript frameworks to create reactive full-stack apps without an API.</p>',
            ],
            [
                'title' => 'Using Vue 3 Composition API for Cleaner Code',
                'details' => '<p>See how Vue 3’s Composition API can help structure your components for reusability, testability, and maintainability.</p>',
            ],
            [
                'title' => 'Deploying Laravel Apps on Shared Hosting',
                'details' => '<p>Step-by-step guide to getting your Laravel application up and running on a shared hosting environment without SSH access.</p>',
            ],
            [
                'title' => 'Optimizing Images in Your Web Applications',
                'details' => '<p>Tips and tools for compressing, lazy-loading, and serving responsive images to improve page speed and SEO.</p>',
            ],
            [
                'title' => 'How to Use Queues Effectively in Laravel',
                'details' => '<p>Understand the benefits of queueing long-running tasks and learn how to configure workers and monitor failed jobs.</p>',
            ],
            [
                'title' => 'Security Best Practices for Web Developers in 2025',
                'details' => '<p>Stay secure with the latest recommendations for sanitizing input, enforcing HTTPS, managing secrets, and applying CSP headers.</p>',
            ],
            [
                'title' => 'What’s New in PHP 8.3: A Developer’s Overview',
                'details' => '<p>Get a concise summary of the new PHP 8.3 features such as typed class constants, json_validate(), and performance gains.</p>',
            ],
        ];
        foreach ($blogs as $blog) {
            Blog::factory()->create([
                'title' => $blog['title'],
                'details' => $blog['details'],
                'type_id' => $types->random()->id,
                'author_id' => $users->random()->id,
            ]);
        }
    }
}
