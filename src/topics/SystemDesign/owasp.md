# **OWASP Best Practices with JS/HTML/React Examples 🔐**

## Input Validation and XSS Prevention

**HTML - Escaping User Input:**

```html
<!-- ❌ Bad - Direct insertion -->
<div id="output"></div>
<script>
  document.getElementById('output').innerHTML = userInput; // Dangerous!
</script>

<!-- ✅ Good - Safe text content -->
<div id="output"></div>
<script>
  document.getElementById('output').textContent = userInput; // Safe!
</script>
```

**React - Safe Rendering:**

```jsx
// ❌ Bad - dangerouslySetInnerHTML without sanitization
function UserComment({ comment }) {
  return <div dangerouslySetInnerHTML={{ __html: comment }} />;
}

// ✅ Good - React automatically escapes
function UserComment({ comment }) {
  return <div>{comment}</div>; // Safe by default! 🎉
}

// ✅ Better - Using DOMPurify for rich content
import DOMPurify from 'dompurify';

function RichComment({ htmlContent }) {
  const sanitized = DOMPurify.sanitize(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
}
```

## Authentication and Session Management

**JavaScript - Secure Cookie Handling:**

```javascript
// ✅ Setting secure cookies
document.cookie =
  'sessionId=abc123; Secure; HttpOnly; SameSite=Strict; Max-Age=1800';

// ✅ JWT handling in React
const LoginComponent = () => {
  const [token, setToken] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      // Store token securely (consider httpOnly cookies instead)
      localStorage.setItem('token', data.token); // ⚠️ Better in httpOnly cookie
      setToken(data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return <form onSubmit={handleLogin}>{/* Login form */} 🔐</form>;
};
```

## CSRF Protection

**React - CSRF Token Implementation:**

```jsx
// ✅ CSRF protection in forms
function SecureForm() {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Get CSRF token from server
    fetch('/api/csrf-token')
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.token));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('/api/sensitive-action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken, // 🛡️ Include CSRF token
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="csrf_token" value={csrfToken} />
      {/* Form fields */} 📝
    </form>
  );
}
```

## Content Security Policy (CSP)

**HTML - CSP Headers:**

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- ✅ Strict CSP -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; 
                 script-src 'self' 'unsafe-inline'; 
                 style-src 'self' 'unsafe-inline';
                 img-src 'self' data: https:;
                 connect-src 'self';"
    />

    <!-- ✅ Additional security headers -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta http-equiv="X-Frame-Options" content="DENY" />
    <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
  </head>
  <body>
    <!-- Your content -->
    🎯
  </body>
</html>
```

## Secure File Upload

**React - File Upload Component:**

```jsx
// ✅ Secure file upload
function SecureFileUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  const validateFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('❌ Invalid file type. Only JPG, PNG, GIF allowed.');
      return false;
    }

    if (file.size > MAX_SIZE) {
      setError('❌ File too large. Max 5MB allowed.');
      return false;
    }

    setError('');
    return true;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`, // 🔑 Auth required
        },
      });

      if (response.ok) {
        alert('✅ File uploaded successfully!');
      }
    } catch (error) {
      setError('❌ Upload failed. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png,.gif" // 🎯 Client-side hint
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleUpload} disabled={!file}>
        Upload 📤
      </button>
    </div>
  );
}
```

## Rate Limiting (Client-side)

**JavaScript - Client-side Rate Limiting:**

```javascript
// ✅ Debounced API calls
class RateLimiter {
  constructor(maxRequests = 5, timeWindow = 60000) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindow;
    this.requests = [];
  }

  canMakeRequest() {
    const now = Date.now();
    this.requests = this.requests.filter(
      (time) => now - time < this.timeWindow
    );

    if (this.requests.length >= this.maxRequests) {
      return false; // ❌ Rate limit exceeded
    }

    this.requests.push(now);
    return true; // ✅ Request allowed
  }
}

// Usage in React
function ApiComponent() {
  const rateLimiter = new RateLimiter(5, 60000); // 5 requests per minute

  const makeApiCall = async () => {
    if (!rateLimiter.canMakeRequest()) {
      alert('⚠️ Too many requests. Please wait before trying again.');
      return;
    }

    try {
      const response = await fetch('/api/data');
      // Handle response 📊
    } catch (error) {
      console.error('API call failed:', error);
    }
  };

  return <button onClick={makeApiCall}>Fetch Data 🔄</button>;
}
```

## Secure Local Storage

**React - Secure Data Storage:**

```jsx
// ✅ Secure storage utilities
class SecureStorage {
  static setItem(key, value, expirationMinutes = 30) {
    const item = {
      value: value,
      expiry: Date.now() + expirationMinutes * 60 * 1000,
    };

    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error('Failed to store item:', error);
    }
  }

  static getItem(key) {
    try {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) return null;

      const item = JSON.parse(itemStr);

      if (Date.now() > item.expiry) {
        localStorage.removeItem(key); // 🗑️ Auto-cleanup expired items
        return null;
      }

      return item.value;
    } catch (error) {
      console.error('Failed to retrieve item:', error);
      return null;
    }
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }
}

// Usage
function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // ✅ Get user data with expiration
    const storedData = SecureStorage.getItem('userData');
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  const logout = () => {
    SecureStorage.removeItem('userData'); // 🧹 Clean logout
    SecureStorage.removeItem('sessionToken');
    // Redirect to login
  };

  return (
    <div>
      <h1>Welcome {userData?.name}! 👋</h1>
      <button onClick={logout}>Logout 🚪</button>
    </div>
  );
}
```

## Error Handling

**React - Secure Error Boundaries:**

```jsx
// ✅ Secure error boundary
class SecureErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // ✅ Log error securely (no sensitive data)
    console.error('Application error:', {
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });

    // Send to error reporting service (sanitized)
    // this.reportError(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>🚨 Something went wrong</h2>
          <p>We're sorry for the inconvenience. Please try again later.</p>
          <button onClick={() => window.location.reload()}>
            Refresh Page 🔄
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <SecureErrorBoundary>
      <Router>
        <Routes>{/* Your routes */} 🛣️</Routes>
      </Router>
    </SecureErrorBoundary>
  );
}
```

## Input Sanitization Hook

**React - Custom Security Hook:**

```jsx
// ✅ Custom hook for input sanitization
function useSanitizedInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const sanitize = (input) => {
    return input
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  };

  const setSanitizedValue = (newValue) => {
    const sanitized = sanitize(newValue);
    setValue(sanitized);
  };

  return [value, setSanitizedValue];
}

// Usage
function CommentForm() {
  const [comment, setComment] = useSanitizedInput('');
  const [name, setName] = useSanitizedInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit sanitized data ✨
    console.log({ name, comment });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name 👤"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your comment 💬"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit 📝</button>
    </form>
  );
}
```

These examples provide practical, client-side security implementations that
align with OWASP best practices! 🎯✨

**[⬆ Back to Top](#table-of-contents)**
