# Agent Guidelines - Time Tracking Dashboard

This is a React + Vite + TypeScript + Sass project for a Time Tracking Dashboard (Frontend Mentor challenge).

## Build Commands

- **Dev server**: `npm run dev` - Starts Vite dev server with hot reload
- **Build**: `npm run build` - Creates optimized production build in /dist
- **Preview**: `npm run preview` - Preview production build locally
- **Lint**: `npm run lint` - Run ESLint to check code quality
- **Typecheck**: `npm run typecheck` - Run TypeScript compiler for type checking

## Project Structure

```
/src
  /components      # React components (Card, CardsGrid, Header, TimeRangeSelector)
  /data            # TypeScript data files (activities.ts)
  /styles          # Global SCSS files (main.scss, reset.scss)
  App.tsx          # Main App component
  main.tsx         # React entry point
  types.ts         # TypeScript type definitions
/index.html        # HTML entry point
/package.json      # Dependencies and scripts
/vite.config.js   # Vite configuration
/tsconfig.json    # TypeScript configuration
/eslint.config.js # ESLint configuration
/images/          # Static assets
```

## Code Style Guidelines

### React/TypeScript
- Use functional components with TypeScript interfaces for props
- Use React hooks for state management (useState, useEffect)
- Use PascalCase for component names (`Card`, `Header`)
- Use camelCase for functions and variables (`getIconPath`, `timeframe`)
- Use kebab-case for CSS classes (`.card-wrapper`, `.time-range-selector`)
- Use `.tsx` extension for React components with JSX
- Use `.ts` extension for non-JSX TypeScript files
- Import order: React imports, third-party imports, local imports (components, data, types)
- Use `const` by default, `let` only when reassignment is needed
- Use TypeScript strict mode enabled in tsconfig.json
- Define prop interfaces inline in component files or export to types.ts
- Use type assertions sparingly (`as Type`) - prefer proper typing

### TypeScript Types
- Export shared types from `src/types.ts`
- Define prop interfaces with `interface ComponentNameProps` pattern
- Use union types for string literals: `type Timeframe = 'daily' | 'weekly' | 'monthly'`
- Use generics when appropriate for reusable components
- Avoid `any` type - use `unknown` if type is truly unknown
- Use `null` for intentionally missing values, `undefined` for uninitialized

### Component Patterns
- Write components as function declarations (`function ComponentName()`) or const arrow functions
- Export components as `export default ComponentName` at bottom of file
- Destructure props in function signature for cleaner code
- Use named exports for utilities, default exports for components
- Keep components under 200 lines when possible
- Use React.memo only for performance-critical components with frequent re-renders

### State Management
- Use `useState` for local component state
- Lift state to common parent when shared by multiple components
- Pass props down, don't use context or Redux for this simple project
- Use callback props for parent-child communication (`onSelect`, `onTimeframeChange`)

### SCSS/Sass
- Use `.module.scss` extension for component-specific styles when needed
- Or use standard `.scss` files with BEM-like naming for shared styles
- Import global styles in `main.tsx` or `App.tsx`
- Use CSS custom properties (variables) from `:root` for colors, spacing, typography
- Nest SCSS selectors up to 3 levels deep for maintainability
- Use SCSS features: variables, nesting, mixins (when needed)
- Color naming: `--color-{name}-{variant}` (e.g., `--color-navy-950`)
- Spacing scale: `--spacing-{50-1600}` (in 4px increments)
- Text presets: `--text-preset{1-6}` with weight/size/line-height/family

### CSS Conventions
- Use kebab-case for class names: `.time-range-selector`, `.card-wrapper`
- Use BEM naming for complex components: `.card__header`, `.card__icon--active`
- Avoid IDs in CSS, prefer classes for reusability
- Use flexbox and grid for layouts
- Use `rem` for spacing and font sizes (responsive to root font size)
- Add `&:` for pseudo-classes in SCSS: `&:hover`, `&:active`
- Add `& .class` for child selectors: `& .card-icon`
- Use transitions for hover effects: `transition: transform 0.2s ease`

### Naming Conventions
- Components: PascalCase (`Card`, `Header`, `TimeRangeSelector`)
- Functions: camelCase (`getIconPath`, `getPreviousLabel`)
- Variables: camelCase (`timeframe`, `previousLabel`)
- Constants: UPPER_SNAKE_CASE only if truly immutable global constants
- CSS classes: kebab-case (`.card-wrapper`, `.time-range-btn`)
- Files: PascalCase for components (`Card.tsx`), kebab-case for utilities
- Types: PascalCase for types/interfaces, camelCase for type properties
- Props: descriptive names matching their purpose (`selectedTimeframe`, `onTimeframeChange`)

### Error Handling
- Check for null/undefined when accessing object properties
- Use optional chaining (`data?.current`) for potentially undefined values
- Use nullish coalescing (`??`) for default values over null/undefined
- Provide fallback values in JSX: `{data?.current ?? 0}`
- Avoid silent failures - log errors to console in development
- Use TypeScript to catch errors at compile time

### Accessibility
- Use semantic HTML elements (`main`, `header`, `button`, `h3`)
- Add empty `alt=""` for decorative images
- Use `button` elements for interactive controls (not divs with onClick)
- Provide keyboard focus styles for interactive elements
- Ensure sufficient color contrast (use WCAG AA compliant colors)
- Use proper heading hierarchy (h1 for page title, h2/h3 for sections)

### Performance
- Use React.memo only when necessary (profile first)
- Avoid inline function definitions in render props when possible
- Use `useCallback` for event handlers passed to memoized child components
- Lazy load components with `React.lazy()` for large code splits
- Use CSS containment for isolated components if needed
- Optimize images - use WebP format when supported

### Responsive Design
- Mobile-first approach using SCSS media queries
- Use CSS Grid for card layouts (responsive columns)
- Use Flexbox for component layouts
- Breakpoints: 768px (tablet), 1024px (large tablet/small desktop), 1440px (desktop)
- Use Vite's `import.meta.env.DEV` for dev-only code
- Test on range from 320px to large screens

### Import Order
```typescript
// 1. React imports
import React from 'react'
import { useState, useEffect } from 'react'

// 2. Third-party imports
import { useNavigate } from 'react-router-dom'

// 3. Internal imports - components
import Card from './components/Card'
import Header from './components/Header'

// 4. Internal imports - data, utils, types
import { activities } from './data/activities'
import { Activity, Timeframe } from './types'
import { formatTime } from './utils/helpers'

// 5. Styles
import './Card.scss'
```

### Code Quality
- Run `npm run lint` before committing
- Run `npm run typecheck` to catch TypeScript errors
- Keep functions small and focused (<50 lines when possible)
- Use descriptive variable and function names
- Comment complex logic only (what and why, not what)
- Remove commented-out code before committing
- Use Prettier for consistent formatting (configure in .prettierrc if added)

## Testing Notes

- No testing framework currently configured
- Manual testing required: run `npm run dev` and open browser
- Test on different screen sizes using DevTools responsive mode
- Check browser console for errors and warnings
- Test all time range switches (Daily/Weekly/Monthly)
- Verify hover states on cards and buttons

## Data Structure

Activities use this TypeScript interface:
```typescript
interface Activity {
  title: string
  timeframes: {
    daily: { current: number; previous: number }
    weekly: { current: number; previous: number }
    monthly: { current: number; previous: number }
  }
}
```

Data is in `src/data/activities.ts` as TypeScript array.

## Color Palette (from style-guide.md)
- Primary: Purple 600 `hsl(246, 80%, 60%)`
- Activity colors: Orange (Work), Blue (Play), Pink (Study), Green (Exercise), Purple (Social), Yellow (Self Care)
- Neutral: Navy 950 `#0e1323`, Navy 900 `#1c204b`, Purple 500 `#7078c9`, Navy 200 `#bbc0ff`
- Use HSL or hex values (defined in :root variables)

## Typography
- Family: Rubik (300, 400, 500 weights) from Google Fonts
- Font smoothing enabled with `-webkit-font-smoothing: antialiased`
- Use text presets: `--text-preset{1-6}` defined in main.scss

## Development Workflow

1. Make changes to components or styles
2. Run `npm run dev` to see changes in browser
3. Run `npm run typecheck` to catch TypeScript errors
4. Run `npm run lint` to check code quality
5. Test functionality: switch time ranges, check responsive layouts
6. Build with `npm run build` when ready for production

## Vite-Specific Notes

- Public assets in `/` root (images, favicon)
- SCSS compilation handled by Vite with modern compiler
- HMR (Hot Module Replacement) enabled for fast development
- Build output in `/dist` folder
- Source maps generated for debugging
