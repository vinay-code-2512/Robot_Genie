"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
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

type AwardItem = {
  id: string;
  src: string;
  title: string;
  org: string;
  alt: string;
};

const gallery: AwardItem[] = [
  {
    id: "1",
    src: "/awards/award-1.png",
    title: "Excellence Award",
    org: "National Education Awards · 2024",
    alt: "Certificate for Excellence Award from National Education Awards 2024",
  },
  {
    id: "2",
    src: "/awards/award-2.jpg",
    title: "Top Placement Institute",
    org: "India Skills Summit · 2023",
    alt: "Certificate naming Robot Genie as Top Placement Institute",
  },
  {
    id: "3",
    src: "/awards/award-3.png",
    title: "5-Star Rated Programs",
    org: "Learner Choice · 2024",
    alt: "Recognition for five-star rated training programs",
  },
  {
    id: "4",
    src: "/awards/award-4.jpg",
    title: "AI Training Excellence",
    org: "Tech India Awards · 2024",
    alt: "Tech India Awards certificate for AI training excellence",
  },
];

export default function AwardsGallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const titleId = useId();
  const active = gallery.find((item) => item.id === openId) ?? null;

  useEffect(() => {
    if (!openId) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openId]);

  useEffect(() => {
    document.body.style.overflow = openId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openId]);

  return (
    <section id="awards" className="section-spacing" aria-labelledby={titleId}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--neon-purple)]/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            id={titleId}
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionReveal}
            className="heading-lg text-white mb-6"
          >
            Awards & <span className="gradient-text">Recognition</span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(1, 0.08) }}
            className="text-body text-gray-300 max-w-2xl mx-auto"
          >
            Tap an award to view it full size.
          </motion.p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 list-none p-0 m-0">
          {gallery.map((item, i) => (
            <motion.li
              key={item.id}
              initial={hiddenReveal}
              whileInView={visibleReveal}
              viewport={viewportReveal}
              transition={{ ...transitionRevealShort, delay: staggerDelay(i, 0.08) }}
            >
              <motion.button
                type="button"
                onClick={() => setOpenId(item.id)}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={transitionTap}
                className="group relative w-full text-left rounded-2xl p-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] will-change-transform"
                aria-haspopup="dialog"
                aria-expanded={openId === item.id}
              >
                <span
                  className="absolute inset-0 rounded-2xl opacity-80 blur-md transition-opacity duration-300 bg-gradient-to-br from-[var(--neon-blue)]/45 to-[var(--neon-purple)]/45 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden
                />
                <span
                  className="relative block rounded-2xl overflow-hidden border border-white/10 bg-[#08081a]/90 shadow-[0_0_0_1px_rgba(0,240,255,0.12),0_0_28px_rgba(0,240,255,0.18),inset_0_1px_0_rgba(255,255,255,0.06)] transition-[box-shadow,border-color] duration-300 group-hover:border-[var(--neon-blue)]/45 group-hover:shadow-[0_0_0_1px_rgba(181,0,255,0.2),0_0_40px_rgba(0,240,255,0.28),0_0_56px_rgba(181,0,255,0.15)] group-focus-visible:border-[var(--neon-blue)]/45"
                >
                  <span className="block aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={480}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  </span>
                  <span className="block px-4 py-4 border-t border-white/10">
                    <span className="font-semibold text-white block truncate">{item.title}</span>
                    <span className="text-sm text-gray-500 block truncate">{item.org}</span>
                  </span>
                </span>
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key="awards-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="awards-modal-title"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              aria-label="Close award viewer"
              onClick={() => setOpenId(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="relative z-[1] w-full max-w-lg rounded-2xl border border-white/15 bg-[#0a0a16]/95 p-3 sm:p-4 shadow-[0_0_0_1px_rgba(0,240,255,0.2),0_0_48px_rgba(0,240,255,0.22),0_0_80px_rgba(181,0,255,0.12)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute top-3 right-3 z-10 rounded-full p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-blue)]"
                aria-label="Close"
                onClick={() => setOpenId(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-inner">
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={480}
                  height={600}
                  className="w-full h-auto object-contain bg-[#05050f]"
                  sizes="(max-width: 640px) 100vw, 480px"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="mt-4 px-1 pb-1">
                <h3 id="awards-modal-title" className="text-xl font-bold text-white">
                  {active.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{active.org}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
