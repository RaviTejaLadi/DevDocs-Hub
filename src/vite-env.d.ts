/// <reference types="vite/client" />

declare module '*.mdx' {
  import type { MDXContent } from 'mdx/types';

  const MDXComponent: MDXContent;
  export default MDXComponent;
}

declare module '*.mdx?raw' {
  const content: string;
  export default content;
}
