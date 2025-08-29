<?php
namespace App\Http\Controllers;

use App\Http\Resources\TicketResource;
use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\Comment;
use App\Http\Resources\CommentResource;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class TicketController extends Controller{

    //Shows a list of tickets
    public function index(Request $request){

        $sortField=$request->input('sort', 'id');
        $sortDirection = $request->input('direction', 'desc');
        
        if(Auth::guest()){
            return redirect('/login');
        }

        $query = Ticket::query();

        $tickets = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return Inertia::render('navbar/ticketindex', [
            'tickets' => TicketResource::collection($tickets),
            'sort' =>$sortField, 
            'direction' => $sortDirection
        ]);
    }

    //Shows individaul ticket
    public function show(Ticket $ticket){
        if(Auth::guest()){
            return redirect('/login');
        }

        $comments = Comment::where('ticket_id', $ticket->id)->get(); 

        return Inertia::render('navbar/showticket', [
            'tickets' => new TicketResource($ticket),
            'comments' => CommentResource::collection($comments)
        ]);
    }

    public function update(Request $request, $id){
        if(Auth::guest()){
            return redirect('/login');
        }

        $request->validate([
            'status' => 'required|string|in:Pending,In progress,Resolved',
        ]);
        $ticket = Ticket::findOrFail($id);

        $ticket->status = $request->status;
        $ticket->save();

    }
}