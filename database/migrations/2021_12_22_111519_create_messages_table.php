<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('messages')) { return; }
        Schema::create('messages', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('guid')->nullable()->index();
            $table->integer('conversation_id')->index();
            $table->integer('user_id')->index()->nullable();
            $table->integer('contact_id')->index()->nullable();
            $table->integer('is_read')->default(0);
            $table->text('message');
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
        Schema::dropIfExists('messages');
    }
}
