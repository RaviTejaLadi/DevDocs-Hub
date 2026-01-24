# Top 30 Theory Interview Questions and Answers

## Table of Contents

1. [Basic SQL Concepts](#basic-sql-concepts)
   1. [What is SQL?](#1.-what-is-sql?)
   2. [Types of SQL commands](#2.-what-are-the-different-types-of-sql-commands?)
   3. [Primary key](#3.-what-is-a-primary-key?)
   4. [Foreign key](#4.-what-is-a-foreign-key?)
2. [Database Design](#database-design)
   1. [Database normalization](#5.-what-is-database-normalization?)
   2. [Advantages of normalization](#6.-what-are-the-advantages-of-normalization?)
   3. [Denormalization](#7.-what-is-denormalization-and-when-would-you-use-it?)
3. [SQL Queries](#sql-queries)
   1. [WHERE vs HAVING](#8.-what-is-the-difference-between-where-and-having-clauses?)
   2. [DELETE vs TRUNCATE vs DROP](#9.-what-is-the-difference-between-delete-truncate-and-drop?)
   3. [UNION vs UNION ALL](#10.-what-is-the-difference-between-union-and-union-all?)
4. [Joins and Relationships](#joins-and-relationships)
   1. [Types of joins](#11.-what-are-the-different-types-of-joins-in-sql?)
   2. [Self-join](#12.-what-is-a-self-join?)
5. [Advanced SQL Concepts](#advanced-sql-concepts)
   1. [Indexes](#13.-what-are-indexes-and-why-are-they-important?)
   2. [Stored procedure](#14.-what-is-a-stored-procedure?)
   3. [Trigger](#15.-what-is-a-trigger?)
6. [Performance and Optimization](#performance-and-optimization)
   1. [Optimizing SQL queries](#16.-how-would-you-optimize-a-slow-sql-query?)
   2. [Execution plan](#17.-what-is-an-execution-plan?)
7. [Transactions and Concurrency](#transactions-and-concurrency)
   1. [Transaction](#18.-what-is-a-transaction-in-sql?)
   2. [Transaction isolation levels](#19.-what-are-the-different-transaction-isolation-levels?)
   3. [Dirty read, non-repeatable read, phantom read](#20.-what-are-dirty-read-non-repeatable-read-and-phantom-read?)
8. [Functions and Operators](#functions-and-operators)
   1. [CHAR vs VARCHAR](#21.-what-is-the-difference-between-char-and-varchar?)
   2. [Aggregate functions](#22.-what-are-aggregate-functions-in-sql?)
   3. [GROUP BY vs ORDER BY](#23.-what-is-the-difference-between-group-by-and-order-by?)
9. [Advanced Topics](#advanced-topics)
   1. [Window functions](#24.-what-are-window-functions?)
   2. [CTE (Common Table Expression)](#25.-what-is-a-cte-common-table-expression?)
   3. [View vs Materialized View](#26.-what-is-the-difference-between-a-view-and-a-materialized-view?)
   4. [Correlated subquery](#27.-what-is-a-correlated-subquery?)
10. [Database Management](#database-management)
    1. [Database sharding](#28.-what-is-database-sharding?)
    2. [CAP theorem](#29.-what-is-the-cap-theorem?)
    3. [NoSQL databases](#30.-what-are-nosql-databases-and-how-do-they-differ-from-sql-databases?)

---

## Basic SQL Concepts

### 1. What is SQL?

**Answer:** SQL (Structured Query Language) is a standard programming language
designed for managing and manipulating relational databases. It's used to
perform tasks like querying data, inserting records, updating records, deleting
records, creating databases, and managing database permissions.

### 2. What are the different types of SQL commands?

**Answer:**

- **DDL (Data Definition Language):** CREATE, ALTER, DROP, TRUNCATE, RENAME
- **DML (Data Manipulation Language):** SELECT, INSERT, UPDATE, DELETE
- **DCL (Data Control Language):** GRANT, REVOKE
- **TCL (Transaction Control Language):** COMMIT, ROLLBACK, SAVEPOINT
- **DQL (Data Query Language):** SELECT (sometimes considered part of DML)

### 3. What is a primary key?

**Answer:** A primary key is a column (or set of columns) that uniquely
identifies each row in a table. It must contain unique values and cannot contain
NULL values. A table can have only one primary key.

### 4. What is a foreign key?

**Answer:** A foreign key is a column (or set of columns) that establishes a
relationship between data in two tables. It references the primary key of
another table, enforcing referential integrity by ensuring the value exists in
the referenced table.

## Database Design

### 5. What is database normalization?

**Answer:** Normalization is the process of organizing data in a database to
reduce redundancy and improve data integrity. The main normal forms are:

- 1NF: Eliminate repeating groups
- 2NF: Remove partial dependencies
- 3NF: Remove transitive dependencies
- BCNF: Boyce-Codd Normal Form
- 4NF: Remove multi-valued dependencies
- 5NF: Remove join dependencies

### 6. What are the advantages of normalization?

**Answer:**

- Reduces data redundancy
- Improves data integrity
- Simplifies database design
- Makes the database more flexible
- Reduces storage space requirements

### 7. What is denormalization and when would you use it?

**Answer:** Denormalization is the process of intentionally introducing
redundancy into a database to improve read performance. It's used when:

- Read performance is more critical than write performance
- For reporting databases/data warehouses
- When complex joins are slowing down queries
- For analytical processing where speed is essential

## SQL Queries

### 8. What is the difference between WHERE and HAVING clauses?

**Answer:**

- WHERE filters rows before grouping (GROUP BY)
- HAVING filters groups after the GROUP BY operation
- WHERE can be used without GROUP BY, but HAVING requires GROUP BY
- WHERE cannot use aggregate functions, HAVING can

### 9. What is the difference between DELETE, TRUNCATE, and DROP?

**Answer:**

- **DELETE:** Removes rows one by one, can be rolled back, can have WHERE
  clause, doesn't reset identity counters
- **TRUNCATE:** Removes all rows at once, can't be rolled back (in most
  databases), faster than DELETE, resets identity counters
- **DROP:** Removes the entire table structure including data, can't be rolled
  back, requires recreation of table to use again

### 10. What is the difference between UNION and UNION ALL?

**Answer:**

- UNION combines results of two queries and removes duplicates
- UNION ALL combines results but keeps all duplicates
- UNION performs a sort to remove duplicates (slower)
- UNION ALL is faster as it doesn't perform duplicate removal

## Joins and Relationships

### 11. What are the different types of joins in SQL?

**Answer:**

- **INNER JOIN:** Returns rows when there's a match in both tables
- **LEFT (OUTER) JOIN:** Returns all rows from left table and matched rows from
  right (NULL if no match)
- **RIGHT (OUTER) JOIN:** Returns all rows from right table and matched rows
  from left (NULL if no match)
- **FULL (OUTER) JOIN:** Returns rows when there's a match in either table
- **CROSS JOIN:** Returns Cartesian product of both tables
- **SELF JOIN:** Joins a table to itself

### 12. What is a self-join?

**Answer:** A self-join is a regular join but the table is joined with itself.
It's useful when you need to compare rows within the same table. Typically used
with table aliases to distinguish between the two instances of the same table.

Example: Finding employees who work in the same department:

```sql
SELECT A.EmployeeName, B.EmployeeName, A.Department
FROM Employees A, Employees B
WHERE A.Department = B.Department
AND A.EmployeeID != B.EmployeeID;
```

## Advanced SQL Concepts

### 13. What are indexes and why are they important?

**Answer:** Indexes are special lookup tables that the database search engine
can use to speed up data retrieval. They work like an index in a book. Benefits
include:

- Faster data retrieval
- Improved query performance
- Efficient sorting and grouping

However, they have downsides:

- Take up additional storage
- Slow down INSERT, UPDATE, DELETE operations
- Require maintenance

### 14. What is a stored procedure?

**Answer:** A stored procedure is a prepared SQL code that you can save and
reuse. It can accept parameters, perform operations, and return results.
Benefits include:

- Improved performance (precompiled)
- Reduced network traffic
- Code reusability
- Better security (can restrict direct table access)

### 15. What is a trigger?

**Answer:** A trigger is a special kind of stored procedure that automatically
executes when a specific event occurs in the database (e.g., INSERT, UPDATE,
DELETE). Triggers are used to:

- Enforce business rules
- Maintain audit trails
- Implement complex integrity constraints
- Automate certain operations

## Performance and Optimization

### 16. How would you optimize a slow SQL query?

**Answer:**

- Add appropriate indexes
- Avoid SELECT \*, specify columns needed
- Use JOINs instead of subqueries when possible
- Limit the result set with WHERE clauses
- Avoid functions on indexed columns in WHERE clauses
- Use query execution plans to identify bottlenecks
- Normalize/denormalize tables appropriately
- Update statistics regularly
- Consider partitioning large tables

### 17. What is an execution plan?

**Answer:** An execution plan is a sequence of operations that the database
engine performs to execute a SQL query. It shows:

- The order in which tables are accessed
- The join methods used
- The indexes used (or not used)
- Estimated costs of operations
- Actual vs. estimated row counts

Execution plans are essential for query optimization as they help identify
performance bottlenecks.

## Transactions and Concurrency

### 18. What is a transaction in SQL?

**Answer:** A transaction is a sequence of operations performed as a single
logical unit of work. It has four key properties (ACID):

- **Atomicity:** All operations complete successfully or none do
- **Consistency:** Database remains in a consistent state before and after
- **Isolation:** Transactions are isolated from each other
- **Durability:** Once committed, changes are permanent

### 19. What are the different transaction isolation levels?

**Answer:**

- **Read Uncommitted:** Lowest isolation, allows dirty reads
- **Read Committed:** Prevents dirty reads, allows non-repeatable reads
- **Repeatable Read:** Prevents dirty and non-repeatable reads, allows phantom
  reads
- **Serializable:** Highest isolation, prevents all concurrency issues but
  reduces performance

### 20. What are dirty read, non-repeatable read, and phantom read?

**Answer:**

- **Dirty Read:** Reading uncommitted data that may be rolled back
- **Non-repeatable Read:** Getting different values when reading the same row
  multiple times in a transaction
- **Phantom Read:** Seeing new rows that appeared since the transaction started
  when requerying

## Functions and Operators

### 21. What is the difference between CHAR and VARCHAR?

**Answer:**

- **CHAR** is fixed-length (pads with spaces if needed), faster for fixed-length
  text
- **VARCHAR** is variable-length, more space-efficient for variable-length text
- CHAR uses static memory allocation, VARCHAR uses dynamic

### 22. What are aggregate functions in SQL?

**Answer:** Aggregate functions perform calculations on sets of values and
return a single value:

- COUNT(): Counts rows
- SUM(): Sums values
- AVG(): Calculates average
- MIN()/MAX(): Finds minimum/maximum
- GROUP_CONCAT()/STRING_AGG(): Concatenates values (MySQL/SQL Server)

### 23. What is the difference between GROUP BY and ORDER BY?

**Answer:**

- GROUP BY groups rows that have the same values into summary rows
- ORDER BY sorts the result set in ascending or descending order
- GROUP BY is used with aggregate functions, ORDER BY is not
- GROUP BY affects which rows are returned, ORDER BY affects their sequence

## Advanced Topics

### 24. What are window functions?

**Answer:** Window functions perform calculations across a set of table rows
related to the current row. Unlike aggregate functions, they don't group rows
into a single output row. Common window functions:

- ROW_NUMBER(): Assigns unique numbers to rows
- RANK(): Ranks rows with gaps for ties
- DENSE_RANK(): Ranks rows without gaps for ties
- LEAD()/LAG(): Accesses subsequent/previous rows
- FIRST_VALUE()/LAST_VALUE(): Gets first/last value in window

### 25. What is a CTE (Common Table Expression)?

**Answer:** A CTE is a temporary result set that you can reference within a
SELECT, INSERT, UPDATE, or DELETE statement. It's defined using the WITH clause.
Benefits include:

- Improves query readability
- Allows recursive queries
- Can be referenced multiple times in the same query
- Replaces complex subqueries or views

Example:

```sql
WITH SalesCTE AS (
    SELECT SalesPerson, SUM(Amount) AS TotalSales
    FROM Sales
    GROUP BY SalesPerson
)
SELECT * FROM SalesCTE WHERE TotalSales > 1000;
```

### 26. What is the difference between a view and a materialized view?

**Answer:**

- **View:** Virtual table based on the result set of a SQL query, doesn't store
  data physically, always shows current data
- **Materialized View:** Stores the query result physically, needs to be
  refreshed to reflect changes in base tables, improves performance for complex
  queries

### 27. What is a correlated subquery?

**Answer:** A correlated subquery is a subquery that references columns from the
outer query. It executes once for each row processed by the outer query, making
it less efficient than non-correlated subqueries.

Example: Find employees whose salary is above the average in their department

```sql
SELECT e1.Name, e1.Salary, e1.Department
FROM Employees e1
WHERE e1.Salary > (
    SELECT AVG(e2.Salary)
    FROM Employees e2
    WHERE e2.Department = e1.Department
);
```

## Database Management

### 28. What is database sharding?

**Answer:** Sharding is a horizontal partitioning technique where a large
database is divided into smaller, faster, more manageable pieces called shards.
Each shard is held on a separate database server to distribute the load.
Benefits include:

- Improved performance
- Better scalability
- Higher availability
- Geographic distribution

### 29. What is the CAP theorem?

**Answer:** The CAP theorem states that a distributed database system can only
guarantee two out of the following three properties:

- **Consistency:** Every read receives the most recent write
- **Availability:** Every request receives a response
- **Partition tolerance:** System continues to operate despite network
  partitions

Most distributed databases choose between CP (consistency and partition
tolerance) or AP (availability and partition tolerance).

### 30. What are NoSQL databases and how do they differ from SQL databases?

**Answer:** NoSQL databases are non-relational databases designed for:

- Flexible data models (document, key-value, columnar, graph)
- Horizontal scaling
- High performance with large data volumes
- Schema-less design

**Differences from SQL databases:**

- No fixed schema vs. rigid schema
- Horizontal vs. vertical scaling
- BASE (Basically Available, Soft state, Eventually consistent) vs. ACID
- Often no joins or complex transactions
- Better for unstructured or semi-structured data

**[⬆ Back to Top](#table-of-contents)**
