@extends('vendor.installer.layouts.master')

@section('template_title')
    {{ trans('installer_messages.environment.wizard.templateTitle') }}
@endsection

@section('title')
    <i class="fa fa-magic fa-fw" aria-hidden="true"></i>
    Setup Admin User
@endsection

@section('container')
    <div class="tabs tabs-full setup_final_page">

        <h4>Information needed <small>(Login credentials)</small></h4>
        <p class="mt-2 max-w-3xl mx-auto">
            Please provide the following information. Do not worry, you can always change these settings later. The email and password you input here will be your admin login credentials.
        </p>

        <form method="post" action="{{ route('LaravelInstaller::saveAdminSetup') }}" class="tabs-wrap">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">

            <div class="form-group {{ $errors->has('first_name') ? ' has-error ' : '' }}">
                <label for="app_pce">
                    {{ 'First Name' }}
                </label>
                <input type="text" name="first_name" id="first_name" value="" placeholder="{{ 'your first name here' }}" />
                @if ($errors->has('first_name'))
                    <span class="error-block">
                            <i class="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
                            {{ 'The first name is required.' }}
                        </span>
                @endif
            </div>

            <div class="form-group {{ $errors->has('last_name') ? ' has-error ' : '' }}">
                <label for="app_pce">
                    {{ 'Last Name' }}
                </label>
                <input type="text" name="last_name" id="last_name" value="" placeholder="{{ 'your last name here' }}" />
                @if ($errors->has('last_name'))
                    <span class="error-block">
                            <i class="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
                            {{ 'The last name is required.' }}
                        </span>
                @endif
            </div>

            <div class="form-group {{ $errors->has('email') ? ' has-error ' : '' }}">
                <label for="app_pce">
                    {{ 'Email' }}
                </label>
                <input type="text" name="email" id="email" value="" placeholder="{{ 'your email address to login' }}" />
                @if ($errors->has('email'))
                    <span class="error-block">
                            <i class="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
                            {{ 'The email is required.' }}
                        </span>
                @endif
            </div>

            <div class="form-group {{ $errors->has('password') ? ' has-error ' : '' }}">
                <label for="app_pce">
                    {{ 'Password' }}
                </label>
                <input type="text" name="password" id="password" value="" placeholder="{{ 'a new password to login' }}" />
                @if ($errors->has('password'))
                    <span class="error-block">
                            <i class="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
                            {{ 'The password is required.' }}
                        </span>
                @endif
            </div>

            <div class="buttons">
                <button class="button">
                    {{ __('Complete Setup') }}
                    <i class="fa fa-angle-right fa-fw" aria-hidden="true"></i>
                </button>
            </div>
        </form>

    </div>
@endsection

@section('scripts')
    <script type="text/javascript">
        function checkEnvironment(val) {
            var element=document.getElementById('environment_text_input');
            if(val=='other') {
                element.style.display='block';
            } else {
                element.style.display='none';
            }
        }
        function showDatabaseSettings() {
            document.getElementById('tab2').checked = true;
        }
        function showApplicationSettings() {
            document.getElementById('tab3').checked = true;
        }
    </script>
@endsection
