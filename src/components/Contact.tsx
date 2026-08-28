"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Mail, ShieldCheck } from "lucide-react";

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
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase mb-2">
            Get Started
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-2">
            Book Your Architecture Sprint
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Tell us about your company goals or next web build. We reply within 4 business hours.
          </p>
        </motion.div>

        <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Vance"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 text-sm transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                Primary Need
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 text-sm transition-colors">
                <option>Full Trifecta (Website + Automation + Growth)</option>
                <option>Web Application Development</option>
                <option>AI Automation Plumbing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                Project Scope & Goals
              </label>
              <textarea
                rows={3}
                required
                placeholder="What manual workflows or website redesign goals are you targeting?"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 text-sm transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-3.5 sm:py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                submitted
                  ? "bg-emerald-600"
                  : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25"
              }`}
            >
              {submitting ? (
                <span>Processing...</span>
              ) : submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Message Sent! We&apos;ll be in touch.</span>
                </>
              ) : (
                <>
                  <span>Send Message & Book Audit</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>hello@handsfree.co</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Strict NDA Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
