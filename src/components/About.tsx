"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateOrb = useTransform(scrollYProgress, [0, 1], [-25, 45]);
  const scaleOrb = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.08, 0.95]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={containerRef} id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase mb-3">
              About HandsFree
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              Engineering leverage for modern leadership.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              We bridge the gap between high-converting Next.js web applications and autonomous AI backend plumbing, giving businesses complete operational leverage with zero manual drag.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3"
              >
                <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <div className="font-bold text-sm text-slate-900">NDA Protected</div>
                  <div className="text-xs text-slate-500 font-mono">Enterprise Grade</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3"
              >
                <Zap className="w-6 h-6 text-cyan-500 shrink-0" />
                <div>
                  <div className="font-bold text-sm text-slate-900">Sprint Delivery</div>
                  <div className="text-xs text-slate-500 font-mono">2-Week Milestones</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Continuous Scroll Parallax 3D Visual Monogram Orb (5 cols) */}
          <motion.div
            style={{ y: yOrb, scale: scaleOrb, rotate: rotateOrb }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-1.5 shadow-2xl shadow-blue-500/30 flex items-center justify-center animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,87,255,0.45)_0%,transparent_70%)]"></div>
                <svg viewBox="0 0 100 100" className="w-28 h-28 relative z-10 drop-shadow-[0_0_20px_rgba(0,210,255,0.6)]" fill="none">
                  <path d="M22 20H42V62H22V20Z" fill="#FFFFFF" />
                  <path d="M58 80H78V28L86 36L70 12L54 36L62 28V80H58Z" fill="#00D2FF" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
