import { useState, type ClassAttributes, type HTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import type { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { Check, Copy, ExternalLink, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

type CodeComponentProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;

export function AnswerMarkdown({ content, className }: { content: string; className?: string }) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
  
  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey((currentKey) => (currentKey === key ? null : currentKey)), 1800);
  };

  return (
    <div className={cn('md-render interview-answer text-[15px] leading-relaxed text-foreground/90', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <div className="mt-6 mb-3 flex items-center gap-2.5 first:mt-0">
              <span className="h-1.5 w-1.5 rotate-45 rounded-sm  shrink-0" />
              <h2 className="text-lg font-semibold tracking-tight text-foreground">{children}</h2>
            </div>
          ),
          h3: ({ children }) => (
            <div className="mt-5 mb-2.5 flex items-center gap-2 first:mt-0">
              <span className="h-1 w-1 rounded-full shrink-0" />
              <h3 className="text-base font-semibold tracking-tight text-foreground">{children}</h3>
            </div>
          ),
          p: ({ children }) => <p className="mb-3.5 last:mb-0 leading-[1.75] text-foreground/85">{children}</p>,
          ul: ({ children }) => (
            <ul className="md-ul my-3.5 space-y-1.5 text-[0.95rem]" role="list">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="md-ol my-3.5 space-y-1.5 text-[0.95rem]" role="list">
              {children}
            </ol>
          ),
          li: ({ children, className: listItemClassName }) => {
            const isTask = (listItemClassName || '').includes('task-list-item');
            return <li className={cn('leading-[1.65] text-foreground/85', isTask && 'list-none pl-0')}>{children}</li>;
          },
          blockquote: ({ children }) => (
            <div className="my-4">
              <blockquote className="md-quote py-3 px-4">
                <div className="flex items-start gap-2.5">
                  <Quote className="mt-0.5 h-4 w-4 shrink-0 -scale-x-100 text-(--md-purple)" strokeWidth={2.2} />
                  <div className="text-[0.94rem] font-medium leading-[1.7] text-foreground/90 [&_p]:mb-2 [&_p:last-child]:mb-0">
                    {children}
                  </div>
                </div>
              </blockquote>
            </div>
          ),
          table: ({ children }) => (
            <div className="md-table-wrap my-4">
              <div className="w-full overflow-x-auto">
                <table className="md-table text-sm">{children}</table>
              </div>
            </div>
          ),
          thead: ({ children }) => <thead>{children}</thead>,
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => <tr>{children}</tr>,
          th: ({ children }) => <th>{children}</th>,
          td: ({ children }) => <td>{children}</td>,
          a: ({ children, href }) => {
            const isExternal = href?.startsWith('http');
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
          strong: ({ children }) => <strong>{children}</strong>,
          em: ({ children }) => <em>{children}</em>,
          input: ({ checked, ...props }) => (
            <input className="md-task-checkbox" type="checkbox" checked={checked} disabled {...props} />
          ),
          code: ({ className: codeClassName, children }: CodeComponentProps) => {
            const match = /language-(\w+)/.exec(codeClassName || '');
            const isBlock = Boolean(match);
            const language = match?.[1];
            const codeString = String(children ?? '').replace(/\n$/, '');
            const codeKey = `${language ?? 'code'}:${codeString.slice(0, 64)}`;

            if (isBlock) {
              return (
                <div className="md-code-card group my-4">
                  <div className="md-code-head">
                    <span
                      className={cn(
                        'ml-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]',
                        isDarkTheme ? 'text-white/55' : 'text-slate-600'
                      )}
                    >
                      {language}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        'ml-auto h-6 gap-1.5 rounded px-2 text-[0.7rem] font-medium',
                        isDarkTheme
                          ? 'text-white/65 hover:bg-white/5 hover:text-white'
                          : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                      )}
                      onClick={() => handleCopy(codeKey, codeString)}
                    >
                      {copiedKey === codeKey ? (
                        <>
                          <Check className="h-3 w-3" /> {'Copied'}
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" /> {'Copy'}
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter
                      style={isDarkTheme ? atomDark : prism}
                      language={language}
                      PreTag="div"
                      className="m-0! bg-transparent! p-4! text-[0.86rem] leading-[1.65]!"
                      showLineNumbers={false}
                      customStyle={{ background: 'transparent', margin: 0 }}
                      codeTagProps={{ style: { background: 'transparent' } }}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                </div>
              );
            }
            return <code className="md-inline-code">{children}</code>;
          },
          pre: ({ children }) => <>{children}</>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
