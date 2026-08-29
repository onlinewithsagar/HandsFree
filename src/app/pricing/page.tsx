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
    {
      name: "Starter Velocity",
      tagline: "For early startups looking to launch high-converting digital products sub-second.",
      badge: "High Velocity",
      popular: false,
      priceSprint: "₹45,000",
      periodSprint: "one-time sprint",
      priceRetainer: "₹25,000",
      periodRetainer: "per month",
      deliverable: "Delivered in 7–10 Business Days",
      features: [
        "Sub-second Next.js 15 Web Application",
        "Responsive Glassmorphic UI & 3D Transitions",
        "Lead Capture & Direct WhatsApp / CRM Routing",
        "SEO Meta Architecture & Sitemap Generation",
        "Vercel Edge Deployment & SSL Setup",
        "14 Days Dedicated Hypercare Support",
      ],
      ctaText: "Start Starter Sprint",
      ctaLink: "/#book",
    },
    {
      name: "Autonomous Growth Engine",
      tagline: "Full-stack web application + custom AI agent pipelines to completely automate manual operations.",
      badge: "Most Popular",
      popular: true,
      priceSprint: "₹95,000",
      periodSprint: "one-time sprint",
      priceRetainer: "₹48,000",
      periodRetainer: "per month",
      deliverable: "Delivered in 14–21 Business Days",
      features: [
        "Everything in Starter Velocity",
        "Custom Multi-Step AI Agent Orchestrations",
        "Bidirectional CRM Sync (HubSpot / Salesforce / Airtable)",
        "Automated Invoicing & Stripe / Razorpay Billing Loops",
        "Lead Scoring & Autonomous Email/WhatsApp Follow-ups",
        "Real-Time Telemetry & Operations Dashboard",
        "30 Days Dedicated Hypercare & Architecture Support",
      ],
      ctaText: "Build Growth Engine",
      ctaLink: "/#book",
    },
    {
      name: "Enterprise Spot Instance",
      tagline: "Dedicated on-demand pods for scaling enterprises requiring zero-touch autonomous architecture.",
      badge: "Enterprise Custom",
      popular: false,
      priceSprint: "Custom",
      periodSprint: "tailored scope",
      priceRetainer: "Custom",
      periodRetainer: "dedicated pod",
      deliverable: "Rapid Scoping in 48 Hours",
      features: [
        "Dedicated Multi-Disciplinary Engineering Pod",
        "Custom LLM Fine-Tuning & Private Vector DB Cluster",
        "SOC-2 Compliant Zero-Touch Webhook Infrastructure",
        "High-Volume Data Pipelines & Legacy System Bridges",
        "Strict Enterprise SLAs (99.99% Uptime Guarantee)",
        "Continuous AI Prompt Engineering & Maintenance Retainer",
        "Direct Slack / WhatsApp Priority Channel with Founders",
      ],
      ctaText: "Request Enterprise Scoping",
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
          Invest in Velocity. <br />
          <span className="text-[#B8FF00]">Compound Your ROI.</span>
        </h1>

        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Predictable sprint pricing with zero hidden fees. Every sprint delivers working software and autonomous pipelines deployed directly to production.
        </p>

        {/* Sprint vs Retainer Toggle */}
        <div className="inline-flex flex-col sm:flex-row items-center p-1.5 bg-neutral-900/90 border border-white/10 rounded-2xl mb-12 sm:mb-16 shadow-xl max-w-full gap-1 sm:gap-0">
          <button
            onClick={() => setBillingCycle("sprint")}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
              billingCycle === "sprint"
                ? "bg-[#B8FF00] text-black shadow-lg shadow-[#B8FF00]/25"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            One-Time Sprints
          </button>
          <button
            onClick={() => setBillingCycle("retainer")}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
              billingCycle === "retainer"
                ? "bg-[#B8FF00] text-black shadow-lg shadow-[#B8FF00]/25"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Monthly Hypercare Retainer
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left mb-24">
          {TIERS.map((tier, idx) => (
            <TiltCard
              key={idx}
              className={`p-7 sm:p-8 flex flex-col justify-between relative transition-all ${
                tier.popular
                  ? "bg-neutral-950/95 border-2 border-[#B8FF00]/60 shadow-[0_0_40px_rgba(184,255,0,0.15)] ring-1 ring-[#B8FF00]/20"
                  : "bg-neutral-950/80 border border-white/10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] uppercase bg-[#B8FF00]/10 px-2.5 py-1 rounded-full border border-[#B8FF00]/20">
                    {tier.badge}
                  </span>
                  {tier.popular && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF00] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8FF00]"></span>
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white mb-2 leading-snug">{tier.name}</h2>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">{tier.tagline}</p>

                <div className="pb-6 border-b border-white/10 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                      {billingCycle === "sprint" ? tier.priceSprint : tier.priceRetainer}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      / {billingCycle === "sprint" ? tier.periodSprint : tier.periodRetainer}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#B8FF00] font-mono mt-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tier.deliverable}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                    Included Capabilities:
                  </div>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#B8FF00] shrink-0 stroke-[2.5] mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={tier.ctaLink}
                className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  tier.popular
                    ? "bg-[#B8FF00] hover:bg-[#A3E600] text-black shadow-lg shadow-[#B8FF00]/25 hover:scale-[1.02]"
                    : "bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 hover:border-white/25"
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </TiltCard>
          ))}
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
