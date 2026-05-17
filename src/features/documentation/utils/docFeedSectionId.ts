export const docFeedSectionDomId = (topicId: string, itemId: string) => `doc-feed-${topicId}__${itemId}`;

export const parseDocFeedSectionDomId = (elementId: string): { topicId: string; itemId: string } | null => {
  if (!elementId.startsWith('doc-feed-')) return null;
  const rest = elementId.slice('doc-feed-'.length);
  const sep = rest.indexOf('__');
  if (sep < 0) return null;
  return { topicId: rest.slice(0, sep), itemId: rest.slice(sep + 2) };
};
