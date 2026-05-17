/** Visual polish for `/docs/:categoryId/*` — topic metadata from `@/topics`. */
export function formatTopicTrackLabel(type: string): string {
  const t = type.trim().toLowerCase();
  if (!t) return '';
  return t.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
