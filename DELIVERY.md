# GCAP Site — Full Fix Batch Delivery

## Files in this batch

### Critical: Scroll bug + animation fixes
- `components/CinematicLayer.tsx` → replace existing file
  - Static Lenis import (no more race condition with async import)
  - rootMargin changed from "-80px" to "-60px" (catches more near-viewport elements)
  - **800ms fallback timeout** that force-reveals any elements still hidden (the actual scroll fix)
  - Chapter nav buttons now have `aria-label="Go to {section} section"` (a11y fix)
  - grain and cursor divs get `aria-hidden="true"`

- `app/globals.css` → replace existing file
  - Removed duplicate `@keyframes marquee` definition (was declared twice)
  - Fixed `.sr-only.focus:not-sr-only` → `.sr-only:focus:not(.sr-only)` (correct CSS)
  - All other rules preserved exactly

### New pages
- `app/sitemap.ts` → add as new file at `app/sitemap.ts`
- `app/robots.ts` → add as new file at `app/robots.ts`

### Page fixes
- `app/products/tayx/page.tsx` → replace existing
  - © 2026 (was © 2025)
  - Full nav with HQ link (was minimal nav without HQ)
  - "Discuss a Deployment" button now links to /contact (was `href="#contact"`)

- `app/products/hq/page.tsx` → replace existing
  - Full SiteNav instead of "Back to home"
  - Uses LockKeyhole removed (was imported but unused — now cleaner import)

- `app/security/page.tsx` → replace existing
  - Full SiteNav instead of "Back to home"

- `app/changelog/page.tsx` → replace existing
  - Full SiteNav instead of "Back to home"

### New shared component
- `components/SiteNav.tsx` → add as new file
  - Full nav with active state highlighting
  - Used by Security, HQ, Changelog pages

### Content fixes
- `components/MarqueeStrip.tsx` → replace existing
  - Added 5 missing model providers: AWS Bedrock (with SiAmazon icon), xAI Grok, MiMo, Arcee AI, Vercel AI Gateway, Ollama
  - aria-hidden="true" on duplicate set items (second pass of seamless loop)
  - role="tooltip" on tooltip div

### Delete this file
- `components/TayX.tsx` → DELETE (contains fabricated benchmark numbers, unused)
  - The `TayX_DELETE_THIS_FILE.txt` is just a note — delete TayX.tsx instead
  - TayXSection.tsx (the one actually used) is untouched and correct

---

## What remains NOT done (out of scope for this batch)

- `/integrations` page — no dedicated page yet
- `/use-cases/[vertical]` pages — no dedicated pages yet  
- StatsBar component — still not added to homepage (exists but unused)
- Social proof / testimonials — none added
- FinalCTA hero secondary CTA hierarchy — still two equal-weight buttons (minor)
- Mobile nav active state indicator — not added

---

## Quick copy-paste sequence (Mac Terminal, in repo root)

```bash
# Copy all files from the batch to the right places
cp gcap-fixes/components/CinematicLayer.tsx components/CinematicLayer.tsx
cp gcap-fixes/app/globals.css app/globals.css
cp gcap-fixes/app/sitemap.ts app/sitemap.ts
cp gcap-fixes/app/robots.ts app/robots.ts
cp gcap-fixes/app/products/tayx/page.tsx app/products/tayx/page.tsx
cp gcap-fixes/app/products/hq/page.tsx app/products/hq/page.tsx
cp gcap-fixes/app/security/page.tsx app/security/page.tsx
cp gcap-fixes/app/changelog/page.tsx app/changelog/page.tsx
cp gcap-fixes/components/SiteNav.tsx components/SiteNav.tsx
cp gcap-fixes/components/MarqueeStrip.tsx components/MarqueeStrip.tsx

# Delete the fake benchmark component
rm components/TayX.tsx

# Test
npm run dev
```

Then verify at localhost:3000:
1. Scroll the homepage — should scroll freely past the hero now
2. Check /products/tayx — footer should say 2026, nav should have HQ
3. Check /security, /products/hq, /changelog — should all have full nav
4. Hover over the MarqueeStrip — should show xAI, AWS Bedrock, etc.
5. Check sitemap at localhost:3000/sitemap.xml
6. Check robots at localhost:3000/robots.txt
