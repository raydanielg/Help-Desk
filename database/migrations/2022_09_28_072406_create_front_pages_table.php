<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFrontPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('front_pages')) { return; }
        Schema::create('front_pages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', '150')->nullable();
            $table->string('slug', '50')->nullable();
            $table->integer('is_active')->default(1)->nullable();
            $table->json('html')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('front_pages');
    }
}
