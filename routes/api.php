<?php

use App\Http\Controllers\EmailPipingController;
use App\Http\Controllers\TicketsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/email-handler', [EmailPipingController::class, 'receiveEmailWebhook']);


//
//UrlFetchApp.fetch("https://yourdomain.com/api/email-handler", {
//  method: "post",
//  contentType: "application/json",
//  payload: JSON.stringify(payload)
//});
