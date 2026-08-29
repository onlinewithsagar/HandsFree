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
  USD: { symbol: "$", name: "USD", rateMultiplier: 1 },
  EUR: { symbol: "€", name: "EUR", rateMultiplier: 0.92 },
  GBP: { symbol: "£", name: "GBP", rateMultiplier: 0.78 },
  INR: { symbol: "₹", name: "INR", rateMultiplier: 83.5 },
};

export default function StatsCalculator() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyKey>("USD");
  const [teamSize, setTeamSize] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(60);
  const [wastedHours, setWastedHours] = useState(12);

  const curr = currencies[selectedCurrency];

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
        <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl shadow-black">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div>
              <div className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-wider mb-1">
                ROI Calculator
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Estimate Your Revenue Lift
              </h2>
            </div>

            {/* Currency Pill */}
            <div className="flex items-center gap-1.5 bg-neutral-900 p-1.5 rounded-xl border border-white/10 self-start sm:self-auto">
              <Coins className="w-3.5 h-3.5 text-[#B8FF00] ml-1.5" />
              {(Object.keys(currencies) as CurrencyKey[]).map((cKey) => (
                <button
                  key={cKey}
                  onClick={() => setSelectedCurrency(cKey)}
                  className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold transition-all ${
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
            {/* Sliders (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
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
                  max="50"
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
                    {curr.symbol}{convertedHourlyRate}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="5"
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
            <div className="lg:col-span-6 bg-neutral-900/90 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
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
                <div className="font-heading font-black text-2xl sm:text-3xl text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#B8FF00]" />
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
