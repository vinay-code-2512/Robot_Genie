"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Clock, Briefcase } from "lucide-react";
import { transitionRevealShort, transitionTap } from "@/lib/motion";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  career: string;
}

function CourseCardInner({ title, description, duration, career }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: transitionRevealShort,
      }}
      whileTap={{ scale: 0.99 }}
      transition={transitionTap}
      className="glass-panel-hover p-8 rounded-2xl flex flex-col h-full border border-white/[0.06] hover:border-[var(--neon-blue)]/40 shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_40px_rgba(0,240,255,0.15),0_0_80px_rgba(181,0,255,0.08)] transition-all duration-350 group will-change-transform"
    >
      <div className="relative mb-5">
        <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-8 bg-gradient-to-b from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
      </div>
      <p className="text-gray-400 flex-grow mb-8 text-[15px] leading-relaxed">{description}</p>

      <div className="flex flex-col gap-3.5 mt-auto pt-6 border-t border-white/[0.08]">
        <div className="flex items-center gap-3 text-[14px] text-gray-300">
          <div className="relative">
            <Clock className="w-4 h-4 text-[var(--neon-purple)]" />
            <div className="absolute -inset-1.5 bg-[var(--neon-purple)]/20 rounded-full blur-sm" />
          </div>
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-3 text-[14px] text-gray-300">
          <div className="relative">
            <Briefcase className="w-4 h-4 text-[var(--neon-blue)]" />
            <div className="absolute -inset-1.5 bg-[var(--neon-blue)]/20 rounded-full blur-sm" />
          </div>
          <span>{career}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(CourseCardInner);
