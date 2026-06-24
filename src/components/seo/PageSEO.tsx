import { Helmet } from 'react-helmet-async';
import { DEFAULT_KEYWORDS, SITE_DESCRIPTION, SITE_LOCALE, SITE_NAME, SITE_TWITTER_HANDLE } from '@/lib/seo/config';
import { truncateDescription } from '@/lib/seo/description';
import { formatPageTitle } from '@/lib/seo/pageTitle';
import { absoluteUrl, defaultOgImageUrl } from '@/lib/seo/urls';

export type PageSEOProps = {
  title: string;
  description?: string;
  /** Site-relative path used for canonical and Open Graph URLs, e.g. `/guides/dsa-interview-prep`. */
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  keywords?: string[];
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function PageSEO({
  title,
  description = SITE_DESCRIPTION,
  path,
  image,
  type = 'website',
  noindex = false,
  keywords,
  jsonLd,
}: PageSEOProps) {
  const pageTitle = formatPageTitle(title);
  const metaDescription = truncateDescription(description);
  const canonicalUrl = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : defaultOgImageUrl();
  const keywordContent = [...new Set([...(keywords ?? []), ...DEFAULT_KEYWORDS])].join(', ');
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywordContent} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${title} — ${SITE_NAME}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${title} — ${SITE_NAME}`} />

      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  );
}
