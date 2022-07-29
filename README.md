## kylemetscher.com

This is a port of [my website](https://github.com/kmetscher/kylemetscher-dot-com) to a stack of the [Laravel PHP framework](https://laravel.com/), the [React JavaScript library](https://reactjs.org/), and the [Inertia adapter library](https://inertiajs.com/).

## In progress

- About and Contact pages
- Gutenberg pages
- Restructuring directories to resemble the vanilla website build

## Stuck

- React transition group usage

## Ideas

- Creating a permalink column in the post table to use for more readable and search-optimized URIs, or, using Laravel and React's URL tools to create permalinks while still using post ID primary keys
- Comment section?
- Using Breeze library for authentication on admin side of site as opposed to httpauth in vanilla site build

## Security

- SQL injection vulnerabilities tested with [sqlmap.py](https://github.com/sqlmapproject/sqlmap)
- Using limited-privilege mySQL user in development, will likely also use in production

## Links

- [My site](https://kylemetscher.com)
- [My resume](https://my.indeed.com/p/kylem-7bs7wxv)
- [IP Chicken](https://ipchicken.com)
