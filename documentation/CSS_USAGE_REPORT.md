# CSS Usage Report

Date: 2026-03-25
Project: adrikat-portfolio

## 1) Executive summary
The current styling system works and produces a coherent visual identity, but it is mixed across several approaches:
- Global CSS variables in `:root`
- Tailwind utility classes
- Heavy use of arbitrary Tailwind values (`bg-[...]`, `shadow-[...]`, `text-[var(...)]`)
- A partial component-class layer in `index.css` (`@layer components`)

Result: visual consistency is decent, but authoring and maintenance are harder than needed. The project is not "broken", but CSS authoring is fragmented.

## 2) Current styling architecture

### Global foundation
- File: `src/index.css`
- Defines design tokens as CSS variables (`--bg`, `--text`, `--accent`, etc.)
- Defines theme-level effects (`cosmic-shell`, `scanline-overlay`, `text-glow`, animations)
- Defines one component utility family (`project-card*`)

### Tailwind usage in components
- Most components use inline Tailwind class strings directly in TSX
- Many classes reference CSS variables through arbitrary syntax:
  - `text-[var(--text)]`
  - `bg-[var(--bg)]`
  - `border-[var(--border)]`

### Tailwind configuration
- File: `tailwind.config.ts`
- Defines `cosmic` color palette and shadows
- In practice, most components do not consume these tokens via Tailwind theme classes (`text-cosmic-*`, `bg-cosmic-*`, etc.)

## 3) Measured usage metrics
Collected via codebase grep on TSX files:

- Total `var(--` occurrences in TSX: 108
- `bg-[var(--...)]` occurrences: 19
- `text-[var(--...)]` occurrences: 53
- `border-[var(--...)]` occurrences: 30
- `shadow-[...]` arbitrary shadow usages: 11
- `rgba(` occurrences in class strings: 37

Observation:
- There is significant dependence on arbitrary-value utilities. This is flexible but noisy and hard to standardize.

## 4) Main duplication/hotspots

### Highest CSS-variable density by file
- `src/components/layout/Seeking.tsx`: 21
- `src/components/layout/Contact.tsx`: 18
- `src/components/ui/Button.tsx`: 17
- `src/components/ui/Modal.tsx`: 12
- `src/components/layout/Navbar.tsx`: 12
- `src/components/layout/About.tsx`: 11

### Repeated class fragments (sample counts)
- `hover:border-[var(--accent-border)]`: 8
- `rounded-2xl border border-[var(--border)]`: 5
- `bg-[rgba(20,30,54,0.7)]`: 3

Observation:
- Several “surface card” and “interactive card” patterns are repeated with small value differences.

## 5) What is clean vs messy

### Clean / good choices
- Strong global tokenization in `:root`
- Reusable hero/shell effect classes (`section-shell`, `text-glow`, etc.)
- Good first consolidation with `project-card*`

### Messy / costly patterns
- Mixed abstraction levels:
  - Some UI relies on reusable CSS classes
  - Other parts repeat long utility strings inline
- Token leakage through arbitrary syntax everywhere:
  - `text-[var(--...)]` repeated heavily instead of semantic utilities
- Tailwind config drift:
  - Theme extensions exist but are mostly not consumed
- Repeated raw rgba values in class strings instead of named semantic tokens

## 6) Why it feels messy
The codebase currently combines 4 styling APIs simultaneously:
1. CSS variables
2. Tailwind utility classes
3. Tailwind arbitrary values
4. Handwritten component classes in global CSS

This is valid technically, but without strict boundaries it causes:
- Higher cognitive load when editing
- Inconsistent style authoring patterns between files
- More opportunities for subtle visual drift

## 7) Recommended target architecture (keep same look)
Use a hybrid, but with strict boundaries:

- Keep CSS variables as source of truth for tokens
- Keep Tailwind for spacing/layout/responsiveness
- Reduce arbitrary values to exception-only usage
- Expand reusable component classes for repeated visual patterns

Suggested semantic utility classes to add in `index.css`:
- Text: `.text-theme`, `.text-theme-muted`, `.text-theme-strong`
- Surfaces: `.surface-card`, `.surface-card-soft`, `.surface-interactive`
- Borders/shadows: `.border-theme`, `.shadow-theme-sm`, `.shadow-theme-md`
- Icon chips: `.icon-chip`

Then replace repetitive patterns in:
- `src/components/layout/Seeking.tsx`
- `src/components/layout/Contact.tsx`
- `src/components/layout/About.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Modal.tsx`

## 8) Practical cleanup plan

### Phase 1 (low risk, high value)
- Add semantic utility classes for repeated token combinations
- Refactor Seeking/Contact/About to consume these classes
- Keep exact same spacing and colors

### Phase 2
- Refactor Button + Modal to reduce arbitrary class payload
- Consolidate recurring shadow and border behavior

### Phase 3
- Decide on one token access style:
  - Option A: CSS vars + semantic utilities (recommended)
  - Option B: Tailwind theme classes (`text-cosmic-*`, etc.)
- Remove unused style APIs (dead custom classes or unused Tailwind theme extensions)

## 9) Risk notes
- Visual regressions are most likely in hover and shadow nuances.
- Mitigation:
  - Refactor section-by-section
  - Snapshot before/after in desktop + mobile
  - Keep all token values identical during phase 1

## 10) Conclusion
Your impression is valid: the current CSS system is functional but structurally noisy.

The fastest improvement is not a rewrite, but consolidation:
- Add semantic reusable classes for repeated patterns
- Reduce arbitrary values in TSX
- Keep tokens and visual output exactly as-is
