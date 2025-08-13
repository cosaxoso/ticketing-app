<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\Comment;

class CommentController extends Controller{
    public function store(Request $request, Ticket $ticket){

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

    public function show(Comment $comment){
        return view('jobs.show', ['comment' => $comment]);
    } 
}