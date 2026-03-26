# TODO

## Completed in this pass

- [x] Sort languages, frameworks, and tools according to their dedicated types.
- [x] Add TypeScript as a language, and React + Tailwind as frameworks.
- [x] Rework key user-facing texts to be more professional and up to date (EN/FR).
- [x] Add development time per project/experience with nullable handling and hidden rendering when missing.
- [x] Ensure external links open in a new tab (`target="_blank"`) with safe `rel` attributes.
- [x] Write the next prioritized upgrade list in this file.

## Next prioritized upgrade backlog

### P0 - Bugs and correctness

- [ ] Fix malformed HTML in project descriptions (example: inconsistent quotes/classes in `exploding-tree` FR content) to avoid rendering issues.
- [ ] Add runtime fallback for unknown i18n language values before indexing localized content (`en` fallback).
- [ ] Validate every project action link at build-time with a lightweight URL/schema check to prevent broken buttons.

### P1 - Security and code quality

- [ ] Replace `dangerouslySetInnerHTML` usages with a sanitized rendering pipeline (DOM sanitizer + strict allowlist).
- [ ] Move long project descriptions out of `projects.ts` into dedicated content files to improve maintainability.
- [ ] Add typed helper creators for `Project` and `Skill` entries to reduce manual data errors.

### P2 - Tests and validation

- [ ] Add unit tests for `getSkillsByIds`, `enforceExternalLinks`, and language fallback behavior.
- [ ] Add component tests for `Modal` (development time visibility and external action behavior).
- [ ] Add CI step to run lint + build + tests on pull requests.

### P3 - Product and UX improvements

- [ ] Add search and tag filters in the portfolio grid.
- [ ] Add optional "featured technologies" section to the About page based on highest proficiency values.
- [ ] Add per-project role/team metadata (team size, role, responsibilities) with i18n support.