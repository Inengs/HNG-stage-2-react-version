import "../../../assets/global.css";
export default function Landing() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Ticket App</h1>
        <p>Manage your tickets with ease!</p>
        <button onClick={() => (window.location.href = "/login")}>Login</button>
        <button onClick={() => (window.location.href = "/signup")}>
          Get Started
        </button>
        <div className="decorative-circle"></div>
      </div>
      <section className="card">Features...</section>
      <footer>Copyright © 2025</footer>
    </div>
  );
}
