"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  hiddenReveal,
  hiddenRevealUp,
  staggerDelay,
  transitionReveal,
  transitionRevealShort,
  viewportReveal,
  visibleReveal,
} from "@/lib/motion";
import { GraduationCap, Briefcase, TrendingUp, Building2 } from "lucide-react";

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Students Trained",
    icon: GraduationCap,
    color: "var(--neon-blue)",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Successful Placements",
    icon: Briefcase,
    color: "#a78bfa",
  },
  {
    value: 84,
    suffix: " LPA",
    label: "Highest Package",
    icon: TrendingUp,
    color: "#34d399",
  },
  {
    value: 300,
    suffix: "+",
    label: "Hiring Companies",
    icon: Building2,
    color: "var(--neon-purple)",
  },
];

const companies = [
  "TCS",
  "Infosys",
  "Wipro",
  "HCLTech",
  "Tech Mahindra",
  "LTIMindtree",
  "Cognizant",
  "Accenture",
  "Capgemini",
  "Mphasis",
  "Genpact",
  "IBM",
  "Deloitte",
  "EY",
  "PwC",
  "Amazon",
  "Flipkart",
  "Zoho",
  "Oracle",
];

/* ─── Animated Counter ─── */
function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 2200;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // ease-out cubic for a satisfying deceleration
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

/* ─── Main Component ─── */
export default function PlacementStats() {
  return (
    <section id="placement-stats" className="py-28 relative z-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--neon-blue)]/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.p
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionRevealShort}
            className="text-[var(--neon-blue)] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Our Impact
          </motion.p>
          <motion.h2
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionReveal, delay: staggerDelay(1, 0.06) }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Placement{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
              Statistics
            </span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(2, 0.06) }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Outcomes you can verify in interviews: strong fundamentals, portfolio-ready work, and referrals across our hiring partner network.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={hiddenReveal}
                whileInView={visibleReveal}
                viewport={viewportReveal}
                transition={{ ...transitionReveal, delay: staggerDelay(i, 0.1) }}
                whileHover={{ y: -6, transition: transitionRevealShort }}
                className="group relative will-change-transform"
              >
                {/* Glow on hover */}
                <div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}33, transparent, ${stat.color}22)`,
                  }}
                />

                {/* Card */}
                <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 md:p-8 text-center group-hover:border-white/20 transition-all duration-500">
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${stat.color} 12%, transparent)`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: stat.color }}
                    />
                  </div>

                  {/* Number */}
                  <p
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-none"
                    style={{ color: stat.color }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>

                  {/* Label */}
                  <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
            Our Hiring Partners
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Scrolling company logos — single row */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-scroll">
            {[...companies, ...companies].map((company, i) => (
              <div
                key={`${company}-${i}`}
                className="flex-shrink-0 px-6 py-3 bg-white/[0.04] border border-white/[0.07] rounded-lg text-gray-300 font-semibold text-sm whitespace-nowrap hover:border-[var(--neon-blue)]/30 hover:text-white hover:bg-white/[0.07] transition-all duration-300 cursor-default"
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
