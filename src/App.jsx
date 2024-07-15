import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import TeamPage from './pages/TeamPage';
import JourneyPage from './pages/JourneyPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<LandingPage />}>
  <Route path="/#contact-us" element={<LandingPage />} />
</Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;