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
        Schema::table('tickets', function (Blueprint $table) {
            $table->string('message_id')->unique()->nullable()->after('subject');
            $table->string('in_reply_to')->nullable()->after('message_id');
            $table->integer('parent_id')->nullable()->after('in_reply_to');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tickets', function (Blueprint $table) {
            $table->dropColumn('message_id');
            $table->dropColumn('in_reply_to');
            $table->dropColumn('parent_id');
        });
    }
};
