# Portfolio Migration Plan (React + Vite)

This document outlines the step-by-step implementation plan for migrating the portfolio to React + Vite.

## Phase 1: Foundation & Tooling Setup
**Goal:** Initialize the project with the necessary libraries and configuration.

- [x] **Clean Setup:** Ensure `npm create vite@latest` output is clean and structured.
- [x] **Tailwind CSS:** Install and configure Tailwind CSS.
- [x] **Internationalization:** Install `i18next`, `react-i18next`, and `i18next-browser-languagedetector`.
- [x] **Routing:** Install `react-router-dom` for locale-based routing (e.g., `/en/`, `/fr/`).
- [x] **Assets:** Install `vite-plugin-image-optimizer` and `vite-imagetools` for automated image handling.
- [x] **Animation:** Install `framer-motion`.

## Phase 2: Data Layer & Type Definitions
**Goal:** Create a type-safe data source for projects and translations.

- [x] **Types:** Define `Project`, `SocialLink`, and `Translation` interfaces in `src/types/`.
- [x] **Data Migration:** Convert `projects.json` to `src/data/projects.ts` with strong typing.
- [ ] **Translation Files:** Move content from `texts.json` to `public/locales/{en,fr}/translation.json`.
- [ ] **Image Resolution:** Implement the `new URL(...)` or `import.meta.glob` logic in `projects.ts` to automatically resolve image paths.

## Phase 3: Core Component Development (Atomic)
**Goal:** Build reusable, isolated UI components.

- [ ] **Buttons:** Create primary, secondary, and icon buttons (with `aria-label` support).
- [ ] **TechBadge:** Component to display technology tags (e.g., "Unity", "React").
- [ ] **ProjectCard:** Thumbnail view with hover effects and "Pinned" status indicator.
- [ ] **LanguageSwitcher:** Toggle or dropdown for switching languages.
- [ ] **Modal/Dialog:** A reusable accessible modal component (using `focus-trap-react`) for project details.

## Phase 4: Sections & Layout Assembly
**Goal:** Assemble components into full page sections.

- [ ] **Navbar:** Responsive navigation with scroll-spy logic (highlighting current section).
- [ ] **Hero Section:** Introduction with avatar and localized greeting.
- [ ] **Portfolio Grid:**
    - Implement filtering (Pinned vs. All).
    - Map `projects.ts` to `ProjectCard` components.
- [ ] **About Section:** Bio and CV download/preview.
- [ ] **Contact Section:** Social links and footer.

## Phase 5: Integration & Polish
**Goal:** Connect everything and add the "wow" factor.

- [ ] **Routing Logic:** Wrap the app in a generic route to handle language prefixes.
- [ ] **Modal Integration:** Connect `ProjectCard` clicks to open the `ProjectModal` with dynamic data.
- [ ] **Animations:** Add `framer-motion` transitions for:
    - Page load (staggered fade-in).
    - Section scrolling (reveal on scroll).
    - Modal open/close.
- [ ] **SEO:** Implement `react-helmet-async` for dynamic titles and meta descriptions.
- [ ] **Accessibility Audit:** Test keyboard navigation and screen reader compatibility.

## Phase 6: Deployment
**Goal:** Launch the new site.

- [ ] **Build:** Run `npm run build` and verify the output.
- [ ] **Lighthouse Check:** specific audit for performance and accessibility.
- [ ] **Deploy:** Push to GitHub Pages or Vercel.
