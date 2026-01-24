# Introduction to MongoDB

MongoDB is a popular NoSQL database that provides high performance, high
availability, and easy scalability. Unlike traditional relational databases that
use tables and rows, MongoDB uses a flexible, document-based data model.

## Key Features of MongoDB

1. **Document-Oriented**: Stores data in flexible JSON-like documents (BSON
   format)
2. **Schema-less**: Each document can have a different structure
3. **Scalability**: Horizontal scaling through sharding
4. **High Performance**: Indexing and rich queries
5. **Aggregation Framework**: Powerful data processing pipeline
6. **Replication**: High availability with replica sets

## Basic Concepts

- **Database**: A container for collections
- **Collection**: Equivalent to a table in RDBMS, contains documents
- **Document**: Basic unit of data (similar to a row in RDBMS)
- **Field**: A key-value pair in a document (similar to a column)
- **Embedded Documents**: Documents can contain other documents

## Example Document Structure

```json
{
  "_id": ObjectId("5f8d8a7f8c8f8b9a8d7c6b5a"),
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  },
  "hobbies": ["reading", "hiking", "photography"]
}
```

## Basic MongoDB Operations

### Create/Insert

```javascript
db.users.insertOne({
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
});
```

### Read/Query

```javascript
// Find all documents
db.users.find();

// Find with filter
db.users.find({ age: { $gt: 25 } });
```

### Update

```javascript
db.users.updateOne({ name: 'Alice' }, { $set: { age: 26 } });
```

### Delete

```javascript
db.users.deleteOne({ name: 'Alice' });
```

## When to Use MongoDB

- When you need high scalability
- For applications with evolving data schemas
- When working with hierarchical or unstructured data
- For high write loads
- For geographic distribution of data

MongoDB is widely used in modern web applications, mobile apps, content
management systems, and big data applications.
