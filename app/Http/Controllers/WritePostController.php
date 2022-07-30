<?php
namespace App\Http\Controllers;
use App\Models\BlogPost;
use App\Models\Tags;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WritePostController extends Controller {
    public function submitPost(Request $request) {
        echo $request->input('title');
        echo $request->input('slug');
        echo $request->input('body');
        foreach ($request->input('tags') as $tag) {
            echo $tag;
        }    
    }
}