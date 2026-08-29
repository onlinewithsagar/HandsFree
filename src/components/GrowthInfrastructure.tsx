"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Target,
  Bot,
  Link2,
  CreditCard,
  TrendingUp,
  Activity,
  Cpu,
  ArrowRight,
} from "lucide-react";
import TiltCard from "./TiltCard";

export default function GrowthInfrastructure() {
  const capabilities = [
    {
      title: "Next.js 15 Web Apps",
      desc: "Sub-second web applications engineered for high-intent conversions with edge-rendered performance.",
      tag: "VELOCITY",
      icon: Zap,
    },
    {
      title: "Conversion-Focused Interfaces",
      desc: "Every pixel, micro-interaction, and typography scale engineered to move prospects toward definitive action.",
      tag: "DESIGN",
      icon: Target,
    },
    {
      title: "AI Agent Automations",
      desc: "Custom multi-model AI pipelines that classify, route, and act on leads in real-time — no human drag required.",
      tag: "AUTOMATION",
      icon: Bot,
    },
    {
      title: "CRM Synchronization",
      desc: "Bidirectional real-time sync with HubSpot, Salesforce, Linear, and Slack. Data flows everywhere seamlessly.",
      tag: "SYNC",
      icon: Link2,
    },
    {
      title: "Automated Billing",
      desc: "Stripe recurring subscriptions, automated usage invoicing, and telemetry reconciliation built directly in.",
      tag: "REVENUE",
      icon: CreditCard,
    },
    {
      title: "Autonomous Growth Funnels",
      desc: "Viral referral loops and algorithmic telemetry loops that compound inbound growth without manual intervention.",
      tag: "LEVERAGE",
      icon: TrendingUp,
    },
    {
      title: "Full-Funnel Telemetry",
      desc: "Data-driven analytics pipelines that measure every user touchpoint and dynamically optimize conversion bottlenecks.",
      tag: "INSIGHT",
      icon: Activity,
    },
    {
      title: "Zero-Touch Operations",
      desc: "Autonomous back-office pipelines that auto-triage tickets, provision accounts, and manage tasks while you sleep.",
      tag: "OPS",
      icon: Cpu,
    },
  ];

  return (
    <section id="infrastructure" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B8FF00]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-4">
            Capabilities Matrix
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Full-Stack Growth Infrastructure
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Every service is engineered to eliminate manual drag and compound your growth — from pixel-perfect interfaces to autonomous backend systems.
          </p>
        </motion.div>

        {/* 8-Card Grid with Crisp Vector Icons and Dark Glass Finish */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <TiltCard className="p-6 sm:p-7 rounded-3xl bg-neutral-950/90 border border-white/10 hover:border-[#B8FF00]/50 shadow-xl shadow-black/80 flex flex-col justify-between h-full group transition-all duration-300 hover:shadow-[0_0_25px_rgba(184,255,0,0.12)]">
                  <div>
                    {/* Modern Vector Icon Badge with Subtle Glow (No Emoji) */}
                    <div className="w-11 h-11 rounded-2xl bg-neutral-900 border border-white/10 text-[#B8FF00] flex items-center justify-center mb-6 group-hover:bg-[#B8FF00] group-hover:text-black group-hover:border-[#B8FF00] group-hover:shadow-[0_0_15px_rgba(184,255,0,0.4)] transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white mb-2.5 group-hover:text-[#B8FF00] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-900/80 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#B8FF00] tracking-widest uppercase">
                      {item.tag}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#B8FF00] group-hover:translate-x-1 transition-all" />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
