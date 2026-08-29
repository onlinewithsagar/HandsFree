"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, User, Minimize2 } from "lucide-react";
import Image from "next/image";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I am the HandsFree AI Assistant. Ask me anything about our autonomous systems, Next.js web applications, or how we can automate your manual workflows.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: userText };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          history: messages.slice(-4),
        }),
      });

      const data = await res.json();

      if (res.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), role: "assistant", content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: data.error || "I ran into a temporary error. Please try again shortly.",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Network error connecting to the AI cluster. Please check your connection.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-neutral-950 border border-white/15 text-white shadow-2xl hover:border-[#B8FF00] hover:shadow-[0_0_25px_rgba(184,255,0,0.25)] transition-all"
            aria-label="Open HandsFree AI Chatbot"
          >
            <div className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo-icon-tight.png"
                alt="AI Icon"
                width={28}
                height={28}
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="text-left pr-1">
              <div className="flex items-center gap-1.5 font-heading font-bold text-xs text-white">
                <span>Ask AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-ping" />
              </div>
              <div className="font-mono text-[9px] text-[#B8FF00]">24/7 Agent</div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[85vh] rounded-3xl bg-neutral-950 border border-white/15 shadow-2xl shadow-black flex flex-col overflow-hidden text-white"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo-icon-tight.png"
                    alt="HandsFree AI"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-white flex items-center gap-2">
                    <span>HandsFree AI</span>
                    <span className="text-[10px] font-mono font-bold text-[#B8FF00] bg-[#B8FF00]/10 px-1.5 py-0.2 rounded border border-[#B8FF00]/20">
                      ONLINE
                    </span>
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">Secure Gemini Model</div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-black/60">
              {messages.map((msg) => {
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
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[80%] ${
                        isUser
                          ? "bg-neutral-900 text-white border border-white/10 rounded-tr-none"
                          : "bg-neutral-950 text-neutral-200 border border-white/10 rounded-tl-none shadow-md"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#B8FF00] text-black flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-neutral-950 border border-white/10 text-neutral-400 text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-neutral-900/90 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI pipelines, web apps..."
                className="flex-1 bg-black border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#B8FF00] transition-colors"
                maxLength={800}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-xl bg-[#B8FF00] hover:bg-[#A3E600] disabled:opacity-40 text-black flex items-center justify-center transition-all shadow-md shadow-[#B8FF00]/20 shrink-0"
              >
                <Send className="w-3.5 h-3.5 fill-black" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
