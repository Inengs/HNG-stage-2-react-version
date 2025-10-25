import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/auth";
import { storage } from "../utils/storage";
import Layout from "../components/Layout";
import TicketCard from "../components/TicketCard";
import Toast from "../components/Toast";

export default function TicketManagement() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "open",
    priority: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = () => {
    setTickets(storage.getTickets());
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title || formData.title.trim() === "") {
      newErrors.title = "Title is required";
    }
    if (!formData.status) {
      newErrors.status = "Status is required";
    }
    if (!["open", "in_progress", "closed"].includes(formData.status)) {
      newErrors.status = 'Status must be "open", "in_progress", or "closed"';
    }
    if (formData.description && formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      if (editingTicket) {
        storage.updateTicket(editingTicket.id, formData);
        setToast({ message: "Ticket updated successfully!", type: "success" });
      } else {
        storage.addTicket(formData);
        setToast({ message: "Ticket created successfully!", type: "success" });
      }

      resetForm();
      loadTickets();
    } catch (error) {
      setToast({
        message: "Failed to save ticket. Please try again.",
        type: "error",
      });
    }
  };

  const handleEdit = (ticket) => {
    setEditingTicket(ticket);
    setFormData({
      title: ticket.title,
      description: ticket.description || "",
      status: ticket.status,
      priority: ticket.priority || "",
    });
    setShowForm(true);
    setErrors({});
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      try {
        storage.deleteTicket(id);
        setToast({ message: "Ticket deleted successfully!", type: "success" });
        loadTickets();
      } catch (error) {
        setToast({
          message: "Failed to delete ticket. Please try again.",
          type: "error",
        });
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: "", description: "", status: "open", priority: "" });
    setEditingTicket(null);
    setShowForm(false);
    setErrors({});
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <Layout>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Ticket Management
            </h1>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
              >
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Create/Edit Form */}
          {showForm ? (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {editingTicket ? "Edit Ticket" : "Create New Ticket"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter ticket title"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Enter ticket description"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                  {errors.status && (
                    <p className="text-red-500 text-sm mt-1">{errors.status}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    {editingTicket ? "Update Ticket" : "Create Ticket"}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="mb-8 px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              + Create New Ticket
            </button>
          )}

          {/* Tickets List */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              All Tickets
            </h2>

            {tickets.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">
                  No tickets yet. Create your first ticket to get started!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
