<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CommentsController extends Controller {
    public function submitComment(Request $request) {
        if (strlen($request->input('beehive')) > 0) {
            return redirect('index');
        }
        Comment::create([
            'post_id' => $request->input('postid'),
            'name' => $request->input('name'),
            'trip' => substr(crypt(($request->input('trip')), '/*'), 2),
            'comment' => $request->input('comment')
        ]);
        return Redirect::back();
        // return Inertia::render('ffs');
        //return Inertia::location("/viewpost/{$request->input('postid')}");
    }
}

?>