import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Share2, DollarSign, Car, Users } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: "Digital Car Profiles",
    description: "Showcase every detail of your builds with dedicated profiles for each vehicle, including specs, mods, and history.",
    color: "from-rose-500 to-primary-500"
  },
  {
    icon: Share2,
    title: "One Shareable Link",
    description: "Share your entire automotive collection with a single custom link that you can post on social media or forums.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: DollarSign,
    title: "Monetize Your Knowledge",
    description: "Add affiliate links to parts you've used and earn when others purchase through your recommendations.",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: ShieldCheck,
    title: "Profile Verification",
    description: "Get verified to build trust and credibility with your audience and potential collaborators.",
    color: "from-primary-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Mobile-Optimized",
    description: "Access your profile from any device with a responsive design that works perfectly on desktop and mobile.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Community Features",
    description: "Connect with like-minded enthusiasts, get feedback on your builds, and discover new inspiration.",
    color: "from-sky-500 to-cyan-600"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-500">Why Join Our Waitlist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Features You'll <span className="text-primary-500">Love</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            CarFolio is designed by car enthusiasts for car enthusiasts, with powerful features to showcase your automotive passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ translateY: -5 }}
              className="relative p-6 rounded-xl overflow-hidden group"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-dark-800 rounded-xl z-0" />
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl z-0`} />
              <div className="absolute inset-0 p-0.5">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 rounded-xl`} />
                <div className="absolute inset-0.5 bg-dark-800 rounded-[10px]" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-xl bg-dark-800/50 backdrop-blur border border-dark-700 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold mb-3">Ready to Elevate Your Automotive Experience?</h3>
          <p className="text-gray-400 mb-6">
            Join our exclusive waitlist to be among the first to access CarFolio when we launch. 
            Early signup gets you priority access and special perks!
          </p>
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 px-6 py-3 rounded-lg font-medium text-white transition-all duration-300"
          >
            Join the Waitlist
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}