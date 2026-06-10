/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { AlertTriangle, Check, Copy, ExternalLink, Info, Lightbulb, Quote, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MermaidChartLazy from './MermaidChartLazy';
import { cn } from '@/lib/utils';

function extractTextFromNode(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractTextFromNode).join(' ');
  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return extractTextFromNode(element.props.children);
  }
  return '';
}

function headingSlugFromNode(node: React.ReactNode): string {
  return extractTextFromNode(node)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const LANGUAGE_LABELS: Record<string, string> = {
  js: 'JavaScript',
  javascript: 'JavaScript',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  tsx: 'TSX',
  jsx: 'JSX',
  html: 'HTML',
  css: 'CSS',
  scss: 'SCSS',
  json: 'JSON',
  bash: 'Bash',
  sh: 'Shell',
  shell: 'Shell',
  python: 'Python',
  py: 'Python',
  sql: 'SQL',
  yaml: 'YAML',
  yml: 'YAML',
  md: 'Markdown',
  markdown: 'Markdown',
  mermaid: 'Diagram',
};

function languageLabel(lang: string): string {
  return LANGUAGE_LABELS[lang.toLowerCase()] ?? lang.charAt(0).toUpperCase() + lang.slice(1);
}

type GfmAlert = { kind: string; body: React.ReactNode };

function parseGfmAlert(children: React.ReactNode): GfmAlert | null {
  const nodes = React.Children.toArray(children);
  if (nodes.length === 0) return null;

  const firstText = extractTextFromNode(nodes[0]).trim();
  const match = /^\[!([A-Za-z]+)\]\s*(.*)$/s.exec(firstText);
  if (!match) return null;

  const kind = match[1].toUpperCase();
  const inlineBody = match[2]?.trim();

  if (nodes.length === 1) {
    return { kind, body: inlineBody || null };
  }

  const rest = nodes.slice(1);
  if (inlineBody) {
    return {
      kind,
      body: (
        <>
          <p>{inlineBody}</p>
          {rest}
        </>
      ),
    };
  }

  return { kind, body: rest };
}

const CALLOUT_ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  NOTE: Info,
  TIP: Lightbulb,
  IMPORTANT: TriangleAlert,
  WARNING: AlertTriangle,
  CAUTION: AlertTriangle,
};

export type BuildMarkdownComponentsOpts = {
  /** Prefix so slide chunks do not produce duplicate heading ids in the DOM. */
  idPrefix: string;
  isDarkTheme: boolean;
  copiedKey: string | null;
  handleCopy: (key: string, text: string) => void;
  scrollToId: (id: string) => void;
  /** Slide viewport: comfortable type + spacing (still slightly denser than full article) */
  compactSlide?: boolean;
};

export function buildMarkdownComponents({
  idPrefix,
  isDarkTheme,
  copiedKey,
  handleCopy,
  scrollToId,
  compactSlide = false,
}: BuildMarkdownComponentsOpts): any {
  const nid = (children: React.ReactNode) => `${idPrefix}${headingSlugFromNode(children) || 'section'}`;
  const c = compactSlide;

  return {
    h1: ({ children }: any) => {
      const id = nid(children);
      return (
        <header className={cn('relative', c ? 'mb-5 mt-0' : 'mb-9 mt-1')}>
          <h1
            id={id}
            className={cn(
              'scroll-mt-28 font-bold text-foreground',
              c
                ? 'text-[1.65rem] sm:text-[1.875rem] leading-[1.2] tracking-[-0.02em]'
                : 'text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.15] tracking-tight'
            )}
          >
            <span className={cn(!c && 'md-h1-title')}>{children}</span>
          </h1>
          {!c ? (
            <div className="mt-5 flex items-center gap-2">
              <span className="h-px w-10 rounded-full bg-(--md-purple)/60" />
              <span className="h-px flex-1 rounded-full bg-border/60" />
            </div>
          ) : (
            <div className="mt-3 border-b border-border/40" />
          )}
        </header>
      );
    },
    h2: ({ children }: any) => {
      const id = nid(children);
      return (
        <div className={cn('md-h2 group relative', c ? 'mt-8 mb-4' : 'mt-14 mb-6')}>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div
              className={cn(
                'md-h2-num grid place-items-center rounded-lg',
                'bg-(--md-purple-tint) text-(--md-purple-deep) font-bold tabular-nums',
                'border border-(--md-purple-line)',
                c ? 'min-w-9 h-9 px-2 text-[0.75rem] tracking-normal' : 'min-w-9 h-9 px-2 text-[0.78rem] tracking-tight'
              )}
              aria-hidden
            />
            <h2
              id={id}
              className={cn(
                'scroll-mt-28 flex-1 font-bold text-foreground',
                c
                  ? 'text-xl sm:text-[1.35rem] leading-snug tracking-[-0.015em]'
                  : 'text-2xl sm:text-[1.7rem] leading-tight tracking-tight'
              )}
            >
              {children}
            </h2>
          </div>
        </div>
      );
    },
    h3: ({ children }: any) => {
      const id = nid(children);
      return (
        <div className={cn('group relative flex items-center gap-2.5', c ? 'mt-7 mb-3' : 'mt-10 mb-4')}>
          <span className="inline-block h-1.5 w-1.5 shrink-0 rotate-45 rounded-sm bg-(--md-purple)" />
          <h3
            id={id}
            className={cn(
              'scroll-mt-28 font-semibold text-foreground',
              c
                ? 'text-[1.08rem] sm:text-[1.2rem] leading-snug tracking-normal'
                : 'text-xl sm:text-[1.35rem] tracking-tight'
            )}
          >
            {children}
          </h3>
        </div>
      );
    },
    h4: ({ children }: any) => {
      const id = nid(children);
      return (
        <div className={cn('group relative flex items-center gap-2', c ? 'mt-5 mb-2.5' : 'mt-8 mb-3')}>
          <span className="inline-block h-1 w-1 rounded-full bg-(--md-purple)" />
          <h4
            id={id}
            className={cn(
              'scroll-mt-28 font-semibold text-foreground',
              c ? 'text-[1.02rem] sm:text-[1.06rem] leading-snug tracking-normal' : 'text-lg tracking-tight'
            )}
          >
            {children}
          </h4>
        </div>
      );
    },
    p: ({ children }: any) => (
      <p
        className={cn(
          'md-p',
          c
            ? 'mb-4 text-[1.02rem] sm:text-[1.055rem] leading-[1.72] tracking-[0.012em] text-foreground/88'
            : 'mb-5 text-[1.02rem] leading-[1.78] text-foreground/80'
        )}
      >
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul
        className={cn(
          'md-ul',
          c ? 'mb-4 space-y-2.5 text-[1.01rem] sm:text-[1.035rem] tracking-[0.01em]' : 'mb-6 space-y-2 text-[1.01rem]'
        )}
      >
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol
        className={cn(
          'md-ol',
          c ? 'mb-4 space-y-2.5 text-[1.01rem] sm:text-[1.035rem] tracking-[0.01em]' : 'mb-6 space-y-2.5 text-[1.01rem]'
        )}
      >
        {children}
      </ol>
    ),
    li: ({ children, className }: any) => {
      const isTask = (className || '').includes('task-list-item');
      return (
        <li
          className={cn(
            'text-foreground/85',
            isTask && 'list-none pl-0',
            c ? 'text-[1.01rem] sm:text-[1.03rem] leading-[1.72] tracking-[0.01em]' : 'leading-[1.7] text-[1.01rem]'
          )}
        >
          {children}
        </li>
      );
    },
    blockquote: ({ children }: any) => {
      const alert = parseGfmAlert(children);
      if (alert) {
        const Icon = CALLOUT_ICONS[alert.kind] ?? Info;
        return (
          <div
            className={cn(
              'md-callout',
              `md-callout--${alert.kind.toLowerCase()}`,
              c ? 'my-5' : 'my-7'
            )}
            role="note"
          >
            <div className="md-callout-head">
              <Icon className="md-callout-icon" strokeWidth={2.2} />
              <span className="md-callout-title">{alert.kind}</span>
            </div>
            <div
              className={cn(
                'md-callout-body text-foreground/90 [&_p]:mb-2.5 [&_p:last-child]:mb-0',
                c ? 'text-[1.01rem] sm:text-[1.03rem] leading-[1.72]' : 'text-[1rem] leading-[1.75]'
              )}
            >
              {alert.body}
            </div>
          </div>
        );
      }

      return (
        <div className={c ? 'my-5' : 'my-7'}>
          <blockquote className="md-quote">
            <div className="flex items-start gap-3">
              <Quote
                className={cn(
                  'shrink-0 -scale-x-100 text-(--md-purple)',
                  c ? 'mt-1 h-4 w-4 sm:h-5 sm:w-5' : 'mt-0.5 h-5 w-5'
                )}
                strokeWidth={2.2}
              />
              <div
                className={cn(
                  'font-medium text-foreground/90 [&_p]:mb-2.5 [&_p:last-child]:mb-0',
                  c ? 'text-[1.01rem] sm:text-[1.03rem] leading-[1.72] tracking-[0.01em]' : 'text-[1rem] leading-[1.75]'
                )}
              >
                {children}
              </div>
            </div>
          </blockquote>
        </div>
      );
    },
    table: ({ children }: any) => (
      <div className="md-table-wrap">
        <div className="w-full overflow-x-auto">
          <table className="md-table">{children}</table>
        </div>
      </div>
    ),
    thead: ({ children }: any) => <thead>{children}</thead>,
    tbody: ({ children }: any) => <tbody>{children}</tbody>,
    tr: ({ children }: any) => <tr>{children}</tr>,
    th: ({ children }: any) => <th>{children}</th>,
    td: ({ children }: any) => <td>{children}</td>,
    a: ({ children, href }: any) => {
      const isExternal = href?.startsWith('http');
      if (href?.startsWith('#')) {
        return (
          <a
            href={href}
            onClick={(e) => {
              e.preventDefault();
              scrollToId(href.substring(1));
            }}
            className="md-link"
          >
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          className="md-link"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
          {isExternal && <ExternalLink className="ml-1 inline-block h-3 w-3 -translate-y-px opacity-70" />}
        </a>
      );
    },
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    kbd: ({ children }: any) => (
      <kbd className="inline-flex h-5 min-w-6 items-center justify-center rounded border border-border/60 bg-muted/60 px-1.5 text-[0.75rem] font-mono text-foreground/80 shadow-none">
        {children}
      </kbd>
    ),
    hr: () => (
      <div className="md-hr">
        <div className="md-hr-line" />
        <span className="md-hr-dot bg-(--md-red)" />
        <span className="md-hr-dot bg-(--md-sky)" />
        <span className="md-hr-dot bg-(--md-purple)" />
        <div className="md-hr-line" />
      </div>
    ),
    img: ({ src, alt }: any) => {
      const [altText, caption] = (alt ?? '').split('|').map((s: string) => s.trim());
      return (
        <figure className={cn('flex flex-col items-center', c ? 'my-5' : 'my-7')}>
          <div className="md-polaroid">
            <img src={src} alt={altText} className="block h-auto max-w-full rounded-md" loading="lazy" />
          </div>
          {caption && (
            <figcaption className="mt-2.5 text-center text-sm italic text-muted-foreground">{caption}</figcaption>
          )}
        </figure>
      );
    },
    code: ({ inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match?.[1];
      const codeString = String(children).replace(/\n$/, '');
      const codeKey = `${idPrefix}${codeString.slice(0, 64)}`;

      if (!inline && language === 'mermaid') {
        return <MermaidChartLazy chart={codeString} />;
      }

      return !inline && match ? (
        <div className={cn('md-code-card group relative', c ? 'my-5' : 'my-6')}>
          <div className="md-code-head">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="md-code-dot bg-[#ff5f57]" />
              <span className="md-code-dot bg-[#febc2e]" />
              <span className="md-code-dot bg-[#28c840]" />
            </div>
            <span className="ml-auto font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {languageLabel(language!)}
            </span>
          </div>
          <div className="pointer-events-none absolute right-2 top-[2.35rem] z-10 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleCopy(codeKey, codeString)}
              className={cn(
                'h-6 gap-1.5 rounded border border-border/35 bg-card/75 p-2 text-[0.7rem] font-medium backdrop-blur-sm',
                isDarkTheme
                  ? 'text-foreground/75 hover:bg-accent/70 hover:text-foreground'
                  : 'text-muted-foreground hover:bg-accent/85 hover:text-foreground'
              )}
              aria-label="Copy code"
            >
              {copiedKey === codeKey ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              style={isDarkTheme ? atomDark : prism}
              language={language}
              PreTag="div"
              className={cn(
                'm-0! bg-transparent! p-5!',
                c
                  ? 'text-[0.9rem] sm:text-[0.94rem] leading-[1.72]! tracking-[0.02em]!'
                  : 'text-[0.9rem] sm:text-[0.92rem] leading-[1.7]!'
              )}
              showLineNumbers={false}
              customStyle={{ background: 'transparent', margin: 0 }}
              codeTagProps={{ style: { background: 'transparent' } }}
              {...props}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      ) : (
        <code className="md-inline-code" {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }: any) => <>{children}</>,
    input: ({ checked, ...props }: any) => (
      <input className="md-task-checkbox" type="checkbox" checked={checked} disabled {...props} />
    ),
    del: ({ children }: any) => (
      <del className="text-muted-foreground/80 line-through decoration-(--md-red)/70 decoration-1">{children}</del>
    ),
  };
}
