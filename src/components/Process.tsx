"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Staggered parallax translation for alternating cards
  const y0 = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const y1 = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const y2 = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const yMotions = [y0, y1, y2, y3];

  const steps = [
    {
      num: "01",
      title: "Discover & Map",
      desc: "We audit manual bottlenecks, blueprint ideal API connections, and structure your conversion funnels.",
    },
    {
      num: "02",
      title: "Build Web Engine",
      desc: "Next.js 15 frontend engineering with sub-second TTFB, 3D micro-interactions, and conversion-optimized UX.",
    },
    {
      num: "03",
      title: "Plumb Automations",
      desc: "Connecting AI agents, n8n/Make workflows, CRM synchronization, and automated Stripe invoicing.",
    },
    {
      num: "04",
      title: "Launch & Compound",
      desc: "Full stress-testing, real-time KPI telemetry dashboard handover, and continuous growth calibration.",
    },
  ];

  return (
    <section ref={containerRef} id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono text-xs font-bold uppercase mb-3">
            Our 4-Sprint Process
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            A proven path to autonomous scale.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From initial discovery to full deployment, our collaborative process keeps your team in control with zero operational downtime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              style={{ y: yMotions[idx] }}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 relative group transition-all shadow-sm hover:shadow-xl hover:border-blue-300"
            >
              <div className="font-mono text-3xl font-black text-blue-600 mb-4 flex items-center justify-between">
                <span>{s.num}</span>
                <span className="w-3 h-3 rounded-full bg-blue-600 group-hover:scale-150 transition-transform shadow-md shadow-blue-500/50"></span>
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
