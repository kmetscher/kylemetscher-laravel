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
    private function retrieveTags(Collection $posts) {

        /* Accepts an Illuminate collection of posts retrieved from the blog_posts table.
        Returns an array of collections of the tags associated with each post in the
        $posts parameter.

        Tags associated with a post are retrieved with a join on the tags table;
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
        retrieved. */
        
        return $tags;
    }

    public function displayIndexPosts() {

        /* The index page displays the five most recent posts in descending order.
        Posts have a primary-keyed ID that auto-increments, making the post ID a
        euphemism for its recency. Being an integer, it is also easy to manipulate.
        First, we select preview-relevant info with collection methods on the
        BlogPost model to return an array: */

        $posts = BlogPost::select('id', 'title', 'slug', 'image', 'date', 'language')
                        ->take(5)
                        ->orderBy('id', 'desc')
                        ->get();
        
        $tags = $this->retrieveTags($posts); // Retrieve the tags associated with these posts

        /* Now, we can hand off the posts collection and the tags array as props 
        to the PostPreview React component. */

        return Inertia::render('PostPreviews', [
            'taglinetype' => 'home',
            'posts' => $posts,
            'tags' => $tags
        ]);
    }

    public function displayByTag($tagID) {

        /* For this view, we'll query "backwards" -- retrieving posts with a post ID that
        matches a given tag ID in the post_tags table. */

        $posts = BlogPost::join('post_tags', function ($join) use ($tagID) {
            $join->on('blog_posts.id', '=', 'post_tags.post_id')
            ->where('post_tags.tag_id', '=', $tagID);
        })->orderBy('id', 'desc')->get();

        $tagName = Tags::select('name')->where('id', '=', $tagID)
                    ->get(); // we also want the tag name

        $tagline = "\"{$tagName[0]->name}\""; // I hate this language
        
        $tags = $this->retrieveTags($posts);

        return Inertia::render('PostPreviews', [
            'tagline' => $tagline,
            /* Passing the tag name as a "tagline" allows us to reuse the
            PostPreviews component since it can be conditionally rendered
            and contain any string, like the name of a tag, a date, or 
            a language, depending on state. */
            'taglinetype' => 'tag',
            'posts' => $posts,
            'tags' => $tags
        ]);
    }

    public function displayByDate($dateTuple) {

        /* For this view, we'll select rows with a date 'like' a tuple of a
        year and a month, so that archives can be organized on a monthly basis. */

        $year = substr($dateTuple, 0, 4); // year as YYYY
        $month = substr($dateTuple, 4, 2); // month as MM
        $date[] = ['year' => $year, 'month' => $month]; // for handing off

        /* Now we can query with specificity, and rely on SQL functions instead
        of PHP string manipulation. */

        $posts = BlogPost::where('date', 'like', "$year-$month-%") // cursed
                        ->orderBy('id', 'desc')->get();

        $tags = $this->retrieveTags($posts);

        return Inertia::render('PostPreviews', [
            'tagline' => $date,
            'taglinetype' => 'date',
            'posts' => $posts,
            'tags' => $tags
        ]);

    }
    public function displayByLang($lang) {
        
        /* This view is simple, with just a select-where match on language. */

        $posts = BlogPost::where('language', '=', $lang)
                            ->get();
        
        $tags = $this->retrieveTags($posts);

        return Inertia::render('PostPreviews', [
            'tagline' => $lang,
            'taglinetype' => 'lang',
            'posts' => $posts,
            'tags' => $tags
        ]);
    }
}