<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasTable('ticket_fields')) { return; }
        Schema::create('ticket_fields', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('label')->nullable();
            $table->string('name')->nullable();
            $table->string('placeholder')->nullable();
            $table->text('options')->nullable();
            $table->tinyInteger('required')->default(0);
            $table->string('hint')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quote_fields');
    }
};
