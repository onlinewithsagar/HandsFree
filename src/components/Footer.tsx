"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black pt-16 pb-12 mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/logo-icon-tight.png"
                  alt="HandsFree"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="font-heading font-black text-2xl tracking-tight text-white leading-none">
                <span>Hands</span><span className="text-[#B8FF00]">Free</span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm max-w-sm mb-6 leading-relaxed">
              Building autonomous growth engines and lightning-fast digital experiences for modern companies.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Mail className="w-4 h-4 text-[#B8FF00]" />
              <a href="mailto:handsfree.in@gmail.com" className="hover:text-white transition-colors">
                handsfree.in@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Infrastructure</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><Link href="/#pillars" className="hover:text-[#B8FF00] transition-colors">Core Pillars</Link></li>
              <li><Link href="/#services" className="hover:text-[#B8FF00] transition-colors">Capabilities Matrix</Link></li>
              <li><Link href="/#studio" className="hover:text-[#B8FF00] transition-colors">Workflow Studio</Link></li>
              <li><Link href="/pricing#calculator" className="hover:text-[#B8FF00] transition-colors">ROI Simulator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li><Link href="/pricing" className="hover:text-[#B8FF00] transition-colors">Pricing & Sprints</Link></li>
              <li><Link href="/hiring" className="hover:text-[#B8FF00] transition-colors flex items-center gap-1.5">Hiring <span className="text-[9px] bg-[#B8FF00]/10 text-[#B8FF00] px-1.5 py-0.5 rounded font-mono font-bold">SPOT HIRING</span></Link></li>
              <li><Link href="/privacy" className="hover:text-[#B8FF00] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#B8FF00] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-xs font-semibold text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} HandsFree Systems Inc. Built for autonomous scale.</div>
          <div className="flex items-center gap-2 text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-[#B8FF00]" /> All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
