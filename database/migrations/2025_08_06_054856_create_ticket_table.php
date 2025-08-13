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
        Schema::create('ticket', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('name');
            $table->string('email');
            $table->string('ip_address')->nullable(); 

            $table->enum('urgency', ['High', 'Medium', 'Low']);
            $table->string('subject');
            $table->longText('details');    
            $table->string('department');
            $table->string('assigned_name');
            $table->enum('status', ['Pending', 'In progress', 'Resolved'])->default('Pending');
            $table->string('image')->nullable();    
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket');
    }
};
