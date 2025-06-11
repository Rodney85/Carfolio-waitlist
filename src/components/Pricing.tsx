import { motion } from 'framer-motion';
import { Crown, Zap, Star, Users, Check, Shield, Award } from 'lucide-react';

const plans = [
  {
    name: "Exclusive Launch",
    price: '$9.99',
    totalSpots: 30,
    spotsLeft: 18,
    spotsRemaining: 12,
    icon: Crown,
    badge: "Founding Member",
    highlight: true,
    subtitle: "First to be unlocked",
    features: [
      'Founding Member badge on profile',
      'First access to all new features',
      'Unlimited vehicle profiles',
      'Premium analytics dashboard',
      'Lifetime guarantee on this price'
    ]
  },
  {
    name: 'Early Bird',
    price: '$19.99',
    totalSpots: 40,
    spotsLeft: 40,
    icon: Zap,
    badge: 'Early Bird',
    subtitle: "Unlocks after Exclusive Launch fills",
    features: [
      'Early Bird badge on profile',
      'Early access to new features',
      'Unlimited vehicle profiles',
      'Premium analytics dashboard',
      'Priority support'
    ]
  },
  {
    name: 'Build Club',
    price: '$27.99',
    totalSpots: 30,
    spotsLeft: 30,
    icon: Star,
    badge: 'Builder',
    subtitle: "Unlocks after Early Bird fills",
    features: [
      'Builder badge on profile',
      'Priority access to new features',
      'Unlimited vehicle profiles',
      'Premium analytics dashboard',
      'Community access'
    ]
  },
  {
    name: 'Standard Premium',
    price: '$49.99',
    totalSpots: null,
    spotsLeft: null,
    subtitle: "Available to everyone after waitlist",
    icon: Users,
    features: [
      'Unlimited vehicle profiles',
      'Advanced analytics & reporting',
      'Priority support',
      'Standard access to new features'
    ]
  }
];

export default function Pricing() {
  // Since we haven't launched yet, the first tier is active
  const activeTier = plans[0];
  
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
    <section id="pricing" className="py-24 px-4 relative overflow-hidden bg-[#030303]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Exclusive</span> Waitlist Pricing
          </h2>
          <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Reserve Your Tier Before Launch
          </p>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Join our waitlist now to lock in these special lifetime prices. All tiers receive premium features, but prices increase as spots fill. Standard pricing after launch will be $49.99/month.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const isFirst = index === 0;
            const isActive = plan === activeTier;
            
            // All tiers are available for pre-signup, but will be available sequentially
            const isUpcoming = index > 0;
            
            return (
              <motion.div
                key={plan.name}
                custom={index + 1}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative p-6 rounded-xl overflow-hidden group ${isActive ? 'ring-2 ring-indigo-500/50 md:scale-105' : ''}`}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl z-0" />
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.05] to-rose-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0" />
                
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-indigo-500/20 to-rose-500/20 text-white text-xs font-medium py-1 px-3 rounded-bl-lg rounded-tr-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    {plan.icon && <plan.icon className="w-5 h-5 text-white/80" />}
                    <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{plan.name}</h3>
                  </div>
                  
                  <div className="text-2xl font-bold mb-3 flex items-baseline">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">{plan.price}</span>
                    <span className="text-sm text-white/60 ml-1">/month</span>
                  </div>

                  {plan.totalSpots && (
                    <div className="mb-6">
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="text-white/60">
                          {isFirst ? 'First to be unlocked' : isUpcoming ? `Unlocks after ${plans[index-1].name} fills` : ''}
                        </span>
                        <span className="text-indigo-300 font-medium">
                          {plan.totalSpots} spots total
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        {/* No progress yet as we haven't launched */}
                        <div className="h-full rounded-full bg-gradient-to-r from-indigo-500/40 to-rose-500/40 w-0" />
                      </div>
                    </div>
                  )}
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-indigo-300 mt-0.5 shrink-0" />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full font-medium py-2.5 px-4 rounded-lg transition-all duration-300 text-sm shadow-lg ${isFirst ? 'bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white shadow-indigo-500/20' : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.08]'}`}
                  >
                    {isFirst ? 'Join Waitlist to Reserve' : 'Locked'}
                  </motion.button>
                  
                  {!isFirst && <div className="h-[20px]"></div>}
                  
                  {isFirst && (
                    <p className="text-xs text-center mt-2 text-indigo-300">
                      Pre-launch reservations get priority access
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          custom={6}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-8 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.05] to-rose-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-indigo-300 mr-2" />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">The Waitlist Advantage</h3>
            </div>
            <p className="text-white/60 mb-5">
              Join our waitlist now and <span className="text-indigo-300 font-medium">lock in lifetime pricing</span>. Pay the same low founder rate forever, even as standard prices rise to $49.99/month after launch.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-300" />
                <span className="text-white/70">Guaranteed lowest price</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-300" />
                <span className="text-white/70">No charge until launch</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-indigo-300" />
                <span className="text-white/70">Priority access</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}