# **⭐ Rating Component**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

### JavaScript Version

```jsx
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ count = 5, value = 0, onChange, editable = true }) => {
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (index) => {
    if (editable && onChange) {
      onChange(index + 1);
    }
  };

  const handleMouseEnter = (index) => {
    if (editable) {
      setHoverValue(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (editable) {
      setHoverValue(0);
    }
  };

  return (
    <div className="rating">
      {[...Array(count)].map((_, index) => (
        <FaStar
          key={index}
          className="star"
          color={(hoverValue || value) > index ? '#ffc107' : '#e4e5e9'}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: editable ? 'pointer' : 'default' }}
        />
      ))}
    </div>
  );
};

export default Rating;
```

### TypeScript Version

```tsx
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  count?: number;
  value?: number;
  onChange?: (value: number) => void;
  editable?: boolean;
}

const Rating: React.FC<RatingProps> = ({
  count = 5,
  value = 0,
  onChange,
  editable = true,
}) => {
  const [hoverValue, setHoverValue] = useState<number>(0);

  const handleClick = (index: number) => {
    if (editable && onChange) {
      onChange(index + 1);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (editable) {
      setHoverValue(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (editable) {
      setHoverValue(0);
    }
  };

  return (
    <div className="rating">
      {[...Array(count)].map((_, index) => (
        <FaStar
          key={index}
          className="star"
          color={(hoverValue || value) > index ? '#ffc107' : '#e4e5e9'}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: editable ? 'pointer' : 'default' }}
        />
      ))}
    </div>
  );
};

export default Rating;
```
