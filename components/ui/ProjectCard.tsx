"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/50 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-xl dark:hover:shadow-indigo-950/30 transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={14} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
              aria-label="View live site"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 rounded-md text-xs font-medium bg-indigo-600/90 text-white backdrop-blur-sm capitalize">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-snug">
            {project.title}
          </h3>
          <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0 mt-0.5">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/50">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <Github size={13} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
          <span className="ml-auto flex items-center gap-1 text-xs text-indigo-500 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
            View details <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
