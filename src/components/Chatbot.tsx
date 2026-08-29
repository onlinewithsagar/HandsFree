"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bot, User, RotateCcw, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ChatStep {
  id: string;
  question: string;
  answer: string;
  followUps?: string[]; // IDs of follow up questions
}

// Interactive Guided Decision Tree Questions & Follow-ups
const KNOWLEDGE_GRAPH: Record<string, ChatStep> = {
  root_services: {
    id: "root_services",
    question: "What core solutions does HandsFree build?",
    answer:
      "HandsFree specializes in 3 high-impact pillars:\n1. ⚡ High-Speed Next.js Web Apps: Sub-second conversion-focused platforms.\n2. 🤖 AI Agent Pipelines: Multi-model autonomous systems that classify, route, and respond.\n3. 🔄 Zero-Touch Operations: Bidirectional CRM syncs (HubSpot/Salesforce) and automated Stripe billing.",
    followUps: ["q_web_tech", "q_ai_types", "q_crm_stripe"],
  },
  root_pricing: {
    id: "root_pricing",
    question: "How does pricing & project scoping work?",
    answer:
      "We operate on fixed sprint deliverables or ongoing growth retainers:\n• Sprint Deliverables: Fixed timeline, clear ROI milestones, and zero scope creep.\n• Zero-Touch Operations: Dedicated autonomous infrastructure & continuous model optimization.\n\nYou can use our interactive ROI Matrix on the homepage to calculate your exact payroll savings!",
    followUps: ["q_roi_calc", "q_book_sprint"],
  },
  root_timeline: {
    id: "root_timeline",
    question: "How quickly can we launch a project?",
    answer:
      "Our sprint model is engineered for rapid execution:\n• Rapid Web App Sprints: 7 to 14 days to production.\n• AI Automation Pipelines: 3 to 7 days to deploy live in your staging/production environments.\n• Full-Stack Trifecta: 3 to 4 weeks for complete website + AI backend plumbing.",
    followUps: ["q_book_sprint", "q_support"],
  },
  root_security: {
    id: "root_security",
    question: "How do you ensure data security & privacy?",
    answer:
      "Security is architected from day one:\n• Strict NDA protection on all client IP.\n• Isolated serverless runtime execution with zero client-side credential exposure.\n• SOC-2 compliant vector databases & encrypted CRM webhooks.",
    followUps: ["q_support", "q_book_sprint"],
  },

  // Branch 1: Technical specifics
  q_web_tech: {
    id: "q_web_tech",
    question: "What tech stack do you use for web apps?",
    answer:
      "We build with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS / Vanilla CSS for maximum GPU framerate, Framer Motion for smooth micro-interactions, and Vercel Edge Runtime for global sub-15ms TTFB.",
    followUps: ["q_ai_types", "q_book_sprint"],
  },
  q_ai_types: {
    id: "q_ai_types",
    question: "What kind of AI agent automations can you build?",
    answer:
      "We construct multi-modal workflows including:\n• Automated inbound lead scoring & calendar dispatch.\n• AI customer support agents integrated with Slack & Zendesk.\n• Abandoned checkout recovery engines with dynamic SMS triggers.\n• Autonomous document parsers for invoices & contracts.",
    followUps: ["q_crm_stripe", "q_book_sprint"],
  },
  q_crm_stripe: {
    id: "q_crm_stripe",
    question: "Which CRMs and billing tools do you integrate?",
    answer:
      "We support direct two-way API plumbing with HubSpot, Salesforce, Linear, Slack, Notion, Airtable, and Stripe (usage metering, recurring subscriptions, and auto-invoicing).",
    followUps: ["q_book_sprint", "root_pricing"],
  },

  // Branch 2: ROI & Booking
  q_roi_calc: {
    id: "q_roi_calc",
    question: "How do I calculate our team's estimated ROI?",
    answer:
      "Scroll up to our 'ROI Calculator' section! Enter your team size, average hourly rate, and weekly wasted manual hours to see your projected annual hours saved and revenue multiplier in INR (₹) or USD ($).",
    followUps: ["q_book_sprint", "root_services"],
  },
  q_book_sprint: {
    id: "q_book_sprint",
    question: "How do we get started and book a discovery sprint?",
    answer:
      "You can submit your requirements in the contact form at the bottom of the page or email us at handsfree.in@gmail.com. Our engineering team reviews specifications and responds within 4 hours with an actionable roadmap.",
    followUps: ["root_timeline", "root_services"],
  },
  q_support: {
    id: "q_support",
    question: "Do you provide post-launch maintenance & monitoring?",
    answer:
      "Yes! All builds include 30 days of complimentary hypercare and continuous telemetry monitoring (99.99% uptime SLA) with optional monthly retainer support for continuous AI prompt tuning and feature additions.",
    followUps: ["q_book_sprint", "root_pricing"],
  },
};

const ROOT_KEYS = ["root_services", "root_pricing", "root_timeline", "root_security"];

interface MessageHistoryItem {
  id: string;
  role: "assistant" | "user";
  text: string;
  activeFollowUps?: string[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<MessageHistoryItem[]>([
    {
      id: "init",
      role: "assistant",
      text: "Hello! Welcome to HandsFree. Select any question below to explore our autonomous systems and web solutions:",
      activeFollowUps: ROOT_KEYS,
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleSelectQuestion = (questionKey: string) => {
    const node = KNOWLEDGE_GRAPH[questionKey];
    if (!node) return;

    // 1. Add User's selected question
    const userMsg: MessageHistoryItem = {
      id: `${Date.now()}-user`,
      role: "user",
      text: node.question,
    };

    // 2. Add Assistant's dynamic response and corresponding next-level follow-ups
    const botMsg: MessageHistoryItem = {
      id: `${Date.now()}-bot`,
      role: "assistant",
      text: node.answer,
      activeFollowUps: node.followUps && node.followUps.length > 0 ? node.followUps : ROOT_KEYS,
    };

    setHistory((prev) => [...prev, userMsg, botMsg]);
  };

  const handleReset = () => {
    setHistory([
      {
        id: "init",
        role: "assistant",
        text: "Conversation reset. Select a topic to explore:",
        activeFollowUps: ROOT_KEYS,
      },
    ]);
  };

  // Get current active follow up options from the last assistant message
  const lastAssistantMsg = [...history].reverse().find((m) => m.role === "assistant");
  const currentOptions = lastAssistantMsg?.activeFollowUps || ROOT_KEYS;

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Floating Toggle Pill */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-neutral-950 border border-white/15 text-white shadow-2xl hover:border-[#B8FF00] hover:shadow-[0_0_25px_rgba(184,255,0,0.25)] transition-all"
            aria-label="Open Interactive AI Guide"
          >
            <div className="w-8 h-8 rounded-full bg-[#B8FF00] flex items-center justify-center text-black shadow-sm shadow-[#B8FF00]/40">
              <Bot className="w-4 h-4" />
            </div>
            <div className="text-left pr-1">
              <div className="flex items-center gap-1.5 font-heading font-bold text-xs text-white">
                <span>Chat with AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-ping" />
              </div>
              <div className="font-mono text-[9px] text-[#B8FF00]">Instant Answers</div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.22 }}
            className="w-[calc(100vw-2rem)] sm:w-[410px] h-[560px] max-h-[85vh] rounded-3xl bg-neutral-950/95 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black flex flex-col overflow-hidden text-white"
          >
            {/* Header Bar */}
            <div className="px-5 py-4 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#B8FF00] flex items-center justify-center text-black shadow-md shadow-[#B8FF00]/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-white flex items-center gap-2">
                    <span>Chat with AI</span>
                    <span className="text-[9px] font-mono font-bold text-[#B8FF00] bg-[#B8FF00]/10 px-1.5 py-0.5 rounded border border-[#B8FF00]/20">
                      AI ONLINE
                    </span>
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">HandsFree Intelligent Guide</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleReset}
                  className="w-8 h-8 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                  title="Reset Conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Conversation Flow Area */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-black/60 scroll-smooth"
            >
              {history.map((msg) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                        isUser
                          ? "bg-neutral-800 text-white"
                          : "bg-[#B8FF00] text-black shadow-sm shadow-[#B8FF00]/30"
                      }`}
                    >
                      {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] whitespace-pre-line ${
                        isUser
                          ? "bg-neutral-900 text-white border border-white/10 rounded-tr-none font-medium"
                          : "bg-neutral-950 text-neutral-200 border border-white/10 rounded-tl-none shadow-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dynamic Follow-Up Question Selector Deck */}
            <div className="p-3.5 bg-neutral-900/95 border-t border-white/10">
              <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#B8FF00]" />
                <span>Select a topic:</span>
              </div>

              <div className="flex flex-col gap-1.5 max-h-40 overflow-y-auto pr-0.5">
                {currentOptions.map((qKey) => {
                  const node = KNOWLEDGE_GRAPH[qKey];
                  if (!node) return null;
                  return (
                    <button
                      key={qKey}
                      onClick={() => handleSelectQuestion(qKey)}
                      className="w-full text-left px-3 py-2 rounded-xl bg-black border border-white/10 hover:border-[#B8FF00] hover:bg-neutral-900/90 text-neutral-300 hover:text-[#B8FF00] text-xs font-medium transition-all flex items-center justify-between group shadow-sm"
                    >
                      <span className="truncate pr-2">{node.question}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#B8FF00] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={handleReset}
                  className="text-[10px] font-mono text-neutral-500 hover:text-[#B8FF00] transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-2.5 h-2.5" /> Start Over
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] font-mono font-bold text-[#B8FF00] hover:underline flex items-center gap-1"
                >
                  Book Sprint <ArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
