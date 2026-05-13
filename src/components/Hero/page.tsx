import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="page"
        style={{ textAlign: "center", padding: "60px 20px" }}
      >
        <h1>We Build Digital Growth Engines 🚀</h1>

        <p style={{ maxWidth: "600px", margin: "auto" }}>
          A full-service digital marketing agency helping startups and
          businesses scale with SEO, paid ads, and powerful branding strategies.
        </p>

        <div style={{ marginTop: "20px" }}>
          <button>Get Started</button>

          <Link to="/services" className="link-button">
            View Services
          </Link>
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="page">
        <h2 style={{ textAlign: "center" }}>
          Why Choose Us
        </h2>

        <div className="card-container">
          <div className="card">
            <h3>Data-Driven Strategy</h3>

            <p>
              We use analytics and insights to create high-performing campaigns.
            </p>
          </div>

          <div className="card">
            <h3>Experienced Team</h3>

            <p>
              Our experts have worked with brands across multiple industries.
            </p>
          </div>

          <div className="card">
            <h3>ROI Focused</h3>

            <p>
              We focus on delivering measurable business results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}