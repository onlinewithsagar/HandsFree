"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 z-[100] origin-left shadow-sm shadow-cyan-400/50"
      style={{ scaleX }}
    />
  );
}
