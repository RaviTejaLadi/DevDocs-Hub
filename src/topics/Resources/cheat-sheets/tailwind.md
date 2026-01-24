# Tailwind CSS Cheat Sheet

## Table of Contents

- [Layout](#layout)
- [Spacing (Padding & Margin)](#spacing-padding-and-margin)
- [Typography](#typography)
- [Colors](#colors)
- [Borders](#borders)
- [Flexbox & Grid](#flexbox-and-grid)
- [Sizing](#sizing)
- [Effects & Filters](#effects-and-filters)
- [Transitions & Animations](#transitions-and-animations)
- [Responsive Design](#responsive-design)
- [Pseudo-classes & States](#pseudo-classes-and-states)

## Layout

| Class          | Description                                |
| -------------- | ------------------------------------------ |
| `container`    | Centers content with max-width breakpoints |
| `mx-auto`      | Horizontal margin auto (centering)         |
| `block`        | Displays as block                          |
| `inline-block` | Displays as inline-block                   |
| `inline`       | Displays as inline                         |
| `flex`         | Flexbox container                          |
| `grid`         | CSS Grid container                         |
| `hidden`       | `display: none`                            |
| `static`       | Position static                            |
| `fixed`        | Position fixed                             |
| `absolute`     | Position absolute                          |
| `relative`     | Position relative                          |
| `sticky`       | Position sticky                            |

---

## Spacing (Padding and Margin)

| Class           | Description          |
| --------------- | -------------------- |
| `p-0` to `p-96` | Padding (0 to 24rem) |
| `px-{size}`     | Padding left & right |
| `py-{size}`     | Padding top & bottom |
| `pt-{size}`     | Padding top          |
| `pb-{size}`     | Padding bottom       |
| `pl-{size}`     | Padding left         |
| `pr-{size}`     | Padding right        |
| `m-0` to `m-96` | Margin (0 to 24rem)  |
| `mx-{size}`     | Margin left & right  |
| `my-{size}`     | Margin top & bottom  |
| `mt-{size}`     | Margin top           |
| `mb-{size}`     | Margin bottom        |
| `ml-{size}`     | Margin left          |
| `mr-{size}`     | Margin right         |
| `-m-{size}`     | Negative margin      |

---

## Typography

| Class                                   | Description                 |
| --------------------------------------- | --------------------------- |
| `text-xs` to `text-9xl`                 | Font size (0.75rem to 8rem) |
| `font-thin` to `font-black`             | Font weight (100 to 900)    |
| `italic`                                | Italic text                 |
| `not-italic`                            | Normal text                 |
| `text-left`                             | Text align left             |
| `text-center`                           | Text align center           |
| `text-right`                            | Text align right            |
| `underline`                             | Underline text              |
| `line-through`                          | Strikethrough text          |
| `no-underline`                          | Remove underline            |
| `uppercase`                             | Uppercase text              |
| `lowercase`                             | Lowercase text              |
| `capitalize`                            | Capitalize text             |
| `normal-case`                           | Normal case                 |
| `leading-3` to `leading-10`             | Line height                 |
| `tracking-tighter` to `tracking-widest` | Letter spacing              |
| `whitespace-normal`                     | Normal whitespace           |
| `whitespace-nowrap`                     | No wrapping                 |
| `break-normal`                          | Normal word break           |
| `break-words`                           | Break long words            |
| `break-all`                             | Break all words             |

---

## Colors

| Class                       | Description                             |
| --------------------------- | --------------------------------------- |
| `text-{color}-{shade}`      | Text color (e.g., `text-blue-500`)      |
| `bg-{color}-{shade}`        | Background color (e.g., `bg-red-300`)   |
| `border-{color}-{shade}`    | Border color (e.g., `border-green-600`) |
| `hover:bg-{color}-{shade}`  | Hover background color                  |
| `focus:bg-{color}-{shade}`  | Focus background color                  |
| `active:bg-{color}-{shade}` | Active background color                 |
| `from-{color}-{shade}`      | Gradient start color                    |
| `to-{color}-{shade}`        | Gradient end color                      |

---

## Borders

| Class                                          | Description               |
| ---------------------------------------------- | ------------------------- |
| `border`                                       | Default border (1px)      |
| `border-0` to `border-8`                       | Border width              |
| `border-t`, `border-b`, `border-l`, `border-r` | Border sides              |
| `rounded-none` to `rounded-full`               | Border radius             |
| `rounded-t-lg`, `rounded-br-xl`                | Directional border radius |
| `border-solid`                                 | Solid border              |
| `border-dashed`                                | Dashed border             |
| `border-dotted`                                | Dotted border             |
| `border-double`                                | Double border             |
| `border-none`                                  | No border                 |

---

## Flexbox and Grid

| Class             | Description            |
| ----------------- | ---------------------- |
| `flex-row`        | Flex direction row     |
| `flex-col`        | Flex direction column  |
| `flex-wrap`       | Wrap flex items        |
| `flex-nowrap`     | No wrapping            |
| `justify-start`   | Justify content start  |
| `justify-center`  | Justify content center |
| `justify-end`     | Justify content end    |
| `justify-between` | Space between          |
| `justify-around`  | Space around           |
| `items-start`     | Align items start      |
| `items-center`    | Align items center     |
| `items-end`       | Align items end        |
| `gap-{size}`      | Gap between items      |
| `grid-cols-{n}`   | Grid columns (1-12)    |
| `grid-rows-{n}`   | Grid rows (1-6)        |
| `col-span-{n}`    | Column span (1-12)     |
| `row-span-{n}`    | Row span (1-6)         |

---

## Sizing

| Class          | Description        |
| -------------- | ------------------ |
| `w-{size}`     | Width (0 to full)  |
| `h-{size}`     | Height (0 to full) |
| `min-w-{size}` | Minimum width      |
| `max-w-{size}` | Maximum width      |
| `min-h-{size}` | Minimum height     |
| `max-h-{size}` | Maximum height     |
| `w-full`       | Full width         |
| `h-full`       | Full height        |
| `w-screen`     | Viewport width     |
| `h-screen`     | Viewport height    |

---

## Effects and Filters

| Class                        | Description       |
| ---------------------------- | ----------------- |
| `shadow-sm` to `shadow-2xl`  | Box shadow        |
| `shadow-{color}`             | Colored shadow    |
| `opacity-0` to `opacity-100` | Opacity           |
| `blur-{size}`                | Blur effect       |
| `brightness-{value}`         | Brightness filter |
| `contrast-{value}`           | Contrast filter   |
| `grayscale`                  | Grayscale filter  |
| `invert`                     | Invert colors     |
| `sepia`                      | Sepia filter      |

---

## Transitions and Animations

| Class                                | Description         |
| ------------------------------------ | ------------------- |
| `transition`                         | Basic transition    |
| `duration-{ms}`                      | Transition duration |
| `ease-in`, `ease-out`, `ease-in-out` | Transition timing   |
| `delay-{ms}`                         | Transition delay    |
| `animate-spin`                       | Infinite spin       |
| `animate-ping`                       | Ping animation      |
| `animate-pulse`                      | Pulse animation     |
| `animate-bounce`                     | Bounce animation    |

---

## Responsive Design

| Prefix | Breakpoint |
| ------ | ---------- |
| `sm:`  | ≥640px     |
| `md:`  | ≥768px     |
| `lg:`  | ≥1024px    |
| `xl:`  | ≥1280px    |
| `2xl:` | ≥1536px    |

---

## Pseudo-classes and States

| Prefix         | Description    |
| -------------- | -------------- |
| `hover:`       | Hover state    |
| `focus:`       | Focus state    |
| `active:`      | Active state   |
| `disabled:`    | Disabled state |
| `group-hover:` | Parent hover   |
| `dark:`        | Dark mode      |

---

This cheat sheet covers most **Tailwind CSS** utilities. For more details, check
the [official docs](https://tailwindcss.com/docs). 🚀

**[⬆ Back to Top](#table-of-contents)**
