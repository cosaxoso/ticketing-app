<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\Ticket;
use App\Models\Comment;

class RequestController extends Controller
{
    //get form
    public function show()
    {
        return Inertia::render('TicketForm');
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
        ]);

        $ticket = Ticket::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'subject' => $validated['subject'],
            'details' => $validated['details'],
            'urgency' => $validated['urgency'],
            'department' => $validated['department'],
            'assigned_name' => 'Unassigned',
            'status' => 'pending',
            'ip_address' => $request->ip(),
        ]);

        Comment::create([
            'ticket_id' => $ticket->id, 
            'comment' => $validated['name'] . ' created a ticket',
        ]);


        // Redirect to the home page
        // return redirect('/');
        
    }

    
    /**
     * Display the main viewer page
     */
    public function showMain()
    {
        return Inertia::render('Home');
    }
} 