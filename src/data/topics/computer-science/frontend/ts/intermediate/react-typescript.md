# React TypeScript

## Typed Component Props

```tsx
type Props = { title: string };

function Header({ title }: Props) {
  return <h1>{title}</h1>;
}
```

## Hooks Typing

```tsx
const [count, setCount] = useState<number>(0);
const inputRef = useRef<HTMLInputElement>(null);
```

## Event Typing

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
}
```

## Interview Angle

Interviewers expect correct typing of props, events, and state transitions.
