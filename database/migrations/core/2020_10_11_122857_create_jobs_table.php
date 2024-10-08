<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Determine whether the migration
     * should execute when we're accessing
     * a multistore instance.
     */
    public function runOnMultiStore()
    {
        return false;
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if ( ! Schema::hasTable( 'jobs' ) ) {
            Schema::create( 'jobs', function ( Blueprint $table ) {
                $table->id( 'id' );
                $table->string( 'queue' )->index();
                $table->longText( 'payload' );
                $table->unsignedTinyInteger( 'attempts' );
                $table->unsignedInteger( 'reserved_at' )->nullable();
                $table->unsignedInteger( 'available_at' );
                $table->unsignedInteger( 'created_at' );
            } );
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists( 'jobs' );
    }
};
