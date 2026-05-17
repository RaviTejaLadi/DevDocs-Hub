import type { Stream, Topic } from '@/data/topics';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
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
}: LandingTopicsPanelProps) {
  const { t } = useI18n();

  return (
    <>
      <LandingStreamTabs
        streams={streams}
        activeStreamId={activeStreamId}
        activeStream={activeStream}
        onSelectStream={onSelectStream}
      />

      {activeStream?.description && (
        <p className="mb-8 min-w-0 text-sm text-muted-foreground wrap-break-word">
          <TranslatedText text={activeStream.description} />
        </p>
      )}

      {Object.keys(groupedTopics).length === 0 && (
        <div className="rounded-lg border border-dashed border-border/50 bg-card/40 p-10 text-center text-sm text-muted-foreground">
          {t('landing.noTopicsInStream')}
        </div>
      )}

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
    </>
  );
}
