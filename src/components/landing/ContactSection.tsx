"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

type FormState = "idle" | "sending" | "success" | "error";

const projectTypes = [
  "Web Application",
  "Mobile App",
  "AI & Automation",
  "Cloud / DevOps",
  "UI/UX Design",
  "API Integration",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (!data.get("name")?.toString().trim())
      errs.name = "Name is required";
    const email = data.get("email")?.toString().trim() || "";
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email address";
    if (!data.get("projectType"))
      errs.projectType = "Please select a project type";
    if (!data.get("description")?.toString().trim())
      errs.description = "Tell us about your project";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const validationErrors = validate(fd);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormState("sending");

    try {
      const body = {
        name: fd.get("name"),
        email: fd.get("email"),
        company: fd.get("company"),
        projectType: fd.get("projectType"),
        budget: fd.get("budget"),
        description: fd.get("description"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to send");
      setFormState("success");
      formRef.current?.reset();
    } catch {
      setFormState("error");
    }
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-lg bg-[#0D0D12] border border-[#F8F8FF]/[0.06] text-[#F8F8FF] text-sm placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00F0FF]/40 focus:ring-1 focus:ring-[#00F0FF]/20 transition-all duration-300";

  const selectBase =
    "w-full px-4 py-3.5 rounded-lg bg-[#0D0D12] border border-[#F8F8FF]/[0.06] text-sm focus:outline-none focus:border-[#00F0FF]/40 focus:ring-1 focus:ring-[#00F0FF]/20 transition-all duration-300 appearance-none cursor-pointer";

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00F0FF]/[0.02] blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-5 mx-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B829FF] animate-pulse-soft" />
            Open for Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Ready to build
            <br />
            <span className="text-gradient-neon">something great?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#E2E8F0] text-base max-w-xl mx-auto leading-relaxed"
          >
            Tell us about your project and we&apos;ll get back to you within
            24 hours with a tailored proposal.
          </motion.p>
        </div>

        <div className="divider-accent mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-base p-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)] tracking-tight mb-4">
                  Let&apos;s talk
                </h3>
                <p className="text-[#E2E8F0] text-sm leading-relaxed">
                  We&apos;re always excited to discuss new projects and ideas.
                  Whether you have a detailed spec or just a rough concept —
                  reach out.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00F0FF]/[0.08] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8] uppercase tracking-widest mb-0.5">
                      Email
                    </div>
                    <div className="text-sm text-[#F8F8FF] font-medium">
                      hello@pygentik.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#B829FF]/[0.08] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#B829FF]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8] uppercase tracking-widest mb-0.5">
                      Based in
                    </div>
                    <div className="text-sm text-[#F8F8FF] font-medium">
                      Remote — Worldwide
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF2A6D]/[0.08] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#FF2A6D]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8] uppercase tracking-widest mb-0.5">
                      Response Time
                    </div>
                    <div className="text-sm text-[#F8F8FF] font-medium">
                      Within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech marquee */}
            <div className="card-base p-5 overflow-hidden">
              <div className="text-[10px] text-[#94A3B8] uppercase tracking-[0.15em] font-semibold mb-3">
                Technologies we work with
              </div>
              <div className="relative overflow-hidden">
                <div className="flex gap-3 animate-marquee whitespace-nowrap">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Python",
                    "TypeScript",
                    "TensorFlow",
                    "AWS",
                    "Docker",
                    "PostgreSQL",
                    "Laravel",
                    "Vue.js",
                    "GraphQL",
                    "Kubernetes",
                    "Firebase",
                    "FastAPI",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Python",
                    "TypeScript",
                    "TensorFlow",
                    "AWS",
                    "Docker",
                    "PostgreSQL",
                    "Laravel",
                    "Vue.js",
                    "GraphQL",
                    "Kubernetes",
                    "Firebase",
                    "FastAPI",
                  ].map((tech, i) => (
                    <span
                      key={`${tech}-${i}`}
                      className="px-3 py-1.5 rounded-md bg-[#F8F8FF]/[0.03] border border-[#F8F8FF]/[0.04] text-xs text-[#E2E8F0] font-medium flex-shrink-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="card-base p-7 md:p-9">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#B829FF]/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-[#B829FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)] mb-3">
                      Message sent!
                    </h3>
                    <p className="text-[#E2E8F0] text-sm max-w-sm mb-6">
                      Thank you for reaching out. We&apos;ll review your
                      project details and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="px-6 py-3 rounded-lg bg-[#F8F8FF]/[0.05] border border-[#F8F8FF]/[0.08] text-sm font-medium text-[#F8F8FF] hover:bg-[#F8F8FF]/[0.08] transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs text-[#E2E8F0] uppercase tracking-widest font-semibold mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          className={`${inputBase} ${errors.name ? "border-red-500/50" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs text-[#E2E8F0] uppercase tracking-widest font-semibold mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          className={`${inputBase} ${errors.email ? "border-red-500/50" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs text-[#E2E8F0] uppercase tracking-widest font-semibold mb-2"
                      >
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Acme Inc. (optional)"
                        className={inputBase}
                      />
                    </div>

                    {/* Project Type + Budget row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-xs text-[#E2E8F0] uppercase tracking-widest font-semibold mb-2"
                        >
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          defaultValue=""
                          className={`${selectBase} ${
                            errors.projectType
                              ? "border-red-500/50 text-[#F8F8FF]"
                              : "text-[#94A3B8]"
                          }`}
                          onChange={(e) => {
                            e.target.style.color =
                              e.target.value ? "#F8F8FF" : "#94A3B8";
                          }}
                        >
                          <option value="" disabled>
                            Select type
                          </option>
                          {projectTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                              className="bg-[#0D0D12] text-[#F8F8FF]"
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.projectType}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-xs text-[#E2E8F0] uppercase tracking-widest font-semibold mb-2"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          defaultValue=""
                          className={`${selectBase} text-[#94A3B8]`}
                          onChange={(e) => {
                            e.target.style.color =
                              e.target.value ? "#F8F8FF" : "#94A3B8";
                          }}
                        >
                          <option value="" disabled>
                            Select range
                          </option>
                          {budgetRanges.map((range) => (
                            <option
                              key={range}
                              value={range}
                              className="bg-[#0D0D12] text-[#F8F8FF]"
                            >
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-xs text-[#E2E8F0] uppercase tracking-widest font-semibold mb-2"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        placeholder="Tell us about your project — goals, timeline, any technical requirements..."
                        className={`${inputBase} resize-none ${errors.description ? "border-red-500/50" : ""}`}
                      />
                      {errors.description && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.description}
                        </p>
                      )}
                    </div>

                    {/* Error message */}
                    {formState === "error" && (
                      <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/[0.08] border border-red-500/20 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        Something went wrong. Please try again or email us
                        directly at hello@pygentik.com
                      </div>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={formState === "sending"}
                      whileHover={
                        formState !== "sending"
                          ? {
                              scale: 1.02,
                              boxShadow: "0 0 32px rgba(232,168,56,0.15)",
                            }
                          : {}
                      }
                      whileTap={
                        formState !== "sending" ? { scale: 0.98 } : {}
                      }
                      className="w-full py-4 rounded-lg bg-[#00F0FF] text-[#050505] font-bold text-base flex items-center justify-center gap-2 tracking-tight hover:bg-[#F0B84A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === "sending" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Project Details
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
