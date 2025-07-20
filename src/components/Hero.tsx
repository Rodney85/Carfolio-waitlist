import WaitlistForm from './WaitlistForm';
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const Hero = () => {
  // Use custom hero with our WaitlistForm component for proper submission handling
  return (
    <CustomHeroWithWaitlistForm />
  );
};

// ElegantShape component for background animations
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

// Custom component that wraps HeroGeometric but uses our WaitlistForm for functionality
const CustomHeroWithWaitlistForm = () => {
  // Reuse the HeroGeometric styling but replace the form
  return (
    <div id="hero" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Shape elements from HeroGeometric */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={300}
          height={80}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-20%] sm:left-[-15%] md:left-[-10%] lg:left-[-5%] top-[10%] sm:top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={280}
          height={70}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-15%] sm:right-[-10%] md:right-[-5%] lg:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={200}
          height={60}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[-5%] sm:left-[0%] md:left-[5%] lg:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={150}
          height={40}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[5%] sm:right-[8%] md:right-[15%] lg:right-[20%] top-[20%] sm:top-[25%] md:top-[30%]"
        />
      </div>

      <div className="relative z-10 py-16 sm:py-20 md:py-24 flex flex-col items-center text-center min-h-[100svh] justify-center">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-lg border border-white/10 py-2 px-4 rounded-full mb-6">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="text-sm md:text-base text-white/70 tracking-wide font-medium">
              Carfolio Waitlist
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 tracking-tight leading-[1.1] px-2 sm:px-4 lg:px-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Your Car's Story Deserves
            </span>
            <br className="hidden sm:block" />
            <span className="sm:mt-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              More Than a Caption.
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 mb-6 md:mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-2 sm:px-4 md:px-6">
            CarFolio is the first all-in-one platform for automotive enthusiasts to showcase their builds, share their story, and monetize their passion. Stop typing out your mod list. Start building your legacy.
          </p>
          
          {/* Waitlist Form - Using the proper connected component */}
          <div className="max-w-md mx-auto px-2 sm:px-4 lg:px-0 mb-4">
            <WaitlistForm />
          </div>
          
          {/* Footer message */}
          <div className="text-sm text-white/40 max-w-md mx-auto px-4 sm:px-0">
            <p>Join now to lock in lifetime founder pricing.</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
};

export default Hero;