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
        'group min-w-0 max-w-full cursor-pointer rounded-lg mt-2 border border-border/40 bg-card text-card-foreground touch-manipulation',
        'transition-all duration-200 hover:border-primary/30 hover:shadow-sm',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        isGrid
          ? 'flex h-32 flex-col overflow-hidden p-4'
          : 'flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4'
      )}
    >
      {isGrid ? (
        <LandingTopicCardGrid topic={topic} color={color} />
      ) : (
        <LandingTopicCardList topic={topic} color={color} />
      )}
    </article>
  );
}
