import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './ui/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Close menu when user resizes window to desktop size and handle scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Check scroll position to add/remove background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['features', 'how-it-works', 'pricing', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a nav link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-[#030303]/90 backdrop-blur-md border-b border-white/[0.03]' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Logo linkTo="/" iconSize={4} textSize="md" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Features', href: '#features' },
              { name: 'How It Works', href: '#how-it-works' },
              { name: 'Pricing', href: '#pricing' },
              { name: 'FAQ', href: '#faq' },
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className={`text-white/70 hover:text-white transition-colors duration-300 relative ${activeSection === item.href.substring(1) ? 'text-white' : ''}`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#final-cta" 
              className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20"
            >
              Join Waitlist
            </motion.a>
          </nav>
          
          {/* Mobile Menu Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 hover:text-white hover:border-indigo-500/50 transition-all duration-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/[0.05] bg-[#030303]/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
            {[
              { name: 'Features', href: '#features' },
              { name: 'How It Works', href: '#how-it-works' },
              { name: 'Pricing', href: '#pricing' },
              { name: 'FAQ', href: '#faq' },
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                onClick={closeMenu} 
                className={`text-white/70 hover:text-white py-1 transition-colors duration-300 ${activeSection === item.href.substring(1) ? 'text-white' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#final-cta" 
              onClick={closeMenu}
              className="px-5 py-3 bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white font-medium rounded-full transition-all duration-300 text-center shadow-lg shadow-indigo-500/20 mt-2"
            >
              Join Waitlist
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;