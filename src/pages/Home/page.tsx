import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

function HomePage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Grow Your Business With Digital Marketing</h1>

          <p>
            We help brands increase traffic, generate leads, and improve online
            presence through SEO, social media marketing, and paid advertising.
          </p>

          <button>Get Started</button>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>

        <div className="card-container">
          <div className="card">
            <h3>SEO Optimization</h3>

            <p>
              Improve your website ranking on search engines and increase
              organic traffic.
            </p>
          </div>

          <div className="card">
            <h3>Social Media Marketing</h3>

            <p>
              Build your brand presence and engage with your audience on social
              platforms.
            </p>
          </div>

          <div className="card">
            <h3>Paid Advertising</h3>

            <p>
              Run targeted advertising campaigns to boost conversions and sales.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;