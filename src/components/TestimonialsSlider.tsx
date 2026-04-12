"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  TrendingUp,
  Building2,
} from "lucide-react";
import Image from "next/image";
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

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Performance Marketing Specialist",
    company: "TCS",
    image: "/students.png",
    beforeSalary: "₹4.2 LPA",
    afterSalary: "₹9.8 LPA",
    text: "After the 3-month Digital Marketing track, I could explain funnels, attribution, and budget pacing with real campaign data. Mock interviews tightened my storytelling—within weeks I joined TCS’s digital solutions unit with a package I could not have negotiated confidently before.",
  },
  {
    name: "Rahul Verma",
    role: "Associate Data Scientist",
    company: "Infosys",
    image: "/students.png",
    beforeSalary: "₹5.5 LPA",
    afterSalary: "₹12.4 LPA",
    text: "The 6-month Data Science & AI program forced discipline: feature engineering, model metrics, and clear documentation. My capstone became the centerpiece of Infosys interviews—hiring managers cared that I could ship, not just run notebooks.",
  },
  {
    name: "Ananya Patel",
    role: "Financial Analyst",
    company: "Wipro",
    image: "/students.png",
    beforeSalary: "₹3.8 LPA",
    afterSalary: "₹8.6 LPA",
    text: "Finance at Wipro expects crisp Excel and confident interpretation of statements. The 3-month Finance cohort gave me repeatable templates and scenario practice; I walked into the panel able to defend my assumptions line by line.",
  },
  {
    name: "Karan Mehta",
    role: "HR Business Partner (TA focus)",
    company: "HCLTech",
    image: "/students.png",
    beforeSalary: "₹4.0 LPA",
    afterSalary: "₹7.5 LPA",
    text: "I switched from operations support into HR with structured interview scorecards and compliance-aware answers from the 3-month HR program. HCLTech valued that I could run a hiring funnel review—not just schedule interviews.",
  },
  {
    name: "Sneha Iyer",
    role: "Business Data Analyst",
    company: "Cognizant",
    image: "/students.png",
    beforeSalary: "₹4.5 LPA",
    afterSalary: "₹10.2 LPA",
    text: "The 4-month Data Analytics track aligned with what Cognizant tests: SQL under time pressure, dashboard hygiene, and stakeholder summaries. Weekly code reviews made my SQL readable—small detail, big difference in panel feedback.",
  },
  {
    name: "Aditya Rao",
    role: "Marketing Operations Lead",
    company: "Tech Mahindra",
    image: "/students.png",
    beforeSalary: "₹6.2 LPA",
    afterSalary: "₹11.8 LPA",
    text: "The 9-month Marketing Diploma pushed me from execution to ownership: channel mix, quarterly planning, and exec-ready reporting. Tech Mahindra mapped me to a client-facing marketing ops role where those artifacts matter on day one.",
  },
] as const;

type Testimonial = (typeof testimonials)[number];

const AUTOPLAY_INTERVAL = 4500;
const SWIPE_THRESHOLD = 50;

const SLIDE_EASE: [number, number, number, number] = [0.45, 0, 0.55, 1];

/** Stable reference — avoids recreating variants each render */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 260 : -260,
    opacity: 0,
    scale: 0.94,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.36, ease: SLIDE_EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -260 : 260,
    opacity: 0,
    scale: 0.94,
  }),
};

const TestimonialSlideBody = memo(function TestimonialSlideBody({ t }: { t: Testimonial }) {
  return (
    <>
      <Quote className="w-10 h-10 text-[var(--neon-blue)]/25 mb-6" />

      <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 italic max-w-3xl">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-50 blur-[3px]" />
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#0a0a1a]">
              <Image
                src={t.image}
                alt={t.name}
                width={56}
                height={56}
                sizes="56px"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-white">{t.name}</p>
            <p className="text-sm text-gray-400">{t.role}</p>
            <div className="mt-1 flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-[var(--neon-purple)]" />
              <span className="text-xs font-semibold tracking-wide text-[var(--neon-purple)]">{t.company}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3">
          <div className="text-center">
            <p className="mb-0.5 text-[10px] uppercase tracking-wider text-gray-500">Before</p>
            <p className="text-sm font-semibold text-gray-400 line-through decoration-red-500/50">{t.beforeSalary}</p>
          </div>
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="text-center">
            <p className="mb-0.5 text-[10px] uppercase tracking-wider text-gray-500">After</p>
            <p className="text-sm font-bold text-emerald-400">{t.afterSalary}</p>
          </div>
        </div>
      </div>
    </>
  );
});

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((prev) => {
      setDirection(index > prev ? 1 : -1);
      return index;
    });
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.x < -SWIPE_THRESHOLD) next();
      else if (info.offset.x > SWIPE_THRESHOLD) prev();
    },
    [next, prev]
  );

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-spacing">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[var(--neon-blue)]/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionRevealShort}
            className="text-[var(--neon-blue)] text-sm font-semibold tracking-[0.2em] uppercase mb-5"
          >
            Success Stories
          </motion.p>
          <motion.h2
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionReveal, delay: staggerDelay(1, 0.06) }}
            className="heading-lg text-white mb-5"
          >
            What Our{" "}
            <span className="gradient-text">
              Students Say
            </span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(2, 0.06) }}
            className="text-body text-gray-300 max-w-xl mx-auto"
          >
            Measured outcomes from learners now contributing inside India’s largest IT services and consulting ecosystems—supported by structured mentoring and interview readiness.
          </motion.p>
        </div>

        <motion.div
          className="relative"
          initial={hiddenReveal}
          whileInView={visibleReveal}
          viewport={viewportReveal}
          transition={{ ...transitionReveal, delay: 0.12 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[var(--neon-blue)]/50 via-transparent to-[var(--neon-purple)]/50 shadow-[0_0_40px_rgba(0,240,255,0.08)] transition-shadow duration-500 hover:shadow-[0_0_56px_rgba(0,240,255,0.18),0_0_80px_rgba(181,0,255,0.12)]">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[var(--neon-blue)]/20 via-transparent to-[var(--neon-purple)]/20 blur-sm" />

            <div className="relative rounded-3xl bg-[#0a0a1a]/90 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[var(--neon-blue)]/10 to-transparent rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[var(--neon-purple)]/10 to-transparent rounded-br-3xl" />

              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing"
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ ...transitionRevealShort, ease: SLIDE_EASE }}
                    className="p-8 md:p-12 lg:p-14"
                  >
                    <TestimonialSlideBody t={t} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={prev}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={transitionTap}
            className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 backdrop-blur-md transition-shadow duration-300 hover:border-[var(--neon-blue)]/50 hover:text-white hover:shadow-[0_0_22px_rgba(0,240,255,0.25)] md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            type="button"
            onClick={next}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={transitionTap}
            className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 backdrop-blur-md transition-shadow duration-300 hover:border-[var(--neon-blue)]/50 hover:text-white hover:shadow-[0_0_22px_rgba(0,240,255,0.25)] md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className="relative h-2 overflow-hidden rounded-full transition-all duration-500"
              style={{ width: i === current ? 32 : 8 }}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <span
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                  i === current
                    ? "bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]"
                    : "bg-white/20 hover:bg-white/30"
                }`}
              />
              {i === current && !isPaused && (
                <motion.span
                  key={`progress-${current}`}
                  className="absolute inset-0 rounded-full bg-white/20"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: AUTOPLAY_INTERVAL / 1000,
                    ease: "linear",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-gray-600 md:hidden">← Swipe to navigate →</p>
      </div>
    </section>
  );
}
