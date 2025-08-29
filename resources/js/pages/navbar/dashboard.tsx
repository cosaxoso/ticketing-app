import React from "react";
// import SidebarNav from "js/Components/SidebarNav"; 
import SidebarNav from "@/components/SidebarNav";

const dashboard: React.FC = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SidebarNav />
      <div style={{ flex: 1, padding: "40px", backgroundColor: "#f8f9fa" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Welcome to the Dashboard</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Use the sidebar to navigate between different sections of your app.
        </p>
      </div>
    </div>
  );
};

export default dashboard;