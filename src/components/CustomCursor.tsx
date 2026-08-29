"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    setMounted(true);

    function handleMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });

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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Outer Spring Follower Aura */}
      <motion.div
        animate={{
          x: position.x - (isPointer ? 24 : 18),
          y: position.y - (isPointer ? 24 : 18),
          width: isPointer ? 48 : 36,
          height: isPointer ? 48 : 36,
          scale: isClicking ? 0.75 : 1,
          borderColor: isPointer ? "rgba(184, 255, 0, 0.9)" : "rgba(184, 255, 0, 0.35)",
          backgroundColor: isPointer ? "rgba(184, 255, 0, 0.1)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 380,
          mass: 0.5,
        }}
        className="fixed rounded-full border-2 border-[#B8FF00] backdrop-blur-[1px]"
      />

      {/* Inner Pinpoint Core Dot */}
      <motion.div
        animate={{
          x: position.x - 3.5,
          y: position.y - 3.5,
          scale: isClicking ? 1.6 : 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 600,
        }}
        className="fixed w-2 h-2 rounded-full bg-[#B8FF00] shadow-[0_0_8px_rgba(184,255,0,0.8)]"
      />
    </div>
  );
}
