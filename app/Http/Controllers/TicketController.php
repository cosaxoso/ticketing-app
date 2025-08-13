<?php
namespace App\Http\Controllers;

use App\Http\Resources\TicketResource;
use App\Models\Ticket;
use Inertia\Inertia;

class TicketController extends Controller{

    //Shows a list of tickets
    public function index(){

        $query = Ticket::query();

        $tickets = $query->paginate(10)->onEachSide(1);

        return Inertia::render('dashboard/TicketListPage', [
            'tickets' => TicketResource::collection($tickets),
        ]);
    }


    //Shows individaul ticket
    public function show(Ticket $ticket){
        return Inertia::render('dashboard/ShowTickets', [
            'tickets' => new TicketResource($ticket),
        ]);
    }


}