# React-Table: Complete Guide with TypeScript (TSX)

## Table of Contents

- [What is React-Table?](#what-is-react-table?)
- [Key Advantages of React-Table](#key-advantages-of-react-table)
- [Complete Setup Guide (TypeScript)](<#complete-setup-guide-(typescript)>)
- [Tips for Using React-Table](#tips-for-using-react-table)

## What is React-Table?

React-Table is a lightweight, headless utility for building powerful tables and
datagrids in React. It's not a table component itself, but rather provides the
logic and state management for your table while giving you complete control over
the UI rendering.

## Key Advantages of React-Table

1. **Headless Design**: You control 100% of the markup and styles
2. **Lightweight**: Only ~11-14kb depending on features used
3. **Flexible**: Works with any styling solution or UI framework
4. **Feature-Rich**: Sorting, filtering, pagination, grouping, row selection,
   etc.
5. **TypeScript Support**: First-class TypeScript support
6. **Hooks-based**: Uses React hooks for composition
7. **Server-side or Client-side**: Works with both approaches

## Complete Setup Guide (TypeScript)

### 1. Installation

```bash
npm install @tanstack/react-table
# or
yarn add @tanstack/react-table
```

### 2. Basic Table Implementation (TSX)

```tsx
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';

type Person = {
  id: number;
  name: string;
  age: number;
  email: string;
};

const data: Person[] = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
];

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];

function DataTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table className="border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 border">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
```

### 3. Adding Features (Sorting, Pagination, etc.)

Here's an enhanced version with common features:

```tsx
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';

// ... (keep the same Person type and data)

function EnhancedDataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-2">
      <div className="mb-4">
        <input
          placeholder="Filter by name..."
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(e) =>
            table.getColumn('name')?.setFilterValue(e.target.value)
          }
          className="p-2 border"
        />
      </div>

      <table className="border">
        {/* Header */}
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 border">
                  <div
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: ' ↑',
                      desc: ' ↓',
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Body */}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border rounded"
        >
          {'<<'}
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border rounded"
        >
          {'<'}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="p-1 border rounded"
        >
          {'>'}
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className="p-1 border rounded"
        >
          {'>>'}
        </button>
        <span>
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className="p-1 border rounded"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
```

### 4. Advanced Features

React-Table supports many advanced features:

- **Row Selection**: Add checkboxes to select rows
- **Column Resizing**: Allow users to resize columns
- **Grouping**: Group data by columns
- **Expanding**: Create expandable rows
- **Virtualization**: For large datasets
- **Server-side Operations**: For large datasets

Here's an example of row selection:

```tsx
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

function TableWithRowSelection() {
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Add a selection column to your columns definition
  const columnsWithSelection: ColumnDef<Person>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    ...columns,
  ];

  // Then use columnsWithSelection in your table config
}
```

## Tips for Using React-Table

1. **Customize Rendering**: You have full control over how cells are rendered
2. **Memoize Data**: For performance, memoize your data and columns
3. **Type Safety**: Leverage TypeScript to ensure type safety throughout
4. **Plugin System**: Combine different plugins for needed features
5. **Server-side Data**: For large datasets, implement server-side
   pagination/sorting

React-Table's headless approach means you can integrate it with any styling
solution (CSS, Tailwind, Material-UI, etc.) and customize the table behavior to
your exact needs.

**[⬆ Back to Top](#table-of-contents)**
