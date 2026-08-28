"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Bot, TrendingUp, ShieldCheck, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth bidirectional parallax transforms
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yButtons = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  // Floating badges with independent parallax speeds
  const yBadge1 = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const yBadge2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yBadge3 = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const yBadge4 = useTransform(scrollYProgress, [0, 1], [0, -90]);

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

    const count = window.innerWidth < 768 ? 35 : 75;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        opacity: Math.random() * 0.5 + 0.15,
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
        p.opacity = Math.sin(p.pulse) * 0.3 + 0.4;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 87, 255, ${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 87, 255, ${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.6;
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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white"
    >
      {/* Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Floating Parallax Badges */}
      <motion.div
        style={{ y: yBadge1 }}
        className="hidden md:flex absolute top-[28%] left-[8%] z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform"
      >
        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase">Latency</div>
          <div className="text-xs font-bold text-slate-900 font-mono">12ms Sub-Second</div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yBadge2 }}
        className="hidden md:flex absolute top-[24%] right-[8%] z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform"
      >
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
          <Bot className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase">AI Agents</div>
          <div className="text-xs font-bold text-slate-900 font-mono">Autonomous 24/7</div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yBadge3 }}
        className="hidden md:flex absolute bottom-[22%] left-[10%] z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform"
      >
        <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase">Conversion Lift</div>
          <div className="text-xs font-bold text-slate-900 font-mono">+3.8x Multiplier</div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yBadge4 }}
        className="hidden md:flex absolute bottom-[18%] right-[10%] z-10 items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl shadow-blue-500/5 hover:scale-105 transition-transform"
      >
        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-400 uppercase">Reliability</div>
          <div className="text-xs font-bold text-slate-900 font-mono">99.99% Zero Drag</div>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/70 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
          <span>WEBSITE • AUTOMATION • GROWTH</span>
        </motion.div>

        <motion.h1
          style={{ y: yTitle, opacity }}
          className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-950 mb-6 leading-[1.05]"
        >
          <span className="block">Build.</span>
          <span className="block text-blue-600">Automate.</span>
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Grow.
          </span>
        </motion.h1>

        <motion.p
          style={{ y: ySubtitle, opacity }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          We engineer high-converting web applications, intelligent AI automations, and autonomous growth engines so your company scales 24/7 without manual drag.
        </motion.p>

        <motion.div
          style={{ y: yButtons, opacity }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group transition-all hover:scale-[1.02]"
          >
            <Zap className="w-4 h-4 text-yellow-300" />
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#studio"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center gap-2 transition-all hover:border-slate-300"
          >
            <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span>Explore Workflow Studio</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
