"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across web, mobile, AI, and enterprise systems",
    accent: "#00F0FF",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Measured through post-project surveys and referrals",
    accent: "#B829FF",
  },
  {
    value: 30,
    suffix: "+",
    label: "Technologies Mastered",
    description: "Frameworks, languages, platforms, and cloud services",
    accent: "#FF2A6D",
  },
  {
    value: 12,
    suffix: "+",
    label: "Years Combined Experience",
    description: "Across the founding team in production engineering",
    accent: "#05D9E8",
  },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F0FF]/[0.01] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-5 mx-auto"
          >
            By the Numbers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading text-4xl md:text-5xl lg:text-6xl"
          >
            Results that{" "}
            <span className="text-gradient-neon">compound.</span>
          </motion.h2>
        </div>

        <div className="divider-accent mb-12" />

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="card-base p-7 text-center group relative overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-30 group-hover:opacity-60 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)`,
                }}
              />

              <div
                className="text-5xl md:text-6xl font-extrabold mb-4 font-[family-name:var(--font-space-grotesk)]"
                style={{ color: stat.accent }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>

              <h4 className="text-base font-bold mb-2 text-[#F8F8FF] font-[family-name:var(--font-space-grotesk)]">
                {stat.label}
              </h4>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
