<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoryController;

//use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/**
 *   Routes for the category resource
 *   Method    URI    Function
 *   GET    /api/taskcategory    To list all the available categories
 *   POST    /api/taskcategory    To create a new category resource
 *   DELETE    /api/taskcategory/{category_id}    To delete a particular category resource
 *   GET    /api/taskcategory/{category_id}    To fetch a particular category resource
 *   GET    /api/taskcategory/{category}/tasks    To fetch all tasks for particular category
 *   PUT    /api/taskcategory/{category_id}    To update a particular category resource
 *   Routes for the task resource
 *   Method    URI    Function
 *   GET    /api/task    To list all the available tasks
 *   POST    /api/task    To create a new task resource
 *   DELETE    /api/task/{task_id}    To delete a particular task
 *   GET    /api/task/{task_id}    To fetch a particular task resource
 *   PUT    /api/task/{task_id}    To update a particular task resource
 *   Routes for the user resource
 *   Method    URI    Function
 *   POST    /api/register    Create a new user
 *   POST    /api/login    Log an existing user in
 */

//Route::post('register', 'App\Http\Controllers\AuthController@register');
//Route::post('login', 'App\Http\Controllers\AuthController@login');

Route::resource('categories', 'App\Http\Controllers\CategoryController');

Route::post('register', 'App\Http\Controllers\UserController@register');
Route::post('login', 'App\Http\Controllers\UserController@login');


/**
 * We can group the routes we need auth for
 * under common middleware. It secures our routes
 */
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'App\Http\Controllers\UserController@logout');
    Route::get('profile', 'App\Http\Controllers\UserController@profile');
    Route::resource('conceptPaper', 'App\Http\Controllers\ConceptPaperController');

    Route::prefix('tasks')->group(function (){
        Route::get('/', 'App\Http\Controllers\TaskController@index')->name('tasks.index');
        Route::post('/', 'App\Http\Controllers\TaskController@store')->name('tasks.store');
        Route::put('sync', 'App\Http\Controllers\TaskController@sync')->name('tasks.sync');
        Route::put('{task}', 'App\Http\Controllers\TaskController@update')->name('tasks.update');
    });

    Route::prefix('statuses')->group(function (){
        Route::post('/', 'App\Http\Controllers\StatusController@store')->name('statuses.store');
        Route::put('/', 'App\Http\Controllers\StatusController@update')->name('statuses.update');
    });
});

/**
 * beware that if you use scopes: it MUST have both scopes
 * scope: it can either have the first or second scope
 */

Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:do_anything'], function () {
        Route::get('/admin-scope', function () {
            return response()->json([
                'message' => 'Admin access',
                'status_code' => 200
            ], 200);
        });
    });
    Route::group(['middleware' => 'scope:can_create'], function () {
        Route::get('/user-scope', function () {
            return response()->json([
                'message' => 'User access',
                'status_code' => 200
            ], 200);
        });
    });

});
