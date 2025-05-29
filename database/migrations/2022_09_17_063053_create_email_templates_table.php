<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmailTemplatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('email_templates')) { return; }
        Schema::create('email_templates', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50);
            $table->string('details', 200)->nullable()->default(null);
            $table->string('slug', 50)->nullable();
            $table->string('language', 10)->default('en')->nullable();
            $table->text('html')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('email_templates');
    }
}
