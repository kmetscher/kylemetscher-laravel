<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InertiaTestController;
use App\Http\Controllers\PostPreviewsController;
use App\Http\Controllers\ViewPostController;
use Inertia\Inertia;

// Post preview controller

Route::get('/',
    [PostPreviewsController::class, 'displayIndexPosts']);

Route::get('/tagged/{tagID}',
    [PostPreviewsController::class, 'displayByTag']);

Route::get('/archive/{dateTuple}',
    [PostPreviewsController::class, 'displayByDate']);

Route::get('/language/{lang}',
    [PostPreviewsController::class, 'displayByLang']);

Route::get('/inertiatest/{postID}', 
    [InertiaTestController::class, 'inertiaTest']);

// View post controller

Route::get('/viewpost/{postID}',
    [ViewPostController::class, 'byID']);

// Plain views

Route::inertia('/alltags', 'AllTags');

Route::inertia('/archive', 'Archive');