<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoryController;

//Route::get('/users', [UserController::class, 'index']);
//or
//Route::get('/users', 'App\Http\Controllers\UserController@index');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('categories', 'App\Http\Controllers\CategoryController');

//or
//Route::resource('categories', CategoryController::class);