import { ChevronDown } from 'lucide-react';
import type { Topic } from '@/data/topics';
import { cn } from '@/lib/utils';
import type { ViewMode } from '../types';
import { LandingTopicCard } from './LandingTopicCard';
import { Separator } from '@/components/ui/separator';

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

  return (
    <section className="mb-4 min-w-0">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full min-w-0 touch-manipulation items-center justify-between gap-3 py-2.5 text-left"
      >
        <h2 className="min-w-0 flex-1 text-base font-semibold capitalize tracking-tight text-foreground wrap-break-word hyphens-auto pr-2 sm:text-lg">
          {category.replace(/-/g, ' ')}
        </h2>
        <ChevronDown
          className={cn('h-5 w-5 shrink-0 text-muted-foreground transition-transform', isCollapsed && '-rotate-90')}
        />
      </button>
      <Separator className="mb-2 bg-border/30" />
      {!isCollapsed && (
        <div
          className={cn(
            'min-w-0 ',
            isGrid ? 'grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-2.5'
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
    </section>
  );
}
