# Pygentik Website Repository — Memory & Context

## Project Overview
This project is an IT services agency website for Pygentik (domain: pygentik.com). It was originally built as a SaaS template ("DUT Tech AI") and was completely rebranded to reflect an enterprise-grade digital engineering and AI solutions provider.

## Tech Stack
- Framework: Next.js 16 (App Router)
- Language: TypeScript 5
- Styling: Tailwind CSS v4, Framer Motion
- UI Strategy: Complete bespoke design, no generic component libraries
- Backend: Next.js `/api/contact` route powered by Nodemailer for email submissions

## Design System: "Cyberpunk Noir"
The site operates on a specific design system aimed at feeling high-end, heavily technical, and highly interactive.
- **Base Color:** Deep abyss black (`#050505` to `#0D0D12` for cards)
- **Accent Colors:** Electric Cyan (`#00F0FF`), Neon Pink (`#FF2A6D`), and Matrix Green (`#01FFA4`), mapped against pure white text (`#F8F8FF`).
- **Typography:** `Space Grotesk` for distinct, futuristic headings, and `Inter` for hyper-readable, dense body content.
- **Effects:** A complex `AnimatedBackground.tsx` that tracks the user's cursor (`clientX/clientY`) and projects a moving glowing halo, overlaid on a geometric grid with ambient secondary neon pulsing orbs.

## Current Team Data
The `TeamSection.tsx` is populated with the founding members:
1. Usama Munawar (Founder & Lead Developer)
2. Danish Manzoor (Senior Full-Stack Developer)
3. Talha Sarwar (Backend & AI Engineer)

## Component Structure & Application Logic
All components live in `src/components/landing/*.tsx`:
- `Navbar.tsx`: Minimal geometric P logomark, sticky scrolling glassmorphism.
- `HeroSection.tsx`: CSS-rendered abstract orbital visual. Shows available status.
- `ServicesSection.tsx`: Showcases core IT capabilities.
- `PortfolioSection.tsx`: Filtering grid of projects with rich hover states and metadata.
- `TeamSection.tsx`: Developer cards with custom badges and social links.
- `ProcessSteps.tsx`: Numbered workflow pipeline for client services.
- `StatsSection.tsx`: Counters showcasing delivery metrics.
- `ContactSection.tsx`: Form validation and submittal UI. Matches backend API payload spec.
- `Footer.tsx`: Branding, links, and status.

## Environment Variables
The application relies on SMTP variables to function in production `.env.local`:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `CONTACT_EMAIL` (the destination to receive notifications)

## Recent Work / Changelog
- **2026-04-13**: Shifted design from Obsidian Forge to Cyberpunk Noir. Ran global color replacement to map ambers to neon purples/cyans. Swapped typography to Space Grotesk and Inter. Engineered and implemented `AnimatedBackground.tsx` which uses `framer-motion` springs to anchor a massive glowing gradient orb to the user's mouse along with secondary pulsing backgrounds.
