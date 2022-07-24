<?php
namespace App\Http\Controllers;
use App\Models\BlogPost;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class InertiaTestController extends Controller {
    public function inertiaTest($postID) {
        $post = BlogPost::where('id', $postID)->get();
        foreach ($post as $blogPost) {
            echo $blogPost->title;
        }
    }
}
?>