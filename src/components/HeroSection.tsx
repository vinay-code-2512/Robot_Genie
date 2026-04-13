"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  hiddenReveal,
  transitionTap,
  visibleReveal,
} from "@/lib/motion";

const trustBadges = [
  { value: "5000+", label: "Students Trained" },
  { value: "84 LPA", label: "Highest Package" },
  { value: "300+", label: "Hiring Partners" },
];

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 20}s`,
  size: Math.random() > 0.5 ? "w-[3px] h-[3px]" : "w-[2px] h-[2px]",
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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
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
        <div className="max-w-4xl mx-auto text-center lg:text-left">
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
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-8"
          >
            Transform Your{" "}
            <span className="gradient-text relative">
              Career
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-transparent opacity-60 rounded-full" />
            </span>{" "}
            With AI
          </motion.h1>

          <motion.p
            initial={hiddenReveal}
            animate={visibleReveal}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Master <span className="text-[var(--neon-blue)]">Data Science</span>,{" "}
            <span className="text-[var(--neon-purple)]">Digital Marketing</span> &{" "}
            <span className="text-white font-medium">Analytics</span> with industry experts
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
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
                className="trust-badge text-center min-w-[140px]"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text">
                  {badge.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1.5 font-medium tracking-wide">
                  {badge.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_32px_rgba(34,197,94,0.5)] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </section>
  );
}
