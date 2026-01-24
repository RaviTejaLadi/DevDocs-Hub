# Common Interview Questions & Answers 🚀

### 1. What is NextJS?

**Answer:**  
Next.js is a React framework for building full-stack web applications. ⚛️

### 2. How do you create a new Next.js project?

**Answer:**  
Using command:

```bash
npx create-next-app@latest
```

🆕

### 3. What is the purpose of the `pages` or `app` directory in Next.js?

**Answer:**  
It contains React components that are automatically routed based on their file
name. 📁

### 4. What is file based routing in Next.js?

**Answer:**  
Routing based on the file structure in the `pages` or `app` directory. 🗂️

### 5. What are the key features of Next.js?

**Answer:**

- Server Side Rendering (SSR) 🌐
- Static Site Generation (SSG) 🏗️
- API Routes 🔗
- File Based Routing 🗃️
- Client Side Rendering (CSR) 🖥️
- Incremental Static Regeneration (ISR) ♻️
- Image Optimization 🖼️
- Automatic Code Splitting ✂️
- TypeScript Support 🟦
- Fast Refresh ⚡

### 6. What are the Differences Between Next.js and React.js?

**Answer:**  
| Feature | Next.js | React.js |
|--------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------|
| Rendering | Supports SSR, SSG, and CSR 🌐 | Only supports CSR by default 🖥️ |
| Routing | Built-in file-based routing 🗂️ | Requires libraries like React
Router 🔌 | | SEO | Excellent for SEO 🔍 | Limited SEO capabilities 🚫 | |
Performance | Faster initial page load ⚡ | May have slower page loads 🐢 | |
Configuration | Minimal configuration required ⚙️ | Requires manual setup 🛠️ | |
API Routes | Built-in API routes 🔗 | Requires external tools 🧩 | | Image
Optimization | Built-in Image component 🖼️ | Needs third-party libraries 📦 |

### 7. What is Incremental Static Regeneration?

**Answer:**  
A technique that allows you to update static pages at runtime without rebuilding
the entire site. 🔄

### 8. What is the Link component in Next.js?

**Answer:**  
A component for client side navigation between pages: 🔗

```jsx
import Link from 'next/link'

<Link href="/">Home</Link>
<Link href="/about">About</Link>
```

### 9. What is the useRouter hook in Next.js?

**Answer:**  
A hook that allows access to the router object and perform navigation: 🧭

```jsx
const router = useRouter();
router.push('/path');
```

### 10. How do you navigate programmatically in Next.js?

**Answer:**  
Using useRouter() hook:

```jsx
const router = useRouter();
function handleClick() {
  router.push('/path');
}
```

🛣️

### 11. What is middleware?

**Answer:**  
Code that runs before a request is completed: 🛡️

```js
import { NextResponse } from 'next/server';

export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url));
}
```

### 12. How do you add component-level CSS in Next.js?

**Answer:**  
Using CSS modules: 🎨

```css
/* styles.module.css */
.example {
  color: red;
}
```

```jsx
import styles from './styles.module.css';
<div className={styles.example}>Hello</div>;
```

### 13. What is static site generation (SSG) in Next.js?

**Answer:**  
Pre-rendering pages at build time: 🏗️

```jsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  return { props: { data } };
}
```

### 14. What is server side rendering (SSR) in Next.js?

**Answer:**  
Rendering pages on each request: 🌐

```jsx
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  return { props: { data } };
}
```

### 15. What is incremental static regeneration (ISR) in Next.js?

**Answer:**  
Re-generating static pages at runtime: ♻️

```jsx
export async function getStaticProps() {
  return { props: { data }, revalidate: 60 }; // Revalidate every 60 seconds
}
```

### 16. What is the Image component in Next.js?

**Answer:**  
Optimized image component: 🖼️

```jsx
import Image from 'next/image';
<Image src={pic} alt="Picture" width={500} height={500} />;
```

### 17. What is next.config.js?

**Answer:**  
Configuration file for Next.js settings: ⚙️

```js
module.exports = {
  /* config options */
};
```

### 18. How do you enable TypeScript in a Next.js project?

**Answer:**  
By adding a tsconfig.json file. 🟦

### 19. What is API Routes in Next.js?

**Answer:**  
Feature to create API endpoints in `pages/api` or `app/api` directory. 🔗

### 20. How do you deploy a Next.js app to Vercel?

**Answer:**  
By connecting the git repository to Vercel. ☁️

### 21. What is pre-rendering in Next.js?

**Answer:**  
Generating HTML for pages in advance. 🏗️

### 22. What is the difference between static site generation and server side rendering?

**Answer:**  
SSG pre-renders at build time, SSR pre-renders on each request. 🔄

### 23. How do you handle redirects in Next.js?

**Answer:**  
In next.config.js:

```js
module.exports = {
  async redirects() {
    return [{ source: '/about', destination: '/about-us', permanent: true }];
  },
};
```

➡️

### 24. What is the Head component in Next.js?

**Answer:**  
For modifying the `<head>` of a page: 🧠

```jsx
import Head from 'next/head';
<Head>
  <title>Page Title</title>
</Head>;
```

### 25. What is the public folder in Next.js?

**Answer:**  
For static assets served from root URL. 📂

### 26. How do you fetch data in a Next.js page?

**Answer:**  
Using getStaticProps or getServerSideProps. 📡

### 27. What is dynamic import in Next.js?

**Answer:**  
Lazy loading components: 💤

```jsx
const Component = dynamic(() => import('../components/Component'));
```

### 28. How do you handle environment variables in Next.js?

**Answer:**  
Via .env.local and process.env. 🌱

### 29. What is fallback in getStaticPaths?

**Answer:**  
Handles missing paths (true/false/'blocking'). 🚦

### 30. What is a custom server in Next.js?

**Answer:**  
Customizing server-side behavior with Express, etc. 🖥️

### 31. What is next/head package used for?

**Answer:**  
Managing document head (meta tags, title, etc.). 🧠

### 32. What is the next export command?

**Answer:**  
Exports a static version of the app. 📦

### 33. How do you optimize fonts in Next.js?

**Answer:**  
Using built-in font optimization. 🔤

### 34. What is the default port for a Next.js app?

**Answer:**  
Port 3000. 🔢

### 35. How to change default port?

**Answer:**

```json
"scripts": {
  "dev": "next dev -p 8080"
}
```

🔀

### 36. How do you add custom headers?

**Answer:**  
In next.config.js. 🏷️

### 37. What is Fast Refresh in Next.js?

**Answer:**  
Quick feedback when editing components. ⚡

### 38. How do you configure custom Babel?

**Answer:**  
Via babel.config.js. 🧬

### 39. How do you handle i18n in Next.js?

**Answer:**  
In next.config.js:

```js
module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};
```

🌍

### 40. What is React Strict Mode in Next.js?

**Answer:**  
Development feature for highlighting potential problems. 🚨

### 41. What is a singleton router in Next.js?

**Answer:**  
Single router instance across the app. 🛣️

### 42. How do you perform client-side data fetching?

**Answer:**  
Using useEffect and fetch:

```jsx
const [data, setData] = useState(null);
useEffect(() => {
  fetch('/api/data').then((res) => setData(res.json()));
}, []);
```

🔄

### 43. What is next-seo in Next.js?

**Answer:**  
For managing SEO metadata. 🔍

### 44. How do you use Tailwind CSS in Next.js?

**Answer:**  
Install and configure with PostCSS. 💨

### 45. How do you configure next-i18next?

**Answer:**  
Install and set up in next.config.js. 🌐

### 46. What is next/script used for?

**Answer:**  
Optimizing third-party scripts: 📝

```jsx
import Script from 'next/script';
<Script src="https://example.com/script.js" />;
```

### 47. How do you enable custom fonts?

**Answer:**  
Using next/font:

```jsx
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

🔡

### 48. How do you set up GraphQL in Next.js?

**Answer:**  
Using Apollo Client. 🚀

### 49. What is swcMinify in next.config.js?

**Answer:**  
Enables SWC compiler for minification. 🛠️

### 50. What is next-compose-plugins?

**Answer:**  
For composing multiple plugins in config. 🧩

### 51. What is a hybrid application in Next.js?

**Answer:**  
Uses both SSG and SSR. 🌀

### 52. What is the trailingSlash option?

**Answer:**  
Configures trailing slashes in URLs. ➕

### 53. What is the difference between push and replace in useRouter?

**Answer:**  
push adds history entry, replace modifies current. 🔄

### 54. What is `ssr: false` in dynamic import?

**Answer:**  
Disables SSR for the component. 🚫

### 55. How do you configure PWA?

**Answer:**  
Using next-pwa plugin. 📱

### 56. How do you add Google Analytics?

**Answer:**

```jsx
import { GoogleAnalytics } from '@next/third-parties/google';
<GoogleAnalytics gaId="G-XYZ" />;
```

📊

### 57. What is middleware in Next.js?

**Answer:**  
Code that runs before request completion. 🛡️

### 58. How do you use Apollo Client?

**Answer:**  
Set up Apollo Provider in \_app.js. 🚀

### 59. What is publicRuntimeConfig?

**Answer:**  
Configuration exposed to browser. 🌐
