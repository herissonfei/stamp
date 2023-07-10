<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController ;
use App\Http\Controllers\BidController ;

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
Auth::routes();
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



Route::get('/logout', [HomeController::class, 'logout'])->name('logout');

// ----------------------------------------------------------------------------------------Bids
// 获取所有的竞拍Bid
Route::get('/getAllBids', [BidController::class, 'getAllBids']);
// 获取一个的竞拍Bid
Route::get('enchere/{id}', function ($id) {
    return view('enchere');
});

Route::get('/getOneBid/{id}', [BidController::class, 'getOneBid']);



    







