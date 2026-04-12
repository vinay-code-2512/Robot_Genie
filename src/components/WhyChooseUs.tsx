"use client";

import { motion } from "framer-motion";
import { Layers, Bot, HeadphonesIcon, GraduationCap } from "lucide-react";
import {
  hiddenReveal,
  hiddenRevealUp,
  staggerDelay,
  transitionReveal,
  transitionRevealShort,
  viewportReveal,
  visibleReveal,
} from "@/lib/motion";

const reasons = [
  {
    icon: Layers,
    title: "Real Projects",
    description:
      "Ship artifacts recruiters can open: briefs, dashboards, models, and retrospectives—reviewed like a manager would, not like a classroom exercise.",
  },
  {
    icon: Bot,
    title: "AI Tools",
    description:
      "Practice with modern copilots and analytics assistants responsibly—so you accelerate delivery without cutting corners on quality or compliance.",
  },
  {
    icon: HeadphonesIcon,
    title: "Interview Support",
    description:
      "Structured mock panels, salary discussion coaching, and feedback loops until your answers are concise, evidence-backed, and role-aligned.",
  },
  {
    icon: GraduationCap,
    title: "Corporate Trainers",
    description:
      "Mentors from services, BFSI, and product environments who translate syllabus topics into what interviewers actually probe on the whiteboard.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-spacing">
      {/* Ambient glow */}
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-[var(--neon-purple)]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionReveal}
            className="heading-lg text-white mb-6"
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
            An outcomes-first model: measurable skills, visible work, and interview readiness you can stress-test before you ever submit an application.
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
      </div>
    </section>
  );
}
