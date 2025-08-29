<?php 
namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


class LoginTicketController extends Controller{

    public function show(){
        return Inertia::render("ticketlogin");
    }

    public function authenticate(){
        //validate
        $attributes = request()-> validate([
            'email'=> ['required', 'email'],
            'ticket'=> ['required']
        ]);


        $user = DB::table('ticket')
            ->where('email', $attributes['email'])
            ->where('id', $attributes['ticket']) // or ticket_number column
            ->first();
        
        if ($user) {
            Auth::guard('guest')->loginUsingId($user->id); // logs them in without password
            request()->session()->regenerate();
            return redirect('/tickets/{ticket}');
        }
        return back()->withErrors(['ticket' => 'Wrong credentials'])->onlyInput('ticket');
    }
}