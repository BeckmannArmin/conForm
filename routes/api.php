<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthController;


Route::group(['prefix' => 'auth'], function() {
    Route::post('register', 'App\Http\Controllers\AuthController@register');
});

Route::resource('categories', 'App\Http\Controllers\CategoryController');

//or
//Route::resource('categories', CategoryController::class);