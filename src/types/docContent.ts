import type { MDXContent } from 'mdx/types';

/** Raw markdown/MDX string (`?raw` import) or a compiled MDX default export. */
export type DocContent = string | MDXContent;

export function isDocContentString(content: DocContent): content is string {
  return typeof content === 'string';
}

export function hasDocContent(content: DocContent | undefined): boolean {
  if (content == null) return false;
  if (typeof content === 'string') return content.trim().length > 0;
  return true;
}

export function docContentSearchText(content: DocContent | undefined, maxLen = 3000): string {
  if (content == null || typeof content !== 'string') return '';
  return content.slice(0, maxLen);
}
