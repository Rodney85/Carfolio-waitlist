import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const features = [
  {
    emoji: "📱",
    title: "Digital Car Portfolios",
    description: "Create dedicated profiles for each vehicle with specs, modification history, and media galleries that you control.",
    gradient: "from-indigo-500/[0.15]"
  },
  {
    emoji: "🔗",
    title: "One Shareable Link",
    description: "`carfolio.io/yourusername` - One simple link to share across Instagram, TikTok, forums, and with other enthusiasts.",
    gradient: "from-rose-500/[0.15]"
  },
  {
    emoji: "💰",
    title: "Monetize Your Knowledge",
    description: "Add affiliate links to parts you've used and earn commission when your followers purchase through your recommendations.",
    gradient: "from-violet-500/[0.15]"
  },
  {
    emoji: "✅",
    title: "Build Credibility",
    description: "Verified profiles establish your expertise and build trust with your automotive community.",
    gradient: "from-amber-500/[0.15]"
  }
];

export default function Features() {
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
    <section id="features" className="py-24 px-4 relative overflow-hidden bg-[#030303]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-24 opacity-30">
              <svg 
                width="120" 
                height="120" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ display: 'block' }}
              >
                <path d="M13 16a3 3 0 0 1 2.24 5" />
                <path d="M18 12h.01" />
                <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
                <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
                <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight z-10 mt-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Key</span> Features
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index + 1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-black/20 backdrop-blur-sm border border-white/[0.08] h-full group hover:bg-white/[0.05] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 ease-in-out" style={{ backgroundImage: `linear-gradient(to right, ${feature.gradient.replace('from-', '')}, transparent)` }} />
                
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="text-4xl">
                    {feature.emoji}
                  </div>
                  <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}