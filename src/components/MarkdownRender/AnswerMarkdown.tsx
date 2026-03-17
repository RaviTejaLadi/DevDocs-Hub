import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function AnswerMarkdown({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn('interview-answer text-[15px] text-foreground/90', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="mb-3 last:mb-0 leading-[1.7]">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="my-3 pl-5 space-y-1.5 list-disc list-outside" role="list">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-3 pl-5 space-y-1.5 list-decimal list-outside" role="list">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-[1.6] pl-0.5">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          code: ({ inline, className: codeClassName, children, ...props }: Record<string, unknown>) => {
            const match = /language-(\w+)/.exec((codeClassName as string) || '');
            const isBlock = !inline && match;
            const codeString = String(children).replace(/\n$/, '');

            if (isBlock) {
              return (
                <div className="my-4 rounded-lg overflow-hidden border border-border bg-[#1e293b]">
                  <div className="flex items-center justify-end px-2 py-1.5 border-b border-white/10 bg-black/20">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1.5 text-xs text-slate-300 hover:text-white"
                      onClick={() => handleCopy(codeString)}
                    >
                      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                  </div>
                  <div className="overflow-x-auto p-4">
                    <SyntaxHighlighter
                      style={atomDark}
                      language={match[1]}
                      PreTag="div"
                      className="m-0! bg-transparent! p-0! text-sm!"
                      showLineNumbers={false}
                      {...props}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                </div>
              );
            }
            return (
              <code
                className={cn(
                  'font-mono text-[13px] px-1.5 py-0.5 rounded',
                  'bg-rose-100 text-rose-900 dark:bg-rose-950/70 dark:text-rose-200',
                  'border border-rose-200/60 dark:border-rose-800/50'
                )}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => <>{children}</>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
