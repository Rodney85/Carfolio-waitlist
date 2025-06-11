import { motion } from 'framer-motion';
import { CheckCircle, Clock, Award, MessageSquare, TrendingUp } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: "Lock in lifetime pricing",
    description: "Pay the same low founder rate forever, even as standard prices rise to $49.99/month",
    gradient: "from-indigo-500/[0.15]"
  },
  {
    icon: Award,
    title: "Early feature access",
    description: "Be first to try new features before everyone else",
    gradient: "from-rose-500/[0.15]"
  },
  {
    icon: CheckCircle,
    title: "Exclusive badges",
    description: "Show your OG status with tier-specific profile badges",
    gradient: "from-violet-500/[0.15]"
  },
  {
    icon: MessageSquare,
    title: "Influence development",
    description: "Early members help shape product priorities",
    gradient: "from-amber-500/[0.15]"
  },
  {
    icon: TrendingUp,
    title: "Boost your spot",
    description: "Refer friends to move up the waitlist and unlock tiers faster",
    gradient: "from-cyan-500/[0.15]"
  }
];

export default function WaitlistAdvantage() {
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
    <section id="waitlist-advantage" className="py-24 px-4 relative overflow-hidden bg-[#030303]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Waitlist</span> Advantage
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 flex flex-col items-start relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 ease-in-out" style={{ backgroundImage: `linear-gradient(to right, ${advantage.gradient.replace('from-', '')}, transparent)` }} />
              
              <div className="bg-white/[0.05] p-3 rounded-lg mb-4 relative z-10">
                <advantage.icon className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center relative z-10">
                <span className="text-indigo-300 mr-2">✓</span> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{advantage.title}</span>
              </h3>
              <p className="text-white/60 text-sm relative z-10">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
