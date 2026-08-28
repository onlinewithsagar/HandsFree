"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Mail, ShieldCheck, Globe, Zap } from "lucide-react";

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
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 text-center mb-20 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-4">
              Ready to put your growth on <span className="text-cyan-400">HandsFree?</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8">
              Schedule a free 25-minute architecture sprint. We&apos;ll map your custom website, AI automations, and growth blueprint with zero friction.
            </p>
            <a
              href="#contactForm"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              <span>Start Your Project</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div id="contactForm" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/40">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-2">
              Book Your Architecture Audit
            </h3>
            <p className="text-slate-600 text-sm mb-8">
              Tell us about your manual bottlenecks or next web build. We review and reply within 4 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
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
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
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
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                  Primary Focus
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 text-sm transition-colors">
                  <option>Full Trifecta (Website + Automation + Growth)</option>
                  <option>Web Application & UI/UX Development</option>
                  <option>AI & Automation Pipeline Plumbing</option>
                  <option>Scalable Growth Loops & Telemetry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                  Project Scope & Goals
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what manual workflows or website redesign goals you're targeting..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 text-sm transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                  submitted
                    ? "bg-emerald-600"
                    : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25"
                }`}
              >
                {submitting ? (
                  <span>Processing...</span>
                ) : submitted ? (
                  <>
                    <Check className="w-5 h-5" />
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
          </div>

          {/* Contact Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
              <h4 className="font-heading font-bold text-xl text-white">Direct Intake</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out directly for enterprise intake, NDA requests, or immediate sprint scheduling.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <div className="font-bold text-sm text-white">hello@handsfree.co</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Confidentiality</div>
                    <div className="font-bold text-sm text-white">Strict NDA Included</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Availability</div>
                    <div className="font-bold text-sm text-white">Worldwide • Fast Sprints</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
