# Promise Combinators

Promise combinators are utility methods that help you work with multiple
promises at once. Think of them as different strategies for handling groups of
promises.

## Promise.all()

**"All or nothing"** - Waits for ALL promises to succeed, fails if ANY promise
fails.

```javascript
const promise1 = fetch('/api/user');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then((responses) => {
    // All 3 requests succeeded
    console.log('All data loaded!', responses);
  })
  .catch((error) => {
    // If ANY request failed, this runs
    console.log('Something went wrong:', error);
  });
```

**Memory trick**: "ALL students must pass the exam, or the whole class fails"

## Promise.allSettled()

**"Tell me everything"** - Waits for ALL promises to complete (succeed or fail),
then tells you what happened to each one.

```javascript
const promises = [
  fetch('/api/user'),
  fetch('/api/posts'),
  fetch('/invalid-url'), // This will fail
];

Promise.allSettled(promises).then((results) => {
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Promise ${index} succeeded:`, result.value);
    } else {
      console.log(`Promise ${index} failed:`, result.reason);
    }
  });
});
```

**Memory trick**: "Take attendance - tell me who showed up AND who didn't"

## Promise.race()

**"First one wins"** - Returns as soon as the FIRST promise settles (succeeds or
fails).

```javascript
const slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve('slow'), 3000)
);
const fastPromise = new Promise((resolve) =>
  setTimeout(() => resolve('fast'), 1000)
);

Promise.race([slowPromise, fastPromise]).then((result) => {
  console.log(result); // "fast" - because it finished first
});
```

**Memory trick**: "Sprint race - whoever crosses the finish line first wins"

## Promise.any()

**"First success wins"** - Returns as soon as the FIRST promise SUCCEEDS.
Ignores failures unless ALL fail.

```javascript
const promises = [
  fetch('/unreliable-server-1'), // Might fail
  fetch('/unreliable-server-2'), // Might fail
  fetch('/reliable-server'), // Usually works
];

Promise.any(promises)
  .then((response) => {
    console.log('Got a successful response!', response);
  })
  .catch((error) => {
    console.log('All servers failed:', error);
  });
```

**Memory trick**: "Try multiple doors - celebrate when ANY door opens"

## Quick Comparison Table

| Combinator             | Resolves when  | Rejects when  | Use case                            |
| ---------------------- | -------------- | ------------- | ----------------------------------- |
| `Promise.all()`        | ALL succeed    | ANY fails     | Need all data before proceeding     |
| `Promise.allSettled()` | ALL complete   | Never rejects | Want to know outcome of each        |
| `Promise.race()`       | FIRST settles  | FIRST fails   | Timeout scenarios, fastest response |
| `Promise.any()`        | FIRST succeeds | ALL fail      | Fallback servers, redundancy        |

## Real-world Examples

**Loading a dashboard (use `Promise.all`)**:

```javascript
// Need user info, notifications, AND settings before showing dashboard
Promise.all([getUserInfo(), getNotifications(), getSettings()]).then(
  ([user, notifications, settings]) => {
    renderDashboard(user, notifications, settings);
  }
);
```

**Trying multiple CDNs (use `Promise.any`)**:

```javascript
// Try multiple CDNs, use whichever responds first successfully
Promise.any([
  fetch('https://cdn1.example.com/library.js'),
  fetch('https://cdn2.example.com/library.js'),
  fetch('https://cdn3.example.com/library.js'),
])
  .then((response) => response.text())
  .then((script) => loadScript(script));
```

**Adding a timeout (use `Promise.race`)**:

```javascript
const dataPromise = fetch('/api/slow-endpoint');
const timeoutPromise = new Promise((_, reject) =>
  setTimeout(() => reject(new Error('Timeout')), 5000)
);

Promise.race([dataPromise, timeoutPromise])
  .then((data) => console.log('Got data in time!'))
  .catch((error) => console.log('Too slow or failed:', error));
```

The key is choosing the right combinator based on whether you need all results,
just the first success, or want to know about every outcome.
