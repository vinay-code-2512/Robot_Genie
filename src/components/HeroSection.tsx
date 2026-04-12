"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  hiddenReveal,
  transitionReveal,
  transitionRevealShort,
  transitionTap,
  visibleReveal,
} from "@/lib/motion";

const trustBadges = [
  { value: "5000+", label: "Students" },
  { value: "84 LPA", label: "Highest Package" },
  { value: "300+", label: "Companies" },
];

const badgeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.45 },
  },
};

const badgeItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: transitionRevealShort },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[var(--neon-blue)]/8 rounded-full blur-[140px] pointer-events-none animate-float-glow" />
      <div className="absolute bottom-[15%] right-[5%] w-[450px] h-[450px] bg-[var(--neon-purple)]/8 rounded-full blur-[140px] pointer-events-none animate-float-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <motion.div
            initial={hiddenReveal}
            animate={visibleReveal}
            transition={transitionRevealShort}
            className="inline-block px-5 py-2 rounded-full border border-[var(--neon-blue)]/25 bg-[var(--neon-blue)]/[0.06] backdrop-blur-xl mb-10"
          >
            <span className="text-[var(--neon-blue)] text-sm font-semibold tracking-widest uppercase">
              Welcome to the Future of Learning
            </span>
          </motion.div>

          <motion.h1
            initial={hiddenReveal}
            animate={visibleReveal}
            transition={{ ...transitionRevealShort, delay: 0.08 }}
            className="heading-xl text-white mb-8"
          >
            India&apos;s Most Advanced{" "}
            <span className="gradient-text">
              AI Powered
            </span>{" "}
            Career Institute
          </motion.h1>

          <motion.p
            initial={hiddenReveal}
            animate={visibleReveal}
            transition={{ ...transitionRevealShort, delay: 0.16 }}
            className="text-body-lg text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0"
          >
            Digital Marketing &bull; Data Science &amp; AI &bull; Analytics &bull; Finance &bull; HR &bull; Leadership-ready marketing
          </motion.p>

          <motion.div
            initial={hiddenReveal}
            animate={visibleReveal}
            transition={{ ...transitionRevealShort, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-20"
          >
            <motion.button
              type="button"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={transitionTap}
              className="btn-primary flex items-center justify-center gap-2.5 group"
            >
              Book Free Career Counselling
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={transitionTap}
              className="btn-secondary flex items-center justify-center gap-2.5"
            >
              Join Live Demo
            </motion.button>
          </motion.div>

          <motion.div
            variants={badgeContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-10 md:gap-14 justify-center lg:justify-start"
          >
            {trustBadges.map((badge) => (
              <motion.div key={badge.label} variants={badgeItem} className="text-center group">
                <p className="text-4xl md:text-5xl font-extrabold gradient-text">
                  {badge.value}
                </p>
                <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">{badge.label}</p>
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
        transition={{ ...transitionReveal, delay: 0.55 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-[transform,box-shadow,background-color] duration-300 hover:bg-green-400 hover:shadow-[0_0_28px_rgba(34,197,94,0.45)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </section>
  );
}
