import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Navbar Component
 * Main navigation bar with logo, navigation links, and mobile menu
 * Responsive design with hamburger menu for mobile devices
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-primary-600 text-2xl font-bold"
            >
              📚
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">IIT Study Hub</h1>
              <p className="text-xs text-gray-500 hidden sm:block">B.Tech CSE - Semester 1</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/subjects"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Subjects
            </Link>
            <Link
              to="/quick-links"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Quick Links
            </Link>
            <Link
              to="/future-features"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Tools
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4"
          >
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/subjects"
              className="block py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Subjects
            </Link>
            <Link
              to="/quick-links"
              className="block py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Quick Links
            </Link>
            <Link
              to="/future-features"
              className="block py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tools
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
