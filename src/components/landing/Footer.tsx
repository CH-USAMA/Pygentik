"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Code, Link as LinkIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Services: [
    { name: "AI Automation", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Cloud & DevOps", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "API Integration", href: "#services" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
  Connect: [
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Twitter / X", href: "#" },
    { name: "hello@pygentik.com", href: "mailto:hello@pygentik.com" },
  ],
};

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-[#F8F8FF]/[0.04] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#00F0FF]/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-9 h-9 rounded-lg bg-[#00F0FF] flex items-center justify-center overflow-hidden">
                <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-[#050505] rotate-45" />
                <span className="relative font-[var(--font-space-grotesk)] text-base font-extrabold text-[#050505]">
                  P
                </span>
              </div>
              <span className="text-lg font-bold text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)]">
                Pygentik
              </span>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs mb-6">
              Digital engineering and AI solutions for modern businesses.
              We build products that scale, perform, and stand out.
            </p>

            {/* Status */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#B829FF] animate-pulse-soft" />
              <span className="text-xs text-[#B829FF] font-medium uppercase tracking-widest">
                Available for work
              </span>
            </div>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-lg bg-[#0D0D12] border border-[#F8F8FF]/[0.06] text-sm text-[#F8F8FF] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00F0FF]/40 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 rounded-lg bg-[#00F0FF] text-[#050505] font-semibold"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4 text-[#F8F8FF] text-sm font-[family-name:var(--font-space-grotesk)]">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#94A3B8] hover:text-[#00F0FF] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F8F8FF]/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8]/60 text-xs tracking-wider">
            © {new Date().getFullYear()} Pygentik. All rights reserved.
          </p>

          <div className="flex gap-2">
            {[
              { icon: Code, label: "GitHub", href: "#" },
              { icon: LinkIcon, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hello@pygentik.com" },
            ].map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg border border-[#F8F8FF]/[0.06] bg-[#F8F8FF]/[0.02] flex items-center justify-center text-[#94A3B8] hover:text-[#00F0FF] hover:border-[#00F0FF]/20 transition-all"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
