import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    
    // Close menu when user clicks a link or scrolls
    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-white relative group"
          >
            <span className="text-2xl md:text-3xl tracking-tighter">
              <span className="text-primary-500 font-extrabold">CAR</span>
              <span className="font-light">FOLIO</span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-primary-500 transition-colors relative py-2 tracking-wide"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform scale-x-0 hover:scale-x-100 transition-transform" />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.scrollTo({ top: document.getElementById('waitlist-form')?.offsetTop || 0, behavior: 'smooth' });
              }}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-5 py-2 rounded-md tracking-wide transition-colors"
            >
              Join Waitlist
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="menu-button text-white hover:text-primary-500 transition-colors p-2 bg-dark-800/80 rounded-md active:bg-dark-700"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden mobile-menu bg-dark-800/95 backdrop-blur-lg rounded-lg mt-2 border border-dark-700 shadow-xl"
            >
              <div className="p-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-primary-500 transition-colors px-4 py-3 rounded-lg hover:bg-dark-700 font-medium text-center"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo({ top: document.getElementById('waitlist-form')?.offsetTop || 0, behavior: 'smooth' });
                    }}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}