"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-black text-white border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src="/logo-icon-tight.png"
              alt="HandsFree Logo Icon"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="font-heading font-black text-2xl tracking-tight text-white leading-none">
              <span>Hands</span><span className="text-[#B8FF00]">Free</span>
            </div>
            <p className="text-[11px] text-neutral-500 font-mono mt-1">
              &copy; {new Date().getFullYear()} HandsFree Systems Inc. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400 font-medium">
          <a href="#services" className="hover:text-[#B8FF00] transition-colors">Services</a>
          <a href="#studio" className="hover:text-[#B8FF00] transition-colors">Workflow Studio</a>
          <a href="#calculator" className="hover:text-[#B8FF00] transition-colors">ROI Matrix</a>
          <a href="#about" className="hover:text-[#B8FF00] transition-colors">About</a>
          <a href="#testimonials" className="hover:text-[#B8FF00] transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-[#B8FF00] transition-colors">Contact</a>
        </div>

        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 hover:border-[#B8FF00] hover:text-[#B8FF00] text-neutral-400 flex items-center justify-center transition-all shadow-md hover:shadow-[0_0_15px_rgba(184,255,0,0.25)]"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
