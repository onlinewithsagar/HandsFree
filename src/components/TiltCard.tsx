"use client";

import { motion } from "framer-motion";
import { useState, useRef, MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
    setMousePosition({ x, y });
  }

  function handleMouseLeave() {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden rounded-3xl transition-shadow duration-300 ${isHovered ? 'shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(184,255,0,0.18)]' : ''} ${className}`}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {isHovered && (
        <>
          {/* Radial Spotlight */}
          <div
            className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(184, 255, 0, 0.18), transparent 75%)`,
            }}
          />
          {/* Ambient Sheen Glare */}
          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-60 mix-blend-overlay"
            style={{
              background: `linear-gradient(${rotateY * 8 + 120}deg, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`,
            }}
          />
        </>
      )}
      <div style={{ transform: isHovered ? "translateZ(20px)" : "translateZ(0px)", transition: "transform 0.25s ease-out" }} className="h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
