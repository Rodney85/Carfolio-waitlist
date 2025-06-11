import { motion } from 'framer-motion';
import { Mail, Users, Bell, Key, PlayCircle } from 'lucide-react';

const steps = [
  {
    icon: Mail,
    title: "Join Now",
    description: "Enter your email to secure a spot",
    gradient: "from-indigo-500/[0.15]"
  },
  {
    icon: Users,
    title: "Move Up",
    description: "Refer friends to climb higher on the list",
    gradient: "from-rose-500/[0.15]"
  },
  {
    icon: Bell,
    title: "Get Notified",
    description: "Receive an email when your tier unlocks",
    gradient: "from-violet-500/[0.15]"
  },
  {
    icon: Key,
    title: "Lock In Pricing",
    description: "Activate your account at your guaranteed lifetime rate",
    gradient: "from-amber-500/[0.15]"
  },
  {
    icon: PlayCircle,
    title: "Start Building",
    description: "Create your automotive portfolio immediately",
    gradient: "from-cyan-500/[0.15]"
  }
];

export default function WaitlistProcess() {
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
    <section id="waitlist-process" className="py-24 px-4 relative overflow-hidden bg-[#030303]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
      
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
            Waitlist <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Process</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Each tier has limited spots and will fill quickly. Once a tier fills, the next tier unlocks automatically.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-10 left-1/2 w-0.5 h-[calc(100%-8rem)] bg-gradient-to-b from-indigo-500/70 via-white/30 to-rose-500/10 hidden md:block" />
          
          <div className="space-y-16 md:space-y-24 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12`}
              >
                <div className={`relative flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 inline-block relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 ease-in-out" style={{ backgroundImage: `linear-gradient(to right, ${step.gradient.replace('from-', '')}, transparent)` }} />
                    
                    <div className="flex items-center gap-3 mb-3 justify-center md:justify-start relative z-10">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{step.title}</h3>
                    </div>
                    <p className="text-white/60 relative z-10">{step.description}</p>
                  </div>
                </div>

                <div className="md:w-20 relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20 absolute left-1/2 transform -translate-x-1/2">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          custom={6}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center p-8 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl max-w-3xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.05] to-rose-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0" />
          
          <div className="relative z-10">
            <div className="text-lg font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Current Status:</span> 
              <span className="text-white/80">Founding Member tier active - 12/30 spots remaining</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
