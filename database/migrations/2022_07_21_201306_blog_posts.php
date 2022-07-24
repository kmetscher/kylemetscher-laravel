<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BlogPosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('prod_blog_posts', function(Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('body');
            $table->string('slug');
            $table->string('image');
            $table->date('date');
            $table->char('language', 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('prod_blog_posts');
    }
}
