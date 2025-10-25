import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/auth";
import { storage } from "../utils/storage";
import Layout from "../components/Layout";

export default function Dashboard() {
  const navigate = useNavigate();
  const tickets = storage.getTickets();

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in_progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/auth/login");
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-gray-600 text-sm font-semibold mb-2">
                Total Tickets
              </h3>
              <p className="text-4xl font-bold text-gray-800">{stats.total}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-gray-600 text-sm font-semibold mb-2">
                Open Tickets
              </h3>
              <p className="text-4xl font-bold text-gray-800">{stats.open}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
              <h3 className="text-gray-600 text-sm font-semibold mb-2">
                In Progress
              </h3>
              <p className="text-4xl font-bold text-gray-800">
                {stats.inProgress}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-500">
              <h3 className="text-gray-600 text-sm font-semibold mb-2">
                Resolved
              </h3>
              <p className="text-4xl font-bold text-gray-800">{stats.closed}</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <Link
                to="/tickets"
                className="w-full md:w-auto inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-center"
              >
                Manage Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
