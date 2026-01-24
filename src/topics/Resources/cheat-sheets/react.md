# React Cheat Sheet

## Table of Contents

- [Basics](#basics)
- [Hooks](#hooks)
- [Lifecycle (Class Components)](#lifecycle-class-components)
- [Event Handling](#event-handling)
- [Conditional Rendering](#conditional-rendering)
- [Lists & Keys](#lists--keys)
- [Forms](#forms)
- [Context API](#context-api)
- [Refs](#refs)
- [Performance](#performance)
- [Error Handling](#error-handling)
- [Type Checking (PropTypes)](#type-checking-proptypes)
- [React Router (v6)](#react-router-v6)
- [Styling](#styling)
- [Testing](#testing)
- [Advanced Patterns](#advanced-patterns)

## Basics

| Concept             | Syntax/Example                                                                              | Description                                   |
| ------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Component**       | `function MyComponent() { return <div>Hello</div>; }`                                       | Basic function component                      |
| **Class Component** | `class MyComponent extends React.Component { render() { return <div>Hello</div> } }`        | Legacy class component                        |
| **JSX**             | `<h1 className="title">Hello</h1>`                                                          | HTML-like syntax that compiles to JavaScript  |
| **Fragment**        | `<><div>A</div><div>B</div></>` or `<React.Fragment>...</React.Fragment>`                   | Group elements without adding extra DOM nodes |
| **Props**           | `function Greet({name}) { return <h1>Hello {name}</h1> }`                                   | Passing data to components                    |
| **Children Prop**   | `<Box>Child content</Box>` then `function Box({children}) { return <div>{children}</div> }` | Access content between component tags         |

## Hooks

| Hook                    | Syntax                                                                     | Description                                           |
| ----------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------- |
| **useState**            | `const [state, setState] = useState(initialValue)`                         | Manage local component state                          |
| **useEffect**           | `useEffect(() => { /* effect */ return () => { /* cleanup */ } }, [deps])` | Side effects in function components                   |
| **useContext**          | `const value = useContext(MyContext)`                                      | Access context without nesting                        |
| **useReducer**          | `const [state, dispatch] = useReducer(reducer, initialState)`              | Alternative to useState for complex state             |
| **useCallback**         | `const memoizedFn = useCallback(fn, deps)`                                 | Memoize functions to prevent unnecessary re-renders   |
| **useMemo**             | `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])` | Memoize expensive calculations                        |
| **useRef**              | `const ref = useRef(initialValue)`                                         | Mutable ref object that persists between renders      |
| **useImperativeHandle** | `useImperativeHandle(ref, () => ({ focus: () => {...} }))`                 | Customize instance value exposed to parent components |
| **useLayoutEffect**     | Same as useEffect but fires synchronously after DOM mutations              | For DOM measurements before paint                     |
| **useDebugValue**       | `useDebugValue(value)`                                                     | Display custom labels in React DevTools               |

## Lifecycle (Class Components)

| Method                                          | Description                               |
| ----------------------------------------------- | ----------------------------------------- |
| `componentDidMount()`                           | Runs after component is rendered to DOM   |
| `componentDidUpdate(prevProps, prevState)`      | Runs after component updates              |
| `componentWillUnmount()`                        | Runs before component is removed from DOM |
| `shouldComponentUpdate(nextProps, nextState)`   | Return false to prevent re-render         |
| `static getDerivedStateFromProps(props, state)` | Update state based on props changes       |
| `getSnapshotBeforeUpdate(prevProps, prevState)` | Capture DOM info before update            |

## Event Handling

| Event               | Example                                           | Description                              |
| ------------------- | ------------------------------------------------- | ---------------------------------------- |
| **Click**           | `<button onClick={handleClick}>`                  | Handle click events                      |
| **Change**          | `<input onChange={handleChange}>`                 | Handle form input changes                |
| **Submit**          | `<form onSubmit={handleSubmit}>`                  | Handle form submission                   |
| **Synthetic Event** | `function handleClick(e) { e.preventDefault(); }` | React's cross-browser wrapper            |
| **Event Pooling**   | `e.persist()`                                     | Needed if accessing event asynchronously |

## Conditional Rendering

| Technique        | Example                                                          | Description                  |
| ---------------- | ---------------------------------------------------------------- | ---------------------------- |
| **If Statement** | `{condition && <Component />}`                                   | Short-circuit evaluation     |
| **Ternary**      | `{condition ? <TrueComp /> : <FalseComp />}`                     | If-else in one line          |
| **Variables**    | `let comp = condition ? <A /> : <B />; return <div>{comp}</div>` | Store elements in variables  |
| **IIFE**         | `{(() => { if (condition) return <Component /> })()}`            | Immediately-invoked function |

## Lists & Keys

| Concept          | Example                                                   | Description                              |
| ---------------- | --------------------------------------------------------- | ---------------------------------------- |
| **map()**        | `{items.map(item => <li key={item.id}>{item.text}</li>)}` | Transform array to JSX elements          |
| **Key Prop**     | `<li key={uniqueId}>`                                     | Helps React identify which items changed |
| **Index as Key** | `key={index}` (only if no stable IDs)                     | Last resort for keys                     |

## Forms

| Technique        | Example                                                                        | Description                      |
| ---------------- | ------------------------------------------------------------------------------ | -------------------------------- |
| **Controlled**   | `<input value={value} onChange={handleChange} />`                              | Form data handled by React state |
| **Uncontrolled** | `<input defaultValue="initial" ref={inputRef} />`                              | Form data handled by DOM         |
| **Text Input**   | `<input type="text" value={value} onChange={handleChange} />`                  | Single-line text input           |
| **Textarea**     | `<textarea value={value} onChange={handleChange} />`                           | Multi-line text input            |
| **Select**       | `<select value={value} onChange={handleChange}>`                               | Dropdown selection               |
| **Checkbox**     | `<input type="checkbox" checked={checked} onChange={handleChange} />`          | Toggle input                     |
| **Radio**        | `<input type="radio" checked={option === selected} onChange={handleChange} />` | Single selection from options    |
| **File Input**   | `<input type="file" onChange={handleFileChange} />`                            | File upload control              |

## Context API

| Concept             | Example                                                                  | Description                   |
| ------------------- | ------------------------------------------------------------------------ | ----------------------------- |
| **createContext**   | `const MyContext = React.createContext(defaultValue)`                    | Create a context object       |
| **Provider**        | `<MyContext.Provider value={someValue}>`                                 | Provides value to descendants |
| **Consumer**        | `<MyContext.Consumer>{value => <div>{value}</div>}</MyContext.Consumer>` | Legacy way to consume context |
| **useContext Hook** | `const value = useContext(MyContext)`                                    | Modern way to consume context |

## Refs

| Technique           | Example                                                                                 | Description                           |
| ------------------- | --------------------------------------------------------------------------------------- | ------------------------------------- |
| **createRef**       | `const ref = React.createRef(); <div ref={ref}>`                                        | Legacy ref creation                   |
| **useRef Hook**     | `const ref = useRef(); <div ref={ref}>`                                                 | Modern ref creation                   |
| **Callback Ref**    | `<div ref={node => this.node = node}>`                                                  | Function-based ref (class components) |
| **Forwarding Refs** | `const FancyButton = React.forwardRef((props, ref) => <button ref={ref} {...props} />)` | Pass ref through to child             |

## Performance

| Technique         | Example                                                                 | Description                                        |
| ----------------- | ----------------------------------------------------------------------- | -------------------------------------------------- |
| **React.memo**    | `const MemoComp = React.memo(MyComp)`                                   | Memoize functional component                       |
| **PureComponent** | `class MyComp extends React.PureComponent`                              | Class component with shallow prop/state comparison |
| **useMemo**       | `const memoizedValue = useMemo(() => compute(a, b), [a, b])`            | Memoize expensive calculations                     |
| **useCallback**   | `const memoizedFn = useCallback(() => {...}, [deps])`                   | Memoize functions                                  |
| **Lazy Loading**  | `const OtherComp = React.lazy(() => import('./OtherComp'))`             | Code splitting                                     |
| **Suspense**      | `<React.Suspense fallback={<Spinner />}><OtherComp /></React.Suspense>` | Show fallback while waiting                        |

## Error Handling

| Technique          | Example                                                                                | Description                                 |
| ------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Error Boundary** | `class ErrorBoundary extends React.Component { componentDidCatch(error, info) {...} }` | Catch JavaScript errors in child components |
| **try/catch**      | `try { ... } catch (error) { ... }`                                                    | Regular JavaScript error handling           |

## Type Checking (PropTypes)

| Type            | Example                                                                    | Description                                  |
| --------------- | -------------------------------------------------------------------------- | -------------------------------------------- |
| **Basic**       | `MyComp.propTypes = { name: PropTypes.string }`                            | Validate prop types                          |
| **Required**    | `PropTypes.string.isRequired`                                              | Prop must be provided                        |
| **Array**       | `PropTypes.array`                                                          | Array of any type                            |
| **Array Of**    | `PropTypes.arrayOf(PropTypes.number)`                                      | Array of specific type                       |
| **Object**      | `PropTypes.object`                                                         | Plain object                                 |
| **Object Of**   | `PropTypes.objectOf(PropTypes.number)`                                     | Object with property values of specific type |
| **Shape**       | `PropTypes.shape({ color: PropTypes.string, fontSize: PropTypes.number })` | Object with specific shape                   |
| **Instance Of** | `PropTypes.instanceOf(Message)`                                            | Prop is instance of a class                  |
| **One Of**      | `PropTypes.oneOf(['News', 'Photos'])`                                      | Prop limited to specific values              |
| **One Of Type** | `PropTypes.oneOfType([PropTypes.string, PropTypes.number])`                | Prop can be one of several types             |

## React Router (v6)

| Concept             | Example                                                                                        | Description                    |
| ------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------ |
| **BrowserRouter**   | `<BrowserRouter><App /></BrowserRouter>`                                                       | Router component               |
| **Routes**          | `<Routes><Route path="/" element={<Home />} /></Routes>`                                       | Container for routes           |
| **Route**           | `<Route path="/about" element={<About />} />`                                                  | Individual route definition    |
| **Link**            | `<Link to="/about">About</Link>`                                                               | Navigation link                |
| **NavLink**         | `<NavLink to="/about" className={({ isActive }) => isActive ? "active" : "" }>About</NavLink>` | Link with active state         |
| **Navigate**        | `<Navigate to="/login" replace />`                                                             | Programmatic navigation        |
| **useNavigate**     | `const navigate = useNavigate(); navigate('/about')`                                           | Hook for navigation            |
| **useParams**       | `const { id } = useParams()`                                                                   | Access route parameters        |
| **useLocation**     | `const location = useLocation()`                                                               | Access current location object |
| **useSearchParams** | `const [searchParams, setSearchParams] = useSearchParams()`                                    | Access and modify query string |
| **Outlet**          | `<Outlet />`                                                                                   | Renders child route elements   |

## Styling

| Technique             | Example                                                                  | Description                      |
| --------------------- | ------------------------------------------------------------------------ | -------------------------------- |
| **Inline**            | `<div style={{ color: 'red', fontSize: 20 }}>`                           | Inline styles (object syntax)    |
| **CSS Classes**       | `<div className="my-class">`                                             | External CSS classes             |
| **CSS Modules**       | `import styles from './My.module.css'; <div className={styles.myClass}>` | Scoped CSS classes               |
| **Styled Components** | `const StyledDiv = styled.div`color: red;`; <StyledDiv>`                 | CSS-in-JS library                |
| **CSS-in-JS**         | Various libraries (Emotion, etc.)                                        | Write CSS directly in JavaScript |

## Testing

| Concept                   | Example                                                                          | Description                               |
| ------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| **Jest**                  | `test('renders correctly', () => { ... })`                                       | Testing framework                         |
| **React Testing Library** | `render(<MyComponent />); expect(screen.getByText('Hello')).toBeInTheDocument()` | DOM testing utilities                     |
| **User Event**            | `userEvent.click(button)`                                                        | Simulate user interactions                |
| **Snapshot Testing**      | `expect(container).toMatchSnapshot()`                                            | Compare rendered output to saved snapshot |

## Advanced Patterns

| Pattern                     | Example                                                        | Description                                                 |
| --------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------- |
| **Render Props**            | `<DataProvider render={data => <h1>Hello {data.name}</h1>} />` | Share code via prop as function                             |
| **Higher-Order Components** | `const EnhancedComp = withHOC(MyComp)`                         | Function that takes a component and returns a new component |
| **Compound Components**     | `<Menu><Menu.Item /></Menu>`                                   | Components that work together                               |
| **Custom Hooks**            | `function useCustomHook() { ... }`                             | Reusable hook logic                                         |
| **Portals**                 | `ReactDOM.createPortal(<Modal />, domNode)`                    | Render children outside DOM hierarchy                       |
| **Context with useReducer** | Combine useContext and useReducer                              | Global state management pattern                             |

This cheat sheet covers most React concepts up to version 18. For more detailed
information, always refer to the
[official React documentation](https://react.dev/).

**[⬆ Back to Top](#table-of-contents)**
