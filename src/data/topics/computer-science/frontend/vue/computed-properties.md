# Computed Properties

# What are Computed Properties?

Computed properties are:

```txt
Derived reactive values
```

They automatically calculate values based on reactive state.

When dependencies change:

```txt
Computed value updates automatically
```

---

# Why Use Computed?

Without computed:

```vue
{{ firstName + ' ' + lastName }}
```

This logic runs every render.

With computed:

- Cleaner templates
- Cached results
- Better performance
- Reusable logic

---

# Basic Example

```vue
<template>
  <h1>{{ fullName }}</h1>
</template>

<script setup>
import { computed, ref } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
</script>
```

---

# How Computed Works

```mermaid
graph LR

A[Reactive State] --> B[Computed Property]
B --> C[Template/UI]

A -->|State Changes| B
B -->|Recalculate| C
```

---

# Syntax

```js
const value = computed(() => {
  return derivedValue
})
```

---

# Important Concept

Computed values are:

| Feature | Description |
|---|---|
| Reactive | Auto updates |
| Cached | Runs only when needed |
| Read-only by default | Cannot modify directly |

---

# Computed is Cached

This is the biggest advantage.

---

# Example

```js
const fullName = computed(() => {
  console.log('Running')

  return `${firstName.value} ${lastName.value}`
})
```

The function runs only when dependencies change.

---

# Dependency Tracking

Vue automatically tracks:

```txt
firstName.value
lastName.value
```

These are dependencies.

When they change:

```txt
computed recalculates
```

---

# Computed vs Methods

# Using Method

```vue
<template>
  <h1>{{ getFullName() }}</h1>
</template>

<script setup>
const getFullName = () => {
  return `${firstName.value} ${lastName.value}`
}
</script>
```

Problem:

```txt
Runs every render
```

---

# Using Computed

```js
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
```

Benefit:

```txt
Cached until dependency changes
```

---

# Difference

| computed | method |
|---|---|
| Cached | Not cached |
| Better for derived values | Better for actions |
| Performance optimized | Re-runs every render |

---

# Real World Example

# Search Filtering

```vue
<template>
  <input v-model="search" />

  <ul>
    <li
      v-for="user in filteredUsers"
      :key="user.id"
    >
      {{ user.name }}
    </li>
  </ul>
</template>

<script setup>
import { computed, ref } from 'vue'

const search = ref('')

const users = ref([
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Alex' },
])

const filteredUsers = computed(() => {
  return users.value.filter(user =>
    user.name
      .toLowerCase()
      .includes(search.value.toLowerCase())
  )
})
</script>
```

---

# Why Computed Here?

Without computed:

```txt
Filtering runs every render
```

With computed:

```txt
Runs only when search/users change
```

---

# Multiple Dependencies

Computed can depend on multiple reactive values.

---

# Example

```js
const totalPrice = computed(() => {
  return price.value * quantity.value
})
```

Dependencies:

- `price`
- `quantity`

---

# Computed with reactive()

```vue
<script setup>
import { computed, reactive } from 'vue'

const user = reactive({
  firstName: 'John',
  lastName: 'Doe',
})

const fullName = computed(() => {
  return `${user.firstName} ${user.lastName}`
})
</script>
```

---

# Writable Computed Properties

Normally computed is read-only.

But Vue supports getter/setter.

---

# Example

```vue
<script setup>
import { computed, ref } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },

  set(value) {
    const names = value.split(' ')

    firstName.value = names[0]
    lastName.value = names[1]
  },
})
</script>
```

---

# Usage

```js
fullName.value = 'Jane Smith'
```

Updates:

```txt
firstName → Jane
lastName → Smith
```

---

# Common Use Cases

| Use Case | Example |
|---|---|
| Filtering | Search results |
| Sorting | Product sorting |
| Formatting | Currency/date |
| Derived state | Full name |
| Calculations | Cart totals |
| Validation | Form checks |

---

# Example: Cart Total

```vue
<script setup>
import { computed, ref } from 'vue'

const cart = ref([
  { price: 100, quantity: 2 },
  { price: 50, quantity: 1 },
])

const total = computed(() => {
  return cart.value.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)
})
</script>
```

---

# Example: Form Validation

```js
const isFormValid = computed(() => {
  return (
    email.value.length > 0 &&
    password.value.length >= 6
  )
})
```

---

# Example: Dynamic Classes

```vue
<button :class="{ active: isActive }">
```

Better:

```js
const buttonClass = computed(() => {
  return {
    active: isActive.value,
    disabled: loading.value,
  }
})
```

---

# Then Use

```vue
<button :class="buttonClass">
```

---

# Computed Chain

Computed can depend on computed.

---

# Example

```js
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

const greeting = computed(() => {
  return `Hello ${fullName.value}`
})
```

---

# Lazy Evaluation

Computed runs only when accessed.

---

# Example

```js
const expensiveCalculation = computed(() => {
  console.log('Running')

  return heavyOperation()
})
```

If unused:

```txt
Function never runs
```

---

# Common Mistakes

# Using computed for Side Effects

❌ Wrong

```js
computed(() => {
  fetchUsers()
})
```

Use `watch()` instead.

---

# Mutating State Inside Computed

❌ Bad

```js
const total = computed(() => {
  count.value++
})
```

Computed should stay pure.

---

# Too Much Logic in Templates

❌ Bad

```vue
{{ users.filter(user => user.active).length }}
```

✅ Better

```js
const activeUsers = computed(() => {
  return users.value.filter(user => user.active)
})
```

---

# computed vs watch

| computed | watch |
|---|---|
| Derived values | Side effects |
| Returns value | Executes logic |
| Cached | Not cached |
| Used in templates | Used for effects |

---

# Use computed When

✅ You need:

- calculated values
- filtered data
- formatted values
- derived state

---

# Use watch When

✅ You need:

- API calls
- localStorage sync
- async operations
- side effects

---

# Best Practices

---

# Keep Computed Pure

Avoid:

- API calls
- DOM manipulation
- mutations

---

# Use Computed for Expensive Operations

Examples:

- filtering
- sorting
- aggregations

---

# Keep Templates Simple

Move logic to computed.

---

# Small Focused Computed

Avoid giant computed functions.

---

# Good Example

```js
const completedTasks = computed(() => {
  return tasks.value.filter(task => task.completed)
})
```

---

# Quick Summary

| Concept | Meaning |
|---|---|
| computed | Derived reactive value |
| Cached | Runs only when needed |
| Reactive | Updates automatically |
| Getter | Read value |
| Setter | Optional writable value |

---

# Most Important Things to Remember

1. Computed is cached
2. Used for derived state
3. Better than methods for calculations
4. Avoid side effects inside computed
5. Keep templates clean using computed
