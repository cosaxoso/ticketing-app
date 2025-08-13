import SidebarNav from "@/components/SidebarNav";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Pagination from "@/components/Pagination";
import { Link } from "@inertiajs/react";


export default function TicketListPage({ tickets}){
  
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SidebarNav />
      
      <div style={{ flex: 1, padding: "40px"}}>
         <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
           All Tickets
         </h1>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "white",
              boxShadow: "0 0 8px rgba(0,0,0,0.05)",
              fontSize: "14px",
              borderRadius: "20px"
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#007bff", color: "white"}}>
                <th style={thStyle}>Urgency</th>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Subject</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Department</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Created At</th>
              </tr>
            </thead>
            <tbody>
              {tickets.data.map((ticket)=>
                <tr key={ticket.id} style={{ textAlign: "left" }}>
                  <td style={tdStyle}>{ticket.urgency}</td>
                  <td style={tdStyle}>#{ticket.id}</td>
                  <th style={tdStyle} className="text-white hover:underline">
                    <Link href={route("ticket.show", ticket.id )}>
                      {ticket.subject}
                    </Link>
                  </th>
                  <td style={tdStyle}>{ticket.name}</td>
                  <td style={tdStyle}>{ticket.department}</td>
                  <td style={tdStyle}>{ticket.status}</td>
                  <td style={tdStyle}>{new Date(ticket.created_at).toLocaleString()}</td>
                </tr>
              )}

            </tbody>
          </table>
          <Pagination links={tickets.meta.links} />
      </div>
    </div>
  );
};


const thStyle: React.CSSProperties = {
    padding: "12px",
    borderBottom: "2px solid #dee2e6",
    textAlign: "left",
    fontWeight: "bold",
};
const tdStyle: React.CSSProperties = {
    padding: "12px",
    borderTop: "1px solid #dee2e6",
    color: "#0a0a0a"
};
