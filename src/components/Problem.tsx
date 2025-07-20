"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car, Link, DollarSign, CheckCircle } from "lucide-react";
import { cn } from "../lib/utils";

interface ProblemSectionType {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  highlights: string[];
  gradient: string;
}

interface ProblemCardProps {
  section: ProblemSectionType;
  index: number;
  className?: string;
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<'svg'> & { 
  width: number; 
  height: number; 
  x: string; 
  y: string; 
  squares?: number[][] 
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5;
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}

function ProblemCard({ section, className, index, ...props }: ProblemCardProps) {
  const p = genRandomPattern();

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden p-8 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-500 group',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      {...props}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-white/5 to-white/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-white/5 stroke-white/25 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${section.gradient} group-hover:scale-110 transition-transform duration-300`}>
            <section.icon className="size-6 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">{section.title}</h3>
            <p className="text-sm text-white/60">{section.subtitle}</p>
          </div>
        </div>

        <p className="text-white/60 text-base leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
          {section.description}
        </p>

        <div className="space-y-3">
          {section.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <CheckCircle className="size-4 text-white/80 flex-shrink-0" />
              <span className="text-white/70 group-hover:text-white/80 transition-colors">{highlight}</span>
            </div>
          ))}
        </div>
        
        {/* Gradient accent - now more prominent */}
        <div className={`h-1 w-16 bg-gradient-to-r ${section.gradient} mt-6 group-hover:w-24 transition-all duration-500 rounded-full`}></div>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter() {
  const sections: ProblemSectionType[] = [
    {
      title: "Epic Showcase",
      subtitle: "From Buried Feed to Pro Portfolio",
      description: "Let's be real: social media wasn't built for car enthusiasts. Your best build photos get buried after a day, and there's no clean way to document your journey. CarFolio gives your vehicles the stunning, permanent home they deserve.",
      icon: Car,
      highlights: [
        "Dedicated portfolios for each car",
        "Media galleries you actually control",
        "Professional presentation that lasts",
        "No more buried posts or lost content"
      ],
      gradient: "from-indigo-500/[0.15] to-indigo-600/[0.25]"
    },
    {
      title: "Single Link",
      subtitle: "From Texted List to One URL",
      description: "Tired of repeating your mod list in DMs and forum comments? We were too. CarFolio gives you one simple, shareable link (carfolio.io/yourusername) for your entire garage. It's the only link you'll ever need for your build, period.",
      icon: Link,
      highlights: [
        "One link for your entire garage",
        "Easy sharing across all platforms",
        "Professional URL structure",
        "No more repeated explanations"
      ],
      gradient: "from-rose-500/[0.15] to-rose-600/[0.25]"
    },
    {
      title: "Paying Passion",
      subtitle: "From Hobby Expense to Income",
      description: "You already recommend parts and products to other enthusiasts. It's time you got rewarded for it. With CarFolio, you can easily add affiliate links to your build list. Turn your passion project into a paycheck and let your car start paying for itself.",
      icon: DollarSign,
      highlights: [
        "Monetize your recommendations",
        "Easy affiliate link integration",
        "Let your car pay for itself",
        "Reward your automotive expertise"
      ],
      gradient: "from-violet-500/[0.15] to-violet-600/[0.25]"
    }
  ];

  return (
    <section id="before-after" className="py-24 bg-[#030303] relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Your Build is Epic.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Your Showcase Should Be, Too.
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-6">
            Transform how you share, showcase, and monetize your automotive passion
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <ProblemCard
              key={index}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
