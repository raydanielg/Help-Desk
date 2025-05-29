<?php

namespace App\Helpers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;

class EnvironmentManager
{
    /**
     * @var string
     */
    private $envPath;

    /**
     * @var string
     */
    private $envExamplePath;

    /**
     * Set the .env and .env.example paths.
     */
    public function __construct()
    {
        $this->envPath = base_path('.env');
        $this->envExamplePath = base_path('.env.example');
    }

    /**
     * Get the content of the .env file.
     *
     * @return string
     */
    public function getEnvContent()
    {
        if (! file_exists($this->envPath)) {
            if (file_exists($this->envExamplePath)) {
                copy($this->envExamplePath, $this->envPath);
            } else {
                touch($this->envPath);
            }
        }

        return file_get_contents($this->envPath);
    }

    /**
     * Get the the .env file path.
     *
     * @return string
     */
    public function getEnvPath()
    {
        return $this->envPath;
    }

    /**
     * Get the the .env.example file path.
     *
     * @return string
     */
    public function getEnvExamplePath()
    {
        return $this->envExamplePath;
    }

    /**
     * Save the edited content to the .env file.
     *
     * @param Request $input
     * @return string
     */
    public function saveFileClassic(Request $input)
    {
        $message = trans('installer_messages.environment.success');

        try {
            file_put_contents($this->envPath, $input->get('envConfig'));
        } catch (Exception $e) {
            $message = trans('installer_messages.environment.errors');
        }

        return $message;
    }

    /**
     * Save the form content to the .env file.
     *
     * @param Request $request
     * @return string
     */
    public function saveFileInfo(Request $request) {
        $results = trans('installer_messages.environment.success');
        $envFileData =
        'APP_NAME=\''.$request->app_name."'\n".
        'APP_PCE='.$request->app_pce."\n".
        'APP_URL='.$request->app_url."\n\n";

        try {
            file_put_contents($this->envPath, $envFileData);
        } catch (Exception $e) {
            $results = trans('installer_messages.environment.errors');
        }
        return $results;
    }

    /**
     * Save the form content to the .env file.
     *
     * @param Request $request
     * @return string
     */
    public function saveFileWizard(Request $request)
    {
        $results = trans('installer_messages.environment.success');
        $env = DotenvEditor::load();
        $app_pce = $env->getValue('APP_PCE');
        $version = $env->getValue('VERSION') ?? 'v1.0.0';
        $envFileData =
            'APP_NAME="'.$request->app_name.'"'."\n".
            'APP_ENV=local'."\n".
            'APP_DEBUG=true'."\n".
            'APP_INSTALLED='.$request->app_installed."\n".
            'APP_PCE="'.$app_pce.'"'."\n".
            'DB_SETUP='.$request->db_setup."\n".
            'APP_KEY='.'base64:'.base64_encode(Str::random(32))."\n".
            'APP_URL="'.$request->app_url.'"'."\n".
            'APP_TIMEZONE="UTC"'."\n".
            'TIMEZONE="UTC"'."\n".
            'APP_DEMO=false'."\n\n".
            'VERSION="'.$version.'"'."\n".

            'LOG_CHANNEL=stack'."\n\n".

            'DB_CONNECTION=mysql'."\n".
            'DB_HOST="'.$request->database_hostname.'"'."\n".
            'DB_PORT='.$request->database_port."\n".
            'DB_DATABASE="'.$request->database_name.'"'."\n".
            'DB_USERNAME="'.$request->database_username.'"'."\n".
            'DB_PASSWORD="'.$request->database_password.'"'."\n".
            '#DB_SOCKET="/Applications/MAMP/tmp/mysql/mysql.sock"'."\n\n".

            '# FOR EMAIL PIPING'."\n".
            'EMAIL_WEBHOOK_TOKEN=YOUR_PIPE_TOKEN'."\n".
            'IMAP_MAIL='."\n\n".

            'BROADCAST_DRIVER=pusher'."\n".
            'CACHE_DRIVER=array'."\n".
            'FILESYSTEM_DRIVER=local'."\n".
            'FILESYSTEM_DISK=local'."\n".
            'QUEUE_CONNECTION=sync'."\n".
            'SESSION_DRIVER=file'."\n".
            'SESSION_LIFETIME=800'."\n".
            'QUEUE_ENABLE=false'."\n\n".

            'MEMCACHED_HOST=127.0.0.1'."\n\n".

            'REDIS_HOST=127.0.0.1'."\n".
            'REDIS_PASSWORD=null'."\n".
            'REDIS_PORT=6379'."\n\n".

            'MAIL_MAILER=smtp'."\n".
            'MAIL_HOST='."\n".
            'MAIL_PORT=465'."\n".
            'MAIL_USERNAME='."\n".
            'MAIL_PASSWORD='."\n".
            'MAIL_ENCRYPTION=tls'."\n".
            'MAIL_FROM_ADDRESS='."\n".
            'MAIL_FROM_NAME=ProTask'."\n\n".

            'AWS_ACCESS_KEY_ID='."\n".
            'AWS_SECRET_ACCESS_KEY='."\n".
            'AWS_DEFAULT_REGION=us-east-1'."\n".
            'AWS_BUCKET='."\n\n".

            'PUSHER_APP_ID='."\n".
            'PUSHER_APP_KEY='."\n".
            'PUSHER_APP_SECRET='."\n".
            'PUSHER_APP_CLUSTER='."\n\n".

            'VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"'."\n".
            'VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"'."\n\n".

            'MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"'."\n".
            'MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"'."\n\n".

            'RE_CAPTCHA_KEY='."\n\n";

        try {
            file_put_contents($this->envPath, $envFileData);
        } catch (Exception $e) {
            $results = trans('installer_messages.environment.errors');
        }

        return $results;
    }
}
