"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Coffee, Code2 } from 'lucide-react';
import { staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";

export function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image side */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-100 dark:bg-slate-800 shadow-2xl">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Alex Chen"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    const parent = t.parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-8xl">👨‍💻</div>';
                    }
                  }}
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-4 glass dark:glass rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-medium text-white">Open to work</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 glass dark:glass rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2 text-white">
                  <Code2 size={16} className="text-indigo-400" />
                  <span className="text-sm font-medium">5+ years exp.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div variants={fadeInRight} className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
                About Me
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Passionate about building{" "}
                <span className="gradient-text">great products</span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m a full-stack developer and designer based in San Francisco with 5+ years of
              experience building products that people love. I specialize in React, Next.js, and
              Node.js, with a strong eye for design and user experience.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Previously at Figma, Stripe, and Airbnb — I&apos;ve shipped features used by millions
              of users. I care deeply about performance, accessibility, and writing code that&apos;s
              a joy to maintain.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Location", value: "San Francisco, CA" },
                { icon: Coffee, label: "Fuel", value: "Coffee & curiosity" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center">
                    <Icon size={16} className="text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 dark:text-slate-500">{label}</div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-indigo-500 dark:text-indigo-400 font-medium hover:gap-3 transition-all duration-200"
            >
              Read my full story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
