<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\Tags;
use App\Models\BlogPost;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array {
        /* Returning information to hydrate props in the sidebar */
        return array_merge(parent::share($request), [
            'alltags' => fn() => Tags::get(),
            // do not do this at home
            'archives' => fn() => BlogPost::selectRaw(
                'DISTINCT YEAR(date) AS year, MONTH(date) AS month')
                ->orderBy('year', 'desc')
                ->get()
        ]);
    }
}
