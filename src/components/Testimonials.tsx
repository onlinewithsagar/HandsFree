"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yCard1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const testimonials = [
    {
      quote:
        "HandsFree rebuilt our web presence and integrated our CRM with autonomous workflows. We experienced a 3.8x jump in lead conversion within 90 days. Absolutely transformative.",
      author: "Sarah Kim",
      role: "CEO, TechNova Solutions",
      avatar: "SK",
      yMotion: yCard1,
    },
    {
      quote:
        "The custom AI automation pipelines eliminated 26 hours of repetitive copy-pasting every week for our operations team. It's like having an extra full-time engineer on staff.",
      author: "Marcus Johnson",
      role: "COO, BrightPath Analytics",
      avatar: "MJ",
      yMotion: yCard2,
    },
    {
      quote:
        "From rapid design sprints to automated payment reconciliation, HandsFree gave us the leverage to scale from $20k to $140k monthly revenue without hiring more back-office staff.",
      author: "Aisha Laurent",
      role: "Founder, Velocity Commerce",
      avatar: "AL",
      yMotion: yCard3,
    },
  ];

  return (
    <section ref={containerRef} id="testimonials" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-3.5">
            Client Stories
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Trusted by ambitious teams.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Real revenue metrics and time unlocked by leadership operating on the HandsFree architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div key={idx} style={{ y: t.yMotion }}>
              <TiltCard className="p-8 bg-neutral-950/90 rounded-3xl border border-white/10 hover:border-[#B8FF00]/50 shadow-xl shadow-black flex flex-col justify-between h-full group transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,255,0,0.1)]">
                <div>
                  <div className="text-[#B8FF00] text-5xl font-serif mb-4 leading-none select-none">“</div>
                  <p className="text-neutral-300 text-base leading-relaxed mb-8 font-normal">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-neutral-900">
                  <div className="w-10 h-10 rounded-xl bg-[#B8FF00] text-black font-black flex items-center justify-center text-sm shadow-md shadow-[#B8FF00]/20">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{t.author}</div>
                    <div className="text-xs text-neutral-400">{t.role}</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
