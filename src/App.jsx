import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Contact from './pages/Contact';
import Opportunities from './pages/Opportunities';
import ServiceDetail from './pages/ServiceDetail';  // ADD THIS

import SolutionDetail from './pages/SolutionDetail';  // ADD THIS
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />  {/* ADD THIS */}

          <Route path="/solutions/:id" element={<SolutionDetail />} />  {/* ADD THIS */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;