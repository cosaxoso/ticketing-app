<?php

use App\Http\Controllers\RequestController;
use App\Mail\TicketConfirmation;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\EmailsController;
use App\Http\Controllers\TicketController;
use Illuminate\Http\Request;
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
    // Route::put('/tickets/{id}', [TicketController::class, 'update'])->name('tickets.update');


    //shows the list of tickets
    Route::get('/tickets/{ticket}', [TicketController::class, 'show'])->name('ticket.show');

    //stores the comment
    Route::post('/tickets/{ticket}/comments',[CommentController::class, 'store']);
});


