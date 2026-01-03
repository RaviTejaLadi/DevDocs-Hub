/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { Table, TableHeader, TableHead, TableCell } from '../ui/table';
import { Check, Copy, ExternalLink, Hash, Quote } from 'lucide-react';
import { Button } from '../ui/button';

const MarkdownRender = ({ content }: { content: string }) => {
  const [copied, setCopied] = useState(false);
  const generateId = (text: React.ReactNode): string => {
    if (typeof text === 'string') {
      return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
    return '';
  };
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }: any) => {
          const id = generateId(children);
          return (
            <div className="group relative mb-8">
              <h1
                id={id}
                className="text-4xl lg:text-5xl mb-6 pb-6 border-b-2 font-extrabold bg-linear-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent  border-gradient-to-r relative"
              >
                {children}
                <a
                  href={`#${id}`}
                  className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground hover:text-primary"
                  aria-label="Link to this heading"
                >
                  <Hash className="w-6 h-6" />
                </a>
              </h1>
              <div className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-primary/30 w-1/3"></div>
            </div>
          );
        },
        h2: ({ children }: any) => {
          const id = generateId(children);
          return (
            <div className="group relative mt-16 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-linear-to-b from-primary to-primary/50 rounded-full"></div>
              <h2 id={id} className="text-3xl lg:text-4xl font-bold text-foreground">
                {children}
              </h2>
              <a
                href={`#${id}`}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground hover:text-primary ml-2"
                aria-label="Link to this heading"
              >
                <Hash className="w-5 h-5" />
              </a>
            </div>
          );
        },
        h3: ({ children }: any) => {
          const id = generateId(children);
          return (
            <div className="group relative mt-12 mb-4 flex items-center gap-2">
              <div className="w-0.5 h-6 bg-primary/70 rounded-full"></div>
              <h3 id={id} className="text-2xl lg:text-3xl font-semibold text-foreground ">
                {children}
              </h3>
              <a
                href={`#${id}`}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground hover:text-primary ml-2"
                aria-label="Link to this heading"
              >
                <Hash className="w-4 h-4" />
              </a>
            </div>
          );
        },
        h4: ({ children }: any) => {
          const id = generateId(children);
          return (
            <div className="group relative mt-8 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <h4 id={id} className="text-xl lg:text-2xl font-semibold text-foreground ">
                {children}
              </h4>
              <a
                href={`#${id}`}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground hover:text-primary ml-2"
                aria-label="Link to this heading"
              >
                <Hash className="w-3 h-3" />
              </a>
            </div>
          );
        },
        p: ({ children }: any) => (
          <p className="text-muted-foreground leading-8 mb-8 text-lg font-light tracking-wide">{children}</p>
        ),
        ul: ({ children }: any) => <ul className="space-y-4 mb-8 ml-6">{children}</ul>,
        ol: ({ children }: any) => <ol className="space-y-4 mb-8 ml-8 list-decimal">{children}</ol>,
        li: ({ children }: any) => (
          <li className="text-muted-foreground leading-7 relative pl-8 group">
            <div className="absolute left-0 top-3 w-2 h-2 bg-linear-to-r from-primary to-secondary rounded-full transform group-hover:scale-125 transition-transform duration-200"></div>
            <div className="absolute left-0.5 top-3.5 w-1 h-1 bg-background rounded-full"></div>
            {children}
          </li>
        ),
        blockquote: ({ children }: any) => (
          <div className="relative my-8">
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent rounded-r-xl"></div>
            <blockquote className="relative h-auto border-l-4 border-primary p-4 bg-muted/30 backdrop-blur-sm rounded-r-xl">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="text-foreground/90 italic text-lg leading-relaxed font-medium">{children}</div>
              </div>
            </blockquote>
          </div>
        ),

        table: ({ children }: any) => (
          <div className="my-8 overflow-hidden rounded-xl border border-border/50 shadow-lg bg-card/30 backdrop-blur-sm">
            <div className="w-full overflow-x-auto">
              <Table className="min-w-full">{children}</Table>
            </div>
          </div>
        ),
        thead: ({ children }: any) => (
          <TableHeader className="bg-linear-to-r from-muted to-muted/50 sticky top-0 z-10">{children}</TableHeader>
        ),
        th: ({ children }: any) => (
          <TableHead className="border-none px-6 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wider">
            {children}
          </TableHead>
        ),
        td: ({ children }: any) => (
          <TableCell className="border-t border-border/30 px-6 py-4 text-muted-foreground">{children}</TableCell>
        ),
        a: ({ children, href }: any) => {
          if (href?.startsWith('#')) {
            return (
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  const id = href.substring(1);
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 underline decoration-2 underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all duration-200 font-medium"
              >
                {children}
              </a>
            );
          }

          return (
            <a
              href={href}
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 underline decoration-2 underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all duration-200 font-medium"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
              {href?.startsWith('http') && <ExternalLink className="w-3 h-3 ml-1 opacity-70" />}
            </a>
          );
        },
        strong: ({ children }: any) => (
          <strong className="font-bold text-foreground bg-linear-to-r from-primary/15 to-secondary/10 px-2 py-0.5 rounded-md">
            {children}
          </strong>
        ),
        em: ({ children }: any) => (
          <em className="italic text-foreground/90 font-medium bg-linear-to-r from-transparent to-primary/5 px-1 rounded">
            {children}
          </em>
        ),
        kbd: ({ children }: any) => (
          <kbd className="inline-flex items-center justify-center min-w-6 px-2 h-6 rounded-md border border-border/50 bg-muted/60 text-xs font-mono text-foreground shadow-sm">
            {children}
          </kbd>
        ),
        hr: () => (
          <div className="my-16 flex items-center justify-center">
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
            <div className="px-8 flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-linear-to-r from-primary to-secondary rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
          </div>
        ),
        // Image with rounded corners and subtle shadow
        img: ({ src, alt }: any) => {
          const [altText, caption] = (alt ?? '').split('|').map((s: string) => s.trim());
          return (
            <figure className="my-8 flex flex-col items-center">
              <img src={src} alt={altText} className="rounded-xl shadow-lg border border-border/30 max-w-full h-auto" />
              {caption && <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>}
            </figure>
          );
        },

        // Code Blocks and Inline Code
        code: ({ inline, className, children, ...props }: any) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <div className="relative my-8 rounded-xl border-input border overflow-hidden bg-slate-950 shadow-xl">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 p-2 bg-slate-800/70 hover:bg-slate-800/90 backdrop-blur-md rounded-md border border-border/50 shadow-md group"
                onClick={() => handleCopy(String(children))}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
                )}
              </Button>

              <div className="overflow-x-auto">
                <SyntaxHighlighter
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  className="m-0! bg-transparent! p-6! text-sm sm:text-base"
                  showLineNumbers={false}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            </div>
          ) : (
            <code
              className="p-1 mx-1 rounded-md bg-indigo-50 border border-indigo-200 text-sm font-mono text-indigo-900 font-semibold"
              {...props}
            >
              {children}
            </code>
          );
        },
        pre: ({ ...props }) => <pre className="my-6" {...props} />,

        // Task Lists (GFM)
        input: ({ ...props }: any) => (
          <input
            className="mr-2 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            disabled
            {...props}
          />
        ),

        // Strikethrough (GFM)
        del: ({ ...props }) => <del className="text-muted-foreground line-through" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRender;
