import type { LucideIcon } from 'lucide-react';
import { Crown, Flame, Rocket, Star, Sprout, TrendingUp, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TOPIC_BADGE_LABELS, topicBadgeToneClasses, type TopicBadgeKind } from '@/data/topics/topicBadges';

const BADGE_ICONS: Record<TopicBadgeKind, LucideIcon> = {
  beginner: Sprout,
  intermediate: TrendingUp,
  advanced: Zap,
  expert: Crown,
  popular: Star,
  'must-know': Flame,
  recommended: Rocket,
};

const BADGE_EMOJI: Partial<Record<TopicBadgeKind, string>> = {
  popular: '⭐',
  'must-know': '🔥',
  recommended: '🚀',
};

type TopicBadgeChipProps = {
  kind: TopicBadgeKind;
  /** Sidebar: compact chip with tooltip. Header: featured chip in doc feed. */
  variant?: 'sidebar' | 'header';
  active?: boolean;
  className?: string;
};

export function TopicBadgeChip({ kind, variant = 'sidebar', active = false, className }: TopicBadgeChipProps) {
  const Icon = BADGE_ICONS[kind];
  const emoji = BADGE_EMOJI[kind];
  const label = TOPIC_BADGE_LABELS[kind];

  if (variant === 'header') {
    return (
      <span
        className={cn(
          'inline-flex w-auto max-w-none shrink-0 items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-semibold leading-none tracking-tight sm:text-xs sm:px-2.5 sm:py-1',
          topicBadgeToneClasses[kind],
          active && 'ring-1 ring-primary/20',
          className
        )}
      >
        <Icon className="size-3 shrink-0 opacity-90 sm:size-3.5" aria-hidden />
        {emoji ? (
          <span className="text-[10px] sm:text-xs" aria-hidden>
            {emoji}
          </span>
        ) : null}
        <span className="whitespace-nowrap">{label}</span>
      </span>
    );
  }

  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={label}
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          className={cn(
            'inline-flex shrink-0 items-center gap-0.5 rounded-md border px-1 py-0.5 touch-manipulation',
            'text-[10px] font-semibold leading-none backdrop-blur-[2px] transition-[opacity,box-shadow,transform] duration-200',
            topicBadgeToneClasses[kind],
            active ? 'opacity-100 shadow-none' : 'opacity-80 group-hover/nav:opacity-100',
            className
          )}
        >
          <Icon className="size-4 shrink-0 opacity-85" aria-hidden />
        </button>
      </TooltipTrigger>
      <TooltipContent side="right" className="text-xs font-medium">
        {emoji ? `${emoji} ` : ''}
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
