import React from "react";
import { router } from "@inertiajs/react";

const Home: React.FC = () => {
  const handleMakeRequest = () => {
    router.visit('/ticket-form');
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button 
        onClick={handleMakeRequest}
        style={{ 
          marginBottom: "16px",
          padding: "12px 24px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Make Request
      </button>
      
      <button
        style={{
          padding: "12px 24px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        View Ticket
      </button>

    </div>
  );
};
export default Home;