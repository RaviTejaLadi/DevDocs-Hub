import { useCallback, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { buildMarkdownComponents } from './buildMarkdownComponents';

export function AnswerMarkdown({ content, className }: { content: string; className?: string }) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const handleCopy = useCallback((key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey((currentKey) => (currentKey === key ? null : currentKey)), 1800);
  }, []);

  const components = useMemo(
    () =>
      buildMarkdownComponents({
        idPrefix: 'answer-',
        isDarkTheme,
        copiedKey,
        handleCopy,
        scrollToId: () => {},
        compactSlide: true,
      }),
    [copiedKey, handleCopy, isDarkTheme]
  );

  return (
    <div className={cn('md-render interview-answer text-[15px] leading-relaxed text-foreground/90', className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
