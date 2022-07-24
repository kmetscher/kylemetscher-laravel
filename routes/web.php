<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InertiaTestController;
use App\Http\Controllers\PostPreviewsController;
use App\Http\Controllers\ViewPostController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',
    [PostPreviewsController::class, 'displayIndexPosts']
);

Route::get('/inertiatest/{postID}', 
    [InertiaTestController::class, 'inertiaTest']
);

Route::get('/viewpost/{postID}',
    [ViewPostController::class, 'byID']
);