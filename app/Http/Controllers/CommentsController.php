<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Comments;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class CommentsController extends Controller {
    public function submitComment(Request $request) {
        if (strlen($request->input('beehive')) > 0) {
            return redirect('/');
        }
        $trip = substr(crypt(($request->input('trip')), '/*'), 2);
        // echo $request->input('postid');
        Comments::insertGetID([
            'post_id' => $request->input('postid'),
            'name' => $request->input('name'),
            'trip' => $trip,
            'comment' => $request->input('comment')
        ]);
        return back()->with('status', 'Comment posted.');
    }
}

?>