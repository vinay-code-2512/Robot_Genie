"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Menu } from "lucide-react";
import { hiddenReveal, transitionRevealShort, transitionTap, visibleReveal } from "@/lib/motion";

const linkClass =
  "text-gray-300 hover:text-white transition-colors duration-300 relative py-1";

export default function Navbar() {
  return (
    <motion.nav
      initial={hiddenReveal}
      animate={visibleReveal}
      transition={transitionRevealShort}
      className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={transitionTap}>
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <BookOpen className="w-8 h-8 text-[var(--neon-blue)] group-hover:text-[var(--neon-purple)] transition-colors duration-300" />
              <div className="absolute -inset-1 bg-[var(--neon-blue)]/20 rounded-full blur-md group-hover:bg-[var(--neon-purple)]/20 transition-colors duration-300" />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-white">
              Robot<span className="gradient-text">Genie</span>
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {[
            { href: "#courses", label: "Courses" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <motion.span key={item.href} whileHover={{ y: -2 }} transition={transitionTap}>
              <Link href={item.href} className={linkClass}>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.span>
          ))}

          <motion.button
            type="button"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={transitionTap}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary !py-3 !px-6 text-[15px]"
          >
            Enroll Now
          </motion.button>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.92 }}
          transition={transitionTap}
          className="md:hidden text-white p-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.nav>
  );
}
