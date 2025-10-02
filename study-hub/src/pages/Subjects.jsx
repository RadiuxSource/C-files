import { motion } from 'framer-motion';
import SubjectCard from '../components/SubjectCard';
import subjectsData from '../data/subjects.json';

/**
 * Subjects Page
 * Lists all available subjects with their cards
 */
const Subjects = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Subjects</h1>
            <p className="text-xl text-primary-100">
              B.Tech CSE - 1st Semester
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjectsData.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SubjectCard subject={subject} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
