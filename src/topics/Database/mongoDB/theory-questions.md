# Top 30 Theory Interview Questions and Answers

## Table of Contents

- [Fundamentals](#fundamentals)
- [Data Modeling](#data-modeling)
- [Indexing](#indexing)
- [Performance](#performance)
- [Aggregation](#aggregation)
- [Replication and Sharding](#replication-and-sharding)
- [Transactions](#transactions)
- [Security](#security)
- [Administration](#administration)
- [Advanced Concepts](#advanced-concepts)
- [Optimization](#optimization)
- [Miscellaneous](#miscellaneous)

## Fundamentals

### 1. What is MongoDB?

**Answer:** MongoDB is a document-oriented NoSQL database that stores data in
flexible, JSON-like documents. It provides high performance, high availability,
and easy scalability by working on collections and documents rather than tables
and rows as in relational databases.

### 2. What are the key features of MongoDB?

**Answer:**

- Document-oriented storage (BSON/JSON format)
- Full index support
- Replication and high availability
- Auto-sharding for horizontal scaling
- Rich query language
- Aggregation framework
- GridFS for large file storage

### 3. Explain the difference between MongoDB and RDBMS.

**Answer:** | MongoDB | RDBMS | |---------|-------| | Document-oriented |
Table-oriented | | No schema | Fixed schema | | No joins | Supports joins | |
Horizontal scaling | Vertical scaling | | Dynamic queries | Complex queries | |
BSON/JSON format | Row/column format |

### 4. What is a Document in MongoDB?

**Answer:** A document is a basic unit of data in MongoDB, similar to a row in
RDBMS. It's stored in BSON (Binary JSON) format and consists of key-value pairs.
Documents can contain nested structures and arrays.

### 5. What is a Collection in MongoDB?

**Answer:** A collection is a group of MongoDB documents, similar to a table in
RDBMS. Collections don't enforce a schema, so documents within a collection can
have different fields.

## Data Modeling

### 6. What are the different data modeling approaches in MongoDB?

**Answer:**

1. **Embedded Data Model:** Stores related data in a single document (good for
   one-to-one or one-to-few relationships)
2. **Referenced Data Model:** Uses references (like foreign keys) to link
   related data (good for one-to-many or many-to-many relationships)

### 7. When would you choose embedded vs. referenced documents?

**Answer:**

- **Embedded** when:
  - Data is frequently accessed together
  - One-to-one or one-to-few relationships
  - Data doesn't change frequently
- **Referenced** when:
  - Data relationships are one-to-many or many-to-many
  - Embedded would cause duplication
  - Data changes frequently

## Indexing

### 8. What is indexing in MongoDB?

**Answer:** Indexing is a technique to improve query performance by creating
special data structures that store a small portion of the collection's data in
an easy-to-traverse form.

### 9. What types of indexes does MongoDB support?

**Answer:**

- Single field index
- Compound index
- Multikey index (for array fields)
- Text index (for text search)
- Geospatial index
- Hashed index
- Unique index
- Sparse index
- TTL index (for automatic expiration)
- Partial index
- Wildcard index

### 10. What is the difference between a covered query and a non-covered query?

**Answer:**

- **Covered query:** All fields in the query are part of an index, and all
  fields returned are in the same index. MongoDB can fulfill the query using
  only the index without examining documents.
- **Non-covered query:** MongoDB needs to examine documents to return results,
  which is slower.

## Performance

### 11. How can you improve MongoDB performance?

**Answer:**

- Create appropriate indexes
- Use projection to return only necessary fields
- Use covered queries when possible
- Optimize schema design
- Use sharding for horizontal scaling
- Use appropriate hardware (SSD, enough RAM)
- Monitor and optimize queries using explain()

### 12. What is the explain() method in MongoDB?

**Answer:** The explain() method provides information on query execution,
including query plan, index usage, and execution statistics. It helps in
analyzing and optimizing queries.

## Aggregation

### 13. What is the aggregation framework in MongoDB?

**Answer:** The aggregation framework is a powerful tool for data processing
that allows you to transform and combine documents in a collection through a
pipeline of stages (like $match, $group, $sort, etc.).

### 14. Name some common aggregation pipeline stages.

**Answer:**

- $match: Filters documents
- $project: Reshapes documents
- $group: Groups documents by expression
- $sort: Sorts documents
- $skip: Skips documents
- $limit: Limits documents
- $unwind: Deconstructs array fields
- $lookup: Performs a left outer join

## Replication and Sharding

### 15. What is replication in MongoDB?

**Answer:** Replication is the process of synchronizing data across multiple
servers to provide redundancy and high availability. A replica set is a group of
MongoDB instances that maintain the same data set.

### 16. What is a replica set in MongoDB?

**Answer:** A replica set is a group of MongoDB servers that maintain the same
data set, providing redundancy and high availability. It typically consists of:

- One primary node (handles all write operations)
- One or more secondary nodes (replicate primary's data)
- Optional arbiter (votes in elections but doesn't store data)

### 17. What is sharding in MongoDB?

**Answer:** Sharding is a method for distributing data across multiple machines
to support deployments with very large data sets and high throughput operations.
It partitions data into ranges (range-based) or hashes (hash-based) across
shards.

### 18. What are the components of a sharded cluster?

**Answer:**

- **Shards:** Store the data (each shard can be a replica set)
- **Config servers:** Store metadata and configuration
- **Query routers (mongos):** Route operations to appropriate shards

## Transactions

### 19. Does MongoDB support transactions?

**Answer:** Yes, MongoDB supports multi-document ACID transactions starting from
version 4.0 (for replica sets) and 4.2 (for sharded clusters). Transactions
allow operations across multiple documents to be executed as a single atomic
unit.

## Security

### 20. What security features does MongoDB offer?

**Answer:**

- Authentication (SCRAM, x.509, LDAP, Kerberos)
- Authorization (role-based access control)
- Encryption at rest
- TLS/SSL encryption for network traffic
- Auditing
- Field-level encryption (client-side)

## Administration

### 21. What tools are available for MongoDB administration?

**Answer:**

- mongodump/mongorestore (backup/restore)
- mongoimport/mongoexport (import/export data)
- mongostat/mongotop (monitoring)
- MongoDB Compass (GUI)
- Ops Manager (enterprise tool)
- Atlas (cloud service)

### 22. How do you backup data in MongoDB?

**Answer:**

- Use mongodump for binary backups
- Use filesystem snapshots
- Use MongoDB Atlas backup for cloud deployments
- Use Ops Manager for enterprise deployments

## Advanced Concepts

### 23. What is GridFS in MongoDB?

**Answer:** GridFS is a specification for storing and retrieving files that
exceed the BSON document size limit of 16MB. It divides files into chunks
(default 255KB) and stores them in two collections: fs.files (metadata) and
fs.chunks (data).

### 24. What is the difference between find() and findOne() in MongoDB?

**Answer:**

- find() returns a cursor to all matching documents
- findOne() returns the first matching document (or null if none found)

### 25. What is the ObjectId in MongoDB?

**Answer:** ObjectId is a 12-byte unique identifier typically used as the \_id
field in documents. It consists of:

- 4 bytes timestamp
- 5 bytes random value
- 3 bytes incrementing counter

## Optimization

### 26. How do you handle slow queries in MongoDB?

**Answer:**

- Use explain() to analyze the query plan
- Create appropriate indexes
- Optimize schema design
- Use projection to limit returned fields
- Consider query restructuring
- Monitor using database profiler

### 27. What is the MongoDB profiler and how does it work?

**Answer:** The MongoDB profiler collects detailed information about database
operations. It has three levels:

- 0: Off
- 1: Log slow operations (threshold configurable)
- 2: Log all operations

## Miscellaneous

### 28. What is the difference between MongoDB and CouchDB?

**Answer:** | MongoDB | CouchDB | |---------|---------| | Uses BSON documents |
Uses JSON documents | | Master-slave replication | Multi-master replication | |
Rich query language | Map-reduce queries | | Better for high write loads |
Better for offline-first apps |

### 29. What are some limitations of MongoDB?

**Answer:**

- No joins (must handle in application or use $lookup)
- Document size limit (16MB)
- Transactions can impact performance
- Memory usage can be high
- Not ideal for complex transactions across many documents

### 30. When would you not choose MongoDB?

**Answer:**

- When you need complex transactions across many tables/documents
- For applications requiring complex joins
- When your data is highly relational
- For applications requiring strong schema enforcement at database level
- When your team has strong RDBMS expertise but no MongoDB experience

**[⬆ Back to Top](#table-of-contents)**
