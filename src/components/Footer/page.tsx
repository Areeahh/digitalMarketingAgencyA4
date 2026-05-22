export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Digital Agency
          </h2>
          <p className="text-gray-300 leading-7">
            We provide digital marketing solutions, branding strategies,
            SEO optimization, social media management and modern web design.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Services</li>
            <li>Dashboard</li>
            <li>About</li>
            <li>Reviews</li>   </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300 mb-2">Email: support@agency.com</p>
          <p className="text-gray-300 mb-2">Phone: +92 300 0000000</p>
          <p className="text-gray-300">Location: Pakistan</p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © 2026 Digital Agency. All rights reserved.
      </div>
    </footer>
  );
}