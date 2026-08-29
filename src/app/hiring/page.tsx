"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import SubpageHeader from "@/components/SubpageHeader";
import {
  ArrowLeft,
  Briefcase,
  Zap,
  Sparkles,
  CheckCircle2,
  Send,
  Code,
  Layers,
  Cpu,
  Flame,
  Clock,
  ShieldCheck,
  ChevronDown,
  Compass,
  Radio,
} from "lucide-react";

const SPECIALTY_OPTIONS = [
  "AI Agent & LLM Pipelines (LangGraph / Python / APIs)",
  "High-Performance Fullstack (Next.js 15 / TypeScript)",
  "Autonomous Systems & CRM Architect (APIs / Webhooks)",
  "UI/UX Design & Conversion Engineering",
  "DevOps, Edge Runtimes & Cloud Infrastructure",
];

const AVAILABILITY_OPTIONS = [
  "10 - 20 hrs/week (Flexible / Side Sprint)",
  "20 - 30 hrs/week (Part-Time Sprint Surge)",
  "40+ hrs/week (Full Sprint Engagement)",
  "Weekend Spot Surge Only",
];

export default function HiringPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialty: SPECIALTY_OPTIONS[0],
    availability: AVAILABILITY_OPTIONS[0],
    portfolio: "",
    experience: "",
  });

  const [isSpecialtyDropdownOpen, setIsSpecialtyDropdownOpen] = useState(false);
  const [isAvailabilityDropdownOpen, setIsAvailabilityDropdownOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-[#B8FF00] selection:text-black pb-20">
      {/* Top Header */}
      <SubpageHeader />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Early-Stage / Spot Instance Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-6 tracking-wider">
            <Radio className="w-3.5 h-3.5 text-[#B8FF00] animate-pulse" />
            <span>Early Stage &bull; On-Demand Spot Instance Model</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight mb-6 leading-tight">
            We hire when we have <br />
            <span className="text-[#B8FF00]">Real Client Surge.</span>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            We are just getting started and operate lean. Instead of traditional corporate hiring, we activate <strong className="text-white">Spot Instances</strong> — spinning up specialized talent pods precisely when an enterprise build or sprint requirement lands.
          </p>
        </div>

        {/* Early Stage Philosophy / How it Works Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#B8FF00]/10 border border-[#B8FF00]/20 flex items-center justify-center text-[#B8FF00] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">We Just Started</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We are building our core builder network. Zero corporate layers or endless interview loops — only high-calibre builders who ship fast.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-neutral-500">
              STAGE: EARLY SEED ROSTER
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-950/80 border border-[#B8FF00]/30 shadow-lg shadow-[#B8FF00]/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#B8FF00] text-black font-mono font-bold text-[10px] rounded-bl-xl">
              PRECISION MATCHING
            </div>
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#B8FF00] flex items-center justify-center text-black mb-4 shadow-md shadow-[#B8FF00]/30">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Requirement-Based</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                When a client signs for an autonomous AI pipeline or Next.js build, we match the best builder from our spot talent pool within 24 hours.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-[#B8FF00]">
              DEPLOY: 2-4 WEEK SPRINTS
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#B8FF00]/10 border border-[#B8FF00]/20 flex items-center justify-center text-[#B8FF00] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Milestone Payouts</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Work asynchronously with clear sprint milestones, competitive payouts per deliverable, and ongoing retainers for standout builders.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-neutral-500">
              REWARD: FAST PAYOUTS
            </div>
          </div>
        </div>

        {/* Application Form with Custom Dropdowns Matching Index */}
        <div id="apply" className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8FF00]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center mb-10 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#B8FF00]/10 border border-[#B8FF00]/25 flex items-center justify-center text-[#B8FF00] mx-auto mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading font-black text-white mb-3">
              Join the Spot Instance Network
            </h2>
            <p className="text-neutral-400 text-sm">
              We review submissions directly. As soon as a client project matching your stack is initialized, we ping you directly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="max-w-lg mx-auto p-8 rounded-2xl bg-neutral-900/80 border border-[#B8FF00]/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#B8FF00] text-black flex items-center justify-center mx-auto font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Application Received!</h3>
              <p className="text-sm text-neutral-300">
                You are now in the HandsFree Spot Instance pool. We will reach out directly on WhatsApp or Email when a matching requirement opens.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Rivera"
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8FF00] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Email / WhatsApp *</label>
                  <input
                    required
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8FF00] transition-colors"
                  />
                </div>
              </div>

              {/* Custom Styled Dropdown: Primary Specialty */}
              <div className="space-y-1.5 relative">
                <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Primary Specialty *</label>
                <button
                  type="button"
                  onClick={() => {
                    setIsSpecialtyDropdownOpen(!isSpecialtyDropdownOpen);
                    setIsAvailabilityDropdownOpen(false);
                  }}
                  className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-white text-sm flex items-center justify-between transition-all text-left"
                >
                  <span className="truncate pr-2">{formData.specialty}</span>
                  <ChevronDown className={`w-4 h-4 text-[#B8FF00] shrink-0 transition-transform ${isSpecialtyDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isSpecialtyDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 z-30 bg-neutral-950 border border-white/15 rounded-2xl p-1.5 shadow-2xl shadow-black overflow-hidden max-h-60 overflow-y-auto">
                    {SPECIALTY_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, specialty: opt });
                          setIsSpecialtyDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                          formData.specialty === opt
                            ? "bg-[#B8FF00]/10 text-[#B8FF00] font-bold"
                            : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                        }`}
                      >
                        <span>{opt}</span>
                        {formData.specialty === opt && <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Custom Styled Dropdown: Sprint Availability */}
              <div className="space-y-1.5 relative">
                <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Spot Sprint Availability *</label>
                <button
                  type="button"
                  onClick={() => {
                    setIsAvailabilityDropdownOpen(!isAvailabilityDropdownOpen);
                    setIsSpecialtyDropdownOpen(false);
                  }}
                  className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-white text-sm flex items-center justify-between transition-all text-left"
                >
                  <span>{formData.availability}</span>
                  <ChevronDown className={`w-4 h-4 text-[#B8FF00] shrink-0 transition-transform ${isAvailabilityDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isAvailabilityDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 z-30 bg-neutral-950 border border-white/15 rounded-2xl p-1.5 shadow-2xl shadow-black overflow-hidden">
                    {AVAILABILITY_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, availability: opt });
                          setIsAvailabilityDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                          formData.availability === opt
                            ? "bg-[#B8FF00]/10 text-[#B8FF00] font-bold"
                            : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                        }`}
                      >
                        <span>{opt}</span>
                        {formData.availability === opt && <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Portfolio / GitHub */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Portfolio / GitHub / Live URLs *</label>
                <input
                  required
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://github.com/your-username"
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8FF00] transition-colors"
                />
              </div>

              {/* Experience / Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">What have you built? (Brief Summary)</label>
                <textarea
                  rows={3}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Mention your key projects, production AI agents, or high-performance Next.js apps you have built..."
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8FF00] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#B8FF00] hover:bg-[#A3E600] text-black font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#B8FF00]/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>Submit Spot Instance Application</span>
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
