# JavaScript Polyfills for Technical Interviews

## 1. Array.prototype.map()

**Asked by:** Google, Amazon, Microsoft, Meta **Question:** Implement a polyfill
for Array.prototype.map()

```javascript
Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.map called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const O = Object(this);
  const len = parseInt(O.length) || 0;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in O) {
      result[i] = callback.call(thisArg, O[i], i, O);
    }
  }

  return result;
};
```

## 2. Array.prototype.filter()

**Asked by:** Netflix, Uber, Airbnb **Question:** Create a polyfill for
Array.prototype.filter()

```javascript
Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.filter called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const O = Object(this);
  const len = parseInt(O.length) || 0;
  const result = [];

  for (let i = 0; i < len; i++) {
    if (i in O) {
      if (callback.call(thisArg, O[i], i, O)) {
        result.push(O[i]);
      }
    }
  }

  return result;
};
```

## 3. Array.prototype.reduce()

**Asked by:** Google, Facebook, Amazon **Question:** Implement
Array.prototype.reduce() polyfill

```javascript
Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError('Array.prototype.reduce called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const O = Object(this);
  const len = parseInt(O.length) || 0;
  let k = 0;
  let accumulator;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    if (len === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    let kPresent = false;
    while (!kPresent && k < len) {
      kPresent = k in O;
      if (kPresent) {
        accumulator = O[k];
      }
      k++;
    }

    if (!kPresent) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
  }

  while (k < len) {
    if (k in O) {
      accumulator = callback(accumulator, O[k], k, O);
    }
    k++;
  }

  return accumulator;
};
```

## 4. Array.prototype.forEach()

**Asked by:** Microsoft, Apple, LinkedIn **Question:** Create a polyfill for
Array.prototype.forEach()

```javascript
Array.prototype.myForEach = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.forEach called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const O = Object(this);
  const len = parseInt(O.length) || 0;

  for (let i = 0; i < len; i++) {
    if (i in O) {
      callback.call(thisArg, O[i], i, O);
    }
  }
};
```

## 5. Function.prototype.bind()

**Asked by:** Google, Facebook, Twitter **Question:** Implement
Function.prototype.bind() polyfill

```javascript
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(
      'Function.prototype.bind - what is trying to be bound is not callable'
    );
  }

  const fn = this;
  const boundFunction = function (...newArgs) {
    return fn.apply(
      this instanceof boundFunction ? this : context,
      args.concat(newArgs)
    );
  };

  if (this.prototype) {
    boundFunction.prototype = Object.create(this.prototype);
  }

  return boundFunction;
};
```

## 6. Function.prototype.call()

**Asked by:** Amazon, Shopify, Stripe **Question:** Create a polyfill for
Function.prototype.call()

```javascript
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(
      'Function.prototype.call - what is trying to be called is not callable'
    );
  }

  context = context || globalThis;
  const fnSymbol = Symbol('fn');
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);
  delete context[fnSymbol];

  return result;
};
```

## 7. Function.prototype.apply()

**Asked by:** Netflix, Uber, Dropbox **Question:** Implement
Function.prototype.apply() polyfill

```javascript
Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    throw new TypeError(
      'Function.prototype.apply - what is trying to be applied is not callable'
    );
  }

  context = context || globalThis;
  args = args || [];

  const fnSymbol = Symbol('fn');
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);
  delete context[fnSymbol];

  return result;
};
```

## 8. Promise

**Asked by:** Google, Facebook, Amazon, Microsoft **Question:** Create a basic
Promise polyfill

```javascript
function MyPromise(executor) {
  this.state = 'pending';
  this.value = undefined;
  this.reason = undefined;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = (value) => {
    if (this.state === 'pending') {
      this.state = 'fulfilled';
      this.value = value;
      this.onFulfilledCallbacks.forEach((cb) => cb(value));
    }
  };

  const reject = (reason) => {
    if (this.state === 'pending') {
      this.state = 'rejected';
      this.reason = reason;
      this.onRejectedCallbacks.forEach((cb) => cb(reason));
    }
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  return new MyPromise((resolve, reject) => {
    if (this.state === 'fulfilled') {
      try {
        const result = onFulfilled ? onFulfilled(this.value) : this.value;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    } else if (this.state === 'rejected') {
      try {
        const result = onRejected ? onRejected(this.reason) : this.reason;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    } else {
      this.onFulfilledCallbacks.push((value) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });

      this.onRejectedCallbacks.push((reason) => {
        try {
          const result = onRejected ? onRejected(reason) : reason;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    }
  });
};
```

## 9. Object.create()

**Asked by:** Apple, Microsoft, LinkedIn **Question:** Implement Object.create()
polyfill

```javascript
Object.myCreate = function (proto, propertiesObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null');
  }

  function F() {}
  F.prototype = proto;
  const obj = new F();

  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }

  return obj;
};
```

## 10. Array.prototype.find()

**Asked by:** Airbnb, Spotify, Slack **Question:** Create a polyfill for
Array.prototype.find()

```javascript
Array.prototype.myFind = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.find called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const O = Object(this);
  const len = parseInt(O.length) || 0;

  for (let i = 0; i < len; i++) {
    if (i in O) {
      const value = O[i];
      if (callback.call(thisArg, value, i, O)) {
        return value;
      }
    }
  }

  return undefined;
};
```

## 11. Array.prototype.includes()

**Asked by:** Twitter, Pinterest, Medium **Question:** Implement
Array.prototype.includes() polyfill

```javascript
Array.prototype.myIncludes = function (searchElement, fromIndex) {
  if (this == null) {
    throw new TypeError('Array.prototype.includes called on null or undefined');
  }

  const O = Object(this);
  const len = parseInt(O.length) || 0;

  if (len === 0) return false;

  let n = parseInt(fromIndex) || 0;
  let k = n >= 0 ? n : Math.max(len + n, 0);

  while (k < len) {
    if (
      O[k] === searchElement ||
      (Number.isNaN(O[k]) && Number.isNaN(searchElement))
    ) {
      return true;
    }
    k++;
  }

  return false;
};
```

## 12. String.prototype.startsWith()

**Asked by:** Zoom, Salesforce, Adobe **Question:** Create a polyfill for
String.prototype.startsWith()

```javascript
String.prototype.myStartsWith = function (searchString, position) {
  if (this == null) {
    throw new TypeError(
      'String.prototype.startsWith called on null or undefined'
    );
  }

  const str = String(this);
  const pos = Math.max(0, Math.floor(position) || 0);

  return str.slice(pos, pos + searchString.length) === searchString;
};
```

## 13. String.prototype.endsWith()

**Asked by:** Atlassian, Shopify, Square **Question:** Implement
String.prototype.endsWith() polyfill

```javascript
String.prototype.myEndsWith = function (searchString, length) {
  if (this == null) {
    throw new TypeError(
      'String.prototype.endsWith called on null or undefined'
    );
  }

  const str = String(this);
  const len =
    length === undefined ? str.length : Math.max(0, Math.floor(length));
  const end = Math.min(len, str.length);
  const start = end - searchString.length;

  return start >= 0 && str.slice(start, end) === searchString;
};
```

## 14. Array.prototype.flat()

**Asked by:** Google, Uber, Lyft **Question:** Create a polyfill for
Array.prototype.flat()

```javascript
Array.prototype.myFlat = function (depth = 1) {
  if (this == null) {
    throw new TypeError('Array.prototype.flat called on null or undefined');
  }

  const flattenHelper = (arr, currentDepth) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && currentDepth > 0) {
        result.push(...flattenHelper(arr[i], currentDepth - 1));
      } else {
        result.push(arr[i]);
      }
    }

    return result;
  };

  return flattenHelper(this, depth);
};
```

## 15. Array.from()

**Asked by:** Netflix, Twitch, GitHub **Question:** Implement Array.from()
polyfill

```javascript
Array.myFrom = function (arrayLike, mapFn, thisArg) {
  if (arrayLike == null) {
    throw new TypeError('Array.from requires an array-like object');
  }

  const items = Object(arrayLike);
  const len = parseInt(items.length) || 0;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in items) {
      result[i] = mapFn ? mapFn.call(thisArg, items[i], i) : items[i];
    }
  }

  return result;
};
```

## 16. Object.assign()

**Asked by:** Microsoft, Apple, Oracle **Question:** Create a polyfill for
Object.assign()

```javascript
Object.myAssign = function (target, ...sources) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const to = Object(target);

  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];

    if (source != null) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          to[key] = source[key];
        }
      }
    }
  }

  return to;
};
```

## 17. JSON.stringify()

**Asked by:** Facebook, Amazon, PayPal **Question:** Implement a basic
JSON.stringify() polyfill

```javascript
JSON.myStringify = function (value, replacer, space) {
  const stringify = (val, depth = 0) => {
    if (val === null) return 'null';
    if (typeof val === 'undefined') return undefined;
    if (typeof val === 'boolean') return val.toString();
    if (typeof val === 'number') return isFinite(val) ? val.toString() : 'null';
    if (typeof val === 'string') return `"${val.replace(/"/g, '\\"')}"`;

    if (Array.isArray(val)) {
      const items = val.map((item) => {
        const result = stringify(item, depth + 1);
        return result === undefined ? 'null' : result;
      });
      return `[${items.join(',')}]`;
    }

    if (typeof val === 'object') {
      const pairs = [];
      for (const key in val) {
        if (val.hasOwnProperty(key)) {
          const result = stringify(val[key], depth + 1);
          if (result !== undefined) {
            pairs.push(`"${key}":${result}`);
          }
        }
      }
      return `{${pairs.join(',')}}`;
    }

    return undefined;
  };

  return stringify(value);
};
```

## 18. setTimeout with clearTimeout

**Asked by:** Google, Meta, TikTok **Question:** Implement setTimeout and
clearTimeout polyfills

```javascript
const MyTimer = (function () {
  let timerId = 0;
  const timers = {};

  function mySetTimeout(callback, delay, ...args) {
    const id = ++timerId;

    timers[id] = {
      callback,
      args,
      startTime: Date.now(),
      delay,
    };

    const runner = () => {
      const timer = timers[id];
      if (!timer) return;

      const elapsed = Date.now() - timer.startTime;
      if (elapsed >= timer.delay) {
        delete timers[id];
        timer.callback.apply(null, timer.args);
      } else {
        setTimeout(runner, timer.delay - elapsed);
      }
    };

    setTimeout(runner, delay);
    return id;
  }

  function myClearTimeout(id) {
    delete timers[id];
  }

  return { mySetTimeout, myClearTimeout };
})();
```

## 19. debounce

**Asked by:** Uber, Airbnb, Stripe **Question:** Create a debounce function

```javascript
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
```

## 20. throttle

**Asked by:** Twitter, LinkedIn, Snapchat **Question:** Implement a throttle
function

```javascript
function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
```

## 21. Array.prototype.some()

**Asked by:** Adobe, Salesforce, Zoom **Question:** Create a polyfill for
Array.prototype.some()

```javascript
Array.prototype.mySome = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.some called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const O = Object(this);
  const len = parseInt(O.length) || 0;

  for (let i = 0; i < len; i++) {
    if (i in O) {
      if (callback.call(thisArg, O[i], i, O)) {
        return true;
      }
    }
  }

  return false;
};
```

## 22. Array.prototype.every()

**Asked by:** Netflix, Spotify, Slack **Question:** Implement
Array.prototype.every() polyfill

```javascript
Array.prototype.myEvery = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.every called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const O = Object(this);
  const len = parseInt(O.length) || 0;

  for (let i = 0; i < len; i++) {
    if (i in O) {
      if (!callback.call(thisArg, O[i], i, O)) {
        return false;
      }
    }
  }

  return true;
};
```

## 23. deep clone

**Asked by:** Google, Facebook, Amazon **Question:** Create a deep clone
function

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item));
  }

  if (typeof obj === 'object') {
    const cloned = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }

  return obj;
}
```

## Tips for Interview Success

1. **Understand the native behavior**: Know edge cases and error handling
2. **Handle null/undefined**: Always check for null and undefined inputs
3. **Type checking**: Verify function parameters are of expected types
4. **Performance considerations**: Discuss time/space complexity
5. **Test your implementation**: Walk through examples with the interviewer
6. **Know the differences**: Understand how your polyfill differs from the
   native implementation

These polyfills demonstrate understanding of JavaScript fundamentals, prototype
manipulation, and modern ES6+ features that are essential for frontend
development roles.
