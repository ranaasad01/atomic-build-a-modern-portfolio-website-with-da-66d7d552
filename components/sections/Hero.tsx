"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code2 as Github, Sparkles } from 'lucide-react';
import Link from "next/link";
import { staggerContainer, fadeInUp, fadeIn } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
              <Sparkles size={14} className="animate-pulse" />
              Available for new projects
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance"
          >
            <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Alex Chen</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={fadeInUp} className="mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300">
              Full-Stack Developer &amp;{" "}
              <span className="text-indigo-500 dark:text-indigo-400">UI/UX Designer</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10"
          >
            I craft beautiful, performant web experiences that blend elegant design with clean
            engineering. Specializing in React, Next.js, and modern full-stack architectures — I
            turn complex problems into intuitive products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-white font-medium shadow-glow-sm hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-200"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "40+", label: "Projects Shipped" },
              { value: "15k+", label: "GitHub Stars" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2">
            {["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "AWS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-indigo-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
