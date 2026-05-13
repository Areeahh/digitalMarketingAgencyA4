import { Link } from "react-router-dom";

export default function ContactPage() {

  function toggleMenu() {
    console.log("Menu toggled");
  }

  return (
    <>
      {/* NAVBAR */}
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
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

        </ul>

      </nav>

      {/* CONTACT FORM */}
      <div className="page">

        <div className="form-container">

          <h2>Contact Us</h2>

          <p>
            Have questions? Send us a message.
          </p>

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
              <label>Service Interested In</label>

              <select required>
                <option value="">
                  Select a service
                </option>

                <option>
                  SEO Optimization
                </option>

                <option>
                  Social Media Marketing
                </option>

                <option>
                  Paid Advertising
                </option>

                <option>
                  Content Marketing
                </option>

                <option>
                  Email Marketing
                </option>
              </select>
            </div>

            <div>
              <label>Message</label>

              <textarea
                rows={4}
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </div>

      {/* FOOTER */}
      <footer>

        <div className="footer-container">

          <div>
            <h3>Digital Marketing Agency</h3>

            <p>
              We’re here to help your business grow.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <p>
              <Link to="/">Home</Link>
            </p>

            <p>
              <Link to="/services">Services</Link>
            </p>

            <p>
              <Link to="/dashboard">Dashboard</Link>
            </p>
          </div>

          <div>
            <h3>Contact Info</h3>

            <p>Email: info@dma.com</p>

            <p>Phone: +123456789</p>
          </div>

        </div>

      </footer>
    </>
  );
}