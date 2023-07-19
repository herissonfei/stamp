<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="{{ asset('css/header.css') }}">
    <link rel="stylesheet" href="{{ asset('css/login.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
    <div id="app" class="page-container">

        <header class="header header--bg">

            <div class="wrapper--header">
                <a href="/home" ><img src="/img/png/logo.png" alt="logo" class="header__logo"></a>
                @if(request()->route()->getName() !== 'login' && request()->route()->getName() !== 'register')
                <div class="input-bar">
					<div class="input-bar__text">
						<p>Avancée</p>
						<img class="icone-dropdown-arrow icone-dropdown-arrow--input-bar" src="/img/png/icone-dropdown-arrow-blue.png" alt="fleche dropwdown"/>
					</div>
					<input class="input-bar__input" type="text" id="input-bar" name="input-bar" placeholder="Trouvez une enchère"/>
				</div>
                @endif
               
                <ul class="wrapper--header menu__sous-menu menu__sous-menu--header">
                    @guest
                        @if (Route::has('login'))
                            <li class="menu__item">
                                <a class="navEntete-link" href="{{ route('login') }}">Se connecter</a>
                            </li>
                        @endif

                        @if (Route::has('register'))
                            <li class="menu__item">
                                <a class="navEntete-link" href="{{ route('register') }}">Crée un compte</a>
                            </li>
                        @endif
                    @else
                        <li class="menu__item">
                            <a class="navEntete-link" href="#" role="button" href="#}}">
                                Bonjour, {{ Auth::user()->name }}
                            </a>
                            <a class="navEntete-link" href="/publish" role="button" href="#}}">
                                publier une enchère
                            </a>
                        </li>

                        <li class="menu__item">
                            <a class="" href="{{ route('logout') }}">Se déconnecter</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </li>
                    @endguest
                </ul>
                
            </div>



            
        </header>

        <main class="wrapper-contenu">
            @yield('content')
        </main>
<!-- 
        <footer>
            <div class="footer-container">
                <p>&copy; 2023 VINO. Tous les droits sont réservés.</p>
            </div>
        </footer> -->
    </div>
    <script src="{{ asset('script/main.js') }}"></script>

</body>
</html>
