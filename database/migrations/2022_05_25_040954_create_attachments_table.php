<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttachmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('attachments')) { return; }
        Schema::create('attachments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ticket_id')->nullable()->index();
            $table->integer('message_id')->nullable()->index();
            $table->string('name', 150)->nullable();
            $table->integer('user_id')->nullable()->index();
            $table->integer('contact_id')->nullable()->index();
            $table->integer('size')->nullable();
            $table->string('path', 250);
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
        Schema::dropIfExists('attachments');
    }
}
