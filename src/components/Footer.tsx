import { motion } from 'framer-motion';
import { Mail, Instagram, Youtube } from 'lucide-react';
import Logo from './ui/Logo';

export default function Footer() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <footer className="bg-[#030303] pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Brand */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <Logo linkTo="#" iconSize={5} textSize="md" className="mb-4" />
            </div>
            <p className="text-white/60 text-sm mb-4 sm:mb-6">
              Showcase, Share & Monetize Your Car Builds. The ultimate platform for automotive enthusiasts.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-indigo-300 hover:border-indigo-500/50 transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-rose-300 hover:border-rose-500/50 transition-all duration-300">
                <Youtube size={16} />
              </a>
            </div>
          </motion.div>
          
          {/* Links */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-5 relative inline-block">
              Features
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500"></div>
            </h3>
            <ul className="space-y-3 text-sm mt-6">
              <li><a href="#features" className="text-white/60 hover:text-indigo-300 transition-colors duration-300">Digital Car Portfolios</a></li>
              <li><a href="#features" className="text-white/60 hover:text-indigo-300 transition-colors duration-300">One Shareable Link</a></li>
              <li><a href="#features" className="text-white/60 hover:text-indigo-300 transition-colors duration-300">Monetize Your Knowledge</a></li>
              <li><a href="#features" className="text-white/60 hover:text-indigo-300 transition-colors duration-300">Build Credibility</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-5 relative inline-block">
              Resources
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500"></div>
            </h3>
            <ul className="space-y-3 text-sm mt-6">
              <li><a href="#" className="text-white/60 hover:text-indigo-300 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-indigo-300 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-indigo-300 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-indigo-300 transition-colors duration-300">FAQ</a></li>
            </ul>
          </motion.div>
          
          {/* Waitlist */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-5 relative inline-block">
              Join Our Waitlist
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500"></div>
            </h3>
            <p className="text-white/60 text-sm mb-6 mt-6">
              No credit card required. We'll notify you when it's your turn to create your profile.
            </p>
            <form className="space-y-2 sm:space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300/70" />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/[0.03] backdrop-blur-sm rounded-lg border border-white/[0.08] focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300 text-white text-sm placeholder:text-white/40"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm shadow-lg shadow-indigo-500/10"
              >
                Join Waitlist
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {/* Bottom area */}
        <div className="border-t border-white/[0.05] pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-white/40 text-sm mb-0">
            &copy; 2025 CarFolio. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 text-sm">
            <a href="#" className="text-white/50 hover:text-indigo-300 transition-colors duration-300">Instagram</a>
            <a href="#" className="text-white/50 hover:text-rose-300 transition-colors duration-300">YouTube</a>
          </div>
        </div>
        
        {/* Waitlist badge */}
        <motion.div 
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 md:mt-10 max-w-md mx-auto bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-lg p-3 sm:p-4 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.05] to-rose-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0" />
          <div className="relative z-10">
            <span className="text-white/70 text-sm">
              🚀 <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300 font-medium">Coming Soon:</span> Currently in private beta, launching publicly in 2025.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}