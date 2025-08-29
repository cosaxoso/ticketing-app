<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\LoginTicketController;
use App\Http\Controllers\TicketController;
use Inertia\Inertia;

Route::inertia('/', 'home');

//Ticket forms
Route::get('/ticket-form', [FormController::class, 'show']);
Route::post('/ticket-form', [FormController::class, 'store']);

Route::get('/ticket-login', [LoginTicketController::class, 'show']);
Route::post ('/ticket-login', [LoginTicketController::class,'authenticate']);

//login page
Route::get('/login',[LoginController::class, 'login'])->name('login');
Route::post('/login', [LoginController::class,'authenticate']);

Route::get('/tickets/{ticket}', [TicketController::class, 'show'])->name('ticket.show');


Route::middleware('auth')->group(function(){
    Route::get('/dashboard', fn() => Inertia::render('navbar/dashboard'))->name('dashboard');

    Route::resource('/tickets', controller: TicketController::class);
    // Route::put('/tickets/{id}', [TicketController::class, 'update'])->name('tickets.update');


    //shows the list of tickets
    // Route::get('/tickets/{ticket}', [TicketController::class, 'show'])->name('ticket.show');

    //stores the comment
    Route::post('/tickets/{ticket}/comments',[CommentController::class, 'store']);
});


