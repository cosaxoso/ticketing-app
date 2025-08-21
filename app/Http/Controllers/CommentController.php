<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\Comment;
use Inertia\Inertia;

class CommentController extends Controller{
    
    public function store(Request $request){
        $validated = $request->validate([
            'comment' => ['required','string']
        ]);
        
        Comment::create([
            'comment'=> $validated['comment'],
            'user_id' => $request->user()->id,
            'ticket_id' => $request->ticket_id
        ]); 

        return redirect('/dashboard');
    }

}