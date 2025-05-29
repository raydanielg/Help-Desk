<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasTable('conversations')){
            if(!Schema::hasColumn('conversations', 'slug')){
                Schema::table('conversations', function (Blueprint $table) {
                    $table->string('slug', 100)->nullable();
                });
            }
        }

        if (Schema::hasTable('categories')){
            if(!Schema::hasColumn('categories', 'department_id')){
                Schema::table('categories', function (Blueprint $table) {
                    $table->integer('department_id')->nullable();
                });
            }
            if(!Schema::hasColumn('categories', 'parent_id')){
                Schema::table('categories', function (Blueprint $table) {
                    $table->integer('parent_id')->nullable();
                });
            }
        }

        if (Schema::hasTable('tickets')){
            if(!Schema::hasColumn('tickets', 'sub_category_id')){
                Schema::table('tickets', function (Blueprint $table) {
                    $table->integer('sub_category_id')->nullable();
                });
            }
        }

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tables', function (Blueprint $table) {
            //
        });
    }
};
