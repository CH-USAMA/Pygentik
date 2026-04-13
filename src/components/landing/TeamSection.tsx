"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Link, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Usama Munawar",
    role: "Founder & Lead Developer",
    bio: "Started building for the web at 17, grew from freelancing to founding Pygentik. Specializes in full-stack architecture, AI integrations, and turning complex business logic into elegant digital products. Obsessed with shipping fast without compromising quality.",
    expertise: [
      "React / Next.js",
      "Laravel / Node.js",
      "AI Automation",
      "System Architecture",
    ],
    accent: "#00F0FF",
    initials: "UM",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Danish Manzoor",
    role: "Senior Full-Stack Developer",
    bio: "A backend-turned-full-stack engineer who thrives at the intersection of performance and user experience. Has shipped products across fintech, healthtech, and SaaS — each one faster and more resilient than the last.",
    expertise: [
      "Python / Django",
      "React / TypeScript",
      "PostgreSQL",
      "Cloud & DevOps",
    ],
    accent: "#B829FF",
    initials: "DM",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Talha Sarwar",
    role: "Backend & AI Engineer",
    bio: "A systems thinker with deep expertise in machine learning pipelines and scalable APIs. Passionate about automating the mundane so teams can focus on what matters. Writes code that other engineers enjoy maintaining.",
    expertise: [
      "Python / FastAPI",
      "TensorFlow / ML",
      "AWS / Docker",
      "API Design",
    ],
    accent: "#FF2A6D",
    initials: "TS",
    github: "#",
    linkedin: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const TeamSection = () => {
  return (
    <section id="team" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B829FF]/[0.02] rounded-full blur-[120px]" />

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
              The Team
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-heading text-4xl md:text-5xl lg:text-6xl"
            >
              Builders, not just
              <br />
              <span className="text-gradient-neon">developers.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#E2E8F0] text-base max-w-md leading-relaxed lg:text-right"
          >
            A tight-knit team of engineers who ship production-grade code
            and treat every project like it&apos;s their own.
          </motion.p>
        </div>

        <div className="divider-accent mb-12" />

        {/* Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group card-base overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${member.accent}, transparent)`,
                }}
              />

              <div className="p-7">
                {/* Avatar + Name */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-extrabold text-lg font-[family-name:var(--font-space-grotesk)] tracking-tight"
                    style={{
                      background: `${member.accent}15`,
                      color: member.accent,
                      border: `1px solid ${member.accent}25`,
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)] tracking-tight">
                      {member.name}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: member.accent }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-[#E2E8F0] text-sm leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Expertise tags */}
                <div className="mb-5">
                  <div className="text-[10px] text-[#94A3B8] uppercase tracking-[0.15em] font-semibold mb-3">
                    Expertise
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium border"
                        style={{
                          background: `${member.accent}08`,
                          borderColor: `${member.accent}15`,
                          color: `${member.accent}CC`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="flex gap-2 pt-4 border-t border-[#F8F8FF]/[0.04]">
                  <a
                    href={member.github}
                    className="w-9 h-9 rounded-lg border border-[#F8F8FF]/[0.06] bg-[#F8F8FF]/[0.02] flex items-center justify-center text-[#94A3B8] hover:text-[#F8F8FF] hover:border-[#F8F8FF]/[0.12] transition-all"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Code className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-lg border border-[#F8F8FF]/[0.06] bg-[#F8F8FF]/[0.02] flex items-center justify-center text-[#94A3B8] hover:text-[#F8F8FF] hover:border-[#F8F8FF]/[0.12] transition-all"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Link className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
