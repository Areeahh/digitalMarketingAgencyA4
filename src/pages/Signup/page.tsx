import { Link } from "react-router-dom";

export default function Signup() {

  function toggleMenu() {
    console.log("Menu toggled");
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav>
        <Link to="/">
          <h2>Digital Marketing Agency</h2>
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* ================= SIGNUP FORM ================= */}
      <div className="page">
        <div className="form-container">
          <h2>Create Account</h2>

          <form>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                required
              />
            </div>

            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                required
              />
            </div>

            <button type="submit">
              Signup
            </button>

            <p>
              Already have an account?{" "}
              <Link to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="footer-container">
          <div>
            <h3>Digital Marketing Agency</h3>
            <p>
              Join us and grow your business digitally.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}