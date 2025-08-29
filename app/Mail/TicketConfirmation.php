<?php

namespace App\Mail;

use Illuminate\Mail\Mailables\Address;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class TicketConfirmation extends Mailable
{
    use Queueable, SerializesModels;
    protected $ticket;

    /**
     * Create a new message instance.
     */
    public function __construct($ticket)
    {
        $this->ticket = $ticket;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address("tcrctech@gmail.com", "tcrc"),
            subject: 'Ticket Confirmation'
,         );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            html: 'Mail.TicketConfirmation',
            with: [
                'ticketNumber' => $this->ticket['id'],
                'ticketName' => $this->ticket['name'],
                'ticketEmail' => $this->ticket['email'],
                'ticketSubject' => $this->ticket['subject'],
                'ticketDetails' => $this->ticket['details'],
                'ticketDepartment' => $this->ticket['department'],
                'ticketStatus' => $this->ticket['status'],
            ]
        );
    }


    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
