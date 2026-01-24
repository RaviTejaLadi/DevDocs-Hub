# **React Table Hooks Syntax Guide**

Here's a breakdown of the most commonly used React-Table hooks with their syntax
and explanations:

---

## Table of Contents

- [1. useReactTable (Core Hook)](<#1.-usereacttable-(core-hook)>)
- [2. Row Model Hooks](#2.-row-model-hooks)
- [3. State Management Hooks](#3.-state-management-hooks)
- [4. Row Selection Hooks](#4.-row-selection-hooks)
- [5. Column Visibility](#5.-column-visibility)
- [6. Expanded Rows](#6.-expanded-rows)
- [7. Column Ordering (Drag & Drop)](<#7.-column-ordering-(drag-and-drop)>)
- [8. Global Filtering](#8.-global-filtering)
- [Key Utility Methods](#key-utility-methods)
- [Complete Feature Setup Example](#complete-feature-setup-example)

### 1. useReactTable (Core Hook)

The main hook that creates a table instance.

```tsx
const table = useReactTable({
  data: TData[],                // Your array of data
  columns: ColumnDef<TData>[],  // Column definitions
  getCoreRowModel: function,    // Required core row model
  // State management
  state?: TableState,
  onStateChange?: (state: TableState) => void,
  // Feature hooks
  getSortedRowModel?: function,
  getFilteredRowModel?: function,
  getPaginationRowModel?: function,
  // Other options
  debugTable?: boolean,
});
```

**Key Features:**

- Creates the table instance
- Manages all table state
- Composes other feature hooks

---

### 2. Row Model Hooks

#### **`getCoreRowModel`**

```tsx
getCoreRowModel: getCoreRowModel(),
```

- **Required** for basic table functionality
- Transforms your data into rows
- Without this, no rows will be rendered

#### **`getSortedRowModel`**

```tsx
getSortedRowModel: getSortedRowModel(),
```

- Enables sorting functionality
- Must be used with `sorting` state and `onSortingChange`

#### **`getFilteredRowModel`**

```tsx
getFilteredRowModel: getFilteredRowModel(),
```

- Enables filtering functionality
- Requires `columnFilters` state and `onColumnFiltersChange`

#### **`getPaginationRowModel`**

```tsx
getPaginationRowModel: getPaginationRowModel(),
```

- Enables pagination
- Requires `pagination` state and `onPaginationChange`

---

### 3. State Management Hooks

#### **Sorting State**

```tsx
const [sorting, setSorting] = useState<SortingState>([]);

// In table options:
state: { sorting },
onSortingChange: setSorting,
```

**Example Usage:**

```tsx
columnHelper.accessor('age', {
  header: () => 'Age',
  cell: (info) => info.getValue(),
  // Add sorting to column
  enableSorting: true,
});
```

#### **Filtering State**

```tsx
const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

// In table options:
state: { columnFilters },
onColumnFiltersChange: setColumnFilters,
```

**Example Filter Input:**

```tsx
<input
  value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
  onChange={(e) => table.getColumn('name')?.setFilterValue(e.target.value)}
/>
```

#### **Pagination State**

```tsx
const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
  pageIndex: 0,
  pageSize: 10,
});

// In table options:
state: { pagination: { pageIndex, pageSize } },
onPaginationChange: setPagination,
```

---

### 4. Row Selection Hooks

```tsx
const [rowSelection, setRowSelection] = useState({});

// In table options:
state: { rowSelection },
onRowSelectionChange: setRowSelection,
enableRowSelection: true, // or a function
```

**Example Column Definition:**

```tsx
{
  id: 'select',
  header: ({ table }) => (
    <Checkbox
      checked={table.getIsAllRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onChange={row.getToggleSelectedHandler()}
    />
  ),
}
```

---

### 5. Column Visibility

```tsx
const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

// In table options:
state: { columnVisibility },
onColumnVisibilityChange: setColumnVisibility,
```

**Example Toggle:**

```tsx
<button
  onClick={() => table.toggleAllColumnsVisible(!table.getIsAllColumnsVisible())}
>
  Toggle All
</button>
```

---

### 6. Expanded Rows

```tsx
const [expanded, setExpanded] = useState<ExpandedState>({});

// In table options:
state: { expanded },
onExpandedChange: setExpanded,
getSubRows: row => row.subRows, // if you have nested data
```

**Example Expandable Column:**

```tsx
{
  id: 'expander',
  header: () => null,
  cell: ({ row }) => (
    <button onClick={row.getToggleExpandedHandler()}>
      {row.getIsExpanded() ? '👇' : '👉'}
    </button>
  ),
}
```

---

### 7. Column Ordering (Drag and Drop)

```tsx
const [columnOrder, setColumnOrder] = useState<string[]>();

// In table options:
state: { columnOrder },
onColumnOrderChange: setColumnOrder,
```

---

### 8. Global Filtering

```tsx
const [globalFilter, setGlobalFilter] = useState('');

// In table options:
state: { globalFilter },
onGlobalFilterChange: setGlobalFilter,
```

**Example Search Input:**

```tsx
<input
  value={globalFilter}
  onChange={(e) => setGlobalFilter(e.target.value)}
  placeholder="Search all columns..."
/>
```

---

### Key Utility Methods

Once you have your table instance, you'll use these frequently:

```tsx
// Table methods
table.getHeaderGroups();
table.getRowModel().rows;
table.getSelectedRowModel();
table.resetSorting();

// Column methods
column.getFilterValue();
column.setFilterValue();
column.getIsSorted();
column.toggleSorting();

// Row methods
row.getIsSelected();
row.toggleSelected();
row.getVisibleCells();
row.getIsExpanded();
```

---

### Complete Feature Setup Example

```tsx
const table = useReactTable({
  data,
  columns,
  // Core
  getCoreRowModel: getCoreRowModel(),
  // State
  state: {
    sorting,
    columnFilters,
    pagination,
    rowSelection,
    columnVisibility,
  },
  // State change handlers
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters,
  onPaginationChange: setPagination,
  onRowSelectionChange: setRowSelection,
  onColumnVisibilityChange: setColumnVisibility,
  // Features
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  // Other
  debugTable: true,
});
```

Each hook integrates with the table instance to provide specific functionality
while maintaining a clean, composable API. The headless nature means you're
responsible for rendering the UI, but you get complete control over the markup
and styling.

**[⬆ Back to Top](#table-of-contents)**
