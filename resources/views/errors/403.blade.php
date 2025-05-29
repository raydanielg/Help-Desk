@extends('layouts.error')
@section('content')
    <section class="relative">
        <div class="container-fluid relative">
            <div class="grid grid-cols-1">
                <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                    <div class="title-heading text-center my-auto">
                        <img src="{{ asset('images/errors/403.svg') }}" class="h-52 mx-auto" alt="">
                        <h1 class="mt-10 mb-4 md:text-4xl text-3xl font-bold">{{ __('Page Not Found!') }}</h1>
                        <p class="text-slate-400"> {{ __('The page you are looking for has not been found on our server.') }} </p>

                        <div class="mt-4">
                            <a href="/" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Back to Home</a>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
@endsection
