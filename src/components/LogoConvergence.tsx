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
      {/* Background Radial Glow Lights */}
      <motion.div
        style={{ opacity: glowOpacity, scale: energyScale }}
        className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-[#B8FF00]/10 blur-[140px] pointer-events-none transition-opacity"
      />

      {/* Grid Pattern in dark */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B8FF00]/30 bg-[#B8FF00]/10 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-6 shadow-[0_0_20px_rgba(184,255,0,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Human + AI Convergence</span>
        </motion.div>

        <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-4">
          Where Human Vision Meets{" "}
          <span className="text-[#B8FF00] drop-shadow-[0_0_30px_rgba(184,255,0,0.4)]">
            Autonomous Speed.
          </span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mb-12 sm:mb-16">
          Scroll down to lock in the architecture. As human leadership connects with autonomous systems, total operational leverage is achieved.
        </p>

        {/* Parallax Hands Convergence Stage */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto mb-12 flex items-center justify-center">
          {/* Energy shockwave aura when fully connected */}
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute inset-0 rounded-full border border-[#B8FF00]/40 shadow-[0_0_60px_rgba(184,255,0,0.3)] animate-pulse pointer-events-none"
          />

          {/* Connection Central Spark Pulse */}
          <motion.div
            style={{ opacity: glowOpacity, scale: energyScale }}
            className="absolute w-16 h-16 rounded-full bg-[#B8FF00] blur-xl z-20 pointer-events-none"
          />

          {/* Left Pillar & Reaching Hand */}
          <motion.div
            style={{
              x: xLeft,
              y: yLeft,
              rotate: rotateLeft,
            }}
            className="absolute inset-0 z-10 will-change-transform"
          >
            <Image
              src="/hand-left-layer.png"
              alt="HandsFree Left Hand"
              fill
              sizes="(max-width: 640px) 288px, 384px"
              className="object-contain drop-shadow-[0_0_25px_rgba(184,255,0,0.25)]"
            />
          </motion.div>

          {/* Right Pillar & Reaching Hand */}
          <motion.div
            style={{
              x: xRight,
              y: yRight,
              rotate: rotateRight,
            }}
            className="absolute inset-0 z-10 will-change-transform"
          >
            <Image
              src="/hand-right-layer.png"
              alt="HandsFree Right Hand"
              fill
              sizes="(max-width: 640px) 288px, 384px"
              className="object-contain drop-shadow-[0_0_25px_rgba(184,255,0,0.25)]"
            />
          </motion.div>
        </div>

        {/* Lock Status & Call To Action */}
        <motion.div style={{ opacity: textOpacity, y: textY }} className="space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-neutral-950 border border-white/10 shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8FF00] animate-ping" />
            <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wide">
              SYSTEM LOCKED: <span className="text-[#B8FF00]">HANDSFREE ACTIVATED</span>
            </span>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black bg-[#B8FF00] hover:bg-[#A3E600] text-base shadow-lg shadow-[#B8FF00]/30 hover:scale-105 transition-all"
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
