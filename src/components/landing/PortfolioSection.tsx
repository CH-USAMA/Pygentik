"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Meridian CRM",
    category: "Web Application",
    description:
      "Enterprise client relationship management platform with real-time analytics, automated lead scoring, and multi-team collaboration dashboards.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-[#00F0FF]/20 to-[#D4942A]/10",
    borderAccent: "#00F0FF",
    link: "#",
  },
  {
    title: "NexaHealth",
    category: "Mobile App",
    description:
      "Telehealth and patient management mobile app supporting video consultations, prescription tracking, and health analytics for 50K+ active users.",
    tags: ["React Native", "Firebase", "TypeScript", "Stripe"],
    gradient: "from-[#B829FF]/20 to-[#5A7258]/10",
    borderAccent: "#B829FF",
    link: "#",
  },
  {
    title: "AutoFlow",
    category: "AI / Automation",
    description:
      "AI-powered workflow automation engine that reduces manual data processing by 85% through intelligent document parsing and task routing.",
    tags: ["Python", "TensorFlow", "FastAPI", "Redis"],
    gradient: "from-[#FF2A6D]/20 to-[#4A6FA0]/10",
    borderAccent: "#FF2A6D",
    link: "#",
  },
  {
    title: "TerraScope",
    category: "Data Analytics",
    description:
      "Real estate analytics and valuation dashboard aggregating market data, ML-driven price predictions, and interactive geospatial visualizations.",
    tags: ["Next.js", "D3.js", "Python", "ML"],
    gradient: "from-[#05D9E8]/20 to-[#A06B50]/10",
    borderAccent: "#05D9E8",
    link: "#",
  },
  {
    title: "Pulse Connect",
    category: "Full Stack",
    description:
      "Enterprise team collaboration platform with real-time messaging, project boards, file sharing, and integrations with 20+ workplace tools.",
    tags: ["Vue.js", "GraphQL", "Docker", "K8s"],
    gradient: "from-[#D1F628]/20 to-[#9A5CB0]/10",
    borderAccent: "#D1F628",
    link: "#",
  },
  {
    title: "QuantEdge",
    category: "FinTech",
    description:
      "Financial data processing and reporting system handling $2M+ daily transactions with real-time fraud detection and compliance automation.",
    tags: ["Python", "Pandas", "React", "PostgreSQL"],
    gradient: "from-[#01FFA4]/20 to-[#A08B4E]/10",
    borderAccent: "#01FFA4",
    link: "#",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
                key={project.title}
                href={project.link}
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
                  className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Geometric pattern */}
                  <div className="absolute inset-0 opacity-[0.06]">
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

                  {/* Project initial */}
                  <div
                    className="text-6xl font-extrabold font-[family-name:var(--font-space-grotesk)] opacity-20 select-none"
                    style={{ color: project.borderAccent }}
                  >
                    {project.title.charAt(0)}
                  </div>

                  {/* External link icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#050505]/50 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight
                      className="w-4 h-4"
                      style={{ color: project.borderAccent }}
                    />
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-[#050505]/60 backdrop-blur text-xs font-medium text-[#F8F8FF]/70">
                    {project.category}
                  </div>
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
      </div>
    </section>
  );
};

export default PortfolioSection;
