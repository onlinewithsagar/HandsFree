"use client";

import { useState, useRef, useEffect } from "react";
import {
  Globe,
  Calendar,
  FileText,
  MessageSquare,
  ShoppingCart,
  Zap,
  Smartphone,
  CreditCard,
  PenTool,
  FolderOpen,
  Briefcase,
  CheckCircle2,
  Activity,
  Play,
  RotateCcw,
} from "lucide-react";

interface NodeItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  time: string;
}

interface Scenario {
  title: string;
  nodes: NodeItem[];
  logs: string[];
}

const SCENARIOS: Record<string, Scenario> = {
  inbound: {
    title: "High-Value Client Inquiry",
    nodes: [
      { id: 1, icon: <Globe className="w-4 h-4 text-[#B8FF00]" />, title: "Capture & Score", desc: "Evaluates the lead instantly", time: "0.12s" },
      { id: 2, icon: <Calendar className="w-4 h-4 text-[#B8FF00]" />, title: "Book Meeting", desc: "Adds to CRM & sends calendar invite", time: "0.45s" },
      { id: 3, icon: <FileText className="w-4 h-4 text-[#B8FF00]" />, title: "Create Proposal", desc: "Drafts a custom pricing document", time: "0.88s" },
      { id: 4, icon: <MessageSquare className="w-4 h-4 text-[#B8FF00]" />, title: "Alert Team", desc: "Notifies staff & preps invoice", time: "1.24s" },
    ],
    logs: [
      "> [0.00s] New enterprise inquiry received",
      "> [0.12s] Lead evaluated: Highly Qualified",
      "> [0.45s] Meeting booked & CRM updated",
      "> [0.88s] Custom proposal generated",
      "> [1.24s] Team notified in Slack & Invoice ready",
      "> [1.32s] Task finished completely hands-free",
    ],
  },
  ecom: {
    title: "Abandoned Cart Recovery",
    nodes: [
      { id: 1, icon: <ShoppingCart className="w-4 h-4 text-[#B8FF00]" />, title: "Cart Abandoned", desc: "Customer leaves without buying", time: "0.08s" },
      { id: 2, icon: <Zap className="w-4 h-4 text-[#B8FF00]" />, title: "Generate Discount", desc: "Creates a unique 10% off code", time: "0.34s" },
      { id: 3, icon: <Smartphone className="w-4 h-4 text-[#B8FF00]" />, title: "Send Message", desc: "Texts the customer a checkout link", time: "0.72s" },
      { id: 4, icon: <CreditCard className="w-4 h-4 text-[#B8FF00]" />, title: "Process Sale", desc: "Secures payment & updates stock", time: "1.10s" },
    ],
    logs: [
      "> [0.00s] Customer abandoned cart ($420)",
      "> [0.08s] Customer profile identified",
      "> [0.34s] Created unique 10% discount code",
      "> [0.72s] Sent recovery SMS / WhatsApp message",
      "> [1.10s] Sale recovered automatically",
      "> [1.15s] Process completed with no human effort",
    ],
  },
  client: {
    title: "New Client Onboarding",
    nodes: [
      { id: 1, icon: <PenTool className="w-4 h-4 text-[#B8FF00]" />, title: "Contract Signed", desc: "Client signs agreement online", time: "0.10s" },
      { id: 2, icon: <FolderOpen className="w-4 h-4 text-[#B8FF00]" />, title: "Setup Workspace", desc: "Creates shared folders & boards", time: "0.52s" },
      { id: 3, icon: <CreditCard className="w-4 h-4 text-[#B8FF00]" />, title: "Start Billing", desc: "Charges invoice & sets up retainer", time: "0.94s" },
      { id: 4, icon: <Briefcase className="w-4 h-4 text-[#B8FF00]" />, title: "Welcome Client", desc: "Emails access links & next steps", time: "1.41s" },
    ],
    logs: [
      "> [0.00s] Contract signature received",
      "> [0.10s] Copying standard project templates",
      "> [0.52s] Shared cloud folders & Linear board created",
      "> [0.94s] Retainer billing activated ($4,500)",
      "> [1.41s] Welcome email sent to client",
      "> [1.48s] Onboarding finished successfully",
    ],
  },
};

export default function WorkflowStudio() {
  const [activeScenario, setActiveScenario] = useState<"inbound" | "ecom" | "client">("inbound");
  const [isPipelineRunning, setIsPipelineRunning] = useState(false);
  const [executionStep, setExecutionStep] = useState(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [executionStep]);

  const runPipeline = () => {
    if (isPipelineRunning) return;
    setIsPipelineRunning(true);
    setExecutionStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setExecutionStep(step);

      if (step >= SCENARIOS[activeScenario].nodes.length + 1) {
        clearInterval(interval);
        setTimeout(() => setIsPipelineRunning(false), 400);
      }
    }, 600);
  };

  const handleScenarioChange = (key: "inbound" | "ecom" | "client") => {
    if (isPipelineRunning) return;
    setActiveScenario(key);
    setExecutionStep(0);
  };

  const scenario = SCENARIOS[activeScenario];

  return (
    <section id="studio" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#B8FF00]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-neutral-950 border border-white/10 overflow-hidden shadow-2xl shadow-black p-4 sm:p-6 lg:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Controls & Flow Nodes (7 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-ping" />
                  Interactive Workflow Studio
                </div>
                <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-3">
                  Autonomous Systems in Motion
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base mb-6 leading-relaxed">
                  Pick a real-world scenario and watch our autonomous agents execute complex pipelines in sub-seconds with zero manual drag.
                </p>

                {/* Scenario Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-8 bg-neutral-900/80 p-1.5 rounded-2xl border border-white/5">
                  {(["inbound", "ecom", "client"] as const).map((key) => {
                    const isActive = activeScenario === key;
                    return (
                      <button
                        key={key}
                        onClick={() => handleScenarioChange(key)}
                        disabled={isPipelineRunning}
                        className={`flex-1 sm:flex-none px-4 py-2 text-xs font-mono font-bold rounded-xl transition-all ${
                          isActive
                            ? "bg-[#B8FF00] text-black shadow-md shadow-[#B8FF00]/25"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        {key === "inbound" ? "Lead Flow" : key === "ecom" ? "Cart Recovery" : "Onboarding"}
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Node Sequence */}
                <div className="space-y-4 mb-6">
                  {scenario.nodes.map((n, idx) => {
                    const isComplete = executionStep > idx;
                    const isActive = executionStep === idx + 1 && isPipelineRunning;

                    return (
                      <div key={n.id} className="relative flex items-start gap-4">
                        {idx !== scenario.nodes.length - 1 && (
                          <div
                            className={`absolute top-9 left-[1.15rem] w-[2px] h-[calc(100%+0.25rem)] transition-colors duration-500 ${
                              isComplete ? "bg-[#B8FF00]" : "bg-white/10"
                            }`}
                          />
                        )}

                        <div
                          className={`relative z-10 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isComplete
                              ? "bg-[#B8FF00] text-black shadow-[0_0_15px_rgba(184,255,0,0.35)]"
                              : isActive
                              ? "bg-neutral-900 text-[#B8FF00] border border-[#B8FF00] animate-pulse"
                              : "bg-neutral-900 text-neutral-500 border border-white/10"
                          }`}
                        >
                          {isComplete ? <CheckCircle2 className="w-4 h-4 text-black stroke-[3]" /> : n.icon}
                        </div>

                        <div
                          className={`pt-0.5 transition-opacity duration-300 flex-1 ${
                            isComplete || isActive ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-white">{n.title}</h4>
                            <span className="font-mono text-[10px] text-neutral-500">{n.time}</span>
                          </div>
                          <p className="text-xs text-neutral-400">{n.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Mock Orchestrator Terminal (5 cols) */}
            <div className="lg:col-span-6 bg-black rounded-2xl border border-white/10 flex flex-col overflow-hidden shadow-2xl min-h-[380px]">
              {/* Terminal Window Header */}
              <div className="bg-neutral-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-neutral-400 ml-2">handsfree_orchestrator.sh</span>
                </div>

                <button
                  onClick={runPipeline}
                  disabled={isPipelineRunning}
                  className="px-3.5 py-1.5 bg-[#B8FF00] hover:bg-[#A3E600] disabled:opacity-50 text-black font-bold text-xs rounded-lg transition-all flex items-center gap-1.5"
                >
                  {isPipelineRunning ? (
                    <>
                      <Activity className="w-3.5 h-3.5 animate-spin" />
                      <span>Executing...</span>
                    </>
                  ) : executionStep > 0 ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Re-Run</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>Execute</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Console Logs */}
              <div className="p-5 flex-1 font-mono text-xs text-neutral-300 flex flex-col justify-between overflow-y-auto space-y-2.5 bg-black/95">
                <div className="space-y-2">
                  <div className="text-neutral-500 pb-2 border-b border-white/5">
                    <div># Target Pipeline: {scenario.title}</div>
                    <div># Environment: Autonomous Edge Cluster</div>
                  </div>

                  {isPipelineRunning || executionStep > 0 ? (
                    <div className="text-[#B8FF00] font-bold">&gt; [0.00s] SYSTEM TRIGGER: INITIATING PIPELINE...</div>
                  ) : (
                    <div className="text-neutral-600 italic">&gt; Ready for trigger. Click &apos;Execute&apos; above.</div>
                  )}

                  {scenario.logs.slice(0, executionStep + 1).map((log, i) => (
                    <div key={i} className="text-neutral-200">
                      {log}
                    </div>
                  ))}

                  {executionStep >= scenario.nodes.length && (
                    <div className="pt-2 text-[#B8FF00] font-bold">
                      &gt; SEQUENCE COMPLETED IN {scenario.nodes[scenario.nodes.length - 1].time} (100% HANDS-FREE)
                    </div>
                  )}

                  <div ref={terminalEndRef} />
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-500">
                  <span>STATUS: {isPipelineRunning ? "ACTIVE PIPELINE" : "STANDBY"}</span>
                  <span>ZERO-TOUCH ARCHITECTURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
