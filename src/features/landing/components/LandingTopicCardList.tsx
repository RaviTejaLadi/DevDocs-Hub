import { ChevronRight } from 'lucide-react';
import type { Topic } from '@/data/topics';
import { ColoredIcon } from '@/components/icons/ColoredIcon';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { LandingTopicBadges } from './LandingTopicBadges';

type ColorTokens = { iconBg: string; iconColor: string };

type LandingTopicCardListProps = {
  topic: Topic;
  color: ColorTokens;
};

export function LandingTopicCardList({ topic, color }: LandingTopicCardListProps) {
  const { t } = useI18n();

  return (
    <>
      <div className="relative flex shrink-0 items-center gap-3">
        <div
          className={cn(
            'shrink-0 rounded-xl border border-border/30 p-2.5 shadow-none transition-transform duration-300 group-hover:scale-105',
            color.iconBg,
            color.iconColor
          )}
        >
          <ColoredIcon size={22}>{topic.icon}</ColoredIcon>
        </div>
      </div>
      <div className="relative min-w-0 flex-1 space-y-1.5">
        <h3 className="wrap-break-word text-base font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
          <TranslatedText text={topic.title} />
        </h3>
        <p className="wrap-break-word text-sm text-muted-foreground line-clamp-1 sm:line-clamp-2">
          <TranslatedText text={topic.description} />
        </p>
        <LandingTopicBadges items={topic.items} viewMode="list" />
      </div>
      <div className="relative flex min-w-0 w-full items-center justify-between gap-2 pt-1 sm:w-auto sm:justify-end sm:pt-0">
        <span className="shrink-0 rounded-md border border-border/40 bg-muted/35 px-2 py-0.5 text-xs font-semibold text-muted-foreground/90 tabular-nums">
          {t('landing.topicsCount', { count: topic.items.length })}
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
    </>
  );
}
