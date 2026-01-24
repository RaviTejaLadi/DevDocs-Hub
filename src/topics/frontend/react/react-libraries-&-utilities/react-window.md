# React-Window: A Comprehensive Guide

## Table of Contents

- [Introduction to React-Window](#introduction-to-react-window)
  - [Why React-Window?](#why-react-window?)
- [Setup and Installation](#setup-and-installation)
  - [Installation](#installation)
  - [Basic Setup](#basic-setup)
- [Usage Examples](#usage-examples)
  - [1. Basic List](#1.-basic-list)
  - [2. List with Dynamic Content](#2.-list-with-dynamic-content)
  - [3. Grid Layout](#3.-grid-layout)
  - [4. Variable Sized List](#4.-variable-sized-list)
- [Key Advantages of React-Window](#key-advantages-of-react-window)
- [Real-world Use Cases](#real-world-use-cases)
- [Alternatives to React-Window](#alternatives-to-react-window)
  - [1. react-virtualized (by the same author)](<#1.-react-virtualized-(by-the-same-author)>)
  - [2. react-virtuoso](#2.-react-virtuoso)
  - [3. react-tiny-virtual-list](#3.-react-tiny-virtual-list)
  - [4. react-infinite-scroller](#4.-react-infinite-scroller)
- [Performance Comparison Example](#performance-comparison-example)
- [Advanced Techniques](#advanced-techniques)
  - [1. Lazy Loading Images](#1.-lazy-loading-images)
  - [2. Infinite Loading](#2.-infinite-loading)
  - [3. Sticky Headers](#3.-sticky-headers)
- [Common Pitfalls and Solutions](#common-pitfalls-and-solutions)
- [Conclusion](#conclusion)

## Introduction to React-Window

React-Window is a popular library for efficiently rendering large lists and
tabular data in React applications. It addresses the performance issues that
arise when rendering thousands of items by only rendering the items that are
currently visible in the viewport (a technique called "windowing" or
"virtualization").

### Why React-Window?

When working with large datasets:

- Rendering all items at once can cause significant performance degradation
- The DOM becomes bloated with elements that aren't visible
- Scrolling becomes laggy and unresponsive
- Memory usage increases unnecessarily

React-Window solves these problems by:

- Only rendering what's visible plus a small buffer
- Recycling DOM nodes as you scroll
- Maintaining smooth performance regardless of dataset size

## Setup and Installation

### Installation

```bash
npm install react-window
# or
yarn add react-window
```

### Basic Setup

```jsx
import { FixedSizeList } from 'react-window';
```

## Usage Examples

### 1. Basic List

```jsx
import { FixedSizeList } from 'react-window';

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

const ExampleList = () => (
  <FixedSizeList height={500} width={300} itemCount={1000} itemSize={35}>
    {Row}
  </FixedSizeList>
);
```

### 2. List with Dynamic Content

```jsx
import { FixedSizeList } from 'react-window';

const data = Array(1000)
  .fill()
  .map((_, i) => ({
    id: i,
    name: `Item ${i}`,
    price: Math.random() * 100,
  }));

const Row = ({ index, style }) => (
  <div style={style}>
    <h3>{data[index].name}</h3>
    <p>${data[index].price.toFixed(2)}</p>
  </div>
);

const ProductList = () => (
  <FixedSizeList
    height={600}
    width={400}
    itemCount={data.length}
    itemSize={100}
  >
    {Row}
  </FixedSizeList>
);
```

### 3. Grid Layout

```jsx
import { FixedSizeGrid } from 'react-window';

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div style={style}>
    Item {rowIndex},{columnIndex}
  </div>
);

const ExampleGrid = () => (
  <FixedSizeGrid
    columnCount={10}
    columnWidth={100}
    height={500}
    rowCount={1000}
    rowHeight={50}
    width={800}
  >
    {Cell}
  </FixedSizeGrid>
);
```

### 4. Variable Sized List

```jsx
import { VariableSizeList } from 'react-window';

const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const Row = ({ index, style }) => (
  <div style={style}>
    Row {index} (height: {rowHeights[index]}px)
  </div>
);

const VariableList = () => (
  <VariableSizeList
    height={500}
    width={300}
    itemCount={1000}
    itemSize={(index) => rowHeights[index]}
  >
    {Row}
  </VariableSizeList>
);
```

## Key Advantages of React-Window

1. **Performance**: Dramatically reduces the number of DOM nodes created
2. **Memory Efficiency**: Only maintains state for visible items
3. **Smooth Scrolling**: Even with thousands of items
4. **Flexibility**: Supports both fixed and variable sized items
5. **Lightweight**: Small bundle size (~5kB gzipped)
6. **Accessibility**: Maintains proper tab order and ARIA attributes

## Real-world Use Cases

1. **E-commerce Product Lists**: Displaying thousands of products with images
2. **Social Media Feeds**: Infinite scrolling timelines
3. **Data Tables**: Large datasets with many columns and rows
4. **Document Editors**: Line-by-line rendering of large documents
5. **Calendar Views**: Month/week/day views with many events

## Alternatives to React-Window

### 1. react-virtualized (by the same author)

- More feature-rich but larger bundle size (~30kB)
- Supports more complex layouts and features
- Good for: Complex virtualization needs, masonry layouts

### 2. react-virtuoso

- Modern alternative with simpler API
- Better TypeScript support
- Good for: Dynamic content, chat applications

### 3. react-tiny-virtual-list

- Very lightweight (~2kB)
- Simpler API but fewer features
- Good for: Simple lists when bundle size is critical

### 4. react-infinite-scroller

- Implements infinite scrolling rather than windowing
- Good for: Infinite scroll with simpler implementation

## Performance Comparison Example

Here's a real-time comparison of rendering 10,000 items:

**Without virtualization:**

- DOM nodes: 10,000+
- Initial render time: ~1500ms
- Memory usage: High
- Scrolling: Laggy

**With React-Window:**

- DOM nodes: ~20 (only what's visible)
- Initial render time: ~50ms
- Memory usage: Low
- Scrolling: Smooth

## Advanced Techniques

### 1. Lazy Loading Images

```jsx
const Row = ({ index, style }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={style}>
      {!loaded && <div className="placeholder" />}
      <img
        src={`https://example.com/image-${index}.jpg`}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </div>
  );
};
```

### 2. Infinite Loading

```jsx
const Example = () => {
  const [items, setItems] = useState(
    Array(50)
      .fill()
      .map((_, i) => i)
  );

  const loadMore = () => {
    setItems((prev) => [
      ...prev,
      ...Array(50)
        .fill()
        .map((_, i) => i + prev.length),
    ]);
  };

  return (
    <FixedSizeList
      height={500}
      width={300}
      itemCount={items.length + 1} // +1 for loading indicator
      itemSize={50}
      onItemsRendered={({ visibleStopIndex }) => {
        if (visibleStopIndex >= items.length - 10) {
          loadMore();
        }
      }}
    >
      {({ index, style }) =>
        index < items.length ? (
          <div style={style}>Item {items[index]}</div>
        ) : (
          <div style={style}>Loading...</div>
        )
      }
    </FixedSizeList>
  );
};
```

### 3. Sticky Headers

```jsx
const StickyList = () => {
  const outerRef = useRef();
  const innerRef = useRef();

  return (
    <FixedSizeList
      outerRef={outerRef}
      innerRef={innerRef}
      height={500}
      width={300}
      itemCount={1000}
      itemSize={35}
      stickyIndices={[0]}
    >
      {({ index, style }) => (
        <div style={style}>
          {index === 0 ? (
            <div className="sticky-header">Header</div>
          ) : (
            `Row ${index}`
          )}
        </div>
      )}
    </FixedSizeList>
  );
};
```

## Common Pitfalls and Solutions

1. **Dynamic Content Height**: Use `VariableSizeList` and measure content
2. **State Management**: Store item state outside the row component
3. **CSS Issues**: Avoid transforms and complex styles on list container
4. **Scroll Position**: Use `initialScrollOffset` prop to restore position
5. **Window Resizing**: Handle resize events to recalculate sizes

## Conclusion

React-Window is an essential tool for any React developer working with large
datasets. Its simple API and excellent performance characteristics make it the
go-to solution for virtualized lists and grids. While alternatives exist,
React-Window strikes an excellent balance between features, performance, and
bundle size.

For most applications with large scrollable content, implementing React-Window
will lead to immediate and noticeable performance improvements, creating a much
better user experience.

**[⬆ Back to Top](#table-of-contents)**
