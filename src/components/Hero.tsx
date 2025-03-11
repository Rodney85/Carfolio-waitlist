import { motion } from 'framer-motion';
import { Check, Rocket } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

// Benefits list
const benefits = [
  'Create unlimited car profiles with specs & mods',
  'Share custom links to show off your collection',
  'Showcase high-quality photos and videos',
  'Connect with other automotive enthusiasts'
];

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="hidden md:block absolute -top-24 -right-24 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl opacity-30" />
      <div className="hidden md:block absolute top-20 -left-20 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 mb-5 rounded-full bg-primary-500/10 border border-primary-500/20">
              <Rocket className="w-3.5 h-3.5 text-primary-500 mr-2" />
              <span className="text-xs font-medium text-primary-500">Coming Soon - Join Our Waitlist</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Show off your <span className="text-primary-500">car builds</span> with custom shareable links
            </h1>
            
            <p className="text-gray-400 text-lg mb-6 max-w-xl">
              CarFolio is the ultimate platform for automotive enthusiasts to create beautiful digital profiles for their vehicles and share them with the world.
            </p>
            
            {/* Benefits List */}
            <ul className="space-y-2 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="flex items-start"
                >
                  <Check className="w-5 h-5 text-primary-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Email Signup Form */}
            <div className="bg-dark-800/80 backdrop-blur-sm border border-dark-700 rounded-lg p-4 md:p-5 max-w-xl">
              <h3 className="text-lg font-medium text-white mb-3">Join the waitlist</h3>
              <WaitlistForm />
            </div>
          </motion.div>
          
          {/* Right Column - App Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:block relative"
          >
            <div className="relative">
              {/* Device Frame */}
              <div className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden shadow-2xl">
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
                      <div className="absolute bottom-4 left-4 bg-dark-800/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-dark-700 text-white font-medium text-sm">
                        2023 Ford Mustang GT
                      </div>
                    </div>
                    
                    {/* Car Details */}
                    <div className="flex-1 p-4">
                      <div className="flex gap-3 mb-3">
                        <div className="w-16 h-6 bg-dark-800 rounded animate-pulse" />
                        <div className="w-16 h-6 bg-dark-800 rounded animate-pulse" />
                        <div className="w-16 h-6 bg-dark-800 rounded animate-pulse" />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-3 bg-dark-800 rounded w-3/4 animate-pulse" />
                        <div className="h-3 bg-dark-800 rounded animate-pulse" />
                        <div className="h-3 bg-dark-800 rounded w-5/6 animate-pulse" />
                        <div className="h-3 bg-dark-800 rounded w-2/3 animate-pulse" />
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="h-24 bg-dark-800 rounded animate-pulse" />
                        <div className="h-24 bg-dark-800 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                initial={{ x: 20, y: -10 }}
                animate={{ x: 30, y: -20 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
                className="absolute -top-10 -right-8 bg-dark-800 border border-dark-700 rounded-lg p-3 shadow-lg w-36"
              >
                <div className="h-2 w-20 bg-dark-700 rounded mb-2 animate-pulse" />
                <div className="h-2 w-16 bg-dark-700 rounded animate-pulse" />
              </motion.div>
              
              <motion.div 
                initial={{ x: -20, y: 10 }}
                animate={{ x: -30, y: 20 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3.5, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-dark-800 border border-dark-700 rounded-lg p-3 shadow-lg w-36"
              >
                <div className="h-2 w-20 bg-dark-700 rounded mb-2 animate-pulse" />
                <div className="h-2 w-16 bg-dark-700 rounded animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}