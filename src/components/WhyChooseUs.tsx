"use client";

import { motion } from "framer-motion";
import { Layers, Bot, HeadphonesIcon, GraduationCap, ArrowRight, MessageCircle } from "lucide-react";
import {
  hiddenReveal,
  hiddenRevealUp,
  staggerDelay,
  transitionReveal,
  transitionRevealShort,
  transitionTap,
  viewportReveal,
  visibleReveal,
} from "@/lib/motion";

const reasons = [
  {
    icon: Layers,
    title: "Real Projects",
    description:
      "Build portfolio-ready work that impresses recruiters: briefs, dashboards, and models reviewed by industry experts.",
  },
  {
    icon: Bot,
    title: "AI Tools Training",
    description:
      "Master modern AI assistants and analytics tools to accelerate your work without compromising quality.",
  },
  {
    icon: HeadphonesIcon,
    title: "Interview Support",
    description:
      "Mock interviews, salary coaching, and feedback until you&apos;re confident and role-ready.",
  },
  {
    icon: GraduationCap,
    title: "Expert Trainers",
    description:
      "Learn from mentors with real industry experience who know what interviewers actually want.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-spacing">
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-[var(--neon-purple)]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionReveal}
            className="heading-lg text-white mb-4"
          >
            Why Choose <span className="gradient-text">Us</span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(1, 0.06) }}
            className="text-body text-gray-300 max-w-2xl mx-auto"
          >
            Skills that get you hired, not just certificates
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={hiddenReveal}
              whileInView={visibleReveal}
              viewport={viewportReveal}
              transition={{ ...transitionRevealShort, delay: staggerDelay(i, 0.09) }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: transitionRevealShort,
              }}
              whileTap={{ scale: 0.99 }}
              className="glass-panel-hover p-8 rounded-2xl text-center border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_40px_rgba(181,0,255,0.15),0_0_80px_rgba(0,240,255,0.08)] transition-all duration-350 group will-change-transform"
            >
              <div className="relative w-16 h-16 rounded-xl bg-[var(--neon-purple)]/[0.08] flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--neon-purple)]/[0.15] transition-colors duration-300">
                <div className="absolute inset-0 rounded-xl bg-[var(--neon-purple)]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <item.icon className="w-8 h-8 text-[var(--neon-purple)] relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">{item.title}</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReveal}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={transitionTap}
            className="btn-primary flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto"
          >
            Start Your Journey
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
            Chat with Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
