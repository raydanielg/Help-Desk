<?php

namespace App\Http\Controllers;

use App\Helpers\DatabaseManager;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Artisan;
use Inertia\Inertia;

class DatabaseController extends Controller
{
    /**
     * @var DatabaseManager
     */
    private $databaseManager;

    /**
     * @param DatabaseManager $databaseManager
     */
    public function __construct(DatabaseManager $databaseManager)
    {
        $this->databaseManager = $databaseManager;
    }

    /**
     * Migrate and seed the database.
     *
     * @return \Illuminate\View\View
     */
    public function database()
    {
        $response = $this->databaseManager->migrateAndSeed();

        return redirect()->route('LaravelInstaller::admin_setup')->with(['message' => $response]);
//        return redirect()->route('LaravelInstaller::final')->with(['message' => $response]);
    }

    public function seedByClassName($className){
        if(!empty($className)){
            try {
                Artisan::call('db:seed', ['--class' => $className, '--force'=> true]);
            } catch (\Exception $e){
                dd($e);
            }
        }
        return Inertia::render('Blank', ['data' => 'done!']);
    }
}
