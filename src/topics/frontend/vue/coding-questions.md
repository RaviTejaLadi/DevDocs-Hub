# Top 30 Vue.js Coding Questions and Answers

## Table of Contents

1. [Basics](#basics)
2. [Components](#components)
3. [State Management](#state-management)
4. [Lifecycle Hooks](#lifecycle-hooks)
5. [Routing](#routing)
6. [Advanced Concepts](#advanced-concepts)
7. [Directives](#directives)
8. [Performance](#performance)
9. [Composition API (Vue 3)](<#composition-api-(vue-3)>)
10. [Reactivity](#reactivity)
11. [Slots](#slots)
12. [Mixins](#mixins)
13. [Transitions](#transitions)
14. [Custom Directives](#custom-directives)
15. [Filters](#filters)
16. [Testing](#testing)
17. [Vue 3 Features](#vue-3-features)
18. [Error Handling](#error-handling)

## Basics

### 1. How do you create a new Vue instance?

```javascript
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
});
```

### 2. What are Vue directives? Give examples.

Vue directives are special attributes with the `v-` prefix. Examples:

- `v-bind`: Dynamically binds attributes
- `v-model`: Creates two-way data bindings
- `v-for`: Renders a list of items
- `v-if`: Conditionally renders an element
- `v-on`: Attaches event listeners

### 3. How do you bind data to an attribute?

```html
<div v-bind:class="className">Content</div>
<!-- Shorthand -->
<div :class="className">Content</div>
```

## Components

### 4. How do you create a component?

```javascript
Vue.component('my-component', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>',
});
```

### 5. How do you pass data from parent to child component?

Using props:

```javascript
// Parent
<child-component :message="parentMessage"></child-component>

// Child
Vue.component('child-component', {
  props: ['message'],
  template: '<span>{{ message }}</span>'
})
```

### 6. How do child components emit events to parents?

```javascript
// Child
this.$emit('event-name', payload)

// Parent
<child-component @event-name="handleEvent"></child-component>
```

## State Management

### 7. How do you use Vuex for state management?

```javascript
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
});
```

### 8. What's the difference between mutations and actions in Vuex?

- Mutations: Synchronous, directly modify state
- Actions: Can be asynchronous, commit mutations

## Lifecycle Hooks

### 9. What are Vue lifecycle hooks?

```javascript
new Vue({
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
});
```

### 10. When would you use the mounted() hook?

For DOM manipulation or when you need to access the rendered DOM:

```javascript
mounted() {
  this.$refs.input.focus()
}
```

## Routing

### 11. How do you set up Vue Router?

```javascript
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
});

const app = new Vue({
  router,
}).$mount('#app');
```

### 12. How do you navigate programmatically?

```javascript
this.$router.push('/about');
// or with object
this.$router.push({ path: 'register', query: { plan: 'private' } });
```

## Advanced Concepts

### 13. What are computed properties?

```javascript
computed: {
  reversedMessage() {
    return this.message.split('').reverse().join('')
  }
}
```

### 14. When to use methods vs computed properties?

- Computed: Cached based on dependencies, use for derived data
- Methods: Run whenever called, use for event handlers or non-reactive data

### 15. What are watchers?

```javascript
watch: {
  counter(newVal, oldVal) {
    console.log('Counter changed from', oldVal, 'to', newVal)
  }
}
```

## Directives

### 16. How does v-model work?

```html
<input v-model="message" />
<!-- is syntactic sugar for: -->
<input :value="message" @input="message = $event.target.value" />
```

### 17. What's the difference between v-if and v-show?

- `v-if`: Adds/removes from DOM
- `v-show`: Toggles display CSS property

## Performance

### 18. How do you optimize Vue performance?

- Use v-once for static content
- Use key with v-for
- Lazy-load components
- Use computed properties instead of methods when possible
- Use production build

### 19. What is async component loading?

```javascript
const AsyncComponent = () => ({
  component: import('./MyComponent.vue'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000,
});
```

## Composition API (Vue 3)

### 20. How do you use the Composition API?

```javascript
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2);

    function increment() {
      count.value++;
    }

    return { count, double, increment };
  },
};
```

## Reactivity

### 21. Why might reactivity not work and how to fix it?

Common cases:

1. Adding new properties to an object - use `Vue.set()` or `this.$set()`
2. Array changes - use array mutation methods or `Vue.set()`

## Slots

### 22. How do you use slots?

```html
<!-- Child -->
<div>
  <slot></slot>
</div>

<!-- Parent -->
<child-component> Content for the slot </child-component>
```

### 23. What are scoped slots?

```html
<!-- Child -->
<slot :user="user"></slot>

<!-- Parent -->
<child-component v-slot="{ user }"> {{ user.name }} </child-component>
```

## Mixins

### 24. What are mixins and how to use them?

```javascript
const myMixin = {
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log('Hello from mixin!');
    },
  },
};

new Vue({
  mixins: [myMixin],
  created() {
    console.log('Component created');
  },
});
```

## Transitions

### 25. How do you add transitions?

```html
<transition name="fade">
  <p v-if="show">Hello</p>
</transition>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
```

## Custom Directives

### 26. How do you create a custom directive?

```javascript
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

// Usage
<input v-focus>
```

## Filters

### 27. How do you create filters?

```javascript
Vue.filter('capitalize', function (value) {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
});

// Usage
{
  {
    message | capitalize;
  }
}
```

## Testing

### 28. How do you test Vue components?

Using Vue Test Utils:

```javascript
import { mount } from '@vue/test-utils';
import MyComponent from './MyComponent.vue';

test('renders correctly', () => {
  const wrapper = mount(MyComponent, {
    propsData: {
      msg: 'Hello',
    },
  });
  expect(wrapper.text()).toContain('Hello');
});
```

## Vue 3 Features

### 29. What are some key Vue 3 features?

- Composition API
- Multiple root elements in templates
- Teleport (formerly Portal)
- Fragments
- Better TypeScript support
- Performance improvements

## Error Handling

### 30. How do you handle errors in Vue?

```javascript
Vue.config.errorHandler = function(err, vm, info) {
  console.error(`Error: ${err.toString()}\nInfo: ${info}`)
}

// In components
errorCaptured(err, vm, info) {
  // Handle error locally
  return false // Prevent propagation
}
```

These questions cover fundamental to advanced Vue.js concepts that are commonly
asked in interviews and practical coding scenarios.

**[⬆ Back to Top](#table-of-contents)**
