import React from "react";
import { router } from "@inertiajs/react";

const SidebarNav: React.FC = () => {
  const navigate = (path: string) => {
    router.visit(path);
  };

  return (
    <div
      style={{
        width: "240px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        minHeight: "100vh",
        boxShadow: "2px 0 6px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h2 style={{ marginBottom: "30px", fontSize: "24px", color: "#007bff" }}>
        Dashboard
      </h2>
      <NavButton label="Dashboard" path="/dashboard" />
      <NavButton label="View Tickets" path="/tickets" />
      <NavButton label="Raise a Ticket" path="/ticket-form1" />
      <NavButton label="Settings" path="/settings" />
    </div>
  );
};

type NavButtonProps = {
  label: string;
  path: string;
};

const NavButton: React.FC<NavButtonProps> = ({ label, path }) => {
  const handleClick = () => {
    router.visit(path);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "12px 16px",
        marginBottom: "12px",
        color: "white",
        border: "none",
        borderRadius: "6px",
        textAlign: "left",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#007bff";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#0a0a0a";
      }}
    >
      {label}
    </button>
  );
};

export default SidebarNav;