<?php
namespace App\Http\Controllers;
use App\Models\BlogPost;
use App\Models\PostTags;
use App\Models\Comments;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ViewPostController extends Controller {
    private function retrievePostTags($postID) {
        /* Accepts an integer post ID to query the post_tags table for tag
        matches, then returns them as a collection. */
        $tags = PostTags::join('tags', function ($join) use ($postID) {
            $join->on('post_tags.tag_id', '=', 'tags.id')
            ->where('post_tags.post_id', '=', $postID);
         })->get();
         return $tags;
    }
    private function retrieveComments($postID) {
        /* Accepts post ID as a parameter to query for comments. */
        return Comments::where('post_id', '=', $postID)->get();
    }
    public function byID($postID) {
        $post = BlogPost::where('id', $postID)->get();
        foreach ($post as $postData) {
            $title = $postData->title;
            $image = $postData->image;
            $body = $postData->body;
            $date = $postData->date;
            $lang = $postData->language;
        }
        $tags = $this->retrievePostTags($postID);
        $comments = $this->retrieveComments($postID);
        return Inertia::render('ViewPost', [
        'id' => $postID,
        'title' => $title,
        'image' => $image,
        'body' => $body,
        'date' => $date,
        'lang' => $lang,
        'tags' => $tags,
        'comments' => $comments
    ]);
    }
}