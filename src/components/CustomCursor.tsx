"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
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

  // Only show on desktop screens
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
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
          borderColor: isPointer ? "rgba(0, 210, 255, 0.9)" : "rgba(0, 87, 255, 0.45)",
          backgroundColor: isPointer ? "rgba(0, 87, 255, 0.08)" : "transparent",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 380,
          mass: 0.5,
        }}
        className="fixed rounded-full border-2 border-blue-500 backdrop-blur-[1px]"
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
        className="fixed w-2 h-2 rounded-full bg-blue-600 shadow-sm shadow-blue-500"
      />
    </div>
  );
}
