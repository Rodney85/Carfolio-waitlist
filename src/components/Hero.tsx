import { motion } from 'framer-motion';
import { Check, Rocket, Gauge, Wrench, Camera, Share2, ChevronRight } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

// Benefits list
const benefits = [
  'Unlimited car profiles',
  'Custom shareable links',
  'Photo & video showcase',
  'Connect with enthusiasts'
];

// Car parts for the animated background
const carParts = [
  { icon: Gauge, position: 'top-10 right-20', size: 24, rotation: 15, delay: 0 },
  { icon: Wrench, position: 'top-32 right-10', size: 20, rotation: -10, delay: 0.2 },
  { icon: Camera, position: 'bottom-20 right-24', size: 22, rotation: 5, delay: 0.4 },
  { icon: Share2, position: 'bottom-10 left-20', size: 18, rotation: -15, delay: 0.6 },
  { icon: Gauge, position: 'top-14 left-10', size: 16, rotation: 20, delay: 0.8 },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-20 md:pt-24 flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none" />
      
      {/* Animated background blobs */}
      <div className="hidden md:block absolute -top-24 -right-24 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="hidden md:block absolute top-20 -left-20 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl opacity-20 animate-pulse" 
        style={{ animationDuration: '8s' }}
      />
      <div className="hidden md:block absolute bottom-20 right-10 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDuration: '12s' }}
      />
      
      {/* Animated car parts icons */}
      {carParts.map((part, index) => (
        <motion.div
          key={index}
          className={`absolute ${part.position} hidden md:block text-primary-500/40 z-0`}
          initial={{ opacity: 0, scale: 0, rotate: part.rotation }}
          animate={{ 
            opacity: 0.4, 
            scale: 1,
            rotate: [part.rotation, -part.rotation, part.rotation] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: part.delay,
            ease: 'easeInOut'
          }}
        >
          <part.icon size={part.size} />
        </motion.div>
      ))}
      
      {/* Wire-frame car illustration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 opacity-10 pointer-events-none hidden md:block">
        <svg viewBox="0 0 1200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M300,250 C300,250 350,150 600,150 C850,150 900,250 900,250 L1000,250 L950,100 C950,100 900,50 700,50 C500,50 450,100 450,100 L400,250 L300,250 Z" 
                stroke="currentColor" strokeWidth="2" className="text-primary-500" />
          <circle cx="400" cy="250" r="50" stroke="currentColor" strokeWidth="2" className="text-primary-500" fill="none" />
          <circle cx="800" cy="250" r="50" stroke="currentColor" strokeWidth="2" className="text-primary-500" fill="none" />
          <path d="M580,100 L600,50 L620,100" stroke="currentColor" strokeWidth="2" className="text-primary-500" />
          <path d="M500,150 L450,150" stroke="currentColor" strokeWidth="2" className="text-primary-500" />
          <path d="M700,150 L750,150" stroke="currentColor" strokeWidth="2" className="text-primary-500" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center w-full">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-lg"
          >
            <div className="inline-flex items-center px-3 py-1 mb-4 md:mb-5 rounded-full bg-primary-500/10 border border-primary-500/20">
              <Rocket className="w-3.5 h-3.5 text-primary-500 mr-2" />
              <span className="text-xs font-medium text-primary-500">Coming Soon - Join Our Waitlist</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4">
              Show off your <span className="text-primary-500 relative">
                car builds
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-1 bg-primary-500/60 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span> with custom shareable links
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg mb-5 md:mb-6 max-w-xl">
              CarFolio is the ultimate platform for automotive enthusiasts to create beautiful digital profiles for their vehicles and share them with the world.
            </p>
            
            {/* Benefits List - Upgraded with animations */}
            <ul className="space-y-1 md:space-y-2 mb-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="flex items-center bg-dark-800/40 rounded-lg py-1.5 px-2 border border-dark-700/50 hover:border-primary-500/30 transition-colors"
                >
                  <div className="bg-primary-500/20 p-1 rounded-md mr-2">
                    <Check className="w-3 h-3 text-primary-500" />
                  </div>
                  <span className="text-gray-300 text-xs md:text-sm">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Email Signup Form */}
            <motion.div 
              id="waitlist-form" 
              className="bg-dark-800/80 backdrop-blur-sm border border-dark-700 rounded-lg p-4 md:p-5 max-w-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary-500/10 rounded-full blur-lg"></div>
              
              <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                Join the waitlist
                <motion.div 
                  className="ml-2 w-1.5 h-1.5 bg-primary-500 rounded-full"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </h3>
              <WaitlistForm />
              
              {/* Extra promotional text */}
              <div className="mt-4 pt-4 border-t border-dark-700/50 flex items-center">
                <div className="bg-dark-700/50 p-1 rounded-full">
                  <ChevronRight size={14} className="text-primary-500" />
                </div>
                <p className="text-gray-400 text-xs ml-2">Be the first to get access when we launch</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - App Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block relative z-10"
          >
            <div className="relative">
              {/* Device Frame */}
              <motion.div 
                className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden shadow-2xl"
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              >
                <div className="border-b border-dark-700 py-2 px-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="mx-auto bg-dark-700 rounded-full text-xs px-3 py-0.5 text-gray-400">
                    carfolio.io/share/mustang-gt
                  </div>
                </div>
                
                {/* App Preview Content */}
                <div className="aspect-[5/4] bg-dark-900 relative overflow-hidden">
                  {/* Car Profile Preview */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Car Header Image Placeholder */}
                    <div className="h-1/3 bg-gradient-to-r from-primary-900/80 to-primary-600/80 relative">
                      <motion.div 
                        className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                        animate={{ opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="absolute bottom-4 left-4 bg-dark-800/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-dark-700 text-white font-medium text-sm">
                        2023 Ford Mustang GT
                      </div>
                    </div>
                    
                    {/* Car Details */}
                    <div className="flex-1 p-4">
                      <div className="flex gap-3 mb-3">
                        <motion.div 
                          className="w-16 h-6 bg-dark-800 rounded"
                          animate={{ opacity: [0.7, 0.4, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div 
                          className="w-16 h-6 bg-dark-800 rounded"
                          animate={{ opacity: [0.7, 0.4, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        />
                        <motion.div 
                          className="w-16 h-6 bg-dark-800 rounded"
                          animate={{ opacity: [0.7, 0.4, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <motion.div 
                          className="h-3 bg-dark-800 rounded w-3/4"
                          animate={{ opacity: [0.7, 0.4, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div 
                          className="h-3 bg-dark-800 rounded"
                          animate={{ opacity: [0.7, 0.4, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div 
                          className="h-3 bg-dark-800 rounded w-5/6"
                          animate={{ opacity: [0.7, 0.4, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                        />
                        <motion.div 
                          className="h-3 bg-dark-800 rounded w-2/3"
                          animate={{ opacity: [0.7, 0.4, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        />
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <motion.div 
                          className="h-24 bg-dark-800 rounded overflow-hidden relative"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-60" />
                          <div className="absolute bottom-2 left-2 bg-dark-800/80 text-white text-xs px-1.5 py-0.5 rounded">
                            Gallery
                          </div>
                        </motion.div>
                        <motion.div 
                          className="h-24 bg-dark-800 rounded overflow-hidden relative"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-60" />
                          <div className="absolute bottom-2 left-2 bg-dark-800/80 text-white text-xs px-1.5 py-0.5 rounded">
                            Specs
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                initial={{ x: 20, y: -10 }}
                animate={{ x: 30, y: -20 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
                className="absolute -top-10 -right-8 bg-dark-800 border border-dark-700 rounded-lg p-3 shadow-lg w-36"
              >
                <div className="h-2 w-20 bg-dark-700 rounded mb-2" />
                <div className="h-2 w-16 bg-dark-700 rounded" />
              </motion.div>
              
              <motion.div 
                initial={{ x: -20, y: 10 }}
                animate={{ x: -30, y: 20 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3.5, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-dark-800 border border-dark-700 rounded-lg p-3 shadow-lg w-36"
              >
                <div className="h-2 w-20 bg-dark-700 rounded mb-2" />
                <div className="h-2 w-16 bg-dark-700 rounded" />
              </motion.div>
              
              {/* Stats notifications */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute top-1/4 -right-10 bg-dark-800/90 backdrop-blur-sm border border-dark-700 rounded-lg p-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <Gauge size={16} className="text-primary-500" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">Power Updated</div>
                    <div className="text-[10px] text-gray-400">460 HP</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="absolute bottom-1/4 -left-10 bg-dark-800/90 backdrop-blur-sm border border-dark-700 rounded-lg p-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Camera size={16} className="text-blue-500" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">New Photos</div>
                    <div className="text-[10px] text-gray-400">+3 added</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Mobile-only preview */}
          <motion.div 
            className="sm:hidden mt-8 mx-auto max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-3 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"></div>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="text-xs text-gray-400 bg-dark-700/50 rounded-full px-2 py-0.5">
                  carfolio.io/share/mustang-gt
                </div>
              </div>
              
              <div className="aspect-video bg-dark-900/80 rounded-md flex flex-col items-center justify-center overflow-hidden relative p-3">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 to-transparent"></div>
                
                <div className="relative z-10 space-y-2">
                  <div className="h-2 bg-dark-800 rounded w-3/4 animate-pulse mb-2" />
                  <div className="h-2 bg-dark-800 rounded animate-pulse mb-2" />
                  <div className="h-2 bg-dark-800 rounded w-5/6 animate-pulse mb-2" />
                  <div className="h-2 bg-dark-800 rounded w-2/3 animate-pulse" />
                </div>
                
                <div className="flex gap-2 mt-4">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <Gauge size={12} className="text-primary-500" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Camera size={12} className="text-blue-500" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Share2 size={12} className="text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}