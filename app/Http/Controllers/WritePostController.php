<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Tags;
use App\Models\PostTags;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WritePostController extends Controller {
    public function editor(Request $request) {
        return Inertia::render('Gutenberg', []);
    }
    public function submitPost(Request $request) {
        echo $request->input('title');
        echo $request->input('slug');
        echo $request->input('body');
        foreach ((json_decode($request->input('tags'))) 
        as $key => $tag) {
            echo "<br>";
            $tagID = Tags::select('id')->where('name', '=', $tag)->get('id')->toArray();
            echo (strval($tagID[0]['id']));
        }
        BlogPost::insertGetID([
            'title' => $request->input('title'),
            'slug' => $request->input('slug'),
            'body' => $request->input('body'),
            'image' => $request->input('image'),
            'date' => date("Y-m-d")]);
        $postID = BlogPost::select('id')->take(1)->orderBy('id', 'desc')->get('id')->toArray();
        foreach ((json_decode($request->input('tags'))) 
        as $key => $tag) {
            Tags::upsert(['name' => $tag], ['id', 'name']);
            $tagID = Tags::select('id')->where('name', '=', $tag)->get('id')->toArray();
            $scalarTagID = strval($tagID[0]['id']);
            $scalarPostID= strval($postID[0]['id']);
            PostTags::insert([
                'post_id' => $scalarPostID,
                'tag_id' => $scalarTagID,
            ]);
        }
    }
}
