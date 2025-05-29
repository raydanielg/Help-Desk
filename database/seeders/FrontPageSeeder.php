<?php

namespace Database\Seeders;

use App\Models\FrontPage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class FrontPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('front_pages')->truncate();
        $json = Storage::disk('json')->get('front_page.json');
        $frontPages = json_decode($json, true);
        foreach ($frontPages as $frontPage){
            FrontPage::factory()->create([
               'title' => $frontPage['title'],
               'slug' => $frontPage['slug'],
               'is_active' => $frontPage['is_active'],
               'html' => json_encode($frontPage['html']),
            ]);
        }
    }
}
