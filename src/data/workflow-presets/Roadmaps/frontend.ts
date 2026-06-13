import type { WorkflowPresetConfig } from '@/features/workflow/types/presets';

const nodes: WorkflowPresetConfig['nodes'] = [
  // 1. Root / Internet Basics
  {
    id: 'n1',
    position: { x: 400, y: 50 },
    data: {
      label: 'Internet Basics',
      description:
        'Understand how the web works, HTTP protocols, domain names, hosting, DNS, and browsers[cite: 9, 12, 13, 14, 15, 16, 17].',
      meta: { topics: 'HTTP, DNS, Browsers', level: 'Beginner' },
    },
  },

  // 2. HTML
  {
    id: 'n2',
    position: { x: 200, y: 250 },
    data: {
      label: 'HTML Basics',
      description:
        'Learn semantic HTML, web form structure, basic validations, SEO fundamentals, and accessibility[cite: 3, 4, 5, 6, 7, 18].',
      meta: { core: 'Structure', standard: 'HTML5' },
    },
  },

  // 3. CSS
  {
    id: 'n3',
    position: { x: 600, y: 250 },
    data: {
      label: 'CSS & Styling',
      description:
        'Master core layouts (Flexbox/Grid), responsive design configurations, and clean writing strategies[cite: 19, 21, 22, 24, 36].',
      meta: { core: 'Presentation', layouts: 'Flexbox, Grid' },
    },
  },

  // 4. JavaScript
  {
    id: 'n4',
    position: { x: 400, y: 450 },
    data: {
      label: 'JavaScript Fundamentals',
      description:
        'Learn modern programming basics, DOM manipulation mechanics, and asynchronous fetch/AJAX networking[cite: 26, 27, 28, 31].',
      meta: { core: 'Behavior', engine: 'V8' },
    },
  },

  // 5. Version Control Systems
  {
    id: 'n5',
    position: { x: 200, y: 650 },
    data: {
      label: 'Version Control (Git)',
      description:
        'Track source code changes using Git and host repositories on platforms like GitHub, GitLab, or Bitbucket[cite: 20, 23, 25, 29, 30, 37].',
      meta: { vcs: 'Git', platforms: 'GitHub/GitLab' },
    },
  },

  // 6. Package Managers
  {
    id: 'n6',
    position: { x: 600, y: 650 },
    data: {
      label: 'Package Managers',
      description:
        'Install and manage external project dependencies using client package managers like npm, yarn, or pnpm[cite: 38, 39, 40, 42].',
      meta: { systems: 'npm, yarn, pnpm' },
    },
  },

  // 7. CSS Architecture & Advanced Styling
  {
    id: 'n7',
    position: { x: 800, y: 850 },
    data: {
      label: 'CSS Ecosystem',
      description:
        'Scale styling using BEM methodologies, preprocessors like Sass/PostCSS, and frameworks like Tailwind[cite: 35, 43, 44, 45, 46, 47].',
      meta: { framework: 'Tailwind CSS', preprocessors: 'Sass' },
    },
  },

  // 8. Single Page Application Frameworks
  {
    id: 'n8',
    position: { x: 400, y: 850 },
    data: {
      label: 'Pick a UI Framework',
      description:
        'Choose a component-driven framework to structure complex interfaces: React, Vue, Angular, Svelte, Solid, or Qwik[cite: 41, 48, 49, 50, 51, 54, 55].',
      meta: { core: 'SPA', popular: 'React, Vue, Angular' },
    },
  },

  // 9. Build Tools & Compilers
  {
    id: 'n9',
    position: { x: 200, y: 1050 },
    data: {
      label: 'Build Tools & Bundlers',
      description:
        'Compile, bundle, and optimize modern assets using Vite, Webpack, Rollup, esbuild, SWC, or Parcel[cite: 58, 60, 61, 63, 65, 66, 67, 68].',
      meta: { bundlers: 'Vite, Webpack' },
    },
  },

  // 10. Code Quality Formatters
  {
    id: 'n10',
    position: { x: 600, y: 1050 },
    data: {
      label: 'Linters & Formatters',
      description:
        'Enforce clean, uniform code styles across collaborative teams using automated tools like ESLint and Prettier[cite: 52, 53, 62].',
      meta: { tools: 'ESLint, Prettier' },
    },
  },

  // 11. Testing Suites
  {
    id: 'n11',
    position: { x: 200, y: 1250 },
    data: {
      label: 'Testing Systems',
      description:
        'Maintain application stability through unit testing (Jest/Vitest) and End-to-End browser validation (Cypress/Playwright)[cite: 69, 70, 72, 75, 76].',
      meta: { types: 'Unit, E2E', engines: 'Jest, Playwright' },
    },
  },

  // 12. Security Strategies
  {
    id: 'n12',
    position: { x: 600, y: 1250 },
    data: {
      label: 'Web Security Basics',
      description:
        'Secure client-side communication using HTTPS, CORS setups, Content Security Policies, and handling OWASP threats[cite: 56, 57, 59, 64, 71].',
      meta: { standards: 'HTTPS, CSP', compliance: 'OWASP' },
    },
  },

  // 13. Authentication Flows
  {
    id: 'n13',
    position: { x: 400, y: 1450 },
    data: {
      label: 'Authentication Architectures',
      description:
        'Implement state mechanics for users using Session tokens, JSON Web Tokens (JWT), OAuth2 federation, or SSO systems[cite: 73, 74].',
      meta: { strategies: 'JWT, OAuth, SSO' },
    },
  },

  // 14. Advanced Web Components
  {
    id: 'n14',
    position: { x: 100, y: 1650 },
    data: {
      label: 'Web Components Standard',
      description:
        'Develop low-level framework-agnostic elements with HTML templates, Custom Elements, and isolated Shadow DOM trees[cite: 78, 83, 86, 91].',
      meta: { spec: 'W3C Standard', isolation: 'Shadow DOM' },
    },
  },

  // 15. Type Checkers
  {
    id: 'n15',
    position: { x: 400, y: 1650 },
    data: {
      label: 'Type Safety (TypeScript)',
      description:
        'Add compile-time structural type definitions over dynamic JavaScript modules to prevent runtime breakdowns[cite: 79, 82].',
      meta: { runtime: 'JavaScript', compilation: 'TypeScript' },
    },
  },

  // 16. Server-Side Rendering & Meta-frameworks
  {
    id: 'n16',
    position: { x: 700, y: 1650 },
    data: {
      label: 'Server Side Rendering (SSR)',
      description:
        'Deliver fast initial page loads and deep indexing using framework abstractions like Next.js, Nuxt, Astro, or SvelteKit[cite: 77, 81, 84, 85, 87, 88, 89, 92, 93].',
      meta: { architecture: 'SSR/SSG', engines: 'Next.js, Nuxt' },
    },
  },

  // 17. GraphQL Ecosystems
  {
    id: 'n17',
    position: { x: 100, y: 1850 },
    data: {
      label: 'GraphQL APIs',
      description:
        'Query structured relational data efficiently avoiding overfetching using client systems like Apollo or Relay Modern[cite: 90, 94, 98].',
      meta: { transport: 'GraphQL', clients: 'Apollo, Relay' },
    },
  },

  // 18. Static Site Generators
  {
    id: 'n18',
    position: { x: 400, y: 1850 },
    data: {
      label: 'Static Site Generators (SSG)',
      description:
        'Pre-render static markdown or data layers into pure HTML assets using Astro, Next.js, Vuepress, or Eleventy pipelines[cite: 99, 100, 103, 108, 111].',
      meta: { output: 'Static Assets', tools: 'Astro, Eleventy' },
    },
  },

  // 19. Progressive Web Apps
  {
    id: 'n19',
    position: { x: 700, y: 1850 },
    data: {
      label: 'Progressive Web Apps (PWA)',
      description:
        'Unlock offline functionality, persistent backgrounds, push delivery, and app shell experiences using Service Workers[cite: 110, 118].',
      meta: { pattern: 'Offline First', components: 'Service Workers' },
    },
  },

  // 20. Advanced Performance Tuning
  {
    id: 'n20',
    position: { x: 200, y: 2050 },
    data: {
      label: 'Performance Best Practices',
      description:
        'Analyze system telemetry against RAIL metrics and PRPL strategies using Lighthouse audits and browser DevTools[cite: 95, 96, 97, 104, 105, 106, 113].',
      meta: { metrics: 'FCP, LCP, CLS', audits: 'Lighthouse' },
    },
  },

  // 21. Device Native APIs
  {
    id: 'n21',
    position: { x: 600, y: 2050 },
    data: {
      label: 'Native Browser APIs',
      description:
        'Utilize specialized runtime APIs like WebSockets, Server-Sent Events, Web Storage, Geolocation, and Client Payments[cite: 107, 115, 116, 120, 123, 124, 125, 126, 127].',
      meta: { realtime: 'WebSockets', persistent: 'Storage' },
    },
  },

  // 22. Cross-Platform Desktop Client Development
  {
    id: 'n22',
    position: { x: 200, y: 2250 },
    data: {
      label: 'Desktop Frameworks',
      description:
        'Wrap web components into native standalone operating system windows using Electron, Tauri, or Flutter environments[cite: 117, 119, 121, 122].',
      meta: { runtimes: 'Electron, Tauri' },
    },
  },

  // 23. Cross-Platform Mobile Client Development
  {
    id: 'n23',
    position: { x: 600, y: 2250 },
    data: {
      label: 'Mobile Development',
      description:
        'Deploy web-centric skillsets onto smartphone systems using modern mobile bridges like React Native, Flutter, or Ionic[cite: 101, 102, 109, 112].',
      meta: { frameworks: 'React Native, Flutter' },
    },
  },
];

const edges: WorkflowPresetConfig['edges'] = [
  // Top-to-Bottom Core Track Chain
  { id: 'e1', source: 'n1', target: 'n2', data: { label: 'UI structure' } },
  { id: 'e2', source: 'n1', target: 'n3', data: { label: 'UI presentation' } },
  { id: 'e3', source: 'n2', target: 'n4' },
  { id: 'e4', source: 'n3', target: 'n4' },
  { id: 'e5', source: 'n4', target: 'n5', data: { label: 'Track alterations' } },
  { id: 'e6', source: 'n4', target: 'n6', data: { label: 'Track packages' } },
  { id: 'e7', source: 'n3', target: 'n7', data: { label: 'Style architectures' } },
  { id: 'e8', source: 'n6', target: 'n8', data: { label: 'Modern frameworks' } },
  { id: 'e9', source: 'n8', target: 'n9', data: { label: 'Bundle assets' } },
  { id: 'e10', source: 'n8', target: 'n10', data: { label: 'Code consistency' } },
  { id: 'e11', source: 'n9', target: 'n11', data: { label: 'Quality audits' } },
  { id: 'e12', source: 'n9', target: 'n12', data: { label: 'Security barriers' } },
  { id: 'e13', source: 'n11', target: 'n13', data: { label: 'Secure gates' } },
  { id: 'e14', source: 'n12', target: 'n13' },

  // Advanced Downward Paths
  { id: 'e15', source: 'n13', target: 'n14', data: { label: 'Low-level UI' } },
  { id: 'e16', source: 'n13', target: 'n15', data: { label: 'Type safety' } },
  { id: 'e17', source: 'n13', target: 'n16', data: { label: 'Server engines' } },
  { id: 'e18', source: 'n15', target: 'n17', data: { label: 'API schemas' } },
  { id: 'e19', source: 'n16', target: 'n18', data: { label: 'Pre-rendering' } },
  { id: 'e20', source: 'n16', target: 'n19', data: { label: 'App shells' } },
  { id: 'e21', source: 'n19', target: 'n20', data: { label: 'Audit logic' } },
  { id: 'e22', source: 'n19', target: 'n21', data: { label: 'Device engines' } },
  { id: 'e23', source: 'n20', target: 'n22', data: { label: 'Native desktop clients' } },
  { id: 'e24', source: 'n21', target: 'n23', data: { label: 'Native mobile clients' } },
];

export const frontendPreset: WorkflowPresetConfig = {
  title: 'Modern Front-end Engineer Roadmap',
  subtitle:
    'A top-down vertical roadmap tracing early browser configurations down to complex full-scale applications[cite: 8, 128].',
  nodes,
  edges,
};
