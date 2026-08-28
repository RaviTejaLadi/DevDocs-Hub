# **2️⃣ Open/Closed Principle (OCP)**

## 🔓 Definition

Software entities should be open for extension but closed for modification.

## 🌟 Frontend Application

Design components that can be extended without modifying their core
implementation.

## ❌ Bad Example

```jsx
function Button({ type, children }) {
  if (type === 'primary') {
    return <button className="btn-primary">{children}</button>;
  }
  if (type === 'secondary') {
    return <button className="btn-secondary">{children}</button>;
  }
  if (type === 'danger') {
    return <button className="btn-danger">{children}</button>;
  }
  // Need to modify this component for every new button type
}
```

## ✅ Good Example

```jsx
function Button({ className, children, ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}

// Extensions without modifying the base component
const PrimaryButton = (props) => <Button className="btn-primary" {...props} />;
const SecondaryButton = (props) => (
  <Button className="btn-secondary" {...props} />
);
const DangerButton = (props) => <Button className="btn-danger" {...props} />;

// Plugin-based approach
function Button({ variant = 'default', children, ...props }) {
  const variants = {
    default: 'btn-default',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
  };

  return (
    <button className={`btn ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
```

## 🚀 Key Benefits

- **Easy to extend** - Add new functionality without changing existing code
- **Reduces bugs** - Existing functionality remains untouched
- **Better maintainability** - Changes are isolated to new code
- **Flexible architecture** - Components can grow with requirements

## 🛠️ Implementation Tips

- Use composition over conditional rendering
- Implement plugin/strategy patterns
- Design flexible prop APIs
- Use render props or children patterns
- Create extensible component libraries

## 🎯 Real-world Applications

- **UI component libraries** - Extend base components for specific use cases
- **Form builders** - Add new field types without changing core logic
- **Data visualization** - Extend chart components with new chart types
- **Theme systems** - Add new themes without modifying base components
