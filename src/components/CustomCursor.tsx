"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 450, mass: 0.4 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  useEffect(() => {
    // Only mount on desktop with fine pointer
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setMounted(true);

    function handleMouseMove(e: MouseEvent) {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest("a, button, input, select, textarea, [role='button'], input[type='range']");
        setIsPointer(!!clickable);
      }
    }

    function handleMouseDown() {
      setIsClicking(true);
    }

    function handleMouseUp() {
      setIsClicking(false);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [rawX, rawY]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Outer Spring Follower Aura */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 44 : 32,
          height: isPointer ? 44 : 32,
          scale: isClicking ? 0.8 : 1,
          borderColor: isPointer ? "rgba(184, 255, 0, 0.9)" : "rgba(184, 255, 0, 0.4)",
          backgroundColor: isPointer ? "rgba(184, 255, 0, 0.12)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.15 }}
        className="fixed rounded-full border-2 border-[#B8FF00] backdrop-blur-[1px] will-change-transform pointer-events-none"
      />

      {/* Inner Pinpoint Core Dot */}
      <motion.div
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.6 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="fixed w-2 h-2 rounded-full bg-[#B8FF00] shadow-[0_0_10px_rgba(184,255,0,0.9)] will-change-transform pointer-events-none"
      />
    </div>
  );
}
