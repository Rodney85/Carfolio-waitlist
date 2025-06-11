import { motion } from 'framer-motion';
import { Car, Link2, Star, Upload } from 'lucide-react';

const steps = [
  {
    icon: Car,
    title: "Create Your Vehicle Profiles",
    description: "Add unlimited vehicles with detailed specs, modifications list, and build history.",
    gradient: "from-indigo-500/[0.15]"
  },
  {
    icon: Upload,
    title: "Upload Your Best Media",
    description: "Showcase your rides with high-quality photos and videos that highlight your builds.",
    gradient: "from-rose-500/[0.15]"
  },
  {
    icon: Link2,
    title: "Share With One Link",
    description: "Get a personalized URL to share everywhere - social media, forums, car meets, and more.",
    gradient: "from-violet-500/[0.15]"
  },
  {
    icon: Star,
    title: "Earn From Your Passion",
    description: "Connect affiliate programs to the parts you recommend and start earning.",
    gradient: "from-amber-500/[0.15]"
  },
];

// Explicitly mark this as a React component for TypeScript
const HowItWorks: React.FC = () => {
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
    <section id="how-it-works" className="py-24 px-4 relative overflow-hidden bg-[#030303]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-l from-indigo-500/10 to-transparent blur-3xl rounded-full opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/3 bg-gradient-to-t from-rose-500/10 to-transparent blur-3xl rounded-full opacity-20" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            How <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">CarFolio</span> Works
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index + 1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 ease-in-out" style={{ backgroundImage: `linear-gradient(to right, ${step.gradient.replace('from-', '')}, transparent)` }} />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{step.title}</h3>
              </div>
              
              <div className="pl-14">
                <p className="text-white/60">{step.description}</p>
              </div>
              
              <div className="absolute -top-6 right-6 w-12 h-12 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center shadow-lg">
                <step.icon className="w-6 h-6 text-white/80" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
