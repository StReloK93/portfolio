<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education_and_works', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->date('from');
            $table->date('to')->nullable();
            $table->string('major');
            $table->string('company');
            $table->boolean('job')->default(false);
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
        Schema::dropIfExists('education_and_works');
    }
};
