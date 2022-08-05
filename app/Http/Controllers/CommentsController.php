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
        $request->validate([
            'beehive' => 'size:0',
            'postid' => 'required',
            'name' => 'required|max: 254',
            'trip' => 'required|max: 254',
            'comment' => 'required',
        ]);
        Comment::create([
            'post_id' => $request->input('postid'),
            'name' => $request->input('name'),
            'trip' => substr(crypt(($request->input('trip')), '/*'), 2),
            'comment' => $request->input('comment')
        ]);
        return Redirect::back();
    }
}

?>