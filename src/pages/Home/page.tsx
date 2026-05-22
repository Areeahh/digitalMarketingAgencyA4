import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Star,
  CheckCircle,
  BarChart2,
  Target,
  Megaphone,
  Search,
  Mail,
  Globe,
  Play,
  ChevronRight,
  Zap,
} from 'lucide-react';

import Navbar from '../../components/Navbar/page';
import Footer from '../../components/Footer/page';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Improve rankings and increase organic traffic with advanced SEO strategies.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    desc: 'Build strong engagement and grow your audience on social platforms.',
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    desc: 'Generate quality leads using high-converting ad campaigns.',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    desc: 'Track campaign performance with detailed analytics and reports.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc: 'Boost customer retention using personalized email campaigns.',
  },
  {
    icon: Globe,
    title: 'Content Marketing',
    desc: 'Create engaging content that attracts and converts customers.',
  },
];

const stats = [
  {
    value: '500+',
    label: 'Clients Served',
  },
  {
    value: '$2.4B',
    label: 'Revenue Generated',
  },
  {
    value: '98%',
    label: 'Client Retention',
  },
  {
    value: '12x',
    label: 'Average ROI',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechBloom',
    text: 'Amazing marketing services with outstanding SEO results.',
    rating: 5,
    initials: 'SM',
  },
  {
    name: 'James Rodriguez',
    role: 'CMO, GrowthLabs',
    text: 'Their PPC campaigns generated excellent ROI for our business.',
    rating: 5,
    initials: 'JR',
  },
  {
    name: 'Priya Nair',
    role: 'Founder, Aurelia Brand',
    text: 'Professional team with excellent communication and creativity.',
    rating: 5,
    initials: 'PN',
  },
];

export default function Home() {
  return (
 <div className="min-h-screen">
  <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-br from-gray-950 via-blue-950 to-black py-28 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-5 py-2 rounded-full mb-8 border border-blue-500/30">
            <Zap size={18} />
            #1 Digital Marketing Agency
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
            We Grow Brands That
            <br />
            <span className="text-blue-500">Mean Business</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-9 mb-12">
            From SEO to paid advertising, we build complete digital marketing
            systems that drive growth, increase traffic, and maximize revenue.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/services">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl hover:scale-105 transition-all duration-300">
                Get Free Audit
                <ArrowRight size={20} />
              </button>
            </Link>

            <button className="border border-gray-500 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all duration-300">
              <Play size={18} fill="white" />
              Watch Case Study
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              'Google Premier Partner',
              'Meta Business Partner',
              'HubSpot Certified',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-gray-300"
              >
                <CheckCircle size={18} className="text-green-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* STATS */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
                {stat.value}
              </h2>

              <p className="text-blue-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-5 py-2 rounded-full font-semibold mb-6">
              What We Do
            </div>

            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
              Full-Stack Digital Marketing
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-8">
              Every strategy is designed to increase traffic, generate leads,
              and improve your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-8">
                  <service.icon
                    size={30}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-8 mb-6">
                  {service.desc}
                </p>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ChevronRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-5 py-2 rounded-full font-semibold mb-6">
              Why Choose Us
            </div>

            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
              We Create Marketing Strategies That Deliver Results
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-9 mb-10">
              Our experienced team combines creativity, analytics, and
              technology to help brands scale faster and achieve measurable
              growth.
            </p>

            <div className="space-y-5">
              {[
                'SEO & Google Ranking Optimization',
                'High Conversion Advertising Campaigns',
                'Advanced Analytics & Reporting',
                'Social Media Growth Strategies',
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 text-lg"
                >
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-4xl p-12 shadow-2xl">
            <h3 className="text-4xl font-black text-white mb-10">
              Marketing Performance
            </h3>

            <div className="space-y-8">
              {[
                {
                  label: 'SEO Growth',
                  value: '95%',
                },
                {
                  label: 'Lead Conversion',
                  value: '88%',
                },
                {
                  label: 'Client Satisfaction',
                  value: '98%',
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-3 text-white font-semibold">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>

                  <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-5 py-2 rounded-full font-semibold mb-6">
              Testimonials
            </div>

            <h2 className="text-5xl font-black text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-8 mb-8">
                  “{testimonial.text}”
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-linear-to-r from-gray-950 via-blue-950 to-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-5 py-2 rounded-full border border-blue-500/30 mb-8">
            <Zap size={18} />
            Limited spots available
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
            Ready To Grow
            <br />
            Your Business?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-9 mb-12">
            Schedule a free strategy call today and discover how our digital
            marketing solutions can help your brand scale faster.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all duration-300">
                Schedule Free Call
                <ArrowRight size={20} />
              </button>
            </Link>

            <Link to="/services">
              <button className="border border-gray-500 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                View Services
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>
      </section>

      {/* AWARDS */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-5 py-2 rounded-full font-semibold mb-6">
              Recognition
            </div>

            <h2 className="text-5xl font-black text-gray-900 dark:text-white">
              Award-Winning Agency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Award,
                title: 'Best Digital Agency',
                org: 'Clutch.co',
              },
              {
                icon: TrendingUp,
                title: 'Fastest Growing Agency',
                org: 'Inc. 5000',
              },
              {
                icon: Users,
                title: 'Top SEO Agency',
                org: 'G2 Reviews',
              },
              {
                icon: Star,
                title: 'Excellence in PPC',
                org: 'Search Engine Land',
              },
            ].map((award) => (
              <div
                key={award.title}
                className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 text-center shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300"
              >
                <award.icon
                  size={40}
                  className="mx-auto mb-6 text-yellow-400"
                />

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  {award.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400">
                  {award.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}