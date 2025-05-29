<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('tickets')) { return; }
        Schema::create('tickets', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uid', 100)->nullable()->index();
            $table->string('subject', 250)->index();
            $table->integer('status_id')->nullable()->index();
            $table->timestamp('open')->useCurrent();
            $table->timestamp('due')->nullable();
            $table->timestamp('close')->nullable();
            $table->timestamp('response')->nullable();
            $table->integer('user_id')->nullable()->index();
            $table->integer('contact_id')->nullable()->index();
            $table->integer('client_type')->nullable();
            $table->string('email')->nullable();
            $table->string('created_by', 50)->nullable()->index();
            $table->string('location', 200)->nullable();
            $table->integer('priority_id')->nullable()->index();
            $table->integer('department_id')->nullable()->index();
            $table->integer('category_id')->nullable()->index();
            $table->integer('sub_category_id')->nullable()->index();
            $table->integer('assigned_to')->nullable()->index();
            $table->integer('type_id')->nullable()->index();
            $table->text('details');
            $table->integer('review_id')->nullable();
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
        Schema::dropIfExists('tickets');
    }
}
