# Top 30 Coding Interview Questions and Answers

## Table of Contents

- [Basic Questions](#basic-questions)
- [Querying Questions](#querying-questions)
- [Update Operations](#update-operations)
- [Delete Operations](#delete-operations)
- [Indexing Questions](#indexing-questions)
- [Aggregation Questions](#aggregation-questions)
- [Advanced Questions](#advanced-questions)
- [Performance Questions](#performance-questions)
- [Schema Design Questions](#schema-design-questions)
- [Security Questions](#security-questions)

## Basic Questions

### 1. How do you create a new database in MongoDB?

```javascript
use databaseName
```

MongoDB creates a new database when you first store data in it. The `use`
command switches to the specified database.

### 2. How do you create a collection in MongoDB?

```javascript
db.createCollection('collectionName');
```

Or simply insert a document into a non-existent collection:

```javascript
db.collectionName.insertOne({ key: 'value' });
```

### 3. How do you insert a single document into a collection?

```javascript
db.collection.insertOne({
  name: 'John',
  age: 30,
  city: 'New York',
});
```

### 4. How do you insert multiple documents at once?

```javascript
db.collection.insertMany([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
]);
```

## Querying Questions

### 5. How do you find all documents in a collection?

```javascript
db.collection.find();
```

### 6. How do you find documents that match specific criteria?

```javascript
db.collection.find({ age: { $gt: 30 } });
```

This finds documents where age is greater than 30.

### 7. How do you find one document that matches criteria?

```javascript
db.collection.findOne({ name: 'John' });
```

### 8. How do you query with multiple conditions?

```javascript
db.collection.find({
  age: { $gt: 25 },
  city: 'New York',
});
```

### 9. How do you use OR conditions in queries?

```javascript
db.collection.find({
  $or: [{ age: { $lt: 20 } }, { age: { $gt: 30 } }],
});
```

## Update Operations

### 10. How do you update a single document?

```javascript
db.collection.updateOne({ name: 'John' }, { $set: { age: 31 } });
```

### 11. How do you update multiple documents?

```javascript
db.collection.updateMany({ city: 'New York' }, { $set: { state: 'NY' } });
```

### 12. How do you increment a field value?

```javascript
db.collection.updateOne({ name: 'John' }, { $inc: { age: 1 } });
```

### 13. How do you add an element to an array?

```javascript
db.collection.updateOne({ name: 'John' }, { $push: { hobbies: 'reading' } });
```

## Delete Operations

### 14. How do you delete a single document?

```javascript
db.collection.deleteOne({ name: 'John' });
```

### 15. How do you delete multiple documents?

```javascript
db.collection.deleteMany({ status: 'inactive' });
```

## Indexing Questions

### 16. How do you create an index?

```javascript
db.collection.createIndex({ name: 1 }); // 1 for ascending, -1 for descending
```

### 17. How do you create a compound index?

```javascript
db.collection.createIndex({ name: 1, age: -1 });
```

### 18. How do you list all indexes on a collection?

```javascript
db.collection.getIndexes();
```

## Aggregation Questions

### 19. How do you use the aggregation framework?

```javascript
db.collection.aggregate([
  { $match: { status: 'A' } },
  { $group: { _id: '$cust_id', total: { $sum: '$amount' } } },
]);
```

### 20. How do you group documents by a field?

```javascript
db.collection.aggregate([
  { $group: { _id: '$department', count: { $sum: 1 } } },
]);
```

### 21. How do you sort documents in aggregation?

```javascript
db.collection.aggregate([{ $sort: { age: -1 } }]);
```

## Advanced Questions

### 22. How do you perform a text search?

First create a text index:

```javascript
db.collection.createIndex({ description: 'text' });
```

Then search:

```javascript
db.collection.find({ $text: { $search: 'coffee' } });
```

### 23. How do you use $lookup (similar to SQL join)?

```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: 'customers',
      localField: 'customer_id',
      foreignField: '_id',
      as: 'customer_info',
    },
  },
]);
```

### 24. How do you use transactions in MongoDB?

```javascript
const session = db.getMongo().startSession();
session.startTransaction();
try {
  const collection = session.getDatabase('db').collection('col');
  collection.insertOne({ doc: 1 });
  collection.updateOne({ doc: 1 }, { $set: { updated: true } });
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
} finally {
  session.endSession();
}
```

### 25. How do you handle replica sets in code?

```javascript
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://host1:port1,host2:port2/db?replicaSet=myReplicaSet';
const client = new MongoClient(uri, { useUnifiedTopology: true });
```

## Performance Questions

### 26. How do you explain a query's execution plan?

```javascript
db.collection.find({ name: 'John' }).explain('executionStats');
```

### 27. How do you optimize a slow query?

1. Use indexes on queried fields
2. Use projection to return only needed fields
3. Avoid $where and JavaScript expressions
4. Use covered queries (queries satisfied entirely by indexes)

## Schema Design Questions

### 28. When would you use embedding vs referencing?

Use embedding when:

- You have one-to-one or one-to-few relationships
- Data is accessed together frequently
- Data doesn't change frequently

Use referencing when:

- You have one-to-many or many-to-many relationships
- Embedded documents would grow without bound
- Data is accessed separately

### 29. How do you handle hierarchical data in MongoDB?

Common patterns:

- Parent references (store parent ID in child)
- Child references (store array of child IDs in parent)
- Array of ancestors (store full path in each document)
- Materialized paths (store path as string with separators)

## Security Questions

### 30. How do you create a user with specific permissions?

```javascript
db.createUser({
  user: 'appUser',
  pwd: 'password123',
  roles: [
    { role: 'readWrite', db: 'appDB' },
    { role: 'read', db: 'reporting' },
  ],
});
```

These questions cover a wide range of MongoDB concepts from basic CRUD
operations to advanced topics like transactions and performance optimization.
Being able to answer these and write the corresponding code will prepare you
well for most MongoDB coding interviews.

**[⬆ Back to Top](#table-of-contents)**
