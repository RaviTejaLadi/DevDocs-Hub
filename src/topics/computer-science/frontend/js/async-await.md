# JavaScript Async/Await - Complete Guide

Async/await is JavaScript's way of making asynchronous code look and behave like
synchronous code. It's built on top of Promises but makes them much easier to
read and write.

## The Problem: Callback Hell & Promise Chains

**Before async/await, we had messy code:**

```javascript
// Callback Hell 😵
getUserData(userId, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      displayUserProfile(user, posts, comments);
    });
  });
});

// Promise Chains 😐
getUserData(userId)
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => displayUserProfile(user, posts, comments))
  .catch((error) => console.error(error));
```

**With async/await 😍:**

```javascript
async function loadUserProfile(userId) {
  try {
    const user = await getUserData(userId);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    displayUserProfile(user, posts, comments);
  } catch (error) {
    console.error(error);
  }
}
```

## Understanding `async` Functions

**The `async` keyword transforms a function to return a Promise automatically.**

```javascript
// Regular function
function regularFunction() {
  return 'Hello';
}

// Async function - automatically wraps return value in a Promise
async function asyncFunction() {
  return 'Hello'; // This becomes Promise.resolve("Hello")
}

// Both of these work the same way:
asyncFunction().then((result) => console.log(result)); // "Hello"
```

**Key points about `async` functions:**

- Always return a Promise
- If you return a value, it's wrapped in `Promise.resolve()`
- If you throw an error, it becomes `Promise.reject()`

```javascript
async function examples() {
  return 42; // Returns Promise.resolve(42)
  throw new Error(); // Returns Promise.reject(Error)
}
```

## Understanding `await`

**The `await` keyword pauses execution until a Promise resolves.**

```javascript
async function fetchUserData() {
  console.log('Starting fetch...');

  const response = await fetch('/api/user'); // Waits here
  console.log('Got response!');

  const userData = await response.json(); // Waits here too
  console.log('Parsed JSON!');

  return userData;
}
```

**Important `await` rules:**

- Can only be used inside `async` functions
- Pauses the function execution (but doesn't block other code)
- Unwraps the Promise value
- Throws an error if the Promise rejects

## Error Handling: try/catch

**Async/await makes error handling intuitive with try/catch:**

```javascript
async function robustDataFetch() {
  try {
    const response = await fetch('/api/data');

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (networkError) {
    console.error('Network request failed:', networkError);
    throw networkError; // Re-throw if you want caller to handle it

  } catch (parseError) {
    console.error('JSON parsing failed:', parseError);
    return null; // Or provide a default value
  }
}

// Usage
async function useData() {
  try {
    const data = await robustDataFetch();
    console.log('Data received:', data);
  } catch (error) {
    console.error('Could not get data:', error);
  }
}
```

## Common Patterns & Examples

### 1. Sequential vs Parallel Execution

**Sequential (one after another):**

```javascript
async function sequential() {
  console.time('sequential');

  const user = await fetchUser(); // Wait 1 second
  const posts = await fetchPosts(); // Wait another 1 second
  const comments = await fetchComments(); // Wait another 1 second

  console.timeEnd('sequential'); // ~3 seconds total
  return { user, posts, comments };
}
```

**Parallel (all at once):**

```javascript
async function parallel() {
  console.time('parallel');

  // Start all requests simultaneously
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  const commentsPromise = fetchComments();

  // Wait for all to complete
  const user = await userPromise; // ~1 second total
  const posts = await postsPromise; // (already done)
  const comments = await commentsPromise; // (already done)

  console.timeEnd('parallel'); // ~1 second total
  return { user, posts, comments };
}

// Even better with Promise.all:
async function parallelBetter() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments(),
  ]);

  return { user, posts, comments };
}
```

### 2. Conditional Async Operations

```javascript
async function smartDataLoader(userId, options = {}) {
  const user = await fetchUser(userId);

  let posts = [];
  if (options.includePosts) {
    posts = await fetchUserPosts(userId);
  }

  let friends = [];
  if (user.privacy === 'public' && options.includeFriends) {
    friends = await fetchUserFriends(userId);
  }

  return { user, posts, friends };
}

// Usage
const publicProfile = await smartDataLoader('123', {
  includePosts: true,
  includeFriends: true,
});
```

### 3. Retry Pattern

```javascript
async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempt ${attempt}/${maxRetries}`);
      const response = await fetch(url);

      if (response.ok) {
        return await response.json();
      }

      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      console.log(`Attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        throw new Error(
          `Failed after ${maxRetries} attempts: ${error.message}`
        );
      }

      // Wait before retrying (exponential backoff)
      await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
    }
  }
}

// Usage
try {
  const data = await fetchWithRetry('/api/unreliable-endpoint');
  console.log('Success!', data);
} catch (error) {
  console.error('All retries failed:', error);
}
```

### 4. Processing Arrays with Async/Await

**Processing items one by one (sequential):**

```javascript
async function processUsersSequentially(userIds) {
  const results = [];

  for (const userId of userIds) {
    const userData = await fetchUser(userId);
    const processedData = await processUser(userData);
    results.push(processedData);
  }

  return results;
}
```

**Processing all items at once (parallel):**

```javascript
async function processUsersParallel(userIds) {
  const promises = userIds.map(async (userId) => {
    const userData = await fetchUser(userId);
    return await processUser(userData);
  });

  return await Promise.all(promises);
}
```

**Processing with concurrency limit:**

```javascript
async function processUsersBatched(userIds, batchSize = 3) {
  const results = [];

  for (let i = 0; i < userIds.length; i += batchSize) {
    const batch = userIds.slice(i, i + batchSize);
    const batchPromises = batch.map((userId) =>
      fetchUser(userId).then(processUser)
    );

    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);

    console.log(`Processed batch ${Math.floor(i / batchSize) + 1}`);
  }

  return results;
}
```

## Real-World Examples

### 1. API Data Fetching with Loading States

```javascript
class DataService {
  constructor() {
    this.loading = false;
    this.cache = new Map();
  }

  async fetchUserProfile(userId) {
    // Check cache first
    if (this.cache.has(userId)) {
      return this.cache.get(userId);
    }

    this.loading = true;
    updateUI({ loading: true });

    try {
      // Fetch basic user info
      const user = await this.fetchUser(userId);

      // Fetch additional data in parallel
      const [posts, followers, following] = await Promise.all([
        this.fetchUserPosts(userId),
        this.fetchUserFollowers(userId),
        this.fetchUserFollowing(userId),
      ]);

      const profile = { user, posts, followers, following };

      // Cache the result
      this.cache.set(userId, profile);

      return profile;
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      throw error;
    } finally {
      this.loading = false;
      updateUI({ loading: false });
    }
  }

  async fetchUser(userId) {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
  }

  async fetchUserPosts(userId) {
    const response = await fetch(`/api/users/${userId}/posts`);
    return response.ok ? response.json() : [];
  }

  async fetchUserFollowers(userId) {
    const response = await fetch(`/api/users/${userId}/followers`);
    return response.ok ? response.json() : [];
  }

  async fetchUserFollowing(userId) {
    const response = await fetch(`/api/users/${userId}/following`);
    return response.ok ? response.json() : [];
  }
}

// Usage
const dataService = new DataService();

async function displayProfile(userId) {
  try {
    const profile = await dataService.fetchUserProfile(userId);
    renderProfile(profile);
  } catch (error) {
    showError('Could not load user profile. Please try again.');
  }
}
```

### 2. File Upload with Progress

```javascript
async function uploadFileWithProgress(file, onProgress) {
  const formData = new FormData();
  formData.append('file', file);

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        onProgress(Math.round(progress));
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(`Upload failed: ${xhr.statusText}`));
      }
    };

    xhr.onerror = () => reject(new Error('Network error'));

    xhr.open('POST', '/api/upload');
    xhr.send(formData);
  });
}

async function handleFileUpload(file) {
  const progressBar = document.getElementById('progress');
  const statusDiv = document.getElementById('status');

  try {
    statusDiv.textContent = 'Uploading...';

    const result = await uploadFileWithProgress(file, (progress) => {
      progressBar.style.width = `${progress}%`;
      progressBar.textContent = `${progress}%`;
    });

    statusDiv.textContent = 'Upload successful!';
    console.log('File uploaded:', result);
  } catch (error) {
    statusDiv.textContent = `Upload failed: ${error.message}`;
    console.error('Upload error:', error);
  }
}
```

### 3. Database Operations with Transactions

```javascript
class UserService {
  async createUserWithProfile(userData, profileData) {
    const transaction = await db.beginTransaction();

    try {
      // Create user record
      const user = await this.createUser(userData, transaction);

      // Create profile record
      const profile = await this.createProfile(
        {
          ...profileData,
          userId: user.id,
        },
        transaction
      );

      // Create default settings
      const settings = await this.createDefaultSettings(user.id, transaction);

      // Send welcome email
      await this.sendWelcomeEmail(user.email);

      // Commit transaction
      await transaction.commit();

      return { user, profile, settings };
    } catch (error) {
      // Rollback transaction on any error
      await transaction.rollback();
      console.error('User creation failed:', error);
      throw error;
    }
  }

  async createUser(userData, transaction) {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const result = await transaction.execute(query, [
      userData.name,
      userData.email,
      await this.hashPassword(userData.password),
    ]);

    return { id: result.insertId, ...userData };
  }

  async createProfile(profileData, transaction) {
    const query =
      'INSERT INTO profiles (user_id, bio, avatar) VALUES (?, ?, ?)';
    await transaction.execute(query, [
      profileData.userId,
      profileData.bio,
      profileData.avatar,
    ]);

    return profileData;
  }

  async createDefaultSettings(userId, transaction) {
    const defaultSettings = {
      userId,
      theme: 'light',
      notifications: true,
      privacy: 'public',
    };

    const query =
      'INSERT INTO settings (user_id, theme, notifications, privacy) VALUES (?, ?, ?, ?)';
    await transaction.execute(query, Object.values(defaultSettings));

    return defaultSettings;
  }

  async sendWelcomeEmail(email) {
    const emailService = new EmailService();
    return await emailService.send({
      to: email,
      subject: 'Welcome to our platform!',
      template: 'welcome',
    });
  }

  async hashPassword(password) {
    const bcrypt = require('bcrypt');
    return await bcrypt.hash(password, 10);
  }
}
```

## Common Pitfalls & How to Avoid Them

### 1. Forgetting to await

```javascript
// ❌ Wrong - returns a Promise, not the data
async function badExample() {
  const data = fetchData(); // Missing await!
  console.log(data); // Logs: Promise { <pending> }
  return data;
}

// ✅ Correct
async function goodExample() {
  const data = await fetchData();
  console.log(data); // Logs: actual data
  return data;
}
```

### 2. Not handling errors properly

```javascript
// ❌ Wrong - errors will crash the app
async function badErrorHandling() {
  const data = await fetchData(); // What if this fails?
  return data;
}

// ✅ Correct
async function goodErrorHandling() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return null; // Or throw, depending on your needs
  }
}
```

### 3. Using async/await when you don't need to

```javascript
// ❌ Unnecessary async/await
async function unnecessaryAsync() {
  return await Promise.resolve('hello');
}

// ✅ Just return the Promise
function simpler() {
  return Promise.resolve('hello');
}
```

### 4. Sequential when you meant parallel

```javascript
// ❌ Slow - runs sequentially (3 seconds total)
async function slow() {
  const a = await fetchA(); // 1 second
  const b = await fetchB(); // 1 second
  const c = await fetchC(); // 1 second
  return [a, b, c];
}

// ✅ Fast - runs in parallel (1 second total)
async function fast() {
  const [a, b, c] = await Promise.all([
    fetchA(), // All start simultaneously
    fetchB(),
    fetchC(),
  ]);
  return [a, b, c];
}
```

## Memory Tricks

- **`async`** = "This function returns a Promise"
- **`await`** = "Wait here until this Promise resolves"
- **`try/catch`** = "Handle errors the normal way"
- **Sequential** = One thing after another (slower)
- **Parallel** = All things at once (faster)

Async/await makes asynchronous JavaScript feel synchronous while keeping all the
benefits of non-blocking code. It's the modern way to handle Promises and makes
your code much more readable and maintainable!
