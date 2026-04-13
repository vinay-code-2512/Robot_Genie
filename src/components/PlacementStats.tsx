"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  hiddenReveal,
  staggerDelay,
  transitionReveal,
  transitionRevealShort,
  transitionTap,
  viewportReveal,
  visibleReveal,
} from "@/lib/motion";
import { GraduationCap, Briefcase, TrendingUp, Building2 } from "lucide-react";

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Students",
    icon: GraduationCap,
    color: "var(--neon-blue)",
  },
  {
    value: 84,
    suffix: " LPA",
    label: "Highest Package",
    icon: TrendingUp,
    color: "#34d399",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Placements",
    icon: Briefcase,
    color: "#a78bfa",
  },
  {
    value: 300,
    suffix: "+",
    label: "Companies",
    icon: Building2,
    color: "var(--neon-purple)",
  },
];

const companies = [
  "TCS", "Infosys", "Wipro", "HCLTech", "Tech Mahindra", "LTIMindtree",
  "Cognizant", "Accenture", "Capgemini", "Mphasis", "Genpact", "IBM",
  "Deloitte", "EY", "PwC", "Amazon", "Flipkart", "Zoho", "Oracle",
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) { setCount(value); return; }

    let start = 0;
    const duration = 2200;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = 1 - Math.pow(1 - step / totalSteps, 3);
      start = Math.floor(progress * value);
      if (step >= totalSteps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, reduceMotion]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function PlacementStats() {
  return (
    <section id="placement-stats" className="py-20 relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--neon-blue)]/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={hiddenReveal}
          whileInView={visibleReveal}
          viewport={viewportReveal}
          transition={transitionReveal}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Students Get <span className="gradient-text">Hired</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real placements at top companies. Your success is our proof.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={hiddenReveal}
                whileInView={visibleReveal}
                viewport={viewportReveal}
                transition={{ ...transitionReveal, delay: staggerDelay(i, 0.1) }}
                className="relative bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl p-5 md:p-6 text-center hover:border-white/20 transition-all duration-500"
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3"
                  style={{ backgroundColor: `color-mix(in srgb, ${stat.color} 15%, transparent)` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none mb-1" style={{ color: stat.color }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-400 text-xs md:text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReveal}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={transitionTap}
            className="btn-primary flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto"
          >
            Start Your Placement Journey
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={transitionTap}
            className="btn-secondary flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            Check Placements
          </motion.a>
        </motion.div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
            300+ Hiring Partners
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-3 animate-scroll">
            {[...companies, ...companies].map((company, i) => (
              <div
                key={`${company}-${i}`}
                className="flex-shrink-0 px-5 py-2.5 bg-white/[0.04] border border-white/[0.07] rounded-lg text-gray-300 font-semibold text-sm whitespace-nowrap hover:border-[var(--neon-blue)]/30 hover:text-white hover:bg-white/[0.07] transition-all duration-300 cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
