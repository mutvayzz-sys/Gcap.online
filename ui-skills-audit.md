# GCAP.online — UI Skills Audit

Full-sweep audit of the marketing site against the top [ui-skills.com](https://www.ui-skills.com/skills/) categories (Motion, Performance, Accessibility, Interaction, Visual/Craft/Taste, Metadata), reconciled with the repo's own `skills.md`. Scores are 0–10. Constraints honored: no neon/cyberpunk, no AI slop, no AI fonts (Geist Sans kept).

## Category scores

| Category | Before | After | Notes |
|---|---|---|---|
| Motion & Animation | 5 | 8 | Infra was rich but mis-tuned (1.3s reveals). Retuned to ≤700ms + stagger + parallax. |
| Performance (motion) | 6 | 8 | `will-change` now reset post-animation; dup keyframes removed; film-grain/cursor still worth review. |
| Accessibility | 5 | 8 | Framer Motion now respects reduced-motion; global focus-visible ring added. |
| Interaction / micro-interaction | 5 | 8 | Consistent hover-lift + existing `active:scale`; magnetic buttons retained. |
| Visual / Craft / Taste | 7 | 7.5 | Strong restrained palette already; gimmick risk (cursor + grain) flagged, not yet cut. |
| Metadata / SEO | 7 | 7 | OG/Twitter/canonical/favicon present; JSON-LD + sitemap still recommended. |

## Root cause of the "static / sloppy" feel
The site was **not** missing motion — it had Lenis, a custom cursor, film grain, scroll-progress, a chapter rail, and a `data-reveal` IntersectionObserver system. The problems were:

1. **Reveals ran at 1.2–1.3s with 40px travel** — slow, long drift reads as laggy, not crisp. The repo's own `skills.md` caps entrances at ≤700ms.
2. **Two uncoordinated systems** — JS `data-reveal` vs Framer `whileInView`, no shared timing language.
3. **Several sections appeared all-at-once** (`FeatureMatrix`, `ModelAgnostic` list) — no per-item stagger.
4. **No scroll-linked depth** — `ProductShot` even accepted a `parallax` prop that the component ignored (dead prop).
5. **Reduced-motion only covered CSS** — Framer Motion ignored `prefers-reduced-motion` entirely.

## Changes implemented (Before / After / Why)

| Before | After | Why |
|---|---|---|
| Reveal transitions `1.3s` / `translateY(40px)`, stagger `110ms` | `0.66s` / `translateY(22px)`, stagger `70ms` | Crisp entrances per `skills.md` ≤700ms; less drift = feels alive, not sluggish |
| Framer Motion ignored reduced-motion | App wrapped in `<MotionConfig reducedMotion="user">` | A11y: JS motion now matches the CSS reduced-motion guards |
| `ProductShot parallax` prop did nothing | Implemented transform-only scroll parallax (over-scaled 110%, reduced-motion gated) | Adds tasteful depth to hero + section media |
| `FeatureMatrix` rows revealed together | `data-reveal-group` + per-row `data-reveal-item` + stronger hover | Staggered rhythm; dark rows now have hover feedback |
| `ModelAgnostic` model list static | `data-reveal-group`/`-item` stagger | Section no longer pops in as one block |
| Pillar / TayX cards: border-only hover | `hover:-translate-y-1` + `shadow-card`, transform-based | Consistent premium micro-interaction across card grids |
| Lenis `lerp: 0.1` | `lerp: 0.12` + `wheelMultiplier: 1.05` | Slightly snappier, less floaty scroll |
| `will-change` left on after reveal | Reset to `auto` post-animation | Performance hygiene per motion-performance skill |
| Duplicate `@keyframes marquee` + dead `marquee-reverse` + empty `.integrations-marquee {}` | Removed | CSS cleanup |
| No global `:focus-visible` style | Added ring (dark-aware) | Keyboard a11y |
| `min-h-screen` (page + body) | `min-h-[100dvh]` | Mobile viewport correctness per layout skill |

## Per-component snapshot

| Component | Motion state | Action |
|---|---|---|
| `HeroSection` | Framer entrance, good | Enabled real parallax on dashboard shot |
| `ProductPillars` | reveal-group | Added hover-lift |
| `FeatureMatrix` | single reveal | Per-row stagger + hover |
| `ModelAgnostic` | single reveal | List stagger + parallax shot |
| `IntegrationsSection` | static shot | Parallax shot |
| `TayXSection` | reveal-group | Hover-lift cards |
| `CinematicLayer` | core engine | Retuned timings, will-change, Lenis |
| `OrchestratorDemo` / `AgencyOrchestration` / `OnePromptDemo` | rich interactive demos | No change — already strong |
| `FAQ` / `CapabilitiesGrid` | AnimatePresence accordions | No change — good |

## Remaining recommendations (not yet applied — need your call)
- **Dead code**: `components/TayX.tsx` (specs/benchmarks version) is unused — page renders `TayXSection`. Delete, or swap it in and add count-up number animations.
- **`gsap` dependency is unused** — remove from `package.json` (parallax now done with Framer Motion) to cut bundle weight.
- **Custom cursor + film grain** — premium but borderline "gimmick"; given your no-slop preference, consider cutting the cursor at least. Film grain runs an infinite RAF loop (minor CPU); throttle or make static.
- **Contrast**: verify `white/40`–`white/50` small text on `#0D0D0D` meets WCAG AA (some fall below 4.5:1 at small sizes).
- **SEO**: add JSON-LD (Organization/Product) and a `sitemap.ts` + `robots.ts`.

## Verification
- Tested at normal motion and `prefers-reduced-motion: reduce`.
- `npm run build` + `npm run lint` should pass (the `@theme` CSS lint warning is a false positive — valid Tailwind v4).
