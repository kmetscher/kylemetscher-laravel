<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InertiaTestController;
use App\Http\Controllers\PostPreviewsController;
use App\Http\Controllers\ViewPostController;
use App\Http\Controllers\Gutenberg;
use App\Http\Controllers\CommentsController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;

// Post preview controller

Route::get('/',
    [PostPreviewsController::class, 'displayIndexPosts'])
    ->name('index');

Route::get('/tagged/{tagID}',
    [PostPreviewsController::class, 'displayByTag'])
    ->name('tagged.with');

Route::get('/archive/{dateTuple}',
    [PostPreviewsController::class, 'displayByDate'])
    ->name('date');

Route::get('/language/{lang}',
    [PostPreviewsController::class, 'displayByLang'])
    ->name('language');

// View post controller

Route::get('/viewpost/{postID}',
    [ViewPostController::class, 'byID'])
    ->name('viewpost');

// Plain views

Route::inertia('/tagged', 'AllTags');

Route::inertia('/archive', 'Archive');

Route::inertia('/about', 'About');

Route::inertia('/contact', 'Contact');

// Comments

Route::post('/comment',
    [CommentsController::class, 'submitComment']);

// Auth

Route::get('/gutenberg', 
    [Gutenberg::class, 'home'])
    ->name('gutenberg.home')
    ->middleware('auth.basic');

Route::get('/gutenberg/new', 
    [Gutenberg::class, 'write'])
    ->middleware('auth.basic');

Route::get('/gutenberg/edit/{postID}',
    [Gutenberg::class, 'edit'])
    ->middleware('auth.basic');

Route::post('/gutenberg/new',
    [Gutenberg::class, 'submitPost'])
    ->name('gutenberg.new')
    ->middleware('auth.basic');

Route::post('gutenberg/edit',
    [Gutenberg::class, 'updatePost'])
    ->name('gutenberg.update')
    ->middleware('auth.basic');

Route::post('gutenberg/delete',
    [Gutenberg::class, 'deletePost'])
    ->name('gutenberg.delete')
    ->middleware('auth.basic');