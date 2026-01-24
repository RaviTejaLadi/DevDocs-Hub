# React Components and Props - Complete Guide

## Table of Contents

1. [React Components](#react-components)
2. [React Props](#react-props)
3. [Combining Components and Props](#combining-components-and-props)
4. [Best Practices](#best-practices)

---

## React Components

### Definition

React Components are reusable, independent pieces of code that return JSX
elements to be rendered to the screen. They are the building blocks of React
applications, allowing you to split the UI into independent, reusable pieces.

### Types of Components

#### 1. Functional Components

Modern, preferred approach using JavaScript functions.

#### 2. Class Components

Legacy approach using ES6 classes (still supported but less common).

### Syntax

#### Functional Component Syntax

```jsx
// Basic functional component
function ComponentName() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

// Arrow function syntax
const ComponentName = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

// Implicit return for simple components
const ComponentName = () => <h1>Hello, World!</h1>;
```

#### Class Component Syntax

```jsx
import React, { Component } from 'react';

class ComponentName extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}
```

### Usage Guidelines

#### Component Naming

- Always start with a capital letter
- Use PascalCase naming convention
- Choose descriptive names

#### Component Structure

- Keep components small and focused
- One component per file (recommended)
- Export components for reuse

### Examples

#### Simple Functional Component

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

#### Component with State (Using Hooks)

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### Component with Multiple Elements

```jsx
function UserProfile() {
  return (
    <div className="user-profile">
      <img src="avatar.jpg" alt="User Avatar" />
      <h2>John Doe</h2>
      <p>Software Developer</p>
      <button>Follow</button>
    </div>
  );
}
```

---

## React Props

### Definition

Props (short for "properties") are read-only data passed from parent components
to child components. They allow components to be dynamic and reusable by
accepting different data inputs.

### Key Characteristics

- **Read-only**: Props cannot be modified by the receiving component
- **Unidirectional**: Data flows from parent to child
- **Dynamic**: Can pass any JavaScript value (strings, numbers, objects,
  functions, etc.)

### Syntax

#### Passing Props (Parent Component)

```jsx
// Passing different types of props
<ChildComponent
  name="John" // String
  age={25} // Number
  isActive={true} // Boolean
  hobbies={['reading', 'coding']} // Array
  user={{ id: 1, email: 'john@example.com' }} // Object
  onClick={handleClick} // Function
/>
```

#### Receiving Props (Child Component)

##### Functional Component

```jsx
// Method 1: Destructuring in parameters
function ChildComponent({ name, age, isActive }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

// Method 2: Props object
function ChildComponent(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}
```

##### Class Component

```jsx
class ChildComponent extends React.Component {
  render() {
    const { name, age, isActive } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      </div>
    );
  }
}
```

### Usage Patterns

#### Default Props

```jsx
// Functional component with default props
function Greeting({ name = 'Guest', message = 'Welcome!' }) {
  return (
    <h1>
      {message} {name}
    </h1>
  );
}

// Class component with default props
class Greeting extends React.Component {
  static defaultProps = {
    name: 'Guest',
    message: 'Welcome!',
  };

  render() {
    return (
      <h1>
        {this.props.message} {this.props.name}
      </h1>
    );
  }
}
```

#### Props Validation (PropTypes)

```jsx
import PropTypes from 'prop-types';

function UserCard({ name, age, email, isAdmin }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      {isAdmin && <span>Admin User</span>}
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};
```

### Examples

#### Basic Props Usage

```jsx
// Parent Component
function App() {
  return (
    <div>
      <PersonCard
        name="Alice Johnson"
        occupation="Designer"
        location="New York"
      />
      <PersonCard
        name="Bob Smith"
        occupation="Developer"
        location="San Francisco"
      />
    </div>
  );
}

// Child Component
function PersonCard({ name, occupation, location }) {
  return (
    <div className="person-card">
      <h3>{name}</h3>
      <p>{occupation}</p>
      <p>{location}</p>
    </div>
  );
}
```

#### Passing Functions as Props

```jsx
// Parent Component
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} />
    </div>
  );
}

// Child Components
function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

function TodoList({ todos, onToggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(todo.id)}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
    </li>
  );
}
```

#### Passing Complex Objects

```jsx
// Parent Component
function Dashboard() {
  const userStats = {
    totalPosts: 42,
    followers: 1250,
    following: 180,
    joinDate: '2023-01-15',
  };

  const userProfile = {
    name: 'Sarah Wilson',
    avatar: 'https://example.com/avatar.jpg',
    bio: 'Full-stack developer passionate about React',
    location: 'Seattle, WA',
  };

  return (
    <div>
      <ProfileHeader user={userProfile} />
      <StatsWidget stats={userStats} />
    </div>
  );
}

// Child Components
function ProfileHeader({ user }) {
  return (
    <header>
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <div>
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
        <span>{user.location}</span>
      </div>
    </header>
  );
}

function StatsWidget({ stats }) {
  return (
    <div className="stats-widget">
      <StatItem label="Posts" value={stats.totalPosts} />
      <StatItem label="Followers" value={stats.followers} />
      <StatItem label="Following" value={stats.following} />
      <StatItem label="Member since" value={stats.joinDate} />
    </div>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="stat-item">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
}
```

---

## Combining Components and Props

### Component Composition

Components can be composed together to build complex UIs while maintaining
reusability through props.

```jsx
function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 999, rating: 4.5 },
    { id: 2, name: 'Phone', price: 699, rating: 4.2 },
    { id: 3, name: 'Tablet', price: 399, rating: 4.0 },
  ];

  return (
    <div>
      <Header title="Product Catalog" />
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
}

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <Price amount={product.price} />
      <Rating value={product.rating} />
      <Button
        text="Add to Cart"
        onClick={() => console.log('Added', product.name)}
      />
    </div>
  );
}

function Price({ amount }) {
  return <span className="price">${amount}</span>;
}

function Rating({ value }) {
  return <span className="rating">⭐ {value}/5</span>;
}

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

function Footer() {
  return <footer>© 2024 Product Store</footer>;
}
```

---

## Best Practices

### Component Best Practices

#### 1. Single Responsibility

Each component should have one clear purpose.

```jsx
// Good: Focused component
function SearchInput({ onSearch, placeholder }) {
  const [query, setQuery] = useState('');

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && onSearch(query)}
      placeholder={placeholder}
    />
  );
}

// Avoid: Component doing too many things
function SearchInputWithResultsAndPagination() {
  // Too much responsibility in one component
}
```

#### 2. Descriptive Naming

Use clear, descriptive names for components.

```jsx
// Good
function UserProfileCard({ user }) {
  /* ... */
}
function ProductSearchFilter({ onFilter }) {
  /* ... */
}

// Avoid
function Card({ user }) {
  /* ... */
}
function Filter({ onFilter }) {
  /* ... */
}
```

#### 3. Keep Components Small

Break down large components into smaller, manageable pieces.

```jsx
// Good: Broken down into smaller components
function BlogPost({ post }) {
  return (
    <article>
      <PostHeader title={post.title} author={post.author} date={post.date} />
      <PostContent content={post.content} />
      <PostFooter tags={post.tags} likes={post.likes} />
    </article>
  );
}

function PostHeader({ title, author, date }) {
  return (
    <header>
      <h2>{title}</h2>
      <AuthorInfo author={author} date={date} />
    </header>
  );
}
```

### Props Best Practices

#### 1. Destructure Props

Use destructuring for cleaner code.

```jsx
// Good
function UserCard({ name, email, avatar, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
      <StatusIndicator isOnline={isOnline} />
    </div>
  );
}

// Less ideal
function UserCard(props) {
  return (
    <div>
      <img src={props.avatar} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.email}</p>
      <StatusIndicator isOnline={props.isOnline} />
    </div>
  );
}
```

#### 2. Use Default Props

Provide sensible defaults to make components more robust.

```jsx
function Button({
  text = 'Click me',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick = () => {},
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
```

#### 3. Validate Props

Use PropTypes for runtime type checking in development.

```jsx
import PropTypes from 'prop-types';

function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
```

#### 4. Avoid Prop Drilling

For deeply nested components, consider using Context API or state management
libraries.

```jsx
// Instead of passing props through multiple levels
function App() {
  const user = { name: 'John', theme: 'dark' };
  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Header user={user} />;
}

function Header({ user }) {
  return <UserMenu user={user} />;
}

// Use Context for global state
const UserContext = React.createContext();

function App() {
  const user = { name: 'John', theme: 'dark' };
  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
}

function UserMenu() {
  const user = useContext(UserContext);
  return <div>Welcome, {user.name}!</div>;
}
```

### Performance Considerations

#### 1. Memoization

Use React.memo for expensive components that don't need frequent re-renders.

```jsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({
  data,
  onUpdate,
}) {
  // Expensive computations here
  const processedData = useMemo(() => {
    return data.map((item) => ({ ...item, processed: true }));
  }, [data]);

  return (
    <div>
      {processedData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});
```

#### 2. Callback Optimization

Use useCallback to prevent unnecessary re-renders.

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Memoize callback to prevent child re-renders
  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
      ))}
    </div>
  );
}
```

This comprehensive guide covers the fundamental concepts of React Components and
Props, providing you with the knowledge needed to build effective, reusable
React applications.
