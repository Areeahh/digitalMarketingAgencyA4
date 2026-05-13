import { Link } from "react-router-dom";

export default function ServicesPage() {

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
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>

      {/* ================= PAGE TITLE ================= */}
      <div className="page">
        <h1>Our Services</h1>
        <p>
          We provide a wide range of digital marketing services
          to help your business grow online.
        </p>
      </div>

      {/* ================= SERVICES CARDS ================= */}
      <div className="card-container">
        {/* SEO */}
        <div className="card">
          <img
            src="https://finetouchmarketing.com/wp-content/uploads/2023/03/SEO-marketing-company.jpg"
            alt="SEO"
          />
          <h3>
            Search Engine Optimization (SEO)
          </h3>
          <p>
            Improve your website ranking on Google
            and drive organic traffic.
          </p>
          <button>
            Get Service
          </button>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="card">
          <img
            src="https://www.dreamgrow.com/wp-content/uploads/2025/09/social-media-marketing-statistics-for-2025.jpg"
            alt="Social Media"
          />
          <h3>
            Social Media Marketing
          </h3>
          <p>
            Grow your audience and engagement across
            all social platforms. Through creative
            content, ads, and posting strategies,
            boost sales and reach a larger audience.
          </p>
          <button>
            Get Service
          </button>
        </div>

        {/* PAID ADS */}
        <div className="card">
          <img
            src="https://www.clickslice.co.uk/wp-content/uploads/2023/06/Types-of-Paid-Advertising.jpg"
            alt="Ads"
          />
          <h3>
            Paid Advertising
          </h3>
          <p>
            Run targeted ads on Google, Facebook,
            and Instagram. Paid ads deliver faster
            results by increasing visibility,
            traffic, and conversions.
          </p>
          <button>
            Get Service
          </button>
        </div>

        {/* CONTENT */}
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNpTLanhNh7sESFNHUufj2QYBQkOn52BDBw&s"
            alt="Content"
          />
          <h3>
            Content Marketing
          </h3>
          <p>
            Create valuable content to attract
            and retain customers.
          </p>
          <button>
            Get Service
          </button>
        </div>

        {/* EMAIL */}
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TfdYLKob-15A5DnVxEoHe2ZOTtG3ZjqLiw&s"
            alt="Email"
          />
          <h3>
            Email Marketing
          </h3>
          <p>
            Reach your customers directly with
            effective email campaigns.
          </p>
          <button>
            Get Service
          </button>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="footer-container">
          <div>
            <h3>Digital Marketing Agency</h3>
            <p>
              Helping businesses grow with smart
              marketing strategies.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}