import type { Topic } from '@/data/topics';
import { ColoredIcon } from '@/components/icons/ColoredIcon';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { LandingTopicBadges } from './LandingTopicBadges';

type ColorTokens = { iconBg: string; iconColor: string };

type LandingTopicCardGridProps = {
  topic: Topic;
  color: ColorTokens;
};

export function LandingTopicCardGrid({ topic, color }: LandingTopicCardGridProps) {
  const { t } = useI18n();

  return (
    <>
      <div className="relative flex min-h-0 flex-1 items-start gap-3 overflow-hidden">
        <div
          className={cn(
            'shrink-0 rounded-xl border border-border/30 p-2 shadow-sm transition-transform duration-300 group-hover:scale-105',
            color.iconBg,
            color.iconColor
          )}
        >
          <ColoredIcon size={20}>{topic.icon}</ColoredIcon>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-[15px] font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
              <TranslatedText text={topic.title} />
            </h3>
            <span className="shrink-0 rounded-md border border-border/40 bg-muted/35 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-muted-foreground/90 tabular-nums">
              {t('landing.topicsCount', { count: topic.items.length })}
            </span>
          </div>
          <p className="mt-1 line-clamp-2 h-8 text-xs leading-4 text-muted-foreground">
            <TranslatedText text={topic.description} />
          </p>
        </div>
      </div>
      <LandingTopicBadges items={topic.items} viewMode="grid" />
    </>
  );
}
