# Introduction to SQL

## Table of Contents

- [What is SQL?](#what-is-sql?)
- [Key Characteristics](#key-characteristics)
- [Basic SQL Commands Categories](#basic-sql-commands-categories)
  - [1. Data Query Language (DQL)](<#1.-data-query-language-(dql)>)
  - [2. Data Manipulation Language (DML)](<#2.-data-manipulation-language-(dml)>)
  - [3. Data Definition Language (DDL)](<#3.-data-definition-language-(ddl)>)
  - [4. Data Control Language (DCL)](<#4.-data-control-language-(dcl)>)
  - [5. Transaction Control Language (TCL)](<#5.-transaction-control-language-(tcl)>)
- [Basic SQL Syntax Examples](#basic-sql-syntax-examples)
- [Why Learn SQL?](#why-learn-sql?)

## What is SQL?

SQL (Structured Query Language) is a standard programming language designed for:

- Managing data in relational database management systems (RDBMS)
- Storing, retrieving, manipulating, and deleting data
- Defining and modifying database structures

SQL is pronounced as "sequel" or by saying each letter "S-Q-L".

## Key Characteristics

1. **Declarative language**: You specify what you want, not how to get it
2. **Standardized**: ANSI/ISO standard (though vendors add extensions)
3. **Used with relational databases**: MySQL, PostgreSQL, SQL Server, Oracle,
   etc.
4. **Powerful yet simple**: Basic queries can be learned quickly

## Basic SQL Commands Categories

### 1. Data Query Language (DQL)

- `SELECT`: Retrieve data from databases

### 2. Data Manipulation Language (DML)

- `INSERT`: Add new records
- `UPDATE`: Modify existing records
- `DELETE`: Remove records

### 3. Data Definition Language (DDL)

- `CREATE`: Make new database objects (tables, views, etc.)
- `ALTER`: Modify database structures
- `DROP`: Remove database objects

### 4. Data Control Language (DCL)

- `GRANT`: Give user privileges
- `REVOKE`: Remove user privileges

### 5. Transaction Control Language (TCL)

- `COMMIT`: Save transaction changes
- `ROLLBACK`: Undo transaction changes

## Basic SQL Syntax Examples

```sql
-- Create a table
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

-- Insert data
INSERT INTO employees (id, name, department, salary)
VALUES (1, 'John Smith', 'Marketing', 75000.00);

-- Query data
SELECT name, salary FROM employees WHERE department = 'Marketing';

-- Update data
UPDATE employees SET salary = 80000.00 WHERE id = 1;

-- Delete data
DELETE FROM employees WHERE id = 1;
```

## Why Learn SQL?

- Used by nearly all organizations that store data
- Essential for data analysis, business intelligence, and backend development
- One of the most in-demand technical skills
- Foundation for working with big data technologies

SQL remains one of the most valuable skills for anyone working with data, from
analysts to software developers to data scientists.

**[⬆ Back to Top](#table-of-contents)**
