# Portfolio Migration (React + Vite + TypeScript)

This project is a migration of a personal portfolio from a static HTML/JS/Bootstrap structure to a modern React application using Vite and TypeScript.

## Project Progress

### Phase 1: Foundation & Tooling [DONE]
- Tailwind CSS, i18next, Framer Motion, and Asset Optimization plugins configured.

### Phase 2: Data Layer & Type Definitions [IN PROGRESS]
- [x] Defined TypeScript interfaces in `src/types/project.ts`.
- [x] Migrated all 12 projects from `projects.json`/`texts.json` to `src/data/projects.ts`.
- [ ] Extract remaining UI strings from `texts.json` to `public/locales/`.
- [ ] Implement image resolution logic.

## Project Structure (Updated)

- `documentation/`: Contains research, project pack, and the implementation plan.
- `src/data/projects.ts`: Centralized, typed data for all portfolio projects.
- `src/types/project.ts`: Project-related TypeScript interfaces.
- `public/locales/`: i18n translation files.

## Architectural Goals & Strategy

### 1. Framework & Styling
- **Framework:** React 19 + Vite.
- **Styling:** Tailwind CSS.
- **Animations:** Framer Motion.

### 2. Internationalization (i18n)
- **Library:** `react-i18next`.
- **Strategy:** Localized content for projects is stored in `projects.ts`; UI strings are stored in `public/locales/`.

### 3. Data & Components
- **TypeScript:** Strict types for projects and translations.
- **Components:** (To be built in Phase 3).

### 4. Optimization
- **Images:** Automated WebP/AVIF conversion via `vite-plugin-image-optimizer`.
- **Performance:** Target 95+ Lighthouse scores.
