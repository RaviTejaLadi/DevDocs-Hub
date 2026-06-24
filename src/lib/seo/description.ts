const MAX_DESCRIPTION_LENGTH = 160;

/** Trim and clamp meta descriptions for search snippets. */
export function truncateDescription(text: string, maxLength = MAX_DESCRIPTION_LENGTH): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= maxLength) return normalized;
  const truncated = normalized.slice(0, maxLength - 1);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${(lastSpace > 60 ? truncated.slice(0, lastSpace) : truncated).trim()}…`;
}
