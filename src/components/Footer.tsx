import { motion } from 'framer-motion';
import { Car, Mail, Instagram, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 pt-20 pb-10 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <Car className="w-6 h-6 text-primary-500" />
              <span className="text-xl font-bold">
                <span className="text-primary-500">Car</span>
                <span className="text-white">Folio</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm mb-4">
              The ultimate platform for car enthusiasts to showcase their builds and monetize their passion.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-800 text-gray-400 hover:text-primary-500 hover:bg-dark-700 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-800 text-gray-400 hover:text-primary-500 hover:bg-dark-700 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-800 text-gray-400 hover:text-primary-500 hover:bg-dark-700 transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-400 hover:text-primary-500 transition-colors">Digital Profiles</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-primary-500 transition-colors">Shareable Links</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-primary-500 transition-colors">Monetization</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-primary-500 transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Waitlist */}
          <div>
            <h3 className="text-white font-bold mb-4">Join Our Waitlist</h3>
            <p className="text-gray-400 text-sm mb-4">
              Sign up to be notified when we launch and get exclusive early access.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-2 bg-dark-800 rounded-lg border border-dark-700 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors text-sm placeholder:text-gray-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom area */}
        <div className="border-t border-dark-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CarFolio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Terms of Service</a>
          </div>
        </div>
        
        {/* Waitlist badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-md mx-auto bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-4 text-center"
        >
          <span className="text-gray-400 text-sm">
            🚀 <span className="text-primary-500 font-medium">Coming Soon:</span> Currently in private beta, launching publicly in 2025.
          </span>
        </motion.div>
      </div>
    </footer>
  );
}