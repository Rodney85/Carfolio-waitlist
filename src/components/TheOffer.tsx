import { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Star, 
  Shield,
  Brain,
  Users
} from 'lucide-react';
import WaitlistForm from './WaitlistForm';

interface WaitlistBenefit {
  icon: typeof Shield;
  title: string;
  description: string;
}

const benefits: WaitlistBenefit[] = [
  {
    icon: Shield,
    title: "Guaranteed Lowest Price",
    description: "Secure your founder rate and never pay full price."
  },
  {
    icon: Star,
    title: "Exclusive Profile Badges",
    description: "Show off your OG status in the community."
  },
  {
    icon: Brain,
    title: "Shape the Future",
    description: "Your feedback will directly influence our development roadmap."
  },
  {
    icon: Users,
    title: "Move Up the Line",
    description: "Refer friends to climb the waitlist and unlock access even faster."
  }
];

const TrustElements = ({ count = 2400 }: { count?: number }) => {
  const avatars = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <motion.div 
      className="inline-flex items-center space-x-3 bg-white/[0.05] backdrop-blur-sm rounded-full py-2 px-4 border border-white/[0.1]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <motion.div
            key={index}
            className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-white/20 shadow-lg bg-white/10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <img 
              src={avatar} 
              alt="User avatar" 
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </motion.div>
        ))}
      </div>
      <p className="text-white/80 text-sm font-medium">
        <span className="text-white font-semibold">{(count / 1000).toFixed(1)}K</span> currently on the waitlist
      </p>
    </motion.div>
  );
};

const PricingCard = ({ 
  title, 
  price, 
  originalPrice, 
  period, 
  description, 
  isPopular = false 
}: {
  title: string;
  price: number;
  originalPrice: number;
  period: string;
  description: string;
  isPopular?: boolean;
}) => {
  const savings = originalPrice - price;
  const savingsPercent = Math.round((savings / originalPrice) * 100);

  return (
    <motion.div
      className={`relative p-6 rounded-2xl border backdrop-blur-sm ${
        isPopular 
          ? 'bg-white/[0.08] border-white/[0.2] shadow-lg shadow-white/[0.1]' 
          : 'bg-white/[0.03] border-white/[0.08]'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Crown className="h-4 w-4" />
            Founder Special
          </div>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-3xl font-bold text-white">${price}</span>
            <span className="text-white/60">/{period}</span>
          </div>
          {isPopular && (
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-sm text-white/40 line-through">${originalPrice}/{period}</span>
              <span className="text-sm text-green-400 font-medium">
                Save {savingsPercent}%
              </span>
            </div>
          )}
        </div>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default function TheOffer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const founderPrice = 9.99;
  const regularPrice = 39;
  const currentWaitlistCount = 2400;

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 0.86, 0.39, 0.96] 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative py-24 bg-[#030303] overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div className="mb-8" variants={fadeInUp}>
            <TrustElements count={currentWaitlistCount} />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            <span className="text-white">The Waitlist</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
              Advantage
            </span>
          </motion.h1>

          <motion.div 
            className="text-xl sm:text-2xl text-white/60 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <p className="mb-4">
              <span className="text-white font-semibold">Lock In Your Founder Status.</span>
            </p>
            <p className="mb-4">
              CarFolio's standard premium plan will be <span className="text-white font-semibold">${regularPrice}/month</span> after launch.
            </p>
            <p>
              By joining our waitlist today, you'll get priority access and the chance to 
              <span className="text-indigo-300 font-semibold"> lock in a special lifetime rate, starting at just ${founderPrice}/month.</span>
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/[0.05] border border-white/[0.1] rounded-lg p-4 max-w-2xl mx-auto mb-12"
            variants={fadeInUp}
          >
            <p className="text-white font-medium">
              This isn't a temporary discount—it's your founder price, forever.
            </p>
            <p className="text-white/60 text-sm mt-2">
              Spots at each tier are limited and offered on a first-come, first-served basis.
            </p>
          </motion.div>
        </div>
        
        {/* Pricing Comparison */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <PricingCard
            title="Founder Rate"
            price={founderPrice}
            originalPrice={regularPrice}
            period="month"
            description="Your exclusive founder price, locked in forever"
            isPopular={true}
          />
          <PricingCard
            title="Regular Price"
            price={regularPrice}
            originalPrice={regularPrice}
            period="month"
            description="Standard pricing after launch"
          />
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-6 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="w-12 h-12 rounded-lg bg-white/[0.08] border border-white/[0.15] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.12] transition-colors">
                <benefit.icon className="w-6 h-6 text-white/80" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">{benefit.title}</h3>
                <p className="text-white/60 group-hover:text-white/70 transition-colors">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Build Your Legacy?</span>
          </h2>
          <p className="text-xl text-white/60 mb-8 max-w-3xl mx-auto">
            Join the waitlist for the ultimate platform for automotive enthusiasts. 
            Be the first to showcase, share, and monetize your passion.
          </p>
          
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
