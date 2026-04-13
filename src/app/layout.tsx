import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pygentik — Digital Engineering & AI Solutions",
  description:
    "We build high-performance web applications, AI automations, and enterprise-grade digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-[#050505] text-[#F8F8FF] selection:bg-[#00F0FF]/30`}
      >
        {children}
      </body>
    </html>
  );
}
