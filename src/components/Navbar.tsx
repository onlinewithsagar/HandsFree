"use client";

import { useState, useEffect } from "react";
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-blue-600 transition-all">
              <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
                <path d="M22 20C22 17.7909 23.7909 16 26 16H38C40.2091 16 42 17.7909 42 20V46C38 48 30 52 26 56C23 59 22 62 22 62V20Z" fill="#070C18"/>
                <path d="M24 64C28 60 34 53 44 48C48 46 52 46 56 44C53 47 48 51 46 53C41 57 36 60 30 63L24 64Z" fill="#141E33"/>
                <path d="M28 65C34 60 44 54 53 49C54.5 48.2 55.8 47 56.5 45.5C53.5 48.5 46.5 53 42 56C36 60 31 63 28 65Z" fill="#475569"/>
                <path d="M68 28C60 36 52 42 48 45C49.5 43.5 54 39 58 35C62 31 66 26 68 22V28Z" fill="#00D2FF"/>
                <path d="M58 84C58 86.2091 59.7909 88 62 88H74C76.2091 88 78 86.2091 78 84V28L86 36L70 12L54 36L62 28V46C56 52 50 56 46 59C50 56 56 50 62 44V84H58Z" fill="#0057FF"/>
              </svg>
            </div>
            <div>
              <div className="font-heading font-black text-xl tracking-tight text-slate-900 leading-none">
                <span>Hands</span><span className="text-blue-600">Free</span>
              </div>
              <div className="font-mono text-[9px] font-bold text-slate-400 tracking-wider">
                WEBSITE ◈ AUTOMATION ◈ GROWTH
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-blue-600" /> {item.label}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSound}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:border-blue-600 hover:text-blue-600 flex items-center justify-center transition-all shadow-sm"
              title="Toggle Sound Effects"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-blue-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:translate-y-[-1px]"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-900 hover:text-blue-600 shadow-sm"
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
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Full-Height Drawer from Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[380px] bg-slate-900 text-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 border-l border-slate-800"
            >
              <div>
                {/* Header with Close */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-6 h-6" fill="none">
                        <path d="M22 20H42V62H22V20Z" fill="#070C18"/>
                        <path d="M58 80H78V28L86 36L70 12L54 36L62 28V80H58Z" fill="#0057FF"/>
                      </svg>
                    </div>
                    <div className="font-heading font-black text-lg text-white">
                      <span>Hands</span><span className="text-blue-500">Free</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
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
                        className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-slate-200 hover:text-white hover:bg-slate-800/80 font-medium text-base transition-all group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-slate-800 group-hover:bg-blue-600 text-blue-400 group-hover:text-white flex items-center justify-center transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{item.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
                >
                  <Zap className="w-4 h-4" />
                  <span>Start Your Project</span>
                </a>
                <div className="text-center font-mono text-[11px] text-slate-500">
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
