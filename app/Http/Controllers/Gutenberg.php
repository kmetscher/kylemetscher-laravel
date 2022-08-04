<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Tags;
use App\Models\PostTags;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

/* The Gutenberg view will provide all the functionality needed to write a
new post as well as to delete it. By routing to different controller behavior
for the view, we can make the most out of the React component.
*/

class Gutenberg extends Controller {
    // We just need the posts on the site to pick one to edit/delete.
    public function home() {
        $posts = BlogPost::select('id', 'title')
            ->orderBy('id', 'desc')->get()->toArray(); // i have absolutely fucking had it
        // with laravel's """collections"""
        return Inertia::render('GutenbergHome', [
            'posts' => $posts,
        ]);
    }

    public function write() {
        return Inertia::render('Gutenberg', []);
    } // Not much info needed to be passed.

    public function edit($postID) { // Editing an existing post
        $post = BlogPost::findOrFail($postID);
        // Retrieving the existing values of the blog post record
        $tags = PostTags::join('tags', 'tags.id', '=', 'post_tags.tag_id')
            ->where('post_tags.post_id', '=', $postID)->get('name');
        // as well as its tags
        $tagString = '';
        // The actual "tag" input in the React component 
        // explodes a comma-delimited string to pass to the backend as an
        // array anyway, so why do extra work to fiddle it into format?
        foreach ($tags as $index => $tag) {
            $tagString .= "$tag->name,";
        }
        return Inertia::render('Gutenberg', [
            'id' => $post->id,
            'title' => $post->title,
            'slug' => $post->slug,
            'body' => $post->body,
            'image' => $post->image,
            'language' => $post->language,
            'tagstring' => $tagString,
        ]);
    }
    // POST method. We're putting a new post in the database.
    public function submitPost(Request $request) {

        $newPost = BlogPost::create([
            'title' => $request->input('title'),
            'slug' => $request->input('slug'),
            'body' => $request->input('body'),
            'image' => $request->input('image'),
            'language' => $request->input('language'),
            'date' => date('Y-m-d'),
        ]);

        foreach ($request->input('tags') as $tag) {
            $newTag = Tags::firstOrCreate([ // Make new tags from those in input
                'name' => $tag, // or retrieve their records if they already exist
            ]);
            PostTags::create([ // and associate them
                'post_id' => $newPost->id,
                'tag_id' => $newTag->id
            ]);
        }

        return Redirect::route('viewpost', $newPost->id);
    }

    // POST method. We're updating an existing post.
    public function updatePost(Request $request) {

        $updatedPost = BlogPost::findOrFail($request->input('id'));

        $updatedPost->update([
            'title' => $request->input('title'),
            'slug' => $request->input('slug'),
            'body' => $request->input('body'),
            'image' => $request->input('image'),
            'language' => $request->input('language'),
        ]);

        PostTags::where('post_id', '=', $updatedPost->id)->delete();
        // Clear out the old tags

        foreach ($request->input('tags') as $tag) {
            $newTag = Tags::firstOrCreate([
                'name' => $tag
            ]); // and add the updated tags back
            PostTags::create([
                'post_id' => $updatedPost->id,
                'tag_id' => $newTag->id,
            ]);
        }        

        return Redirect::route('viewpost', $updatedPost->id);
    }

    public function deletePost(Request $request) {
        // pretty self-explanatory
        $postID = $request->input('id');
        BlogPost::where('id', '=', $postID)->delete();
        PostTags::where('post_id', '=', $postID)->delete();

        return Redirect::route('index');
    }
}
