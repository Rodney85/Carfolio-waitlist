import { HeroGeometric } from './ui/shape-landing-hero';
import WaitlistForm from './WaitlistForm';

const Hero = () => {
  // Use custom hero with our WaitlistForm component for proper submission handling
  return (
    <CustomHeroWithWaitlistForm />
  );
};

// Custom component that wraps HeroGeometric but uses our WaitlistForm for functionality
const CustomHeroWithWaitlistForm = () => {
  // Reuse the HeroGeometric styling but replace the form
  return (
    <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Shape elements from HeroGeometric */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elegant shapes would be here */}
      </div>

      <div className="relative z-10 py-24 flex flex-col items-center text-center">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-lg border border-white/10 py-2 px-4 rounded-full mb-6">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="text-sm md:text-base text-white/70 tracking-wide font-medium">
              Carfolio Waitlist
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight leading-[1.1] px-4 sm:px-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Get Early Access
            </span>
            <br className="hidden sm:block" />
            <span className="sm:mt-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              to Your Car's Digital Home
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/60 mb-6 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 sm:px-6">
            CarFolio helps automotive enthusiasts create stunning digital showcases for their vehicles, share them with a single link, and even earn money from their passion.
          </p>
          
          {/* Waitlist Form - Using the proper connected component */}
          <div className="max-w-md mx-auto px-4 sm:px-0 mb-4">
            <WaitlistForm />
          </div>
          
          {/* Footer message */}
          <div className="text-sm text-white/40 max-w-md mx-auto px-4 sm:px-0">
            <p>No credit card required. Lock in founder pricing for life.</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
};

export default Hero;