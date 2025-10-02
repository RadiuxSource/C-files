import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * SubjectCard Component
 * Displays a subject card with icon, name, code, and description
 * Used on home page and subjects listing page
 * 
 * @param {Object} subject - Subject data including id, name, code, description, color, icon
 */
const SubjectCard = ({ subject }) => {
  return (
    <Link to={`/subject/${subject.id}`}>
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border-2 border-transparent hover:border-primary-200"
      >
        {/* Icon and Color Bar */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 ${subject.color} rounded-xl flex items-center justify-center text-3xl shadow-md`}>
            {subject.icon}
          </div>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {subject.code}
          </span>
        </div>

        {/* Subject Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {subject.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3">
          {subject.description}
        </p>

        {/* View Details Button */}
        <div className="mt-4 flex items-center text-primary-600 font-medium text-sm">
          View Details
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
};

export default SubjectCard;
