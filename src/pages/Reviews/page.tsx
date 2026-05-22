import Navbar from '../../components/Navbar/page';
import Footer from '../../components/Footer/page';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Ahmed Raza',
      role: 'Business Owner',
      image: 'A',
      review:
        'Their digital marketing strategy completely transformed our online business. We saw major growth in website traffic and customer engagement.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Khan',
      role: 'Startup Founder',
      image: 'S',
      review:
        'Amazing team with excellent communication skills. Their SEO services helped our startup rank much higher on Google.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ali Hassan',
      role: 'Freelancer',
      image: 'A',
      review:
        'Professional, creative, and highly skilled developers. The UI design they created for my brand was outstanding.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Fatima Noor',
      role: 'Marketing Director',
      image: 'F',
      review:
        'The social media campaigns were highly effective and brought excellent customer reach for our company.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Usman Tariq',
      role: 'E-commerce Seller',
      image: 'U',
      review:
        'Their branding and advertisement services boosted our sales and improved customer trust significantly.',
      rating: 4,
    },
    {
      id: 6,
      name: 'Zain Ahmed',
      role: 'Agency Client',
      image: 'Z',
      review:
        'The best digital agency experience I have ever had. Everything was delivered on time with premium quality.',
      rating: 5,
    },
  ];

  return (
   <div className="min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
            Client Reviews
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-8">
            Discover what our clients say about our digital marketing,
            branding, SEO optimization, and web development services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {review.image}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {review.name}
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span
                    key={index}
                    className="text-yellow-400 text-2xl"
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
                “{review.review}”
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-linear-to-r from-blue-600 to-indigo-700 rounded-\32px\] p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready To Grow Your Business?
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-8 mb-10">
            Join hundreds of satisfied clients who trust our agency for
            professional digital marketing and modern web solutions.
          </p>

          <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}