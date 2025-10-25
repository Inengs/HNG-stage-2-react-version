import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export default function Tickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("ticketapp_session")) {
      navigate("/login");
      toast.error("Please log in again");
    }
    setTickets(JSON.parse(localStorage.getItem("tickets") || "[]"));
  }, [navigate]);

  const formik = useFormik({
    initialValues: { title: "", status: "open", description: "", priority: "" },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Title must be at least 3 characters")
        .required("Title is required"),
      status: Yup.string()
        .oneOf(["open", "in_progress", "closed"], "Invalid status")
        .required("Status is required"),
      description: Yup.string().max(500, "Description too long"),
      priority: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      const newTicket = { id: uuidv4(), ...values };
      const updatedTickets = [...tickets, newTicket];
      localStorage.setItem("tickets", JSON.stringify(updatedTickets));
      setTickets(updatedTickets);
      resetForm();
      toast.success("Ticket created!");
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("Delete ticket?")) {
      const updatedTickets = tickets.filter((t) => t.id !== id);
      localStorage.setItem("tickets", JSON.stringify(updatedTickets));
      setTickets(updatedTickets);
      toast.success("Ticket deleted!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Title</label>
          <input
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <span>{formik.errors.title}</span>
          )}
        </div>
        <div>
          <label>Status</label>
          <select
            name="status"
            onChange={formik.handleChange}
            value={formik.values.status}
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          {formik.touched.status && formik.errors.status && (
            <span>{formik.errors.status}</span>
          )}
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <div>
          <label>Priority</label>
          <input
            name="priority"
            onChange={formik.handleChange}
            value={formik.values.priority}
          />
        </div>
        <button type="submit">Create Ticket</button>
      </form>
      <div>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="card">
            <h3>{ticket.title}</h3>
            <span className={`status-${ticket.status}`}>{ticket.status}</span>
            <button onClick={() => navigate(`/edit/${ticket.id}`)}>Edit</button>
            <button onClick={() => handleDelete(ticket.id)}>Delete</button>
          </div>
        ))}
      </div>
      <footer>Copyright © 2025</footer>
    </div>
  );
}
