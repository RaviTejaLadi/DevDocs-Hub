# **5️⃣ Dependency Inversion Principle (DIP)**

## ⬆️ Definition

High-level modules should not depend on low-level modules. Both should depend on
abstractions.

## 🌟 Frontend Application

Components should depend on abstractions (interfaces, contracts) rather than
concrete implementations.

## ❌ Bad Example

```jsx
// Component directly depends on API implementation
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Direct dependency on fetch API
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <div>Loading...</div> : null}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

## ✅ Good Example

```jsx
// Abstract data service interface
const createUserService = (apiClient) => ({
  getUsers: () => apiClient.get('/users'),
  getUserById: (id) => apiClient.get(`/users/${id}`),
  createUser: (userData) => apiClient.post('/users', userData),
  updateUser: (id, userData) => apiClient.put(`/users/${id}`, userData),
  deleteUser: (id) => apiClient.delete(`/users/${id}`),
});

// API client abstraction
const apiClient = {
  get: (url) => fetch(url).then((res) => res.json()),
  post: (url, data) =>
    fetch(url, { method: 'POST', body: JSON.stringify(data) }).then((res) =>
      res.json()
    ),
  put: (url, data) =>
    fetch(url, { method: 'PUT', body: JSON.stringify(data) }).then((res) =>
      res.json()
    ),
  delete: (url) => fetch(url, { method: 'DELETE' }).then((res) => res.json()),
};

// Component depends on abstraction
function UserList({ userService = createUserService(apiClient) }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    userService
      .getUsers()
      .then(setUsers)
      .catch((error) => console.error('Error:', error))
      .finally(() => setLoading(false));
  }, [userService]);

  return (
    <div>
      {loading ? <div>Loading...</div> : null}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// Easy to test with mock service
const mockUserService = {
  getUsers: () =>
    Promise.resolve([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ]),
};

// Easy to switch implementations
const graphqlUserService = createUserService(graphqlClient);
const localStorageUserService = createUserService(localStorageClient);
```

## 🚀 Key Benefits

- **Easy testing** - Mock dependencies easily
- **Flexible implementations** - Switch between different data sources
- **Reduced coupling** - Components don't depend on specific implementations
- **Better maintainability** - Changes to implementation don't affect components

## 🛠️ Implementation Tips

- Create service abstractions for external dependencies
- Use dependency injection through props or context
- Implement repository patterns for data access
- Use custom hooks to abstract complex logic
- Create adapter patterns for third-party libraries

## 🎯 Real-world Applications

- **API clients** - Abstract REST, GraphQL, or WebSocket implementations
- **Storage services** - Switch between localStorage, sessionStorage, or cloud
  storage
- **Authentication** - Abstract different auth providers (OAuth, JWT, etc.)
- **Analytics** - Switch between different tracking services
- **Payment processing** - Abstract different payment gateways
