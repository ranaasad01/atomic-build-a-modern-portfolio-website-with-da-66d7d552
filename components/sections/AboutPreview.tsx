"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
                  src="https://upload.wikimedia.org/wikipedia/en/4/4e/AlexChenLiS.png"
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
