# Project Pack: Portfolio Refactoring (React/Vite)

This document summarizes the current state of the portfolio project to facilitate its migration to React/Vite.

## 1. Data Overview

### Projects Data (`assets/projects.json`)
The project data is an array of objects. Each project has:
- `id`: Unique identifier (e.g., `medieval-racing`).
- `pinned`: `"true"` or `"false"` (determines if it appears in the pinned section).
- `cover_img`: Path to the thumbnail.
- `imgs`: Array of paths for the modal carousel.
- `technologies`: Array of strings (e.g., `["Unity", "C#"]`).
- `actions`: Array of action objects with `type` (e.g., `LINK-NT`) and `link`.

### Translations (`assets/texts.json`)
Managed in a flat JSON structure with two top-level keys: `fr` and `en`.
- Keys follow a naming convention: `job-title`, `nav-profile`, `project-{id}-title`, `project-{id}-description-1`, etc.
- Descriptions often contain HTML tags (e.g., `<p>`, `<a>`, `<strong>`).

## 2. Logic & Functionality

### Translation Module
- **Current Approach**: Uses a custom attribute `translatable-text` on HTML elements.
- **Initialization**: Fetches `texts.json`, detects browser language, and populates elements.
- **Switching**: Updates the `innerHTML` of all elements with the `translatable-text` attribute based on the selected language key.
- **Refactoring Tip**: In React, consider using `react-i18next` or a simple `Context API` to manage the language state and provide a `t()` function.

### Project Loading
- **Current Approach**: Fetches `projects.json`, clones HTML `<template>` tags, and manually injects data into the DOM.
- **Refactoring Tip**: Map over the projects array to render `ProjectCard` and `ProjectModal` components.

## 3. Component Breakdown (Proposed)

Based on the current `index.html` structure:

- **Layout Components**:
  - `Navbar`: Fixed top, language switcher, scrollspy-enabled links.
  - `Header` (Masthead): Hero section with avatar and title.
  - `Footer`: Contact links and copyright.
- **Section Components**:
  - `ProfileSection`: Lists languages and tools.
  - `PortfolioSection`: 
    - `PinnedSubsection`: Renders projects where `pinned === "true"`.
    - `OtherSubsection`: Renders other projects.
    - `ProjectCard`: Individual project thumbnail/trigger.
  - `AboutSection`: Bio and CV preview.
  - `ContactSection`: List of contact links.
- **Modal Components**:
  - `ProjectModal`: Detailed view for each project (Carousel, Technologies, Descriptions, Action Buttons).

## 4. Assets & Styles

- **Styles**: Currently using `css/styles.css` which is based on **Bootstrap v5** (Freelancer theme).
- **Fonts**: Pixellari.ttf, Montserrat, Lato.
- **Icons**: FontAwesome v6 (loaded via script).
- **Images**: Located in `assets/img/`, `assets/portfolio/`, and `assets/icons/`.

## 5. Specific Features to Preserve

- **Language Detection**: Automatically defaults to French if the browser language is `fr`, otherwise English.
- **Project Filtering**: Distinction between "Pinned" and "Other" projects.
- **Dynamic Content**: All project-specific text (titles, dates, descriptions) must remain in the translation files, not hardcoded in components.
- **Action Types**: 
  - `LINK-NT`: Link opening in a new tab.
  - `DOWNLOAD`: Link with download attribute.
  - `UNAVAILABLE`: Disabled button.

## 6. Migration Checklist

1. [ ] Initialize Vite + React (TypeScript recommended).
2. [ ] Move `assets/` to the public folder (or `src/assets` if using imports).
3. [ ] Set up a translation context or library using `assets/texts.json`.
4. [ ] Create a `Project` type based on the JSON structure.
5. [ ] Implement the `Navbar` with language switching logic.
6. [ ] Implement the `Portfolio` grid using `assets/projects.json`.
7. [ ] Port the Bootstrap styles or migrate to a modern CSS solution (like Tailwind or CSS Modules).
8. [ ] Verify that all HTML-based descriptions in `texts.json` are rendered correctly (e.g., using `dangerouslySetInnerHTML` or a safer alternative).
