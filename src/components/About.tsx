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

          {/* Continuous Scroll Parallax 3D Visual Monogram Orb (5 cols) */}
          <motion.div
            style={{ y: yOrb, scale: scaleOrb, rotate: rotateOrb }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl bg-gradient-to-tr from-neutral-900 via-neutral-950 to-black p-1 shadow-2xl shadow-black border border-white/15 flex items-center justify-center group hover:border-[#B8FF00]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,255,0,0.15)_0%,transparent_70%)] rounded-3xl" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 bg-black/90">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="HandsFree Master Logo"
                    fill
                    sizes="(max-width: 640px) 192px, 240px"
                    className="object-contain drop-shadow-[0_0_30px_rgba(184,255,0,0.3)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
