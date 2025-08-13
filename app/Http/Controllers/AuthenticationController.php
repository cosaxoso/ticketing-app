<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AuthenticationController extends Controller{
    public function index(){
        return Inertia::render('auth/Login');
    }

    public function login(){
        //validate
        $attributes = request()-> validate([
            'email'=> ['required', 'email'],
            'password'=> ['required']
        ]);

        if (!Auth::attempt($attributes)){
            throw ValidationException::withMessages(['password'=> 'Wrong credentials']);
        }
        
        //regenerate the session token
        request()-> session()-> regenerate();

        //return to diff page
        return redirect('/dashboard');
    }
}
