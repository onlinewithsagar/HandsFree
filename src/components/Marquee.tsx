"use client";

import { Layers, Bot, Zap, RefreshCw, CreditCard, Sparkles, Cpu } from "lucide-react";

export default function Marquee() {
  const items = [
    { icon: Layers, text: "Next.js 15 Web Apps" },
    { icon: Bot, text: "AI Agent Automations" },
    { icon: Zap, text: "Autonomous Growth Funnels" },
    { icon: RefreshCw, text: "CRM Pipeline Sync" },
    { icon: CreditCard, text: "Stripe Auto-Billing" },
    { icon: Sparkles, text: "Sub-Second Latency" },
    { icon: Cpu, text: "Zero-Touch Operations" },
  ];

  return (
    <div className="border-y border-white/10 bg-neutral-950 text-white overflow-hidden py-4 select-none">
      <div className="animate-marquee-slow flex items-center gap-12 font-mono text-xs uppercase tracking-widest">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <Icon className="w-4 h-4 text-[#B8FF00]" />
              <span className="text-neutral-300">{item.text}</span>
              <span className="text-neutral-700 font-bold">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
