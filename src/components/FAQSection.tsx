"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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

const faqs = [
  {
    id: "placement",
    question: "Placement guarantee?",
    answer:
      "We do not promise a job guarantee — hiring depends on the market, role fit, and your consistency. What we do guarantee is structured placement support: resume reviews, mock interviews, portfolio guidance, and referrals to our hiring partner network so you are interview-ready.",
  },
  {
    id: "duration",
    question: "Duration?",
    answer:
      "Most tracks run between 3 and 9 months depending on depth—HR, Finance, and Digital Marketing are typically 3 months; Data Analytics is 4 months; Data Science & AI is 6 months; the Marketing Diploma is 9 months. Each syllabus lists weekly live hours, assignment cadence, and capstone milestones before you enroll.",
  },
  {
    id: "eligibility",
    question: "Eligibility?",
    answer:
      "Most tracks are beginner-friendly and only need basic computer literacy and English comfort. Specialized programs may recommend prior exposure (for example, statistics for analytics); any prerequisites are listed clearly before enrollment.",
  },
  {
    id: "mode",
    question: "Online/offline?",
    answer:
      "Core training is live online so you can learn from anywhere. Sessions are interactive — not passive recordings — with recordings provided for revision. Where we run offline workshops or meetups, enrolled students are informed in advance by city batch.",
  },
] as const;

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const headingId = useId();

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="section-spacing" aria-labelledby={headingId}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-[20%] w-[450px] h-[450px] bg-[var(--neon-blue)]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-[15%] w-[400px] h-[400px] bg-[var(--neon-purple)]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            id={headingId}
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionReveal}
            className="heading-lg text-white mb-6"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(1, 0.08) }}
            className="text-body text-gray-300 max-w-xl mx-auto"
          >
            Tap a question to expand the answer.
          </motion.p>
        </div>

        <motion.div
          initial={hiddenReveal}
          whileInView={visibleReveal}
          viewport={viewportReveal}
          transition={{ ...transitionReveal, delay: 0.06 }}
          className="glass-panel-hover rounded-2xl border border-white/[0.06] px-4 sm:px-8 md:px-10 py-2 sm:py-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0_8px_48px_rgba(0,240,255,0.08),0_0_80px_rgba(181,0,255,0.05)]"
          role="presentation"
        >
          <div className="divide-y divide-white/[0.08]">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              const panelId = `faq-panel-${faq.id}`;
              const buttonId = `faq-trigger-${faq.id}`;

              return (
                <div key={faq.id} className="py-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    <motion.button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(faq.id)}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.995 }}
                      transition={transitionTap}
                      className="group flex w-full min-h-[52px] items-center justify-between gap-4 py-4 text-left rounded-lg px-2 -mx-2 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-blue)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a16] transition-colors will-change-transform"
                    >
                      <span className="text-white/95 pr-2 group-hover:gradient-text transition-all duration-300">
                        {faq.question}
                      </span>
                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-300 group-hover:border-[var(--neon-blue)]/30 group-hover:text-[var(--neon-blue)] transition-all duration-200"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.span>
                    </motion.button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.15 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pt-1 pl-2 pr-14 text-gray-400 leading-relaxed text-sm sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
