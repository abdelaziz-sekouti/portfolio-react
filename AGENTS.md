# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this repository.

## Project Overview

This is a React + Vite portfolio project using:
- React 19.x with functional components
- Vite for build tooling
- Tailwind CSS v4 for styling
- ESLint with React hooks and React refresh plugins
- No TypeScript (using .jsx files)
- GitHub Pages deployment configured

## Essential Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run predeploy    # Build before deployment
npm run deploy       # Deploy to GitHub Pages
```

### Testing
No test framework is currently configured. When adding tests:
- Consider installing Vitest (recommended for Vite), Jest, or React Testing Library
- Add test scripts to package.json following this pattern:
  - `npm test` - run all tests
  - `npm run test:watch` - watch mode for development
  - `npm run test:coverage` - run tests with coverage report
  - `npm run test:single <test-file>` - run a single test file

## Code Style Guidelines

### File Structure
- Use `.jsx` extensions for React components (no TypeScript)
- Components use PascalCase naming: `UserProfile.jsx`
- Utilities/services use camelCase: `apiService.js`
- Keep one component per file
- Export components as default: `export default ComponentName`

### Import Organization
```jsx
// 1. React imports first
import { useState, useEffect } from 'react'

// 2. Third-party libraries
import axios from 'axios'

// 3. Internal imports (use relative paths)
import './Component.css'
import { HelperFunction } from '../utils/helpers'
import { ChildComponent } from './ChildComponent'
```

### Component Patterns
- Use functional components exclusively
- Follow React 19 patterns (avoid class components)
- Use hooks for state management
- Keep components small and focused
- Use React Fragments (`<>...</>`) for multiple root elements

### Styling
- Use Tailwind CSS classes exclusively
- Avoid inline styles except for dynamic values
- Leverage Tailwind's responsive prefixes (sm:, md:, lg:)
- Use semantic HTML elements

### Naming Conventions
- Components: PascalCase (`UserProfile`)
- Functions: camelCase (`fetchUserData`)
- Variables: camelCase (`isLoading`)
- Constants: UPPER_SNAKE_CASE (`API_BASE_URL`)
- CSS classes: kebab-case (use Tailwind utilities)

### ESLint Rules
The project uses these specific ESLint configurations:
- `no-unused-vars` with pattern `^[A-Z_]` ignored
- React hooks rules enforced
- React refresh rules for HMR

### Error Handling
- Use try-catch blocks for async operations
- Implement error boundaries for component error handling
- Provide user-friendly error messages
- Log errors appropriately for debugging

### Formatting & Types
- No TypeScript - use .jsx files exclusively
- Use modern ES6+ syntax (arrow functions, destructuring, template literals)
- Maintain consistent indentation (2 spaces)
- Use semicolons consistently
- Keep lines under 100 characters when possible
- Use JSX for components, avoid string concatenation for HTML

### Performance
- Use React.memo for expensive components
- Implement proper dependency arrays in useEffect
- Avoid unnecessary re-renders
- Use useCallback for event handlers

### Git Workflow
- Commit messages should be descriptive and concise
- Use conventional commits if possible (feat:, fix:, docs:, etc.)
- Never commit to main directly - use feature branches
- Ensure lint passes before committing

## Deployment

The project includes notes for GitHub Pages deployment in `deploy-gh-pages.txt`. When deploying:
1. Uncomment `dist` in .gitignore
2. Install gh-pages: `npm i gh-pages`
3. Configure vite.config.js with base path
4. Add homepage to package.json
5. Add predeploy and deploy scripts

Current deployment setup:
- Base path configured as `/portfolio-react` in vite.config.js
- gh-pages package installed
- predeploy and deploy scripts added to package.json

## Adding New Dependencies

When adding new packages:
- Check if they're necessary given the existing stack
- Prefer React-compatible libraries
- Add to appropriate section (dependencies vs devDependencies)
- Update documentation if relevant

## Development Environment

- Node.js with ES modules support
- Modern browser (ES2020+ features available)
- Vite dev server for hot module replacement
- ESLint integration for real-time linting

## Security Considerations

- Never commit secrets or API keys
- Use environment variables for sensitive data
- Validate all user inputs
- Follow React security best practices
- Keep dependencies updated

## Code Review Checklist

Before submitting code or completing tasks:
- [ ] `npm run lint` passes without errors
- [ ] Code follows the style guidelines above
- [ ] Components are properly tested (if tests exist)
- [ ] No console.error statements left in production code
- [ ] Responsive design considered
- [ ] Accessibility features implemented where relevant
- [ ] Performance optimizations considered