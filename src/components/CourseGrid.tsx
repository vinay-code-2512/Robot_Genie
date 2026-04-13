"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import CourseCard from "./CourseCard";
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

const courses = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Build a full-funnel playbook: keyword research, on-page SEO, paid search and social, conversion tracking, and reporting with GA4.",
    duration: "3 Months",
    career: "Performance Marketing / Growth",
  },
  {
    id: 2,
    title: "Data Science & AI",
    description:
      "Move from statistics to supervised learning, model evaluation, and deployment concepts used in enterprise teams.",
    duration: "6 Months",
    career: "Data Scientist / ML Engineer",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Turn business questions into dashboards and insights using SQL, spreadsheets, and BI tooling.",
    duration: "4 Months",
    career: "Business / Data Analyst",
  },
  {
    id: 4,
    title: "Finance",
    description:
      "Strengthen fundamentals in financial statements, budgeting, valuation basics, and Excel modeling.",
    duration: "3 Months",
    career: "Financial Analyst",
  },
  {
    id: 5,
    title: "HR",
    description:
      "Cover the employee lifecycle: sourcing, interviewing, compliance, and HR metrics that leadership cares about.",
    duration: "3 Months",
    career: "HR Generalist / TA Specialist",
  },
  {
    id: 6,
    title: "Marketing Diploma",
    description:
      "Integrated track across brand, demand generation, content, and analytics for team-lead responsibilities.",
    duration: "9 Months",
    career: "Marketing Lead / Brand Manager",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: hiddenReveal,
  visible: {
    ...visibleReveal,
    transition: transitionRevealShort,
  },
};

export default function CourseGrid() {
  return (
    <section id="courses" className="section-spacing">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--neon-blue)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionReveal}
            className="heading-lg text-white mb-4"
          >
            Explore Our <span className="gradient-text">Programs</span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(1, 0.06) }}
            className="text-body text-gray-300 max-w-2xl mx-auto"
          >
            Industry-ready skills with job placement support
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>

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
            Get Course Details
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          {/* <motion.a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={transitionTap}
            className="btn-secondary flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            Ask on WhatsApp
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
}
