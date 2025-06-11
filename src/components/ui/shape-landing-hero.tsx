"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "../../lib/utils";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={400}
                    height={100}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-15%] sm:left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={350}
                    height={90}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-10%] sm:right-[-5%] md:right-[0%] top-[65%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={250}
                    height={70}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[0%] sm:left-[5%] md:left-[10%] bottom-[3%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={180}
                    height={50}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[10%] sm:right-[15%] md:right-[20%] top-[8%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={120}
                    height={35}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[15%] sm:left-[20%] md:left-[25%] top-[3%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 pb-8 sm:py-0">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 md:mb-8"
                    >
                        <Circle className="h-2.5 w-2.5 fill-rose-500/80" />
                        <span className="text-sm md:text-base text-white/70 tracking-wide font-medium">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight leading-[1.1] px-4 sm:px-0">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br className="hidden sm:block" />
                            <span className="sm:mt-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/60 mb-6 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 sm:px-6">
                            CarFolio helps automotive enthusiasts create stunning digital showcases for their vehicles, share them with a single link, and even earn money from their passion.
                        </p>
                        
                        <motion.form 
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4 sm:px-0 mb-4"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 py-3 rounded-lg bg-dark-800/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-white"
                                required
                            />
                            <button 
                                type="submit" 
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-500/20"
                            >
                                Join Waitlist
                            </button>
                        </motion.form>
                        
                        <motion.div 
                            custom={4}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-sm text-white/40 max-w-md mx-auto px-4 sm:px-0"
                        >
                            <p>No credit card required. Lock in founder pricing for life.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
