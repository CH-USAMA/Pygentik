"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
      ? projects.slice(0, 6)
      : projects.filter((p) => p.category === activeFilter).slice(0, 6);

  return (
    <section id="portfolio" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#00F0FF]/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-5"
            >
              Our Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading text-4xl md:text-5xl lg:text-6xl"
            >
              Projects that
              <br />
              <span className="text-gradient-neon">define impact.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#E2E8F0] text-base max-w-md leading-relaxed lg:text-right"
          >
            A selection of recent work across web, mobile, AI, and enterprise
            — each built to solve real problems at scale.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
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
        </motion.div>

        {/* Divider */}
        <div className="divider-accent mb-12" />

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.a
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group card-base overflow-hidden cursor-pointer block"
              >
                {/* Visual Header */}
                <div
                  className={`relative h-44 bg-[#050505] flex items-center justify-center overflow-hidden`}
                >
                  {/* Base Unsplash Image */}
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient & Dark Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 mix-blend-color`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

                  {/* Geometric pattern */}
                  <div className="absolute inset-0 opacity-[0.1]">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                          linear-gradient(45deg, ${project.borderAccent}20 25%, transparent 25%),
                          linear-gradient(-45deg, ${project.borderAccent}20 25%, transparent 25%),
                          linear-gradient(45deg, transparent 75%, ${project.borderAccent}20 75%),
                          linear-gradient(-45deg, transparent 75%, ${project.borderAccent}20 75%)
                        `,
                        backgroundSize: "20px 20px",
                        backgroundPosition:
                          "0 0, 0 10px, 10px -10px, -10px 0px",
                      }}
                    />
                  </div>

                  {/* Top-Right Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-[#050505]/60 backdrop-blur text-[10px] font-bold text-[#F8F8FF] uppercase tracking-widest border border-[#F8F8FF]/[0.08]">
                    {project.category}
                  </div>

                  {/* Removed absolute position overrides to clean up UI */}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)] tracking-tight group-hover:text-[#00F0FF] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#E2E8F0] text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
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
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F8F8FF]/[0.03] border border-[#F8F8FF]/[0.08] hover:border-[#00F0FF]/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/10 to-[#B829FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative font-bold text-[#E2E8F0] group-hover:text-[#F8F8FF] tracking-wide">
              View All Projects
            </span>
            <ArrowUpRight className="relative w-5 h-5 text-[#00F0FF] group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
