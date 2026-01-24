# **1️⃣ Single Responsibility Principle (SRP)**

## 🎯 Definition

A class or component should have only one reason to change - it should do one
thing and do it well.

## 🌟 Frontend Application

Each React component should have a single, well-defined responsibility.

## ❌ Bad Example

```jsx
// UserProfile component doing too many things
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data fetching responsibility
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  // Validation responsibility
  const validateEmail = (email) => {
    return email.includes('@');
  };

  // UI rendering responsibility
  return (
    <div>
      <img src={user?.avatar} alt="Avatar" />
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      {/* Complex form logic here */}
    </div>
  );
}
```

## ✅ Good Example

```jsx
// Separate components with single responsibilities
function UserAvatar({ src, alt }) {
  return <img src={src} alt={alt} />;
}

function UserInfo({ name, email }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

function UserProfile({ userId }) {
  const { user, loading } = useUser(userId); // Custom hook for data fetching

  if (loading) return <Loading />;

  return (
    <div>
      <UserAvatar src={user.avatar} alt={user.name} />
      <UserInfo name={user.name} email={user.email} />
    </div>
  );
}
```

## 🚀 Key Benefits

- **Easier to understand** - Each component has a clear purpose
- **Easier to test** - Single responsibility means focused tests
- **Easier to maintain** - Changes affect only one area of functionality
- **Better reusability** - Focused components can be reused in different
  contexts

## 🛠️ Implementation Tips

- Break large components into smaller, focused ones
- Use custom hooks for data fetching and business logic
- Separate UI components from logic components
- Follow the "one component, one job" rule

## 🎯 Real-world Applications

- **Form components** - Separate validation, input handling, and UI
- **Data tables** - Split into header, row, pagination components
- **Navigation** - Separate menu items, routing, and state management
- **Modal components** - Separate trigger, content, and overlay logic
