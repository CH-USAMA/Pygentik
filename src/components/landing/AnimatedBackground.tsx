"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!mounted) return <div className="fixed inset-0 bg-[#050505] z-0" />;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Cyberpunk Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Hex Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
        }}
      />

      {/* Cursor tracking halo */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-60 will-change-transform transform-gpu pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.3) 0%, rgba(184,41,255,0.1) 40%, transparent 70%)",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Secondary Ambient Light 1 - Purple */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] top-[10%] w-[800px] h-[800px] rounded-full will-change-transform transform-gpu pointer-events-none"
        style={{ background: "radial-gradient(circle, #B829FF 0%, transparent 60%)" }}
      />

      {/* Secondary Ambient Light 2 - Hot Pink */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[0%] bottom-[0%] w-[700px] h-[700px] rounded-full will-change-transform transform-gpu pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF2A6D 0%, transparent 60%)" }}
      />

      {/* Subtle Matrix Green Ambient Center */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none" 
        style={{ background: "radial-gradient(circle, #01FFA4 0%, transparent 60%)" }}
      />

      {/* Grid fade bottom & top mask for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-90" />
    </div>
  );
};
