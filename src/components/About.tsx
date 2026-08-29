"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Zap } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateOrb = useTransform(scrollYProgress, [0, 1], [-20, 30]);
  const scaleOrb = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.98]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#B8FF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-3.5">
              About HandsFree
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-5 leading-tight">
              Engineering leverage for modern leadership.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
              We bridge the gap between high-converting Next.js web applications and autonomous AI backend plumbing, giving businesses complete operational leverage with zero manual drag.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-neutral-950 border border-white/10 shadow-lg flex items-center gap-4 hover:border-[#B8FF00]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#B8FF00]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">NDA Protected</div>
                  <div className="text-xs text-neutral-400 font-mono">Enterprise Grade</div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-neutral-950 border border-white/10 shadow-lg flex items-center gap-4 hover:border-[#B8FF00]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#B8FF00]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Sprint Delivery</div>
                  <div className="text-xs text-neutral-400 font-mono">2-Week Milestones</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Interactive Live Architecture Engine Visual HUD (5 cols) */}
          <motion.div
            style={{ y: yOrb, scale: scaleOrb, rotate: rotateOrb }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] rounded-3xl bg-neutral-950/90 border border-white/15 p-6 shadow-2xl shadow-black relative overflow-hidden group hover:border-[#B8FF00]/50 transition-all duration-500">
              {/* Background HUD Grid & Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8FF00]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none" />

              {/* HUD Header Bar */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-ping" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">
                    CORE ENGINE v2.4
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#B8FF00] bg-[#B8FF00]/10 px-2 py-0.5 rounded border border-[#B8FF00]/30 font-bold">
                  AUTONOMOUS
                </span>
              </div>

              {/* Dynamic Telemetry Matrix */}
              <div className="relative z-10 space-y-3 mb-5">
                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#B8FF00]">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Global Edge TTFB</div>
                      <div className="text-[10px] text-neutral-400 font-mono">Next.js Edge Runtime</div>
                    </div>
                  </div>
                  <div className="font-mono text-xs font-bold text-[#B8FF00]">12ms</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[#B8FF00]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">AI Pipeline Reliability</div>
                      <div className="text-[10px] text-neutral-400 font-mono">Fault-Tolerant Queue</div>
                    </div>
                  </div>
                  <div className="font-mono text-xs font-bold text-white">99.99%</div>
                </div>
              </div>

              {/* Live Activity Stream & Architecture Graph */}
              <div className="relative z-10 p-4 rounded-2xl bg-black/80 border border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-3">
                  <span>LIVE TRAFFIC TELEMETRY</span>
                  <span className="text-[#B8FF00] font-bold animate-pulse">● ACTIVE</span>
                </div>

                {/* Animated Waveform Visualizer */}
                <div className="flex items-end gap-1.5 h-12 mb-3 px-1">
                  {[40, 65, 85, 45, 95, 70, 55, 90, 100, 60, 75, 90, 80, 95, 60].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${h}%`, `${Math.max(25, (h + 35) % 100)}%`, `${h}%`] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.1 }}
                      className="flex-1 bg-[#B8FF00] rounded-full opacity-85 shadow-[0_0_8px_rgba(184,255,0,0.4)]"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 pt-2 border-t border-white/5">
                  <span>LATENCY: 0.08ms</span>
                  <span>SYNC: 24/7 AUTOPILOT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
