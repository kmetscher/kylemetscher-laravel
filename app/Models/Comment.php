<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Comment extends Model {
    protected $table = 'comments';
    protected $fillable = ['post_id', 'name', 'trip', 'comment'];
    use HasFactory;
}