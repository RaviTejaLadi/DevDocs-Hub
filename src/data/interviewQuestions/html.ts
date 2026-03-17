import type { InterviewQA } from './types';

/** Top 50 HTML Q&A from top-50-q-and-a.md — Part 1=entry, Part 2=junior, Part 3=mid, Part 4=senior, Part 5=expert */
export const htmlQuestions: InterviewQA[] = [
  // Part 1: The Absolute Basics (entry)
  {
    id: 'html-01',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'What does `<!DOCTYPE html>` do?',
    answer:
      'It is an instruction to the browser to inform it about the version of HTML used in the document. `<!DOCTYPE html>` triggers **Standard Mode**, ensuring the browser renders content according to modern HTML5 specifications. Without it, browsers may switch to **Quirks Mode** to emulate older browser behaviors, leading to layout issues.',
  },
  {
    id: 'html-02',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'Explain the difference between `display: none` and `visibility: hidden`.',
    answer:
      '`display: none` removes the element from the document flow entirely (it takes up no space). `visibility: hidden` hides the element visually, but it still occupies the same space in the layout.',
  },
  {
    id: 'html-03',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'What are "Void Elements" in HTML?',
    answer:
      'Elements that cannot have any child nodes (content) and do not require a closing tag. Examples include `<img>`, `<br>`, `<hr>`, `<input>`, and `<meta>`.',
  },
  {
    id: 'html-04',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'What is the difference between Block and Inline elements?',
    answer: [
      '- **Block:** Starts on a new line and takes up the full width available (e.g., `<div>`, `<p>`, `<h1>`).',
      '- **Inline:** Does not start on a new line and only takes as much width as necessary (e.g., `<span>`, `<a>`, `<img>`).',
    ].join('\n\n'),
  },
  {
    id: 'html-05',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'What are HTML5 semantic tags? Name three.',
    answer:
      'Tags that clearly describe their meaning to both the browser and the developer. Examples: `<header>`, `<footer>`, `<article>`, `<section>`, `<nav>`.',
  },
  {
    id: 'html-06',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'Why is it generally bad to use inline styles?',
    answer:
      'They make code hard to maintain (you must edit every element individually), they have extremely high specificity (hard to override), and they increase the file size of the HTML.',
  },
  {
    id: 'html-07',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'What is the `alt` attribute used for?',
    answer:
      'It provides alternative text for screen readers (accessibility) and is displayed if the image fails to load. It is also crucial for SEO.',
  },
  {
    id: 'html-08',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'How do you serve a page in multiple languages?',
    answer:
      'Use the `lang` attribute in the `<html>` tag (e.g., `<html lang="en">` or `<html lang="fr">`).',
  },
  {
    id: 'html-09',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'What is the difference between `<span>` and `<div>`?',
    answer:
      '`<div>` is a block-level element used for grouping larger sections of layout. `<span>` is an inline element used for grouping or styling small chunks of text or icons.',
  },
  {
    id: 'html-10',
    topicId: 'html',
    level: 'entry',
    questionType: 'theory',
    question: 'What is a "favicon"?',
    answer:
      'The small icon displayed in the browser tab next to the page title. It is linked via `<link rel="icon" href="...">`.',
  },
  // Part 2: Semantics & Structure (junior)
  {
    id: 'html-11',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'When would you use `<section>` vs `<article>`?',
    answer:
      'Use `<article>` for independent, self-contained content that makes sense on its own (e.g., a blog post, a news card). Use `<section>` for a thematic grouping of content, usually with a heading (e.g., "Contact Us" or "About" section).',
  },
  {
    id: 'html-12',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'Can you have multiple `<h1>` tags on a single page?',
    answer:
      'Technically yes (HTML5 allows it), but best practice for SEO and accessibility is to have **one** unique `<h1>` per page that describes the main topic.',
  },
  {
    id: 'html-13',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the `<time>` tag?',
    answer:
      'It represents a specific period in time. It allows you to provide a machine-readable format for dates (e.g., `<time datetime="2023-10-01">Oct 1</time>`), helping search engines and calendars.',
  },
  {
    id: 'html-14',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `<b>` and `<strong>`?',
    answer:
      '`<b>` is purely visual (bold). `<strong>` is semantic; it indicates that the text has strong importance, which screen readers will emphasize verbally.',
  },
  {
    id: 'html-15',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `<i>` and `<em>`?',
    answer:
      'Similar to above. `<i>` is visual (italic). `<em>` is semantic (emphasis), changing the stress of the spoken word.',
  },
  {
    id: 'html-16',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the purpose of the `<main>` tag?',
    answer:
      'It specifies the dominant content of the `<body>`. There should be only one visible `<main>` element per page. It helps screen readers skip navigation and go straight to the content.',
  },
  {
    id: 'html-17',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you create a definition list?',
    answer:
      'Using `<dl>` (Definition List), `<dt>` (Definition Term), and `<dd>` (Definition Description).',
  },
  {
    id: 'html-18',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the `<figure>` and `<figcaption>` element?',
    answer:
      '`<figure>` wraps media (like images or charts) and `<figcaption>` provides a caption for that specific media, semantically linking the two.',
  },
  {
    id: 'html-19',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `<link>` and `<a>`?',
    answer:
      '`<a>` is an anchor used to create hyperlinks for users to click. `<link>` is used in the `<head>` to link external resources like CSS or favicons.',
  },
  {
    id: 'html-20',
    topicId: 'html',
    level: 'junior',
    questionType: 'theory',
    question: 'Explain the hierarchy of headings.',
    answer:
      '`<h1>` is the most important, descending to `<h6>`. Headings should not be skipped (e.g., don\'t jump from H1 to H3) as this breaks the accessibility tree.',
  },
  // Part 3: Forms & User Interaction (mid)
  {
    id: 'html-21',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `GET` and `POST` methods in forms?',
    answer:
      '`GET` appends form data to the URL (visible, limited length, used for search). `POST` sends data in the HTTP request body (invisible in URL, secure, no size limit, used for sensitive data).',
  },
  {
    id: 'html-22',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'What does the `label` tag do, and how do you connect it?',
    answer:
      'It provides a caption for an item. You connect it by setting the `for` attribute on the label to match the `id` of the input (`<label for="email">` → `<input id="email">`).',
  },
  {
    id: 'html-23',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'What are `data-` attributes?',
    answer:
      'They allow you to store custom data private to the page or application (e.g., `data-user-id="123"`). You can access them in JavaScript via `element.dataset`.',
  },
  {
    id: 'html-24',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `input` and `textarea`?',
    answer:
      '`<input>` is for single-line text (and has no closing tag). `<textarea>` is for multi-line text (and requires a closing tag).',
  },
  {
    id: 'html-25',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the purpose of the `placeholder` attribute?',
    answer:
      'It specifies a short hint that describes the expected value of an input field. It disappears when the user types.',
  },
  {
    id: 'html-26',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you group related options in a drop-down list?',
    answer: 'Use the `<optgroup>` tag inside a `<select>` element.',
  },
  {
    id: 'html-27',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `fieldset` tag?',
    answer:
      'It is used to group related elements in a form. It is often used with `<legend>` to provide a caption for the group.',
  },
  {
    id: 'html-28',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'What are the new form input types in HTML5?',
    answer:
      '`email`, `url`, `number`, `range`, `date`, `time`, `color`, `search`, `tel`.',
  },
  {
    id: 'html-29',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you disable an input field?',
    answer: 'Add the boolean attribute `disabled` to the tag.',
  },
  {
    id: 'html-30',
    topicId: 'html',
    level: 'mid',
    questionType: 'theory',
    question: 'What is `autocomplete`?',
    answer:
      'An attribute that helps the browser predict the value. Example: `autocomplete="email"` or `autocomplete="new-password"`.',
  },
  // Part 4: Performance & Rendering (senior)
  {
    id: 'html-31',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the difference between `<script>`, `<script async>`, and `<script defer>`?',
    answer: [
      '- `<script>`: Blocks HTML parsing while downloading and executing.',
      '- `<script async>`: Downloads in parallel but executes immediately when ready (pausing HTML parsing).',
      '- `<script defer>`: Downloads in parallel but waits to execute until the HTML parsing is complete. (Best for performance.)',
    ].join('\n\n'),
  },
  {
    id: 'html-32',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'What is "lazy loading" for images?',
    answer:
      'Deferring the loading of images that are off-screen until the user scrolls near them. In HTML5, this is done natively with `<img loading="lazy">`.',
  },
  {
    id: 'html-33',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'What are `srcset` and `sizes`?',
    answer:
      'Attributes used for responsive images. They allow the browser to choose the most appropriate image size to download based on the device\'s screen width and pixel density.',
  },
  {
    id: 'html-34',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the "Critical Rendering Path"?',
    answer:
      'The sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on the screen. (DOM → CSSOM → Render Tree → Layout → Paint).',
  },
  {
    id: 'html-35',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the `<template>` tag?',
    answer:
      'A mechanism for holding client-side content that is not to be rendered when a page is loaded but may be instantiated subsequently during runtime using JavaScript.',
  },
  {
    id: 'html-36',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'Why put CSS in `<head>` and JS at the end of `<body>` (traditionally)?',
    answer:
      'CSS is render-blocking, so we want it early to prevent a "Flash of Unstyled Content" (FOUC). JS is parser-blocking, so we traditionally put it at the end to allow the visual DOM to load first.',
  },
  {
    id: 'html-37',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'What is `preload` vs `prefetch`?',
    answer:
      '`preload` tells the browser to download a resource **immediately** because it\'s needed for the current page. `prefetch` tells the browser to download a resource **in the background** because it might be needed for the **next** page.',
  },
  {
    id: 'html-38',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the Shadow DOM?',
    answer:
      'A browser technology that allows you to attach a hidden, separate DOM tree to an element. It provides encapsulation for styles and scripts (used heavily in Web Components).',
  },
  {
    id: 'html-39',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the purpose of the `viewport` meta tag?',
    answer:
      'It controls the layout on mobile browsers. Without `<meta name="viewport" content="width=device-width, initial-scale=1">`, mobile phones will render the site like a desktop and zoom out.',
  },
  {
    id: 'html-40',
    topicId: 'html',
    level: 'senior',
    questionType: 'theory',
    question: 'What is a Web Worker?',
    answer:
      'A JavaScript script that runs in the background, independently of other scripts, without affecting the performance of the page (UI thread).',
  },
  // Part 5: Accessibility & SEO (expert)
  {
    id: 'html-41',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'What are ARIA roles?',
    answer:
      'Accessible Rich Internet Applications attributes. They provide semantic meaning to elements that lack it natively (e.g., `<div role="button">`).',
  },
  {
    id: 'html-42',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'Why is `title` attribute not a good replacement for `alt`?',
    answer:
      '`title` usually only shows on mouse hover (inaccessible to mobile and keyboard users), whereas `alt` is read by screen readers.',
  },
  {
    id: 'html-43',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'How do you support keyboard navigation?',
    answer:
      'Ensure all interactive elements are focusable (using `tabindex` if necessary, though native elements are better), have visible focus states, and follow a logical tab order.',
  },
  {
    id: 'html-44',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'What is the difference between `canvas` and `svg`?',
    answer:
      '**SVG** is vector-based (XML), scalable, and part of the DOM (good for logos/charts). **Canvas** is raster-based (pixels) and drawn via JS (good for games/high particle counts).',
  },
  {
    id: 'html-45',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'How does HTML affect SEO?',
    answer:
      'Proper use of headings (`h1`–`h6`), semantic tags (`article`, `nav`), `title` tags, `meta` descriptions, and `alt` text helps search engines understand and rank content.',
  },
  {
    id: 'html-46',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'What is Open Graph protocol?',
    answer:
      'Meta tags (like `og:title`, `og:image`) that control how URLs look when shared on social media.',
  },
  {
    id: 'html-47',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'What is `tabindex`?',
    answer:
      'An attribute that controls whether an element is focusable and in what order. `0` inserts into natural order, `-1` makes it focusable via script but not tab, `1+` forces priority (avoid using positive values).',
  },
  {
    id: 'html-48',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'What is the `download` attribute?',
    answer:
      'When used on an `<a>` tag, it instructs the browser to download the URL rather than navigating to it.',
  },
  {
    id: 'html-49',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'What is semantic HTML?',
    answer:
      'Using HTML markup to reinforce the semantics, or meaning, of the information rather than defining its presentation.',
  },
  {
    id: 'html-50',
    topicId: 'html',
    level: 'expert',
    questionType: 'theory',
    question: 'What does `contenteditable` do?',
    answer:
      'An attribute that, when set to `true`, makes the element and its children editable by the user (like a rich text editor).',
  },
];
