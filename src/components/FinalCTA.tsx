"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import {
  hiddenReveal,
  staggerDelay,
  transitionReveal,
  transitionRevealShort,
  transitionTap,
  viewportReveal,
  visibleReveal,
} from "@/lib/motion";

const WHATSAPP_NUMBER = "919999999999";

export default function FinalCTA() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section className="relative z-10 w-full overflow-hidden border-y border-white/10 py-16 sm:py-20 md:py-28" aria-labelledby="final-cta-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(0,240,255,0.22),transparent_55%),radial-gradient(ellipse_90%_70%_at_80%_100%,rgba(181,0,255,0.2),transparent_50%),radial-gradient(ellipse_80%_60%_at_10%_90%,rgba(0,240,255,0.12),transparent_45%),linear-gradient(180deg,#05050f_0%,#08081c_45%,#05050f_100%)]" />
      <div className="pointer-events-none absolute -left-[20%] top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 rounded-full bg-[var(--neon-blue)]/35 blur-[100px] md:blur-[140px]" />
      <div className="pointer-events-none absolute -right-[15%] top-1/3 h-[min(70vw,440px)] w-[min(70vw,440px)] rounded-full bg-[var(--neon-purple)]/30 blur-[90px] md:blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.35)_0%,transparent_18%,transparent_82%,rgba(0,0,0,0.35)_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.div
          initial={hiddenReveal}
          whileInView={visibleReveal}
          viewport={viewportReveal}
          transition={transitionReveal}
          className="mx-auto rounded-2xl sm:rounded-[2rem] border border-white/10 bg-black/25 px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16 shadow-[0_0_0_1px_rgba(0,240,255,0.12),0_0_60px_rgba(0,240,255,0.18),0_0_120px_rgba(181,0,255,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
        >
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(1, 0.05) }}
            className="mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon-blue)]"
          >
            Start Today
          </motion.p>
          <motion.h2
            id="final-cta-heading"
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionReveal, delay: staggerDelay(2, 0.05) }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight md:leading-[1.1]"
          >
            Ready to Land Your <span className="gradient-text">Dream Job?</span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(3, 0.05) }}
            className="mx-auto mt-4 sm:mt-5 max-w-xl text-sm sm:text-base text-gray-300"
          >
            Free counseling session. No commitment. Just your career goals.
          </motion.p>

          <motion.div
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionReveal, delay: 0.14 }}
            className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4 items-center"
          >
            {/* <motion.a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={transitionTap}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-4 rounded-full bg-green-500 text-white font-bold shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:shadow-[0_8px_32px_rgba(34,197,94,0.5)] transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chat on WhatsApp
            </motion.a> */}

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={transitionTap}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-4 rounded-full border border-[var(--neon-blue)]/50 bg-[var(--neon-blue)]/10 text-white font-bold shadow-[0_0_32px_rgba(0,240,255,0.25)] hover:border-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/20 hover:shadow-[0_0_48px_rgba(0,240,255,0.4)] transition-all duration-200 active:scale-95"
            >
              <ArrowRight className="h-5 w-5 shrink-0 text-[var(--neon-blue)]" aria-hidden />
              Book Free Session
            </motion.a>

            <motion.a
              href="#courses"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={transitionTap}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-4 rounded-full border border-[var(--neon-purple)]/50 bg-[var(--neon-purple)]/10 text-white font-bold shadow-[0_0_32px_rgba(181,0,255,0.2)] hover:border-[var(--neon-purple)] hover:bg-[var(--neon-purple)]/18 hover:shadow-[0_0_48px_rgba(181,0,255,0.35)] transition-all duration-200 active:scale-95"
            >
              <Sparkles className="h-5 w-5 shrink-0 text-[var(--neon-purple)]" aria-hidden />
              View Courses
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
