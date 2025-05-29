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
        if (Schema::hasTable('ticket_entries')) { return; }
        Schema::create('ticket_entries', function (Blueprint $table) {
            $table->id();
            $table->integer('ticket_id');
            $table->integer('field_id')->nullable();
            $table->string('name');
            $table->string('label')->nullable();
            $table->string('value');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quote_entries');
    }
};
