# Node.js Typing

## Install Types

```bash
npm install -D @types/node
```

## File System Example

```ts
import fs from 'fs';

const data = fs.readFileSync('file.txt', 'utf-8');
```

## Path Example

```ts
import path from 'path';

const filePath = path.join(__dirname, 'test.txt');
```

## Interview Angle

Node typing is common in full-stack/frontend build tooling interviews.
