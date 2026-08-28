"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Sparkles, Coins } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

type CurrencyKey = "USD" | "EUR" | "GBP" | "INR" | "CAD" | "AUD";

interface CurrencyConfig {
  symbol: string;
  name: string;
  rateMultiplier: number;
}

const currencies: Record<CurrencyKey, CurrencyConfig> = {
  USD: { symbol: "$", name: "USD ($)", rateMultiplier: 1 },
  EUR: { symbol: "€", name: "EUR (€)", rateMultiplier: 0.92 },
  GBP: { symbol: "£", name: "GBP (£)", rateMultiplier: 0.78 },
  INR: { symbol: "₹", name: "INR (₹)", rateMultiplier: 83.5 },
  CAD: { symbol: "CA$", name: "CAD (CA$)", rateMultiplier: 1.36 },
  AUD: { symbol: "A$", name: "AUD (A$)", rateMultiplier: 1.52 },
};

export default function StatsCalculator() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyKey>("USD");
  const [teamSize, setTeamSize] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(65);
  const [wastedHours, setWastedHours] = useState(14);

  const curr = currencies[selectedCurrency];

  // Base calculations adjusted for selected currency rate
  const convertedHourlyRate = Math.round(hourlyRate * curr.rateMultiplier);
  const weeklyHoursSaved = teamSize * wastedHours * 0.85;
  const annualHoursSaved = Math.round(weeklyHoursSaved * 48);
  const annualPayrollSaved = Math.round(annualHoursSaved * convertedHourlyRate);
  const estimatedRevenueLift = Math.round(annualPayrollSaved * 2.4);

  const stats = [
    { value: 99.8, decimals: 1, suffix: "%", label: "Automation Accuracy" },
    { value: 3.8, decimals: 1, suffix: "x", label: "Avg Conversion Jump" },
    { value: 420, decimals: 0, suffix: "k+", label: "Hours Eliminated" },
    { value: Math.round(14 * curr.rateMultiplier), decimals: 0, prefix: curr.symbol, suffix: "M+", label: "Client Revenue" },
  ];

  return (
    <section id="calculator" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Counting Stats Row - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-24">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 text-center shadow-sm hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-blue-600 mb-1 sm:mb-2">
                <AnimatedCounter
                  value={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Matrix Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-3xl p-5 sm:p-10 lg:p-14 border border-slate-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8 sm:mb-12">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-400 font-mono text-[10px] sm:text-xs font-bold uppercase mb-2 sm:mb-3">
                Compounding Leverage
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-2 sm:mb-4">
                Calculate Your HandsFree ROI
              </h2>
              <p className="text-slate-400 text-xs sm:text-base">
                Adjust your team metrics and choose your local currency to calculate manual waste and revenue upside.
              </p>
            </div>

            {/* Currency Selector Pill */}
            <div className="bg-slate-950/80 p-1.5 sm:p-2 rounded-2xl border border-slate-800 flex flex-wrap items-center gap-1 shrink-0 self-start lg:self-center">
              <div className="flex items-center gap-1 px-2 py-1 text-slate-400 font-mono text-[11px]">
                <Coins className="w-3 h-3 text-cyan-400" />
                <span className="hidden sm:inline">Currency:</span>
              </div>
              {(Object.keys(currencies) as CurrencyKey[]).map((cKey) => (
                <button
                  key={cKey}
                  onClick={() => setSelectedCurrency(cKey)}
                  className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl font-mono text-[11px] sm:text-xs font-bold transition-all ${
                    selectedCurrency === cKey
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
                      : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {cKey}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-slate-300">
                    Team Size (Impacted employees)
                  </label>
                  <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/50">
                    {teamSize} people
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-slate-300">
                    Blended Hourly Rate ({curr.symbol}/hr)
                  </label>
                  <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/50">
                    {curr.symbol}{convertedHourlyRate}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="250"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-slate-300">
                    Wasted Hours / Week (Manual Drag)
                  </label>
                  <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/50">
                    {wastedHours} hrs/wk
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="35"
                  value={wastedHours}
                  onChange={(e) => setWastedHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                <span className="text-[11px] font-mono text-slate-500 self-center mr-1">Presets:</span>
                {[
                  { name: "5-Startup", team: 5, rate: 50, hours: 10 },
                  { name: "15-Agency", team: 15, rate: 75, hours: 16 },
                  { name: "50-Scaleup", team: 50, rate: 95, hours: 20 },
                ].map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setTeamSize(p.team);
                      setHourlyRate(p.rate);
                      setWastedHours(p.hours);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px] border border-slate-700 transition-colors"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Card (5 cols) with Spring Interpolated Counters */}
            <div className="lg:col-span-5 bg-gradient-to-b from-blue-900/40 to-slate-900/90 border border-blue-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Annual Value Unlocked ({selectedCurrency})</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black/50 p-3.5 sm:p-4 rounded-2xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono mb-1">Time Reclaimed / Year</div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    <AnimatedCounter value={annualHoursSaved} suffix=" hrs" />
                  </div>
                </div>

                <div className="bg-black/50 p-3.5 sm:p-4 rounded-2xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono mb-1">Direct Payroll Leakage Saved</div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-emerald-400 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                    <AnimatedCounter value={annualPayrollSaved} prefix={curr.symbol} />
                  </div>
                </div>

                <div className="bg-blue-950/60 p-3.5 sm:p-4 rounded-2xl border border-blue-500/50">
                  <div className="text-[11px] text-cyan-300 font-mono mb-1">Estimated Growth Multiplier Lift</div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-cyan-300 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    <AnimatedCounter value={estimatedRevenueLift} prefix={`+${curr.symbol}`} suffix=" / yr" />
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="block text-center w-full py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all text-sm sm:text-base"
              >
                Eliminate This Waste ({selectedCurrency})
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
