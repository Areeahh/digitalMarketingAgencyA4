import Navbar from "../../components/Navbar/page";
export default function AboutPage() {
  return (
   <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-semibold uppercase tracking-widest">
              About Our Agency
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4">
              We Build Brands That Grow Online.
            </h1>

            <p className="text-slate-400 text-lg mt-6 leading-relaxed">
              Our digital marketing agency helps businesses grow through
              innovative SEO strategies, social media marketing, paid
              advertising, branding, and high-converting web solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-semibold">
                Explore Services
              </button>

              <button className="border border-slate-700 hover:bg-slate-900 transition px-8 py-4 rounded-2xl font-semibold">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
              alt="Agency Team"
              className="rounded-3xl shadow-2xl border border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">SEO Strategy</h2>
            <p className="text-slate-400 leading-relaxed">
              We optimize websites with advanced SEO techniques to improve
              visibility and increase organic traffic.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Social Media Growth</h2>
            <p className="text-slate-400 leading-relaxed">
              Build your online presence with powerful content strategies and
              targeted social campaigns.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Paid Advertising</h2>
            <p className="text-slate-400 leading-relaxed">
              Generate leads and maximize ROI with effective Google Ads and
              social media advertising.
            </p>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Meet Our Team
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A passionate team of digital experts dedicated to helping your
            business grow online.
          </p>

          {/*
      Team Data
    */}
          {[
            {
              name: "Sarah Johnson",
              role: "SEO Specialist",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
            },

            {
              name: "Michael Carter",
              role: "Social Media Manager",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
            },

            {
              name: "Emily Davis",
              role: "Content Strategist",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
            },

            {
              name: "James Wilson",
              role: "Paid Ads Expert",
              image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="inline-block w-full sm:w-[48%] lg:w-[23%] m-2 align-top"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto object-cover"
                />

                <h3 className="text-xl font-bold mt-6">
                  {member.name}
                </h3>

                <p className="text-blue-400 mt-2">
                  {member.role}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
