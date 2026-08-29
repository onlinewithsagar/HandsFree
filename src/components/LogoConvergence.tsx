"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Sparkles, ArrowUpRight } from "lucide-react";

export default function LogoConvergence() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Parallax convergence transforms
  // Left hand moves from left (-120px) and bottom (+40px) with slight rotation to 0
  const xLeft = useTransform(scrollYProgress, [0, 1], [-140, 0]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [-18, 0]);

  // Right hand reaches from top-right (+140px, -60px) with slight rotation to 0
  const xRight = useTransform(scrollYProgress, [0, 1], [140, 0]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], [18, 0]);

  // Energy aura and glow unlocks when hands touch (progress near 1)
  const glowOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.2, 1]);
  const energyScale = useTransform(scrollYProgress, [0, 0.8, 1], [0.6, 0.9, 1.2]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.3, 0.6, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-black relative overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Background Subtle Ambient Glow */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute w-[400px] h-[400px] rounded-full bg-[#B8FF00]/4 blur-[120px] pointer-events-none transition-opacity"
      />

      {/* Grid Pattern in dark */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B8FF00]/20 bg-[#B8FF00]/5 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Human + AI Convergence</span>
        </motion.div>

        <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-4">
          Where Human Vision Meets{" "}
          <span className="text-[#B8FF00]">
            Autonomous Speed.
          </span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mb-12 sm:mb-16">
          Scroll down to lock in the architecture. As human leadership connects with autonomous systems, total operational leverage is achieved.
        </p>

        {/* Parallax Hands Convergence Stage - Sleek, Compact and Centered */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-10 flex items-center justify-center">
          {/* Left Pillar & Reaching Hand (Transparent Clean PNG) */}
          <motion.div
            style={{
              x: xLeft,
              y: yLeft,
              rotate: rotateLeft,
            }}
            className="absolute inset-0 z-10 will-change-transform"
          >
            <Image
              src="/hand-left-clean.png"
              alt="HandsFree Left Hand"
              fill
              sizes="(max-width: 640px) 192px, 224px"
              className="object-contain"
            />
          </motion.div>

          {/* Right Pillar & Reaching Hand (Transparent Clean PNG) */}
          <motion.div
            style={{
              x: xRight,
              y: yRight,
              rotate: rotateRight,
            }}
            className="absolute inset-0 z-10 will-change-transform"
          >
            <Image
              src="/hand-right-clean.png"
              alt="HandsFree Right Hand"
              fill
              sizes="(max-width: 640px) 192px, 224px"
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Lock Status & Call To Action */}
        <motion.div style={{ opacity: textOpacity, y: textY }} className="space-y-5">

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-black bg-[#B8FF00] hover:bg-[#A3E600] text-sm sm:text-base shadow-lg shadow-[#B8FF00]/30 hover:scale-105 transition-all"
            >
              <Zap className="w-4 h-4 fill-black text-black" />
              <span>Connect Your Infrastructure</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
