"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import {
  hiddenReveal,
  hiddenRevealUp,
  staggerDelay,
  transitionReveal,
  transitionRevealShort,
  viewportReveal,
  visibleReveal,
} from "@/lib/motion";

const courses = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Build a full-funnel playbook: keyword research, on-page SEO, paid search and social, conversion tracking, and reporting with GA4. Outcomes include campaign briefs you can present in interviews, a live portfolio project, and measurable KPIs (CPL, ROAS, CTR) you can defend with data.",
    duration: "3 Months",
    career: "Performance Marketing / Growth",
  },
  {
    id: 2,
    title: "Data Science & AI",
    description:
      "Move from descriptive statistics to supervised learning, model evaluation, and practical deployment concepts used in enterprise teams. Outcomes include end-to-end notebooks, feature-engineering patterns for tabular data, and a capstone you can walk through on a whiteboard—aligned to analyst and junior ML engineer expectations.",
    duration: "6 Months",
    career: "Data Scientist / ML Engineer",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Turn raw business questions into dashboards and insights using SQL, spreadsheets, and BI tooling. Outcomes include repeatable analysis templates, stakeholder-ready visualizations, and SQL patterns for joins, window functions, and cohort analysis—what hiring managers test for on day one.",
    duration: "4 Months",
    career: "Business / Data Analyst",
  },
  {
    id: 4,
    title: "Finance",
    description:
      "Strengthen fundamentals in financial statements, budgeting, valuation basics, and Excel modeling for corporate roles. Outcomes include a three-statement model exercise, ratio interpretation you can explain clearly, and interview talking points for FP&A, treasury support, and equity research prep.",
    duration: "3 Months",
    career: "Financial Analyst",
  },
  {
    id: 5,
    title: "HR",
    description:
      "Cover the employee lifecycle: sourcing and screening, structured interviewing, compliance awareness, and HR metrics that leadership cares about. Outcomes include policy communication samples, interview scorecards, and a hiring funnel report you can use to demonstrate operational HR maturity.",
    duration: "3 Months",
    career: "HR Generalist / TA Specialist",
  },
  {
    id: 6,
    title: "Marketing Diploma",
    description:
      "A deeper, integrated track across brand, demand generation, content, and analytics—designed for professionals targeting team-lead responsibilities. Outcomes include a quarter-length go-to-market plan, channel mix rationale, and executive summaries that show you can own outcomes—not just tasks.",
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
      {/* Section ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--neon-blue)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionReveal}
            className="heading-lg text-white mb-6"
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
            Structured programs with clear milestones, mentor feedback, and outcomes hiring panels recognize at leading services and product firms.
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
      </div>
    </section>
  );
}
