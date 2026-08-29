"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SubpageHeaderProps {
  showContactButton?: boolean;
}

export default function SubpageHeader({ showContactButton = false }: SubpageHeaderProps) {
  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur-2xl sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
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
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-300 hover:text-white transition-colors py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          {showContactButton && (
            <Link
              href="/#book"
              className="hidden sm:inline-flex px-4 py-2 bg-[#B8FF00] hover:bg-[#A3E600] text-black text-xs font-bold rounded-full transition-all items-center gap-1.5 shadow-lg shadow-[#B8FF00]/25 hover:scale-105"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
