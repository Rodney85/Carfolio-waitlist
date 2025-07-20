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
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left border-b border-white/[0.08] group-hover:border-indigo-300/30 transition-colors duration-300"
      >
        <h3 className="text-base sm:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-indigo-300 group-hover:via-white/90 group-hover:to-rose-300 transition-all duration-300 pr-2">{question}</h3>
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
        <p className="text-sm sm:text-base text-white/60">{answer}</p>
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
      answer: "Yes. Whatever founder rate you secure when your spot on the waitlist unlocks is yours for life, as long as you maintain your subscription."
    },
    {
      question: "When will CarFolio officially launch?",
      answer: "We are currently in private beta and are planning our public launch for 2025. Waitlist members will get access first."
    },
    {
      question: "How do the affiliate earnings work?",
      answer: "You can add your own affiliate links from any network (like Amazon Associates, etc.) to the parts on your build list. When someone clicks and buys, the commission goes directly to you."
    },
    {
      question: "Is a credit card required to join the waitlist?",
      answer: "Absolutely not. You'll only need to enter payment details when your spot unlocks and you decide to activate your account."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden bg-[#030303]">
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
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
          className="bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.08] p-4 sm:p-6 md:p-8 relative overflow-hidden group"
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
