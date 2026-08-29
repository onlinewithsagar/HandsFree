"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  ArrowLeft,
  CheckCircle2,
  Activity,
  ArrowRight,
  Shield,
  Layers,
  Cpu,
  Clock,
  Sparkles,
  Bot,
  HelpCircle,
} from "lucide-react";
import TiltCard from "@/components/TiltCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import Footer from "@/components/Footer";
import SubpageHeader from "@/components/SubpageHeader";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"sprint" | "retainer">("sprint");
  const [category, setCategory] = useState<"all" | "web" | "automation">("all");

  // ROI Calculator State
  const [teamSize, setTeamSize] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(2500);
  const [wastedHours, setWastedHours] = useState(14);

  const weeklyHoursSaved = teamSize * wastedHours * 0.85;
  const annualHoursSaved = Math.round(weeklyHoursSaved * 48);
  const annualPayrollSaved = Math.round(annualHoursSaved * hourlyRate);
  const estimatedRevenueLift = Math.round(annualPayrollSaved * 2.4);

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
  };

  const setPreset = (team: number, rate: number, hours: number) => {
    setTeamSize(team);
    setHourlyRate(rate);
    setWastedHours(hours);
  };

  const TIERS = [
    // 1. WEBSITES ONLY
    {
      category: "web",
      name: "Starter Web Sprint",
      tagline: "High-converting Next.js landing page or modern multi-section website with 3D micro-animations.",
      badge: "Website Only",
      popular: false,
      priceSprint: "₹3,999",
      periodSprint: "one-time sprint",
      priceRetainer: "₹1,999",
      periodRetainer: "per month",
      deliverable: "Delivered in 3–5 Business Days",
      features: [
        "High-Speed Next.js 15 Web Application",
        "Responsive Glassmorphic UI & 3D Transitions",
        "Direct WhatsApp & Email Lead Capture Form",
        "Custom Domain & Free SSL Setup",
        "SEO Meta Architecture & Google Indexing",
        "7 Days Dedicated Launch Hypercare",
      ],
      ctaText: "Build Website",
      ctaLink: "/#book",
    },
    // 2. AUTOMATION ONLY
    {
      category: "automation",
      name: "Autonomous Pipeline",
      tagline: "Smart AI automation agents, two-way CRM sync, and automatic lead response routing.",
      badge: "Automation Only",
      popular: false,
      priceSprint: "₹5,999",
      periodSprint: "one-time sprint",
      priceRetainer: "₹2,999",
      periodRetainer: "per month",
      deliverable: "Delivered in 4–6 Business Days",
      features: [
        "Multi-Step AI Agent Auto-Responder",
        "CRM Sync (HubSpot / Google Sheets / Airtable)",
        "Instant WhatsApp & Email Alert Triggers",
        "Automated Invoicing & Payment Links",
        "Webhook & Third-Party API Plumbing",
        "7 Days Dedicated Monitoring & Tuning",
      ],
      ctaText: "Automate Workflows",
      ctaLink: "/#book",
    },
    // 3. FULL-STACK COMBO (WEBSITE + AUTOMATION)
    {
      category: "all",
      name: "Complete Growth Engine",
      tagline: "High-performance website + full AI automation backend to capture & nurture clients 100% hands-free.",
      badge: "Website + Automation",
      popular: true,
      priceSprint: "₹8,999",
      periodSprint: "one-time sprint",
      priceRetainer: "₹4,499",
      periodRetainer: "per month",
      deliverable: "Delivered in 7–10 Business Days",
      features: [
        "Complete Next.js Web App / Client Portal",
        "Everything in Autonomous Pipeline Included",
        "Smart AI Knowledge Assistant Integration",
        "Bidirectional CRM Sync & Real-time Database",
        "Payment Gateway Integration (UPI / Stripe)",
        "14 Days Dedicated Hypercare Support",
      ],
      ctaText: "Get Full Engine",
      ctaLink: "/#book",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-[#B8FF00] selection:text-black pb-24">
      {/* Top Header */}
      <SubpageHeader showContactButton />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B8FF00]/25 bg-[#B8FF00]/10 text-[#B8FF00] text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(184,255,0,0.15)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Sprint Pricing</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight mb-6 leading-tight">
          Simple, Transparent <br />
          <span className="text-[#B8FF00]">Sprint Pricing.</span>
        </h1>

        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Select what you need: a high-converting website, an autonomous AI backend pipeline, or the complete all-in-one growth engine.
        </p>

        {/* Clean Sprint vs Retainer Toggle */}
        <div className="inline-flex items-center p-1 bg-neutral-900 border border-white/10 rounded-2xl mb-14 sm:mb-16 shadow-xl">
          <button
            onClick={() => setBillingCycle("sprint")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              billingCycle === "sprint"
                ? "bg-[#B8FF00] text-black shadow-md shadow-[#B8FF00]/20"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            One-Time Sprints
          </button>
          <button
            onClick={() => setBillingCycle("retainer")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              billingCycle === "retainer"
                ? "bg-[#B8FF00] text-black shadow-md shadow-[#B8FF00]/20"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Monthly Retainers
          </button>
        </div>

        {/* 1. Website Development Section */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
            <span className="text-xs font-mono font-bold text-[#B8FF00] tracking-wider uppercase bg-[#B8FF00]/10 px-3 py-1 rounded-full border border-[#B8FF00]/20">
              01. Website Development
            </span>
            <span className="text-xs text-neutral-400 font-mono">High-Speed Landing Pages & Web Apps</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TiltCard className="p-7 sm:p-8 flex flex-col justify-between bg-neutral-950/80 border border-white/10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] uppercase bg-[#B8FF00]/10 px-2.5 py-1 rounded-full border border-[#B8FF00]/20">
                    Starter Website
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Landing Page Sprint</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">High-converting landing page with 3D micro-interactions and WhatsApp capture.</p>

                <div className="pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                      {billingCycle === "sprint" ? "₹2,999" : "₹1,499"}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      / {billingCycle === "sprint" ? "one-time sprint" : "per month"}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#B8FF00] font-mono mt-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Delivered in 2–3 Business Days</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">Features:</div>
                  {[
                    "Next.js 15 Fast Landing Page",
                    "Smooth Motion & Glassmorphism",
                    "Direct WhatsApp Contact Flow",
                    "Free SSL & Domain Setup",
                    "SEO Meta Optimization",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#B8FF00] shrink-0 stroke-[2.5] mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/#book"
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 transition-all"
              >
                <span>Book Website Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </TiltCard>

            <TiltCard className="p-7 sm:p-8 flex flex-col justify-between bg-neutral-950/95 border-2 border-[#B8FF00]/40 shadow-lg shadow-[#B8FF00]/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] uppercase bg-[#B8FF00]/10 px-2.5 py-1 rounded-full border border-[#B8FF00]/20">
                    Full Web App
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Multi-Page Web Platform</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">Complete responsive website with multi-route navigation, custom CMS or subpages.</p>

                <div className="pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                      {billingCycle === "sprint" ? "₹5,999" : "₹2,999"}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      / {billingCycle === "sprint" ? "one-time sprint" : "per month"}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#B8FF00] font-mono mt-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Delivered in 4–6 Business Days</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">Features:</div>
                  {[
                    "Multi-Page Responsive Architecture",
                    "Custom 3D Animations & Sub-Pages",
                    "Lead Dashboard / Sheets Capture",
                    "Edge Caching & 99+ Performance Score",
                    "14 Days Dedicated Hypercare",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#B8FF00] shrink-0 stroke-[2.5] mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/#book"
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#B8FF00] hover:bg-[#A3E600] text-black shadow-lg shadow-[#B8FF00]/25 transition-all"
              >
                <span>Book Full Website</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </TiltCard>
          </div>
        </div>

        {/* 2. AI Automation Pipelines Section */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
            <span className="text-xs font-mono font-bold text-[#B8FF00] tracking-wider uppercase bg-[#B8FF00]/10 px-3 py-1 rounded-full border border-[#B8FF00]/20">
              02. AI & Workflow Automation
            </span>
            <span className="text-xs text-neutral-400 font-mono">Zero-Touch Autonomous Lead & CRM Pipelines</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TiltCard className="p-7 sm:p-8 flex flex-col justify-between bg-neutral-950/80 border border-white/10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] uppercase bg-[#B8FF00]/10 px-2.5 py-1 rounded-full border border-[#B8FF00]/20">
                    Lead Automation
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Auto-Responder Pipeline</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">Instant WhatsApp/Email response triggers & Google Sheets/Airtable auto-logging.</p>

                <div className="pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                      {billingCycle === "sprint" ? "₹3,999" : "₹1,999"}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      / {billingCycle === "sprint" ? "one-time sprint" : "per month"}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#B8FF00] font-mono mt-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Delivered in 3–4 Business Days</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">Features:</div>
                  {[
                    "Instant WhatsApp/Email Alerts",
                    "Google Sheets / Airtable Two-Way Sync",
                    "Webhook Integration & Trigger Setup",
                    "Lead Qualification Filter",
                    "7 Days Telemetry Monitoring",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#B8FF00] shrink-0 stroke-[2.5] mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/#book"
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 transition-all"
              >
                <span>Automate Leads</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </TiltCard>

            <TiltCard className="p-7 sm:p-8 flex flex-col justify-between bg-neutral-950/95 border-2 border-[#B8FF00]/40 shadow-lg shadow-[#B8FF00]/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] uppercase bg-[#B8FF00]/10 px-2.5 py-1 rounded-full border border-[#B8FF00]/20">
                    Smart AI Agent
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Multi-Step AI Orchestration</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">Autonomous AI agents that classify, route, and auto-reply based on custom knowledge bases.</p>

                <div className="pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                      {billingCycle === "sprint" ? "₹6,999" : "₹3,499"}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      / {billingCycle === "sprint" ? "one-time sprint" : "per month"}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#B8FF00] font-mono mt-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Delivered in 5–7 Business Days</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">Features:</div>
                  {[
                    "Custom LLM Agent Knowledge Base",
                    "CRM Sync (HubSpot / Salesforce / Notion)",
                    "Automated Invoicing & Stripe / UPI Links",
                    "Multi-Channel Support (WhatsApp, Slack)",
                    "14 Days Dedicated Model Tuning",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#B8FF00] shrink-0 stroke-[2.5] mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/#book"
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#B8FF00] hover:bg-[#A3E600] text-black shadow-lg shadow-[#B8FF00]/25 transition-all"
              >
                <span>Build AI Agent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </TiltCard>
          </div>
        </div>

        {/* 3. All-In-One Full Engine Section */}
        <div className="text-left mb-24">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
            <span className="text-xs font-mono font-bold text-[#B8FF00] tracking-wider uppercase bg-[#B8FF00]/10 px-3 py-1 rounded-full border border-[#B8FF00]/20">
              03. Complete Growth Engine (Website + AI)
            </span>
            <span className="text-xs text-neutral-400 font-mono">Full-Stack Solution for Zero-Touch Scale</span>
          </div>

          <TiltCard className="p-8 sm:p-10 bg-neutral-950/95 border-2 border-[#B8FF00]/60 shadow-[0_0_50px_rgba(184,255,0,0.15)] ring-1 ring-[#B8FF00]/20 relative overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-[#B8FF00] text-[10px] font-mono font-bold uppercase mb-3">
                  Recommended Combo
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">HandsFree Complete Suite</h3>
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  We build your high-converting modern web platform AND connect the entire autonomous AI lead capture & follow-up pipeline. 100% hands-free from first click to customer conversion.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" /> Full Next.js Web App / Client Portal
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" /> Autonomous AI Lead Qualification
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" /> Two-Way CRM & Sheets Sync
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" /> WhatsApp Automated Follow-Ups
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" /> Payment Gateway (Stripe/UPI)
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" /> 30 Days Dedicated Hypercare Support
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 bg-black/80 rounded-2xl border border-white/10 text-center">
                <div className="text-xs text-neutral-500 font-mono mb-1">ALL-IN-ONE BUNDLE</div>
                <div className="text-4xl font-heading font-black text-white mb-1">
                  {billingCycle === "sprint" ? "₹8,999" : "₹4,499"}
                </div>
                <div className="text-xs text-neutral-400 font-mono mb-4">
                  / {billingCycle === "sprint" ? "one-time sprint" : "per month"}
                </div>
                <div className="text-xs text-[#B8FF00] font-mono mb-6">Delivered in 7–10 Days</div>
                <Link
                  href="/#book"
                  className="w-full py-3.5 px-4 bg-[#B8FF00] hover:bg-[#A3E600] text-black font-bold text-sm rounded-xl transition-all shadow-lg shadow-[#B8FF00]/25"
                >
                  Get Complete Suite
                </Link>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Embedded ROI Calculator on Pricing Page */}
        <section id="calculator" className="text-left mb-24">
          <TiltCard className="bg-neutral-950/90 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div>
                <div className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" />
                  <span>ROI Simulator</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight mb-4">
                  Calculate Your Payback Period.
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed">
                  Enter your team&apos;s details to see how quickly a single HandsFree sprint recovers its entire cost in saved payroll and converted pipeline.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <button
                    onClick={() => setPreset(4, 1500, 8)}
                    className="px-3.5 py-1.5 bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-[#B8FF00] text-xs font-mono font-bold rounded-xl transition-all"
                  >
                    Startup (4)
                  </button>
                  <button
                    onClick={() => setPreset(12, 3000, 14)}
                    className="px-3.5 py-1.5 bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-[#B8FF00] text-xs font-mono font-bold rounded-xl transition-all"
                  >
                    Growth Agency (12)
                  </button>
                  <button
                    onClick={() => setPreset(28, 5000, 18)}
                    className="px-3.5 py-1.5 bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-[#B8FF00] text-xs font-mono font-bold rounded-xl transition-all"
                  >
                    Enterprise (28)
                  </button>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Core Team Size", val: teamSize, unit: "People", min: 1, max: 80, step: 1, setter: setTeamSize },
                    { label: "Avg. Hourly Rate (₹)", val: hourlyRate, unit: "₹/hr", min: 500, max: 10000, step: 100, setter: setHourlyRate },
                    { label: "Wasted Manual Hrs/Wk", val: wastedHours, unit: "Hrs", min: 1, max: 40, step: 1, setter: setWastedHours },
                  ].map((input, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-end mb-2">
                        <label className="text-xs font-semibold text-neutral-300">{input.label}</label>
                        <span className="text-lg font-bold text-white font-mono">
                          {input.val} <span className="text-xs font-normal text-neutral-500">{input.unit}</span>
                        </span>
                      </div>
                      <input
                        type="range"
                        min={input.min}
                        max={input.max}
                        step={input.step}
                        value={input.val}
                        onChange={(e) => input.setter(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#B8FF00]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Output Display */}
              <div className="bg-neutral-950/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8FF00]/5 rounded-full blur-[100px] pointer-events-none" />

                <h3 className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#B8FF00]" /> Projected Annual Impact
                </h3>

                <div className="space-y-5 mb-6 relative z-10">
                  <div>
                    <div className="text-xs text-neutral-500 font-mono mb-1">Annual Hours Recovered</div>
                    <div className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                      <AnimatedCounter value={annualHoursSaved} suffix=" hrs" />
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-white/10"></div>

                  <div>
                    <div className="text-xs text-neutral-500 font-mono mb-1">Payroll Drag Eliminated</div>
                    <div className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                      <AnimatedCounter value={annualPayrollSaved} prefix="₹" />
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-[#B8FF00]/25 bg-[#B8FF00]/5 relative z-10">
                  <div className="text-xs text-[#B8FF00] font-mono font-bold mb-1">Estimated Revenue Lift</div>
                  <div className="text-3xl sm:text-4xl font-heading font-black text-[#B8FF00] tracking-tight">
                    <AnimatedCounter value={estimatedRevenueLift} prefix="₹" />
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">Based on zero-touch follow-ups and sub-second lead capture.</p>
                </div>
              </div>
            </div>
          </TiltCard>
        </section>

        {/* Pricing FAQs */}
        <div className="max-w-4xl mx-auto text-left">
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight mb-8 text-center">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#B8FF00]" />
                How fast is delivery?
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Standard web sprints launch in 7–10 days. Autonomous AI workflow engines typically deploy in 14–21 days with continuous testing on staging.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#B8FF00]" />
                Do you own the code?
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Yes! 100% of all frontend code, backend pipelines, database schemas, and AI prompts are transferred directly to your organization upon project completion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#B8FF00]" />
                What is the payment structure?
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We operate on a 50% initiation and 50% post-acceptance milestone model, with all major credit cards, UPI, Stripe, and wire transfers accepted.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#B8FF00]" />
                Do you offer ongoing support?
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every sprint comes with complimentary hypercare. After that, you can keep our monthly retainer pod on standby for ongoing feature expansions and prompt tuning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
