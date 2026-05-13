import { Link } from "react-router-dom";

export default function ServiceCards() {
  return (
    <div className="card-container">

      <div className="card">
        <img
          src="https://finetouchmarketing.com/wp-content/uploads/2023/03/SEO-marketing-company.jpg"
          alt="SEO"
        />

        <h3>SEO Optimization</h3>

        <p>
          Improve your website ranking on search engines.
        </p>

        <Link to="/services" className="link-button">
          Learn More
        </Link>
      </div>

      <div className="card">
        <img
          src="https://www.dreamgrow.com/wp-content/uploads/2025/09/social-media-marketing-statistics-for-2025.jpg"
          alt="Social Media"
        />

        <h3>Social Media Marketing</h3>

        <p>
          Engage your audience across all platforms.
        </p>

        <Link to="/services" className="link-button">
          Learn More
        </Link>
      </div>

      <div className="card">
        <img
          src="https://www.clickslice.co.uk/wp-content/uploads/2023/06/Types-of-Paid-Advertising.jpg"
          alt="Ads"
        />

        <h3>Paid Advertising</h3>

        <p>
          Boost your reach with targeted ad campaigns.
        </p>

        <Link to="/services" className="link-button">
          Learn More
        </Link>
      </div>

    </div>
  );
}