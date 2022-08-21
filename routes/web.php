<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostPreviewsController;
use App\Http\Controllers\ViewPostController;
use App\Http\Controllers\Gutenberg;
use App\Http\Controllers\CommentsController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
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

Route::get('/login',
    [AuthController::class, 'login'])
    ->name('login');

Route::post('/login',
    [AuthController::class, 'authenticate'])
    ->name('authenticate');

// Gutenberg

Route::get('/gutenberg', 
    [Gutenberg::class, 'home'])
    ->name('gutenberg.home')
    ->middleware('auth');

Route::get('/gutenberg/new', 
    [Gutenberg::class, 'write'])
    ->middleware('auth');

Route::get('/gutenberg/edit/{postID}',
    [Gutenberg::class, 'edit'])
    ->middleware('auth');

Route::post('/gutenberg/new',
    [Gutenberg::class, 'submitPost'])
    ->name('gutenberg.new')
    ->middleware('auth');

Route::post('gutenberg/edit',
    [Gutenberg::class, 'updatePost'])
    ->name('gutenberg.update')
    ->middleware('auth');

Route::post('gutenberg/delete',
    [Gutenberg::class, 'deletePost'])
    ->name('gutenberg.delete')
    ->middleware('auth');

Route::post('gutenberg/image',
    [Gutenberg::class, 'uploadImage'])
    ->name('gutenberg.imageupload')
    ->middleware('auth');