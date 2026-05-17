# **4️⃣ Interface Segregation Principle (ISP)**

## ✂️ Definition

No client should be forced to depend on methods it does not use.

## 🌟 Frontend Application

Components should not be forced to depend on props they don't need.

## ❌ Bad Example

```jsx
// Fat interface with too many props
function UserCard({
  user,
  onEdit,
  onDelete,
  onFollow,
  onUnfollow,
  onBlock,
  onReport,
  showEditButton,
  showDeleteButton,
  showFollowButton,
  showBlockButton,
  canEdit,
  canDelete,
  isFollowing,
  isBlocked,
}) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {canEdit && showEditButton && <button onClick={onEdit}>Edit</button>}
      {canDelete && showDeleteButton && (
        <button onClick={onDelete}>Delete</button>
      )}
      {showFollowButton && (
        <button onClick={isFollowing ? onUnfollow : onFollow}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      )}
      {showBlockButton && <button onClick={onBlock}>Block</button>}
    </div>
  );
}
```

## ✅ Good Example

```jsx
// Smaller, focused interfaces
function UserCard({ user, children }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {children}
    </div>
  );
}

function UserActions({ onEdit, onDelete }) {
  return (
    <div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

function SocialActions({ onFollow, onUnfollow, isFollowing }) {
  return (
    <button onClick={isFollowing ? onUnfollow : onFollow}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
}

function ModerationActions({ onBlock, onReport }) {
  return (
    <div>
      <button onClick={onBlock}>Block</button>
      <button onClick={onReport}>Report</button>
    </div>
  );
}

// Usage - only use what you need
function ProfilePage({ user }) {
  return (
    <UserCard user={user}>
      <UserActions onEdit={handleEdit} onDelete={handleDelete} />
    </UserCard>
  );
}

function PublicUserPage({ user }) {
  return (
    <UserCard user={user}>
      <SocialActions
        onFollow={handleFollow}
        onUnfollow={handleUnfollow}
        isFollowing={user.isFollowing}
      />
      <ModerationActions onBlock={handleBlock} onReport={handleReport} />
    </UserCard>
  );
}
```

## 🚀 Key Benefits

- **Cleaner components** - Only depend on what they actually need
- **Better reusability** - Focused components work in more contexts
- **Easier testing** - Fewer dependencies mean simpler tests
- **Reduced coupling** - Components are less dependent on each other

## 🛠️ Implementation Tips

- Break large prop interfaces into smaller, focused ones
- Use composition to combine functionality
- Create role-based component interfaces
- Avoid boolean props that control large feature sets
- Use render props or children for flexible composition

## 🎯 Real-world Applications

- **Data tables** - Separate column definitions, row actions, and pagination
- **Form components** - Split validation, formatting, and input handling
- **Navigation components** - Separate menu items, breadcrumbs, and user actions
- **Modal systems** - Separate content, actions, and configuration interfaces
