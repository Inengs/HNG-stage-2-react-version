export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">{children}</main>
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="max-w-container mx-auto px-4 text-center">
          <p>&copy; 2025 TicketFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
