import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/page";

export default function ServicesPage() {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      image:
        "https://finetouchmarketing.com/wp-content/uploads/2023/03/SEO-marketing-company.jpg",
      description:
        "Improve your website ranking on Google and drive organic traffic.",
    },
    {
      title: "Social Media Marketing",
      image:
        "https://www.dreamgrow.com/wp-content/uploads/2025/09/social-media-marketing-statistics-for-2025.jpg",
      description:
        "Grow your audience and engagement across all social platforms through creative content and targeted campaigns.",
    },
    {
      title: "Paid Advertising",
      image:
        "https://www.clickslice.co.uk/wp-content/uploads/2023/06/Types-of-Paid-Advertising.jpg",
      description:
        "Run targeted ads on Google, Facebook, and Instagram to increase visibility and conversions.",
    },
    {
      title: "Content Marketing",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNpTLanhNh7sESFNHUufj2QYBQkOn52BDBw&s",
      description:
        "Create valuable content to attract, engage, and retain customers.",
    },
    {
      title: "Email Marketing",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TfdYLKob-15A5DnVxEoHe2ZOTtG3ZjqLiw&s",
      description:
        "Reach your customers directly with powerful and effective email campaigns.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Title */}
      <section className="text-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Our Services
        </h1>

        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          We provide a wide range of digital marketing services
          to help your business grow online.
        </p>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 border border-slate-800"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-300 mb-6">
                  {service.description}
                </p>

                <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition">
                  Get Service
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              Digital Marketing Agency
            </h3>

            <p className="text-slate-300 mt-3">
              Helping businesses grow with smart marketing strategies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="hover:text-cyan-400 transition"
              >
                Home
              </Link>

              <Link
                to="/contact"
                className="hover:text-cyan-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}