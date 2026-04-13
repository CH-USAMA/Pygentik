# Memory
**Last Updated: 2026-04-13**

## Project: Pygentik Website Rebrand & Feature Expansion

### Overview
This project successfully completed a full-scale rebranding and architectural expansion from a template SaaS platform to **Pygentik**—a high-end, IT and AI Automation agency.

### Tech Stack
* **Framework:** Next.js 16 (App Router), TypeScript
* **Styling:** Tailwind CSS v4 (with native CSS nesting in `globals.css`)
* **Animations:** Framer Motion (Hardware-accelerated Springs, AnimatedLayouts, and Presence drops)
* **Email / Forms:** Nodemailer API (`/api/contact`)
* **Imagery:** Next.js `<Image/>` optimized components pulling curated tech photography directly from Unsplash APIs.

### Architecture & Workflows

1. **Cyberpunk Noir Aesthetics**
   * Replaced the standard dark mode with true Abyss Black (`#050505`), Electric Cyan (`#00F0FF`), Matrix Green (`#01FFA4`), and Neon Pink (`#FF2A6D`).
   * Custom `AnimatedBackground.tsx` engine providing 60FPS cursor-tracking radial gradients, specifically optimized over CSS blurs to prevent scroll latency.
   * `globals.css` natively maps the entire component library to these Cyberpunk variables.

2. **Decoupled Data Flow (`src/data/projects.ts`)**
   * Migrated hardcoded UI arrays into a centralized dataset for portfolio and case studies.
   * Modifying this file universally updates the homepage grid, the `/projects` archive, and the individual `/case-studies/...` routes.

3. **Dynamic Next.js Routing**
   * Created `/case-studies/[slug]/page.tsx` as a wildcard server route capturing dynamic properties from the project data.
   * Created `/projects/page.tsx` as an overarching grid indexing the full library of deployed work.

4. **Deep-Dive Navigation Components**
   * **Team Timeline:** The `TeamSection.tsx` has been expanded to support a `framer-motion` `<AnimatePresence>` drop-down. It conditionally renders deep timeline achievements for the team founders natively hidden inside the base cards.
   * **Project Discovery Funnel:** The main Next.js headers explicitly re-route eager clients to `/discovery/page.tsx`, functioning as an advanced onboarding form capturing budget parameters, workflow friction, and desired system architectures over generic `mailto` actions.
   * **Floating WhatsApp (FAB):** Persistent `FloatingWhatsApp.tsx` injected sequentially through `layout.tsx` guarantees clients always have a 1-click gateway to `+923038004684`.

### Production Deployment Checklist
The project has been aggressively linted and optimized to survive rigorous building pipelines. To deploy perfectly:
1. Guarantee `next.config.ts` maintains `images.unsplash.com` as a remote pattern.
2. Confirm the host provides `.env.local` mappings for the Contact form (requires `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` and `CONTACT_EMAIL`).
3. Command `npm run build` locally, verify the generated `/out`, and safely deploy onto Vercel or AWS Amplify.
