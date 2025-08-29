import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const ticketlogin: React.FC = () => {
    const [formData, setFormData] = useState({
      email: "",
      ticket: "",
    });
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Logging in with:", formData);
        router.get(route('tickets.show', formData.ticket)); 
    };
  
    const goBack = () => {
      router.visit("/");
    };
  
    const { errors } = usePage().props as { errors: Record<string, string> };
  
  
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            View Ticket
          </h1>
  
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
              {errors.email && <div style={{ color: "red", marginTop: "5px" }}>{errors.email}</div>}
  
            </div>
  
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="ticket"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                Ticket:
              </label>
              <input
                name="ticket"
                value={formData.ticket}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
              {errors.password && <div style={{ color: "red", marginTop: "5px" }}>{errors.ticket}</div>}
  
            </div>
  
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <button
                type="button"
                onClick={goBack}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Back
              </button>
  
              <button
                type="submit"
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#007bff",
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
          </form>
        </div>
      </div>
    );
  };
  
  export default ticketlogin;
  