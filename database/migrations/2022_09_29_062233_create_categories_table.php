<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('categories')) { return; }
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', '50');
            $table->integer('department_id')->nullable();
            $table->integer('parent_id')->nullable();
            $table->string('color', '20')->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
