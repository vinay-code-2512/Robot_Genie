"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import dynamic from "next/dynamic";
import {
  hiddenReveal,
  transitionTap,
  visibleReveal,
} from "@/lib/motion";

const TeslaRobotScene = dynamic(() => import("@/components/TeslaRobotScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#050816]" />,
});

const trustBadges = [
  { value: "5000+", label: "Students Trained" },
  { value: "84 LPA", label: "Highest Package" },
  { value: "300+", label: "Hiring Partners" },
];

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 20}s`,
  size: "w-[2px] h-[2px]",
}));

const badgeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.5 },
  },
};

const badgeItem = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient-bg" />
      
      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`hero-particle ${p.size}`}
            style={{ left: p.left, animationDelay: p.delay }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-160px)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-[400px] lg:h-[600px] relative order-2 lg:order-1"
          >
            <TeslaRobotScene />
          </motion.div>

          <div className="text-center lg:text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/[0.08] backdrop-blur-xl mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--neon-blue)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon-blue)]" />
              </span>
              <span className="text-[var(--neon-blue)] text-sm font-semibold tracking-wide">
                AI-Powered Learning Platform
              </span>
            </motion.div>

            <motion.h1
              initial={hiddenReveal}
              animate={visibleReveal}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05] text-white mb-6"
            >
              India&apos;s Most Advanced{" "}
              <span className="gradient-text relative">
                AI
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-transparent opacity-60 rounded-full" />
              </span>{" "}
              Powered Career Institute
            </motion.h1>

            <motion.p
              initial={hiddenReveal}
              animate={visibleReveal}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              <span className="text-[var(--neon-blue)]">Digital Marketing</span> •{" "}
              <span className="text-[var(--neon-purple)]">Data Science</span> •{" "}
              <span className="text-white">Finance</span> •{" "}
              <span className="text-white">HR</span> •{" "}
              <span className="text-white font-medium">AI Skills</span>
              <br />
              <span className="text-gray-300">
                Industry Ready Training With Real Placement Support
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                type="button"
                whileHover={{ y: -3, scale: 1.03, boxShadow: "0 0 0 1px rgba(0, 240, 255, 0.7), 0 0 80px rgba(0, 240, 255, 0.5), 0 0 120px rgba(0, 240, 255, 0.25), 0 12px 40px rgba(0, 0, 0, 0.5)" }}
                whileTap={{ scale: 0.97 }}
                transition={transitionTap}
                className="btn-primary btn-cta-pulse flex items-center justify-center gap-2.5 text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5"
              >
                Book Free Counseling
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={transitionTap}
                className="btn-secondary flex items-center justify-center gap-2.5 text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              variants={badgeContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start"
            >
              {trustBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  variants={badgeItem}
                  className="trust-badge text-center min-w-[100px]"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text">
                    {badge.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium tracking-wide">
                    {badge.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 bg-green-500 hover:bg-green-400 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4),0_0_40px_rgba(34,197,94,0.2)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.5),0_0_60px_rgba(34,197,94,0.3)] transition-all duration-200 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <span className="text-white font-semibold text-sm hidden sm:inline">Chat Now</span>
      </motion.a>
    </section>
  );
}