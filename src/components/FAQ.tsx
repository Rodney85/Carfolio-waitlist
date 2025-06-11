import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
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
    <motion.div 
      custom={index + 1}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-b border-white/10 last:border-b-0 group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center py-5 text-left focus:outline-none transition-colors duration-300 group-hover:text-white/90"
      >
        <h3 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-indigo-300 group-hover:via-white/90 group-hover:to-rose-300 transition-all duration-300">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-indigo-300 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white/60">{answer}</p>
      </div>
    </motion.div>
  );
};

export default function FAQ() {
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

  const faqItems = [
    {
      question: "Is the price really locked in forever?",
      answer: "Yes! As long as you maintain your subscription, you'll keep your founding rate for life, even as standard pricing increases to $49.99/month after launch."
    },
    {
      question: "What features do waitlist members get?",
      answer: "All waitlist tiers (Founding Member, Early Bird, and Builder) receive the complete Premium feature set. The main differences are your profile badge, early access timing to new features, and of course, your lifetime price."
    },
    {
      question: "When will CarFolio officially launch?",
      answer: "We're currently in private beta and plan to launch publicly in Q3 2025. Waitlist members will get access in phases starting Q2 2025."
    },
    {
      question: "How do the affiliate earnings work?",
      answer: "Connect your existing affiliate accounts from popular auto parts retailers, or use our in-house affiliate program. You earn commissions when people purchase through links on your CarFolio profiles."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "You can always upgrade to a higher tier if spots are available. However, if you downgrade or cancel, you'll lose your locked-in founder pricing."
    },
    {
      question: "Is there a mobile app?",
      answer: "We're launching with a fully responsive web application. Native iOS and Android apps are on our roadmap for late 2025."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 relative overflow-hidden bg-[#030303]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Questions</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.08] p-6 md:p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] to-rose-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0" />
          
          <div className="relative z-10">
            {faqItems.map((item, index) => (
              <FAQItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
