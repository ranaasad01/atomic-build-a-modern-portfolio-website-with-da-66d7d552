"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Clock } from 'lucide-react';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  };

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
              Get In Touch
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Have a project in mind or just want to chat? I&apos;d love to hear from you. Send me a
              message and I&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div variants={fadeInLeft} className="lg:col-span-2 space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "alex@example.com",
                  href: "mailto:alex@example.com",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "San Francisco, CA",
                  href: null,
                },
                {
                  icon: Clock,
                  title: "Response Time",
                  value: "Within 24 hours",
                  href: null,
                },
              ].map(({ icon: Icon, title, value, href }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">{title}</div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-200/50 dark:border-indigo-800/30">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                    Currently available
                  </span>{" "}
                  for freelance projects, full-time roles, and interesting collaborations. Let&apos;s
                  build something great together.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeInRight} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors text-sm"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors text-sm"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    placeholder="Project inquiry"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors text-sm"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message.message}
                    </p>
                  )}
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400 text-sm">
                    <CheckCircle size={16} />
                    Message sent! I&apos;ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium shadow-glow-sm hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
