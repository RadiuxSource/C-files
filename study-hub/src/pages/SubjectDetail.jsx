import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProgressTracker from '../components/ProgressTracker';
import subjectsData from '../data/subjects.json';

/**
 * SubjectDetail Page
 * Displays complete subject information including:
 * - Syllabus with units and topics
 * - Resources (PDFs, videos, links)
 * - Progress tracker
 * - Assignments
 */
const SubjectDetail = () => {
  const { subjectId } = useParams();
  const [subjectData, setSubjectData] = useState(null);
  const [activeTab, setActiveTab] = useState('syllabus');
  const [loading, setLoading] = useState(true);

  const subject = subjectsData.find((s) => s.id === subjectId);

  useEffect(() => {
    // Dynamically import subject data
    const loadSubjectData = async () => {
      try {
        const data = await import(`../data/${subjectId}.json`);
        setSubjectData(data.default);
        setLoading(false);
      } catch (error) {
        console.error('Error loading subject data:', error);
        setLoading(false);
      }
    };

    loadSubjectData();
  }, [subjectId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading subject data...</p>
        </div>
      </div>
    );
  }

  if (!subject || !subjectData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subject Not Found</h2>
          <Link to="/subjects" className="text-primary-600 hover:text-primary-700">
            Return to Subjects
          </Link>
        </div>
      </div>
    );
  }

  // Collect all topics for progress tracker
  const allTopics = subjectData.units.flatMap((unit) =>
    unit.topics.map((topic) => ({
      id: topic.id,
      title: topic.title,
      subtopics: topic.subtopics,
    }))
  );

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <div className={`${subject.color} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/subjects" className="text-white/80 hover:text-white mb-4 inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Subjects
          </Link>
          <div className="flex items-center mt-4">
            <div className="text-6xl mr-6">{subject.icon}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{subject.name}</h1>
              <p className="text-xl opacity-90">{subject.code}</p>
              <p className="mt-2 opacity-90">{subject.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {['syllabus', 'resources', 'assignments', 'progress'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Syllabus Tab */}
        {activeTab === 'syllabus' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📖 Course Syllabus</h2>
            {subjectData.units.map((unit) => (
              <div key={unit.unitNumber} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  Unit {unit.unitNumber}: {unit.title}
                </h3>
                <div className="space-y-4">
                  {unit.topics.map((topic) => (
                    <div key={topic.id} className="border-l-4 border-primary-200 pl-4 py-2">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h4>
                      <ul className="space-y-1">
                        {topic.subtopics.map((subtopic, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>{subtopic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📂 Study Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjectData.resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">
                      {resource.type === 'pdf' && '📄'}
                      {resource.type === 'video' && '🎥'}
                      {resource.type === 'link' && '🔗'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Access Resource
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Assignments Tab */}
        {activeTab === 'assignments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📝 Assignments</h2>
            <div className="space-y-4">
              {subjectData.assignments.map((assignment) => (
                <div key={assignment.id} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{assignment.title}</h3>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      Due: {assignment.dueDate}
                    </span>
                  </div>
                  <p className="text-gray-600">{assignment.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ProgressTracker topics={allTopics} subjectId={subjectId} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SubjectDetail;
