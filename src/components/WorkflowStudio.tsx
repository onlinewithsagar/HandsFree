"use client";

import { useState } from "react";
import { Play, Globe, Calendar, FileText, Send, ShoppingCart, ShieldAlert, Truck, Sparkles, UserPlus, FolderKanban, CheckCircle2 } from "lucide-react";

export default function WorkflowStudio() {
  const [activeScenario, setActiveScenario] = useState<"inbound" | "ecom" | "client">("inbound");
  const [isRunning, setIsRunning] = useState(false);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [hudTime, setHudTime] = useState("0.00s");

  const scenarios = {
    inbound: {
      name: "Inbound Lead",
      nodes: [
        { id: 1, icon: Globe, title: "Form Ingestion & GPT-4o Scoring", desc: "Intent classified in 12ms", time: "0.12s" },
        { id: 2, icon: Calendar, title: "HubSpot Deal & Auto-Booking", desc: "Pipeline synchronized", time: "0.45s" },
        { id: 3, icon: FileText, title: "Dynamic Scope Packet", desc: "Automated custom deck", time: "0.88s" },
        { id: 4, icon: Send, title: "Slack War-Room & Invoice", desc: "Zero manual delay", time: "1.24s" },
      ],
    },
    ecom: {
      name: "E-Commerce",
      nodes: [
        { id: 1, icon: ShoppingCart, title: "Checkout Event Captured", desc: "Line-item verification", time: "0.08s" },
        { id: 2, icon: ShieldAlert, title: "AI Fraud Radar Check", desc: "Automated risk scoring", time: "0.32s" },
        { id: 3, icon: Truck, title: "3PL Fulfillment Dispatch", desc: "Label generated", time: "0.74s" },
        { id: 4, icon: Sparkles, title: "VIP Upsell Flow", desc: "SMS alert triggered", time: "1.05s" },
      ],
    },
    client: {
      name: "Onboarding",
      nodes: [
        { id: 1, icon: UserPlus, title: "Signed Agreement Intake", desc: "NDA & contract indexed", time: "0.15s" },
        { id: 2, icon: FolderKanban, title: "Linear Workspace Provisioned", desc: "Milestones assigned", time: "0.52s" },
        { id: 3, icon: FileText, title: "Google Drive Asset Share", desc: "Permissions granted", time: "0.95s" },
        { id: 4, icon: CheckCircle2, title: "Slack Connect & Welcome", desc: "Instant onboarding", time: "1.38s" },
      ],
    },
  };

  const current = scenarios[activeScenario];

  function runPipeline() {
    if (isRunning) return;
    setIsRunning(true);
    setCompletedNodes([]);
    setHudTime("0.00s");

    current.nodes.forEach((node, idx) => {
      setTimeout(() => {
        setCompletedNodes((prev) => [...prev, node.id]);
        setHudTime(node.time);

        if (idx === current.nodes.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 380);
    });
  }

  return (
    <section id="studio" className="py-20 sm:py-28 bg-black text-white relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#B8FF00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-ping" />
              Workflow Studio
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
              Autonomous Systems in Motion
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-neutral-950 p-1.5 rounded-2xl border border-white/10">
            {(["inbound", "ecom", "client"] as const).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveScenario(key);
                  setCompletedNodes([]);
                  setIsRunning(false);
                  setHudTime("0.00s");
                }}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                  activeScenario === key
                    ? "bg-[#B8FF00] text-black shadow-md shadow-[#B8FF00]/25"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {scenarios[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Pipeline Container */}
        <div className="bg-neutral-950 border border-white/10 rounded-3xl p-5 sm:p-8 shadow-2xl shadow-black relative">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8FF00] animate-pulse"></span>
              <span className="font-mono text-xs text-neutral-400">
                LATENCY: <strong className="text-[#B8FF00]">{hudTime}</strong>
              </span>
            </div>

            <button
              onClick={runPipeline}
              disabled={isRunning}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                isRunning
                  ? "bg-neutral-900 text-neutral-600 cursor-not-allowed border border-white/5"
                  : "bg-[#B8FF00] hover:bg-[#A3E600] text-black shadow-lg shadow-[#B8FF00]/25 hover:scale-[1.02]"
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-black text-black" />
              <span>{isRunning ? "Simulating..." : "Test Pipeline"}</span>
            </button>
          </div>

          {/* Clean 4-Node Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {current.nodes.map((node) => {
              const Icon = node.icon;
              const isCompleted = completedNodes.includes(node.id);
              return (
                <div
                  key={node.id}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isCompleted
                      ? "bg-neutral-900 border-[#B8FF00]/60 shadow-[0_0_20px_rgba(184,255,0,0.15)]"
                      : "bg-neutral-950/80 border-white/5 opacity-60"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isCompleted ? "bg-[#B8FF00] text-black shadow-sm" : "bg-neutral-900 text-neutral-500"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`font-mono text-[10px] font-bold ${
                          isCompleted ? "text-[#B8FF00]" : "text-neutral-600"
                        }`}
                      >
                        {isCompleted ? "COMPLETED" : "READY"}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-white mb-1 leading-snug">
                      {node.title}
                    </h4>
                    <p className="text-xs text-neutral-400">{node.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                    <span>STEP 0{node.id}</span>
                    <span className={isCompleted ? "text-[#B8FF00] font-bold" : ""}>
                      {isCompleted ? node.time : "--"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
