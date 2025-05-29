<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendingEmails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('pending_emails')) { return; }
        Schema::create('pending_emails', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable()->index();
            $table->integer('ticket_id')->nullable()->index();
            $table->string('type')->nullable();
            $table->text('value')->nullable();
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
        Schema::dropIfExists('pending_emails');
    }
}
