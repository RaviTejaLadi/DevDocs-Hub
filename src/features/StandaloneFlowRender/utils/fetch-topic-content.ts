export async function fetchTopicHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      Accept: 'text/html',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to load topic content (${response.status})`);
  }

  return response.text();
}

export function buildTopicUrl(roadmapId: string, topicPath: string, baseUrl = ''): string {
  const normalizedBase = baseUrl.replace(/\/$/, '');
  return `${normalizedBase}/${roadmapId}/${topicPath}`;
}
