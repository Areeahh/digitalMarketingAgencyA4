import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/page";

export default function Signup() {
  return (
<div className="min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* SIGNUP SECTION */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8">

          {/* HEADING */}
          <div className="text-center mb-8">

            <h2 className="text-4xl font-bold text-cyan-400 mb-3">
              Create Account
            </h2>

            <p className="text-slate-300">
              Join us and grow your business digitally.
            </p>

          </div>

          {/* FORM */}
          <form className="space-y-6">

            {/* FULL NAME */}
            <div>

              <label className="block mb-2 text-slate-300 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block mb-2 text-slate-300 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

            </div>

            {/* CONFIRM PASSWORD */}
            <div>

              <label className="block mb-2 text-slate-300 font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition duration-300 hover:scale-[1.02]"
            >
              Signup
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-slate-300">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Login
              </Link>

            </p>

          </form>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-2xl font-bold text-cyan-400 mb-2">
            Digital Marketing Agency
          </h3>

          <p className="text-slate-300">
            Join us and grow your business digitally.
          </p>

        </div>
      </footer>
    </div>
  );
}