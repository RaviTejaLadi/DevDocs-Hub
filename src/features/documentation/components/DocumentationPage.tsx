import { useNavigate } from 'react-router-dom';
import { getStreamByTopicId } from '@/data/topics';
import { Fragment, useMemo } from 'react';
import { ChevronUp, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import DocsFeedTopicSection from './DocsFeedTopicSection';
import { DocsTopicBrowserSheet } from './DocsTopicBrowserSheet';
import { FALLBACK_SCROLL_ROOT } from '../constants';
import { DOC_FEED_SECTION_SHELL_CLASS } from '../constants';
import { docFeedSectionDomId, groupFeedRowsByTopic } from '../utils';
import { DocsFeedStreamBanner } from './DocsFeedStreamBanner';
import { DocumentationTopicHero } from './DocumentationTopicHero';
import { DocsFeedTopicContinuationHero } from './DocsFeedTopicContinuationHero';
import { DocsFeedTopicZone } from './DocsFeedTopicZone';
import { DocsFeedScrollTopicIndicator } from './DocsFeedScrollTopicIndicator';
import { useDocumentationPage } from '../hooks';

const DocumentationPage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const {
    categoryId,
    slug,
    topic,
    content,
    activeStream,
    feedRows,
    feedNav,
    navigateToFeedItem,
    inViewFeedKey,
    chainHasMoreBelow,
    chainHasMoreAbove,
    prependSentinelRef,
    appendSentinelRef,
    viewportRef,
    docsTopicBrowserSections,
    topicBrowser,
    showScrollTop,
    scrollFeedToTop,
  } = useDocumentationPage();

  const topicBlocks = useMemo(() => groupFeedRowsByTopic(feedRows), [feedRows]);

  const {
    topicBrowserOpen,
    topicBrowserOpenCats,
    setTopicBrowserOpenCats,
    onTopicBrowserOpenChange,
    setTopicBrowserOpen,
  } = topicBrowser;

  if (!topic || !content) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md border-dashed border-border/50 bg-card/50 w-full">
          <CardContent className="pt-8 pb-8 text-center space-y-4">
            <span className="text-5xl block" aria-hidden>
              📚
            </span>
            <h2 className="text-2xl font-bold text-foreground">{t('docs.pageNotFound')}</h2>
            <p className="text-muted-foreground">{t('docs.notFoundDescription')}</p>
            <Button onClick={() => navigate('/')} className="w-full rounded-xl">
              <Home className="mr-2 h-4 w-4" />
              {t('docs.backHome')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!content.content) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p>{t('docs.loading')}</p>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <div className="max-w-none min-w-0 flex flex-col gap-5 pb-24 sm:gap-6">
        {activeStream ? (
          <div className="mb-1">
            <DocsFeedStreamBanner stream={activeStream} />
          </div>
        ) : null}
        <DocumentationTopicHero topic={topic} />
        {chainHasMoreAbove ? <div ref={prependSentinelRef} className="h-1 w-full shrink-0" aria-hidden /> : null}
        {topicBlocks.map((block) => {
          const firstGlobalIdx = block.entries[0]!.globalIdx;
          return (
            <Fragment key={block.topic.id}>
              {firstGlobalIdx > 0 ? (
                <>
                  {(() => {
                    const prevT = feedRows[firstGlobalIdx - 1]!.topic;
                    const sp = getStreamByTopicId(prevT.id);
                    const sc = getStreamByTopicId(block.topic.id);
                    return sp && sc && sp.id !== sc.id ? (
                      <div className="mb-1 mt-2 sm:mt-3">
                        <DocsFeedStreamBanner stream={sc} />
                      </div>
                    ) : null;
                  })()}
                  <DocsFeedTopicContinuationHero topic={block.topic} />
                </>
              ) : null}
              <DocsFeedTopicZone topic={block.topic}>
                {block.entries.map(({ row, globalIdx }) => (
                  <DocsFeedTopicSection
                    key={`${row.topic.id}-${row.item.id}`}
                    item={row.item}
                    topicItems={block.topic.items}
                    idx={globalIdx}
                    total={feedRows.length}
                    sectionDomId={docFeedSectionDomId(row.topic.id, row.item.id)}
                    isCurrentRoute={slug === row.item.id && categoryId === row.topic.id}
                    viewportRef={viewportRef ?? FALLBACK_SCROLL_ROOT}
                    feedNav={feedNav}
                    isActive={inViewFeedKey === `${row.topic.id}/${row.item.id}`}
                    sectionClassName={DOC_FEED_SECTION_SHELL_CLASS}
                    chainHasMoreToNextTopic={chainHasMoreBelow && globalIdx === feedRows.length - 1}
                    chainHasMoreToPrevTopic={chainHasMoreAbove && globalIdx === 0}
                  />
                ))}
              </DocsFeedTopicZone>
            </Fragment>
          );
        })}
        {chainHasMoreBelow ? <div ref={appendSentinelRef} className="h-1 w-full shrink-0" aria-hidden /> : null}
      </div>

      <DocsTopicBrowserSheet
        open={topicBrowserOpen}
        onOpenChange={onTopicBrowserOpenChange}
        sections={docsTopicBrowserSections}
        activeTopicId={categoryId}
        openCategories={topicBrowserOpenCats}
        onToggleCategory={(ck) =>
          setTopicBrowserOpenCats((prev) => ({
            ...prev,
            [ck]: !(prev[ck] ?? false),
          }))
        }
        onSelectTopic={(item, topicId) => {
          setTopicBrowserOpen(false);
          navigateToFeedItem(item, topicId, {
            scrollBehavior: 'auto',
            scrollToTopicStart: true,
          });
        }}
      />

      <DocsFeedScrollTopicIndicator inViewFeedKey={inViewFeedKey} feedRows={feedRows} visible={feedRows.length > 1} />

      {showScrollTop && (
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={scrollFeedToTop}
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 rounded-full border border-border/50 bg-card/90 shadow-lg backdrop-blur-sm hover:bg-card hover:shadow-xl md:right-8 size-11"
          aria-label={t('docs.scrollToTop')}
        >
          <ChevronUp className="size-5" />
        </Button>
      )}
    </div>
  );
};

export default DocumentationPage;
