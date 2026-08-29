"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Zap,
  Globe,
  Cpu,
  TrendingUp,
  ShoppingCart,
  Briefcase,
  FileText,
  Calendar,
  MessageSquare,
  CreditCard,
  Smartphone,
  PenTool,
  FolderOpen,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Activity,
  Send,
  Layers,
  ChevronRight,
  ArrowRight as ArrowRightIcon,
  PlayCircle,
  X,
  Bot,
  Sparkles,
  RefreshCw,
  BarChart,
  Settings,
  Clock,
  ChevronDown,
  Menu,
  RotateCcw,
} from "lucide-react";
import LogoConvergence from "@/components/LogoConvergence";
import TiltCard from "@/components/TiltCard";
import Marquee from "@/components/Marquee";
import AnimatedCounter from "@/components/AnimatedCounter";
import Footer from "@/components/Footer";

const SCENARIOS = {
  inbound: {
    title: "High-Value Lead Flow",
    nodes: [
      { id: 1, icon: <Globe className="w-5 h-5" />, title: "Capture & Score", desc: "Evaluates the lead instantly", time: "0.12s" },
      { id: 2, icon: <Calendar className="w-5 h-5" />, title: "Book Meeting", desc: "Adds to CRM & sends calendar invite", time: "0.45s" },
      { id: 3, icon: <FileText className="w-5 h-5" />, title: "Create Proposal", desc: "Drafts a custom pricing document", time: "0.88s" },
      { id: 4, icon: <MessageSquare className="w-5 h-5" />, title: "Alert Team", desc: "Notifies staff & preps invoice", time: "1.24s" },
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
    title: "Cart Recovery",
    nodes: [
      { id: 1, icon: <ShoppingCart className="w-5 h-5" />, title: "Cart Abandoned", desc: "Customer leaves without buying", time: "0.08s" },
      { id: 2, icon: <Zap className="w-5 h-5" />, title: "Generate Discount", desc: "Creates a unique 10% off code", time: "0.34s" },
      { id: 3, icon: <Smartphone className="w-5 h-5" />, title: "Send Message", desc: "Texts the customer a checkout link", time: "0.72s" },
      { id: 4, icon: <CreditCard className="w-5 h-5" />, title: "Process Sale", desc: "Secures payment & updates stock", time: "1.10s" },
    ],
    logs: [
      "> [0.00s] Customer abandoned cart (₹35,000)",
      "> [0.08s] Customer profile identified",
      "> [0.34s] Created unique 10% discount code",
      "> [0.72s] Sent recovery WhatsApp message",
      "> [1.10s] Sale recovered automatically",
      "> [1.15s] Process completed with no human effort",
    ],
  },
  client: {
    title: "Client Onboarding",
    nodes: [
      { id: 1, icon: <PenTool className="w-5 h-5" />, title: "Contract Signed", desc: "Client signs the agreement online", time: "0.10s" },
      { id: 2, icon: <FolderOpen className="w-5 h-5" />, title: "Setup Workspace", desc: "Creates shared folders & boards", time: "0.52s" },
      { id: 3, icon: <CreditCard className="w-5 h-5" />, title: "Start Billing", desc: "Charges invoice & sets up retainer", time: "0.94s" },
      { id: 4, icon: <Briefcase className="w-5 h-5" />, title: "Welcome Client", desc: "Emails access links and next steps", time: "1.41s" },
    ],
    logs: [
      "> [0.00s] Contract signature received",
      "> [0.10s] Copying standard project templates",
      "> [0.52s] Shared cloud folders created",
      "> [0.94s] Retainer billing activated (₹2,50,000)",
      "> [1.41s] Welcome email sent to client",
      "> [1.48s] Onboarding finished successfully",
    ],
  },
};

const INFRASTRUCTURE_SERVICES = [
  { title: "Next.js 15 Web Apps", tag: "VELOCITY", desc: "Sub-second web applications engineered for high-intent conversions with edge-rendered performance.", icon: <Zap className="w-7 h-7 text-[#B8FF00]" /> },
  { title: "Conversion Interfaces", tag: "DESIGN", desc: "Every pixel, micro-interaction, and typography scale engineered to move prospects toward definitive action.", icon: <Layers className="w-7 h-7 text-[#B8FF00]" /> },
  { title: "AI Agent Automations", tag: "AUTOMATION", desc: "Custom multi-model AI pipelines that classify, route, and act on leads in real-time — no human drag required.", icon: <Bot className="w-7 h-7 text-[#B8FF00]" /> },
  { title: "CRM Synchronization", tag: "SYNC", desc: "Bidirectional real-time sync with HubSpot, Salesforce, Linear, and Slack. Data flows everywhere seamlessly.", icon: <RefreshCw className="w-7 h-7 text-[#B8FF00]" /> },
  { title: "Automated Billing", tag: "REVENUE", desc: "Stripe recurring subscriptions, automated usage invoicing, and telemetry reconciliation built directly in.", icon: <CreditCard className="w-7 h-7 text-[#B8FF00]" /> },
  { title: "Autonomous Funnels", tag: "LEVERAGE", desc: "Viral referral loops and algorithmic telemetry loops that compound inbound growth without manual intervention.", icon: <TrendingUp className="w-7 h-7 text-[#B8FF00]" /> },
  { title: "Full-Funnel Telemetry", tag: "INSIGHT", desc: "Data-driven analytics pipelines that measure every user touchpoint and dynamically optimize conversion bottlenecks.", icon: <BarChart className="w-7 h-7 text-[#B8FF00]" /> },
  { title: "Zero-Touch Operations", tag: "AUTOPILOT", desc: "Autonomous back-office pipelines that auto-triage tickets, provision accounts, and manage tasks while you sleep.", icon: <Settings className="w-7 h-7 text-[#B8FF00]" /> },
];

const TESTIMONIALS = [
  { q: "HandsFree transformed our business. We saw a 3.8x jump in sales in just 3 months. No more chasing dead leads.", name: "Sarah Kim", role: "CEO, TechNova", ini: "SK" },
  { q: "We saved 26 hours a week by letting AI do the busywork. Our team finally has time to focus on actual growth.", name: "Marcus Johnson", role: "COO, BrightPath", ini: "MJ" },
  { q: "Scaled from ₹15 Lakhs to ₹1 Crore in monthly revenue without hiring a single extra person for the back office.", name: "Aisha Laurent", role: "Founder, Velocity", ini: "AL" },
];

// Interactive Guided Decision-Tree Questions & Follow-ups
interface ChatStep {
  id: string;
  question: string;
  answer: string;
  followUps?: string[];
}

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

  // Branch 1: Tech Specifics
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
      "You can submit your requirements in the booking form on this page or message us directly via WhatsApp. Our engineering team reviews specifications and responds within 4 hours with an actionable roadmap.",
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

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Workflow Studio State
  const [activeScenario, setActiveScenario] = useState<"inbound" | "ecom" | "client">("inbound");
  const [isPipelineRunning, setIsPipelineRunning] = useState(false);
  const [executionStep, setExecutionStep] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);

  // Direct Book Form State
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    preferredCallTime: "",
    service: "Basic Website / Landing Page (from ₹2,499)",
    timeline: "Immediate (< 2 weeks)",
    details: "",
  });

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isTimelineDropdownOpen, setIsTimelineDropdownOpen] = useState(false);

  const serviceOptions = [
    "Basic Website / Landing Page (from ₹2,499)",
    "Full-Stack Custom App / Portal (from ₹7,999)",
    "AI Workflow & CRM Automation (from ₹3,499)",
    "Custom Engineering Sprint / Specialized Pod",
  ];

  const timelineOptions = [
    "Immediate (< 2 weeks)",
    "Standard Sprint (2 - 4 weeks)",
    "Flexible / Exploring Solutions",
  ];

  // Interactive Guided Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);

  const heroContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroContainerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [-40, 120]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [30, -100]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.25, 0.9]);

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
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
          entry.target.classList.remove("opacity-0", "translate-y-12", "scale-95");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal-target").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent background scroll when mobile sidenav is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileNavOpen]);

  // High-Performance Ambient Particle Physics (Lightweight & Low-RAM)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }> = [];
    let animationFrameId: number;
    let isVisible = true;
    const mouse: { x: number | null; y: number | null; radius: number } = { x: null, y: null, radius: 120 };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const maxParticles = isMobile ? 22 : 48; // Highly optimized particle count

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseout", onMouseOut, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    const initParticles = () => {
      if (!canvas) return;
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.6,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const animate = () => {
      if (!isVisible || !canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        else if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        else if (p.y < 0) p.y = canvas.height;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 14400) { // 120^2 avoids Math.sqrt in loop
            const distance = Math.sqrt(distSq);
            const force = (120 - distance) / 120;
            p.x -= (dx / distance) * force * 1.2;
            p.y -= (dy / distance) * force * 1.2;
          }
        }

        ctx.fillStyle = "rgba(184, 255, 0, 0.4)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 6.283);
        ctx.fill();
      }

      // Constellation lines with distance squared optimization
      for (let a = 0; a < pLen; a++) {
        for (let b = a + 1; b < pLen; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 6400) { // 80^2
            const distance = Math.sqrt(distSq);
            ctx.strokeStyle = `rgba(184, 255, 0, ${(1 - distance / 80) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPipelineRunning && terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [executionStep, isPipelineRunning]);

  useEffect(() => {
    if (isChatOpen && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history, isChatOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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
        setTimeout(() => setIsPipelineRunning(false), 500);
      }
    }, 700);
  };

  const submitToWhatsApp = (dataStr: string) => {
    const encoded = encodeURIComponent(dataStr);
    window.open(`https://wa.me/919489365108?text=${encoded}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText =
      `⚡ *HandsFree Project Request*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `🏢 *Company / Business:* ${formData.business}\n` +
      `📱 *WhatsApp:* ${formData.phone}\n` +
      `🕒 *Best Time to Talk:* ${formData.preferredCallTime}\n` +
      `🎯 *Scope:* ${formData.service}\n` +
      `⏳ *Timeline:* ${formData.timeline}\n` +
      `📝 *Project Overview:* ${formData.details || "None specified"}`;
    submitToWhatsApp(waText);
  };

  const handleSelectQuestion = (questionKey: string) => {
    const node = KNOWLEDGE_GRAPH[questionKey];
    if (!node) return;

    const userMsg: MessageHistoryItem = {
      id: `${Date.now()}-user`,
      role: "user",
      text: node.question,
    };

    const botMsg: MessageHistoryItem = {
      id: `${Date.now()}-bot`,
      role: "assistant",
      text: node.answer,
      activeFollowUps: node.followUps && node.followUps.length > 0 ? node.followUps : ROOT_KEYS,
    };

    setHistory((prev) => [...prev, userMsg, botMsg]);
  };

  const handleResetChat = () => {
    setHistory([
      {
        id: "init",
        role: "assistant",
        text: "Conversation reset. Select a topic to explore:",
        activeFollowUps: ROOT_KEYS,
      },
    ]);
  };

  const lastAssistantMsg = [...history].reverse().find((m) => m.role === "assistant");
  const currentOptions = lastAssistantMsg?.activeFollowUps || ROOT_KEYS;

  const navLinks = [
    { href: "#pillars", label: "Core Pillars" },
    { href: "#services", label: "Infrastructure" },
    { href: "#studio", label: "Studio" },
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-[#B8FF00] selection:text-black pb-20 relative overflow-x-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      <style dangerouslySetInnerHTML={{__html: `
        .reveal-target { transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #B8FF00; }
        .bento-card {
          background: rgba(12, 12, 12, 0.85); backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 1.5rem;
          transition: all 0.4s ease;
        }
        .bento-card:hover {
          background: rgba(18, 18, 18, 0.95); border-color: rgba(184, 255, 0, 0.4);
          box-shadow: 0 10px 40px -10px rgba(184, 255, 0, 0.15);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(184, 255, 0, 0.3); border-radius: 10px; }
      `}} />

      {/* Floating Header with SideNav Hamburger */}
      <div className="fixed top-5 inset-x-0 z-40 px-4 pointer-events-none flex justify-center">
        <nav className={`pointer-events-auto flex items-center justify-between px-5 sm:px-6 py-3.5 rounded-full transition-all duration-500 max-w-6xl w-full ${isScrolled ? 'bg-black/60 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/90 ring-1 ring-white/10' : 'bg-neutral-950/40 backdrop-blur-xl border border-white/15 shadow-lg shadow-black/40'}`}>
          <a href="#" className="flex items-center gap-2.5 group">
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
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-neutral-300">
            <a href="#pillars" className="hover:text-[#B8FF00] transition-colors">Pillars</a>
            <a href="#services" className="hover:text-[#B8FF00] transition-colors">Infrastructure</a>
            <a href="#studio" className="hover:text-[#B8FF00] transition-colors">Studio</a>
            <Link href="/pricing" className="hover:text-[#B8FF00] transition-colors">Pricing</Link>
            <button
              onClick={() => setIsChatOpen(true)}
              className="hover:text-[#B8FF00] transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
            >
              <Bot className="w-4 h-4 text-[#B8FF00]" />
              <span>Chat with AI</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="hidden md:inline-flex px-5 py-2.5 bg-[#B8FF00] hover:bg-[#A3E600] text-black text-sm font-bold rounded-full transition-all items-center gap-1.5 shadow-lg shadow-[#B8FF00]/25 hover:scale-105 whitespace-nowrap"
            >
              Contact Us <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden w-10 h-10 rounded-full bg-neutral-900 border border-white/15 text-white flex items-center justify-center hover:text-[#B8FF00] hover:border-[#B8FF00] transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Full-Screen Slide-Over Mobile SideNav */}
      <AnimatePresence>
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileNavOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[360px] bg-neutral-950 text-white p-6 flex flex-col justify-between border-l border-neutral-800 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Image
                        src="/logo-icon-tight.png"
                        alt="HandsFree"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="font-heading font-black text-lg text-white">
                      <span>Hands</span><span className="text-[#B8FF00]">Free</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileNavOpen(false)}
                    className="w-10 h-10 rounded-full bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center border border-neutral-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 space-y-2.5 overflow-y-auto max-h-[calc(100vh-220px)] pr-1">
                  {navLinks.map((item, idx) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setMobileNavOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl text-neutral-200 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 font-semibold text-sm transition-all group"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B8FF00]" />
                    </motion.a>
                  ))}

                  <Link
                    href="/pricing"
                    onClick={() => setMobileNavOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-neutral-200 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 font-semibold text-sm transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <span>Pricing</span>
                      <span className="text-[9px] bg-[#B8FF00]/10 text-[#B8FF00] px-1.5 py-0.5 rounded font-mono font-bold">SPRINTS</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B8FF00]" />
                  </Link>

                  <Link
                    href="/hiring"
                    onClick={() => setMobileNavOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-neutral-200 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 font-semibold text-sm transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <span>Hiring</span>
                      <span className="text-[9px] bg-[#B8FF00]/10 text-[#B8FF00] px-1.5 py-0.5 rounded font-mono font-bold">SPOT INSTANCES</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B8FF00]" />
                  </Link>

                  <button
                    onClick={() => {
                      setMobileNavOpen(false);
                      setIsChatOpen(true);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[#B8FF00] hover:text-white hover:bg-neutral-900 border border-[#B8FF00]/20 hover:border-neutral-800 font-semibold text-sm transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Bot className="w-4 h-4 text-[#B8FF00]" />
                      <span>Chat with AI</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B8FF00]" />
                  </button>
                </div>
              </div>

              <div className="pt-4 pb-6 border-t border-neutral-800">
                <a
                  href="#book"
                  onClick={() => setMobileNavOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#B8FF00] hover:bg-[#A3E600] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#B8FF00]/25 transition-all"
                >
                  <Zap className="w-4 h-4 fill-black text-black" />
                  <span>Contact Us</span>
                  <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 space-y-28 sm:space-y-32 relative z-10">
        {/* Parallax Background Glowing Ambient Orbs */}
        <motion.div
          style={{ y: orb1Y, scale: orbScale }}
          className="pointer-events-none absolute -top-10 left-1/4 w-[550px] h-[550px] bg-[#B8FF00]/5 rounded-full blur-[160px] z-0"
        />
        <motion.div
          style={{ y: orb2Y, scale: orbScale }}
          className="pointer-events-none absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#B8FF00]/4 rounded-full blur-[140px] z-0"
        />

        {/* Hero Section with Parallax Depth */}
        <motion.section
          ref={heroContainerRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center pt-8 pb-14 sm:pb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#B8FF00]/25 bg-[#B8FF00]/10 text-[#B8FF00] text-xs font-mono font-bold tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(184,255,0,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8FF00]"></span>
            </span>
            Stop doing manual work. Let our systems do it for you.
          </div>

          <h1 className="text-5xl xs:text-6xl sm:text-7xl lg:text-[6.5rem] font-heading font-black tracking-tight text-white leading-[0.95] mb-8">
            WORK SMARTER. <br/>
            <span className="text-[#B8FF00]">GROW FASTER.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-neutral-400 leading-relaxed font-normal mb-10 px-2">
            We build ultra-fast websites and smart AI systems that handle your leads, emails, and billing automatically. Scale your business without hiring more staff.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md sm:max-w-none mx-auto">
            <a href="#book" className="w-full sm:w-auto px-8 py-4 bg-[#B8FF00] hover:bg-[#A3E600] text-black rounded-full font-bold text-base sm:text-lg transition-all inline-flex justify-center items-center gap-2 shadow-lg shadow-[#B8FF00]/30 hover:scale-105">
              Start Your Project <ArrowRightIcon className="w-5 h-5 stroke-[2.5]" />
            </a>
            <a href="#studio" className="w-full sm:w-auto px-8 py-4 border border-white/15 rounded-full font-bold text-base sm:text-lg text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5 text-[#B8FF00]" /> Watch It Work
            </a>
          </div>
        </motion.section>

        {/* Live Features Marquee */}
        <div className="reveal-target opacity-0 scale-95">
          <Marquee />
        </div>

        {/* Three Pillars of Digital Scale */}
        <section id="pillars" className="reveal-target opacity-0 translate-y-12">
          <div className="text-center mb-14">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-3.5">
              CORE PILLARS
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
              Three pillars of digital scale.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
              Pixel-perfect web applications, autonomous AI automations, and compounding growth systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 01 */}
            <TiltCard className="animate-float bg-neutral-950/80 border border-white/10 hover:border-[#B8FF00]/40 transition-all p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl">
              <div className="absolute top-6 right-8 font-heading font-black text-4xl text-neutral-800/60 select-none">
                01
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#B8FF00] mb-6 group-hover:bg-[#B8FF00] group-hover:text-black transition-all">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] mb-2 uppercase">
                  VELOCITY
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                  Web Applications
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Sub-second Next.js web applications engineered to captivate visitors and maximize conversions.
                </p>
              </div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#B8FF00] hover:text-white transition-colors pt-4 border-t border-white/5"
              >
                <span>Explore Builds</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </TiltCard>

            {/* Pillar 02 */}
            <TiltCard className="animate-float-delayed bg-neutral-950/80 border border-white/10 hover:border-[#B8FF00]/40 transition-all p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl">
              <div className="absolute top-6 right-8 font-heading font-black text-4xl text-neutral-800/60 select-none">
                02
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#B8FF00] mb-6 group-hover:bg-[#B8FF00] group-hover:text-black transition-all">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] mb-2 uppercase">
                  AUTOMATION
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                  AI Workflows
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Custom AI pipelines, CRM sync, and automated billing that eliminate manual busywork.
                </p>
              </div>
              <a
                href="#studio"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#B8FF00] hover:text-white transition-colors pt-4 border-t border-white/5"
              >
                <span>Explore AI</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </TiltCard>

            {/* Pillar 03 */}
            <TiltCard className="animate-float-reverse bg-neutral-950/80 border border-white/10 hover:border-[#B8FF00]/40 transition-all p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl">
              <div className="absolute top-6 right-8 font-heading font-black text-4xl text-neutral-800/60 select-none">
                03
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#B8FF00] mb-6 group-hover:bg-[#B8FF00] group-hover:text-black transition-all">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] mb-2 uppercase">
                  LEVERAGE
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                  Growth Systems
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Data-driven referral loops and full-funnel telemetry for compounding enterprise scale.
                </p>
              </div>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#B8FF00] hover:text-white transition-colors pt-4 border-t border-white/5"
              >
                <span>Explore Growth</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </TiltCard>
          </div>
        </section>

        {/* Full-Stack Growth Infrastructure Grid */}
        <section id="services" className="reveal-target opacity-0 translate-y-12">
          <div className="text-center mb-14">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-3.5">
              Capabilities Matrix
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
              Full-Stack Growth Infrastructure.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
              Every service is engineered to eliminate manual drag and compound your growth — from pixel-perfect interfaces to autonomous backend systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {INFRASTRUCTURE_SERVICES.map((service, idx) => {
              const floatClass =
                idx % 3 === 0
                  ? "animate-float"
                  : idx % 3 === 1
                  ? "animate-float-delayed"
                  : "animate-float-reverse";
              return (
                <TiltCard
                  key={idx}
                  className={`${floatClass} bg-neutral-950/80 border border-white/10 hover:border-[#B8FF00]/40 p-6 sm:p-7 group flex flex-col justify-between shadow-xl transition-all ${
                    idx === 0 || idx === 3 ? "md:col-span-2" : "col-span-1"
                  }`}
                >
                  <div>
                    <div className="mb-5 text-[#B8FF00] group-hover:scale-110 transform origin-left duration-300">
                      {service.icon}
                    </div>
                    <div className="text-[10px] font-mono font-bold tracking-widest text-[#B8FF00] mb-2 uppercase">
                      {service.tag}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>

        {/* Workflow Studio */}
        <section id="studio" className="reveal-target opacity-0 translate-y-12">
          <div className="bento-card p-4 sm:p-6 lg:p-8 overflow-hidden border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 h-full">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-ping" />
                    Interactive Workflow Studio
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight mb-3">
                    Autonomous Systems in Motion
                  </h2>
                  <p className="text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed">
                    Pick a scenario and watch how our autonomous agents handle complex tasks instantly, without human error.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 bg-neutral-900/80 p-1.5 rounded-2xl border border-white/5">
                    {Object.keys(SCENARIOS).map((key) => {
                      const isActive = activeScenario === key;
                      return (
                        <button
                          key={key}
                          onClick={() => {
                            if (!isPipelineRunning) {
                              setActiveScenario(key as "inbound" | "ecom" | "client");
                              setExecutionStep(0);
                            }
                          }}
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

                  <div className="space-y-5">
                    {SCENARIOS[activeScenario].nodes.map((n, idx) => {
                      const isComplete = executionStep > idx;
                      const isActive = executionStep === idx + 1 && isPipelineRunning;
                      return (
                        <motion.div
                          key={n.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className="relative flex items-start gap-4"
                        >
                          {idx !== SCENARIOS[activeScenario].nodes.length - 1 && (
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
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mock Terminal Window */}
              <div className="bg-black rounded-2xl border border-white/10 flex flex-col overflow-hidden shadow-2xl min-h-[380px]">
                <div className="bg-neutral-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-neutral-400 ml-2">ai_orchestrator.sh</span>
                  </div>

                  <button
                    onClick={runPipeline}
                    disabled={isPipelineRunning}
                    className="px-3.5 py-1.5 bg-[#B8FF00] hover:bg-[#A3E600] disabled:opacity-50 text-black font-bold text-xs rounded-lg transition-all flex items-center gap-1.5"
                  >
                    <Activity className="w-3.5 h-3.5" /> {isPipelineRunning ? "Running..." : "Execute"}
                  </button>
                </div>

                <div ref={terminalBodyRef} className="p-5 flex-1 font-mono text-xs text-neutral-300 flex flex-col justify-between overflow-y-auto space-y-2.5 bg-black/95">
                  <div className="space-y-2">
                    <div className="text-neutral-500 pb-2 border-b border-white/5">
                      <div># Target: {SCENARIOS[activeScenario].title}</div>
                      <div># Environment: Autonomous Edge Cluster</div>
                    </div>

                    {isPipelineRunning || executionStep > 0 ? (
                      <div className="text-[#B8FF00] font-bold">&gt; SYSTEM TRIGGER: INITIATING SEQUENCE...</div>
                    ) : null}

                    {SCENARIOS[activeScenario].logs.slice(1, executionStep + 1).map((log, i) => (
                      <div key={i} className="text-neutral-300">
                        {log}
                      </div>
                    ))}

                    {executionStep > SCENARIOS[activeScenario].nodes.length && (
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <div className="text-[#B8FF00] font-bold">
                          {`> SEQUENCE COMPLETE IN ${SCENARIOS[activeScenario].nodes[SCENARIOS[activeScenario].nodes.length - 1].time}`}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-500">
                    <span>STATUS: {isPipelineRunning ? "ACTIVE" : "STANDBY"}</span>
                    <span>ZERO-TOUCH ARCHITECTURE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Logo Convergence Section */}
        <LogoConvergence />

        {/* Dedicated Book a Call Section with WhatsApp Submission */}
        <section id="book" className="reveal-target opacity-0 translate-y-12">
          <TiltCard className="bg-neutral-950/90 border border-white/10 p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8FF00]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B8FF00]/25 bg-[#B8FF00]/10 text-[#B8FF00] text-xs font-mono font-bold mb-6 tracking-wider uppercase">
                  <Settings className="w-3.5 h-3.5" /> Initialize Setup
                </div>
                <h2 className="text-4xl sm:text-5xl font-heading font-black text-white tracking-tight mb-6 leading-tight">
                  Ready to build your <br /><span className="text-[#B8FF00]">Growth Engine?</span>
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed max-w-md">
                  Submit your details. Our system routes your request instantly, and our architects will connect with you via WhatsApp to scope your infrastructure.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 text-neutral-300">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#B8FF00]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Lightning Fast Response</div>
                      <div className="text-xs text-neutral-400">Expect a reply within 5 minutes.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-neutral-300">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#B8FF00]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Direct WhatsApp Comm</div>
                      <div className="text-xs text-neutral-400">No emails lost in spam folders.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form with Custom Dropdown & Direct WhatsApp dispatch */}
              <div className="bg-black/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8FF00] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Business</label>
                      <input
                        required
                        type="text"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8FF00] transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Phone (WhatsApp)</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8FF00] transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Select Date & Time for a Talk</label>
                      <input
                        type="datetime-local"
                        value={formData.preferredCallTime}
                        onChange={(e) => setFormData({ ...formData, preferredCallTime: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8FF00] transition-colors cursor-pointer scheme-dark"
                      />
                    </div>
                  </div>

                  {/* Custom Styled Dropdowns for Scope and Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 relative">
                      <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Scope / Focus</label>
                      <button
                        type="button"
                        onClick={() => {
                          setIsServiceDropdownOpen(!isServiceDropdownOpen);
                          setIsTimelineDropdownOpen(false);
                        }}
                        className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-white text-sm flex items-center justify-between transition-all text-left truncate"
                      >
                        <span className="truncate pr-2">{formData.service}</span>
                        <ChevronDown className={`w-4 h-4 text-[#B8FF00] shrink-0 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isServiceDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1.5 z-30 bg-neutral-950 border border-white/15 rounded-2xl p-1.5 shadow-2xl shadow-black overflow-hidden">
                          {serviceOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, service: opt });
                                setIsServiceDropdownOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                                formData.service === opt
                                  ? "bg-[#B8FF00]/10 text-[#B8FF00] font-bold"
                                  : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                              }`}
                            >
                              <span className="truncate pr-2">{opt}</span>
                              {formData.service === opt && <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] shrink-0" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5 relative">
                      <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Target Timeline</label>
                      <button
                        type="button"
                        onClick={() => {
                          setIsTimelineDropdownOpen(!isTimelineDropdownOpen);
                          setIsServiceDropdownOpen(false);
                        }}
                        className="w-full bg-neutral-900 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-white text-sm flex items-center justify-between transition-all text-left truncate"
                      >
                        <span className="truncate pr-2">{formData.timeline}</span>
                        <ChevronDown className={`w-4 h-4 text-[#B8FF00] shrink-0 transition-transform ${isTimelineDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isTimelineDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1.5 z-30 bg-neutral-950 border border-white/15 rounded-2xl p-1.5 shadow-2xl shadow-black overflow-hidden">
                          {timelineOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, timeline: opt });
                                setIsTimelineDropdownOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                                formData.timeline === opt
                                  ? "bg-[#B8FF00]/10 text-[#B8FF00] font-bold"
                                  : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                              }`}
                            >
                              <span>{opt}</span>
                              {formData.timeline === opt && <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">Project Overview</label>
                    <textarea
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      rows={3}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8FF00] transition-colors resize-none"
                      placeholder="Briefly describe your goals, existing stack, or bottlenecks..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#B8FF00] hover:bg-[#A3E600] text-black font-black rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#B8FF00]/25 hover:scale-[1.01] mt-2 group cursor-pointer"
                  >
                    <Send className="w-5 h-5 shrink-0 stroke-[2.5] text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-sm sm:text-base tracking-tight whitespace-nowrap">Connect via WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>
          </TiltCard>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="reveal-target opacity-0 translate-y-12">
          <TiltCard className="bg-neutral-950/90 border border-white/10 p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif text-white/[0.02] pointer-events-none select-none leading-none">
              &ldquo;
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="min-h-[140px] sm:min-h-[180px] flex items-center justify-center mb-6">
                <h3 className="text-2xl sm:text-4xl text-white font-heading font-black tracking-tight leading-tight">
                  &ldquo;{TESTIMONIALS[quoteIdx].q}&rdquo;
                </h3>
              </div>

              <div className="inline-flex items-center gap-3 bg-neutral-900/90 rounded-full pr-5 p-1.5 border border-white/10 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-[#B8FF00] flex items-center justify-center text-black font-bold text-xs">
                  {TESTIMONIALS[quoteIdx].ini}
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-xs">{TESTIMONIALS[quoteIdx].name}</div>
                  <div className="text-neutral-400 text-[10px] font-mono">{TESTIMONIALS[quoteIdx].role}</div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setQuoteIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      quoteIdx === i ? "w-8 bg-[#B8FF00]" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </TiltCard>
        </section>
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  );
}
