<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('firsname');
            $table->string('lastname');
            $table->string('numberphone');
            $table->date('birthday');
            $table->string('delivery_address');
            $table->dropColumn('name');    
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('firsname');
            $table->dropColumn('lastname');
            $table->dropColumn('numberphone');
            $table->dropColumn('birthday');
            $table->dropColumn('delivery_address');
            $table->string('name');            
        });
    }
}
