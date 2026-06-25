export type TopicResourceLink = {
  id: string;
  title: string;
  url: string;
  type: string;
};

export type ParsedTopicContent = {
  title: string;
  html: string;
  links: TopicResourceLink[];
  hasContent: boolean;
};

export function parseTopicHtml(html: string): ParsedTopicContent {
  const topicDom = new DOMParser().parseFromString(html, 'text/html');
  const titleElem = topicDom.querySelector('h1');
  const title = titleElem?.textContent?.trim() ?? '';
  const otherElems = topicDom.querySelectorAll('body > *:not(h1, div)');

  let ulWithLinks: HTMLUListElement | null = null;

  for (const ul of topicDom.querySelectorAll('ul')) {
    const lisWithJustLinks = Array.from(ul.querySelectorAll('li')).filter(
      (li) =>
        li.children.length === 1 &&
        li.children[0].tagName === 'A' &&
        li.children[0].textContent === li.textContent,
    );

    if (lisWithJustLinks.length > 0) {
      ulWithLinks = ul;
    }
  }

  const links: TopicResourceLink[] = ulWithLinks
    ? Array.from(ulWithLinks.querySelectorAll<HTMLAnchorElement>('li > a')).map((link, counter) => {
        const typePattern = /@([a-z.]+)@/;
        let linkText = link.textContent || '';
        const linkHref = link.getAttribute('href') || '';
        const linkType = linkText.match(typePattern)?.[1] || 'article';

        linkText = linkText.replace(typePattern, '');

        return {
          id: `link-${linkHref}-${counter}`,
          title: linkText.trim(),
          url: linkHref,
          type: linkType,
        };
      })
    : [];

  if (ulWithLinks) {
    ulWithLinks.remove();
  }

  return {
    title,
    html: topicDom.body.innerHTML,
    links,
    hasContent: otherElems.length > 0,
  };
}

export function isContentNodeType(type: string): boolean {
  return type === 'topic' || type === 'subtopic';
}
