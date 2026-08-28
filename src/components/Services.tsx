"use client";

import { motion } from "framer-motion";
import { Layout, Cpu, TrendingUp, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const pillars = [
    {
      num: "01",
      pillar: "PILLAR 01",
      sub: "UI / UX VELOCITY",
      title: "Web Development",
      desc: "Custom, ultra-fast web applications built with Next.js and modern React. Designed to captivate visitors and maximize conversions.",
      icon: Layout,
      features: [
        "Sub-Second Google Lighthouse 100",
        "Bespoke 3D & Micro-Interactions",
        "Headless CMS & Client Portals",
      ],
      linkText: "Explore Web Builds",
    },
    {
      num: "02",
      pillar: "PILLAR 02",
      sub: "0ms MANUAL TIME",
      title: "Automation Tools",
      desc: "Eliminate manual busywork with custom AI pipelines, automated lead routing, CRM enrichment, and zero-friction invoicing systems.",
      icon: Cpu,
      features: [
        "GPT-4o Agent Customer Triage",
        "HubSpot, Stripe & n8n Plumbing",
        "Zero-Touch Onboarding Pipelines",
      ],
      linkText: "Explore Automations",
    },
    {
      num: "03",
      pillar: "PILLAR 03",
      sub: "COMPOUNDING LEVERAGE",
      title: "Growth Systems",
      desc: "Data-driven growth infrastructure that accelerates client acquisition, customer retention, and compounding enterprise revenue.",
      icon: TrendingUp,
      features: [
        "Dynamic Viral Referral Loops",
        "Full-Funnel Telemetry & Analytics",
        "Automated Multi-Channel Retargeting",
      ],
      linkText: "Explore Growth Systems",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase mb-3">
            The HandsFree Trifecta
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            Three pillars of <br /> digital excellence.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From pixel-perfect Next.js web applications to intelligent AI automations and compounding growth infrastructure — we engineer the full autonomous machine.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-4xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                      {p.num}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-blue-600">
                    <span>{p.pillar}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-400">{p.sub}</span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                    {p.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {p.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>{p.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
