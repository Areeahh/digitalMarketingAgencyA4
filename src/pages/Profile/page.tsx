import Navbar from "../../components/Navbar/page";

export default function ProfilePage() {
  return (
   <div className="min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto pt-10 px-4 pb-10">
        
        {/* Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
            />

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold">
                Sarah Williams
              </h1>

              <p className="text-blue-400 mt-2 text-lg">
                Senior Digital Marketing Strategist
              </p>

              <p className="text-slate-400 mt-4 max-w-2xl">
                Passionate about SEO, social media growth, paid advertising,
                and helping brands increase their online presence.
              </p>

              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
                  Edit Profile
                </button>

                <button className="border border-slate-700 hover:bg-slate-800 transition px-6 py-3 rounded-xl font-semibold">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-400">
              120+
            </h2>

            <p className="text-slate-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-400">
              95%
            </h2>

            <p className="text-slate-400 mt-2">
              Client Satisfaction
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-400">
              8+
            </h2>

            <p className="text-slate-400 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-400">
              350K
            </h2>

            <p className="text-slate-400 mt-2">
              Ad Reach Generated
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-10">
          <h2 className="text-3xl font-bold mb-6">
            Professional Skills
          </h2>

          <div className="space-y-6">

            {/* SEO */}
            <div>
              <div className="flex justify-between mb-2">
                <span>SEO Optimization</span>
                <span>95%</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full w-[95%]"></div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <div className="flex justify-between mb-2">
                <span>Social Media Marketing</span>
                <span>90%</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">
                <div className="bg-indigo-500 h-3 rounded-full w-[90%]"></div>
              </div>
            </div>

            {/* Paid Ads */}
            <div>
              <div className="flex justify-between mb-2">
                <span>Paid Advertising</span>
                <span>88%</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">
                <div className="bg-amber-500 h-3 rounded-full w-[88%]"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}