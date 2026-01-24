# **Like Button**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

## JavaScript Version

```jsx
import React, { useState } from 'react';

const LikeButtonJS = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newLikeState = !isLiked;
    setIsLiked(newLikeState);
    setLikeCount((prev) => (newLikeState ? prev + 1 : prev - 1));

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '20px',
      }}
    >
      <button
        onClick={handleLike}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.3s ease, color 0.3s ease',
        }}
        aria-label={isLiked ? 'Unlike' : 'Like'}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isLiked ? '#ff3252' : 'none'}
          stroke={isLiked ? '#ff3252' : '#555'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
      <span
        style={{
          fontSize: '16px',
          color: isLiked ? '#ff3252' : '#555',
          fontWeight: isLiked ? 'bold' : 'normal',
          transition: 'color 0.3s ease, font-weight 0.3s ease',
        }}
      >
        {likeCount}
      </span>
    </div>
  );
};

export default LikeButtonJS;
```

## TypeScript Version

```tsx
import React, { useState } from 'react';

const LikeButtonTS: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(42);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleLike = (): void => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newLikeState = !isLiked;
    setIsLiked(newLikeState);
    setLikeCount((prev) => (newLikeState ? prev + 1 : prev - 1));

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '20px',
      }}
    >
      <button
        onClick={handleLike}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.3s ease, color 0.3s ease',
        }}
        aria-label={isLiked ? 'Unlike' : 'Like'}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isLiked ? '#ff3252' : 'none'}
          stroke={isLiked ? '#ff3252' : '#555'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
      <span
        style={{
          fontSize: '16px',
          color: isLiked ? '#ff3252' : '#555',
          fontWeight: isLiked ? 'bold' : 'normal',
          transition: 'color 0.3s ease, font-weight 0.3s ease',
        }}
      >
        {likeCount}
      </span>
    </div>
  );
};

export default LikeButtonTS;
```
