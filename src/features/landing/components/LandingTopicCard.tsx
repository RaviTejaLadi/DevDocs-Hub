import type { KeyboardEvent } from 'react';
import type { Topic } from '@/data/topics';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/utils';
import type { ViewMode } from '../types';
import { LandingTopicCardGrid } from './LandingTopicCardGrid';
import { LandingTopicCardList } from './LandingTopicCardList';

type LandingTopicCardProps = {
  topic: Topic;
  colorIndex: number;
  viewMode: ViewMode;
  onSelect: (topicId: string, itemId: string) => void;
};

export function LandingTopicCard({ topic, colorIndex, viewMode, onSelect }: LandingTopicCardProps) {
  const color = colors[colorIndex % colors.length];
  const firstItemId = topic.items[0]?.id;
  const isGrid = viewMode === 'grid';

  const activate = () => {
    if (firstItemId) onSelect(topic.id, firstItemId);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activate();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={firstItemId ? activate : undefined}
      onKeyDown={firstItemId ? onKeyDown : undefined}
      className={cn(
        'group relative min-w-0 max-w-full cursor-pointer overflow-hidden rounded-xl border border-border/35 bg-card/85 backdrop-blur-sm text-card-foreground touch-manipulation',
        'shadow-[var(--panel-shadow)] dark:shadow-none',
        'transition-all duration-300 hover:border-primary/35 hover:bg-card hover:-translate-y-0.5 hover:shadow-[var(--panel-shadow-raised)] dark:hover:shadow-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        isGrid ? 'flex h-[8.5rem] flex-col p-4' : 'flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4'
      )}
    >
      <div
        className="pointer-events-none absolute -right-3 -top-3 size-16 rounded-full bg-primary/5 blur-2xl transition-opacity duration-300 group-hover:bg-primary/10"
        aria-hidden
      />
      {isGrid ? (
        <LandingTopicCardGrid topic={topic} color={color} />
      ) : (
        <LandingTopicCardList topic={topic} color={color} />
      )}
    </article>
  );
}
