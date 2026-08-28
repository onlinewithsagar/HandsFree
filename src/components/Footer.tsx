"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-heading font-black text-2xl tracking-tight text-white mb-2">
            <span>Hands</span><span className="text-blue-500">Free</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} HandsFree Systems Inc. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-medium">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#studio" className="hover:text-white transition-colors">Workflow Studio</a>
          <a href="#calculator" className="hover:text-white transition-colors">ROI Matrix</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-600 hover:text-blue-400 text-slate-400 flex items-center justify-center transition-all shadow-md"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
