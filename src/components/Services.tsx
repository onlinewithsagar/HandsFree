"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Layout, Cpu, TrendingUp, ArrowRight } from "lucide-react";
import { useRef } from "react";
import TiltCard from "./TiltCard";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yCard1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const pillars = [
    {
      num: "01",
      pillar: "VELOCITY",
      title: "Web Applications",
      desc: "Sub-second Next.js web applications engineered to captivate visitors and maximize conversions.",
      icon: Layout,
      yMotion: yCard1,
      linkText: "Explore Builds",
    },
    {
      num: "02",
      pillar: "AUTOMATION",
      title: "AI Workflows",
      desc: "Custom AI pipelines, CRM sync, and automated billing that eliminate manual busywork.",
      icon: Cpu,
      yMotion: yCard2,
      linkText: "Explore AI",
    },
    {
      num: "03",
      pillar: "LEVERAGE",
      title: "Growth Systems",
      desc: "Data-driven referral loops and full-funnel telemetry for compounding enterprise scale.",
      icon: TrendingUp,
      yMotion: yCard3,
      linkText: "Explore Growth",
    },
  ];

  return (
    <section ref={containerRef} id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B8FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-3.5">
            Core Pillars
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-3">
            Three pillars of digital scale.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Pixel-perfect web applications, autonomous AI automations, and compounding growth systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div key={idx} style={{ y: p.yMotion }}>
                <TiltCard className="bg-neutral-950/90 p-8 rounded-3xl border border-white/10 hover:border-[#B8FF00]/50 shadow-xl shadow-black flex flex-col justify-between h-full group transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,255,0,0.1)]">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-13 h-13 rounded-2xl bg-neutral-900 border border-white/10 text-[#B8FF00] flex items-center justify-center group-hover:bg-[#B8FF00] group-hover:text-black group-hover:border-[#B8FF00] transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-4xl font-black text-neutral-800 group-hover:text-neutral-600 transition-colors">
                        {p.num}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-bold text-[#B8FF00] mb-2 tracking-wider">
                      {p.pillar}
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-3">
                      {p.title}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                      {p.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full pt-5 border-t border-neutral-900 text-sm font-bold text-[#B8FF00] group-hover:text-white transition-colors"
                  >
                    <span>{p.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
