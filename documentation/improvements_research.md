# Modern React Portfolio: Research & Improvement Strategies

Moving from a static HTML/JS structure to React (specifically with Vite) opens up significant opportunities for performance, SEO, accessibility, and maintainability. This document outlines research-backed improvements for your portfolio.

---

## 1. Architectural Improvements (Data-Driven)

### Decoupled Content Strategy
*   **Centralized Data:** Move all project metadata to a dedicated `src/data/projects.ts` file. Using `.ts` instead of `.json` allows for better type-checking and the use of internal constants or logic.
*   **Strict Typing:** Define a `Project` interface. This ensures that every project added later has all required fields (IDs, technologies, image paths, localized content), preventing runtime errors.
*   **Component Composition:** Build generic components (e.g., `<ProjectCard />`, `<TechBadge />`) that receive data as props. This makes the UI completely independent of the content.

### Translation & Internationalization (i18n)
*   **Library:** Use `react-i18next` with `i18next-browser-languagedetector`.
*   **JSON-Based Content:** Keep UI strings (nav, buttons, labels) in `public/locales/{{lng}}/translation.json`.
*   **Dynamic Project Data:** For project descriptions (which are data-driven), use one of two strategies:
    *   **Nested Objects:** In `projects.ts`, use `description: { en: "...", fr: "..." }`.
    *   **Key Referencing:** Store a key like `project.medieval-racing.desc` in `projects.ts` and resolve it through the i18n `t()` function. This is often cleaner for large amounts of text.
*   **Locale-Aware Routing:** Consider `react-router-dom` with a `:lang` prefix (e.g., `/en/portfolio`) to ensure search engines can index both versions separately.

---

## 2. Performance & Asset Optimization

### Easy & Automated Image Management
To make adding photos as simple as dropping a file into a folder:
*   **Folder Convention:** Store project images in `src/assets/projects/[project-id]/`.
*   **Vite Magic:** Use `new URL(path, import.meta.url).href` or Vite's glob import (`import.meta.glob`) to automatically resolve image paths based on the project ID. This means you only need to type the filename in your JSON/TS data.
*   **Optimization:** Install `vite-plugin-image-optimizer`. It automatically compresses and converts images to **WebP/AVIF** during the build process, so you don't have to manually convert them.
*   **Responsive Images:** Use the `<picture>` tag or `srcset`. For Vite, libraries like `vite-imagetools` can generate multiple sizes automatically via URL parameters (e.g., `image.jpg?width=400;800&format=webp`).

### Bundle Optimization
*   **Code Splitting:** Use `React.lazy()` and `Suspense` for heavy components like Modals or 3D elements.
*   **Tailwind CSS:** Replace Bootstrap. Tailwind's JIT engine ensures only the CSS you actually use is shipped to the user, drastically reducing bundle size.

---

## 3. SEO & Discoverability

### Metadata & Social Sharing
*   **React Helmet Async:** Dynamically update page titles and meta descriptions for each project when a modal or sub-page is opened.
*   **Structured Data (JSON-LD):** Automatically generate Schema.org markup based on your `projects.ts` data to help Google understand your "CreativeWork" collection.

---

## 4. Accessibility (A11y) & UX

### Interaction Design
*   **Focus Management:** Use `focus-trap-react` for project modals.
*   **Framer Motion:** Use "Layout Animations" for smooth filtering (e.g., when switching between "Pinned" and "All" projects).
*   **Reduced Motion:** Wrap animations in a check for `window.matchMedia('(prefers-reduced-motion: reduce)')`.

---

## 5. Developer Experience (DX)

### Modern Tooling
*   **Automated Linting:** Set up `eslint-plugin-i18next` to ensure you never accidentally hardcode a string that should be translated.
*   **Vitest:** Test your "Data Resolver" logic to ensure that every project in your data file has a corresponding image and translation key.

---

## Summary Checklist for Refactoring
- [ ] Set up **Vite + React + TypeScript**.
- [ ] Configure **react-i18next** with locale-based routing.
- [ ] Implement a **Strict Data Interface** for projects.
- [ ] Set up **vite-plugin-image-optimizer** for automatic WebP conversion.
- [ ] Integrate **Tailwind CSS** and **Framer Motion**.
- [ ] Create a `ProjectGrid` that maps over the typed data.
- [ ] Verify all HTML-based descriptions in `texts.json` render safely.

