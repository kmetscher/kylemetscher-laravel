<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <meta property="og:image" content="{{ $page['props']['image'] }}">
  <meta property="og:title" content="{{ $page['props']['seoTitle'] }}">
  <meta property="og:description" content="{{ $page['props']['slug'] }}">
  <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
  <script src="{{ mix('/js/app.js') }}" defer></script>
  @inertiaHead
  @csrf
</head>

<body>
  @inertia
</body>

</html>