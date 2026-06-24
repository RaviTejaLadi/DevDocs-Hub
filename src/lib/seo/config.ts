/** Site-wide SEO defaults — override `VITE_SITE_URL` in production when the canonical domain changes. */
export const SITE_NAME = 'ReviseStack';

export const SITE_TAGLINE = 'Quick revision docs for CS, engineering, and sciences';

export const SITE_DESCRIPTION =
  'ReviseStack — organized study topics across computer science, engineering, sciences, and more. Quick revision with clear explanations, interview questions, and interactive tools.';

const DEFAULT_SITE_URL = 'https://revise-stack.vercel.app';

function readSiteUrl(): string {
  const fromVite =
    typeof import.meta !== 'undefined' ? (import.meta.env.VITE_SITE_URL as string | undefined) : undefined;
  const fromNode = typeof process !== 'undefined' ? process.env.VITE_SITE_URL : undefined;
  return (fromVite ?? fromNode ?? DEFAULT_SITE_URL).replace(/\/$/, '');
}

export const SITE_URL = readSiteUrl();

export const SITE_LOCALE = 'en_US';

export const SITE_TWITTER_HANDLE = '@ReviseStack';

export const DEFAULT_OG_IMAGE_PATH = '/og-image.svg';

export const DEFAULT_KEYWORDS = [
  'revision notes',
  'study guides',
  'computer science',
  'engineering',
  'interview preparation',
  'DSA',
  'system design',
  'programming tutorials',
];
