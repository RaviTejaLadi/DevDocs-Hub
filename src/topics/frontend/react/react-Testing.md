# Complete React Testing Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Core Definitions](#core-definitions)
3. [Testing Libraries and Tools](#testing-libraries-and-tools)
4. [Basic Syntax and Setup](#basic-syntax-and-setup)
5. [Testing Fundamentals](#testing-fundamentals)
6. [Component Testing](#component-testing)
7. [Event Testing](#event-testing)
8. [Async Testing](#async-testing)
9. [Mocking in React Tests](#mocking-in-react-tests)
10. [Integration Testing](#integration-testing)
11. [Best Practices](#best-practices)
12. [Common Patterns](#common-patterns)
13. [Troubleshooting](#troubleshooting)

---

## Introduction

React Testing is the practice of verifying that React components and
applications behave correctly under various conditions. It ensures code
reliability, prevents regressions, and improves code quality through automated
verification.

## Core Definitions

### Test

A test is a piece of code that verifies whether a specific functionality works
as expected.

### Test Suite

A collection of related tests grouped together, typically for a specific
component or feature.

### Assertion

A statement that checks if a condition is true. If false, the test fails.

### Test Runner

Software that executes tests and reports results (e.g., Jest).

### Render

The process of creating a virtual representation of a component for testing
purposes.

### Query

Methods used to find elements in the rendered component.

### Mock

A fake implementation of a function or module used in testing.

### Spy

A function that records information about how it was called.

## Testing Libraries and Tools

### Jest

JavaScript testing framework that provides test runners, assertions, and mocking
capabilities.

### React Testing Library (RTL)

A testing utility that encourages testing components the way users interact with
them.

### Enzyme (Legacy)

A JavaScript testing utility for React that makes it easier to test component
output and behavior.

### Vitest

A fast testing framework that's an alternative to Jest, especially for Vite
projects.

## Basic Syntax and Setup

### Installation

```bash
# For new Create React App projects (Jest + RTL included)
npx create-react-app my-app

# Manual installation
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
```

### Basic Test File Structure

```javascript
// ComponentName.test.js
import { render, screen } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  test('should render correctly', () => {
    // Test implementation
  });
});
```

### Jest Configuration (jest.config.js)

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],
};
```

### Setup File (setupTests.js)

```javascript
import '@testing-library/jest-dom';

// Global test setup
beforeEach(() => {
  // Reset any global state
});
```

## Testing Fundamentals

### Basic Test Structure

```javascript
// Arrange - Set up test data and conditions
// Act - Execute the functionality being tested
// Assert - Verify the results

test('adds 1 + 2 to equal 3', () => {
  // Arrange
  const a = 1;
  const b = 2;

  // Act
  const result = a + b;

  // Assert
  expect(result).toBe(3);
});
```

### Common Jest Matchers

```javascript
// Equality
expect(value).toBe(4); // Strict equality
expect(value).toEqual({ name: 'John' }); // Deep equality

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();

// Numbers
expect(value).toBeGreaterThan(3);
expect(value).toBeCloseTo(0.3);

// Strings
expect('Hello World').toMatch(/World/);
expect('Hello World').toContain('Hello');

// Arrays
expect(['Alice', 'Bob']).toContain('Alice');
expect(array).toHaveLength(2);

// Exceptions
expect(() => {
  throw new Error('Wrong!');
}).toThrow('Wrong!');
```

## Component Testing

### Basic Component Rendering

```javascript
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
```

### Testing Props

```javascript
// Button.js
const Button = ({ variant, children, disabled }) => (
  <button className={`btn btn-${variant}`} disabled={disabled}>
    {children}
  </button>
);

// Button.test.js
test('applies correct variant class', () => {
  render(<Button variant="primary">Test</Button>);
  const button = screen.getByRole('button');
  expect(button).toHaveClass('btn-primary');
});

test('disables button when disabled prop is true', () => {
  render(<Button disabled>Test</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
});
```

### Testing Conditional Rendering

```javascript
// Message.js
const Message = ({ type, children }) => {
  if (type === 'error') {
    return <div className="error">{children}</div>;
  }
  if (type === 'success') {
    return <div className="success">{children}</div>;
  }
  return null;
};

// Message.test.js
test('renders error message', () => {
  render(<Message type="error">Error occurred</Message>);
  expect(screen.getByText('Error occurred')).toHaveClass('error');
});

test('renders nothing for invalid type', () => {
  const { container } = render(<Message type="invalid">Test</Message>);
  expect(container.firstChild).toBeNull();
});
```

## Event Testing

### User Event Setup

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('handles click events', async () => {
  const user = userEvent.setup();
  // Test implementation
});
```

### Click Events

```javascript
// Counter.js
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Counter.test.js
test('increments count on button click', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const button = screen.getByText('Increment');
  const countDisplay = screen.getByTestId('count');

  expect(countDisplay).toHaveTextContent('0');

  await user.click(button);
  expect(countDisplay).toHaveTextContent('1');
});
```

### Form Input Events

```javascript
// LoginForm.js
const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

// LoginForm.test.js
test('submits form with correct data', async () => {
  const user = userEvent.setup();
  const mockSubmit = jest.fn();

  render(<LoginForm onSubmit={mockSubmit} />);

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByText('Login');

  await user.type(emailInput, 'test@example.com');
  await user.type(passwordInput, 'password123');
  await user.click(submitButton);

  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
  });
});
```

### Keyboard Events

```javascript
test('handles keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<SearchInput />);

  const input = screen.getByRole('textbox');

  await user.type(input, 'test query');
  await user.keyboard('{Enter}');

  expect(mockSearch).toHaveBeenCalledWith('test query');
});
```

## Async Testing

### Testing Promises

```javascript
// DataFetcher.js
const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <span>Loading...</span>}
      {data && <div data-testid="data">{data.message}</div>}
    </div>
  );
};

// DataFetcher.test.js
test('fetches and displays data', async () => {
  const user = userEvent.setup();

  // Mock fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: 'Hello World' }),
    })
  );

  render(<DataFetcher />);

  const button = screen.getByText('Fetch Data');
  await user.click(button);

  expect(screen.getByText('Loading...')).toBeInTheDocument();

  const data = await screen.findByTestId('data');
  expect(data).toHaveTextContent('Hello World');

  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});
```

### waitFor Usage

```javascript
import { waitFor } from '@testing-library/react';

test('waits for element to appear', async () => {
  render(<AsyncComponent />);

  await waitFor(() => {
    expect(screen.getByText('Loaded')).toBeInTheDocument();
  });
});

test('waits for element to disappear', async () => {
  render(<ComponentWithLoader />);

  await waitFor(() => {
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });
});
```

### Testing setTimeout/setInterval

```javascript
// Timer.js
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div data-testid="timer">{seconds}</div>;
};

// Timer.test.js
test('increments timer every second', () => {
  jest.useFakeTimers();

  render(<Timer />);

  const timer = screen.getByTestId('timer');
  expect(timer).toHaveTextContent('0');

  jest.advanceTimersByTime(1000);
  expect(timer).toHaveTextContent('1');

  jest.advanceTimersByTime(2000);
  expect(timer).toHaveTextContent('3');

  jest.useRealTimers();
});
```

## Mocking in React Tests

### Mocking Functions

```javascript
// Component with callback
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

test('calls onClick prop when clicked', async () => {
  const user = userEvent.setup();
  const mockClick = jest.fn();

  render(<Button onClick={mockClick}>Click me</Button>);

  await user.click(screen.getByText('Click me'));

  expect(mockClick).toHaveBeenCalledTimes(1);
});
```

### Mocking Modules

```javascript
// Mock external library
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('fetches data with axios', async () => {
  const data = { users: [{ id: 1, name: 'John' }] };
  mockedAxios.get.mockResolvedValue({ data });

  render(<UserList />);

  await screen.findByText('John');
  expect(mockedAxios.get).toHaveBeenCalledWith('/api/users');
});
```

### Mocking Custom Hooks

```javascript
// Mock custom hook
jest.mock('./hooks/useAuth');
const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

test('shows login when not authenticated', () => {
  mockUseAuth.mockReturnValue({
    isAuthenticated: false,
    user: null,
    login: jest.fn(),
    logout: jest.fn()
  });

  render(<ProtectedRoute />);

  expect(screen.getByText('Please log in')).toBeInTheDocument();
});
```

### Mocking React Router

```javascript
import { MemoryRouter } from 'react-router-dom';

test('renders correct page for route', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('About Page')).toBeInTheDocument();
});
```

## Integration Testing

### Testing Component Integration

```javascript
// TodoApp integration test
test('adds and removes todos', async () => {
  const user = userEvent.setup();
  render(<TodoApp />);

  const input = screen.getByPlaceholderText('Add todo...');
  const addButton = screen.getByText('Add');

  // Add todo
  await user.type(input, 'Learn React Testing');
  await user.click(addButton);

  expect(screen.getByText('Learn React Testing')).toBeInTheDocument();

  // Remove todo
  const deleteButton = screen.getByRole('button', { name: /delete/i });
  await user.click(deleteButton);

  expect(screen.queryByText('Learn React Testing')).not.toBeInTheDocument();
});
```

### Testing with Context

```javascript
// Custom render with context
const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>);
};

test('applies theme styles', () => {
  renderWithTheme(<ThemedButton>Click me</ThemedButton>);

  const button = screen.getByRole('button');
  expect(button).toHaveStyle('background-color: #007bff');
});
```

### Testing with Redux

```javascript
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

test('displays user name from store', () => {
  const initialState = {
    user: { name: 'John Doe', id: 1 },
  };

  renderWithRedux(<UserProfile />, { initialState });

  expect(screen.getByText('John Doe')).toBeInTheDocument();
});
```

## Best Practices

### 1. Test Behavior, Not Implementation

```javascript
// ❌ Bad - testing implementation details
test('sets loading state to true', () => {
  const component = shallow(<DataComponent />);
  component.instance().fetchData();
  expect(component.state('loading')).toBe(true);
});

// ✅ Good - testing user-visible behavior
test('shows loading indicator when fetching data', async () => {
  const user = userEvent.setup();
  render(<DataComponent />);

  await user.click(screen.getByText('Load Data'));

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
```

### 2. Use Semantic Queries

```javascript
// ❌ Avoid getByTestId when possible
screen.getByTestId('submit-button');

// ✅ Prefer semantic queries
screen.getByRole('button', { name: /submit/i });
screen.getByLabelText('Email address');
screen.getByText('Welcome back!');
```

### 3. Test Edge Cases

```javascript
test('handles empty list', () => {
  render(<TodoList todos={[]} />);
  expect(screen.getByText('No todos yet')).toBeInTheDocument();
});

test('handles very long todo text', () => {
  const longText = 'a'.repeat(1000);
  render(<TodoItem text={longText} />);
  expect(screen.getByText(longText)).toBeInTheDocument();
});
```

### 4. Clean Up After Tests

```javascript
afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

afterAll(() => {
  jest.restoreAllMocks();
});
```

## Common Patterns

### Custom Render Function

```javascript
// test-utils.js
const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
```

### Page Object Model

```javascript
// pageObjects/LoginPage.js
class LoginPage {
  constructor(screen) {
    this.screen = screen;
  }

  get emailInput() {
    return this.screen.getByLabelText('Email');
  }

  get passwordInput() {
    return this.screen.getByLabelText('Password');
  }

  get submitButton() {
    return this.screen.getByRole('button', { name: /login/i });
  }

  async login(email, password) {
    const user = userEvent.setup();
    await user.type(this.emailInput, email);
    await user.type(this.passwordInput, password);
    await user.click(this.submitButton);
  }
}

// Usage in tests
test('successful login', async () => {
  render(<LoginForm />);
  const loginPage = new LoginPage(screen);

  await loginPage.login('user@example.com', 'password');

  expect(screen.getByText('Welcome!')).toBeInTheDocument();
});
```

### Factory Functions for Test Data

```javascript
// factories/userFactory.js
export const createUser = (overrides = {}) => ({
  id: Math.random(),
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user',
  ...overrides,
});

// Usage
test('renders admin features for admin user', () => {
  const adminUser = createUser({ role: 'admin' });
  render(<UserProfile user={adminUser} />);

  expect(screen.getByText('Admin Panel')).toBeInTheDocument();
});
```

## Troubleshooting

### Common Issues and Solutions

#### 1. "Not wrapped in act()" Warning

```javascript
// ❌ Problem
test('updates state', () => {
  const { rerender } = render(<Counter />);
  // Direct state update without act()
});

// ✅ Solution - Use user interactions
test('updates state', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  await user.click(screen.getByText('Increment'));
  // State updates are wrapped in act() automatically
});
```

#### 2. Testing Async Operations

```javascript
// ❌ Problem - not waiting for async operation
test('loads data', () => {
  render(<AsyncComponent />);
  expect(screen.getByText('Data loaded')).toBeInTheDocument(); // Fails
});

// ✅ Solution - wait for element
test('loads data', async () => {
  render(<AsyncComponent />);
  expect(await screen.findByText('Data loaded')).toBeInTheDocument();
});
```

#### 3. Debugging Test Failures

```javascript
test('debug example', () => {
  render(<MyComponent />);

  // See what's rendered
  screen.debug();

  // See specific element
  screen.debug(screen.getByRole('button'));

  // Check available queries
  screen.logTestingPlaygroundURL();
});
```

#### 4. Testing Custom Hooks

```javascript
import { renderHook, act } from '@testing-library/react';

test('useCounter hook', () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

### Performance Testing

```javascript
// Monitor render performance
test('renders large list efficiently', () => {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }));

  const start = performance.now();
  render(<LargeList items={items} />);
  const end = performance.now();

  expect(end - start).toBeLessThan(100); // Should render in under 100ms
});
```

### Accessibility Testing

```javascript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

This comprehensive guide covers the essential aspects of React testing, from
basic concepts to advanced patterns. Each section provides practical examples
that you can adapt to your specific testing needs.

**[⬆ Back to Top](#table-of-contents)**
