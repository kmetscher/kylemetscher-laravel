## kylemetscher.com

This is a port of [my website](https://github.com/kmetscher/kylemetscher-dot-com) to a stack of the [Laravel PHP framework](https://laravel.com/), the [React JavaScript library](https://reactjs.org/), and the [Inertia adapter library](https://inertiajs.com/).

## In progress

- Full post editor functionality (edit, delete, more informative success page)
- Conversion of blog post record data to Markdown

## Stuck

- CSRF protection with Inertia. Absolutely nothing seems to work. Inertia's own docs on this do not spell out usage beyond direct contradiction of Laravel's or to suggest that you do nothing. 
- React transition group usage
- Basic auth usage with Laravel's authentication middleware (do I really need a user table?)
- ReactMarkdown component parameter usage

## Ideas

- Creating a permalink column in the post table to use for more readable and search-optimized URIs, or, using Laravel and React's URL tools to create permalinks while still using post ID primary keys
- Comment section?
- Search bar?

## Security

- SQL injection vulnerabilities tested with [sqlmap.py](https://github.com/sqlmapproject/sqlmap)
- Using limited-privilege mySQL user in development, will likely also use in production

## Links

- [My site](https://kylemetscher.com)
- [My resume](https://my.indeed.com/p/kylem-7bs7wxv)
- [IP Chicken](https://ipchicken.com)
