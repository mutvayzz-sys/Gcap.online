# gcap.online i18n / content audit

Scope: source audit of the React app in `/Volumes/Gcap/Workspace/gcap.online`.

## 1) Site structure

Primary render tree:
- `src/main.tsx` → `LanguageProvider` → `App`
- `src/App.tsx`
  - `LoadingScreen`
  - `GrainOverlay`
  - `Navigation`
  - `main`
    - `Hero`
    - `Manifesto`
    - `Systems`
    - `Business`
    - `GenerativeField`
  - `Footer`
  - `LanguagePicker`

Key behavior:
- `App` updates `document.title` from the active translation.
- `LanguageProvider` synchronizes `html[lang]`, `html[dir]`, `data-lang`, `data-dir`, `body` dataset, `localStorage`, `document.title`, and `<meta name="description">`.
- RTL handling is currently only for Arabic (`dir="rtl"`); English/Thai are LTR.

## 2) Existing i18n / state management

### i18n implementation
- Central translation file: `src/i18n.ts`
- Supported languages: `en`, `ar`, `th`
- Exported helpers:
  - `languages`
  - `languageLabels`
  - `languageNames`
  - `translations`
  - `getTranslation(language)`

### Language state
- `src/components/LanguageProvider.tsx`
  - `language` state
  - `pickerOpen` state
  - `ready` state
  - `isRtl` derived from language
  - `setLanguage`, `openPicker`, `closePicker`
- Persistence key: `gcap-language`
- Initial behavior: if no stored language exists, language picker opens on first visit.

### Local UI state worth noting for translation work
- `Navigation`: `visible`, `menuOpen`
- `LoadingScreen`: `percent`
- `LanguageSwitcher`: `open`
- `DemoRequestForm`: `submitted`
- `Hero` and other sections use animation-only refs and scroll triggers, but no extra content state.

## 3) Full visible content inventory by section

Below is the user-facing copy that appears in the current build, grouped by feature area.

### Global / navigation / shell
Files:
- `src/i18n.ts`
- `src/components/Navigation.tsx`
- `src/components/LanguageSwitcher.tsx`
- `src/components/LanguagePicker.tsx`
- `src/components/LoadingScreen.tsx`

Visible copy:
- Brand: `GCAP`
- Nav items: `Signal`, `Manifesto`, `Systems`, `Demo`, `Business`, `Contact`
- Language label: `Language` / `اللغة` / `ภาษา`
- Loading title: `GCAP`
- Loading subtitle: `Initializing generative systems...` / Arabic / Thai equivalents
- First-visit picker:
  - `Choose your language` / Arabic / Thai equivalents
  - `Select the language for your first visit. You can switch anytime.` / localized equivalents
  - `Your choice will be saved in this browser.` / localized equivalents
  - `Choose` / localized equivalents
- Mobile menu accessible labels:
  - `Open menu`
  - `Close menu`
- Language picker accessible label:
  - `Close language picker`
- Navigation mobile language indicator text:
  - `Language · EN/AR/TH`

Notes:
- `LanguageSwitcher.tsx` hardcodes the language display names in the dropdown (`English`, `العربية`, `ไทย`) instead of using `languageNames`.
- `Navigation.tsx` hardcodes the mobile aria labels for open/close menu.
- `LoadingScreen` shows a numeric percent counter (`0–100%`) and no additional prose.

### Hero
Files:
- `src/i18n.ts`
- `src/sections/Hero.tsx`

Visible copy:
- Eyebrow: `Generative Computational Arts Platform` / localized equivalents
- Title split into 3 lines:
  - EN: `Signal` / `becomes` / `form`
  - AR: `تتحول` / `الإشارة` / `إلى شكل`
  - TH: `สัญญาณ` / `กลายเป็น` / `รูปทรง`
- Subtitle: the “living computational organism” line, localized in all 3 languages
- CTA buttons:
  - `Enter the system` / localized equivalents
  - `Switch language` / localized equivalents
- Bottom hint: `Scroll`

Notes:
- The hero uses 3D motion background and animated text; text is fully localized via `translation.hero`.

### Manifesto
Files:
- `src/i18n.ts`
- `src/sections/Manifesto.tsx`

Visible copy:
- Eyebrow: `01 · Philosophy` / localized equivalents
- Title (2 lines):
  - EN: `Taste is trained,` / `not innate.`
  - AR/TH localized equivalents
- Body paragraph about beauty as leverage / localized equivalents
- Quote: `The page is the trailer...` / localized equivalents
- Caption: `GCAP design ethos` / localized equivalents
- 3 principle cards:
  1. `Spatial consistency`
  2. `Invisible details`
  3. `Computational beauty`
  - Each has a translated body paragraph.

### Systems
Files:
- `src/i18n.ts`
- `src/sections/Systems.tsx`

Visible copy:
- Eyebrow: `02 · Architecture` / localized equivalents
- Title (2 lines): `Six systems.` / `One organism.` / localized equivalents
- 6 system cards with translated content:
  1. `Signal`
  2. `Memory`
  3. `Kanban`
  4. `Conductor`
  5. `Swarm`
  6. `World`
- Each card includes:
  - system ID (`SYS.01` etc.)
  - name
  - description
  - tags (3 per card)

Notes:
- `Systems.tsx` contains a separate hardcoded `SYSTEMS` constant that duplicates English copy for name/description/tags, but only the accent colors are actually used in rendering.
- The rendered user-facing content comes from `translation.systems.items`.

### Demo request
Files:
- `src/i18n.ts`
- `src/sections/Business.tsx`

Visible copy:
- Eyebrow: `03 · Demo request` / localized equivalents
- Title (2 lines): `See what it can do,` / `then ask for the right demo.` / localized equivalents
- Body paragraph explaining the demo scoping approach / localized equivalents
- 3 option cards:
  1. `Prepared demo`
  2. `Live in-person demo`
  3. `Remote setup`
  - each has translated supporting text
- Form labels:
  - `Business type`
  - `Type of integration`
  - `Email`
  - `Phone for live demo`
  - `Notes`
- Placeholders:
  - `Retail, clinic, agency, real estate, hospitality...`
  - `Choose the kind of help you want`
  - `you@company.com`
  - `Optional, if you want us to call you`
  - `Tell us a little about the result you want. We will prepare the right demo in plain language.`
- Select prompt: `Choose the kind of help you want`
- Submit button: `Prepare my demo`
- Helper text:
  - `Leave a phone number if you want a live in-person demo...`
- Success panel:
  - `Request received`
  - `We will prepare a demo for ...`
  - runtime copy for `focused on`, callback, reply address, notes, and `your business`

Notes:
- The confirmation message uses `responseCopy` inside `Business.tsx`; these strings are localized, but they are not centralized in `src/i18n.ts`.
- The form stores submitted values only in local React state; no network call is present in this audit scope.

### Business help
Files:
- `src/i18n.ts`
- `src/sections/Business.tsx`

Visible copy:
- Eyebrow: `04 · Business help` / localized equivalents
- Title (2 lines): `We help you connect AI` / `to how your business actually works.` / localized equivalents
- Body paragraph about consultancy / integration / rollout
- Bullet list:
  - `Consultancy to choose the right approach for your team`
  - `Integration help so your tools and workflows stay connected`
  - `A simple rollout plan your team can understand quickly`
- Right-side card:
  - `Tell us what you want to improve.`
  - body paragraph about using the demo form or direct contact
  - CTA: `Contact by email` / localized equivalents
  - phone note about leaving a number for a callback

### Generative field / interactive interface
Files:
- `src/sections/GenerativeField.tsx`

Visible copy:
- Eyebrow:
  - EN: `03 · The Interface`
  - AR: `03 · الواجهة`
  - TH: `03 · อินเทอร์เฟซ`
- Title:
  - EN: `Generative` / `Surfaces`
  - AR: `مساحات` / `توليدية`
  - TH: `พื้นผิว` / `เชิงกำเนิด`
- Body paragraph explaining the interface as the system rendered visible / localized
- Panel title: `Interactive field` / localized equivalents
- Panel body: instructional paragraph telling the user to move the cursor / localized equivalents
- Stats cards:
  - `∞` / `Compositions` (or localized equivalent)
  - `6` / `Core systems` (or localized equivalent)
  - `<300ms` / `UI response` (or localized equivalent)
  - `60fps` / `Target frame` (or localized equivalent)

Notes:
- This section has its own local `FIELD_COPY` object, separate from `src/i18n.ts`.
- It is translated, but it is not yet centralized with the rest of the site copy.

### Footer
Files:
- `src/i18n.ts`
- `src/sections/Footer.tsx`

Visible copy:
- Large brand wordmark: `GCAP`
- Footer links:
  - `Enter the lab`
  - `Read the manifesto`
  - `Request a demo`
  - `Business help`
  - `Contact`
- Copyright line:
  - `© 2025 GCAP Labs. All rights reserved. Built with intent.` / localized equivalents
- Descriptor:
  - `Generative Computational Arts Platform` / localized equivalents

## 4) What is already translated vs. what is not centralized

### Already centralized in `src/i18n.ts`
- Nav
- Hero
- Manifesto
- Systems
- Demo form copy
- Business copy
- Footer
- Loading screen
- Language picker copy

### Still localized but not centralized in `src/i18n.ts`
- `src/sections/GenerativeField.tsx` → `FIELD_COPY`
- `src/sections/Business.tsx` → `responseCopy`

### Hardcoded UI strings still outside centralized i18n
- `Open menu`
- `Close menu`
- `Close language picker`
- `Scroll`
- `English` / `العربية` / `ไทย` in `LanguageSwitcher.tsx`
- The menu language label format `Language · EN/AR/TH` is composed in the component

## 5) Translation work implications

Recommended follow-up targets for full localization coverage:
1. Centralize `FIELD_COPY` into `src/i18n.ts`.
2. Centralize `responseCopy` into `src/i18n.ts`.
3. Localize aria-labels and utility labels in `Navigation.tsx` and `LanguagePicker.tsx`.
4. Replace hardcoded language names in `LanguageSwitcher.tsx` with `languageNames`.
5. Decide whether the `SYSTEMS` duplicate English copy in `Systems.tsx` should be removed or moved to shared data to avoid drift.

## 6) Quick file map

Relevant files reviewed:
- `/Volumes/Gcap/Workspace/gcap.online/src/i18n.ts`
- `/Volumes/Gcap/Workspace/gcap.online/src/components/LanguageProvider.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/components/Navigation.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/components/LanguageSwitcher.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/components/LanguagePicker.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/components/LoadingScreen.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/sections/Hero.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/sections/Manifesto.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/sections/Systems.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/sections/Business.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/sections/GenerativeField.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/src/sections/Footer.tsx`
- `/Volumes/Gcap/Workspace/gcap.online/index.html`
