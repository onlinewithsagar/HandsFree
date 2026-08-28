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
    <section id="calculator" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROI Matrix Container */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-2xl">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
                ROI Calculator
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Estimate Your Revenue Lift
              </h2>
            </div>

            {/* Currency Pill */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-start sm:self-auto">
              <Coins className="w-3.5 h-3.5 text-cyan-400 ml-1.5" />
              {(Object.keys(currencies) as CurrencyKey[]).map((cKey) => (
                <button
                  key={cKey}
                  onClick={() => setSelectedCurrency(cKey)}
                  className={`px-2.5 py-1 rounded-lg font-mono text-xs font-bold transition-all ${
                    selectedCurrency === cKey
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
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
                  <label className="text-xs font-semibold text-slate-300">
                    Team Size
                  </label>
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    {teamSize} people
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Hourly Rate ({curr.symbol}/hr)
                  </label>
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
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
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Manual Wasted Hours / Week
                  </label>
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    {wastedHours} hrs/wk
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="30"
                  value={wastedHours}
                  onChange={(e) => setWastedHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>

            {/* Results Display (6 cols) */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono mb-0.5">Time Saved / Yr</div>
                  <div className="font-heading font-black text-xl sm:text-2xl text-white">
                    <AnimatedCounter value={annualHoursSaved} suffix=" hrs" />
                  </div>
                </div>

                <div className="bg-black/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono mb-0.5">Payroll Reclaimed</div>
                  <div className="font-heading font-black text-xl sm:text-2xl text-emerald-400">
                    <AnimatedCounter value={annualPayrollSaved} prefix={curr.symbol} />
                  </div>
                </div>
              </div>

              <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-500/50">
                <div className="text-[11px] text-cyan-300 font-mono mb-0.5">Projected Revenue Upside</div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-cyan-300 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <AnimatedCounter value={estimatedRevenueLift} prefix={`+${curr.symbol}`} suffix=" / yr" />
                </div>
              </div>

              <a
                href="#contact"
                className="block text-center w-full py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all text-sm shadow-md shadow-blue-500/30"
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
