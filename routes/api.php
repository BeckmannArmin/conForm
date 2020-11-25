<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoryController;
//use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskCategoryController;
use App\Http\Controllers\UserController;

/**
*   Routes for the category resource
*   Method	URI	Function
*   GET	/api/taskcategory	To list all the available categories
*   POST	/api/taskcategory	To create a new category resource
*   DELETE	/api/taskcategory/{category_id}	To delete a particular category resource
*   GET	/api/taskcategory/{category_id}	To fetch a particular category resource
*   GET	/api/taskcategory/{category}/tasks	To fetch all tasks for particular category
*   PUT	/api/taskcategory/{category_id}	To update a particular category resource
*   Routes for the task resource
*   Method	URI	Function
*   GET	/api/task	To list all the available tasks
*   POST	/api/task	To create a new task resource
*   DELETE	/api/task/{task_id}	To delete a particular task
*   GET	/api/task/{task_id}	To fetch a particular task resource
*   PUT	/api/task/{task_id}	To update a particular task resource
*   Routes for the user resource
*   Method	URI	Function
*   POST	/api/register	Create a new user
*   POST	/api/login	Log an existing user in
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
Route::group(['middleware' => 'auth:api'], function(){
Route::resource('/task', TaskController::class); 
Route::get('/taskcategory/{taskcategory}/tasks',[TaskCategoryController::class, 'tasks']);
Route::resource('/taskcategory',TaskCategoryController::class);
Route::post('logout', 'App\Http\Controllers\UserController@logout');
Route::get('profile', 'App\Http\Controllers\UserController@profile');
});

/**
 * beware that if you use scopes: it MUST have both scopes
 * scope: it can either have the first or second scope
 */

Route::group(['prefix' => 'user'], function() {
    Route::group(['middleware' => 'auth:api'], function(){
        Route::post('edit-category', function(){
            return response()->json([
                'message' => 'Admin access',
                'status_code' => 200
            ], 200);
        })->middleware('scope:do_anything');

        Route::post('create-category', function(){
            return response()->json([
                'message' => 'Everyone access',
                'status_code' => 200
            ], 200);
        })->middleware('scope:do_anything,can_create');
    });
});