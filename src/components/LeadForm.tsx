"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CalendarCheck, ChevronDown } from "lucide-react";
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

interface LeadFormData {
  name: string;
  phone: string;
  course: string;
}

const courseOptions = [
  { value: "", label: "Select a course" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "data-science", label: "Data Science & AI" },
  { value: "data-analytics", label: "Data Analytics" },
  { value: "finance", label: "Finance" },
  { value: "hr", label: "HR" },
  { value: "marketing-diploma", label: "Marketing Diploma" },
] as const;

function validateIndianMobile(value: string): true | string {
  const d = value.replace(/\D/g, "");
  let mobile: string;
  if (d.length === 10) {
    mobile = d;
  } else if (d.length === 12 && d.startsWith("91")) {
    mobile = d.slice(2);
  } else if (d.length === 11 && d.startsWith("0")) {
    mobile = d.slice(1);
  } else {
    return "Enter a 10-digit number, or +91 followed by 10 digits";
  }
  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return "Enter a valid Indian mobile number (starts with 6–9)";
  }
  return true;
}

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormData>({
    mode: "onTouched",
    defaultValues: { name: "", phone: "", course: "" },
  });

  const onSubmit = (data: LeadFormData) => {
    console.log("Lead form submitted:", data);
    alert("Thank you! We will contact you shortly.");
    reset();
  };

  const inputClassName =
    "w-full min-w-0 min-h-[48px] px-4 py-3.5 text-base rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--neon-blue)]/50 focus:ring-2 focus:ring-[var(--neon-blue)]/20 focus:shadow-[0_0_16px_rgba(0,240,255,0.15)] transition-all duration-300";

  const selectClassName = `${inputClassName} appearance-none pr-12`;

  return (
    <section id="contact" className="section-spacing">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[var(--neon-purple)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={hiddenRevealUp}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={transitionReveal}
            className="heading-lg text-white mb-6"
          >
            Get <span className="gradient-text">Started</span>
          </motion.h2>
          <motion.p
            initial={hiddenReveal}
            whileInView={visibleReveal}
            viewport={viewportReveal}
            transition={{ ...transitionRevealShort, delay: staggerDelay(1, 0.08) }}
            className="text-body text-gray-300 max-w-xl mx-auto"
          >
            Reserve your seat — we will call you to confirm your batch and timings.
          </motion.p>
        </div>

        <motion.form
          initial={hiddenReveal}
          whileInView={visibleReveal}
          viewport={viewportReveal}
          transition={{ ...transitionReveal, delay: 0.06 }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass-panel-hover p-6 sm:p-10 rounded-2xl space-y-5 sm:space-y-6 border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_8px_48px_rgba(0,240,255,0.1),0_0_80px_rgba(181,0,255,0.05)]"
          noValidate
        >
          <div>
            <label htmlFor="lead-name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              id="lead-name"
              type="text"
              autoComplete="name"
              enterKeyHint="next"
              inputMode="text"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "lead-name-error" : undefined}
              {...register("name", {
                required: "Name is required",
                validate: (v) =>
                  v.trim().length >= 2 || "Please enter at least 2 characters",
                maxLength: { value: 80, message: "Name must be 80 characters or less" },
              })}
              className={inputClassName}
              placeholder="Your full name"
            />
            {errors.name && (
              <p id="lead-name-error" className="text-red-400 text-sm mt-1.5" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone
            </label>
            <input
              id="lead-phone"
              type="tel"
              autoComplete="tel"
              enterKeyHint="next"
              inputMode="tel"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "lead-phone-error" : undefined}
              {...register("phone", {
                required: "Phone number is required",
                validate: validateIndianMobile,
              })}
              className={inputClassName}
              placeholder="98765 43210 or +91 9876543210"
            />
            {errors.phone && (
              <p id="lead-phone-error" className="text-red-400 text-sm mt-1.5" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="lead-course" className="block text-sm font-medium text-gray-300 mb-2">
              Course
            </label>
            <div className="relative">
              <select
                id="lead-course"
                aria-invalid={errors.course ? "true" : "false"}
                aria-describedby={errors.course ? "lead-course-error" : undefined}
                {...register("course", { required: "Please select a course" })}
                className={selectClassName}
              >
                {courseOptions.map((opt) => (
                  <option key={opt.value || "placeholder"} value={opt.value} className="bg-[#0a0a1a] text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                aria-hidden
              />
            </div>
            {errors.course && (
              <p id="lead-course-error" className="text-red-400 text-sm mt-1.5" role="alert">
                {errors.course.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={transitionTap}
            className="w-full min-h-[52px] py-4 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-white font-bold text-base sm:text-lg shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_28px_rgba(0,240,255,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_48px_rgba(0,240,255,0.35)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:pointer-events-none will-change-transform"
          >
            <CalendarCheck className="w-5 h-5 shrink-0 group-hover:scale-105 transition-transform" aria-hidden />
            Reserve My Seat
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
