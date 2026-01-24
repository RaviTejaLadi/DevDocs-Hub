# **Login Form with Validation**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

## JavaScript Versions

### 1. Using useState

```jsx
import React, { useState } from 'react';

const LoginFormUseState = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {
      email: '',
      password: '',
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert(`Logged in as ${formData.email}`);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login (useState)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '14px' }}>{errors.email}</div>
          )}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.password && (
            <div style={{ color: 'red', fontSize: '14px' }}>
              {errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: isSubmitting ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginFormUseState;
```

### 2. Using useReducer

```jsx
import React, { useReducer } from 'react';

const initialState = {
  formData: {
    email: '',
    password: '',
  },
  errors: {
    email: '',
    password: '',
  },
  isSubmitting: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };
    case 'SUBMIT_START':
      return {
        ...state,
        isSubmitting: true,
      };
    case 'SUBMIT_END':
      return {
        ...state,
        isSubmitting: false,
      };
    default:
      return state;
  }
};

const validateForm = (formData) => {
  const errors = {
    email: '',
    password: '',
  };
  let isValid = true;

  if (!formData.email) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
    isValid = false;
  }

  if (!formData.password) {
    errors.password = 'Password is required';
    isValid = false;
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
    isValid = false;
  }

  return { errors, isValid };
};

const LoginFormUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateForm(state.formData);

    dispatch({ type: 'SET_ERRORS', errors });

    if (isValid) {
      dispatch({ type: 'SUBMIT_START' });
      // Simulate API call
      setTimeout(() => {
        alert(`Logged in as ${state.formData.email}`);
        dispatch({ type: 'SUBMIT_END' });
      }, 1000);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login (useReducer)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {state.errors.email && (
            <div style={{ color: 'red', fontSize: '14px' }}>
              {state.errors.email}
            </div>
          )}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {state.errors.password && (
            <div style={{ color: 'red', fontSize: '14px' }}>
              {state.errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={state.isSubmitting}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: state.isSubmitting ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {state.isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginFormUseReducer;
```

## TypeScript Versions

### 1. Using useState

```tsx
import React, { useState } from 'react';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

const LoginFormUseState: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {
      email: '',
      password: '',
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert(`Logged in as ${formData.email}`);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login (useState)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '14px' }}>{errors.email}</div>
          )}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.password && (
            <div style={{ color: 'red', fontSize: '14px' }}>
              {errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: isSubmitting ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginFormUseState;
```

### 2. Using useReducer

```tsx
import React, { useReducer } from 'react';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

interface State {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
}

type Action =
  | { type: 'UPDATE_FIELD'; field: keyof FormData; value: string }
  | { type: 'SET_ERRORS'; errors: FormErrors }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_END' };

const initialState: State = {
  formData: {
    email: '',
    password: '',
  },
  errors: {
    email: '',
    password: '',
  },
  isSubmitting: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };
    case 'SUBMIT_START':
      return {
        ...state,
        isSubmitting: true,
      };
    case 'SUBMIT_END':
      return {
        ...state,
        isSubmitting: false,
      };
    default:
      return state;
  }
};

const validateForm = (
  formData: FormData
): { errors: FormErrors; isValid: boolean } => {
  const errors: FormErrors = {
    email: '',
    password: '',
  };
  let isValid = true;

  if (!formData.email) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
    isValid = false;
  }

  if (!formData.password) {
    errors.password = 'Password is required';
    isValid = false;
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
    isValid = false;
  }

  return { errors, isValid };
};

const LoginFormUseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name as keyof FormData, value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const { errors, isValid } = validateForm(state.formData);

    dispatch({ type: 'SET_ERRORS', errors });

    if (isValid) {
      dispatch({ type: 'SUBMIT_START' });
      // Simulate API call
      setTimeout(() => {
        alert(`Logged in as ${state.formData.email}`);
        dispatch({ type: 'SUBMIT_END' });
      }, 1000);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login (useReducer)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {state.errors.email && (
            <div style={{ color: 'red', fontSize: '14px' }}>
              {state.errors.email}
            </div>
          )}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          {state.errors.password && (
            <div style={{ color: 'red', fontSize: '14px' }}>
              {state.errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={state.isSubmitting}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: state.isSubmitting ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {state.isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginFormUseReducer;
```
