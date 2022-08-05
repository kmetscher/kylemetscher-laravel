<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Inertia\Inertia;
use Illuminate\Support\Facades\Response;
use App\Models\Tags;
use App\Models\BlogPost;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register() {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception) {
        if (app()->environment(['local'])) {
            return parent::render($request, $exception);
        } 
        else {
            $alltags = Tags::selectRaw('
        name, id, (select count(post_id) from post_tags
        where post_tags.tag_id = tags.id) as refs')
                ->orderBy('name', 'asc')->get();

            $refs = $alltags->sum('refs');

            $archives = BlogPost::selectRaw(
                'DISTINCT YEAR(date) AS year, MONTH(date) AS month'
            )
                ->orderBy('year', 'desc')
                ->get();


            return Inertia::render('Error', [
                'status' => 404,
                'alltags' => $alltags,
                'totalrefs' => $refs,
                'archives' => $archives,
            ]);
        }
    }
}
