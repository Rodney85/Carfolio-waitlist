import { motion } from 'framer-motion';
import { Car, Link2, Star, Upload } from 'lucide-react';

const steps = [
  {
    icon: Car,
    title: "Create Your Car Profile",
    description: "Add your vehicle details including year, make, model, horsepower, and a list of modifications.",
    color: "from-primary-500 to-pink-600"
  },
  {
    icon: Upload,
    title: "Upload Your Best Photos",
    description: "Showcase your ride with up to 10 high-quality photos or videos that highlight your build.",
    color: "from-blue-500 to-primary-500"
  },
  {
    icon: Link2,
    title: "Share Your Profile",
    description: "Get a personalized URL to share your car portfolio on social media, forums, and with other enthusiasts.",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: Star,
    title: "Monetize Your Passion",
    description: "Add affiliate links to the parts and products you use, earning commission when others buy through your profile.",
    color: "from-green-500 to-blue-500"
  },
];

// Explicitly mark this as a React component for TypeScript
const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-l from-primary-500/20 to-transparent blur-3xl rounded-full opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/3 bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl rounded-full opacity-30" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="text-primary-500">CarFolio</span> Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join the community of auto enthusiasts and showcase your builds
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark-800/70 backdrop-blur-sm border border-dark-700 rounded-xl p-6 relative"
            >
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                {index < steps.length - 1 && (
                  <div className="w-6 h-6 rounded-full border-2 border-dark-700 flex items-center justify-center bg-dark-800">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
