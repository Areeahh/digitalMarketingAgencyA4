import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-slate-950 text-white">

      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          We Build{" "}
          <span className="text-cyan-400">
            Digital Growth Engines 🚀
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
          A full-service digital marketing agency helping startups and
          businesses scale with SEO, paid ads, and powerful branding
          strategies.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-5">

          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-lg hover:scale-105">
            Get Started
          </button>

          <Link
            to="/services"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-8 py-3 rounded-xl transition duration-300"
          >
            View Services
          </Link>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose Us
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-slate-800">

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Data-Driven Strategy
            </h3>

            <p className="text-slate-300 leading-relaxed">
              We use analytics and insights to create high-performing campaigns.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-slate-800">

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Experienced Team
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Our experts have worked with brands across multiple industries.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-slate-800">

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              ROI Focused
            </h3>

            <p className="text-slate-300 leading-relaxed">
              We focus on delivering measurable business results.
            </p>

          </div>

        </div>
      </section>
    </div>
  );
}