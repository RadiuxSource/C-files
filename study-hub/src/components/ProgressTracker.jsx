import { useState, useEffect } from 'react';

/**
 * ProgressTracker Component
 * Allows students to track their progress through syllabus topics
 * Uses localStorage to persist progress data
 * 
 * @param {Array} topics - Array of topics with id and title
 * @param {string} subjectId - Subject identifier for localStorage key
 */
const ProgressTracker = ({ topics, subjectId }) => {
  const [completedTopics, setCompletedTopics] = useState([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${subjectId}`);
    if (savedProgress) {
      setCompletedTopics(JSON.parse(savedProgress));
    }
  }, [subjectId]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`progress_${subjectId}`, JSON.stringify(completedTopics));
  }, [completedTopics, subjectId]);

  const toggleTopic = (topicId) => {
    setCompletedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const calculateProgress = () => {
    if (topics.length === 0) return 0;
    return Math.round((completedTopics.length / topics.length) * 100);
  };

  const progress = calculateProgress();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Progress Tracker</h2>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-bold text-primary-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {completedTopics.length} of {topics.length} topics completed
        </p>
      </div>

      {/* Topics Checklist */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <input
              type="checkbox"
              id={topic.id}
              checked={completedTopics.includes(topic.id)}
              onChange={() => toggleTopic(topic.id)}
              className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 focus:ring-2 mt-0.5 cursor-pointer"
            />
            <label
              htmlFor={topic.id}
              className={`flex-1 cursor-pointer ${
                completedTopics.includes(topic.id)
                  ? 'text-gray-400 line-through'
                  : 'text-gray-700'
              }`}
            >
              <span className="font-medium">{topic.title}</span>
              {topic.subtopics && (
                <ul className="mt-1 ml-4 space-y-1">
                  {topic.subtopics.slice(0, 3).map((subtopic, index) => (
                    <li key={index} className="text-xs text-gray-500">
                      • {subtopic}
                    </li>
                  ))}
                  {topic.subtopics.length > 3 && (
                    <li className="text-xs text-gray-400 italic">
                      + {topic.subtopics.length - 3} more...
                    </li>
                  )}
                </ul>
              )}
            </label>
          </div>
        ))}
      </div>

      {/* Reset Button */}
      {completedTopics.length > 0 && (
        <button
          onClick={() => setCompletedTopics([])}
          className="mt-4 w-full px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
        >
          Reset Progress
        </button>
      )}
    </div>
  );
};

export default ProgressTracker;
