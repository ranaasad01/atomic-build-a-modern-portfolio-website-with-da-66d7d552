import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { ContactSection } from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight, Download, Star, Users, Zap } from 'lucide-react';

/**
 * Home page — multi-section portfolio landing page for Alex Chen.
 * Sections: Hero · Social Proof · About Preview · Featured Projects · Skills · Contact CTA
 */
export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <Hero />

      {/* ─── 2. SOCIAL PROOF STRIP ───────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {["Figma", "Stripe", "Airbnb", "Vercel", "Linear"].map((company) => (
              <span
                key={company}
                className="text-lg font-bold text-slate-300 dark:text-slate-600 hover:text-indigo-400 dark:hover:text-indigo-500 transition-colors duration-200 cursor-default select-none"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT PREVIEW ────────────────────────────────────── */}
      <AboutPreview />

      {/* ─── 4. STATS BANNER ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: Star, value: "15k+", label: "GitHub Stars", sub: "across open-source projects" },
            { icon: Users, value: "40+", label: "Happy Clients", sub: "worldwide since 2018" },
            { icon: Zap, value: "99%", label: "Lighthouse Score", sub: "on every production site" },
          ].map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-1">
                <Icon size={22} className="text-white" />
              </div>
              <div className="text-4xl font-extrabold text-white">{value}</div>
              <div className="text-base font-semibold text-indigo-100">{label}</div>
              <div className="text-sm text-indigo-200/70">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. FEATURED PROJECTS ────────────────────────────────── */}
      <FeaturedProjects />

      {/* ─── 6. SKILLS ───────────────────────────────────────────── */}
      <Skills />

      {/* ─── 7. CONTACT CTA ──────────────────────────────────────── */}
      <ContactSection />

      {/* ─── 8. FINAL CTA BANNER ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to build something{" "}
            <span className="gradient-text">extraordinary?</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg leading-relaxed">
            Whether you need a full-stack web app, a polished design system, or a performance audit
            — I bring the craft and care to make it exceptional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-white font-medium shadow-glow-sm hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-200"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
