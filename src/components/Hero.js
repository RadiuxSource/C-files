// Reusable Hero component for landing page: Animated title, tagline, button.
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-bg text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Indus Institute of Technology – Study Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Personalized Academic Dashboard for B.Tech CSE Students
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/quick-links"
            className="bg-white text-primary-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
