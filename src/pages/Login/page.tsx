import { Link } from "react-router-dom";

export default function LoginPage() {

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>

      {/* ================= LOGIN FORM ================= */}
      <div className="page">
        <div className="form-container">
          <h2>Login</h2>

          <form>
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
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit">
              Login
            </button>

            <p>
              Don't have an account?{" "}
              <Link to="/signup">
                Signup
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
              Helping businesses grow online.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}