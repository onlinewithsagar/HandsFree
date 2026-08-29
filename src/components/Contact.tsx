"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Mail, ShieldCheck, Sparkles } from "lucide-react";

export default function Contact({ onPlaySound }: { onPlaySound: (type: "click" | "success" | "ping") => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    onPlaySound("ping");

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onPlaySound("success");

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1200);
  }

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B8FF00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-3.5">
            Get Started
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-3">
            Book Your Architecture Sprint
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Tell us about your company goals or next web build. We reply within 4 business hours.
          </p>
        </motion.div>

        <div className="bg-neutral-950/90 p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-neutral-300 uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Vance"
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#B8FF00] focus:shadow-[0_0_15px_rgba(184,255,0,0.2)] text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold text-neutral-300 uppercase mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#B8FF00] focus:shadow-[0_0_15px_rgba(184,255,0,0.2)] text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                Primary Need
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-white/10 text-white focus:outline-none focus:border-[#B8FF00]/60 hover:border-white/20 text-sm transition-all appearance-none cursor-pointer">
                  <option className="bg-neutral-950 text-white">Full Trifecta (Website + Automation + Growth)</option>
                  <option className="bg-neutral-950 text-white">Web Application Development</option>
                  <option className="bg-neutral-950 text-white">AI Automation Plumbing</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                Project Scope & Goals
              </label>
              <textarea
                rows={3}
                required
                placeholder="What manual workflows or website redesign goals are you targeting?"
                className="w-full px-4 py-3.5 rounded-xl bg-neutral-900/90 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#B8FF00]/60 hover:border-white/20 text-sm transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-base ${
                submitted
                  ? "bg-emerald-500 text-black font-black"
                  : "bg-[#B8FF00] hover:bg-[#A3E600] text-black shadow-lg shadow-[#B8FF00]/25 hover:scale-[1.01]"
              }`}
            >
              {submitting ? (
                <span>Processing...</span>
              ) : submitted ? (
                <>
                  <Check className="w-4 h-4 text-black stroke-[3]" />
                  <span>Message Sent! We&apos;ll be in touch.</span>
                </>
              ) : (
                <>
                  <span>Send Message & Book Audit</span>
                  <Send className="w-4 h-4 text-black stroke-[2.5]" />
                </>
              )}
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-neutral-900 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#B8FF00]" />
              <span>hello@handsfree.co</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B8FF00]" />
              <span>Strict NDA Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
