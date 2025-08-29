<?php

namespace App\Http\Controllers;

use App\Mail\TicketConfirmation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\Ticket;
use App\Models\Comment;
use Illuminate\Support\Facades\Mail;
class FormController extends Controller
{
    //get form
    public function show()
    {
        return Inertia::render('ticketform');
    }

    //post form
    public function store(Request $request)
    {
        // Debug: Log the incoming request
        Log::info('storeStep1 called with data:', $request->all());
        
        // Validate the first step
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'department' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'details' => 'required|string',
            'urgency' => 'required|in:High,Medium,Low',
            'assigned_name' => 'required',
        ]);

        $ticket = Ticket::create([
            // 'id' => IncrementInteger::generate()->id,
            'name' => $validated['name'],
            'email' => $validated['email'],
            'subject' => $validated['subject'],
            'details' => $validated['details'],
            'urgency' => $validated['urgency'],
            'department' => $validated['department'],
            'assigned_name' => $validated['assigned_name'],
            'status' => 'Pending',
            'ip_address' => $request->ip(),
            
        ]);


        Comment::create([
            'ticket_id' => $ticket->id, 
            'comment' => $validated['name'] . ' created a ticket',
        ]);

        Mail::to($ticket->email)->send(new TicketConfirmation($ticket));

    }
    
} 