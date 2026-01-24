# The most useful and widely adopted React open-source packages

## Table of Contents

- [Core Utilities and Hooks](#core-utilities-and-hooks)
- [UI Component Libraries](#ui-component-libraries)
- [Forms & Validation](#forms-and-validation)
- [Routing](#routing)
- [Animations](#animations)
- [Tables, Charts, and Visualizations](#tables,charts,and-visualizations)
- [Testing](#testing)
- [Developer Experience / Build Tools](#developer-experience/build-tools)
- [Honorable Mentions](#honorable-mentions)

## Core Utilities and Hooks

1. **[react-use](https://github.com/streamich/react-use)** A collection of
   essential React hooks like `useLocalStorage`, `useDebounce`, `usePrevious`,
   etc.

2. **[zustand](https://github.com/pmndrs/zustand)** Lightweight global state
   management (easier than Redux for 80% of use cases).

3. **[jotai](https://github.com/pmndrs/jotai)** Atomic state management, better
   when you want fine-grained control.

4. **[swr](https://github.com/vercel/swr)** React hook for remote data fetching
   – auto caching, revalidation, etc. (Vercel product).

5. **[react-query](https://tanstack.com/query/latest)** Data fetching, caching,
   sync with server – very powerful for anything API-related.

---

## UI Component Libraries

6. **[shadcn/ui](https://github.com/shadcn/ui)** Modern, customizable UI
   components built with TailwindCSS and Radix UI.

7. **[chakra-ui](https://github.com/chakra-ui/chakra-ui)** Accessible, themeable
   React component library with good DX.

8. **[mantine](https://github.com/mantinedev/mantine)** React components and
   hooks library – excellent docs, clean API.

9. **[radix-ui](https://www.radix-ui.com/)** Primitives for building accessible
   components. Low-level but very powerful.

10. **[headlessui](https://github.com/tailwindlabs/headlessui)** Unstyled, fully
    accessible UI primitives (great with Tailwind).

---

## Forms and Validation

11. **[react-hook-form](https://react-hook-form.com/)** Performance-first form
    library. Tiny, powerful, dev-friendly.

12. **[formik](https://formik.org/)** Another form library. Still used, but
    being replaced by react-hook-form in most cases.

13. **[zod](https://github.com/colinhacks/zod)** TypeScript-first schema
    validation. Use it with `react-hook-form`.

14. **[yup](https://github.com/jquense/yup)** Declarative object schema
    validation (often paired with Formik).

---

## Routing

15. **[react-router](https://reactrouter.com/)** The standard for routing in
    React apps (especially SPAs).

16. **[tanstack/router](https://tanstack.com/router/latest)** A more modern,
    type-safe router alternative for React.

---

## Animations

17. **[framer-motion](https://github.com/framer/motion)** Powerful animation
    library for React – simple syntax, smooth animations.

18. **[react-spring](https://github.com/pmndrs/react-spring)** Physics-based
    animations – more control over complex flows.

---

## Tables, Charts, and Visualizations

19. **[tanstack/table](https://tanstack.com/table/latest)** Headless UI for
    tables – fully customizable (used in complex dashboards).

20. **[recharts](https://github.com/recharts/recharts)** Charting library built
    with D3 under the hood, easy to use.

21. **[nivo](https://github.com/plouc/nivo)** Rich data visualization –
    beautiful and customizable (great for dashboards).

---

## Testing

22. **[testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)**
    Standard testing framework for writing reliable React component tests.

23. **[jest](https://jestjs.io/)** Test runner – works hand-in-hand with Testing
    Library.

---

## Developer Experience / Build Tools

24. **[vite](https://vitejs.dev/)** Blazing fast build tool – replacing CRA in
    most projects.

25. **[storybook](https://storybook.js.org/)** Develop and test components in
    isolation – great for design systems.

26. **[eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)**
    Lint accessibility issues in JSX.

27. **[react-devtools](https://github.com/facebook/react-devtools)**
    Chrome/Firefox extension for inspecting React components.

---

## Honorable Mentions

- **classnames** – Utility to conditionally join classNames.
- **dayjs / date-fns** – Lightweight date libraries.
- **immer** – Immutability made easy (used internally in Zustand, Redux
  Toolkit).
- **react-error-boundary** – Better way to handle error boundaries.

**[⬆ Back to Top](#table-of-contents)**
