"use client";

import HiringPage from "../hiring/page";

export default HiringPage;


const SPOT_ROLES = [
  {
    title: "AI Agent Orchestration Engineer",
    type: "Spot Instance / Sprint Contract",
    stack: "LangGraph, OpenAI / Anthropic APIs, Python, FastAPI, Vector DBs",
    desc: "Build autonomous multi-agent pipelines, self-healing tool-use agents, and real-time CRM synchronizations.",
    status: "Surge Requirement",
  },
  {
    title: "High-Performance Fullstack (Next.js)",
    type: "Spot Instance / Sprint Contract",
    stack: "Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Edge Runtimes",
    desc: "Craft sub-second, conversion-engineered user interfaces and hyper-responsive web applications.",
    status: "Open Roster",
  },
  {
    title: "Autonomous Growth & Systems Architect",
    type: "Spot Instance / Milestone Retainer",
    stack: "HubSpot / Salesforce APIs, Make, Webhooks, WhatsApp Cloud API, Retool",
    desc: "Design end-to-end inbound capture, enrichment, dynamic billing, and zero-touch lead routing engines.",
    status: "Open Roster",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-[#B8FF00] selection:text-black">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/logo-icon-tight.png"
                alt="HandsFree"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-heading font-black text-xl tracking-tight text-white leading-none">
              <span>Hands</span><span className="text-[#B8FF00]">Free</span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white hover:border-[#B8FF00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-6">
            <Flame className="w-3.5 h-3.5 text-[#B8FF00]" />
            <span>Spot Instance Hiring Model</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight mb-6">
            We scale talent like <span className="text-[#B8FF00]">Spot Instances</span>.
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            HandsFree operates on a high-velocity, precision model. Based on real-time client requirements and sprint surges, we dynamically spin up specialized talent pods (&ldquo;Spot Instances&rdquo;) to build, ship, and automate at lightning speed.
          </p>
        </div>

        {/* How Spot Instance Model Works */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-3xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/20 flex items-center justify-center text-[#B8FF00] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. Join the Roster</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Submit your profile, GitHub, and domain specialty (AI Agents, Next.js, or API Infrastructure) to our verified engineer pool.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-950/80 border border-[#B8FF00]/30 shadow-lg shadow-[#B8FF00]/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#B8FF00] text-black font-mono font-bold text-[10px] rounded-bl-xl">
              DYNAMIC ALLOCATION
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#B8FF00] flex items-center justify-center text-black mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Spot Deployment</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                When a high-intent enterprise sprint matches your exact stack, you are matched into a 2-4 week sprint pod with zero corporate bureaucracy.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/20 flex items-center justify-center text-[#B8FF00] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. Top-Tier Compensation</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Receive top-of-market sprint payouts with milestone completions, async flexibility, and recurring retainers for high performers.
              </p>
            </div>
          </div>
        </div>

        {/* Active Spot Profiles Needed */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-white">
                Active Requirement Profiles
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Profiles we are currently activating for upcoming sprint batches:
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Dispatch
            </span>
          </div>

          <div className="space-y-4">
            {SPOT_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#B8FF00]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg font-bold text-white">{role.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300">
                      {role.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[11px] font-mono text-[#B8FF00] font-bold">
                      {role.status}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-300 max-w-2xl">{role.desc}</p>
                  <div className="text-xs font-mono text-neutral-500">
                    <strong className="text-neutral-400">Stack:</strong> {role.stack}
                  </div>
                </div>

                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-[#B8FF00] text-neutral-200 hover:text-black font-bold text-xs transition-all shrink-0"
                >
                  <span>Apply for Spot</span>
                  <Zap className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply" className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-white/10 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="w-12 h-12 rounded-2xl bg-[#B8FF00]/10 border border-[#B8FF00]/25 flex items-center justify-center text-[#B8FF00] mx-auto mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading font-black text-white mb-3">
              Join the HandsFree Spot Network
            </h2>
            <p className="text-neutral-400 text-sm">
              Tell us your specialty. When an enterprise project matches your stack, we&apos;ll reach out immediately.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your profile has been added to our Spot Instance talent roster. We will reach out when matching requirements open.");
            }}
            className="max-w-xl mx-auto space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#B8FF00]"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase mb-1.5">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#B8FF00]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase mb-1.5">Primary Specialty *</label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#B8FF00]"
                >
                  <option>AI Agents & LLM Pipelines</option>
                  <option>Next.js / Frontend Engineering</option>
                  <option>Backend & System Orchestration</option>
                  <option>Automation & CRM Architect</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase mb-1.5">Portfolio / GitHub *</label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/username"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#B8FF00]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase mb-1.5">Notable Projects / Availability</label>
              <textarea
                rows={3}
                placeholder="Share your experience building fast web apps or AI pipelines, and how many hours/week you can dedicate to spot sprints..."
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#B8FF00] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#B8FF00] hover:bg-[#A3E600] text-black font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#B8FF00]/25 transition-all hover:scale-[1.02]"
            >
              <Send className="w-4 h-4" />
              <span>Submit Spot Instance Application</span>
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>&copy; {new Date().getFullYear()} HandsFree Systems Inc.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#B8FF00] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#B8FF00] transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-[#B8FF00] transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
