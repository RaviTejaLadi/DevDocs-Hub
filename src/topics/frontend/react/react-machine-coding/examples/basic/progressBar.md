# **📊 Progress Bar**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

### JavaScript Version

```jsx
import React from 'react';

const ProgressBar = ({ progress, color = '#4CAF50', height = 20 }) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-container" style={{ height }}>
      <div
        className="progress-bar"
        style={{
          width: `${clampedProgress}%`,
          backgroundColor: color,
          height: '100%',
        }}
      >
        <span className="progress-text">{clampedProgress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
```

### TypeScript Version

```tsx
import React from 'react';

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = '#4CAF50',
  height = 20,
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-container" style={{ height }}>
      <div
        className="progress-bar"
        style={{
          width: `${clampedProgress}%`,
          backgroundColor: color,
          height: '100%',
        }}
      >
        <span className="progress-text">{clampedProgress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
```
