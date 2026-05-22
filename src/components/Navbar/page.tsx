import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          NexusDigital
        </h1>

        <div className="flex items-center gap-5 text-sm md:text-base font-medium">
          <Link className="hover:text-blue-500 dark:text-white" to="/">Home</Link>
          <Link className="hover:text-blue-500 dark:text-white" to="/services">Services</Link>
          <Link className="hover:text-blue-500 dark:text-white" to="/dashboard">Dashboard</Link>
          <Link className="hover:text-blue-500 dark:text-white" to="/about">About</Link>
          <Link className="hover:text-blue-500 dark:text-white" to="/cart">Cart</Link>
          <Link className="hover:text-blue-500 dark:text-white" to="/reviews">Reviews</Link>
          <Link className="hover:text-blue-500 dark:text-white" to="/profile">Profile</Link>
          <Link className="hover:text-blue-500 dark:text-white" to="/login">Login</Link>
          <Link className="hover:text-blue-500 dark:text-white" to="/signup">Register</Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}