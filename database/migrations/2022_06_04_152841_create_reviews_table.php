<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        if (Schema::hasTable('reviews')) { return; }
        Schema::create('reviews', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ticket_id')->index();
            $table->integer('user_id')->index();
            $table->integer('rating')->nullable();
            $table->text('review')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('reviews');
    }
}
