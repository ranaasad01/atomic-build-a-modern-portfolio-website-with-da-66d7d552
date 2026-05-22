"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Search } from 'lucide-react';

const categoryLabels: Record<string, string> = {
  all: "All Projects",
  web: "Web Apps",
  mobile: "Mobile",
  oss: "Open Source",
  design: "Design",
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              My Work
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              All Projects
            </h1>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg">
              A complete collection of my work — from production SaaS apps to open-source tools and
              experimental side projects.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div variants={fadeInUp} className="mt-8 max-w-md mx-auto relative">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
            />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors text-sm"
            />
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 " +
                  (activeCategory === cat
                    ? "gradient-bg text-white shadow-glow-sm"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-500 dark:hover:text-indigo-400")
                }
              >
                {categoryLabels[cat]}
                <span
                  className={
                    "ml-2 text-xs px-1.5 py-0.5 rounded-md " +
                    (activeCategory === cat
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400")
                  }
                >
                  {cat === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Results count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing{" "}
            <span className="font-semibold text-slate-900 dark:text-white">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {searchQuery && (
              <span>
                {" "}
                for &quot;<span className="text-indigo-500">{searchQuery}</span>&quot;
              </span>
            )}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center p-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-indigo-500/10 border border-indigo-200/50 dark:border-indigo-800/30"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Have a project in mind?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
            I&apos;m always open to discussing new opportunities and interesting challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-white font-medium shadow-glow-sm hover:shadow-glow hover:scale-[1.02] transition-all duration-200"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </div>
  );
}
