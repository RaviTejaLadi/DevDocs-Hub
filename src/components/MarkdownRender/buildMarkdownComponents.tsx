/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy, ExternalLink, Quote } from 'lucide-react';
import { Button } from '../ui/button';
import MermaidRenderer from '../MermaidRenderer';
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

export type BuildMarkdownComponentsOpts = {
  /** Prefix so slide chunks do not produce duplicate heading ids in the DOM. */
  idPrefix: string;
  isDarkTheme: boolean;
  copiedKey: string | null;
  t: (key: string) => string;
  handleCopy: (key: string, text: string) => void;
  scrollToId: (id: string) => void;
};

export function buildMarkdownComponents({
  idPrefix,
  isDarkTheme,
  copiedKey,
  t,
  handleCopy,
  scrollToId,
}: BuildMarkdownComponentsOpts): any {
  const nid = (children: React.ReactNode) => `${idPrefix}${headingSlugFromNode(children) || 'section'}`;

  return {
    h1: ({ children }: any) => {
      const id = nid(children);
      return (
        <header className="relative mb-9 mt-1">
          <h1
            id={id}
            className="scroll-mt-28 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.15] text-foreground"
          >
            <span className="md-h1-title">{children}</span>
          </h1>
          <div className="mt-5 flex items-center gap-2">
            <span className="h-px w-10 bg-(--md-purple)/60 rounded-full"></span>
            <span className="h-px flex-1 bg-border/60 rounded-full"></span>
          </div>
        </header>
      );
    },
    h2: ({ children }: any) => {
      const id = nid(children);
      return (
        <div className="md-h2 group relative mt-14 mb-6">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'md-h2-num grid place-items-center min-w-9 h-9 px-2 rounded-lg',
                'bg-(--md-purple-tint) text-(--md-purple-deep) text-[0.78rem] font-bold tracking-tight',
                'border border-(--md-purple-line)'
              )}
            ></div>
            <h2
              id={id}
              className="scroll-mt-28 flex-1 text-2xl sm:text-[1.7rem] font-bold tracking-tight leading-tight text-foreground"
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
        <div className="group relative mt-10 mb-4 flex items-center gap-2.5">
          <span className="inline-block w-1.5 h-1.5 rounded-sm bg-(--md-purple) rotate-45 shrink-0"></span>
          <h3
            id={id}
            className="scroll-mt-28 text-xl sm:text-[1.35rem] font-semibold tracking-tight text-foreground"
          >
            {children}
          </h3>
        </div>
      );
    },
    h4: ({ children }: any) => {
      const id = nid(children);
      return (
        <div className="group relative mt-8 mb-3 flex items-center gap-2">
          <span className="inline-block w-1 h-1 rounded-full bg-(--md-purple)"></span>
          <h4 id={id} className="scroll-mt-28 text-lg font-semibold tracking-tight text-foreground">
            {children}
          </h4>
        </div>
      );
    },
    p: ({ children }: any) => (
      <p className="mb-5 leading-[1.8] text-[1.02rem] text-foreground/80 first-of-type:text-[1.12rem] sm:first-of-type:text-[1.16rem] first-of-type:leading-[1.75] first-of-type:mb-7 first-of-type:text-foreground/90">
        {children}
      </p>
    ),
    ul: ({ children }: any) => <ul className="md-ul mb-6 space-y-2 text-[1.01rem]">{children}</ul>,
    ol: ({ children }: any) => <ol className="md-ol mb-6 space-y-2.5 text-[1.01rem]">{children}</ol>,
    li: ({ children, className }: any) => {
      const isTask = (className || '').includes('task-list-item');
      return (
        <li className={cn('leading-[1.7] text-foreground/80', isTask && 'list-none pl-0')}>{children}</li>
      );
    },
    blockquote: ({ children }: any) => (
      <div className="my-7">
        <blockquote className="md-quote">
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 mt-0.5 shrink-0 text-(--md-purple) -scale-x-100" strokeWidth={2.2} />
            <div className="text-foreground/90 text-[1rem] leading-[1.75] font-medium [&_p]:mb-2 [&_p:last-child]:mb-0">
              {children}
            </div>
          </div>
        </blockquote>
      </div>
    ),
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
          {isExternal && <ExternalLink className="inline-block w-3 h-3 ml-1 -translate-y-px opacity-70" />}
        </a>
      );
    },
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    kbd: ({ children }: any) => (
      <kbd className="inline-flex items-center justify-center min-w-6 px-1.5 h-5 rounded border border-border/60 bg-muted/60 text-[0.75rem] font-mono text-foreground/80 shadow-[0_1px_0_0_color-mix(in_oklab,var(--foreground)_15%,transparent)]">
        {children}
      </kbd>
    ),
    hr: () => (
      <div className="md-hr">
        <div className="md-hr-line"></div>
        <span className="md-hr-dot bg-(--md-red)"></span>
        <span className="md-hr-dot bg-(--md-yellow)"></span>
        <span className="md-hr-dot bg-(--md-purple)"></span>
        <div className="md-hr-line"></div>
      </div>
    ),
    img: ({ src, alt }: any) => {
      const [altText, caption] = (alt ?? '').split('|').map((s: string) => s.trim());
      return (
        <figure className="my-7 flex flex-col items-center">
          <div className="md-polaroid">
            <img src={src} alt={altText} className="rounded-md max-w-full h-auto block" />
          </div>
          {caption && (
            <figcaption className="mt-2.5 text-sm text-muted-foreground italic text-center">{caption}</figcaption>
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
        return <MermaidRenderer chart={codeString} />;
      }

      return !inline && match ? (
        <div className="md-code-card group my-6">
          <div className="md-code-head">
            <span
              className={cn(
                'ml-2 text-[0.65rem] font-semibold tracking-[0.18em] uppercase',
                isDarkTheme ? 'text-white/55' : 'text-slate-600'
              )}
            >
              {language}
            </span>
            <div className="ml-auto flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(codeKey, codeString)}
                className={cn(
                  'h-6 gap-1.5 px-2 text-[0.7rem] font-medium rounded',
                  isDarkTheme
                    ? 'text-white/65 hover:text-white hover:bg-white/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                )}
              >
                {copiedKey === codeKey ? (
                  <>
                    <Check className="h-3 w-3" /> {t('common.copied')}
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" /> {t('common.copy')}
                  </>
                )}
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <SyntaxHighlighter
              style={isDarkTheme ? atomDark : prism}
              language={language}
              PreTag="div"
              className="m-0! bg-transparent! p-5! text-[0.9rem] sm:text-[0.92rem] leading-[1.7]!"
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
