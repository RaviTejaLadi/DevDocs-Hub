import { SITE_NAME } from './config';

/** Format a page title with the site name suffix. */
export function formatPageTitle(pageTitle?: string): string {
  if (!pageTitle?.trim()) return SITE_NAME;
  return `${pageTitle.trim()} | ${SITE_NAME}`;
}
