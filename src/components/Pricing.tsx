import { motion } from 'framer-motion';
import { Crown, Zap, Star, Users, Check, Shield, Award, Clock } from 'lucide-react';

const plans = [
  {
    name: "Exclusive Launch",
    price: '$9.99',
    totalSpots: 25,
    spotsLeft: 25,
    icon: Crown,
    badge: "Founding Member",
    highlight: true,
    features: [
      'Founding Member badge on profile',
      'First access to all new features',
      'Unlimited vehicle cards',
      'Premium analytics dashboard',
      'Lifetime discount on future plans'
    ]
  },
  {
    name: 'Early Bird',
    price: '$19.99',
    totalSpots: 50,
    spotsLeft: 50,
    icon: Zap,
    badge: 'Early Bird',
    features: [
      'Early Bird badge on profile',
      'Early access to new features',
      'Up to 10 vehicle profiles',
      'Analytics dashboard',
      'Priority support'
    ]
  },
  {
    name: 'Build Club',
    price: '$27.99',
    totalSpots: 100,
    spotsLeft: 100,
    icon: Star,
    badge: 'Builder',
    features: [
      'Builder badge on profile',
      'Priority access to new features',
      'Up to 5 vehicle profiles',
      'Basic performance metrics',
      'Community access'
    ]
  },
  {
    name: 'Standard',
    price: '$35.00',
    totalSpots: null,
    spotsLeft: null,
    icon: Users,
    features: [
      'Up to 3 vehicle profiles',
      'Basic stats tracking',
      'Standard support',
      'Standard access to new features'
    ]
  }
];

export default function Pricing() {
  // Since we haven't launched yet, the first tier is active
  const activeTier = plans[0];

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20">
            <Clock className="w-3.5 h-3.5 text-primary-500 mr-2" />
            <span className="text-xs font-medium text-primary-500">Pre-Launch Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-primary-500">Exclusive</span> Waitlist Pricing
          </h2>
          <p className="text-xl sm:text-2xl text-primary-500 font-bold mb-3 sm:mb-4">
            Reserve Your Tier Before Launch
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Join our waitlist now to lock in these special pre-launch prices. All tiers have limited spots that will be filled on a first-come, first-served basis when we launch.
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-xl overflow-hidden group ${
                  isActive ? 'ring-2 ring-primary-500 md:scale-105' : ''
                }`}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-dark-800 rounded-xl z-0" />
                
                {/* Gradient border */}
                <div className="absolute inset-0 p-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 opacity-20 rounded-xl" />
                  <div className="absolute inset-0.5 bg-dark-800 rounded-[10px]" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                      {plan.badge && (
                        <span className="inline-block px-2 py-0.5 bg-primary-500/10 text-primary-500 text-xs rounded-full mb-2">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center`}>
                      <plan.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold my-5 flex items-baseline">
                    <span className="text-white">{plan.price}</span>
                    <span className="text-sm text-gray-400 ml-1">/month</span>
                  </div>

                  {plan.totalSpots && (
                    <div className="mb-6">
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="text-gray-400">
                          {isFirst ? 'First to be unlocked' : isUpcoming ? `Unlocks after ${plans[index-1].name} fills` : ''}
                        </span>
                        <span className="text-primary-500 font-medium">
                          {plan.totalSpots} spots total
                        </span>
                      </div>
                      <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
                        {/* No progress yet as we haven't launched */}
                        <div className="h-full rounded-full bg-primary-500/20 w-0" />
                      </div>
                    </div>
                  )}
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full font-medium py-2.5 px-4 rounded-lg transition-colors text-sm ${
                      isFirst
                        ? 'bg-primary-500 hover:bg-primary-600 text-white'
                        : 'bg-dark-700/80 text-gray-300 hover:bg-dark-700'
                    }`}
                  >
                    {isFirst ? 'Join Waitlist to Reserve' : 'Locked'}
                  </motion.button>
                  
                  {isFirst && (
                    <p className="text-xs text-center mt-2 text-primary-500">
                      Pre-launch reservations get priority access
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto bg-dark-800/70 backdrop-blur border border-dark-700 rounded-xl p-6 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-primary-500 mr-2" />
            <h3 className="text-xl font-bold">Pre-Launch Guarantee</h3>
          </div>
          <p className="text-gray-400 mb-5">
            Join our waitlist now and <span className="text-primary-500 font-medium">your price is locked in</span>. When we launch, these prices will increase significantly for new users - but not for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary-500" />
              <span className="text-gray-300">Guaranteed lowest price</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-500" />
              <span className="text-gray-300">No charge until launch</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-primary-500" />
              <span className="text-gray-300">Priority access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}