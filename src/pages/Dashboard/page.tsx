import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  Target,
  Mail,
  BarChart2,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Settings,
  LogOut,
  Search,
  Plus,
  Eye,
} from 'lucide-react';

import Navbar from '../../components/Navbar/page';
import Footer from '../../components/Footer/page';

const kpis = [
  {
    label: 'Organic Traffic',
    value: '24,892',
    change: '+18.2%',
    up: true,
    icon: TrendingUp,
  },
  {
    label: 'Leads Generated',
    value: '1,247',
    change: '+12.5%',
    up: true,
    icon: Users,
  },
  {
    label: 'Active Campaigns',
    value: '8',
    change: '+2 this month',
    up: true,
    icon: Target,
  },
  {
    label: 'Email Open Rate',
    value: '41.6%',
    change: '-0.8%',
    up: false,
    icon: Mail,
  },
];

const campaigns = [
  {
    name: 'Google Search – Brand',
    channel: 'PPC',
    status: 'Active',
    roas: '4.8x',
    leads: 184,
    trend: 'up',
  },
  {
    name: 'SEO Content Cluster Q2',
    channel: 'SEO',
    status: 'Active',
    roas: '—',
    leads: 342,
    trend: 'up',
  },
  {
    name: 'LinkedIn Lead Gen',
    channel: 'Social',
    status: 'Active',
    roas: '3.1x',
    leads: 67,
    trend: 'up',
  },
  {
    name: 'Welcome Email Sequence',
    channel: 'Email',
    status: 'Active',
    roas: '—',
    leads: 89,
    trend: 'down',
  },
];

const activities = [
  {
    text: 'New lead from Google Ads campaign',
    time: '2 min ago',
    type: 'success',
  },
  {
    text: 'SEO ranking increased for agency keywords',
    time: '1 hour ago',
    type: 'info',
  },
  {
    text: 'Email newsletter sent successfully',
    time: '3 hours ago',
    type: 'info',
  },
  {
    text: 'Campaign budget limit reached',
    time: '5 hours ago',
    type: 'warning',
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
  <div className="min-h-screen">
      <Navbar />

      <div className="flex">
        {/* SIDEBAR */}
        <aside className="hidden lg:flex flex-col w-72 min-h-screen bg-gray-900 border-r border-gray-800 sticky top-0">
          <div className="px-8 py-8 border-b border-gray-800">
            <Link
              to="/"
              className="flex items-center gap-3 text-blue-400 text-2xl font-black"
            >
              <TrendingUp size={28} />
              NexusDigital
            </Link>
          </div>

          <nav className="flex-1 p-5 flex flex-col gap-3">
            {[
              {
                id: 'overview',
                label: 'Overview',
                icon: BarChart2,
              },
              {
                id: 'campaigns',
                label: 'Campaigns',
                icon: Target,
              },
              {
                id: 'traffic',
                label: 'Traffic',
                icon: TrendingUp,
              },
              {
                id: 'leads',
                label: 'Leads',
                icon: Users,
              },
              {
                id: 'email',
                label: 'Email',
                icon: Mail,
              },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-semibold text-left ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-5 border-t border-gray-800 flex flex-col gap-3">
            <button className="flex items-center gap-3 px-5 py-4 rounded-2xl text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300">
              <Settings size={18} />
              Settings
            </button>

            <Link
              to="/login"
              className="flex items-center gap-3 px-5 py-4 rounded-2xl text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <LogOut size={18} />
              Sign Out
            </Link>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1">
          {/* TOP BAR */}
          <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 md:px-10 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-2xl px-5 py-3 w-full md:max-w-md">
              <Search
                size={18}
                className="text-gray-500 dark:text-gray-400"
              />

              <input
                type="text"
                placeholder="Search campaigns..."
                className="bg-transparent outline-none w-full text-gray-700 dark:text-white"
              />
            </div>

            <div className="flex items-center gap-6">
              <button className="relative bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:scale-105 transition-all duration-300">
                <Bell size={20} />

                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-600"></span>
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  AC
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Alex Chen
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Admin
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* DASHBOARD CONTENT */}
          <main className="p-6 md:p-10">
            {/* TITLE */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">
                  Dashboard Overview
                </h1>

                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  Marketing analytics and campaign performance
                </p>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-2xl flex items-center gap-3 font-bold shadow-lg hover:scale-105 transition-all duration-300">
                <Plus size={18} />
                New Campaign
              </button>
            </div>

            {/* KPI CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3">
                        {kpi.label}
                      </p>

                      <h2 className="text-4xl font-black text-gray-900 dark:text-white">
                        {kpi.value}
                      </h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <kpi.icon
                        size={24}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {kpi.up ? (
                      <ArrowUpRight className="text-green-500" size={18} />
                    ) : (
                      <ArrowDownRight className="text-red-500" size={18} />
                    )}

                    <span
                      className={`font-bold ${
                        kpi.up ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {kpi.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* TABLE + ACTIVITY */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
              {/* TABLE */}
              <div className="xl:col-span-2 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                    Active Campaigns
                  </h2>

                  <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:scale-105 transition-all duration-300">
                    <Eye size={18} />
                    View All
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-175">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th className="text-left px-8 py-5 text-gray-600 dark:text-gray-300">
                          Campaign
                        </th>

                        <th className="text-left px-8 py-5 text-gray-600 dark:text-gray-300">
                          Channel
                        </th>

                        <th className="text-left px-8 py-5 text-gray-600 dark:text-gray-300">
                          Status
                        </th>

                        <th className="text-left px-8 py-5 text-gray-600 dark:text-gray-300">
                          Leads
                        </th>

                        <th className="text-left px-8 py-5 text-gray-600 dark:text-gray-300">
                          ROAS
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {campaigns.map((campaign) => (
                        <tr
                          key={campaign.name}
                          className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                        >
                          <td className="px-8 py-6 font-semibold text-gray-900 dark:text-white">
                            {campaign.name}
                          </td>

                          <td className="px-8 py-6">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                              {campaign.channel}
                            </span>
                          </td>

                          <td className="px-8 py-6">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                campaign.status === 'Active'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {campaign.status}
                            </span>
                          </td>

                          <td className="px-8 py-6">
                            <div className="flex items-center gap-2 font-semibold">
                              {campaign.leads}

                              {campaign.trend === 'up' ? (
                                <ArrowUpRight
                                  size={16}
                                  className="text-green-500"
                                />
                              ) : (
                                <ArrowDownRight
                                  size={16}
                                  className="text-red-500"
                                />
                              )}
                            </div>
                          </td>

                          <td className="px-8 py-6 font-semibold text-gray-900 dark:text-white">
                            {campaign.roas}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ACTIVITY */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                <div className="px-8 py-6 border-b border-gray-100 dark:border-gray-800">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                    Recent Activity
                  </h2>
                </div>

                <div className="p-8 flex flex-col gap-8">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`w-3 h-3 rounded-full mt-2 ${
                          activity.type === 'success'
                            ? 'bg-green-500'
                            : activity.type === 'warning'
                            ? 'bg-yellow-500'
                            : 'bg-blue-500'
                        }`}
                      ></div>

                      <div>
                        <p className="text-gray-700 dark:text-gray-300 leading-7">
                          {activity.text}
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}