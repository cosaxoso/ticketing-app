import React from "react";
import { Head } from "@inertiajs/react";

interface TicketData {
  id: number;
  name: string;
  email: string;
  department: string;
  subject: string;
  details: string;
  urgency: string;
  status?: string;
  assigned_name?: string;
  ip_address?: string;
  created_at?: string;
}

interface SubmitPageProps {
  ticket: TicketData;
}

const SubmitPage: React.FC<SubmitPageProps> = ({ ticket }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Head title="Ticket Submitted" />
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "white",
          color: "black",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Ticket Successfully Submitted
        </h1>
        <div>
          Ticket: {ticket.id}
        </div>

        <div style={{ lineHeight: "1.8" }}>
          <p><strong>Name:</strong> {ticket.name}</p>
          <p><strong>Email:</strong> {ticket.email}</p>
          <p><strong>Department:</strong> {ticket.department}</p>
          <p><strong>Subject:</strong> {ticket.subject}</p>
          <p><strong>Details:</strong> {ticket.details}</p>
          <p><strong>Urgency:</strong> {ticket.urgency}</p>
          {ticket.status && <p><strong>Status:</strong> {ticket.status}</p>}
          {ticket.assigned_name && <p><strong>Assigned To:</strong> {ticket.assigned_name}</p>}
          {ticket.ip_address && <p><strong>IP Address:</strong> {ticket.ip_address}</p>}
          {ticket.created_at && <p><strong>Created At:</strong> {new Date(ticket.created_at).toLocaleString()}</p>}
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <a
            href="/"
            style={{
              textDecoration: "none",
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 24px",
              borderRadius: "5px",
              display: "inline-block",
            }}
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
