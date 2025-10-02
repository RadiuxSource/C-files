import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SubjectCard from '../components/SubjectCard';
import FeatureCard from '../components/FeatureCard';
import subjectsData from '../data/subjects.json';

/**
 * Home Page Component
 * Landing page with hero section, features, and subject cards
 * Includes call-to-action buttons and animated elements
 */
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Indus Institute of Technology
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-100">
              Study Hub
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Personalized Academic Dashboard for B.Tech CSE Students
            </p>
            <p className="text-md mb-10 text-primary-200">
              1st Semester | Computer Science Engineering
            </p>
            <Link to="/subjects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Started 🚀
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why This Study Hub Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why This Study Hub?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your complete academic companion designed to enhance learning and boost productivity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="📈"
              title="Progress Tracking"
              description="Track your learning progress across all subjects with interactive checklists and visual progress indicators"
              delay={0.1}
            />
            <FeatureCard
              icon="📚"
              title="Integrated Resources"
              description="Access all study materials, video lectures, PDFs, and external resources in one centralized location"
              delay={0.2}
            />
            <FeatureCard
              icon="🎯"
              title="Interactive Learning"
              description="Organized syllabus, assignments, and practice problems to make your learning journey structured and efficient"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* My Subject Planners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Subject Planners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore comprehensive study planners for all your semester subjects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjectsData.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/subjects">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                View All Subjects
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">7</div>
              <div className="text-gray-600 font-medium">Subjects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Topics</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Resources</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Access</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start your journey to academic excellence with our comprehensive study hub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/subjects">
                <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors shadow-xl">
                  Explore Subjects
                </button>
              </Link>
              <Link to="/quick-links">
                <button className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-colors shadow-xl">
                  Quick Links
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
