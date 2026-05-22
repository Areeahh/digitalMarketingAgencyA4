import Navbar from "../../components/Navbar/page";

export default function CartPage() {
  return (
   <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-10 px-4 pb-10">
        <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">

            {/* Item 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500"
                alt="SEO Service"
                className="w-full md:w-44 h-32 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-semibold">
                  SEO Optimization Package
                </h2>

                <p className="text-slate-400 mt-2">
                  Improve your website ranking and boost organic traffic.
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-4">
                    <button className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700">
                      -
                    </button>

                    <span>1</span>

                    <button className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700">
                      +
                    </button>
                  </div>

                  <p className="text-2xl font-bold text-blue-400">$199</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6">
              <img
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=500"
                alt="Social Media Marketing"
                className="w-full md:w-44 h-32 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-semibold">
                  Social Media Campaign
                </h2>

                <p className="text-slate-400 mt-2">
                  Reach more customers with high-performing social campaigns.
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-4">
                    <button className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700">
                      -
                    </button>

                    <span>1</span>

                    <button className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700">
                      +
                    </button>
                  </div>

                  <p className="text-2xl font-bold text-blue-400">$299</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-fit sticky top-6">
            <h2 className="text-3xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$498</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$20</span>
              </div>

              <div className="border-t border-slate-700 pt-4 flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>$518</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-semibold text-lg mt-8">
              Proceed to Checkout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}