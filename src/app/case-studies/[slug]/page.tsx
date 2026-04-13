import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { AnimatedBackground } from "@/components/landing/AnimatedBackground";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-transparent relative flex flex-col">
      <AnimatedBackground />
      <div className="noise-overlay z-10 opacity-30 pointer-events-none" />

      {/* Navigation */}
      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="flex-1 relative z-20 pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-[#E2E8F0] hover:text-[#00F0FF] mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="px-3 py-1 rounded-md bg-[#050505]/60 backdrop-blur text-xs font-semibold uppercase tracking-wider"
              style={{ color: project.borderAccent }}
            >
              {project.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-space-grotesk)] text-[#F8F8FF] mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl text-[#E2E8F0] leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Visual Banner */}
        <div
          className={`w-full h-64 md:h-96 rounded-2xl bg-[#050505] mb-20 relative overflow-hidden flex items-center justify-center border border-[#F8F8FF]/[0.05]`}
        >
          <Image 
             src={project.image} 
             alt={project.title} 
             fill 
             className="object-cover opacity-90" 
             priority
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 mix-blend-color`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[transparent_60%] to-transparent opacity-90" />
          
          <div className="absolute inset-0 opacity-[0.1]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(45deg, ${project.borderAccent}20 25%, transparent 25%), linear-gradient(-45deg, ${project.borderAccent}20 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${project.borderAccent}20 75%), linear-gradient(-45deg, transparent 75%, ${project.borderAccent}20 75%)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>
          {/* Removed raw title character */}
        </div>

        {/* Dynamic Case Study Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F8F8FF] mb-4">
                The Challenge
              </h2>
              <p className="text-[#E2E8F0] leading-relaxed text-lg">
                {project.challenge}
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F8F8FF] mb-4">
                The Solution
              </h2>
              <p className="text-[#E2E8F0] leading-relaxed text-lg">
                {project.solution}
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F8F8FF] mb-4">
                The Impact
              </h2>
              <p className="text-[#E2E8F0] leading-relaxed text-lg">
                {project.impact}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-bold text-[#E2E8F0] uppercase tracking-widest mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-[#F8F8FF]/[0.03] text-xs font-semibold text-[#E2E8F0] border border-[#F8F8FF]/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#E2E8F0] uppercase tracking-widest mb-4">
                Live URL
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F8F8FF]/[0.03] text-[#F8F8FF] border border-[#F8F8FF]/[0.1] hover:bg-[#F8F8FF]/[0.08] transition-colors"
                style={{ borderColor: `${project.borderAccent}40` }}
              >
                Visit Site <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
