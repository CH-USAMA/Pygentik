"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#00F0FF]/[0.04] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#B829FF]/[0.03] blur-[120px]" />

        {/* Geometric grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(240,235,224,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(240,235,224,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Angular decorative line */}
        <svg
          className="absolute top-20 right-[10%] w-[400px] h-[400px] opacity-[0.04]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M0 200 L200 0 L400 200 L200 400 Z"
            stroke="#00F0FF"
            strokeWidth="1"
          />
          <path
            d="M50 200 L200 50 L350 200 L200 350 Z"
            stroke="#00F0FF"
            strokeWidth="0.5"
          />
        </svg>

        {/* Horizontal accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/10 to-transparent origin-left"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content — takes 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B829FF] animate-pulse-soft" />
              Open for Projects · 2026
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] font-[family-name:var(--font-space-grotesk)]"
            >
              We engineer
              <br />
              <span className="text-gradient-neon">digital futures.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#E2E8F0] max-w-lg leading-relaxed"
            >
              Pygentik builds high-performance web apps, AI automations, and
              enterprise-grade digital products — tailored for businesses ready
              to move fast.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/discovery"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F8F8FF] text-[#050505] rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(248,248,255,0.3)]"
              >
                Let&apos;s Build Together{" "}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <motion.a
                href="#portfolio"
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(240,235,224,0.06)",
                }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-lg bg-[#F8F8FF]/[0.03] border border-[#F8F8FF]/[0.08] text-[#F8F8FF] font-bold backdrop-blur-md text-base"
              >
                View Our Work
              </motion.a>
            </motion.div>

            {/* Mini stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 pt-6 border-t border-[#F8F8FF]/[0.06]"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "98%", label: "Satisfaction" },
                { value: "30+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-extrabold text-[#00F0FF] font-[family-name:var(--font-space-grotesk)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-widest mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — abstract visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full aspect-square max-w-[460px]">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border border-[#F8F8FF]/[0.04]" />
              <div className="absolute inset-8 rounded-full border border-[#F8F8FF]/[0.04]" />
              <div className="absolute inset-16 rounded-full border border-[#00F0FF]/[0.08]" />

              {/* Inner core */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#00F0FF]/10 to-[#B829FF]/10 border border-[#00F0FF]/[0.12] flex items-center justify-center">
                <div className="w-16 h-16 rounded-lg bg-[#00F0FF]/20 rotate-45 flex items-center justify-center">
                  <div className="w-8 h-8 rounded bg-[#00F0FF]/30 -rotate-45" />
                </div>
              </div>

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_12px_rgba(232,168,56,0.5)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B829FF]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-8"
              >
                <div className="absolute top-1/2 right-0 translate-y-[-50%] w-2 h-2 rounded-full bg-[#F8F8FF]/40" />
                <div className="absolute top-1/2 left-0 translate-y-[-50%] w-1 h-1 rounded-full bg-[#00F0FF]/60" />
              </motion.div>

              {/* Floating tech labels */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -right-4 px-3 py-1.5 rounded-lg bg-[#16161A] border border-[#F8F8FF]/[0.06] text-xs text-[#E2E8F0] font-medium"
              >
                Next.js
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -left-6 px-3 py-1.5 rounded-lg bg-[#16161A] border border-[#00F0FF]/[0.1] text-xs text-[#00F0FF] font-medium"
              >
                AI/ML
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/3 -left-8 px-3 py-1.5 rounded-lg bg-[#16161A] border border-[#B829FF]/[0.15] text-xs text-[#B829FF] font-medium"
              >
                Cloud
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-1/3 -right-6 px-3 py-1.5 rounded-lg bg-[#16161A] border border-[#F8F8FF]/[0.06] text-xs text-[#E2E8F0] font-medium"
              >
                React
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#94A3B8] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-[#94A3B8]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
