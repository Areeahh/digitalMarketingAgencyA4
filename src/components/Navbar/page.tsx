import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav>
      <Link to="/" onClick={closeMenu}>
        <h2>Digital Marketing Agency</h2>
      </Link>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={isMenuOpen ? "open" : ""}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/services" onClick={closeMenu}>Services</Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>

        <li>
          <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
        </li>

        <li>
          <Link to="/login" onClick={closeMenu}>Login</Link>
        </li>

        <li>
          <Link to="/signup" onClick={closeMenu}>Signup</Link>
        </li>
      </ul>
    </nav>
  );
}