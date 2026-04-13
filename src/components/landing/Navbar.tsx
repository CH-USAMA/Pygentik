"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Team", href: "#team" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-[#F8F8FF]/[0.06] py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-10 h-10 rounded-lg bg-[#00F0FF] flex items-center justify-center overflow-hidden"
          >
            {/* Diagonal cut for geometric feel */}
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#050505] rotate-45" />
            <span className="relative font-[var(--font-space-grotesk)] text-lg font-extrabold text-[#050505] -tracking-wide">
              P
            </span>
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)]">
            Pygentik
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
            >
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#E2E8F0] hover:text-[#F8F8FF] rounded-lg hover:bg-[#F8F8FF]/[0.03] transition-all duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="/discovery"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="ml-4 px-6 py-2.5 rounded-lg bg-[#00F0FF] text-[#050505] text-sm font-bold tracking-tight transition-all hover:bg-[#F0B84A] hover:shadow-[0_0_24px_rgba(232,168,56,0.2)]"
          >
            Start a Project
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#F8F8FF] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050505]/98 backdrop-blur-2xl border-b border-[#F8F8FF]/[0.06] overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[#E2E8F0] py-3 px-4 rounded-xl hover:bg-[#F8F8FF]/[0.03] hover:text-[#F8F8FF] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/discovery"
                className="w-full py-4 mt-4 rounded-xl bg-[#00F0FF] text-[#050505] font-bold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
