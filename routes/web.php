<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\RegisterController ;
use App\Http\Controllers\UserController ;
use App\Http\Controllers\CustomAuthController ;

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

// =================================================================================================
Route::get('/', function () {
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/catalogue', function () {
    return view('catalogue');
});

Route::get('/enchere', function () {
    return view('enchere');
});


Route::get('/login', function () {
    return view('login');
});

// Route::get('/register', function () {
//     return view('register');
// });

// // 用户注册
// Route::post('/register' , [RegisterController::class, 'store']);

// ---------------------------
// Route::get('/login', [CustomAuthController::class, 'index'])->name('login');
// Route::post('/login', [CustomAuthController::class, 'authentication'])->name(
// 'login.authentication');
// Route::get('/registration', [CustomAuthController::class, 'create'])->name(
// 'user.registration');
// Route::post('/registration-store', [CustomAuthController::class, 'store'])->name(
// 'user.store');
// Route::post('/login', [CustomAuthController::class, 'authentication']);
// Route::get('/dashboard', [CustomAuthController::class, 'dashboard']);
    




// ---------------------------test----------------------------------------------------
// Route::get('/registerss' , [UserController::class, 'index']);
// Route::get('/test' , [UserController::class, 'index']);
// Route::get('/registerss' , [RegisterController::class, 'store']);
// Route::post('/registerss' , [RegisterController::class, 'store']);


