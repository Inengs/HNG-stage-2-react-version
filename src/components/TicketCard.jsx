export default function TicketCard({ ticket, onEdit, onDelete }) {
  const statusColors = {
    open: "bg-green-100 text-green-800 border-green-200",
    in_progress: "bg-amber-100 text-amber-800 border-amber-200",
    closed: "bg-gray-100 text-gray-800 border-gray-200",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-800">{ticket.title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium border ${
            statusColors[ticket.status]
          }`}
        >
          {ticket.status.replace("_", " ")}
        </span>
      </div>
      {ticket.description && (
        <p className="text-gray-600 mb-4">{ticket.description}</p>
      )}
      {ticket.priority && (
        <p className="text-sm text-gray-500 mb-4">
          Priority: {ticket.priority}
        </p>
      )}
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(ticket)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(ticket.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
