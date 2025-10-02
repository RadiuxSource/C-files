import { motion } from 'framer-motion';

/**
 * FeatureCard Component
 * Displays a feature card with icon, title, and description
 * Used on home page to showcase key features
 * 
 * @param {string} icon - Emoji or icon to display
 * @param {string} title - Feature title
 * @param {string} description - Feature description
 * @param {number} delay - Animation delay for staggered effect
 */
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
