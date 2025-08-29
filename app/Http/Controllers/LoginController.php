<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class LoginController extends Controller{
    public function login(){
        return Inertia::render('auth/login');
    }

    public function authenticate(){
        //validate
        $attributes = request()-> validate([
            'email'=> ['required', 'email'],
            'password'=> ['required']
        ]);

        if (Auth::guard('admin')->attempt($attributes)){
            request()-> session()-> regenerate();
            return redirect('/dashboard');

        }

        return back()->withErrors(['password' => 'Wrong credentials'])->onlyInput('password');
        
    }
}
