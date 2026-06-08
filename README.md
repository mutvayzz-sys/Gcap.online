# GCAP Labs — Headmaster Landing Page

Premium B2B marketing site for **GCAP Labs** and its AI workforce products.

## Products

- **Headmaster** — Persistent AI agent for organizations. 17 messaging platforms, 300+ models, subagent delegation, human approval gates, persistent memory, and scheduled automations. White-labeled from Hermes Agent (open-source, MIT, by Nous Research).
- **Headmaster HQ** — Team orchestration layer. Org charts, goal alignment, per-agent budgets, governance with rollback, multi-org isolation. Powered by Paperclip (open-source, MIT).
- **TayX** — GCAP's fine-tuned model layer. Optimized for long-running workflows, tool use, and multi-step reasoning. Coming soon.

## Design Language

- **Palette:** Warm neutrals (#F5F5F5 bg, #111111 ink, #6E6E68 muted, #FFFFFF elevated) with deep forest green accent (#1A4D2E)
- **Typography:** Geist Sans, tight tracking on headings, generous measure on body copy
- **Motion:** Scroll-triggered reveals (`data-reveal` / IntersectionObserver), Framer Motion entrances, cinematic grain + custom cursor
- **Philosophy:** No fake data, no "Acme" placeholders, no AI demo energy. Real stats traceable to GitHub releases. Trust signals front and center.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Styling | Tailwind CSS v4, CSS custom properties |
| Animation | Framer Motion 12, CSS `@starting-style`-ready |
| Images | Vercel Blob (production), Next/Image optimization |
| Scroll | Lenis smooth scroll |
| Cursor | Custom cursor ring + dot (magnetic on CTAs) |
| Deployment | Vercel (auto-deploy from `main` branch) |

## Project Structure

```
app/
  page.tsx              # Homepage (landing page)
  globals.css           # Design tokens, CSS layer system, animations
  layout.tsx            # Root layout (fonts, cursor, grain, SEO)
  security/             # Enterprise security page
  privacy/              # Privacy policy (GDPR/CCPA)
  terms/                # Terms of service
  changelog/            # Release notes (v0.8.0 → v0.16.0)
  docs/                 # Documentation landing
  integrations/         # Integration showcase
  use-cases/            # Use cases hub + dynamic vertical pages
  products/
    headmaster/         # Headmaster product page
    hq/                 # HQ product page
    tayx/               # TayX product page (coming soon)
  contact/              # Contact/demo request form

components/
  SiteNav.tsx           # Shared nav (desktop + mobile hamburger)
  HeroSection.tsx       # Hero with trust badges + CTA
  ProductPillars.tsx    # 4-pillar feature grid (Memory, 17 Platforms, etc.)
  ChatSection.tsx      # "Ask once" section with ProductShot
  ProductShot.tsx       # Reusable image wrapper (hover-scale, lightbox-ready)
  LightboxImage.tsx     # Click-to-zoom image lightbox
  PinnedScrollSection.tsx
  WorkEvidenceTrack.tsx
  ApproachSection.tsx
  ApprovalsSection.tsx  # Approval gates explainer
  IntegrationsSection.tsx
  MarqueeStrip.tsx      # 3-row horizontal integration ticker
  DeploymentSection.tsx # Input/Processing/Output flow diagram
  TrustControl.tsx      # Roles pyramid (Viewer → Admin)
  UseCases.tsx
  ModelAgnostic.tsx     # Model routing section (dark bg)
  StatsReveal.tsx        # Key metric counters (17 platforms, 1,289 PRs, 100% gated)
  BetaTrustRing.tsx     # SOC2/AES-256/GDPR/Audit badges + beta testimonials
  FinalCTA.tsx          # Contact form
  CinematicLayer.tsx    # Lenis + cursor + grain + scroll observer + chapters

src/data/
  platforms.ts           # Integration/platform data with iconKey mappings
```

## Design Tokens (globals.css)

```
--bg: #F5F5F5          Light background
--bg-elevated: #FFFFFF  Cards, surfaces
--text: #111111         Primary text (17.32:1 on bg ✅)
--text-muted: #6E6E68   Secondary text (4.71:1 on bg ✅ WCAG AA)
--ink: #111111          Alias for text
--border: #E8E7E2      Default borders
--border-strong: #C8C7C2  Emphasized borders
--accent: #1A4D2E       Deep forest green
--on-dark: #F9F7F3     Text on dark backgrounds (17.65:1 ✅)
```

All color tokens pass WCAG AA contrast requirements for their use context.

## Accessibility

- **WCAG AA compliant** contrast ratios on all text/background combos
- `prefers-reduced-motion: reduce` — disables all animations, hides grain/cursor
- `html.js` progressive enhancement — content visible without JS, animations applied only after hydration
- Skip-to-content link, focus-visible rings, ARIA labels on interactive elements
- Touch device: `@media (hover: none)` hides custom cursor, sets min 44px touch targets
- Hover animations gated behind `@media (hover: hover) and (pointer: fine)` — no false hover states on touch

## Content Authenticity

- **No "Acme" / placeholder names** — swept and removed
- **No fake chat demos** — replaced with ProductShot + real copy
- **Real stats** — "1,289 merged PRs across last two releases" links to `/changelog`
- **Verifiable badges** — SOC 2 Type II, AES-256, GDPR, Audit Trail reflect actual Hermes infrastructure
- **No X/LinkedIn links** in footer — removed per request

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to `main` → Vercel auto-deploys. No manual steps needed.

## Key Decisions Log

| Decision | Why |
|---|---|
| `--text-muted` changed from `#767670` to `#6E6E68` | 4.19:1 failed WCAG AA. New value: 4.71:1 ✅ |
| `a { color }` removed from globals.css | Tailwind v4 layer specificity: unlayered `a` rule overrides utility classes like `text-[#F9F7F3]` |
| Hover transforms gated behind `@media (hover: hover)` | Touch devices trigger hover on tap; gated classes prevent false hover states |
| `animation-play-state` transition on marquee | Perceived smooth deceleration when pausing ticker on hover |
| ChatSection fake Q3 demo removed | User: "remove it from this fucking demo" — replaced with ProductShot |
| `#1A4D2E` accent color | Deep forest green — B2B-appropriate, no generic SaaS blue |
| X/LinkedIn removed from all footers | User requested removal |
| BetaTestimonials kept with "(Beta)" attribution | No live customers yet, but beta quotes are legit |

## Cleanup Candidates

- `components/GuidedWorkflowSection.tsx` — unused, can be deleted
- `components/GuidedDemo.tsx` — unused, can be deleted
- `ui-skills-audit.md` — reference doc, can be archived
- `UPDATED_TODO.md` — stale phase tracking, can be archived
- `DELIVERY.md` — batch delivery notes, can be archived
- `skills.md` — outdated component listing, can be archived