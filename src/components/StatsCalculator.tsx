"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Sparkles, Coins } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

type CurrencyKey = "USD" | "EUR" | "GBP" | "INR";

interface CurrencyConfig {
  symbol: string;
  name: string;
  rateMultiplier: number;
}

const currencies: Record<CurrencyKey, CurrencyConfig> = {
  INR: { symbol: "₹", name: "INR", rateMultiplier: 1 },
  USD: { symbol: "$", name: "USD", rateMultiplier: 0.012 },
  EUR: { symbol: "€", name: "EUR", rateMultiplier: 0.011 },
  GBP: { symbol: "£", name: "GBP", rateMultiplier: 0.0094 },
};

export default function StatsCalculator() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyKey>("INR");
  const [teamSize, setTeamSize] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(1500); // Base in INR
  const [wastedHours, setWastedHours] = useState(10);

  const curr = currencies[selectedCurrency];

  // Converted value for display and math
  const convertedHourlyRate = Math.round(hourlyRate * curr.rateMultiplier);
  const weeklyHoursSaved = teamSize * wastedHours * 0.85;
  const annualHoursSaved = Math.round(weeklyHoursSaved * 48);
  const annualPayrollSaved = Math.round(annualHoursSaved * convertedHourlyRate);
  const estimatedRevenueLift = Math.round(annualPayrollSaved * 2.4);

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-black relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#B8FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ROI Matrix Container */}
        <div className="bg-neutral-950 text-white rounded-3xl p-5 sm:p-8 lg:p-12 border border-white/10 shadow-2xl shadow-black">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6 sm:mb-8">
            <div>
              <div className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-wider mb-1">
                ROI Calculator
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Estimate Your Revenue Lift
              </h2>
            </div>

            {/* Currency Pill */}
            <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900 p-1.5 rounded-xl border border-white/10 w-full sm:w-auto">
              <Coins className="w-3.5 h-3.5 text-[#B8FF00] ml-1.5 hidden xs:inline-block" />
              {(Object.keys(currencies) as CurrencyKey[]).map((cKey) => (
                <button
                  key={cKey}
                  onClick={() => setSelectedCurrency(cKey)}
                  className={`flex-1 sm:flex-none px-3 py-1 rounded-lg font-mono text-xs font-bold transition-all text-center ${
                    selectedCurrency === cKey
                      ? "bg-[#B8FF00] text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {cKey}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders & Presets (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Quick Presets */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => { setTeamSize(4); setHourlyRate(1000); setWastedHours(6); }}
                  className="px-3 py-1 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#B8FF00] text-neutral-300 text-xs font-mono font-bold transition-all"
                >
                  Startup (4)
                </button>
                <button
                  onClick={() => { setTeamSize(12); setHourlyRate(2500); setWastedHours(12); }}
                  className="px-3 py-1 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#B8FF00] text-neutral-300 text-xs font-mono font-bold transition-all"
                >
                  Agency (12)
                </button>
                <button
                  onClick={() => { setTeamSize(30); setHourlyRate(4500); setWastedHours(18); }}
                  className="px-3 py-1 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#B8FF00] text-neutral-300 text-xs font-mono font-bold transition-all"
                >
                  Enterprise (30)
                </button>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-neutral-300">
                    Team Size
                  </label>
                  <span className="font-mono text-xs font-bold text-[#B8FF00] bg-[#B8FF00]/10 px-2 py-0.5 rounded border border-[#B8FF00]/30">
                    {teamSize} people
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="60"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#B8FF00]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-neutral-300">
                    Hourly Rate ({curr.symbol}/hr)
                  </label>
                  <span className="font-mono text-xs font-bold text-[#B8FF00] bg-[#B8FF00]/10 px-2 py-0.5 rounded border border-[#B8FF00]/30">
                    {curr.symbol}{convertedHourlyRate.toLocaleString()}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="8000"
                  step="250"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#B8FF00]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-neutral-300">
                    Manual Wasted Hours / Week
                  </label>
                  <span className="font-mono text-xs font-bold text-[#B8FF00] bg-[#B8FF00]/10 px-2 py-0.5 rounded border border-[#B8FF00]/30">
                    {wastedHours} hrs/wk
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  value={wastedHours}
                  onChange={(e) => setWastedHours(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#B8FF00]"
                />
              </div>
            </div>

            {/* Results Display (6 cols) */}
            <div className="lg:col-span-6 bg-neutral-900/90 border border-white/10 rounded-2xl p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-black/80 p-3.5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-neutral-400 font-mono mb-0.5">Time Saved / Yr</div>
                  <div className="font-heading font-black text-xl sm:text-2xl text-white">
                    <AnimatedCounter value={annualHoursSaved} suffix=" hrs" />
                  </div>
                </div>

                <div className="bg-black/80 p-3.5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-neutral-400 font-mono mb-0.5">Payroll Reclaimed</div>
                  <div className="font-heading font-black text-xl sm:text-2xl text-[#B8FF00]">
                    <AnimatedCounter value={annualPayrollSaved} prefix={curr.symbol} />
                  </div>
                </div>
              </div>

              <div className="bg-black p-4 rounded-xl border border-[#B8FF00]/30 shadow-[0_0_20px_rgba(184,255,0,0.1)]">
                <div className="text-[11px] text-[#B8FF00] font-mono mb-0.5">Projected Revenue Upside</div>
                <div className="font-heading font-black text-xl sm:text-3xl text-white flex items-center gap-2 flex-wrap">
                  <TrendingUp className="w-5 h-5 text-[#B8FF00] shrink-0" />
                  <AnimatedCounter value={estimatedRevenueLift} prefix={`+${curr.symbol}`} suffix=" / yr" />
                </div>
              </div>

              <a
                href="#contact"
                className="block text-center w-full py-3.5 rounded-xl font-bold text-black bg-[#B8FF00] hover:bg-[#A3E600] transition-all text-sm shadow-lg shadow-[#B8FF00]/25 hover:scale-[1.01]"
              >
                Eliminate This Waste
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
