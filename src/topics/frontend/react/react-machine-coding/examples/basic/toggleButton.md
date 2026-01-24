# **Toggle Button**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

## JavaScript Version

```jsx
import React, { useState } from 'react';

const ToggleButtonJS = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [activeTheme, setActiveTheme] = useState('light');

  const themes = {
    light: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      buttonColor: '#f0f0f0',
    },
    dark: {
      backgroundColor: '#333333',
      textColor: '#ffffff',
      buttonColor: '#555555',
    },
    blue: {
      backgroundColor: '#e6f7ff',
      textColor: '#003366',
      buttonColor: '#99ccff',
    },
  };

  const toggleState = () => {
    setIsToggled(!isToggled);
  };

  const switchTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(activeTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setActiveTheme(themeKeys[nextIndex]);
  };

  const currentTheme = themes[activeTheme];

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: '100vh',
        transition: 'all 0.3s ease',
      }}
    >
      <h1>Toggle Button (JS Version)</h1>

      <button
        onClick={toggleState}
        style={{
          padding: '10px 20px',
          backgroundColor: isToggled ? '#4CAF50' : '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '10px',
          transition: 'all 0.3s ease',
        }}
      >
        {isToggled ? 'ON' : 'OFF'}
      </button>

      <p>Current toggle state: {isToggled.toString()}</p>

      <button
        onClick={switchTheme}
        style={{
          padding: '10px 20px',
          backgroundColor: currentTheme.buttonColor,
          color: currentTheme.textColor,
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '10px',
          transition: 'all 0.3s ease',
        }}
      >
        Switch Theme (Current: {activeTheme})
      </button>
    </div>
  );
};

export default ToggleButtonJS;
```

## TypeScript Version

```tsx
import React, { useState } from 'react';

type Theme = {
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
};

type Themes = {
  [key: string]: Theme;
};

const ToggleButtonTS: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<string>('light');

  const themes: Themes = {
    light: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      buttonColor: '#f0f0f0',
    },
    dark: {
      backgroundColor: '#333333',
      textColor: '#ffffff',
      buttonColor: '#555555',
    },
    blue: {
      backgroundColor: '#e6f7ff',
      textColor: '#003366',
      buttonColor: '#99ccff',
    },
  };

  const toggleState = (): void => {
    setIsToggled(!isToggled);
  };

  const switchTheme = (): void => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(activeTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setActiveTheme(themeKeys[nextIndex]);
  };

  const currentTheme = themes[activeTheme];

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: '100vh',
        transition: 'all 0.3s ease',
      }}
    >
      <h1>Toggle Button (TS Version)</h1>

      <button
        onClick={toggleState}
        style={{
          padding: '10px 20px',
          backgroundColor: isToggled ? '#4CAF50' : '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '10px',
          transition: 'all 0.3s ease',
        }}
      >
        {isToggled ? 'ON' : 'OFF'}
      </button>

      <p>Current toggle state: {isToggled.toString()}</p>

      <button
        onClick={switchTheme}
        style={{
          padding: '10px 20px',
          backgroundColor: currentTheme.buttonColor,
          color: currentTheme.textColor,
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '10px',
          transition: 'all 0.3s ease',
        }}
      >
        Switch Theme (Current: {activeTheme})
      </button>
    </div>
  );
};

export default ToggleButtonTS;
```
