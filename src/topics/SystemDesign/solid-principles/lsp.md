# **3️⃣ Liskov Substitution Principle (LSP)**

## 🔄 Definition

Objects of a superclass should be replaceable with objects of a subclass without
breaking the application.

## 🌟 Frontend Application

Components should be interchangeable with their variants without breaking
functionality.

## ❌ Bad Example

```jsx
function TextInput({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange} />;
}

function NumericInput({ value, onValueChange }) {
  // Different interface - breaks substitution
  return <input type="number" value={value} onChange={onValueChange} />;
}

function SearchInput({ query, onSearch }) {
  // Completely different interface
  return <input type="search" value={query} onChange={onSearch} />;
}
```

## ✅ Good Example

```jsx
function TextInput({ value, onChange, ...props }) {
  return <input type="text" value={value} onChange={onChange} {...props} />;
}

function NumericInput({ value, onChange, ...props }) {
  return <input type="number" value={value} onChange={onChange} {...props} />;
}

function SearchInput({ value, onChange, ...props }) {
  return <input type="search" value={value} onChange={onChange} {...props} />;
}

// All can be used interchangeably
function Form({ inputType, value, onChange }) {
  const InputComponent = {
    text: TextInput,
    number: NumericInput,
    search: SearchInput,
  }[inputType];

  return <InputComponent value={value} onChange={onChange} />;
}

// Higher-order component approach
function withInputBehavior(Component) {
  return function EnhancedInput({ value, onChange, ...props }) {
    return <Component value={value} onChange={onChange} {...props} />;
  };
}
```

## 🚀 Key Benefits

- **Interchangeable components** - Swap components without code changes
- **Consistent interfaces** - Predictable behavior across variants
- **Better testing** - Mock and test components uniformly
- **Flexible architecture** - Easy to switch implementations

## 🛠️ Implementation Tips

- Maintain consistent prop interfaces across similar components
- Use TypeScript interfaces to enforce contracts
- Create base component contracts
- Ensure behavioral consistency, not just interface consistency
- Test substitutability explicitly

## 🎯 Real-world Applications

- **Input components** - Text, email, password inputs with same interface
- **Layout components** - Grid, flex, table layouts with consistent APIs
- **Data fetching components** - REST, GraphQL, local storage with same
  interface
- **Authentication providers** - OAuth, JWT, session-based with same contract
