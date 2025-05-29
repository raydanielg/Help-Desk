<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendingUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('pending_users')) { return; }
        Schema::create('pending_users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->default(null)->nullable()->index();
            $table->integer('ticket_id')->default(null)->nullable()->index();
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('phone', 25)->nullable();
            $table->string('email', 50)->unique();
            $table->string('password', 200)->nullable();
            $table->string('address', 250)->nullable();
            $table->string('city', 30)->default(null)->nullable();
            $table->string('role', 20)->nullable();
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
        Schema::dropIfExists('pending_users');
    }
}
