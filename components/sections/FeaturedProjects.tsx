"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { featuredProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
                Portfolio
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Featured Projects
              </h2>
              <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-lg">
                A selection of my best work — spanning web apps, mobile experiences, and open-source
                tools.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-indigo-500 dark:text-indigo-400 font-medium hover:gap-3 transition-all duration-200 shrink-0"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} featured />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
