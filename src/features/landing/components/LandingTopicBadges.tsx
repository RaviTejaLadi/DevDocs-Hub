import type { TopicItem } from '@/data/topics';
import { cn } from '@/lib/utils';
import { badgeToneClasses } from '../constants';
import type { ViewMode } from '../types';

type LandingTopicBadgesProps = {
  items: TopicItem[];
  viewMode: ViewMode;
};

export function LandingTopicBadges({ items, viewMode }: LandingTopicBadgesProps) {
    const badgeLimit = viewMode === 'grid' ? 3 : 6;
  const badgeItems = items.slice(0, badgeLimit);
  const extraBadgeCount = Math.max(items.length - badgeLimit, 0);
  const isGrid = viewMode === 'grid';

  return (
    <div
      className={cn(
        isGrid
          ? 'mt-2 flex h-5 shrink-0 flex-nowrap items-center gap-1 overflow-hidden'
          : 'flex min-w-0 flex-wrap gap-1.5 pt-0.5'
      )}
    >
      {badgeItems.map((item, badgeIndex) => (
        <span
          key={item.id}
          className={cn(
            'inline-flex items-center rounded-md border',
            isGrid
              ? 'min-w-0 max-w-[32%] shrink px-1.5 py-0.5 text-[11px] leading-none'
              : 'max-w-full px-2 py-0.5 text-xs',
            badgeToneClasses[badgeIndex % badgeToneClasses.length]
          )}
        >
          <span className="truncate">
            {item.title}
          </span>
        </span>
      ))}
      {extraBadgeCount > 0 && (
        <span
          className={cn(
            'inline-flex items-center rounded-md border border-border/40 bg-muted/35 text-muted-foreground/90',
            isGrid ? 'shrink-0 px-1.5 py-0.5 text-[11px] leading-none' : 'px-2 py-0.5 text-xs'
          )}
        >
          {`+${extraBadgeCount} more`}
        </span>
      )}
    </div>
  );
}
