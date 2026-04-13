"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Plug,
} from "lucide-react";

const services = [
  {
    title: "AI Automation & Chatbots",
    description:
      "Custom AI agents, intelligent chatbots, and workflow automations that cut operational costs and unlock new capabilities for your business.",
    icon: Bot,
    accent: "#00F0FF",
    accentBg: "rgba(232,168,56,0.08)",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "High-performance web applications built with modern frameworks — React, Next.js, Node.js — optimized for speed, SEO, and scalability.",
    icon: Globe,
    accent: "#B829FF",
    accentBg: "rgba(122,143,120,0.08)",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile apps for iOS & Android. From concept to App Store — smooth, responsive, and built to retain users.",
    icon: Smartphone,
    accent: "#05D9E8",
    accentBg: "rgba(196,133,106,0.08)",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Scalable cloud architectures on AWS, GCP, and Azure. CI/CD pipelines, containerization, and infrastructure-as-code that keeps you shipping fast.",
    icon: Cloud,
    accent: "#FF2A6D",
    accentBg: "rgba(107,143,199,0.08)",
  },
  {
    title: "UI/UX Design & Branding",
    description:
      "Interfaces your users will remember. Strategic design systems, prototyping, and brand identities that translate business goals into visual impact.",
    icon: Palette,
    accent: "#D1F628",
    accentBg: "rgba(184,122,204,0.08)",
  },
  {
    title: "API Development & Integration",
    description:
      "RESTful and GraphQL APIs, third-party integrations, payment gateways, and headless architectures that connect your digital ecosystem.",
    icon: Plug,
    accent: "#01FFA4",
    accentBg: "rgba(199,169,107,0.08)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00F0FF]/[0.02] rounded-full blur-[150px]" />

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
              What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading text-4xl md:text-5xl lg:text-6xl"
            >
              Services built for
              <br />
              <span className="text-gradient-neon">the modern age.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#E2E8F0] text-base max-w-md leading-relaxed lg:text-right"
          >
            From concept to deployment — we bring the full stack of expertise
            your product needs to compete in a digital-first world.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="divider-accent mb-12" />

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative card-base p-7 cursor-default"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accent}40, transparent)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500"
                  style={{ background: service.accentBg }}
                >
                  <service.icon
                    className="w-6 h-6"
                    style={{ color: service.accent }}
                  />
                </div>

                {/* Index */}
                <div className="text-[#F8F8FF]/[0.04] text-5xl font-extrabold font-[family-name:var(--font-space-grotesk)] absolute top-6 right-6 group-hover:text-[#F8F8FF]/[0.08] transition-colors duration-500">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-bold mb-3 text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)] tracking-tight">
                  {service.title}
                </h3>

                <p className="text-[#E2E8F0] leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Bottom bar */}
                <div className="mt-5 h-px w-full bg-[#F8F8FF]/[0.04] relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-700"
                    style={{
                      background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
