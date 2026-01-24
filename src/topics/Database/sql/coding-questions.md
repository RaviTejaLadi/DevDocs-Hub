# Top 30 Coding Interview Questions and Answers

## Table of Contents

1. [Basic SQL Questions](#basic-sql-questions)
   1. [What is SQL and what are its main components?](#1.-what-is-sql-and-what-are-its-main-components?)
   2. [What is the difference between DELETE, TRUNCATE, and DROP?](#2.-what-is-the-difference-between-delete-truncate-and-drop?)
   3. [What are the different types of joins in SQL?](#3.-what-are-the-different-types-of-joins-in-sql?)
2. [Intermediate SQL Questions](#intermediate-sql-questions)
   1. [What is the difference between WHERE and HAVING clauses?](#4.-what-is-the-difference-between-where-and-having-clauses?)
   2. [How do you find the second highest salary from an Employee table?](#5.-how-do-you-find-the-second-highest-salary-from-an-employee-table?)
   3. [What is a subquery and what are its types?](#6.-what-is-a-subquery-and-what-are-its-types?)
   4. [How do you find duplicate records in a table?](#7.-how-do-you-find-duplicate-records-in-a-table?)
   5. [What is the difference between UNION and UNION ALL?](#8.-what-is-the-difference-between-union-and-union-all?)
   6. [How do you find the nth highest salary using window functions?](#9.-how-do-you-find-the-nth-highest-salary-using-window-functions?)
   7. [What are indexes and why are they used?](#10.-what-are-indexes-and-why-are-they-used?)
3. [Advanced SQL Questions](#advanced-sql-questions)
   1. [What are window functions and give examples?](#11.-what-are-window-functions-and-give-examples?)
   2. [How do you calculate a running total in SQL?](#12.-how-do-you-calculate-a-running-total-in-sql?)
   3. [What is a CTE and how is it different from a subquery?](#13.-what-is-a-cte-and-how-is-it-different-from-a-subquery?)
   4. [How do you implement pagination in SQL?](#14.-how-do-you-implement-pagination-in-sql?)
   5. [What is a stored procedure and what are its advantages?](#15.-what-is-a-stored-procedure-and-what-are-its-advantages?)
4. [Database Design Questions](#database-design-questions)
   1. [What is normalization and what are its common forms?](#16.-what-is-normalization-and-what-are-its-common-forms?)
   2. [What are primary keys, foreign keys, and unique keys?](#17.-what-are-primary-keys-foreign-keys-and-unique-keys?)
   3. [What is the difference between a clustered and non-clustered index?](#18.-what-is-the-difference-between-a-clustered-and-non-clustered-index?)
   4. [What is ACID in database transactions?](#19.-what-is-acid-in-database-transactions?)
   5. [What are database triggers and when would you use them?](#20.-what-are-database-triggers-and-when-would-you-use-them?)
5. [Complex Query Questions](#complex-query-questions)
   1. [How do you find employees who earn more than their managers?](#21.-how-do-you-find-employees-who-earn-more-than-their-managers?)
   2. [How do you find the department with the highest average salary?](#22.-how-do-you-find-the-department-with-the-highest-average-salary?)
   3. [How do you calculate the cumulative distribution of salaries?](#23.-how-do-you-calculate-the-cumulative-distribution-of-salaries?)
   4. [How do you find gaps in sequential data (like missing IDs)?](#24.-how-do-you-find-gaps-in-sequential-data-like-missing-ids?)
   5. [How do you swap male and female values in a single update statement?](#25.-how-do-you-swap-male-and-female-values-in-a-single-update-statement?)
6. [Performance Tuning Questions](#performance-tuning-questions)
   1. [How would you optimize a slow-running query?](#26.-how-would-you-optimize-a-slow-running-query?)
   2. [What is query execution plan and how do you read it?](#27.-what-is-query-execution-plan-and-how-do-you-read-it?)
   3. [What are covering indexes and how do they help?](#28.-what-are-covering-indexes-and-how-do-they-help?)
7. [Scenario-Based Questions](#scenario-based-questions)
   1. [How would you design a database for a social media platform?](#29.-how-would-you-design-a-database-for-a-social-media-platform?)
   2. [How would you handle a database with millions of records that's performing poorly?](#30.-how-would-you-handle-a-database-with-millions-of-records-thats-performing-poorly?)

## Basic SQL Questions

### 1. What is SQL and what are its main components?

**Answer:** SQL (Structured Query Language) is a standard language for managing
and manipulating relational databases. Its main components are:

- DDL (Data Definition Language): CREATE, ALTER, DROP
- DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE
- DCL (Data Control Language): GRANT, REVOKE
- TCL (Transaction Control Language): COMMIT, ROLLBACK

### 2. What is the difference between DELETE, TRUNCATE, and DROP?

**Answer:**

- DELETE: Removes rows from a table based on a WHERE condition (can be rolled
  back)
- TRUNCATE: Removes all rows from a table (faster than DELETE, can't be rolled
  back)
- DROP: Removes the entire table structure from the database

### 3. What are the different types of joins in SQL?

**Answer:**

- INNER JOIN: Returns rows when there's a match in both tables
- LEFT JOIN: Returns all rows from the left table and matched rows from the
  right
- RIGHT JOIN: Returns all rows from the right table and matched rows from the
  left
- FULL JOIN: Returns rows when there's a match in either table
- CROSS JOIN: Returns Cartesian product of both tables
- SELF JOIN: Joins a table to itself

## Intermediate SQL Questions

### 4. What is the difference between WHERE and HAVING clauses?

**Answer:**

- WHERE filters rows before grouping (aggregation)
- HAVING filters groups after the GROUP BY clause

### 5. How do you find the second highest salary from an Employee table?

**Answer:**

```sql
SELECT MAX(salary)
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);
```

### 6. What is a subquery and what are its types?

**Answer:** A subquery is a query nested inside another query. Types:

- Single-row subquery: Returns one row
- Multi-row subquery: Returns multiple rows
- Correlated subquery: References columns from the outer query
- Nested subquery: Subquery within another subquery

### 7. How do you find duplicate records in a table?

**Answer:**

```sql
SELECT column_name, COUNT(*)
FROM table_name
GROUP BY column_name
HAVING COUNT(*) > 1;
```

### 8. What is the difference between UNION and UNION ALL?

**Answer:**

- UNION combines results and removes duplicates
- UNION ALL combines results including all duplicates

### 9. How do you find the nth highest salary using window functions?

**Answer:**

```sql
SELECT DISTINCT salary
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank
    FROM Employee
) temp
WHERE rank = n;
```

### 10. What are indexes and why are they used?

**Answer:** Indexes are database objects that improve query performance by
providing faster data retrieval. They work like a book index, allowing the
database to find data without scanning the entire table.

## Advanced SQL Questions

### 11. What are window functions and give examples?

**Answer:** Window functions perform calculations across a set of table rows
related to the current row. Examples:

- ROW_NUMBER(): Assigns a unique number to each row
- RANK(): Assigns a rank with gaps for ties
- DENSE_RANK(): Assigns a rank without gaps for ties
- LEAD()/LAG(): Accesses data from subsequent/previous rows

### 12. How do you calculate a running total in SQL?

**Answer:**

```sql
SELECT date, amount,
       SUM(amount) OVER (ORDER BY date) as running_total
FROM transactions;
```

### 13. What is a CTE and how is it different from a subquery?

**Answer:** A CTE (Common Table Expression) is a temporary result set that can
be referenced within a query. Differences:

- CTEs are more readable and can be referenced multiple times
- Subqueries are embedded within the main query
- CTEs can be recursive

### 14. How do you implement pagination in SQL?

**Answer:**

```sql
-- For SQL Server
SELECT * FROM table_name
ORDER BY column_name
OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;

-- For MySQL
SELECT * FROM table_name
ORDER BY column_name
LIMIT 10 OFFSET 10;
```

### 15. What is a stored procedure and what are its advantages?

**Answer:** A stored procedure is a prepared SQL code that can be saved and
reused. Advantages:

- Improved performance (precompiled)
- Reduced network traffic
- Better security (can restrict direct table access)
- Code reusability

## Database Design Questions

### 16. What is normalization and what are its common forms?

**Answer:** Normalization is the process of organizing data to minimize
redundancy. Common forms:

- 1NF: Atomic values, no repeating groups
- 2NF: 1NF + no partial dependencies
- 3NF: 2NF + no transitive dependencies
- BCNF: Stronger version of 3NF
- 4NF: No multi-valued dependencies
- 5NF: No join dependencies

### 17. What are primary keys, foreign keys, and unique keys?

**Answer:**

- Primary Key: Uniquely identifies each row (cannot be NULL)
- Foreign Key: Enforces referential integrity by linking to a primary key
- Unique Key: Ensures all values are unique (can have one NULL)

### 18. What is the difference between a clustered and non-clustered index?

**Answer:**

- Clustered index determines the physical order of data (only one per table)
- Non-clustered index is a separate structure that points to the data (multiple
  allowed)

### 19. What is ACID in database transactions?

**Answer:**

- Atomicity: All operations complete successfully or none do
- Consistency: Database remains in a consistent state
- Isolation: Concurrent transactions don't interfere
- Durability: Committed transactions persist even after failures

### 20. What are database triggers and when would you use them?

**Answer:** Triggers are automatic procedures that execute when specific events
occur (INSERT, UPDATE, DELETE). Used for:

- Auditing changes
- Enforcing complex constraints
- Maintaining derived data
- Replicating data

## Complex Query Questions

### 21. How do you find employees who earn more than their managers?

**Answer:**

```sql
SELECT e.name as employee_name, e.salary as employee_salary,
       m.name as manager_name, m.salary as manager_salary
FROM Employee e
JOIN Employee m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

### 22. How do you find the department with the highest average salary?

**Answer:**

```sql
SELECT d.name, AVG(e.salary) as avg_salary
FROM Department d
JOIN Employee e ON d.id = e.department_id
GROUP BY d.name
ORDER BY avg_salary DESC
LIMIT 1;
```

### 23. How do you calculate the cumulative distribution of salaries?

**Answer:**

```sql
SELECT salary,
       CUME_DIST() OVER (ORDER BY salary) as cumulative_dist
FROM Employee;
```

### 24. How do you find gaps in sequential data (like missing IDs)?

**Answer:**

```sql
WITH seq AS (
    SELECT MIN(id) as min_id, MAX(id) as max_id FROM table
),
numbers AS (
    SELECT generate_series(min_id, max_id) as id FROM seq
)
SELECT n.id
FROM numbers n
LEFT JOIN table t ON n.id = t.id
WHERE t.id IS NULL;
```

### 25. How do you swap male and female values in a single update statement?

**Answer:**

```sql
UPDATE Employee
SET gender = CASE
    WHEN gender = 'Male' THEN 'Female'
    WHEN gender = 'Female' THEN 'Male'
    ELSE gender
END;
```

## Performance Tuning Questions

### 26. How would you optimize a slow-running query?

**Answer:**

- Check execution plan to identify bottlenecks
- Add appropriate indexes
- Rewrite query to use more efficient joins
- Avoid SELECT \*, specify columns needed
- Consider denormalization for frequently accessed data
- Use query hints if necessary
- Update statistics

### 27. What is query execution plan and how do you read it?

**Answer:** A query execution plan shows how the database engine executes a
query. Key things to look for:

- Full table scans (usually bad)
- Index usage
- Join types (nested loops, hash joins, merge joins)
- Sort operations
- Estimated vs actual rows

### 28. What are covering indexes and how do they help?

**Answer:** A covering index includes all columns needed for a query, allowing
the database to satisfy the query without accessing the table. Benefits:

- Faster query execution
- Reduced I/O
- Less memory usage

## Scenario-Based Questions

### 29. How would you design a database for a social media platform?

**Answer:**

- Users table (user_id, name, email, etc.)
- Posts table (post_id, user_id, content, timestamp)
- Comments table (comment_id, post_id, user_id, content)
- Likes table (like_id, post_id/comment_id, user_id)
- Followers table (follower_id, followee_id)
- Messages table (message_id, sender_id, receiver_id, content)
- Proper indexing on foreign keys and frequently queried columns
- Consider partitioning for large tables like posts

### 30. How would you handle a database with millions of records that's performing poorly?

**Answer:**

- Analyze slow queries and optimize them
- Implement proper indexing strategy
- Consider partitioning large tables
- Implement caching for frequently accessed data
- Consider read replicas for reporting queries
- Archive old data that's rarely accessed
- Optimize database configuration parameters
- Consider sharding if appropriate
- Upgrade hardware if necessary

These questions cover a wide range of SQL concepts that are commonly tested in
technical interviews, from basic syntax to advanced database design and
optimization techniques.

**[⬆ Back to Top](#table-of-contents)**
