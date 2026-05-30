import { ChevronDown, Layers } from 'lucide-react';
import type { Topic } from '@/data/topics';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { getCategoryVisual } from '../constants';
import type { ViewMode } from '../types';
import { LandingTopicCard } from './LandingTopicCard';

type LandingTopicSectionProps = {
  category: string;
  topics: Topic[];
  viewMode: ViewMode;
  isCollapsed: boolean;
  onToggle: () => void;
  onTopicSelect: (topicId: string, itemId: string) => void;
};

export function LandingTopicSection({
  category,
  topics,
  viewMode,
  isCollapsed,
  onToggle,
  onTopicSelect,
}: LandingTopicSectionProps) {
  const isGrid = viewMode === 'grid';
  const categoryLabel = category.replace(/-/g, ' ');
  const visual = getCategoryVisual(category);

  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-2xl border bg-card/55 backdrop-blur-sm p-4 sm:p-5',
        'shadow-[0_12px_28px_-24px_hsl(var(--foreground)/0.6)]',
        visual.ring
      )}
    >
      <div
        className={cn('pointer-events-none absolute inset-0 bg-linear-to-br opacity-80', visual.accent)}
        aria-hidden
      />

      <div className="relative">
        <button
          type="button"
          onClick={onToggle}
          className="group flex w-full min-w-0 touch-manipulation items-center justify-between gap-3 py-1 text-left"
        >
          <div className="flex min-w-0 flex-1 items-center gap-2.5">
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-background/70 text-lg shadow-sm"
              aria-hidden
            >
              {visual.emoji}
            </span>
            <h2 className="min-w-0 flex-1 text-base font-semibold capitalize tracking-tight text-foreground wrap-break-word hyphens-auto sm:text-lg">
              {categoryLabel}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Badge
              variant="secondary"
              className="h-7 px-2.5 border border-border/35 bg-secondary/65 hidden sm:inline-flex"
            >
              <Layers className="h-3.5 w-3.5 mr-1 opacity-70" />
              {topics.length}
            </Badge>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-muted-foreground transition-transform duration-200',
                isCollapsed && '-rotate-90'
              )}
            />
          </div>
        </button>

        {!isCollapsed && (
          <div
            className={cn(
              'mt-4 min-w-0',
              isGrid ? 'grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-3'
            )}
          >
            {topics.map((topic, index) => (
              <LandingTopicCard
                key={topic.id}
                topic={topic}
                colorIndex={index}
                viewMode={viewMode}
                onSelect={onTopicSelect}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
