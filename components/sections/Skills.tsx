"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { skillBars, skillCategories } from "@/lib/data/skills";

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-sm font-semibold text-indigo-500 dark:text-indigo-400">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-slate-700/60 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: level + "%" } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full gradient-bg"
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Skills &amp; Technologies
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              A curated set of tools and technologies I use to build exceptional products — from
              pixel-perfect UIs to scalable backend systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                Core Proficiencies
              </h3>
              {skillBars.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {cat.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-xs bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
