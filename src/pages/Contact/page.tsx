import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";  // ✅ FIX 3: reuse Footer component

export default function ContactPage() {
  return (
   <div className="min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTACT SECTION */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 md:p-12">

          {/* HEADER */}
          <div className="text-center mb-10">

            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Contact Us
            </h2>

            <p className="text-slate-300 text-lg">
              Have questions? Send us a message.
            </p>

          </div>

          {/* ✅ FIX 1: added onSubmit to prevent full page reload */}
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* FULL NAME */}
            <div>

              <label className="block mb-2 text-slate-300 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block mb-2 text-slate-300 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

            </div>

            {/* SELECT SERVICE */}
            <div>

              <label className="block mb-2 text-slate-300 font-medium">
                Service Interested In
              </label>

              {/* ✅ FIX 2: added value="" to all options so form data is readable */}
              <select
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">
                  Select a service
                </option>

                <option value="seo">
                  SEO Optimization
                </option>

                <option value="social-media">
                  Social Media Marketing
                </option>

                <option value="paid-ads">
                  Paid Advertising
                </option>

                <option value="content">
                  Content Marketing
                </option>

                <option value="email">
                  Email Marketing
                </option>

              </select>

            </div>

            {/* MESSAGE */}
            <div>

              <label className="block mb-2 text-slate-300 font-medium">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>

          </form>
        </div>
      </main>

      {/* ✅ FIX 3: use shared Footer instead of copy-pasted code */}
      <Footer />

    </div>
  );
}