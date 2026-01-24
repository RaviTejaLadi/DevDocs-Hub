# **🧭 Breadcrumb Navigation**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

### JavaScript Version

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="separator">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
```

### TypeScript Version

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="separator">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
```
