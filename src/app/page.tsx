"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WorkflowStudio from "@/components/WorkflowStudio";
import StatsCalculator from "@/components/StatsCalculator";
import About from "@/components/About";
import LogoConvergence from "@/components/LogoConvergence";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Web Audio Synthesizer
  function playSound(type: "click" | "success" | "ping") {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(750, now);
        osc.frequency.exponentialRampToValueAtTime(380, now + 0.08);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === "success") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.setValueAtTime(680, now + 0.08);
        osc.frequency.setValueAtTime(920, now + 0.16);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.28);
      } else if (type === "ping") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(1100, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      }
    } catch (e) {}
  }

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen bg-black text-slate-100 selection:bg-lime-400 selection:text-black">
        <Navbar
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled(!soundEnabled)}
        />
        <Hero />
        <Marquee />
        <Services />
        <WorkflowStudio />
        <StatsCalculator />
        <About />
        <Testimonials />
        <Contact onPlaySound={playSound} />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
