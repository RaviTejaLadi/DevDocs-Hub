# 🔍 Chrome DevTools

Chrome DevTools helps developers inspect, debug, and optimize web applications
directly from the browser.

## 🚀 Opening DevTools

### Keyboard Shortcuts

| Action          | Windows/Linux    | Mac              |
| --------------- | ---------------- | ---------------- |
| Open DevTools   | F12              | Cmd + Option + I |
| Inspect Element | Ctrl + Shift + C | Cmd + Shift + C  |

---

## 🧱 Elements Panel

The Elements tab allows you to inspect and modify HTML and CSS.

### Common Tasks

- Inspect DOM structure
- Edit HTML live
- Add/remove classes
- Test CSS changes
- Check computed styles

### Example

Inspect:

<div class="card">
  Hello World
</div>

You can edit text or styles instantly without changing source code.

---

## 🎨 CSS Debugging

### View Applied Styles

Select an element and check:

- Styles
- Computed
- Layout

Useful for finding:

- CSS overrides
- Specificity issues
- Missing styles

### Force States

Right-click element → Force State

Simulate:

- :hover
- :focus
- :active

---

## 📱 Responsive Design Mode

Click:

Toggle Device Toolbar

Shortcut:

Ctrl + Shift + M

Test:

- Mobile devices
- Tablets
- Custom screen sizes

Useful for responsive UI testing.

---

## ⚡ Console Panel

The Console is used for:

- Debugging JavaScript
- Running commands
- Viewing logs

### Examples

console.log("Hello");

console.table(users);

console.error("Something went wrong");

---

## 🐛 Debugging JavaScript

### Add Breakpoints

1. Open Sources tab
2. Select JS file
3. Click line number

Execution pauses at breakpoint.

### Controls

| Action    | Shortcut    |
| --------- | ----------- |
| Resume    | F8          |
| Step Over | F10         |
| Step Into | F11         |
| Step Out  | Shift + F11 |

---

## 📦 Network Panel

One of the most important tabs.

Used for:

- API debugging
- Performance analysis
- Request inspection

### View

- Request URL
- Headers
- Payload
- Response
- Timing

---

## 🔥 API Debugging

Filter:

Fetch/XHR

Inspect:

GET /api/users

Check:

- Request body
- Response data
- Status code
- Response headers

Common status codes:

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 404 Not Found
- 500 Server Error

---

## ⏱️ Performance Tab

Record page activity.

Useful for:

- Slow rendering
- Re-renders
- Layout shifts
- CPU bottlenecks

### Workflow

1. Open Performance
2. Click Record
3. Interact with page
4. Stop recording
5. Analyze timeline

---

## 🧠 Memory Tab

Used for finding memory leaks.

Common causes:

- Unremoved event listeners
- Large cached objects
- Detached DOM nodes

Tools:

- Heap Snapshot
- Allocation Timeline

---

## 🗄️ Application Tab

Inspect browser storage.

### Local Storage

View:

localStorage.getItem("token");

### Session Storage

Debug temporary session data.

### Cookies

Inspect authentication cookies.

---

## 🔐 Security Tab

Check:

- HTTPS configuration
- SSL certificate
- Mixed content issues

Useful before production deployment.

---

## 🌐 Lighthouse

Run audits for:

- Performance
- Accessibility
- SEO
- Best Practices

### Generate Report

1. Open Lighthouse
2. Select categories
3. Run Audit

Provides optimization suggestions.

---

## ⚛️ React Debugging

Install:

React Developer Tools

Features:

- Component tree inspection
- Props inspection
- State inspection
- Context inspection

Useful for React applications.

---

## 🔍 Search Across Files

Press:

Ctrl + Shift + F

Search:

- Variables
- Functions
- API endpoints

Inside loaded source files.

---

## 🚨 Common Debugging Workflow

1. Open Network tab
2. Reproduce issue
3. Verify API response
4. Check Console errors
5. Inspect DOM changes
6. Debug JavaScript
7. Analyze performance

This workflow solves most frontend bugs quickly.

---

## ⭐ Pro Tips

- Preserve logs during page refresh
- Disable cache while debugging
- Use console.table() for arrays
- Use breakpoints instead of excessive console.log()
- Filter network requests by Fetch/XHR
- Save performance recordings for analysis

Mastering DevTools can dramatically reduce debugging time and improve
application performance.
