<?php
namespace App\Http\Controllers;
use App\Models\BlogPost;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ViewPostController extends Controller {
    public function byID($postID) {
        $post = BlogPost::where('id', $postID)->get();
        foreach ($post as $postData) {
            $title = $postData->title;
            $image = $postData->image;
            $body = $postData->body;
            $date = $postData->date;
            $lang = $postData->language;
        }
        return Inertia::render('ViewPost', [
        'title' => $title,
        'image' => $image,
        'body' => $body,
        'date' => $date,
        'lang' => $lang]);
    }
}