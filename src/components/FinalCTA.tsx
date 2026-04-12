"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Headphones, MessageCircle, Sparkles } from "lucide-react";
import {
  hiddenReveal,
  staggerDelay,
  transitionReveal,
  transitionRevealShort,
  transitionTap,
  viewportReveal,
  visibleReveal,
} from "@/lib/motion";

/** Replace with your WhatsApp number (country code + number, no + or spaces). */
const WHATSAPP_NUMBER = "919999999999";

export default function FinalCTA() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  const btnBase =
    "relative inline-flex w-full sm:w-auto min-h-[52px] items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05050f]";

  return (
    <section
      className="relative z-10 w-full overflow-hidden border-y border-white/10 py-20 md:py-28"
      aria-labelledby="final-cta-heading"
    >
      {/* Full-bleed backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(0,240,255,0.22),transparent_55%),radial-gradient(ellipse_90%_70%_at_80%_100%,rgba(181,0,255,0.2),transparent_50%),radial-gradient(ellipse_80%_60%_at_10%_90%,rgba(0,240,255,0.12),transparent_45%),linear-gradient(180deg,#05050f_0%,#08081c_45%,#05050f_100%)]" />

      {/* Strong ambient glow layers */}
      <div className="pointer-events-none absolute -left-[20%] top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 rounded-full bg-[var(--neon-blue)]/35 blur-[100px] md:blur-[140px]" />
      <div className="pointer-events-none absolute -right-[15%] top-1/3 h-[min(70vw,440px)] w-[min(70vw,440px)] rounded-full bg-[var(--neon-purple)]/30 blur-[90px] md:blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,640px)] w-[min(140vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--neon-blue)]/20 via-[var(--neon-purple)]/15 to-[var(--neon-blue)]/20 blur-[80px] md:blur-[110px]" />

      {/* Edge vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.35)_0%,transparent_18%,transparent_82%,rgba(0,0,0,0.35)_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.div
          initial={hiddenReveal}
          whileInView={visibleReveal}
          viewport={viewportReveal}
          transition={transitionReveal}
          className="mx-auto rounded-[2rem] border border-white/10 bg-black/25 px-6 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16 shadow-[0_0_0_1px_rgba(0,240,255,0.12),0_0_60px_rgba(0,240,255,0.18),0_0_120px_rgba(181,0,255,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(0,240,255,0.2),0_0_72px_rgba(0,240,255,0.22),0_0_140px_rgba(181,0,255,0.14),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(1, 0.05) }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon-blue)]"
          >
            Robot Genie
          </motion.p>
          <motion.h2
            id="final-cta-heading"
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionReveal, delay: staggerDelay(2, 0.05) }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight md:leading-[1.1]"
          >
            Ready to Transform Your{" "}
            <span className="gradient-text">
              Career?
            </span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(3, 0.05) }}
            className="mx-auto mt-6 max-w-2xl text-body text-gray-300"
          >
            Tell us your target role and timeline—our counsellors map the right track, batch, and interview plan before you commit time or budget.
          </motion.p>

          <motion.div
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionReveal, delay: 0.14 }}
            className="mt-10 flex flex-col items-stretch gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
          >
            <motion.span
              className="inline-flex w-full sm:w-auto justify-center"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={transitionTap}
            >
              <Link
                href="#contact"
                className={`${btnBase} border border-[var(--neon-blue)]/50 bg-[var(--neon-blue)]/10 text-white shadow-[0_0_32px_rgba(0,240,255,0.35),0_0_64px_rgba(0,240,255,0.15)] hover:border-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/20 hover:shadow-[0_0_48px_rgba(0,240,255,0.5),0_0_96px_rgba(0,240,255,0.2)]`}
              >
                <Headphones className="h-5 w-5 shrink-0 text-[var(--neon-blue)]" aria-hidden />
                Talk to Expert
              </Link>
            </motion.span>

            <motion.span
              className="inline-flex w-full sm:w-auto justify-center"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={transitionTap}
            >
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnBase} border border-emerald-400/40 bg-emerald-500/10 text-white shadow-[0_0_28px_rgba(52,211,153,0.25),0_0_56px_rgba(16,185,129,0.12)] hover:border-emerald-400/60 hover:bg-emerald-500/15 hover:shadow-[0_0_44px_rgba(52,211,153,0.4),0_0_80px_rgba(16,185,129,0.18)]`}
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden />
                WhatsApp
              </a>
            </motion.span>

            <motion.span
              className="inline-flex w-full sm:w-auto justify-center"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={transitionTap}
            >
              <Link
                href="#courses"
                className={`${btnBase} border border-[var(--neon-purple)]/55 bg-[var(--neon-purple)]/10 text-white shadow-[0_0_32px_rgba(181,0,255,0.3),0_0_64px_rgba(181,0,255,0.12)] hover:border-[var(--neon-purple)] hover:bg-[var(--neon-purple)]/18 hover:shadow-[0_0_48px_rgba(181,0,255,0.45),0_0_96px_rgba(181,0,255,0.18)]`}
              >
                <Sparkles className="h-5 w-5 shrink-0 text-[var(--neon-purple)]" aria-hidden />
                Apply Now
              </Link>
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
