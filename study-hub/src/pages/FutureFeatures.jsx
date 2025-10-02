import { motion } from 'framer-motion';

/**
 * FutureFeatures Page
 * Placeholder for future expansion features
 * Including attendance tracker, assignment manager, exam prep planner, and college news
 */
const FutureFeatures = () => {
  const features = [
    {
      id: 1,
      title: 'Attendance Tracker',
      icon: '✅',
      description: 'Track your attendance across all subjects and get alerts for low attendance',
      status: 'Coming Soon',
      color: 'bg-green-500',
      features: [
        'Real-time attendance monitoring',
        'Subject-wise attendance percentage',
        'Low attendance alerts',
        'Monthly attendance reports',
      ],
    },
    {
      id: 2,
      title: 'Assignment Manager',
      icon: '📋',
      description: 'Organize, track, and submit assignments with deadline reminders',
      status: 'Coming Soon',
      color: 'bg-blue-500',
      features: [
        'Assignment submission tracking',
        'Deadline reminders and notifications',
        'File upload and storage',
        'Grade tracking',
      ],
    },
    {
      id: 3,
      title: 'Exam Preparation Planner',
      icon: '📖',
      description: 'Create personalized study plans and track your exam preparation progress',
      status: 'Coming Soon',
      color: 'bg-purple-500',
      features: [
        'Custom study schedules',
        'Topic-wise preparation tracking',
        'Mock test integration',
        'Performance analytics',
      ],
    },
    {
      id: 4,
      title: 'College News & Updates',
      icon: '📰',
      description: 'Stay informed with latest college news, events, and announcements',
      status: 'Coming Soon',
      color: 'bg-orange-500',
      features: [
        'Real-time notifications',
        'Event calendar integration',
        'Important announcements',
        'College magazine and newsletter',
      ],
    },
    {
      id: 5,
      title: 'Study Groups & Collaboration',
      icon: '👥',
      description: 'Connect with classmates, form study groups, and collaborate on projects',
      status: 'Planned',
      color: 'bg-teal-500',
      features: [
        'Create and join study groups',
        'Discussion forums',
        'Resource sharing',
        'Group chat functionality',
      ],
    },
    {
      id: 6,
      title: 'GPA Calculator',
      icon: '📊',
      description: 'Calculate your SGPA and CGPA, track academic performance over semesters',
      status: 'Planned',
      color: 'bg-pink-500',
      features: [
        'Semester-wise GPA calculation',
        'Cumulative GPA tracking',
        'Grade prediction',
        'Performance graphs and insights',
      ],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Future Features</h1>
            <p className="text-xl text-primary-100">
              Exciting new tools coming soon to enhance your academic experience
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center text-3xl shadow-md mr-4`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      feature.status === 'Coming Soon' 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{feature.description}</p>

              {/* Features List */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Planned Features:</h4>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Have a Feature Request?</h2>
          <p className="text-lg text-primary-100 mb-6">
            We're always looking to improve! Share your ideas and help us build better tools for students.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
            Submit Feedback
          </button>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Development Roadmap</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                Q1
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900">Jan - Mar 2025</h3>
                <p className="text-gray-600">Attendance Tracker & Assignment Manager</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                Q2
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900">Apr - Jun 2025</h3>
                <p className="text-gray-600">Exam Preparation Planner & College News</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                Q3
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900">Jul - Sep 2025</h3>
                <p className="text-gray-600">Study Groups & Collaboration Features</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                Q4
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900">Oct - Dec 2025</h3>
                <p className="text-gray-600">GPA Calculator & Performance Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureFeatures;
