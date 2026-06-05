import type { MDXComponents } from 'mdx/types';

/** Global MDX component map — extend when embedding custom React components in `.mdx` docs. */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
