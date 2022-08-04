<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model {
    protected $table = 'blog_posts';
    protected $fillable = ['title', 'body', 'slug', 'image', 'date', 'language'];
    use HasFactory;
}
