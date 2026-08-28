"use client";

import { useState } from "react";
import {
  Volume2,
  VolumeX,
  Menu,
  X,
  Layers,
  Cpu,
  Calculator,
  Shield,
  GitMerge,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function Navbar({ soundEnabled, onToggleSound }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
          <a href="#services" className="hover:text-blue-600 flex items-center gap-1.5 transition-colors">
            <Layers className="w-3.5 h-3.5 text-blue-600" /> Services
          </a>
          <a href="#studio" className="hover:text-blue-600 flex items-center gap-1.5 transition-colors">
            <Cpu className="w-3.5 h-3.5 text-blue-600" /> Workflow Studio
          </a>
          <a href="#calculator" className="hover:text-blue-600 flex items-center gap-1.5 transition-colors">
            <Calculator className="w-3.5 h-3.5 text-blue-600" /> ROI Matrix
          </a>
          <a href="#about" className="hover:text-blue-600 flex items-center gap-1.5 transition-colors">
            <Shield className="w-3.5 h-3.5 text-blue-600" /> About
          </a>
          <a href="#process" className="hover:text-blue-600 flex items-center gap-1.5 transition-colors">
            <GitMerge className="w-3.5 h-3.5 text-blue-600" /> Process
          </a>
          <a href="#testimonials" className="hover:text-blue-600 flex items-center gap-1.5 transition-colors">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" /> Testimonials
          </a>
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-4">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            Services
          </a>
          <a
            href="#studio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            Workflow Studio
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            ROI Matrix
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            About
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            Process
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-700 hover:text-blue-600"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 rounded-xl bg-blue-600 text-white font-semibold"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
