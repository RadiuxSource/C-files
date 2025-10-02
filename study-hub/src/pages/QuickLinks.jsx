import { motion } from 'framer-motion';

/**
 * QuickLinks Page
 * Provides quick access to important academic resources
 * Including library, calendar, timetable, and notices
 */
const QuickLinks = () => {
  const links = [
    {
      id: 1,
      title: 'Library Portal',
      icon: '📚',
      description: 'Access digital library, e-books, journals, and research papers',
      url: '#',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Academic Calendar',
      icon: '📅',
      description: 'View semester schedule, exam dates, and important deadlines',
      url: '#',
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Class Timetable',
      icon: '🕐',
      description: 'Check your daily class schedule and room allocations',
      url: '#',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      title: 'College Notices',
      icon: '📢',
      description: 'Stay updated with latest announcements and notifications',
      url: '#',
      color: 'bg-red-500',
    },
    {
      id: 5,
      title: 'Student Portal',
      icon: '👤',
      description: 'Access your student dashboard and personal information',
      url: '#',
      color: 'bg-yellow-500',
    },
    {
      id: 6,
      title: 'Course Registration',
      icon: '📝',
      description: 'Register for courses and manage your enrollment',
      url: '#',
      color: 'bg-teal-500',
    },
    {
      id: 7,
      title: 'Lab Manuals',
      icon: '🔬',
      description: 'Download lab manuals and practical assignment guides',
      url: '#',
      color: 'bg-indigo-500',
    },
    {
      id: 8,
      title: 'Faculty Directory',
      icon: '👨‍🏫',
      description: 'Find contact information and office hours of faculty members',
      url: '#',
      color: 'bg-pink-500',
    },
    {
      id: 9,
      title: 'Placement Cell',
      icon: '💼',
      description: 'View job opportunities, internships, and placement resources',
      url: '#',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quick Links</h1>
            <p className="text-xl text-primary-100">
              Fast access to essential academic resources
            </p>
          </motion.div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 block"
            >
              <div className={`w-16 h-16 ${link.color} rounded-xl flex items-center justify-center text-3xl shadow-md mb-4`}>
                {link.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{link.title}</h3>
              <p className="text-gray-600 text-sm">{link.description}</p>
              <div className="mt-4 flex items-center text-primary-600 font-medium text-sm">
                Access Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Contact the academic office or IT helpdesk for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:academic@indusuni.ac.in"
              className="bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Email Academic Office
            </a>
            <a
              href="#"
              className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            >
              IT Helpdesk
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuickLinks;
