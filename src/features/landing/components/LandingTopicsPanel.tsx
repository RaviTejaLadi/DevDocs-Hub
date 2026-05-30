import type { Stream, Topic } from '@/data/topics';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { getStreamEmoji } from '../constants';
import type { ViewMode } from '../types';
import { LandingStreamTabs } from './LandingStreamTabs';
import { LandingTopicSection } from './LandingTopicSection';

type LandingTopicsPanelProps = {
  streams: Stream[];
  activeStreamId: string;
  activeStream: Stream | undefined;
  onSelectStream: (id: string) => void;
  groupedTopics: Record<string, Topic[]>;
  viewMode: ViewMode;
  collapsed: Record<string, boolean>;
  onToggleSection: (key: string) => void;
  onTopicSelect: (topicId: string, itemId: string) => void;
  totalTopicsInStream: number;
  filteredTopicsCount: number;
  hasSearch: boolean;
};

export function LandingTopicsPanel({
  streams,
  activeStreamId,
  activeStream,
  onSelectStream,
  groupedTopics,
  viewMode,
  collapsed,
  onToggleSection,
  onTopicSelect,
  totalTopicsInStream,
  filteredTopicsCount,
  hasSearch,
}: LandingTopicsPanelProps) {
  const { t } = useI18n();
  const matchPercent = totalTopicsInStream ? Math.round((filteredTopicsCount / totalTopicsInStream) * 100) : 0;
  const streamEmoji = activeStream ? getStreamEmoji(activeStream.id) : '📖';

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span aria-hidden>🎓</span>
          {t('landing.browseStreams')}
        </div>
        {(hasSearch || filteredTopicsCount !== totalTopicsInStream) && (
          <Badge variant="outline" className="h-6 px-2.5 text-xs font-medium border-border/45 bg-muted/30">
            {t('landing.showingTopics', { shown: filteredTopicsCount, total: totalTopicsInStream })}
          </Badge>
        )}
      </div>

      <LandingStreamTabs
        streams={streams}
        activeStreamId={activeStreamId}
        activeStream={activeStream}
        onSelectStream={onSelectStream}
      />

      {activeStream && (
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl border border-border/40 bg-card/55 backdrop-blur-sm p-4 sm:p-5',
            'shadow-[0_12px_32px_-24px_hsl(var(--foreground)/0.55)]'
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-transparent"
            aria-hidden
          />
          <div className="relative flex items-start gap-3.5">
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-background/80 text-xl shadow-sm"
              aria-hidden
            >
              {streamEmoji}
            </span>
            <div className="min-w-0 space-y-1">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                <TranslatedText text={activeStream.title} />
              </h2>
              {activeStream.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <TranslatedText text={activeStream.description} />
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {hasSearch && totalTopicsInStream > 0 && (
        <div className="rounded-xl border border-border/35 bg-muted/20 px-4 py-3 space-y-2">
          <div className="flex items-center justify-between gap-2 text-sm">
            <p className="text-muted-foreground font-medium">
              📊 {t('landing.showingTopics', { shown: filteredTopicsCount, total: totalTopicsInStream })}
            </p>
            <p className="text-xs text-muted-foreground/80 tabular-nums">{matchPercent}% matched</p>
          </div>
          <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-primary/70 to-primary transition-all duration-500 ease-out"
              style={{ width: `${matchPercent}%` }}
              role="progressbar"
              aria-valuenow={filteredTopicsCount}
              aria-valuemin={0}
              aria-valuemax={totalTopicsInStream}
            />
          </div>
        </div>
      )}

      {Object.keys(groupedTopics).length === 0 && (
        <div className="rounded-2xl border border-dashed border-border/50 bg-card/40 p-12 text-center space-y-3">
          <span className="text-4xl block" aria-hidden>
            🔎
          </span>
          <p className="text-sm text-muted-foreground">{t('landing.noTopicsInStream')}</p>
        </div>
      )}

      <div className="space-y-6">
        {Object.entries(groupedTopics).map(([category, topics]) => {
          const sectionKey = `${activeStream?.id}:${category}`;

          return (
            <LandingTopicSection
              key={sectionKey}
              category={category}
              topics={topics}
              viewMode={viewMode}
              isCollapsed={Boolean(collapsed[sectionKey])}
              onToggle={() => onToggleSection(sectionKey)}
              onTopicSelect={onTopicSelect}
            />
          );
        })}
      </div>
    </div>
  );
}
