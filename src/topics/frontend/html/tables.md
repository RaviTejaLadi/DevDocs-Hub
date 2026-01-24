# Tables

**Important Note:** In the early 2000s, tables were used to design entire
website layouts (e.g., sidebars, headers). **Do not do this today.** Use CSS
(Flexbox/Grid) for layout. Use HTML Tables **only** for tabular data (calendars,
financial reports, schedules).

### 1. Table Structure (`table`, `thead`, `tbody`, `tfoot`)

A well-structured table is divided into semantic sections, allowing browsers to
handle long tables efficiently (e.g., printing the header on every new page) and
improving accessibility.

- **`<table>`:** The container that wraps the entire table.
- **`<thead>` (Table Head):** wraps the header rows. It defines the context of
  the columns.
- **`<tbody>` (Table Body):** wraps the main data rows.
- **`<tfoot>` (Table Foot):** wraps summary rows (e.g., "Total Cost"). It
  usually comes after `<tbody>` or `<thead>` in the code, but renders at the
  bottom.

### 2. Rows & Cells (`tr`, `th`, `td`)

Tables are built row by row, not column by column.

- **`<tr>` (Table Row):** Defines a horizontal row of cells.
- **`<th>` (Table Header):** Defines a header cell.
- _Visual:_ Browsers usually render text as **bold** and **centered**.
- _Semantic:_ Tells screen readers "This is a label," not just data.

- **`<td>` (Table Data):** Defines a standard cell containing data.
- _Visual:_ Text is regular weight and left-aligned.

```html
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$1.00</td>
    </tr>
  </tbody>
</table>
```

### 3. Merging Cells (`colspan`, `rowspan`)

Just like "Merge Cells" in Excel, you can make a cell span across multiple
columns or rows. These attributes go on the `<th>` or `<td>` tag.

- **`colspan`:** Stretches a cell **horizontally** (to the right).
- _Example:_ `colspan="2"` means "this cell takes up the space of 2 columns."
- _Usage:_ Often used for headers that group multiple columns (e.g., "Monthly
  Sales" spanning "Jan", "Feb", "Mar").

- **`rowspan`:** Stretches a cell **vertically** (downwards).
- _Example:_ `rowspan="3"` means "this cell takes up the height of 3 rows."

**Warning:** When you stretch a cell, you must **delete** the corresponding
placeholder cells in the HTML of the subsequent columns or rows, otherwise the
table layout will break/push cells out of alignment.

### 4. Table Accessibility Basics

Tables are notoriously difficult for screen reader users to navigate if they
lack proper semantic tags.

- **`<caption>`:** The title of the table. It must be the **first** child of the
  `<table>` tag.
- _Example:_ `<caption>Monthly Financial Report</caption>`

- **The `scope` Attribute:** Explicitly associates header cells with their rows
  or columns.
- `scope="col"`: Used on header cells in the top row.
- `scope="row"`: Used on header cells that start a row.
- _Why:_ As a screen reader moves down a column, it can remind the user "Price:
  $50" instead of just saying "$50".

**Accessible Example:**

```html
<table>
  <caption>
    Employee Hours
  </caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Alice</th>
      <td>40</td>
    </tr>
  </tbody>
</table>
```
