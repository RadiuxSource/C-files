import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SubjectPage from './pages/SubjectPage';
import QuickLinks from './pages/QuickLinks';
// Import other pages if needed (e.g., future expansions)

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/quick-links" element={<QuickLinks />} />
        {/* Future routes: <Route path="/attendance" element={<AttendanceTracker />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
