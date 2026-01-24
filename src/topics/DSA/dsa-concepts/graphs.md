# 📊 Complete Guide to Graphs in JavaScript

## 📚 Table of Contents

1. [🔗 Directed vs. Undirected Graphs](#directed-vs-undirected-graphs)
2. [⚖️ Weighted vs. Unweighted Graphs](#️weighted-vs-unweighted-graphs)
3. [🗂️ Graph Representation: Adjacency List/Matrix](#️graph-representation-adjacency-listmatrix)
4. [🚶 Graph Traversals: BFS and DFS](#graph-traversals-bfs-and-dfs)
5. [📋 Topological Sorting](#topological-sorting)
6. [🌲 Minimum Spanning Tree](#minimum-spanning-tree)
7. [🛣️ Shortest Path Algorithms](#️shortest-path-algorithms)

---

## 🔗 Directed vs. Undirected Graphs

### Definition

**Directed Graph (Digraph)**: A graph where edges have a direction, like one-way
streets. You can only travel from node A to node B if there's a directed edge
from A to B.

**Undirected Graph**: A graph where edges have no direction, like two-way
streets. If you can go from A to B, you can also go from B to A.

### Key Characteristics

- **Directed**: Edges are ordered pairs (A, B) ≠ (B, A)
- **Undirected**: Edges are unordered pairs {A, B} = {B, A}
- **Time Complexity**: Same operations for both types
- **Space Complexity**: Directed graphs may use slightly more memory

### Visualization

```bash
Directed Graph:          Undirected Graph:
A -----> B               A ------ B
|        |               |        |
v        v               |        |
C -----> D               C ------ D
```

### Example

- **Directed**: Social media following (you follow someone doesn't mean they
  follow you back)
- **Undirected**: Friendship (if A is friends with B, then B is friends with A)

### Code Example

```javascript
class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);

    // For undirected graphs, add edge in both directions
    if (!this.isDirected) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
}

// Usage
const directedGraph = new Graph(true);
const undirectedGraph = new Graph(false);
```

### Common Pitfalls

- Forgetting to add edges in both directions for undirected graphs
- Assuming all graphs are undirected when solving problems

---

## ⚖️ Weighted vs. Unweighted Graphs

### Definition

**Weighted Graph**: Each edge has a numerical value (weight) representing cost,
distance, or any metric.

**Unweighted Graph**: All edges are considered equal with no associated values.

### Key Characteristics

- **Weighted**: Edges have associated costs/weights
- **Unweighted**: All edges treated equally
- **Storage**: Weighted graphs need extra space to store weights
- **Algorithms**: Some algorithms only work with weighted graphs

### Visualization

```bash
Weighted Graph:          Unweighted Graph:
A ---5--- B              A ------- B
|         |              |         |
3         2              |         |
|         |              |         |
C ---7--- D              C ------- D
```

### Example

- **Weighted**: Road networks (distances between cities), flight routes (costs)
- **Unweighted**: Social networks (friend connections), web page links

### Code Example

```javascript
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

// Usage
const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B', 5); // Edge with weight 5
```

### Common Pitfalls

- Using unweighted algorithms on weighted graphs
- Forgetting to handle negative weights in some algorithms

---

## 🗂️ Graph Representation: Adjacency List/Matrix

### Definition

**Adjacency List**: Each vertex stores a list of its connected vertices.

**Adjacency Matrix**: A 2D array where matrix[i][j] represents if there's an
edge between vertex i and j.

### Key Characteristics

| Aspect         | Adjacency List | Adjacency Matrix |
| -------------- | -------------- | ---------------- |
| **Space**      | O(V + E)       | O(V²)            |
| **Add Edge**   | O(1)           | O(1)             |
| **Check Edge** | O(V)           | O(1)             |
| **Best For**   | Sparse graphs  | Dense graphs     |

### Syntax/Implementation

```javascript
// Adjacency List
const adjacencyList = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A'],
  D: ['B'],
};

// Adjacency Matrix
const adjacencyMatrix = [
  [0, 1, 1, 0], // A connects to B, C
  [1, 0, 0, 1], // B connects to A, D
  [1, 0, 0, 0], // C connects to A
  [0, 1, 0, 0], // D connects to B
];
```

### Example

Think of it like storing contacts in your phone:

- **Adjacency List**: Each person has a list of their friends
- **Adjacency Matrix**: A grid showing all possible friendships (marked yes/no)

### Code Example

```javascript
class AdjacencyListGraph {
  constructor() {
    this.list = {};
  }

  addEdge(v1, v2) {
    this.list[v1] = this.list[v1] || [];
    this.list[v2] = this.list[v2] || [];
    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }
}

class AdjacencyMatrixGraph {
  constructor(size) {
    this.matrix = Array(size)
      .fill(null)
      .map(() => Array(size).fill(0));
    this.size = size;
  }

  addEdge(v1, v2) {
    this.matrix[v1][v2] = 1;
    this.matrix[v2][v1] = 1;
  }
}
```

### Common Pitfalls

- Using adjacency matrix for sparse graphs (wastes memory)
- Using adjacency list when you frequently check if edges exist

---

## 🚶 Graph Traversals: BFS and DFS

### Definition

**BFS (Breadth-First Search)**: Explores graph level by level, visiting all
neighbors before going deeper.

**DFS (Depth-First Search)**: Explores as far as possible along each branch
before backtracking.

### Key Characteristics

| Algorithm | Time     | Space | Data Structure  |
| --------- | -------- | ----- | --------------- |
| **BFS**   | O(V + E) | O(V)  | Queue           |
| **DFS**   | O(V + E) | O(V)  | Stack/Recursion |

### Visualization

```bash
Graph:    A
         / \
        B   C
       /     \
      D       E

BFS Order: A → B → C → D → E (level by level)
DFS Order: A → B → D → C → E (depth first)
```

### Example

- **BFS**: Finding shortest path in unweighted graphs, social network "degrees
  of separation"
- **DFS**: Maze solving, detecting cycles, topological sorting

### Code Example

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // BFS Implementation
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};

    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  // DFS Implementation (Recursive)
  dfs(start) {
    const result = [];
    const visited = {};

    const dfsHelper = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      });
    };

    dfsHelper(start);
    return result;
  }
}
```

### Common Pitfalls

- Forgetting to mark vertices as visited (causes infinite loops)
- Using DFS when you need shortest path (use BFS instead)
- Stack overflow with recursive DFS on large graphs

---

## 📋 Topological Sorting

### Definition

Arranging vertices in a directed acyclic graph (DAG) so that for every edge (u,
v), vertex u comes before v in the ordering.

### Key Characteristics

- **Time Complexity**: O(V + E)
- **Space Complexity**: O(V)
- **Requirement**: Only works on DAGs (no cycles)
- **Applications**: Course scheduling, build systems, dependency resolution

### Visualization

```bash
Graph:     A → B → D
           ↓     ↗
           C → E

Valid Topological Orders:
- A, C, B, E, D
- A, C, E, B, D
- A, B, C, E, D
```

### Example

Course prerequisites: You must take Calculus I before Calculus II, and Math
before Calculus I.

### Code Example

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Kahn's Algorithm (BFS-based)
  topologicalSort() {
    const inDegree = {};
    const queue = [];
    const result = [];

    // Initialize in-degree count
    for (let vertex in this.adjacencyList) {
      inDegree[vertex] = 0;
    }

    // Calculate in-degrees
    for (let vertex in this.adjacencyList) {
      this.adjacencyList[vertex].forEach((neighbor) => {
        inDegree[neighbor]++;
      });
    }

    // Find vertices with no incoming edges
    for (let vertex in inDegree) {
      if (inDegree[vertex] === 0) {
        queue.push(vertex);
      }
    }

    // Process vertices
    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      });
    }

    return result.length === Object.keys(this.adjacencyList).length
      ? result
      : [];
  }
}
```

### Common Pitfalls

- Trying to use on graphs with cycles
- Not handling disconnected components
- Forgetting that multiple valid orderings exist

---

## 🌲 Minimum Spanning Tree

### Definition

A subset of edges that connects all vertices with minimum total weight, forming
a tree (no cycles).

### Key Characteristics

**Prim's Algorithm**:

- Time: O(E log V) with priority queue
- Space: O(V)
- Starts from a vertex, grows tree gradually

**Kruskal's Algorithm**:

- Time: O(E log E) due to sorting
- Space: O(V) for Union-Find
- Considers all edges, uses Union-Find

### Visualization

```bash
Original Graph:      MST Result:
A ---1--- B          A ---1--- B
|    \    |          |
4     3   2          4
|      \  |          |
C ---5--- D          C
```

### Example

Connecting cities with minimum cable length, designing efficient network
infrastructure.

### Code Example

```javascript
// Prim's Algorithm
class PrimMST {
  constructor(graph) {
    this.graph = graph;
  }

  findMST() {
    const vertices = Object.keys(this.graph);
    const visited = new Set();
    const mst = [];
    let totalWeight = 0;

    // Start from first vertex
    visited.add(vertices[0]);

    while (visited.size < vertices.length) {
      let minEdge = { weight: Infinity };

      // Find minimum edge connecting visited to unvisited
      for (let vertex of visited) {
        for (let edge of this.graph[vertex]) {
          if (!visited.has(edge.node) && edge.weight < minEdge.weight) {
            minEdge = {
              from: vertex,
              to: edge.node,
              weight: edge.weight,
            };
          }
        }
      }

      // Add minimum edge to MST
      if (minEdge.weight !== Infinity) {
        mst.push(minEdge);
        totalWeight += minEdge.weight;
        visited.add(minEdge.to);
      }
    }

    return { mst, totalWeight };
  }
}

// Kruskal's Algorithm (simplified)
class KruskalMST {
  findMST(edges, vertices) {
    // Sort edges by weight
    edges.sort((a, b) => a.weight - b.weight);

    const parent = {};
    const rank = {};
    const mst = [];

    // Initialize Union-Find
    vertices.forEach((v) => {
      parent[v] = v;
      rank[v] = 0;
    });

    const find = (vertex) => {
      if (parent[vertex] !== vertex) {
        parent[vertex] = find(parent[vertex]);
      }
      return parent[vertex];
    };

    const union = (x, y) => {
      const rootX = find(x);
      const rootY = find(y);

      if (rootX !== rootY) {
        if (rank[rootX] < rank[rootY]) {
          parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
          parent[rootY] = rootX;
        } else {
          parent[rootY] = rootX;
          rank[rootX]++;
        }
        return true;
      }
      return false;
    };

    // Process edges
    for (let edge of edges) {
      if (union(edge.from, edge.to)) {
        mst.push(edge);
        if (mst.length === vertices.length - 1) break;
      }
    }

    return mst;
  }
}
```

### Common Pitfalls

- Forgetting that MST only works on connected graphs
- Not handling edge cases with equal weights
- Confusing MST with shortest path problems

---

## 🛣️ Shortest Path Algorithms

### Definition

Finding the path with minimum total weight between two vertices.

### Key Characteristics

| Algorithm          | Use Case                               | Time       | Handles Negative? |
| ------------------ | -------------------------------------- | ---------- | ----------------- |
| **Dijkstra**       | Single source, non-negative weights    | O(E log V) | No                |
| **Bellman-Ford**   | Single source, detects negative cycles | O(VE)      | Yes               |
| **Floyd-Warshall** | All pairs shortest path                | O(V³)      | Yes               |

### Syntax/Implementation

```javascript
// Dijkstra's basic structure
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const priorityQueue = new PriorityQueue();
  // Implementation details...
}
```

### Example

- **Dijkstra**: GPS navigation (roads have positive distances)
- **Bellman-Ford**: Currency exchange (can have negative rates)
- **Floyd-Warshall**: Finding shortest paths between all city pairs

### Code Example

```javascript
// Dijkstra's Algorithm
class DijkstraAlgorithm {
  findShortestPath(graph, start, end) {
    const distances = {};
    const previous = {};
    const visited = new Set();

    // Initialize distances
    for (let vertex in graph) {
      distances[vertex] = vertex === start ? 0 : Infinity;
      previous[vertex] = null;
    }

    while (visited.size < Object.keys(graph).length) {
      // Find unvisited vertex with minimum distance
      let current = null;
      let minDistance = Infinity;

      for (let vertex in distances) {
        if (!visited.has(vertex) && distances[vertex] < minDistance) {
          minDistance = distances[vertex];
          current = vertex;
        }
      }

      if (current === null) break;
      visited.add(current);

      // Update distances to neighbors
      graph[current].forEach((neighbor) => {
        if (!visited.has(neighbor.node)) {
          const newDistance = distances[current] + neighbor.weight;
          if (newDistance < distances[neighbor.node]) {
            distances[neighbor.node] = newDistance;
            previous[neighbor.node] = current;
          }
        }
      });
    }

    // Reconstruct path
    const path = [];
    let current = end;
    while (current !== null) {
      path.unshift(current);
      current = previous[current];
    }

    return {
      distance: distances[end],
      path: distances[end] === Infinity ? [] : path,
    };
  }
}

// Bellman-Ford Algorithm
class BellmanFordAlgorithm {
  findShortestPath(edges, vertices, start) {
    const distances = {};

    // Initialize distances
    vertices.forEach((vertex) => {
      distances[vertex] = vertex === start ? 0 : Infinity;
    });

    // Relax edges V-1 times
    for (let i = 0; i < vertices.length - 1; i++) {
      edges.forEach((edge) => {
        if (distances[edge.from] + edge.weight < distances[edge.to]) {
          distances[edge.to] = distances[edge.from] + edge.weight;
        }
      });
    }

    // Check for negative cycles
    let hasNegativeCycle = false;
    edges.forEach((edge) => {
      if (distances[edge.from] + edge.weight < distances[edge.to]) {
        hasNegativeCycle = true;
      }
    });

    return { distances, hasNegativeCycle };
  }
}

// Floyd-Warshall Algorithm
class FloydWarshallAlgorithm {
  findAllPairsShortestPath(graph) {
    const vertices = Object.keys(graph);
    const dist = {};

    // Initialize distance matrix
    vertices.forEach((i) => {
      dist[i] = {};
      vertices.forEach((j) => {
        if (i === j) {
          dist[i][j] = 0;
        } else {
          dist[i][j] = Infinity;
        }
      });
    });

    // Set direct edge distances
    for (let vertex in graph) {
      graph[vertex].forEach((edge) => {
        dist[vertex][edge.node] = edge.weight;
      });
    }

    // Floyd-Warshall main loop
    vertices.forEach((k) => {
      vertices.forEach((i) => {
        vertices.forEach((j) => {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        });
      });
    });

    return dist;
  }
}
```

### Common Pitfalls

- Using Dijkstra with negative weights (gives wrong results)
- Not checking for negative cycles in Bellman-Ford
- Forgetting that Floyd-Warshall needs O(V²) space
- Not handling unreachable vertices properly

---

## 🎯 Summary

Graphs are powerful data structures that model relationships and connections.
Choose the right representation and algorithm based on your specific needs:

- **Dense graphs**: Use adjacency matrix
- **Sparse graphs**: Use adjacency list
- **Shortest path with non-negative weights**: Dijkstra
- **Shortest path with negative weights**: Bellman-Ford
- **All pairs shortest path**: Floyd-Warshall
- **Minimum connection cost**: MST algorithms
- **Dependency ordering**: Topological sort

Remember to consider time and space complexity when selecting algorithms for
your use case! 🚀
