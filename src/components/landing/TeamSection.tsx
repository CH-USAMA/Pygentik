"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Link as LinkIcon, ChevronDown } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Usama Munawar",
    role: "Founder & Lead Developer",
    bio: "Started building for the web at 17, grew from freelancing to founding Pygentik. Specializes in full-stack architecture, AI integrations, and turning complex business logic into elegant digital products.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1740&auto=format&fit=crop",
    expertise: ["React / Next.js", "Laravel / Node.js", "AI Automation", "Architecture"],
    journey: [
      { year: "2021", event: "Started Freelancing & Web Development" },
      { year: "2023", event: "Founded DUT Tech AI (Now Pygentik)" },
      { year: "2025", event: "Scaled agency to 20+ enterprise clients" },
    ],
    accent: "#00F0FF",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Danish Manzoor",
    role: "Senior Full-Stack Developer",
    bio: "A backend-turned-full-stack engineer who thrives at the intersection of performance and user experience. Has shipped products across fintech, healthtech, and SaaS.",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1914&auto=format&fit=crop",
    expertise: ["Python / Django", "React / TypeScript", "PostgreSQL", "DevOps"],
    journey: [
      { year: "2019", event: "Lead Backend Dev at FinTech Corp" },
      { year: "2022", event: "Orchestrated massive K8s cloud migration" },
      { year: "2024", event: "Joined Pygentik to lead Full-Stack initiatives" },
    ],
    accent: "#B829FF",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Talha Sarwar",
    role: "Senior Lead AI Engineer",
    bio: "A systems thinker with deep expertise in machine learning pipelines and scalable APIs. Passionate about automating the mundane so teams can focus on what matters.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    expertise: ["Python / FastAPI", "TensorFlow / ML", "AWS / Docker", "API Design"],
    journey: [
      { year: "2020", event: "Developed predictive ML algorithms for trading" },
      { year: "2023", event: "Published paper on NLP Optimization" },
      { year: "2025", event: "Leading Pygentik's core AI automation engine" },
    ],
    accent: "#FF2A6D",
    github: "#",
    linkedin: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TeamSection = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  return (
    <section id="team" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B829FF]/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {team.map((member) => {
            const isExpanded = expandedMember === member.name;

            return (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="group card-base overflow-hidden flex flex-col h-full"
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full shrink-0"
                  style={{ background: `linear-gradient(90deg, ${member.accent}, transparent)` }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#F8F8FF]/[0.08]">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)] tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: member.accent }}>
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-[#E2E8F0] text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="mb-6 flex-1">
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

                  {/* Interactive Journey Timeline Toggle */}
                  <div className="mt-auto border-t border-[#F8F8FF]/[0.04]">
                    <button
                      onClick={() => toggleExpand(member.name)}
                      className="w-full py-4 flex items-center justify-between text-sm font-semibold text-[#E2E8F0] hover:text-[#F8F8FF] transition-colors"
                    >
                      <span>Journey / Achievements</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-2 space-y-4 border-l border-[#F8F8FF]/[0.05] ml-2">
                            {member.journey.map((item, i) => (
                              <div key={i} className="relative pl-4">
                                {/* Timeline Dot */}
                                <div
                                  className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full"
                                  style={{ background: member.accent, boxShadow: `0 0 10px ${member.accent}80` }}
                                />
                                <div className="text-xs font-bold text-[#F8F8FF] mb-0.5 font-[family-name:var(--font-space-grotesk)]">
                                  {item.year}
                                </div>
                                <div className="text-[13px] text-[#94A3B8] leading-tight">
                                  {item.event}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-2 pt-4 border-t border-[#F8F8FF]/[0.04]">
                    <a
                      href={member.github}
                      className="w-9 h-9 rounded-lg border border-[#F8F8FF]/[0.06] bg-[#F8F8FF]/[0.02] flex items-center justify-center text-[#94A3B8] hover:text-[#F8F8FF] hover:border-[#F8F8FF]/[0.12] transition-all"
                    >
                      <Code className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 rounded-lg border border-[#F8F8FF]/[0.06] bg-[#F8F8FF]/[0.02] flex items-center justify-center text-[#94A3B8] hover:text-[#F8F8FF] hover:border-[#F8F8FF]/[0.12] transition-all"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
