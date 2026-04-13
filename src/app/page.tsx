import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import TeamSection from "@/components/landing/TeamSection";
import ProcessSteps from "@/components/landing/ProcessSteps";
import StatsSection from "@/components/landing/StatsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import { AnimatedBackground } from "@/components/landing/AnimatedBackground";

export const metadata = {
  title: "Pygentik — Digital Engineering & AI Solutions",
  description:
    "We build high-performance web applications, AI automations, and enterprise-grade digital products. Open for projects — let's build something remarkable.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative">
      {/* Interactive Cursor Background */}
      <AnimatedBackground />

      {/* Grain texture overlay */}
      <div className="noise-overlay z-10 opacity-30 pointer-events-none" />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Services */}
      <ServicesSection />

      {/* Portfolio */}
      <PortfolioSection />

      {/* Team */}
      <TeamSection />

      {/* Process */}
      <ProcessSteps />

      {/* Stats */}
      <StatsSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
