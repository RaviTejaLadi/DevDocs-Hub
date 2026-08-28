# React JSX: Comprehensive Guide

## 1. Introduction to JSX

**Definition**: JSX (JavaScript XML) is a syntax extension for JavaScript that
allows you to write HTML-like code in your JavaScript files. It's not valid
JavaScript by itself and needs to be compiled into regular JavaScript function
calls (typically React.createElement() calls) before it can run in the browser.

**Key Characteristics**:

- Not a string or HTML
- Produces React "elements"
- Embeds expressions with curly braces {}
- Close tags must be explicit
- class becomes className, for becomes htmlFor

## 2. Basic JSX Syntax

### Syntax:

```jsx
const element = <h1>Hello, world!</h1>;
```

### Explanation:

This looks like HTML but is actually JSX. Under the hood, it gets compiled to:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

### Usage:

- Used anywhere you need to define the UI structure in React
- Can be assigned to variables
- Can be returned from functions/components

### Example:

```jsx
function Greeting() {
  return <h1>Hello, React!</h1>;
}
```

## 3. Embedding Expressions in JSX

### Syntax:

```jsx
const name = 'John';
const element = <h1>Hello, {name}</h1>;
```

### Explanation:

- Curly braces `{}` allow embedding any valid JavaScript expression
- The expression is evaluated and its result becomes part of the rendered output

### Usage:

- Display dynamic content
- Perform calculations inline
- Render conditional content

### Examples:

```jsx
// Variable
const user = { firstName: 'Jane', lastName: 'Doe' };
const greeting = (
  <p>
    Hello, {user.firstName} {user.lastName}!
  </p>
);

// Expression
const total = <p>Total: {5 + 10}</p>;

// Function call
function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}
const formatted = <h2>{formatName(user)}</h2>;
```

## 4. JSX is an Expression Too

### Definition:

After compilation, JSX expressions become regular JavaScript function calls and
evaluate to JavaScript objects.

### Usage:

- Can use JSX in if statements and for loops
- Can assign JSX to variables
- Can accept JSX as arguments
- Can return JSX from functions

### Examples:

```jsx
// Conditional assignment
const isLoggedIn = true;
const message = isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>;

// In if statement
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

## 5. Specifying Attributes with JSX

### Syntax:

```jsx
const element = <img src={user.avatarUrl} alt="User avatar" />;
```

### Rules:

- Use quotes for string literals: `className="header"`
- Use curly braces for expressions: `src={user.avatarUrl}`
- HTML attributes become camelCase in JSX:
  - `class` → `className`
  - `tabindex` → `tabIndex`
  - `for` → `htmlFor`
  - `onclick` → `onClick`

### Examples:

```jsx
// String literal
const element1 = <div className="container"></div>;

// Expression
const element2 = <img src={user.avatarUrl} />;

// Style attribute (note double curly braces)
const styleExample = (
  <div style={{ color: 'red', fontSize: '20px' }}>Red text</div>
);
```

## 6. JSX Children

### Syntax:

```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <p>This is some content</p>
  </div>
);
```

### Rules:

- Tags can be nested like HTML
- Must return a single root element (or Fragment)
- Self-closing tags must end with `/>`

### Examples:

```jsx
// Nested elements
const card = (
  <div className="card">
    <div className="card-header">
      <h3>Title</h3>
    </div>
    <div className="card-body">
      <p>Content goes here</p>
    </div>
  </div>
);

// Self-closing tag
const input = <input type="text" />;
```

## 7. JSX Prevents Injection Attacks

### Definition:

JSX automatically escapes any values embedded in it before rendering them,
helping prevent XSS (cross-site-scripting) attacks.

### Example:

```jsx
const userInput = '<script>alert("XSS")</script>';
const safeElement = <div>{userInput}</div>;
// Renders as text, won't execute the script
```

## 8. JSX Represents Objects

### Under the Hood:

JSX compiles to `React.createElement()` calls which return plain JavaScript
objects called "React elements".

### Example:

```jsx
// JSX:
const element = <h1 className="greeting">Hello, world!</h1>;

// Compiles to:
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

// Which creates an object like:
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!',
  },
};
```

## 9. Advanced JSX Patterns

### 9.1 Conditional Rendering

**Syntax**:

```jsx
{
  condition && <Component />;
}
{
  condition ? <ComponentA /> : <ComponentB />;
}
```

**Example**:

```jsx
function WelcomeMessage({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}</div>
  );
}
```

### 9.2 Lists and Keys

**Syntax**:

```jsx
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.text}</li>
  ))}
</ul>
```

**Example**:

```jsx
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number.toString()}>{number}</li>
      ))}
    </ul>
  );
}
```

### 9.3 Fragments

**Syntax**:

```jsx
<>
  <ChildA />
  <ChildB />
</>
```

**Example**:

```jsx
function Columns() {
  return (
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  );
}
```

## 10. Common JSX Gotchas

1. **className vs class**: Must use `className` instead of `class`
2. **Self-closing tags**: Always close tags like `<img />`, `<input />`
3. **CamelCase properties**: `onclick` becomes `onClick`, `tabindex` becomes
   `tabIndex`
4. **Style as object**: `style` takes a JavaScript object with camelCased
   properties
5. **Comments**: Use `{/* comment */}` inside JSX

## 11. JSX vs HTML Comparison Table

| Feature        | HTML               | JSX                        |
| -------------- | ------------------ | -------------------------- |
| class          | `class="name"`     | `className="name"`         |
| for            | `for="inputId"`    | `htmlFor="inputId"`        |
| style          | String             | Object with camelCase keys |
| Event handlers | Lowercase          | CamelCase                  |
| Self-closing   | Optional           | Required                   |
| Comments       | `<!-- comment -->` | `{/* comment */}`          |

## 12. Practical JSX Examples

### Example 1: Simple Component

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Example 2: Component with Conditional

```jsx
function Greeting({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back, {username}!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}
```

### Example 3: List Rendering

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
      ))}
    </ul>
  );
}
```

### Example 4: Form with Event Handlers

```jsx
function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + name);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Conclusion

JSX is a powerful syntax extension that makes writing React components more
intuitive by allowing HTML-like syntax in JavaScript. While it looks similar to
HTML, it has important differences and additional capabilities that make it more
suitable for building component-based UIs. Understanding JSX is fundamental to
working effectively with React.
