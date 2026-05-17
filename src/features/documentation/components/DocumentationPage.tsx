import { useNavigate } from 'react-router-dom';
import { getStreamByTopicId } from '@/data/topics';
import { Fragment } from 'react';
import { ArrowRight, ChevronRight, ChevronUp, Home, FileText, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useI18n } from '@/i18n/I18nProvider';
import { cn } from '@/lib/utils';
import { TranslatedText } from '@/i18n/TranslatedText';
import DocsFeedTopicSection from './DocsFeedTopicSection';
import {
  docsSidePanelHeaderSurfaceClass,
  docsSidePanelNavSurfaceClass,
  docsSidePanelScrollAreaClass,
  docsSidePanelWidthClass,
} from '@/constants/docsSidePanel';
import { FALLBACK_SCROLL_ROOT } from '../constants';
import { DOC_FEED_SECTION_SHELL_CLASS } from '../constants';
import { flattenTopicItems, docFeedSectionDomId } from '../utils';
import { DocsFeedStreamBanner } from './DocsFeedStreamBanner';
import { DocumentationTopicHero } from './DocumentationTopicHero';
import { DocsFeedTopicContinuationHero } from './DocsFeedTopicContinuationHero';
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
        <Card className="max-w-md border-none bg-inherit w-full">
          <CardContent className="pt-6  text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">{t('docs.pageNotFound')}</h2>
            <p className="text-muted-foreground mb-6">{t('docs.notFoundDescription')}</p>
            <Button onClick={() => navigate('/')} className="w-full">
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
        {feedRows.map((row, idx) => (
          <Fragment key={`${row.topic.id}-${row.item.id}`}>
            {idx > 0 && row.topic.id !== feedRows[idx - 1]!.topic.id ? (
              <>
                {(() => {
                  const prevT = feedRows[idx - 1]!.topic;
                  const sp = getStreamByTopicId(prevT.id);
                  const sc = getStreamByTopicId(row.topic.id);
                  return sp && sc && sp.id !== sc.id ? (
                    <div className="mb-1 mt-2 sm:mt-3">
                      <DocsFeedStreamBanner stream={sc} />
                    </div>
                  ) : null;
                })()}
                <DocsFeedTopicContinuationHero topic={row.topic} />
              </>
            ) : null}
            <DocsFeedTopicSection
              item={row.item}
              idx={idx}
              total={feedRows.length}
              sectionDomId={docFeedSectionDomId(row.topic.id, row.item.id)}
              isCurrentRoute={slug === row.item.id && categoryId === row.topic.id}
              viewportRef={viewportRef ?? FALLBACK_SCROLL_ROOT}
              feedNav={feedNav}
              isActive={inViewFeedKey === `${row.topic.id}/${row.item.id}`}
              sectionClassName={DOC_FEED_SECTION_SHELL_CLASS}
              chainHasMoreToNextTopic={chainHasMoreBelow && idx === feedRows.length - 1}
              chainHasMoreToPrevTopic={chainHasMoreAbove && idx === 0}
            />
          </Fragment>
        ))}
        {chainHasMoreBelow ? <div ref={appendSentinelRef} className="h-1 w-full shrink-0" aria-hidden /> : null}
      </div>

      <Sheet open={topicBrowserOpen} onOpenChange={onTopicBrowserOpenChange}>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-haspopup="dialog"
          aria-expanded={topicBrowserOpen}
          aria-label={t('docs.topicBrowserTrigger')}
          className={cn(
            'fixed z-60 inline-flex size-11 rounded-full bg-card/85 shadow-lg backdrop-blur-md',
            'bg-linear-to-br from-card/95 via-card/88 to-muted/25 dark:from-card/90 dark:via-card/82 dark:to-muted/15',
            'shadow-[0_10px_34px_-14px_hsl(var(--primary)/0.42)]',
            'transition-[transform,box-shadow] duration-200 hover:shadow-[0_14px_40px_-16px_hsl(var(--primary)/0.48)] active:scale-[0.96]',
            'top-[calc(0.5rem+3.5rem+max(0px,env(safe-area-inset-top))+0.5rem+2.5rem+0.375rem)]',
            'right-[max(1rem,env(safe-area-inset-right))] sm:right-6',
            topicBrowserOpen && 'hidden'
          )}
          onClick={() => onTopicBrowserOpenChange(true)}
        >
          <Library className="size-[1.1rem] text-primary" strokeWidth={1.75} />
        </Button>

        <SheetContent
          side="right"
          overlayClassName="z-[68] backdrop-blur-[2px]"
          className={cn(
            'flex min-h-0 flex-col gap-0 overflow-hidden border-l border-border/30 p-0 sm:rounded-l-2xl',
            'z-70 bg-background/95 shadow-2xl backdrop-blur-xl supports-backdrop-filter:bg-background/78',
            docsSidePanelWidthClass
          )}
        >
          <SheetHeader className={cn(docsSidePanelHeaderSurfaceClass, 'px-4 pb-4 pt-5 text-left')}>
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
              <div className="absolute -right-10 -top-14 size-30 rounded-full bg-primary/10 blur-3xl dark:bg-primary/14" />
              <div className="absolute -bottom-16 -left-8 size-26 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" />
            </div>
            <div className="flex gap-3">
              <div
                className={cn(
                  'flex size-10 shrink-0 items-center justify-center rounded-xl',
                  'bg-muted/45 text-primary shadow-inner [&_svg]:size-[1.15rem]'
                )}
                aria-hidden
              >
                <Library strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <SheetTitle className="text-base font-semibold leading-snug tracking-tight">
                  {t('docs.topicBrowserTitle')}
                </SheetTitle>
                <SheetDescription className="text-xs leading-relaxed text-muted-foreground">
                  {t('docs.topicBrowserSubtitle')}
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>
          <ScrollArea className={cn(docsSidePanelScrollAreaClass, 'min-h-0 overflow-hidden')}>
            <div className="px-3 py-4">
              {docsTopicBrowserSections.map(({ stream, categories }, si) => (
                <Fragment key={stream.id}>
                  {si > 0 ? <Separator className="my-5 bg-border/30" decorative /> : null}
                  <section className={docsSidePanelNavSurfaceClass}>
                    <div className="mb-3 flex items-start gap-2.5 border-b border-border/20 pb-3">
                      <div
                        className={cn(
                          'flex size-9 shrink-0 items-center justify-center rounded-lg',
                          'bg-background/80 text-primary shadow-inner backdrop-blur-sm [&_svg]:size-[1.05rem]'
                        )}
                        aria-hidden
                      >
                        {stream.icon ?? <FileText className="size-[1.05rem]" strokeWidth={1.75} />}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="truncate text-[13px] font-semibold leading-tight tracking-tight">
                          <TranslatedText text={stream.title} />
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
                          <TranslatedText text={stream.description} />
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-0">
                      {categories.map((cat) => {
                        const ck = `${stream.id}::${cat.key}`;
                        const open = topicBrowserOpenCats[ck] ?? false;
                        return (
                          <Fragment key={ck}>
                            <div
                              className={cn(
                                'overflow-hidden rounded-lg transition-colors',
                                open
                                  ? 'bg-background/55 dark:bg-background/35'
                                  : 'bg-background/35 dark:bg-background/20'
                              )}
                            >
                              <button
                                type="button"
                                className={cn(
                                  'flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-2 text-left transition-colors',
                                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                                  open ? 'bg-muted/25 dark:bg-muted/15' : 'hover:bg-muted/30 dark:hover:bg-muted/12'
                                )}
                                aria-expanded={open}
                                onClick={() =>
                                  setTopicBrowserOpenCats((prev) => ({
                                    ...prev,
                                    [ck]: !(prev[ck] ?? false),
                                  }))
                                }
                              >
                                <ChevronRight
                                  className={cn(
                                    'size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out',
                                    open && 'rotate-90 text-foreground'
                                  )}
                                  aria-hidden
                                />
                                <span className="min-w-0 flex-1 truncate text-[11px] font-semibold uppercase tracking-[0.06em] text-foreground/85">
                                  {cat.label}
                                </span>
                                <span
                                  className={cn(
                                    'tabular-nums rounded-md bg-muted/50 px-1.5 py-px text-[10px] font-medium text-muted-foreground',
                                    open && 'bg-primary/12 text-foreground/80'
                                  )}
                                >
                                  {cat.topics.length}
                                </span>
                              </button>
                              {open ? (
                                <ul className="animate-in fade-in slide-in-from-top-1 space-y-1 px-1.5 pb-1.5 pt-1 duration-200">
                                  {cat.topics.map((visTopic) => {
                                    const jumpItem = flattenTopicItems(visTopic.items)[0];
                                    if (!jumpItem) return null;
                                    const iconEl = visTopic.icon ?? (
                                      <FileText
                                        className="size-3.5 shrink-0 text-primary"
                                        strokeWidth={1.75}
                                        aria-hidden
                                      />
                                    );
                                    const isCurrentTopic = categoryId === visTopic.id;
                                    return (
                                      <li key={visTopic.id}>
                                        <Button
                                          type="button"
                                          variant="ghost"
                                          aria-current={isCurrentTopic ? 'page' : undefined}
                                          className={cn(
                                            'group relative h-auto min-h-11 w-full justify-start gap-2.5 rounded-lg px-2 py-2 text-left shadow-none',
                                            'transition-colors',
                                            'bg-transparent hover:bg-muted/50 dark:hover:bg-muted/22',
                                            'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                                            isCurrentTopic &&
                                              cn(
                                                'bg-primary/11 hover:bg-primary/14 dark:bg-primary/14 dark:hover:bg-primary/17',
                                                'shadow-[inset_3px_0_0_0_hsl(var(--primary))]'
                                              )
                                          )}
                                          onClick={() => {
                                            setTopicBrowserOpen(false);
                                            navigateToFeedItem(jumpItem, visTopic.id, {
                                              scrollBehavior: 'auto',
                                              scrollToTopicStart: true,
                                            });
                                          }}
                                        >
                                          <span
                                            className={cn(
                                              'flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/35 [&_svg]:size-[0.95rem]',
                                              isCurrentTopic
                                                ? 'bg-primary/15 text-primary'
                                                : 'text-muted-foreground group-hover:bg-muted/50 group-hover:text-primary'
                                            )}
                                          >
                                            {iconEl}
                                          </span>
                                          <span className="min-w-0 flex-1 text-[13px] font-medium leading-snug">
                                            <TranslatedText text={visTopic.title} />
                                          </span>
                                          <ArrowRight
                                            className={cn(
                                              'size-4 shrink-0 transition-opacity duration-200',
                                              isCurrentTopic
                                                ? 'text-primary opacity-90'
                                                : 'text-muted-foreground opacity-0 group-hover:opacity-70'
                                            )}
                                            strokeWidth={2}
                                            aria-hidden
                                          />
                                        </Button>
                                      </li>
                                    );
                                  })}
                                </ul>
                              ) : null}
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </section>
                </Fragment>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {showScrollTop && (
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={scrollFeedToTop}
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40  rounded-full border border-border/50 bg-card/90 shadow-lg backdrop-blur-sm md:right-8"
          aria-label={t('docs.scrollToTop')}
        >
          <ChevronUp className="size-5" />
        </Button>
      )}
    </div>
  );
};

export default DocumentationPage;
