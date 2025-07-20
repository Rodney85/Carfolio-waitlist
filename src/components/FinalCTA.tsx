import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';

export default function FinalCTA() {
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
    <section id="final-cta" className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden bg-[#030303]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
            Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">CarFolio Revolution</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
            Be among the first to showcase your builds, connect with enthusiasts, and monetize your automotive passion.
          </p>
          
          <motion.div 
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-4 sm:p-6 md:p-8 max-w-xl mx-auto relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.05] to-rose-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0" />
            
            <div className="relative z-10">
              <WaitlistForm />
              <p className="text-white/50 text-sm mt-3 sm:mt-4 px-2 sm:px-0">
                No credit card required. We'll notify you when it's your turn to create your profile.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
