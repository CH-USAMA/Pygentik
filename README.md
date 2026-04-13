# Pygentik — Digital Engineering & AI Solutions

Pygentik is an enterprise-grade IT services and digital engineering agency platform built to be fast, heavily animated, and distinctively designed. Originally starting as a SaaS template, the codebase has been entirely rebuilt into a custom **"Cyberpunk Noir"** aesthetic featuring high-performance React animations and an optimized tracking-cursor background layout.

## 🚀 Core Technologies
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Backend/Routing:** Next.js Route Handlers (`/api/contact`)
- **Email Delivery:** [Nodemailer](https://nodemailer.com/)
- **Typography:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Headings) & [Inter](https://fonts.google.com/specimen/Inter) (Body)

## ⚡ Features & Capabilities
* **Interactive Cyberpunk Background:** A bespoke `AnimatedBackground.tsx` system that uses hardware-accelerated `framer-motion` springs. As you move your mouse, a glowing neon orb seamlessly tracks your cursor, blending with a massive hex-grid and secondary ambient pulsing lights underneath the main content.
* **Modern Agency Flow:** Re-architected landing page workflow (`Hero → Services → Portfolio → Team → Process → Stats → Contact`) geared specifically for converting enterprise leads into scheduled projects.
* **Performant Glassmorphism:** CSS filters constructed carefully to avoid browser rendering delays, ensuring 60fps scrolling even with complex blurs and mesh gradients.
* **Integrated Contact Pipeline:** A fully validated Frontend form routing straight into a Node.js serverless function that uses SMTP to deliver messages to your inbox.

---

## 🛠️ Local Setup & Installation

### 1. Requirements
- Node.js 18.x or newer
- npm, pnpm, or yarn

### 2. Install Dependencies
Clone the repository and install all node modules:
```bash
npm install
```

### 3. Setup Environment Variables
For the Contact Form to successfully send emails to your inbox, you must configure SMTP credentials.
Create a new file named `.env.local` in the root of your project:
```bash
cp .env.example .env.local
```
Inside `.env.local`, map out your email provider credentials:
```env
# Example setup for Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
# If using Gmail, you MUST use an 'App Password', not your standard account password!
SMTP_PASS=your-16-digit-app-password

# The destination to receive inbound leads
CONTACT_EMAIL=hello@pygentik.com
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The environment natively supports Turbopack for ultra-fast Hot Module Reloading (HMR).

---

## 📂 Project Architecture

The codebase is organized utilizing the standard Next.js App Router topology:
- `/src/app/page.tsx` — The primary entrypoint stitching together the Pygentik sections.
- `/src/app/layout.tsx` — Controls global elements, metadata, HTML skeletons, and font imports.
- `/src/app/globals.css` — Stores the Tailwind v4 custom `@utility` classes (e.g., `text-gradient-neon`) and global animations.
- `/src/components/landing/*` — Houses all modular UI layers. 
  - *Key Component:* `AnimatedBackground.tsx` controls the localized physics states for the glowing mouse follower and the neon lighting grid underlying the entire application.
- `/src/app/api/contact/route.ts` — The backend API that intercepts user contact submissions, formats them into a styled HTML email, and fires it via the SMTP transport protocol.

## 🤝 Project State
- **Status**: Production Ready. All baseline agency components are integrated.
- **Linting**: Project currently runs with 0 build errors.
