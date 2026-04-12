"use client";

import { motion } from "framer-motion";
import { hiddenReveal, transitionReveal, viewportReveal, visibleReveal } from "@/lib/motion";

export default function Footer() {
  return (
    <motion.footer
      initial={hiddenReveal}
      whileInView={visibleReveal}
      viewport={viewportReveal}
      transition={transitionReveal}
      className="border-t border-white/[0.06] bg-black/40 py-14 shadow-[0_-30px_80px_rgba(0,240,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <p className="text-gray-300 font-medium">&copy; {new Date().getFullYear()} FutureAcademy. All rights reserved.</p>
        <p className="mt-3 text-[15px] text-gray-500">Career training aligned to how enterprise teams hire, review, and promote.</p>
      </div>
    </motion.footer>
  );
}
