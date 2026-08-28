"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Globe, Calendar, FileText, Send, ShoppingCart, ShieldAlert, Truck, Sparkles, UserPlus, FolderKanban, CheckCircle2 } from "lucide-react";

export default function WorkflowStudio() {
  const [activeScenario, setActiveScenario] = useState<"inbound" | "ecom" | "client">("inbound");
  const [isRunning, setIsRunning] = useState(false);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [hudTime, setHudTime] = useState("0.00s");

  const scenarios = {
    inbound: {
      name: "Inbound Lead",
      title: "Scenario: B2B High-Ticket Inbound Lead",
      nodes: [
        { id: 1, icon: Globe, title: "Form Ingestion & GPT-4o Scoring", desc: "Captures intent & enriches revenue in 12ms", time: "0.12s" },
        { id: 2, icon: Calendar, title: "HubSpot Deal Auto-Created & Calendar Booked", desc: "Syncs pipeline stage & dispatches executive invite", time: "0.45s" },
        { id: 3, icon: FileText, title: "Dynamic Scope PDF & Video Breakdown", desc: "Assembles customized proposal packet automatically", time: "0.88s" },
        { id: 4, icon: Send, title: "Slack War-Room & Stripe Invoice Live", desc: "Team alerted in Slack + customer receives payment link", time: "1.24s" },
      ],
      logMessages: [
        "> [0.00s] HTTP POST /api/inbound/enterprise received",
        "> [0.12s] Payload parsed: { revenue: '$2M+', size: 25 }",
        "> [0.45s] GPT-4o Intent Score: 99/100 (Tier-1 Qualified)",
        "> [0.88s] HubSpot Deal ID #84920 Created & Assigned",
        "> [1.24s] Slack War-Room #lead-84920 Triggered. Complete.",
      ],
    },
    ecom: {
      name: "E-Commerce Pipeline",
      title: "Scenario: High-Volume Cart & Fraud Routing",
      nodes: [
        { id: 1, icon: ShoppingCart, title: "Checkout Event Captured via Stripe", desc: "Ingests webhook payload & verifies line-item inventory", time: "0.08s" },
        { id: 2, icon: ShieldAlert, title: "AI Fraud & Address Radar Check", desc: "Analyzes charge risk score via automated machine learning", time: "0.32s" },
        { id: 3, icon: Truck, title: "WMS 3PL Fulfillment Auto-Dispatched", desc: "Generates shipping label & provisions warehouse barcode", time: "0.74s" },
        { id: 4, icon: Sparkles, title: "Klaviyo VIP Upsell Flow Triggered", desc: "Calculates affinity score and triggers SMS tracking alert", time: "1.05s" },
      ],
      logMessages: [
        "> [0.00s] Stripe Webhook: charge.succeeded #ch_394829",
        "> [0.08s] Inventory reserved in warehouse cluster us-east-1",
        "> [0.32s] Radar Risk Score: 0.02 (Passed all safety checks)",
        "> [0.74s] FedEx Label printed & tracking # assigned",
        "> [1.05s] Customer SMS & Klaviyo post-purchase flow launched.",
      ],
    },
    client: {
      name: "Client Onboarding",
      title: "Scenario: Agency Zero-Touch Onboarding",
      nodes: [
        { id: 1, icon: UserPlus, title: "Signed Agreement via DocuSign / PandaDoc", desc: "Captures counter-signed NDA & master services agreement", time: "0.15s" },
        { id: 2, icon: FolderKanban, title: "Linear / ClickUp Workspace Auto-Built", desc: "Provisions sprint backlog, milestones, and client credentials", time: "0.52s" },
        { id: 3, icon: FileText, title: "Google Drive Folder & Shared Assets Shared", desc: "Creates organized assets hierarchy with automated permissions", time: "0.95s" },
        { id: 4, icon: CheckCircle2, title: "Slack Connect Channel & Welcome Video Sent", desc: "Automates welcome email with personalized loom walkthrough", time: "1.38s" },
      ],
      logMessages: [
        "> [0.00s] Contract executed: Master Services Agreement #4928",
        "> [0.15s] Stripe recurring subscription verified active",
        "> [0.52s] Linear board generated from template 'Enterprise-Sprint'",
        "> [0.95s] Google Drive shared folder permissions granted",
        "> [1.38s] Slack Connect invite dispatched. Zero manual hours.",
      ],
    },
  };

  const current = scenarios[activeScenario];

  function runPipeline() {
    if (isRunning) return;
    setIsRunning(true);
    setCompletedNodes([]);
    setLogs([`> [0.00s] PIPELINE TRIGGERED: ${activeScenario.toUpperCase()}`]);
    setHudTime("0.00s");

    current.nodes.forEach((node, idx) => {
      setTimeout(() => {
        setCompletedNodes((prev) => [...prev, node.id]);
        setHudTime(node.time);
        setLogs((prev) => [...prev, current.logMessages[idx + 1] || "> Task executed successfully"]);

        if (idx === current.nodes.length - 1) {
          setTimeout(() => {
            setLogs((prev) => [...prev, "> [COMPLETE] 100% HANDSFREE SUCCESS — 0ms MANUAL DELAY"]);
            setIsRunning(false);
          }, 300);
        }
      }, (idx + 1) * 450);
    });
  }

  return (
    <section id="studio" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs font-bold uppercase mb-3">
            Interactive Architecture
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight mb-3 text-white">
            HandsFree Workflow Studio
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Test live automation logic. Watch how HandsFree ingests triggers, runs AI decisions, and coordinates systems autonomously in sub-second speed.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {(["inbound", "ecom", "client"] as const).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveScenario(key);
                setCompletedNodes([]);
                setLogs([]);
                setIsRunning(false);
                setHudTime("0.00s");
              }}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                activeScenario === key
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
              }`}
            >
              {scenarios[key].name}
            </button>
          ))}
        </div>

        {/* Studio Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-10 shadow-2xl">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6 sm:mb-8">
            <div>
              <div className="font-mono text-xs text-blue-400 uppercase tracking-wider mb-1">
                Active Stream
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-2xl text-white">
                {current.title}
              </h3>
            </div>

            <button
              onClick={runPipeline}
              disabled={isRunning}
              className={`w-full sm:w-auto px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                isRunning
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:scale-105"
              }`}
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isRunning ? "Running..." : "Execute Pipeline"}</span>
            </button>
          </div>

          {/* Nodes Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
            {current.nodes.map((node) => {
              const Icon = node.icon;
              const isCompleted = completedNodes.includes(node.id);
              return (
                <div
                  key={node.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isCompleted
                      ? "bg-blue-950/40 border-blue-500/60 shadow-lg shadow-blue-500/10"
                      : "bg-slate-900/80 border-slate-800 opacity-70"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isCompleted ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span
                        className={`font-mono text-[11px] font-bold ${
                          isCompleted ? "text-emerald-400" : "text-slate-500"
                        }`}
                      >
                        {isCompleted ? "COMPLETED" : "READY"}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-white mb-1 leading-snug">
                      {node.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{node.desc}</p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between font-mono text-[10px] text-slate-500">
                    <span>STEP 0{node.id}</span>
                    <span className={isCompleted ? "text-cyan-400 font-bold" : ""}>
                      {isCompleted ? node.time : "--"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Telemetry Console */}
          <div className="bg-black rounded-2xl p-4 sm:p-6 border border-slate-800 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-900 text-slate-400 mb-3 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>TELEMETRY HUD</span>
              </div>
              <div>
                LATENCY: <span className="text-cyan-400 font-bold">{hudTime}</span>
              </div>
            </div>

            <div className="space-y-1.5 min-h-[90px] max-h-[120px] overflow-y-auto text-slate-300 text-[11px] sm:text-xs">
              {logs.length === 0 ? (
                <div className="text-slate-600 italic">
                  Press &apos;Execute Pipeline&apos; to simulate autonomous data processing...
                </div>
              ) : (
                logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={
                      idx === logs.length - 1 && log.includes("COMPLETE")
                        ? "text-emerald-400 font-bold bg-emerald-950/40 p-2 rounded"
                        : "text-slate-300"
                    }
                  >
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
