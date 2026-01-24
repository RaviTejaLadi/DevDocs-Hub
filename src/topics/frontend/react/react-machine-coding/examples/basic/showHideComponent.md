# **Show/Hide Component**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

## JavaScript Version

```jsx
import React, { useState } from 'react';

const ToggleVisibilityJS = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Toggle Visibility (JavaScript)</h1>

      <button
        onClick={toggleVisibility}
        style={{
          padding: '10px 15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {isVisible && (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
          }}
        >
          <h2>Hidden Content</h2>
          <p>This content is now visible because you clicked the button!</p>
          <p>You can toggle me anytime using the button above.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleVisibilityJS;
```

## TypeScript Version

```tsx
import React, { useState } from 'react';

const ToggleVisibilityTS: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Toggle Visibility (TypeScript)</h1>

      <button
        onClick={toggleVisibility}
        style={{
          padding: '10px 15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {isVisible && (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
          }}
        >
          <h2>Hidden Content</h2>
          <p>This content is now visible because you clicked the button!</p>
          <p>You can toggle me anytime using the button above.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleVisibilityTS;
```
