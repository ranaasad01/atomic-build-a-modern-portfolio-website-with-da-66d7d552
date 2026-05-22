"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useTheme } from "next-themes";

import { motion, AnimatePresence } from "framer-motion";

import { Sun, Moon, Menu, X, Code2 as Github, MessageCircle as Twitter } from 'lucide-react';

const navLinks = [

  { href: "/", label: "Home" },

  { href: "/about", label: "About" },

  { href: "/projects", label: "Projects" },

  { href: "/blogs", label: "Blogs" },

  { href: "/contact", label: "Contact" },

];

export function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  useEffect(() => {

    setMounted(true);

    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

    setMobileOpen(false);

  }, [pathname]);

  useEffect(() => {

    if (mobileOpen) {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "";

    }

    return () => {

      document.body.style.overflow = "";

    };

  }, [mobileOpen]);

  const navbarClass = scrolled

    ? "dark:bg-slate-900/90 bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 border-b border-slate-200/50 dark:border-slate-700/50"

    : "bg-transparent";

  return (

    <>

      <motion.header

        initial={{ y: -80, opacity: 0 }}

        animate={{ y: 0, opacity: 1 }}

        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}

        className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + navbarClass}

      >

        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

            <Link href="/" className="group flex items-center gap-2">

              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">

                AC

              </div>

              <span className="font-semibold text-slate-900 dark:text-white hidden sm:block">

                Alex Chen

              </span>

            </Link>

            <div className="hidden md:flex items-center gap-1">

              {navLinks.map((link) => {

                const isActive = pathname === link.href;

                const linkClass = isActive

                  ? "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-indigo-500 dark:text-indigo-400"

                  : "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800";

                return (

                  <Link key={link.href} href={link.href} className={linkClass}>

                    {link.label}

                    {isActive && (

                      <motion.div

                        layoutId="nav-indicator"

                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500"

                      />

                    )}

                  </Link>

                );

              })}

            </div>

            <div className="flex items-center gap-2">

              <a

                href="https://github.com"

                target="_blank"

                rel="noopener noreferrer"

                className="hidden sm:flex p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"

                aria-label="GitHub"

              >

                <Github size={18} />

              </a>

              <a

                href="https://twitter.com"

                target="_blank"

                rel="noopener noreferrer"

                className="hidden sm:flex p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"

                aria-label="Twitter"

              >

                <Twitter size={18} />

              </a>

              <button

                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}

                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"

                aria-label="Toggle theme"

              >

                {mounted ? (

                  theme === "dark" ? <Sun size={18} /> : <Moon size={18} />

                ) : (

                  <Moon size={18} />

                )}

              </button>

              <button

                onClick={() => setMobileOpen(!mobileOpen)}

                className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"

                aria-label="Toggle menu"

              >

                {mobileOpen ? <X size={20} /> : <Menu size={20} />}

              </button>

            </div>

          </div>

        </nav>

      </motion.header>

      <AnimatePresence>

        {mobileOpen && (

          <motion.div

            initial={{ opacity: 0, y: -10 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0, y: -10 }}

            transition={{ duration: 0.2 }}

            className="fixed inset-0 z-40 bg-white dark:bg-slate-900 flex flex-col pt-20 px-6 pb-8 md:hidden"

          >

            <nav className="flex flex-col gap-2">

              {navLinks.map((link) => {

                const isActive = pathname === link.href;

                return (

                  <Link

                    key={link.href}

                    href={link.href}

                    className={

                      isActive

                        ? "px-4 py-3 rounded-xl text-base font-semibold text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"

                        : "px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"

                    }

                  >

                    {link.label}

                  </Link>

                );

              })}

            </nav>

            <div className="mt-auto flex items-center gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">

              <a

                href="https://github.com"

                target="_blank"

                rel="noopener noreferrer"

                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"

                aria-label="GitHub"

              >

                <Github size={20} />

              </a>

              <a

                href="https://twitter.com"

                target="_blank"

                rel="noopener noreferrer"

                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"

                aria-label="Twitter"

              >

                <Twitter size={20} />

              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}
