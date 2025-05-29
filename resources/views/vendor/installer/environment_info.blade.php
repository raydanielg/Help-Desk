@extends('vendor.installer.layouts.master')

@section('template_title')
    {{ trans('installer_messages.environment.wizard.templateTitle') }}
@endsection

@section('title')
    <i class="fa fa-magic fa-fw" aria-hidden="true"></i>
    {!! trans('installer_messages.environment.wizard.title') !!}
@endsection

@section('container')
    <div class="tabs tabs-full">

        <form method="post" action="{{ route('LaravelInstaller::environmentSaveInfo') }}" class="tabs-wrap">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <div class="form-group {{ $errors->has('app_pce') ? ' has-error ' : '' }}">
                <label for="app_pce">
                    {{ 'Purchase Code' }}
                </label>
                <input type="text" name="app_pce" id="app_pce" value="" placeholder="{{ 'input your purchase code' }}" />
                @if ($errors->has('app_pce'))
                    <span class="error-block">
                            <i class="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
                            {{ 'The purchase code is required.' }}
                        </span>
                @endif
            </div>

            <div class="buttons">
                <button class="button">
                    {{ trans('installer_messages.environment.info.button') }}
                    <i class="fa fa-angle-right fa-fw" aria-hidden="true"></i>
                </button>
            </div>
        </form>

    </div>
@endsection

@section('scripts')
    <script type="text/javascript">

    </script>
@endsection
