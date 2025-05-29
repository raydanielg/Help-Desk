<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('comments')) { return; }
        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ticket_id')->nullable()->index();
            $table->integer('user_id')->nullable()->index();
            $table->integer('contact_id')->nullable()->index();
            $table->text('details');
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
        Schema::dropIfExists('comments');
    }
}
