"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef, useState, PointerEvent, ReactNode, useEffect } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltEnabled, setTiltEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Fine pointer = mouse/trackpad. Skip tilt physics on touch to save CPU/battery on mobile.
    setTiltEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const springConfig = { stiffness: 400, damping: 30, mass: 0.5 };
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), springConfig);
  const scale = useSpring(isHovered ? 1.03 : 1, springConfig);

  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);
  const sheenAngle = useTransform(rotateY, (v) => `${v * 8 + 120}deg`);

  const radialGlowBackground = useTransform(
    [glowX, glowY] as [MotionValue<string>, MotionValue<string>],
    (latest: string[]) => `radial-gradient(500px circle at ${latest[0]} ${latest[1]}, rgba(184, 255, 0, 0.18), transparent 75%)`
  );

  const sheenBackground = useTransform(
    sheenAngle,
    (a) => `linear-gradient(${a}, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`
  );

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!tiltEnabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    mx.set(0.5);
    my.set(0.5);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
      style={{
        rotateX: tiltEnabled ? rotateX : 0,
        rotateY: tiltEnabled ? rotateY : 0,
        scale,
        perspective: 1200,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={`relative overflow-hidden rounded-3xl transition-shadow duration-300 ${isHovered ? 'shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(184,255,0,0.18)]' : ''} ${className}`}
    >
      {tiltEnabled && (
        <>
          <motion.div
            className="pointer-events-none absolute -inset-px z-10"
            style={{
              opacity: isHovered ? 1 : 0,
              background: radialGlowBackground,
              transition: "opacity 0.3s",
            }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay"
            style={{
              opacity: isHovered ? 0.6 : 0,
              background: sheenBackground,
              transition: "opacity 0.3s",
            }}
          />
        </>
      )}
      <motion.div
        style={{
          translateZ: tiltEnabled && isHovered ? 20 : 0,
          transition: "transform 0.25s ease-out",
        }}
        className="h-full flex flex-col justify-between"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
