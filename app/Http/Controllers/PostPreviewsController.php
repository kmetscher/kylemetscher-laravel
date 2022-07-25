<?php
namespace App\Http\Controllers;
use App\Models\BlogPost;
use App\Models\Tags;
use App\Models\PostTags;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

/* Most views on the website that aren't a standalone page or viewing a post itself
return a view of several "post previews" that link to the body of the post itself.
These post previews can be generated with a single component that is hydrated
with different previews depending on the desired action, whether it is the 
recent list of posts on index, or viewing by tag, language, date etc. */

class PostPreviewsController extends Controller {
    public function displayIndexPosts() {

        /* The index page displays the five most recent posts in descending order.
        Posts have a primary-keyed ID that auto-increments, making the post ID a
        euphemism for its recency. Being an integer, it is also easy to manipulate.
        First, we select preview-relevant info with collection methods on the
        BlogPost model to return an array: */

        $posts = BlogPost::select('id', 'title', 'slug', 'image', 'date', 'language')
                        ->take(10)
                        ->orderBy('id', 'desc')
                        ->get();

        /* Tags associated with a post are retrieved with a join on the tags table;
        the site database is in 3NF. There is an associative table with post IDs
        and tag IDs used to make matches between them. */
        
        foreach ($posts as $post) { // match the tags by each post ID rendered
             $tags[] = PostTags::join('tags', function ($join) use ($post) {
                $join->on('post_tags.tag_id', '=', 'tags.id')
                ->where('post_tags.post_id', '=', $post->id);
             })->get();
        }

        /* The above returns an array of collections, which is a giant pain in the
        fucking ass. They are, however, indexed by the order in which post rows were
        retrieved.

        Now, we can hand off the posts collection and the tags array as props 
        to the PostPreview React component. */

        return Inertia::render('PostPreviews', [
            'posts' => $posts,
            'tags' => $tags
        ]);

    }
    public function displayByTag($tagID) {

    }
    public function displayByDate($dateTuple) {

    }
    public function displayByLang($lang) {
        
    }
}