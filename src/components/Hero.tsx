"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Bot, TrendingUp, ShieldCheck, ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth bidirectional parallax transforms
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yButtons = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  // Floating badges with independent parallax speeds
  const yBadge1 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yBadge2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yBadge3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yBadge4 = useTransform(scrollYProgress, [0, 1], [0, -70]);

  // Particle Canvas Physics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    function resize() {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const count = window.innerWidth < 768 ? 30 : 80;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    function render() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;
        p.opacity = Math.sin(p.pulse) * 0.3 + 0.35;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184, 255, 0, ${p.opacity * 0.7})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(184, 255, 0, ${(1 - dist / 90) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    }
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] sm:min-h-[95vh] flex items-center justify-center pt-24 pb-14 sm:pt-32 sm:pb-20 overflow-hidden bg-black px-4"
    >
      {/* Background Radial Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B8FF00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#B8FF00]/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Floating Parallax Badges - Shown on Desktop Only to prevent mobile overlap */}
      <motion.div
        style={{ y: yBadge1 }}
        className="hidden xl:flex absolute top-[28%] left-[6%] z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-white/10 shadow-xl shadow-black/80 hover:border-[#B8FF00]/50 hover:shadow-[0_0_20px_rgba(184,255,0,0.15)] transition-all"
      >
        <div className="w-8 h-8 rounded-lg bg-[#B8FF00]/10 text-[#B8FF00] flex items-center justify-center font-bold">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-neutral-500 uppercase">Latency</div>
          <div className="text-xs font-bold text-white font-mono">12ms Sub-Second</div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yBadge2 }}
        className="hidden xl:flex absolute top-[24%] right-[6%] z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-white/10 shadow-xl shadow-black/80 hover:border-[#B8FF00]/50 hover:shadow-[0_0_20px_rgba(184,255,0,0.15)] transition-all"
      >
        <div className="w-8 h-8 rounded-lg bg-[#B8FF00]/10 text-[#B8FF00] flex items-center justify-center font-bold">
          <Bot className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-neutral-500 uppercase">AI Agents</div>
          <div className="text-xs font-bold text-white font-mono">Autonomous 24/7</div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yBadge3 }}
        className="hidden xl:flex absolute bottom-[22%] left-[8%] z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-white/10 shadow-xl shadow-black/80 hover:border-[#B8FF00]/50 hover:shadow-[0_0_20px_rgba(184,255,0,0.15)] transition-all"
      >
        <div className="w-8 h-8 rounded-lg bg-emerald-950/60 text-emerald-400 flex items-center justify-center font-bold">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-neutral-500 uppercase">Conversion Lift</div>
          <div className="text-xs font-bold text-white font-mono">+3.8x Multiplier</div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yBadge4 }}
        className="hidden xl:flex absolute bottom-[18%] right-[8%] z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-white/10 shadow-xl shadow-black/80 hover:border-[#B8FF00]/50 hover:shadow-[0_0_20px_rgba(184,255,0,0.15)] transition-all"
      >
        <div className="w-8 h-8 rounded-lg bg-neutral-900 text-neutral-300 flex items-center justify-center font-bold">
          <ShieldCheck className="w-4 h-4 text-[#B8FF00]" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-neutral-500 uppercase">Reliability</div>
          <div className="text-xs font-bold text-white font-mono">99.99% Zero Drag</div>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B8FF00]/30 bg-[#B8FF00]/10 text-[#B8FF00] text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(184,255,0,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-ping"></span>
          <span>WEBSITE • AUTOMATION • GROWTH</span>
        </motion.div>

        <motion.h1
          style={{ y: yTitle, opacity }}
          className="font-heading font-black text-5xl xs:text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-5 sm:mb-6 leading-[1.05] break-words"
        >
          <span className="block">Build.</span>
          <span className="block text-[#B8FF00] drop-shadow-[0_0_35px_rgba(184,255,0,0.35)]">Automate.</span>
          <span className="block bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Grow.
          </span>
        </motion.h1>

        <motion.p
          style={{ y: ySubtitle, opacity }}
          className="text-sm sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2"
        >
          We engineer high-converting web applications, intelligent AI automations, and autonomous growth engines so your company scales 24/7 without manual drag.
        </motion.p>

        <motion.div
          style={{ y: yButtons, opacity }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-black bg-[#B8FF00] hover:bg-[#A3E600] shadow-lg shadow-[#B8FF00]/25 hover:shadow-[#B8FF00]/50 flex items-center justify-center gap-2 group transition-all hover:scale-[1.02]"
          >
            <Zap className="w-4 h-4 fill-black text-black" />
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#studio"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 flex items-center justify-center gap-2 transition-all hover:border-[#B8FF00]/40"
          >
            <Play className="w-4 h-4 text-[#B8FF00] fill-[#B8FF00]" />
            <span>Explore Studio</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
