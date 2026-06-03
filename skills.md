# GCAP Headmaster — UI Skills

Consolidated design-engineering rules derived from applicable ui-skills.com skills for our stack: Next.js 16, React, TypeScript, Tailwind CSS, Framer Motion, Geist Sans.

---

## Typography

- **Font**: Geist Sans only. Never Arial, Inter, Roboto, or system fonts as primary.
- **Selection**: `#111111` bg / `#F9F7F3` text. Never Tailwind blue.
- **Balance**: Use `text-balance` on all headings. Use `text-pretty` on body paragraphs.
- **Tabular**: Use `tabular-nums` for data/numbers.
- **Tracking**: Don't modify `letter-spacing` (tracking-*) unless explicitly requested.
- **Clamp**: Use `truncate` or `line-clamp` for dense UI.

## Animation

- **Compositor only**: Animate `transform` and `opacity` only. NEVER animate layout props (`width`, `height`, `top`, `left`, `margin`, `padding`).
- **Easing**: 
  - Entrance → ease-out (starts fast, feels responsive)
  - Exit → ease-out  
  - Movement/morphing → ease-in-out
  - Hover/color → ease
  - NEVER use ease-in for UI animations
  - Use custom cubic-bezier curves, not built-in CSS easings
- **Duration**: UI interactions ≤ 200ms. Page entrances ≤ 700ms.
- **Reduced motion**: MUST respect `prefers-reduced-motion`.
- **No scale(0)**: Start entrances from `scale(0.95)` + `opacity: 0`, never `scale(0)`.
- **Buttons**: Add `transform: scale(0.97)` on `:active`.
- **Popovers**: Scale from trigger origin, not center.
- **Keyframes**: Prefer CSS transitions over keyframes for interruptible UI.
- **Blur**: NEVER animate large `blur()` or `backdrop-filter` surfaces.
- **will-change**: NEVER apply outside active animations.

## Layout

- **No h-screen**: Use `min-h-[100dvh]` or `h-dvh`, never `h-screen`.
- **z-index**: Use fixed scale (`z-10`, `z-50`), no arbitrary `z-*` values.
- **Size**: Use `size-*` for square elements instead of `w-*` + `h-*`.
- **Safe area**: MUST respect `safe-area-inset` for fixed elements.

## Accessibility

- **Native first**: Prefer native elements (`button`, `a`, `input`) over role-based hacks.
- **Names**: Every interactive control must have an accessible name.
- **Icon buttons**: MUST have `aria-label` or `aria-labelledby`.
- **Links**: Must have meaningful text. No "click here".
- **Decorative icons**: MUST be `aria-hidden`.
- **Keyboard**: All interactive elements Tab-reachable. Focus must be visible.
- **tabindex**: Never use > 0.
- **Escape**: Must close dialogs/overlays.
- **Dialogs**: Must trap focus, restore focus to trigger on close.
- **Headings**: Don't skip levels (`h1` → `h3`).
- **Forms**: 
  - Errors linked via `aria-describedby`
  - Required fields announced (`aria-required` or `required` attribute)
  - Invalid fields set `aria-invalid`
  - Critical errors use `aria-live="polite"`
- **Images**: MUST have correct `alt` text (meaningful or empty for decorative).
- **aria-hidden trap**: NEVER put focusable elements inside `aria-hidden="true"`.

## Design

- **No gradients**: Unless explicitly requested. No purple/multicolor gradients.
- **No glow effects**: As primary affordances.
- **No generic AI slop**: 
  - No overused fonts (Arial, Inter, Roboto)
  - No cliched color schemes (purple gradients on white)
  - No predictable card-grid + pill layouts
  - No rounded-full pills with pulsing dots
- **One accent**: Limit to one per view.
- **Empty states**: One clear next action.
- **Color tokens**: Use existing theme tokens before introducing new ones.
- **Shadows**: Use Tailwind default shadow scale unless explicitly requested.

## Performance

- **No blur animation**: Static `backdrop-blur` on fixed nav is acceptable if needed for readability. Do not animate it.
- **No useEffect for render logic**: Compute in render when possible.
- **Framer Motion**: Only animate transform/opacity. Use `layoutId` carefully.

## Component Patterns

- **AlertDialog**: For destructive or irreversible actions.
- **Skeletons**: Use structural skeletons for loading states.
- **Paste**: NEVER block paste in `input` or `textarea`.
- **Errors**: Show next to where the action happens.

## Form Patterns

- **Labels**: Every input must have a visible label.
- **Fields**: Use `field` class for consistent styling.
- **Errors**: Inline, linked via `aria-describedby`, with `aria-live`.
- **Disabled submit**: Must explain why (not just `disabled` with no message).

## Email Templates

- **Table layout**: Use nested `<table>` for email, not flex/grid.
- **Inline styles**: All styles inline, no CSS classes.
- **Brand consistency**: `#F8F7F4` background, `#111111` text, `#E8E7E2` borders.
- **Reply-to**: Set `replyTo` on all outbound emails.

## Review Format

When reviewing UI code, output a markdown table:

| Before | After | Why |
|---|---|---|
| violation | fix | one short sentence |

Prefer minimal, targeted fixes. Do not rewrite large parts of unrelated UI.
