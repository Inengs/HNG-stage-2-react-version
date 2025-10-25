import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Dashboard() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("ticketapp_session")) {
      navigate("/login");
      toast.error("Please log in again");
    }
    setTickets(JSON.parse(localStorage.getItem("tickets") || "[]"));
  }, [navigate]);

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "open").length;
  const resolved = tickets.filter((t) => t.status === "closed").length;

  return (
    <div className="container">
      <div className="card">Total Tickets: {total}</div>
      <div className="card">Open Tickets: {open}</div>
      <div className="card">Resolved Tickets: {resolved}</div>
      <button onClick={() => navigate("/tickets")}>Manage Tickets</button>
      <button
        onClick={() => {
          localStorage.removeItem("ticketapp_session");
          navigate("/");
          toast.success("Logged out");
        }}
      >
        Logout
      </button>
      <footer>Copyright © 2025</footer>
    </div>
  );
}
