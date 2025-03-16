import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close menu when user resizes window to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Check scroll position to add/remove background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-dark-800/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-primary-500">Car</span>folio
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-primary-500 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-primary-500 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-primary-500 transition-colors">Pricing</a>
            <a 
              href="#join-waitlist" 
              className="px-5 py-2 bg-primary-500 text-dark-900 font-medium rounded-full hover:bg-primary-600 transition-colors"
            >
              Join Waitlist
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-dark-700 text-gray-400 hover:bg-dark-600 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
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
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-dark-700 bg-dark-800"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" onClick={closeMenu} className="text-gray-300 hover:text-primary-500 py-2 transition-colors">Features</a>
            <a href="#how-it-works" onClick={closeMenu} className="text-gray-300 hover:text-primary-500 py-2 transition-colors">How It Works</a>
            <a href="#pricing" onClick={closeMenu} className="text-gray-300 hover:text-primary-500 py-2 transition-colors">Pricing</a>
            <a 
              href="#join-waitlist" 
              onClick={closeMenu}
              className="px-5 py-2 bg-primary-500 text-dark-900 font-medium rounded-full hover:bg-primary-600 transition-colors text-center"
            >
              Join Waitlist
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;