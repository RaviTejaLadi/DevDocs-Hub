# React Hook Form Implementation with TypeScript and Zod

## Table of Contents

- [What is React Hook Form?](#what-is-react-hook-form?)
- [What is Zod?](#what-is-zod?)
- [Why Use TypeScript + Zod + React Hook Form?](#why-use-typescript-+-zod-+-react-hook-form?)
- [Installation](#installation)
- [Basic Syntax](#basic-syntax)
- [Usage](#usage)
- [Integrating React Hook Form with Zod](#integrating-react-hook-form-with-zod)
- [Example: Simple Form Validation](#example:-simple-form-validation)
- [Example: Nested Objects + Arrays](#example:-nested-objects-+-arrays)
- [Common Pitfalls](#common-pitfalls)
- [Key Features and Best Practices:](#key-features-and-best-practices:)
- [Conclusion](#conclusion)

---

## What is React Hook Form?

**React Hook Form (RHF)** is a lightweight, performant library for managing
forms in React using hooks.

✅ **Key Features:**

- Minimal re-rendering
- Uncontrolled inputs by default
- Tiny bundle size
- Integrates easily with validation libraries

---

## What is Zod?

**Zod** is a TypeScript-first schema validation library.

✅ **Key Features:**

- Type-safe validation
- Generates inferred TypeScript types from schemas
- Declarative and expressive

---

## Why Use TypeScript + Zod + React Hook Form?

👉 Together they provide:

- **Type-safe forms** (you catch mistakes at compile time)
- **Robust validation** (with Zod’s declarative API)
- **Cleaner code** (no need for separate interface + validation logic)

---

## Installation

```bash
npm install react-hook-form zod @hookform/resolvers
# OR
yarn add react-hook-form zod @hookform/resolvers
```

---

## Basic Syntax

### **React Hook Form + TypeScript**

```tsx
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
};

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormValues>();

const onSubmit: SubmitHandler<FormValues> = (data) => {
  console.log(data);
};
```

---

### **React Hook Form + Zod + TypeScript**

```tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

type FormValues = z.infer<typeof schema>;

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormValues>({
  resolver: zodResolver(schema),
});
```

---

## Usage

### **1️⃣ Register fields**

```tsx
<input {...register("name")} />
<p>{errors.name?.message}</p>
```

---

### **2️⃣ Handle submit**

```tsx
<form onSubmit={handleSubmit(onSubmit)}>{/* inputs */}</form>
```

---

### **3️⃣ Access validation messages**

```tsx
<p>{errors.email?.message}</p>
```

---

## Example: Simple Form Validation

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

type FormValues = z.infer<typeof schema>;

export const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register('name')} />
      <p>{errors.name?.message}</p>

      <input placeholder="Email" {...register('email')} />
      <p>{errors.email?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
};
```

---

## Example: Nested Objects + Arrays

```tsx
const schema = z.object({
  user: z.object({
    name: z.string().min(1, 'Name is required'),
    age: z.number().min(18, 'Must be at least 18'),
  }),
  tags: z.array(z.string()).min(1, 'At least one tag required'),
});

type FormValues = z.infer<typeof schema>;

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormValues>({
  resolver: zodResolver(schema),
});
```

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
  <input placeholder="Name" {...register('user.name')} />
  <p>{errors.user?.name?.message}</p>

  <input type="number" {...register('user.age', { valueAsNumber: true })} />
  <p>{errors.user?.age?.message}</p>

  <input placeholder="Tag 1" {...register('tags.0')} />
  <p>{errors.tags?.[0]?.message}</p>

  <button type="submit">Submit</button>
</form>
```

---

## comprehensive Example

Here's a comprehensive form implementation using React Hook Form and Zod for
validation, following best practices:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define validation schema with Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  age: z.number().min(18, {
    message: 'You must be at least 18 years old.',
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions.',
  }),
  subscription: z.enum(['free', 'pro', 'enterprise']),
  notifications: z.enum(['email', 'sms', 'none']).array().nonempty({
    message: 'Please select at least one notification method.',
  }),
  bio: z
    .string()
    .max(500, {
      message: 'Bio must not exceed 500 characters.',
    })
    .optional(),
  avatar: z.instanceof(FileList).optional(),
  birthday: z.date().refine((date) => date < new Date(), {
    message: 'Birthday must be in the past.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ComprehensiveForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subscription: 'free',
      notifications: [],
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    // Reset form after submission
    reset();
  };

  // Watch password value to implement confirm password validation
  const password = watch('password');

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Text Input */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            {...register('username')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password (custom validation) */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              validate: (value) =>
                value === password || 'The passwords do not match',
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Number Input */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register('age', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
          )}
        </div>

        {/* Date Input */}
        <div>
          <label
            htmlFor="birthday"
            className="block text-sm font-medium text-gray-700"
          >
            Birthday
          </label>
          <input
            id="birthday"
            type="date"
            {...register('birthday', { valueAsDate: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.birthday && (
            <p className="mt-1 text-sm text-red-600">
              {errors.birthday.message}
            </p>
          )}
        </div>

        {/* Select Dropdown */}
        <div>
          <label
            htmlFor="subscription"
            className="block text-sm font-medium text-gray-700"
          >
            Subscription Plan
          </label>
          <select
            id="subscription"
            {...register('subscription')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          >
            <option value="free">Free</option>
            <option value="pro">Pro ($9.99/month)</option>
            <option value="enterprise">Enterprise ($29.99/month)</option>
          </select>
          {errors.subscription && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subscription.message}
            </p>
          )}
        </div>

        {/* Checkbox Group */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notification Preferences
          </label>
          <div className="space-y-2">
            {['email', 'sms', 'none'].map((method) => (
              <div key={method} className="flex items-center">
                <input
                  type="checkbox"
                  id={`notifications.${method}`}
                  value={method}
                  {...register('notifications')}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor={`notifications.${method}`}
                  className="ml-2 block text-sm text-gray-700"
                >
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </label>
              </div>
            ))}
          </div>
          {errors.notifications && (
            <p className="mt-1 text-sm text-red-600">
              {errors.notifications.message}
            </p>
          )}
        </div>

        {/* Single Checkbox */}
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            {...register('terms')}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>
        {errors.terms && (
          <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
        )}

        {/* Textarea */}
        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            id="bio"
            {...register('bio')}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.bio && (
            <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
          )}
        </div>

        {/* File Input */}
        <div>
          <label
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-700"
          >
            Avatar
          </label>
          <input
            id="avatar"
            type="file"
            {...register('avatar')}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {errors.avatar && (
            <p className="mt-1 text-sm text-red-600">{errors.avatar.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
```

---

## Common Pitfalls

- **Missing `valueAsNumber`** → numeric inputs come as strings
- **Nested object registration** → always use dot notation (e.g. `"user.name"`)
- **Dynamic arrays** → use `useFieldArray`
- **Zod doesn’t run validation on change by default** → you may want
  `mode: 'onChange'`

---

## Key Features and Best Practices:

1. **Type Safety**:

   - Uses TypeScript with inferred types from Zod schema
   - Strongly typed form values and validation

2. **Validation**:

   - Comprehensive validation with Zod
   - Custom validation for confirm password field
   - Proper error messages for each field

3. **Form Handling**:

   - Proper loading state during submission
   - Form reset after successful submission
   - Value watching for dependent validation

4. **Input Types**:

   - Text inputs (username, email, password)
   - Number input (age)
   - Date input (birthday)
   - Select dropdown (subscription)
   - Checkbox group (notifications)
   - Single checkbox (terms)
   - Textarea (bio)
   - File input (avatar)

5. **Accessibility**:

   - Proper label associations with `htmlFor` and `id`
   - Focus states for interactive elements
   - Clear error messages

6. **UI/UX**:

   - Disabled submit button during submission
   - Loading state feedback
   - Responsive design

7. **Organization**:
   - Logical grouping of related form elements
   - Consistent styling
   - Clean component structure

To use this form, you'll need to install the required dependencies:

```bash
npm install react-hook-form @hookform/resolvers zod
```

---

## Conclusion

✅ React Hook Form + TypeScript + Zod gives you:

- Type-safe, declarative validation
- Cleaner code
- Less boilerplate
- Automatic TypeScript type generation

**[⬆ Back to Top](#table-of-contents)**
