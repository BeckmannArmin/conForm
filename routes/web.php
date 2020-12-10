<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SinglePageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
    //return view('welcome');
//});

Route::get('/', [SinglePageController::class, 'index'])->where('any', '.*');

Route::get('/conceptPaper/lobby/{joincode}', 'App\Http\Controllers\ConceptPaperController@join');

Route::get('/home', function () {
    return redirect()->route('tasks.index');
})->name('home');
