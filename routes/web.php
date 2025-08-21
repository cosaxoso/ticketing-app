<?php

use App\Http\Controllers\RequestController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\TicketController;
use Inertia\Inertia;

Route::inertia('/', 'Home');

//Ticket forms
Route::get('/ticket-form', [App\Http\Controllers\RequestController::class, 'show']);
Route::post('/ticket-form', [App\Http\Controllers\RequestController::class, 'store']);


//login page
Route::get('/login',[AuthenticationController::class, 'login'])->name('login');
Route::post('/login', [AuthenticationController::class,'authenticate']);

Route::middleware('auth')->group(function(){
    Route::get('/dashboard', fn() => Inertia::render('dashboard/Dashboard'))->name('dashboard');

    Route::resource('/tickets', TicketController::class);

    //shows the list of tickets
    Route::get('/tickets/{ticket}', [TicketController::class, 'show'])->name('ticket.show');

    //stores the comment
    Route::post('/tickets/{ticket}/comments',[CommentController::class, 'store']);
});


