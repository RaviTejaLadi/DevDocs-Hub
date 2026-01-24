# Vue.js Top 30 Theory Questions & Answers

## Table of Contents

1. [What is Vue.js?](#1.-what-is-vue.js?)
2. [Explain Vue's Reactivity System.](#2.-explain-vue's-reactivity-system.)
3. [What are Vue Directives? List Examples.](#3.-what-are-vue-directives?-list-examples.)
4. [Differences Between v-if and v-show?](#4.-differences-between-v-if-and-v-show?)
5. [What is the Virtual DOM?](#5.-what-is-the-virtual-dom?)
6. [Explain Vue Components.](#6.-explain-vue-components.)
7. [How to Pass Data to Child Components?](#7.-how-to-pass-data-to-child-components?)
8. [How to Emit Events from Child to Parent?](#8.-how-to-emit-events-from-child-to-parent?)
9. [What is Vuex?](#9.-what-is-vuex?)
10. [Vue 3 vs Vue 2 Key Differences.](#10.-vue-3-vs-vue-2-key-differences)
11. [What is the Composition API?](#11.-what-is-the-composition-api)
12. [Explain ref() vs reactive().](<#12.-explain-ref()-vs-reactive().>)
13. [What is Pinia?](#13.-what-is-pinia?)
14. [How to Handle Async Operations?](#14.-how-to-handle-async-operations?)
15. [What are Mixins? Drawbacks?](#15.-what-are-mixins-drawbacks?)
16. [Explain Slots.](#16.-explain-slots.)
17. [What is Scoped CSS?](#17.-what-is-scoped-css?)
18. [What is tsx Router?](#18.-what-is-tsx-router?)
19. [How to Guard Routes?](#19.-how-to-guard-routes?)
20. [What is Server-Side Rendering (SSR)?](<#20.-what-is-server-side-rendering-(ssr)?>)
21. [Explain Vue Custom Directives.](#21.-explain-vue-custom-directives.)
22. [What are Vue Plugins?](#22.-what-are-vue-plugins?)
23. [Key Differences: Vue vs React vs Angular.](#23.-key-differences-vue-vs-react-vs-angular.)
24. [What is nextTick() ?](<#24.-what-is-nexttick()?>)
25. [How to Optimize Vue Performance?](#25.-how-to-optimize-vue-performance?)
26. [What is Renderless Components?](#26.-what-is-renderless-components?)
27. [Explain Provide/Inject.](#27.-explain-provide/inject.)
28. [What is Suspense?](#28.-what-is-suspense?)
29. [How to Test Vue Apps?](#29.-how-to-test-vue-apps?)
30. [What is Teleport?](#30.-what-is-teleport?)

#### 1. What is Vue.js?

**Answer:** Vue.js is a **progressive JavaScript framework** for building user
interfaces. It focuses on the view layer, offers declarative rendering,
component-based architecture, and reactivity, and can scale from lightweight
library usage to full-featured frameworks like Vue Router/Pinia.

#### 2. Explain Vue's Reactivity System.

**Answer:** Vue uses **getters/setters** (Vue 2) or **ES6 Proxies** (Vue 3) to
track dependencies. When data changes, it triggers updates to the DOM
efficiently.  
**Key concepts:**

- **Reactive Objects**: Automatically track changes.
- **Dependency Tracking**: Components "subscribe" to data changes.
- **Async Update Queue**: Batches updates for performance.

#### 3. What are Vue Directives? List Examples.

**Answer:** Directives are special HTML attributes prefixed with `v-`:

- `v-if`, `v-show`: Conditional rendering.
- `v-for`: List rendering.
- `v-bind`: Dynamic attributes (`:href="url"`).
- `v-on`: Event handling (`@click="handler"`).
- `v-model`: Two-way form binding.

#### 4. Differences Between v-if and v-show ?

**Answer:**

- **`v-if`**: Toggles DOM existence (lazy, destroys components).
- **`v-show`**: Toggles CSS `display` property (always renders).  
  **Use `v-if`** for heavy/rarely used components; **`v-show`** for frequent
  toggling.

#### 5. What is the Virtual DOM?

**Answer:** A lightweight in-memory representation of the real DOM. Vue uses it
to **compute minimal changes** before updating the actual DOM, improving
performance.

#### 6. Explain Vue Components.

**Answer:** Reusable, self-contained UI elements with:

- **Template**: HTML structure.
- **Script**: Logic (data, methods).
- **Style**: Scoped CSS.  
  Components enable modularity and reusability.

#### 7. How to Pass Data to Child Components?

**Answer:** Use **props**:

```tsx
<!-- Parent -->
<Child :message="parentMsg" />

<!-- Child -->
<script>
export default { props: ['message'] }
</script>
```

#### 8. How to Emit Events from Child to Parent?

**Answer:** Use `$emit`:

```tsx
<!-- Child -->
<button @click="$emit('notify')">Click</button>

<!-- Parent -->
<Child @notify="handleNotify" />
```

#### 9. What is Vuex?

**Answer:** Vuex is Vue’s **official state management library**:

- **State**: Single source of truth.
- **Mutations**: Synchronous state changes.
- **Actions**: Async operations (commit mutations).
- **Getters**: Computed state properties.

#### 10. Vue 3 vs Vue 2 Key Differences.

**Answer:**

- **Composition API**: Logic reuse (vs. Options API).
- **Performance**: Faster with Proxy-based reactivity.
- **Fragments**: Multiple root nodes in templates.
- **Teleport**: Render content outside component tree.
- **Suspense**: Async component handling.

#### 11. What is the Composition API?

**Answer:** Vue 3’s API for organizing code by **feature** (not lifecycle
hooks). Uses `setup()`:

```js
import { ref, computed } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2);
    return { count, double };
  },
};
```

#### 12. Explain ref() vs reactive().

**Answer:**

- **`ref()`**: Wraps primitives/objects; access via `.value`.
- **`reactive()`**: For objects/arrays; no `.value` needed.  
  **Tip:** Use `ref()` for primitives; `reactive()` for objects.

#### 13. What is Pinia?

**Answer:** Vue 3’s **official state management library** (replaces Vuex).
Simpler API with:

- **Stores**: Define state/actions/getters.
- **No mutations**: Directly modify state in actions.
- **DevTools support**.

#### 14. How to Handle Async Operations?

**Answer:** Use **lifecycle hooks** or **async/await**:

```js
export default {
  async created() {
    this.data = await fetchData();
  },
};
```

#### 15. What are Mixins? Drawbacks?

**Answer:** Mixins reuse component logic. **Drawbacks**:

- **Naming collisions**.
- **Implicit dependencies**.
- **No runtime debugging**.  
  **Alternative**: Composition API.

#### 16. Explain Slots.

**Answer:** Slots inject content into child components:

```tsx
<!-- Child -->
<slot name="header">Fallback Content</slot>

<!-- Parent -->
<Child><template #header>Custom Header</template></Child>
```

#### 17. What is Scoped CSS?

**Answer:** Styles scoped to a component:

```vue
<style scoped>
.button {
  color: red;
} /* Only affects this component */
</style>
```

#### 18. What is tsx Router?

**Answer:** Official router for SPA:

- **Routes**: Map URLs to components.
- **Navigation**: `<router-link>`, `router.push()`.
- **Dynamic Routing**: `:id` params.

#### 19. How to Guard Routes?

**Answer:** Use navigation guards:

```js
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn) next('/login');
  else next();
});
```

#### 20. What is Server-Side Rendering (SSR)?

**Answer:** Render Vue on the server for:

- **SEO optimization**.
- **Faster initial load**.  
  **Tools**: Nuxt.js, Vite SSR.

#### 21. Explain Vue Custom Directives.

**Answer:** Create reusable DOM behavior:

```js
app.directive('focus', {
  mounted(el) {
    el.focus();
  },
});
// Usage: <input v-focus>
```

#### 22. What are Vue Plugins?

**Answer:** Add global-level functionality:

```js
const MyPlugin = {
  install(app) {
    app.config.globalProperties.$log = console.log;
  },
};
app.use(MyPlugin);
```

#### 23. Key Differences: Vue vs. React vs. Angular.

**Answer:**

- **Vue**: Progressive, template-based, gentle learning curve.
- **React**: JSX, unidirectional data flow, large ecosystem.
- **Angular**: Full framework, TypeScript-first, steep learning curve.

#### 24. What is nextTick()?

**Answer:** Waits for DOM updates:

```js
this.message = 'updated';
this.$nextTick(() => console.log('DOM updated'));
```

#### 25. How to Optimize Vue Performance?

**Answer:**

- **Lazy-load components**: `defineAsyncComponent()`.
- **Use `v-once`/`v-memo`** for static content.
- **Debounce events**.
- **Optimize computed properties**.

#### 26. What is Renderless Components?

**Answer:** Components with **no template**; expose logic via scoped slots:

```tsx
<RenderlessComponent v-slot="{ data }">
  <div>{{ data }}</div>
</RenderlessComponent>
```

#### 27. Explain Provide/Inject.

**Answer:** Pass data to deeply nested children:

```js
// Parent
provide('user', 'Alice');

// Child
const user = inject('user');
```

#### 28. What is Suspense?

**Answer:** Vue 3 feature for handling async dependencies:

```tsx
<Suspense>
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>Loading...</template>
</Suspense>
```

#### 29. How to Test Vue Apps?

**Answer:**

- **Unit Tests**: Vitest/Jest + Vue Test Utils.
- **E2E Tests**: Cypress/Playwright.
- **Component Tests**: Testing Library.

#### 30. What is Teleport?

**Answer:** Render content outside the component:

```tsx
<teleport to="#modal-root">
  <div>Modal Content</div>
</teleport>
```

---

### Summary

These questions cover core concepts like reactivity, components, state
management (Vuex/Pinia), Vue 3 features (Composition API, Suspense), and best
practices. Mastery of these topics is essential for Vue.js proficiency!

**[⬆ Back to Top](#table-of-contents)**
