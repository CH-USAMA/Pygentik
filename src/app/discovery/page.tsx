"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { AnimatedBackground } from "@/components/landing/AnimatedBackground";

export default function DiscoveryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-transparent relative flex flex-col">
      <AnimatedBackground />
      <div className="noise-overlay z-10 opacity-30 pointer-events-none" />

      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="flex-1 relative z-20 pt-32 pb-28 px-6 max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#E2E8F0] hover:text-[#00F0FF] mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-20"
          >
            <div className="w-20 h-20 rounded-full bg-[#01FFA4]/10 flex items-center justify-center mb-8 border border-[#01FFA4]/30 shadow-[0_0_30px_rgba(1,255,164,0.2)]">
              <CheckCircle className="w-10 h-10 text-[#01FFA4]" />
            </div>
            <h2 className="text-4xl font-extrabold text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)] mb-4">
              Project Brief Received
            </h2>
            <p className="text-[#E2E8F0] text-lg max-w-lg leading-relaxed mb-10">
              Our engineering team is reviewing your requirements. We will be in touch within 24 hours to schedule a deep-dive architectural scoping call.
            </p>
            <Link
              href="/"
              className="px-8 py-4 rounded-xl bg-[#F8F8FF]/[0.03] border border-[#F8F8FF]/[0.08] hover:border-[#01FFA4]/40 text-[#F8F8FF] font-semibold transition-all hover:shadow-[0_0_20px_rgba(1,255,164,0.1)]"
            >
              Return Home
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-12">
              <div className="section-label mb-5">Project Discovery</div>
              <h1 className="text-4xl md:text-6xl font-extrabold font-[family-name:var(--font-space-grotesk)] text-[#F8F8FF] tracking-tight mb-6">
                Tell us what you want to <span className="text-gradient-neon">automate.</span>
              </h1>
              <p className="text-lg text-[#E2E8F0] max-w-2xl leading-relaxed">
                Whether you need a full enterprise migration, a custom ML model, or a high-performance web platform, provide us with the details so we can construct a tailored architectural blueprint.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Info */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#E2E8F0] uppercase tracking-wider block">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 rounded-xl bg-[#0D0D12] border border-[#F8F8FF]/[0.06] text-[#F8F8FF] focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#E2E8F0] uppercase tracking-wider block">Work Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-5 py-4 rounded-xl bg-[#0D0D12] border border-[#F8F8FF]/[0.06] text-[#F8F8FF] focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              {/* Current Situation */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#E2E8F0] uppercase tracking-wider block">What is the core issue you are facing today?</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-[#0D0D12] border border-[#F8F8FF]/[0.06] text-[#F8F8FF] focus:outline-none focus:border-[#B829FF]/50 transition-colors resize-none"
                  placeholder="e.g., Our manual lead qualification process takes 15 hours a week and is causing data entry delays..."
                />
              </div>

              {/* Proposed Architecture Info */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#E2E8F0] uppercase tracking-wider block">What is your desired outcome or automated state?</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-[#0D0D12] border border-[#F8F8FF]/[0.06] text-[#F8F8FF] focus:outline-none focus:border-[#01FFA4]/50 transition-colors resize-none"
                  placeholder="e.g., We want an AI agent that automatically parses inbound leads, scores them, and inserts them into our PostgreSQL database..."
                />
              </div>

              {/* Budget Scale */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#E2E8F0] uppercase tracking-wider block">Estimated Project Budget Scale</label>
                <select defaultValue="" className="w-full px-5 py-4 rounded-xl bg-[#0D0D12] border border-[#F8F8FF]/[0.06] text-[#94A3B8] focus:outline-none focus:border-[#00F0FF]/50 transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Select an order of magnitude...</option>
                  <option value="10k">$10k - $25k</option>
                  <option value="25k">$25k - $50k</option>
                  <option value="50k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>

              {/* Submit Action */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto relative group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#F8F8FF]/[0.02] border border-[#00F0FF]/30 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative font-bold text-[#F8F8FF] tracking-wide">
                    {isSubmitting ? "Transmitting..." : "Initialize Architectural Scoping"}
                  </span>
                  {!isSubmitting && <Send className="relative w-5 h-5 text-[#00F0FF]" />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}
