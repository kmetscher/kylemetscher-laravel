<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InertiaTestController;
use App\Http\Controllers\PostPreviewsController;
use App\Http\Controllers\ViewPostController;
use App\Http\Controllers\Gutenberg;
use Illuminate\Http\Request;
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

Route::inertia('/tagged', 'AllTags');

Route::inertia('/archive', 'Archive');

Route::inertia('/about', 'About');

Route::inertia('/contact', 'Contact');

// Auth

Route::get('/gutenberg', 
    [Gutenberg::class, 'home']);

Route::get('/gutenberg/new', 
    [Gutenberg::class, 'write']);

Route::get('/gutenberg/edit/{postID}',
    [Gutenberg::class, 'edit']);

Route::post('/gutenberg/new',
    [Gutenberg::class, 'submitPost']);

Route::post('gutenberg/edit',
    [Gutenberg::class, 'updatePost']);