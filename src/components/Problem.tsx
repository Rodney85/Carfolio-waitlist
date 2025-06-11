import { motion } from 'framer-motion';

export default function Problem() {
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
    <section id="problem" className="py-24 px-4 relative overflow-hidden bg-[#030303]">
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            The Problem We're <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Solving</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto mb-8"></div>
        </motion.div>
        
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-8"
        >
          <p className="text-lg text-white/70 mb-6">
            As car enthusiasts ourselves, we know the frustration:
          </p>
          
          <ul className="space-y-4 mb-8">
            {
              [
                'Social media buries your best build photos in your feed',
                'Forums limit your ability to showcase multiple cars',
                'There\'s no easy way to share your complete build history',
                'You spend time recommending parts but earn nothing from it'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  custom={index + 2}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-white/60"
                >
                  <span className="text-rose-500/80 font-bold">—</span>
                  <span>{item}</span>
                </motion.li>
              ))
            }
          </ul>
          
          <motion.p 
            custom={6}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl font-bold text-center bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent"
          >
            CarFolio is the solution car enthusiasts have been waiting for.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
