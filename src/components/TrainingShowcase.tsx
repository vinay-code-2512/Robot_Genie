"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Users, Rocket } from "lucide-react";
import {
  hiddenReveal,
  staggerDelay,
  transitionReveal,
  transitionRevealShort,
  viewportReveal,
  visibleReveal,
} from "@/lib/motion";

const features = [
  {
    icon: Monitor,
    title: "Live Online Classes",
    description:
      "Facilitated live sessions with Q&A, breakout practice, and same-week assignments—so accountability stays high even when you learn remotely.",
  },
  {
    icon: Users,
    title: "Small Batch Size",
    description:
      "Capped cohorts so mentors can review your work personally; you graduate with corrections and comments—not generic rubrics.",
  },
  {
    icon: Rocket,
    title: "Career Launchpad",
    description:
      "Placement desk support for ATS-friendly resumes, referral introductions where applicable, and mock interviews tuned to IT services and enterprise hiring bars.",
  },
];

export default function TrainingShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.2, margin: "0px 0px -12% 0px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches || !inView) {
        video.pause();
      } else {
        void video.play().catch(() => {});
      }
    };

    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="training"
      className="relative isolate min-h-[85vh] flex flex-col justify-center overflow-hidden py-24 md:py-32"
      aria-labelledby="training-showcase-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/training-showcase-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/72 md:bg-black/68" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/80 pointer-events-none"
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
          <motion.h2
            id="training-showcase-heading"
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionReveal}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
          >
            Learning That Creates{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]">
              Professionals
            </span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(1, 0.08) }}
            className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Cohort-based delivery with weekly milestones—built for professionals who need proof of skill, not another certificate to file away.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={hiddenReveal}
              whileInView={visibleReveal}
              viewport={viewportReveal}
              transition={{ ...transitionRevealShort, delay: 0.08 + staggerDelay(i, 0.1) }}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: transitionRevealShort,
              }}
              whileTap={{ scale: 0.995 }}
              className="glass-panel p-10 rounded-2xl relative overflow-hidden group border border-white/10 shadow-[0_0_0_1px_rgba(0,240,255,0.08)] hover:border-[var(--neon-blue)]/60 hover:shadow-[0_0_40px_rgba(0,240,255,0.22)] transition-[box-shadow,border-color] duration-300 bg-black/25 backdrop-blur-md will-change-transform"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-14 h-14 rounded-xl bg-[var(--neon-blue)]/10 flex items-center justify-center mb-6">
                <feat.icon className="w-7 h-7 text-[var(--neon-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
