import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-500 to-purple-600 text-white overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>

        <div className="max-w-container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">TicketFlow</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Streamline your support workflow with our powerful ticket
              management system
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/auth/login"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <img src={wave} alt="" className="w-full h-auto" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose TicketFlow?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Box 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Track Everything
              </h3>
              <p className="text-gray-600">
                Monitor all your tickets in one centralized dashboard with
                real-time updates
              </p>
            </div>

            {/* Feature Box 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Create, update, and resolve tickets in seconds with our
                intuitive interface
              </p>
            </div>

            {/* Feature Box 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Your data is protected with industry-standard security measures
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="relative">
          <div className="absolute -bottom-20 left-20 w-40 h-40 bg-purple-200 opacity-30 rounded-full"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-container mx-auto px-4 text-center">
          <p>&copy; 2025 TicketFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
