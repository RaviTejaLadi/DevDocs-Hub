import { useState, type ClassAttributes, type HTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import type { ExtraProps } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { useTranslatedText } from '@/i18n/useTranslatedText';
import { useI18n } from '@/i18n/I18nProvider';

type CodeComponentProps = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps;

export function AnswerMarkdown({ content, className }: { content: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const { t } = useI18n();
  const isDarkTheme = theme === 'dark';
  const translatedContent = useTranslatedText(content);

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
          p: ({ children }) => <p className="mb-3 last:mb-0 leading-[1.7]">{children}</p>,
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
          li: ({ children }) => <li className="leading-[1.6] pl-0.5">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
          code: ({ className: codeClassName, children }: CodeComponentProps) => {
            const match = /language-(\w+)/.exec(codeClassName || '');
            const isBlock = Boolean(match);
            const codeString = String(children ?? '').replace(/\n$/, '');

            if (isBlock) {
              return (
                <div
                  className={cn(
                    'my-4 rounded-lg overflow-hidden border border-border/40 bg-[#1e293b] relative',
                    isDarkTheme ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200 bg-slate-50'
                  )}
                >
                  <div className="absolute top-0 right-0 flex items-center justify-end px-2 py-1.5 ">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1.5 text-xs text-slate-300 hover:text-white"
                      onClick={() => handleCopy(codeString)}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy
                          className={cn(
                            'h-4 w-4 group-hover:scale-110 transition-transform',
                            isDarkTheme ? 'text-white' : 'text-slate-700'
                          )}
                        />
                      )}
                      {copied ? t('common.copied') : t('common.copy')}
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter
                      style={isDarkTheme ? atomDark : oneLight}
                      language={match?.[1]}
                      PreTag="div"
                      className="m-0! bg-transparent! p-6! text-sm sm:text-base"
                      showLineNumbers={false}
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
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => <>{children}</>,
        }}
      >
        {translatedContent}
      </ReactMarkdown>
    </div>
  );
}
