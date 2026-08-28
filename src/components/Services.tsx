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
    <section ref={containerRef} id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase mb-3">
            Core Pillars
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            Three pillars of digital scale.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Pixel-perfect web applications, autonomous AI automations, and compounding growth systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div key={idx} style={{ y: p.yMotion }}>
                <TiltCard className="bg-white p-7 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                        {p.num}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-bold text-blue-600 mb-1.5">
                      {p.pillar}
                    </div>

                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                      {p.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
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
