import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/page";

export default function LoginPage() {
  return (
   <div className="min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* LOGIN SECTION */}
      <div className="flex flex-1 items-center justify-center px-6 py-16">

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">

          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
            Login
          </h2>

          <form className="space-y-6">

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
                placeholder="Enter your password"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition duration-300"
            >
              Login
            </button>

            {/* SIGNUP LINK */}
            <p className="text-center text-slate-300">
              Don't have an account?{" "}

              <Link
                to="/signup"
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Signup
              </Link>
            </p>

          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-2xl font-bold text-cyan-400 mb-2">
            Digital Marketing Agency
          </h3>

          <p className="text-slate-300">
            Helping businesses grow online.
          </p>

        </div>
      </footer>
    </div>
  );
}