# Current Improvements & Refactoring Roadmap

*Last updated: March 25, 2026*

## High Priority Fixes

### 1. **Component Documentation & JSDoc Comments**
- Add JSDoc comments to all exported components
- Document props interfaces with descriptions
- Add usage examples for complex components
- **Impact:** Improves maintainability and IDE support
- **Files:** All components in `src/components/`

### 2. **Accessibility (a11y) Enhancements**
- Add ARIA labels to decorative elements and animations
- Ensure color contrast ratios meet WCAG AA standards
- Test keyboard navigation across all interactive elements
- Add skip links for quick navigation
- Ensure modals trap focus correctly
- **Files:** All layout components, Modal.tsx, Button.tsx
- **Suggested:** Use tools like axe DevTools to audit

### 3. **Error Boundaries & Error Handling**
- Add React Error Boundary component for graceful error displays
- Improve error messages in modals and forms
- Add fallback UI for failed image loads
- **Files:** App.tsx, Modal.tsx, ProjectCard.tsx

### 4. **Type Safety & Strict Mode**
- Enable `strict: true` in tsconfig.json
- Add explicit return types to all functions
- Remove any implicit `any` types
- Improve type exports in index files
- **Files:** tsconfig.json, all src files

### 5. **Performance Optimizations**
- Memoize expensive computations (useMemo for arrays/animations)
- Use React.memo() for static components where applicable
- Implement image lazy loading with native or library solution
- Split large component files if they exceed 300 lines
- Optimize animation frame rates (reduce from Framer Motion defaults if heavy)
- **Files:** ProjectCard.tsx, PortfolioGrid.tsx, Hero.tsx

## Medium Priority Refactoring

### 6. **Component Structure Improvements**
- Extract repeated styling patterns into utility functions or shared components
- Create a dedicated `hooks/` directory for custom hooks (if any emerge)
- Consolidate repeated Tailwind classNames into custom CSS classes in index.css
- Consider breaking down larger sections into smaller subcomponents
  - Example: `Navbar` could have `NavItems.tsx`, `MobileMenu.tsx`
- **Files:** src/components/

### 7. **Internationalization (i18n) Audits**
- Verify all user-facing strings use translation keys
- Add missing translations for hardcoded strings (e.g., "Email", "Phone" labels)
- Test both EN and FR rendering thoroughly
- Consider adding language variants for date formatting
- **Files:** src/data/locales/, all components using `t()`

### 8. **CSS & Theme Consolidation**
- Document all CSS variables in a comment block in index.css
- Create a theme.config.ts file for centralized design tokens (optional but useful)
- Add CSS custom properties for common spacing scales (if not already done)
- Standardize border radius values (currently mixed: xl, 2xl, lg)
- Review shadow values for consistency
- **Files:** src/index.css, potential src/styles/theme.config.ts

### 9. **Responsive Design Testing**
- Test thoroughly on tablet sizes (768px range)
- Verify scanline overlay doesn't break on mobile
- Test modal scrolling behavior on small screens
- Check touch targets are at least 44x44px on mobile
- **Devices:** iPhone SE, iPad, Samsung Galaxy
- **Files:** All components with media queries

### 10. **Git Workflow & CI/CD**
- Add `.gitignore` rules for common IDE files (if missing)
- Set up ESLint pre-commit hook (using husky)
- Create GitHub Actions workflow for:
  - Type checking on PR
  - Build validation
  - Linting checks
- Document branching strategy
- **Files:** .husky/, .github/workflows/

## Low Priority Enhancements

### 11. **Testing Infrastructure**
- Add unit tests for utility functions (`src/lib/utils.ts`)
- Add component snapshot tests for static components
- Add integration tests for main user flows (Hero → Portfolio → Contact)
- Achieve minimum 70% code coverage
- **Suggested Tool:** Vitest + React Testing Library
- **Files:** New `src/__tests__/` directory

### 12. **Code Quality & Linting**
- Enforce stricter ESLint rules (no-console in production, prefer const, etc.)
- Add Prettier configuration if not present
- Run `npm run lint -- --fix` regularly
- Ensure import ordering is consistent
- **Files:** eslintrc.config.js, .prettierrc (if needed)

### 13. **Documentation & README**
- Expand main README.md with:
  - Project tech stack details
  - Design system documentation
  - Component library overview
  - Development setup instructions
  - Contribution guidelines
- Add inline comments for non-obvious animations or logic
- Document CSS animation classes (twinkle, drift, scanline-overlay)
- **Files:** README.md, Code comments

### 14. **Build & Bundle Optimization**
- Analyze bundle size with `vite build --report` (if available)
- Consider code-splitting route components
- Evaluate whether some unused Tailwind classes can be purged
- Monitor and reduce .css output size (currently 32.81 kB)
- **Current:** dist/assets/index-*.css is 32.81 kB (gzipped 6.92 kB) - reasonable but check for bloat

### 15. **Browser Compatibility**
- Add polyfills for older browser support if needed
- Test on Safari, Firefox, Edge
- Verify gradient backgrounds render consistently
- Check for any vendor-prefixed CSS needs

### 16. **Data Fetching & State Management**
- If projects need to be fetched from an API, consider:
  - React Query for caching/synchronization
  - Error states and loading skeletons
  - Retry logic for failed requests
- Currently data is static (projects.ts) - consider if this should change

### 17. **Analytics & Monitoring**
- Consider adding Google Analytics for visitor tracking
- Set up error logging (e.g., Sentry) for production
- Track user interactions (clicks, scrolls, modal opens)
- Monitor Core Web Vitals (LCP, FID, CLS)

### 18. **SEO Improvements**
- Add Open Graph meta tags in Helmet
- Generate dynamic meta descriptions per page section
- Ensure heading hierarchy is correct (h1 → h2 → h3)
- Add structured data (JSON-LD) for portfolio projects
- Create sitemap.xml
- Consider dynamic robots.txt

## Miscellaneous Upgrades & Ideas

### Visual/UX Enhancements
- **Cursor Effects:** Add custom cursor for cosmic theme (if performance allows)
- **Particle Background:** Add subtle particle effects tied to mouse movement
- **Section Transitions:** Add fade/slide transitions when sections come into view
- **Loading Skeleton:** Show skeleton screens while images load
- **Toast Notifications:** Add toast system for copy-to-clipboard or form feedback
- **Command Palette:** Add Cmd+K command palette for keyboard-driven navigation

### Feature Additions
- **Dark/Light Mode Toggle:** Currently forced dark; add toggle (stores preference)
- **Scroll Progress Indicator:** Visual indicator of scroll progress on the page
- **Blog/Articles Section:** If creating technical content
- **Project Filtering by Tech:** Allow filtering games by technology used
- **Search Functionality:** Quick search across projects
- **Resume Viewer:** Inline PDF viewer instead of download-only

### Architecture Improvements
- **Env Variables:** Move all hardcoded URLs/emails to `.env.local`
- **Config File:** Create `src/config.ts` for centralized configuration
- **Constants File:** Create `src/constants.ts` for repeated values
- **Custom Hooks:** Extract logic from components into reusable hooks
- **Utilities Expansion:** Add utility functions for common operations

### Dependencies Review
- **Framer Motion:** Currently using v12.38.0 - consider if all features are used
- **i18next:** Well-chosen; ensure all features are leveraged
- **lucide-react:** Limited brand icon support observed - noted for future consideration
- **Tailwind v4:** Currently v4.2.2 - keep updated for latest improvements

### Documentation Additions
- `/documentation/THEME.md` - Design system and color palette details
- `/documentation/COMPONENTS.md` - Component API and usage patterns
- `/documentation/DEVELOPMENT.md` - Contribution and development workflow
- `/documentation/DEPLOYMENT.md` - Build, test, and deployment procedures

### Performance Monitoring
- Use Chrome DevTools Lighthouse regularly
- Monitor bundle size growth with each release
- Profile component render times with React DevTools
- Check CLS (Cumulative Layout Shift) during animations

---

## Priority Order Recommendation

**Phase 1 (This Week):**
1. Add JSDoc comments to all components
2. Fix accessibility issues (ARIA labels, keyboard nav)
3. Improve type safety (enable strict mode)

**Phase 2 (Next Week):**
1. Add Error Boundary component
2. Performance optimizations (memoization, lazy loading)
3. Consolidate CSS patterns

**Phase 3 (Following Week):**
1. Add unit tests for utilities
2. Set up pre-commit hooks and CI/CD
3. Expand documentation

**Future (Backlog):**
- Testing infrastructure buildout
- Advanced UX features
- SEO optimization
- Analytics integration

---

## Quick Checklist

- [ ] Enable `strict: true` in tsconfig.json
- [ ] Add React Error Boundary to App.tsx
- [ ] Write JSDoc for all components
- [ ] Add ARIA labels throughout
- [ ] Test on mobile devices (actual devices if possible)
- [ ] Review color contrast ratios with axe or similar tool
- [ ] Set up Husky pre-commit hooks
- [ ] Add /documentation/THEME.md
- [ ] Profile bundle size
- [ ] Test keyboard navigation
