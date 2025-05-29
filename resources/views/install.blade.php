<!doctype html>
<html lang="en" class="light scroll-smooth">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-url" content="{{ env('APP_URL')}}">

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>HelpDesk</title>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/install.css') }}" rel="stylesheet">

    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="shortcut icon" href="/favicon.png">

    <script>
        var AIZ = AIZ || {};
    </script>
</head>
<body class="font-inter leading-none antialiased">
<div class="aiz-main-wrapper d-flex">

    <div class="flex-grow-1">
        @yield('content')
    </div>

</div>


@yield('script')

<script type="text/javascript">
    @foreach (session('flash_notification', collect())->toArray() as $message)
    AIZ.plugins.notify('{{ $message['level'] }}', '{{ $message['message'] }}');
    @endforeach
</script>
</body>
</html>
