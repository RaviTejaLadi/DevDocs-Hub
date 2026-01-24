# **🔍 Simple Search**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

### JavaScript Version

```jsx
import React, { useState } from 'react';

const Search = ({ items, onSearch, searchKeys = [] }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      onSearch(items);
      return;
    }

    const filteredItems = items.filter((item) => {
      if (searchKeys.length > 0) {
        return searchKeys.some((key) =>
          String(item[key]).toLowerCase().includes(value.toLowerCase())
        );
      }
      return Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value.toLowerCase())
      );
    });

    onSearch(filteredItems);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
```

### TypeScript Version

```tsx
import React, { useState } from 'react';

interface SearchProps<T> {
  items: T[];
  onSearch: (filteredItems: T[]) => void;
  searchKeys?: Array<keyof T>;
}

const Search = <T extends Record<string, any>>({
  items,
  onSearch,
  searchKeys = [],
}: SearchProps<T>) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      onSearch(items);
      return;
    }

    const filteredItems = items.filter((item) => {
      if (searchKeys.length > 0) {
        return searchKeys.some((key) =>
          String(item[key]).toLowerCase().includes(value.toLowerCase())
        );
      }
      return Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value.toLowerCase())
      );
    });

    onSearch(filteredItems);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
```
