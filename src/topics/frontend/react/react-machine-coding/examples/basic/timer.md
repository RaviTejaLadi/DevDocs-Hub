# **Timer Component**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

## JavaScript Version

```jsx
import React, { useState, useEffect } from 'react';

const TimerJS = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>Current Time (JavaScript)</h1>
      <div
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#2c3e50',
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          display: 'inline-block',
        }}
      >
        {formatTime(currentTime)}
      </div>
      <p style={{ color: '#7f8c8d' }}>Updates every second</p>
    </div>
  );
};

export default TimerJS;
```

## TypeScript Version

```tsx
import React, { useState, useEffect } from 'react';

const TimerTS: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString();
  };

  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>Current Time (TypeScript)</h1>
      <div
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#2c3e50',
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          display: 'inline-block',
        }}
      >
        {formatTime(currentTime)}
      </div>
      <p style={{ color: '#7f8c8d' }}>Updates every second</p>
    </div>
  );
};

export default TimerTS;
```
