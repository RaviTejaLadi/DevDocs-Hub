# MongoDB Cheat Sheet

## Table of Contents

1. [Basic MongoDB Commands](#basic-mongodb-commands)
2. [CRUD Operations](#crud-operations)
3. [Query Operators](#query-operators)
4. [Update Operators](#update-operators)
5. [Aggregation](#aggregation)
6. [Indexing](#indexing)

## Basic MongoDB Commands

| Command                  | Description                               | Example                        |
| ------------------------ | ----------------------------------------- | ------------------------------ |
| `use <db>`               | Switches to or creates a database         | `use mydb`                     |
| `show dbs`               | Lists all databases                       | `show dbs`                     |
| `show collections`       | Lists collections in the current database | `show collections`             |
| `db.createCollection()`  | Creates a new collection                  | `db.createCollection("users")` |
| `db.<collection>.drop()` | Deletes a collection                      | `db.users.drop()`              |
| `db.dropDatabase()`      | Deletes the current database              | `db.dropDatabase()`            |

## CRUD Operations

| Operation  | Description                    | Example                                                           |
| ---------- | ------------------------------ | ----------------------------------------------------------------- |
| **Insert** | Adds documents to a collection | `db.users.insertOne({ name: "John", age: 30 })`                   |
|            | Insert multiple documents      | `db.users.insertMany([{ name: "Alice" }, { name: "Bob" }])`       |
| **Find**   | Retrieves documents            | `db.users.find()`                                                 |
|            | Find with filter               | `db.users.find({ age: { $gt: 25 } })`                             |
| **Update** | Modifies documents             | `db.users.updateOne({ name: "John" }, { $set: { age: 31 } })`     |
|            | Update multiple documents      | `db.users.updateMany({ age: { $lt: 30 } }, { $inc: { age: 1 } })` |
| **Delete** | Removes documents              | `db.users.deleteOne({ name: "John" })`                            |
|            | Delete multiple documents      | `db.users.deleteMany({ age: { $gt: 60 } })`                       |

## Query Operators

| Operator | Description                   | Example                                                    |
| -------- | ----------------------------- | ---------------------------------------------------------- |
| `$eq`    | Equal to                      | `db.users.find({ age: { $eq: 30 } })`                      |
| `$ne`    | Not equal to                  | `db.users.find({ age: { $ne: 30 } })`                      |
| `$gt`    | Greater than                  | `db.users.find({ age: { $gt: 25 } })`                      |
| `$lt`    | Less than                     | `db.users.find({ age: { $lt: 40 } })`                      |
| `$gte`   | Greater than or equal         | `db.users.find({ age: { $gte: 30 } })`                     |
| `$lte`   | Less than or equal            | `db.users.find({ age: { $lte: 30 } })`                     |
| `$in`    | Matches any value in an array | `db.users.find({ age: { $in: [25, 30, 35] } })`            |
| `$nin`   | Not in array                  | `db.users.find({ age: { $nin: [20, 25] } })`               |
| `$and`   | Logical AND                   | `db.users.find({ $and: [{ age: 30 }, { name: "John" }] })` |
| `$or`    | Logical OR                    | `db.users.find({ $or: [{ age: 30 }, { name: "Alice" }] })` |
| `$not`   | Negates a condition           | `db.users.find({ age: { $not: { $gt: 30 } } })`            |

## Update Operators

| Operator    | Description                      | Example                                                                       |
| ----------- | -------------------------------- | ----------------------------------------------------------------------------- |
| `$set`      | Sets a field’s value             | `db.users.updateOne({ name: "John" }, { $set: { age: 31 } })`                 |
| `$unset`    | Removes a field                  | `db.users.updateOne({ name: "John" }, { $unset: { age: "" } })`               |
| `$inc`      | Increments a field               | `db.users.updateOne({ name: "John" }, { $inc: { age: 1 } })`                  |
| `$push`     | Adds an element to an array      | `db.users.updateOne({ name: "John" }, { $push: { hobbies: "Reading" } })`     |
| `$pull`     | Removes element(s) from an array | `db.users.updateOne({ name: "John" }, { $pull: { hobbies: "Reading" } })`     |
| `$addToSet` | Adds element only if not present | `db.users.updateOne({ name: "John" }, { $addToSet: { hobbies: "Reading" } })` |

## Aggregation

| Stage      | Description        | Example                                                                        |
| ---------- | ------------------ | ------------------------------------------------------------------------------ |
| `$match`   | Filters documents  | `db.users.aggregate([{ $match: { age: { $gt: 25 } } }])`                       |
| `$group`   | Groups documents   | `db.users.aggregate([{ $group: { _id: "$department", count: { $sum: 1 } } }])` |
| `$sort`    | Sorts documents    | `db.users.aggregate([{ $sort: { age: -1 } }])`                                 |
| `$project` | Reshapes documents | `db.users.aggregate([{ $project: { name: 1, age: 1 } }])`                      |
| `$limit`   | Limits documents   | `db.users.aggregate([{ $limit: 5 }])`                                          |
| `$skip`    | Skips documents    | `db.users.aggregate([{ $skip: 10 }])`                                          |

## Indexing

| Command         | Description      | Example                             |
| --------------- | ---------------- | ----------------------------------- |
| `createIndex()` | Creates an index | `db.users.createIndex({ name: 1 })` |
| `getIndexes()`  | Lists indexes    | `db.users.getIndexes()`             |
| `dropIndex()`   | Deletes an index | `db.users.dropIndex("name_1")`      |

This cheat sheet covers essential MongoDB commands, CRUD operations, query
operators, update operators, aggregation, and indexing. Let me know if you'd
like any additions!

**[⬆ Back to Top](#table-of-contents)**
