"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Compass, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We learn your business, users, and goals. Through workshops and deep-dives, we identify the right scope, tech stack, and roadmap — so there are no surprises down the line.",
    icon: MessageSquare,
    accent: "#00F0FF",
    accentBg: "rgba(232,168,56,0.08)",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:
      "Wireframes, data models, API specs — we blueprint every layer of your product. You'll see exactly what we're building before a single line of production code is written.",
    icon: Compass,
    accent: "#B829FF",
    accentBg: "rgba(122,143,120,0.08)",
  },
  {
    number: "03",
    title: "Development & Iteration",
    description:
      "Agile sprints with transparent progress. You get weekly demos, direct Slack access to engineers, and the ability to steer priorities in real-time. Built fast, built right.",
    icon: Code2,
    accent: "#FF2A6D",
    accentBg: "rgba(107,143,199,0.08)",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Battle-tested deployment with monitoring, CI/CD, and post-launch support. We don't disappear after launch — we're here to iterate, scale, and support your growth.",
    icon: Rocket,
    accent: "#05D9E8",
    accentBg: "rgba(196,133,106,0.08)",
  },
];

const ProcessSteps = () => {
  return (
    <section id="process" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF2A6D]/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-5"
            >
              How We Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading text-4xl md:text-5xl lg:text-6xl"
            >
              From brief to
              <br />
              <span className="text-gradient-neon">production.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#E2E8F0] text-base max-w-md leading-relaxed lg:text-right"
          >
            A battle-tested process that keeps you in the loop at every stage
            — no black boxes, no handwave timelines.
          </motion.p>
        </div>

        <div className="divider-accent mb-12" />

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00F0FF]/10 via-[#B829FF]/10 to-[#05D9E8]/10 hidden lg:block" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="card-base p-7 h-full relative overflow-hidden">
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${step.accent}06, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Step number + icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                      style={{ background: step.accentBg }}
                    >
                      <step.icon
                        className="w-6 h-6"
                        style={{ color: step.accent }}
                      />
                    </div>
                    <span
                      className="text-4xl font-extrabold font-[family-name:var(--font-space-grotesk)] transition-colors duration-500"
                      style={{ color: `${step.accent}08` }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)] tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-[#E2E8F0] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector dot */}
              {idx < steps.length - 1 && (
                <div className="absolute top-16 -right-2.5 w-5 h-5 rounded-full border border-[#F8F8FF]/[0.06] bg-[#050505] hidden lg:flex items-center justify-center z-20">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: step.accent }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
