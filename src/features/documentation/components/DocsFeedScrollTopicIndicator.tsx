import { useMemo } from 'react';
import type { Topic } from '@/data/topics';
import { cn } from '@/lib/utils';
import { TranslatedText } from '@/i18n/TranslatedText';

type DocsFeedScrollTopicIndicatorProps = {
  inViewFeedKey: string;
  feedRows: { topic: Topic }[];
  visible: boolean;
};

/** Floating pill: which topic chapter is currently in view while scrolling the feed. */
export function DocsFeedScrollTopicIndicator({ inViewFeedKey, feedRows, visible }: DocsFeedScrollTopicIndicatorProps) {
  const activeTopic = useMemo(() => {
    if (!inViewFeedKey) return null;
    const topicId = inViewFeedKey.split('/')[0];
    if (!topicId) return null;
    return feedRows.find((r) => r.topic.id === topicId)?.topic ?? null;
  }, [inViewFeedKey, feedRows]);

  if (!visible || !activeTopic) return null;

  return (
    <div
      className={cn(
        'pointer-events-none fixed start-[max(0.75rem,env(safe-area-inset-left))] z-30',
        'bottom-[max(5.5rem,calc(1.25rem+env(safe-area-inset-bottom)))] md:bottom-[max(1.5rem,env(safe-area-inset-bottom))]',
        'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300'
      )}
      role="status"
      aria-live="polite"
      aria-atomic
    >
      <div
        className={cn(
          'flex max-w-[min(16rem,calc(100vw-5rem))] items-center gap-2 rounded-full border border-primary/25 px-3.5 py-2 shadow-lg',
          'bg-card/92 backdrop-blur-xl supports-backdrop-filter:backdrop-blur-2xl dark:bg-card/78'
        )}
      >
        <span className="text-sm leading-none shrink-0" aria-hidden>
          📖
        </span>
        <span className="size-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]" aria-hidden />
        <span className="min-w-0 truncate text-xs font-semibold text-foreground">
          <TranslatedText text={activeTopic.title} />
        </span>
      </div>
    </div>
  );
}
