"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Menu,
  X,
  Layers,
  Cpu,
  Calculator,
  Shield,
  MessageSquare,
  ArrowUpRight,
  Zap,
} from "lucide-react";

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function Navbar({ soundEnabled, onToggleSound }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when full-screen mobile side drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#services", label: "Services", icon: Layers },
    { href: "#studio", label: "Studio", icon: Cpu },
    { href: "#calculator", label: "ROI Matrix", icon: Calculator },
    { href: "#about", label: "About", icon: Shield },
    { href: "#testimonials", label: "Testimonials", icon: MessageSquare },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/15 bg-black flex items-center justify-center group-hover:border-[#B8FF00] group-hover:shadow-[0_0_15px_rgba(184,255,0,0.3)] transition-all">
              <Image
                src="/logo-icon-tight.png"
                alt="HandsFree Logo Icon"
                width={40}
                height={40}
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div>
              <div className="font-heading font-black text-xl tracking-tight text-white leading-none">
                <span>Hands</span><span className="text-[#B8FF00]">Free</span>
              </div>
              <div className="font-mono text-[9px] font-bold text-neutral-400 tracking-wider">
                WEBSITE ◈ AUTOMATION ◈ GROWTH
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#B8FF00] flex items-center gap-1.5 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-[#B8FF00]" /> {item.label}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSound}
              className="w-10 h-10 rounded-xl border border-white/10 bg-neutral-900/80 hover:border-[#B8FF00] hover:text-[#B8FF00] text-neutral-300 flex items-center justify-center transition-all shadow-sm"
              title="Toggle Sound Effects"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#B8FF00]" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-500" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-black bg-[#B8FF00] hover:bg-[#A3E600] shadow-lg shadow-[#B8FF00]/20 hover:shadow-[#B8FF00]/40 transition-all hover:scale-[1.02]"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-xl border border-white/10 bg-neutral-900 flex items-center justify-center text-white hover:text-[#B8FF00] hover:border-[#B8FF00] transition-colors shadow-sm"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* FULL-SCREEN SLIDE-OVER MOBILE SIDENAV WITH BLUR BACKDROP */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Full-Height Drawer from Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[380px] bg-neutral-950 text-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 border-l border-neutral-800"
            >
              <div>
                {/* Header with Close */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/15 bg-black flex items-center justify-center">
                      <Image
                        src="/logo-icon-tight.png"
                        alt="HandsFree Logo Icon"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain p-0.5"
                      />
                    </div>
                    <div className="font-heading font-black text-lg text-white">
                      <span>Hands</span><span className="text-[#B8FF00]">Free</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center border border-neutral-800"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links with staggered animation */}
                <div className="py-8 space-y-3">
                  {navLinks.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-neutral-200 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 font-medium text-base transition-all group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-neutral-900 group-hover:bg-[#B8FF00] text-[#B8FF00] group-hover:text-black flex items-center justify-center transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{item.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-6 border-t border-neutral-800 space-y-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 rounded-xl bg-[#B8FF00] hover:bg-[#A3E600] text-black font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-[#B8FF00]/25 transition-all"
                >
                  <Zap className="w-4 h-4 fill-black text-black" />
                  <span>Start Your Project</span>
                </a>
                <div className="text-center font-mono text-[11px] text-neutral-500">
                  WEBSITE • AUTOMATION • GROWTH
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
