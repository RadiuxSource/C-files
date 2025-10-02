import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Displays developer credits, college information, and useful links
 * Includes copyright notice and contact information
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* College Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">📚 IIT Study Hub</h3>
            <p className="text-gray-400 mb-2">
              Indus Institute of Technology
            </p>
            <p className="text-gray-400 mb-2">
              Ahmedabad, Gujarat
            </p>
            <p className="text-gray-400">
              B.Tech CSE - 1st Semester
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/subjects" className="text-gray-400 hover:text-white transition-colors">
                  All Subjects
                </Link>
              </li>
              <li>
                <Link to="/quick-links" className="text-gray-400 hover:text-white transition-colors">
                  Academic Resources
                </Link>
              </li>
              <li>
                <Link to="/future-features" className="text-gray-400 hover:text-white transition-colors">
                  Student Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developed By</h3>
            <p className="text-gray-400 mb-2">
              <span className="text-primary-400 font-semibold">Aditya</span> & <span className="text-primary-400 font-semibold">Aman</span>
            </p>
            <p className="text-gray-400 text-sm mb-4">
              B.Tech CSE Students
            </p>
            <p className="text-gray-500 text-xs">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Indus Institute of Technology. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Developed by Aditya & Aman | Personalized Academic Dashboard for B.Tech CSE Students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
