"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { AnimatedBackground } from "@/components/landing/AnimatedBackground";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-transparent relative flex flex-col">
      <AnimatedBackground />
      <div className="noise-overlay z-10 opacity-30 pointer-events-none" />

      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="flex-1 relative z-20 pt-32 pb-28 px-6 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-space-grotesk)] text-[#F8F8FF] tracking-tight mb-6">
            All <span className="text-gradient-neon">Projects</span>
          </h1>
          <p className="text-xl text-[#E2E8F0] max-w-2xl leading-relaxed">
            Explore our complete archive of engineering work, automated platforms, and high-performance digital products deployed worldwide.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#00F0FF] text-[#050505]"
                  : "bg-[#F8F8FF]/[0.03] text-[#E2E8F0] border border-[#F8F8FF]/[0.06] hover:text-[#F8F8FF] hover:border-[#F8F8FF]/[0.12]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="group card-base overflow-hidden cursor-pointer block h-full flex flex-col"
                >
                  <div
                    className={`relative h-48 bg-[#050505] flex items-center justify-center overflow-hidden shrink-0`}
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 mix-blend-color`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

                    <div className="absolute inset-0 opacity-[0.1]">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `linear-gradient(45deg, ${project.borderAccent}20 25%, transparent 25%), linear-gradient(-45deg, ${project.borderAccent}20 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${project.borderAccent}20 75%), linear-gradient(-45deg, transparent 75%, ${project.borderAccent}20 75%)`,
                          backgroundSize: "20px 20px",
                          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                        }}
                      />
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-[#050505]/60 backdrop-blur text-[10px] font-bold text-[#F8F8FF] uppercase tracking-widest border border-[#F8F8FF]/[0.08]">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)] tracking-tight group-hover:text-[#00F0FF] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#E2E8F0] text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#F8F8FF]/[0.03] text-[10px] font-semibold text-[#E2E8F0] uppercase tracking-wider border border-[#F8F8FF]/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
