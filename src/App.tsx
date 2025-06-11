import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import WaitlistAdvantage from './components/WaitlistAdvantage';
import WaitlistProcess from './components/WaitlistProcess';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { DemoFeatures } from './components/demo';

// Home page component that combines all the landing page sections
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Pricing />
      <WaitlistAdvantage />
      <WaitlistProcess />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Carfolio';
    
    // Add global background styles to body
    document.body.classList.add('bg-[#030303]');
    
    return () => {
      document.body.classList.remove('bg-[#030303]');
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#030303] text-white relative">
        {/* Global background elements */}
        <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none z-0" />
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/[0.01] via-transparent to-rose-500/[0.01] pointer-events-none z-0" />
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/demo/features" element={<DemoFeatures />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;