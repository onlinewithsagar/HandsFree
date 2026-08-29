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
  const [activeTab, setActiveTab] = useState<"basic-web" | "fullstack" | "automation">("basic-web");

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

        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight mb-4 leading-tight">
          Choose Your <span className="text-[#B8FF00]">Sprint.</span>
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Select what you want to build: high-converting websites, autonomous AI pipelines, or the full all-in-one growth suite.
        </p>

        {/* Primary Service Selector Tabs at the Top */}
        <div className="max-w-xl mx-auto p-1 bg-neutral-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl gap-1">
          {[
            { id: "basic-web", label: "Websites" },
            { id: "fullstack", label: "Custom Apps" },
            { id: "automation", label: "AI Automations" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "basic-web" | "fullstack" | "automation")}
              className={`flex-1 py-2.5 px-3 sm:px-5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer text-center truncate ${
                activeTab === tab.id
                  ? "bg-[#B8FF00] text-black shadow-md shadow-[#B8FF00]/25"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Billing Cycle Toggle */}
        <div className="inline-flex items-center p-1 bg-neutral-950 border border-white/10 rounded-xl mb-12 shadow-lg text-xs font-mono">
          <button
            onClick={() => setBillingCycle("sprint")}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              billingCycle === "sprint"
                ? "bg-white text-black font-bold shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            One-Time Sprint
          </button>
          <button
            onClick={() => setBillingCycle("retainer")}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              billingCycle === "retainer"
                ? "bg-white text-black font-bold shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Monthly Retainer
          </button>
        </div>

        {/* 1. Basic Websites Section */}
        {activeTab === "basic-web" && (
          <div className="text-left mb-24 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-6 pb-3 border-b border-white/10">
              <span className="inline-flex items-center self-start text-xs font-mono font-bold text-[#B8FF00] tracking-wider uppercase bg-[#B8FF00]/10 px-3 py-1 rounded-full border border-[#B8FF00]/20">
                Business Showcase Websites
              </span>
              <span className="text-xs text-neutral-400 font-mono">Showcase your business, services, portfolio & capture direct client inquiries</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TiltCard className="p-7 sm:p-8 flex flex-col justify-between bg-neutral-950/80 border border-white/10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] uppercase bg-[#B8FF00]/10 px-2.5 py-1 rounded-full border border-[#B8FF00]/20">
                      Single-Page
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Business Landing Page</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">Clean, modern single-page website to show what your business does, customer proof, and direct WhatsApp contact.</p>

                  <div className="pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                        {billingCycle === "sprint" ? "₹2,499" : "₹1,199"}
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
                      "Single-Page Fast Business Showcase",
                      "Services, About, Pricing & Reviews Sections",
                      "Direct WhatsApp & Phone Call Action",
                      "Free SSL & Custom Domain Connection",
                      "Google Search & SEO Meta Tags",
                      "7 Days Launch Hypercare Support",
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
                  <span>Book Business Landing Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </TiltCard>

              <TiltCard className="p-7 sm:p-8 flex flex-col justify-between bg-neutral-950/95 border-2 border-[#B8FF00]/40 shadow-lg shadow-[#B8FF00]/5">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] uppercase bg-[#B8FF00]/10 px-2.5 py-1 rounded-full border border-[#B8FF00]/20">
                      Multi-Section
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Full Business Website</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">Complete multi-page business website to showcase your full catalogue, portfolio, team, and contact forms.</p>

                  <div className="pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                        {billingCycle === "sprint" ? "₹4,499" : "₹1,999"}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        / {billingCycle === "sprint" ? "one-time sprint" : "per month"}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#B8FF00] font-mono mt-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Delivered in 4–5 Business Days</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">Features:</div>
                    {[
                      "Up to 5 Dedicated Pages (Home, About, Services, Work, Contact)",
                      "Smooth Page Transitions & Mobile Menu",
                      "Direct Inquiries to WhatsApp & Email",
                      "Fast CDN Caching & Google Speed Optimization",
                      "14 Days Dedicated Hypercare Support",
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
                  <span>Book Full Business Site</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </TiltCard>
            </div>
          </div>
        )}

        {/* 2. Full-Stack Custom Apps Section */}
        {activeTab === "fullstack" && (
          <div className="text-left mb-24 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-6 pb-3 border-b border-white/10">
              <span className="inline-flex items-center self-start text-xs font-mono font-bold text-[#B8FF00] tracking-wider uppercase bg-[#B8FF00]/10 px-3 py-1 rounded-full border border-[#B8FF00]/20">
                Tailor-Made Custom Web Applications
              </span>
              <span className="text-xs text-neutral-400 font-mono">Custom client portals, SaaS tools, internal dashboards, and database applications</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TiltCard className="p-7 sm:p-8 flex flex-col justify-between bg-neutral-950/80 border border-white/10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] uppercase bg-[#B8FF00]/10 px-2.5 py-1 rounded-full border border-[#B8FF00]/20">
                      Tailor-Made MVP
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Tailor-Made Web App</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">Custom-built web application with secure logins, database storage, and client dashboard built precisely to your requirements.</p>

                  <div className="pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                        {billingCycle === "sprint" ? "₹7,999" : "₹3,999"}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        / {billingCycle === "sprint" ? "one-time sprint" : "per month"}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#B8FF00] font-mono mt-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Delivered in 7–10 Business Days</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">Features:</div>
                    {[
                      "Tailored Next.js 15 Full-Stack Architecture",
                      "Database Integration (Supabase / PostgreSQL)",
                      "User Authentication & Account Management",
                      "Online Payments (Stripe / Razorpay / UPI)",
                      "Admin Management Control Dashboard",
                      "14 Days Dedicated Architecture Support",
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
                  <span>Book Tailor-Made App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </TiltCard>

              <TiltCard className="p-7 sm:p-8 flex flex-col justify-between bg-neutral-950/95 border-2 border-[#B8FF00]/60 shadow-[0_0_40px_rgba(184,255,0,0.15)] ring-1 ring-[#B8FF00]/20">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] uppercase bg-[#B8FF00]/10 px-2.5 py-1 rounded-full border border-[#B8FF00]/20">
                      SaaS & Scale
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Full-Stack SaaS Platform</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">Production-ready SaaS boilerplate with recurring subscriptions, tenant isolation, and custom backend APIs.</p>

                  <div className="pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                        {billingCycle === "sprint" ? "₹14,999" : "₹6,999"}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        / {billingCycle === "sprint" ? "one-time sprint" : "per month"}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#B8FF00] font-mono mt-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Delivered in 10–14 Business Days</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">Features:</div>
                    {[
                      "Complete SaaS Platform with Subscription Billing",
                      "Automated Email Transactions & Webhooks",
                      "Custom API Routes & Third-Party Integrations",
                      "Database Security & Multi-Tenant Support",
                      "Live Telemetry & Performance Monitoring",
                      "30 Days Dedicated Hypercare Support",
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
                  <span>Build SaaS Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </TiltCard>
            </div>
          </div>
        )}

        {/* 3. AI Automation Pipelines Section */}
        {activeTab === "automation" && (
          <div className="text-left mb-24 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-6 pb-3 border-b border-white/10">
              <span className="inline-flex items-center self-start text-xs font-mono font-bold text-[#B8FF00] tracking-wider uppercase bg-[#B8FF00]/10 px-3 py-1 rounded-full border border-[#B8FF00]/20">
                AI & Workflow Automation Sprints
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
                        {billingCycle === "sprint" ? "₹3,499" : "₹1,499"}
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
                      "Instant WhatsApp & Email Alert Triggers",
                      "Google Sheets / Airtable Two-Way Sync",
                      "Webhook Integration & Custom Plumbings",
                      "Lead Qualification & Auto-Routing",
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
                  <h3 className="text-2xl font-bold text-white mb-2 leading-snug">Multi-Step AI Agent Orchestration</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">Autonomous AI agents that classify, route, and auto-reply based on custom company knowledge bases.</p>

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
        )}

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
