# Gcap.online

Monorepo for GCAP Labs. The public marketing site (Headmaster homepage) is located in the `site/` folder.

## site/ — Headmaster Landing Page

Self-contained Next.js 16 application for https://gcap.online.

**Key features of the current site:**
- Positions Headmaster as a **persistent AI workforce layer** (memory, skills, automations, tools, gateways, delegation, approvals).
- Warm GCAP light brand (off-white background, white surfaces, near-black text).
- Wide desktop layouts with varied section rhythms (not repetitive card grids).
- Rich interactive Guided Workflow demo (tabs for different verticals + step-by-step theater + approval preview).
- Data-driven content in `site/src/data/`.
- Calm integrations marquee, full reduced-motion support.
- Premium deployment inquiry CTA.

### Tech Stack (in site/)
- Next.js 16 (App Router)
- TypeScript + path aliases (`@/*`)
- Tailwind + Framer Motion
- Lucide icons + react-icons (for integrations)

### Running the site locally

```bash
cd site
npm install
npm run dev
```

Visit http://localhost:3000

Build:

```bash
cd site
npm run build
```

### Deployment
Set the project root directory to `site` in Vercel (or equivalent platform) so that `npm run build` runs from inside the `site/` folder.

## Root of the repo
- Documentation and instructions (AGENTS.md, CLAUDE.md, etc.)
- `.gitignore` configured to support the `site/` sub-project.
- Additional top-level projects/folders can be added in the future.

The site code was previously at the repository root and has been moved into `site/` for monorepo organization (as requested after merging the homepage refactor PR).
