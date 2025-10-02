import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import SubjectDetail from './pages/SubjectDetail';
import QuickLinks from './pages/QuickLinks';
import FutureFeatures from './pages/FutureFeatures';

/**
 * Main App Component
 * Sets up routing and layout structure for the entire application
 * Includes Navbar at the top and Footer at the bottom
 */
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subject/:subjectId" element={<SubjectDetail />} />
            <Route path="/quick-links" element={<QuickLinks />} />
            <Route path="/future-features" element={<FutureFeatures />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

