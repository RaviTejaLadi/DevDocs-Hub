# React-Router-Dom Cheat Sheet

## Table of Contents

1. [Installation](#installation)
2. [Basic Components](#basic-components)
3. [Navigation](#navigation)
4. [Route Configuration](#route-configuration)
5. [Dynamic Routing](#dynamic-routing)
6. [Nested Routes](#nested-routes)
7. [Navigation Hooks](#navigation-hooks)
8. [Redirects & 404 Handling](#redirects--404-handling)
9. [Programmatic Navigation](#programmatic-navigation)

---

## Installation

| Command                        | Description                       |
| ------------------------------ | --------------------------------- |
| `npm install react-router-dom` | Install React Router for web apps |

---

## Basic Components

| Component         | Description                                 | Example                                                                                 |
| ----------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| `<BrowserRouter>` | Wrapper for routing in React apps           | `<BrowserRouter><App /></BrowserRouter>`                                                |
| `<Routes>`        | Container for route definitions (v6+)       | `<Routes><Route path="/" element={<Home />} /></Routes>`                                |
| `<Route>`         | Defines a route                             | `<Route path="/about" element={<About />} />`                                           |
| `<Link>`          | Navigation link (prevents full page reload) | `<Link to="/about">About</Link>`                                                        |
| `<NavLink>`       | Link with active styling                    | `<NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>` |

---

## Navigation

| Component/Prop | Description                         | Example                                    |
| -------------- | ----------------------------------- | ------------------------------------------ |
| `to`           | Specifies the path to navigate      | `<Link to="/contact">Contact</Link>`       |
| `replace`      | Replaces history instead of pushing | `<Link to="/" replace />`                  |
| `state`        | Pass state with navigation          | `<Link to="/" state={{ from: "home" }} />` |

---

## Route Configuration

| Prop      | Description                      | Example                                       |
| --------- | -------------------------------- | --------------------------------------------- |
| `path`    | URL path to match                | `<Route path="/users" element={<Users />} />` |
| `element` | Component to render              | `<Route path="/" element={<Home />} />`       |
| `index`   | Marks a route as index (default) | `<Route index element={<Home />} />`          |

---

## Dynamic Routing

| Feature        | Description             | Example                                                 |
| -------------- | ----------------------- | ------------------------------------------------------- |
| URL Parameters | Extract params from URL | `<Route path="/users/:id" element={<UserProfile />} />` |
| `useParams()`  | Access URL parameters   | `const { id } = useParams();`                           |
| Wildcard (`*`) | Catch-all route         | `<Route path="/docs/*" element={<Docs />} />`           |

---

## Nested Routes

| Feature        | Description              | Example                                          |
| -------------- | ------------------------ | ------------------------------------------------ |
| `<Outlet>`     | Renders child routes     | `<Outlet />` inside parent component             |
| Relative paths | Paths relative to parent | `<Route path="profile" element={<Profile />} />` |

---

## Navigation Hooks

| Hook                | Description              | Example                                              |
| ------------------- | ------------------------ | ---------------------------------------------------- |
| `useNavigate()`     | Programmatic navigation  | `const navigate = useNavigate(); navigate("/home");` |
| `useLocation()`     | Access current location  | `const location = useLocation();`                    |
| `useParams()`       | Access URL parameters    | `const { id } = useParams();`                        |
| `useSearchParams()` | Read/update query params | `const [params, setParams] = useSearchParams();`     |

---

## Redirects & 404 Handling

| Component/Pattern | Description               | Example                                                  |
| ----------------- | ------------------------- | -------------------------------------------------------- |
| `<Navigate>`      | Redirect to another route | `<Route path="/old" element={<Navigate to="/new" />} />` |
| No-match route    | 404 handling              | `<Route path="*" element={<NotFound />} />`              |

---

## Programmatic Navigation

| Method           | Description           | Example                   |
| ---------------- | --------------------- | ------------------------- |
| `navigate(path)` | Navigate to a path    | `navigate("/dashboard");` |
| `navigate(-1)`   | Go back in history    | `navigate(-1);`           |
| `navigate(1)`    | Go forward in history | `navigate(1);`            |

---

This cheat sheet covers **React Router v6+**. Let me know if you'd like any
additions or modifications! 🚀

**[⬆ Back to Top](#table-of-contents)**
