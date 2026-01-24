# SQL Cheat Sheet

## Table of Contents

- [Basic SQL Commands](#basic-sql-commands)
- [SQL Clauses](#sql-clauses)
- [SQL Joins](#sql-joins)
- [SQL Functions](#sql-functions)
- [SQL Constraints](#sql-constraints)

## Basic SQL Commands

| Command        | Description                    | Example                                                  |
| -------------- | ------------------------------ | -------------------------------------------------------- |
| `SELECT`       | Retrieves data from a database | `SELECT * FROM employees;`                               |
| `INSERT`       | Adds new records to a table    | `INSERT INTO employees (name, age) VALUES ('John', 30);` |
| `UPDATE`       | Modifies existing records      | `UPDATE employees SET age = 31 WHERE name = 'John';`     |
| `DELETE`       | Removes records from a table   | `DELETE FROM employees WHERE age > 60;`                  |
| `CREATE TABLE` | Creates a new table            | `CREATE TABLE employees (id INT, name VARCHAR(100));`    |
| `ALTER TABLE`  | Modifies an existing table     | `ALTER TABLE employees ADD COLUMN salary DECIMAL(10,2);` |
| `DROP TABLE`   | Deletes a table                | `DROP TABLE employees;`                                  |

## SQL Clauses

| Clause     | Description                           | Example                                                                               |
| ---------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| `WHERE`    | Filters records based on conditions   | `SELECT * FROM employees WHERE age > 30;`                                             |
| `GROUP BY` | Groups rows by a column               | `SELECT department, COUNT(*) FROM employees GROUP BY department;`                     |
| `HAVING`   | Filters groups (used with `GROUP BY`) | `SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;` |
| `ORDER BY` | Sorts results                         | `SELECT * FROM employees ORDER BY salary DESC;`                                       |
| `LIMIT`    | Limits the number of rows returned    | `SELECT * FROM employees LIMIT 10;`                                                   |

## SQL Joins

| Join Type    | Description                                                   | Example                                                                                |
| ------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `INNER JOIN` | Returns matching rows from both tables                        | `SELECT e.name, d.name FROM employees e INNER JOIN departments d ON e.dept_id = d.id;` |
| `LEFT JOIN`  | Returns all rows from the left table + matches from the right | `SELECT e.name, d.name FROM employees e LEFT JOIN departments d ON e.dept_id = d.id;`  |
| `RIGHT JOIN` | Returns all rows from the right table + matches from the left | `SELECT e.name, d.name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.id;` |
| `FULL JOIN`  | Returns all rows when there’s a match in either table         | `SELECT e.name, d.name FROM employees e FULL JOIN departments d ON e.dept_id = d.id;`  |
| `CROSS JOIN` | Returns the Cartesian product of both tables                  | `SELECT e.name, d.name FROM employees e CROSS JOIN departments d;`                     |

## SQL Functions

| Function   | Description                      | Example                                                     |
| ---------- | -------------------------------- | ----------------------------------------------------------- |
| `COUNT()`  | Counts the number of rows        | `SELECT COUNT(*) FROM employees;`                           |
| `SUM()`    | Calculates the sum of values     | `SELECT SUM(salary) FROM employees;`                        |
| `AVG()`    | Calculates the average of values | `SELECT AVG(salary) FROM employees;`                        |
| `MIN()`    | Finds the minimum value          | `SELECT MIN(salary) FROM employees;`                        |
| `MAX()`    | Finds the maximum value          | `SELECT MAX(salary) FROM employees;`                        |
| `CONCAT()` | Combines strings                 | `SELECT CONCAT(first_name, ' ', last_name) FROM employees;` |
| `UPPER()`  | Converts text to uppercase       | `SELECT UPPER(name) FROM employees;`                        |
| `LOWER()`  | Converts text to lowercase       | `SELECT LOWER(name) FROM employees;`                        |

## SQL Constraints

| Constraint    | Description                               | Example                                                                                    |
| ------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------ |
| `PRIMARY KEY` | Uniquely identifies each record           | `CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(100));`                          |
| `FOREIGN KEY` | Ensures referential integrity             | `CREATE TABLE orders (id INT, emp_id INT, FOREIGN KEY (emp_id) REFERENCES employees(id));` |
| `NOT NULL`    | Ensures a column cannot be NULL           | `CREATE TABLE employees (id INT NOT NULL, name VARCHAR(100));`                             |
| `UNIQUE`      | Ensures all values in a column are unique | `CREATE TABLE employees (email VARCHAR(100) UNIQUE);`                                      |
| `CHECK`       | Ensures values meet a condition           | `CREATE TABLE employees (age INT CHECK (age >= 18));`                                      |
| `DEFAULT`     | Sets a default value                      | `CREATE TABLE employees (hire_date DATE DEFAULT CURRENT_DATE);`                            |

This cheat sheet covers the most essential SQL commands, clauses, joins,
functions, and constraints. Let me know if you'd like any additions!

**[⬆ Back to Top](#table-of-contents)**
