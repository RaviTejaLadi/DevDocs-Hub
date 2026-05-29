import type { Stream, Topic, TopicItem } from '@/data/topics';
import { ChevronDown, FileText, Library, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { getCategoryVisual, getStreamEmoji } from '@/features/landing/constants';
import {
  docsFloatingActionButtonClass,
  docsFloatingActionButtonTopStackedClass,
  docsSidePanelScrollAreaClass,
  docsTopicBrowserSheetContentClass,
} from '@/constants/docsSidePanel';
import { cn } from '@/lib/utils';
import { flattenTopicItems } from '../utils';

export type DocsTopicBrowserSection = {
  stream: Stream;
  categories: { key: string; label: string; topics: Topic[] }[];
};

type DocsTopicBrowserSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sections: DocsTopicBrowserSection[];
  activeTopicId: string | undefined;
  openCategories: Record<string, boolean>;
  onToggleCategory: (key: string) => void;
  onSelectTopic: (item: TopicItem, topicId: string) => void;
};

function formatCategoryLabel(label: string) {
  return label.replace(/-/g, ' ');
}

export function DocsTopicBrowserSheet({
  open,
  onOpenChange,
  sections,
  activeTopicId,
  openCategories,
  onToggleCategory,
  onSelectTopic,
}: DocsTopicBrowserSheetProps) {
  const { t } = useI18n();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={t('docs.topicBrowserTrigger')}
        className={cn(
          docsFloatingActionButtonClass,
          docsFloatingActionButtonTopStackedClass,
          'border-primary/25 bg-primary/8 hover:bg-primary/12 text-primary shadow-lg',
          open && 'hidden'
        )}
        onClick={() => onOpenChange(true)}
      >
        <Library className="h-4 w-4" />
      </Button>

      <SheetContent side="right" overlayClassName="z-[68] backdrop-blur-[2px]" className={docsTopicBrowserSheetContentClass}>
        <SheetHeader className="shrink-0 gap-0 border-b border-border/30 px-4 py-3.5 text-left">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-0.5">
              <SheetTitle className="text-[15px] font-semibold leading-snug tracking-tight">
                {t('docs.topicBrowserTitle')}
              </SheetTitle>
              <SheetDescription className="text-xs leading-relaxed text-muted-foreground">
                {t('docs.topicBrowserSubtitle')}
              </SheetDescription>
            </div>
            <SheetClose asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 shrink-0 rounded-lg text-muted-foreground hover:text-foreground"
                aria-label="Close"
              >
                <X className="size-4" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <ScrollArea className={cn(docsSidePanelScrollAreaClass, 'min-h-0 overflow-hidden')}>
          <div className="space-y-7 px-4 py-4 pb-6">
            {sections.map(({ stream, categories }) => (
              <section key={stream.id} className="min-w-0">
                <div className="mb-2.5 flex items-center gap-2.5">
                  <div className="relative shrink-0" aria-hidden>
                    <div
                      className={cn(
                        'flex size-9 items-center justify-center rounded-lg border border-border/50',
                        'bg-background text-primary shadow-sm [&_svg]:size-4'
                      )}
                    >
                      {stream.icon ?? <FileText className="size-4" strokeWidth={1.75} />}
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 flex size-[18px] items-center justify-center rounded-full border border-border/50 bg-background text-[9px] leading-none shadow-sm">
                      {getStreamEmoji(stream.id)}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                    <h3 className="truncate text-sm font-semibold leading-tight text-foreground">
                      <TranslatedText text={stream.title} />
                    </h3>
                    <span className="shrink-0 tabular-nums text-[11px] font-medium text-muted-foreground">
                      {t('docs.topicsInStream', { count: stream.topics.length })}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  {categories.map((cat) => {
                    const ck = `${stream.id}::${cat.key}`;
                    const isOpen = openCategories[ck] ?? false;
                    const catVisual = getCategoryVisual(cat.label);
                    const categoryLabel = formatCategoryLabel(cat.label);

                    return (
                      <div
                        key={ck}
                        className={cn(
                          'overflow-hidden rounded-lg border transition-colors duration-200',
                          isOpen
                            ? cn('border-border/50 bg-card/50 shadow-sm', catVisual.ring)
                            : 'border-border/35 bg-card/25 hover:border-border/50 hover:bg-card/40'
                        )}
                      >
                        <button
                          type="button"
                          className={cn(
                            'flex w-full min-h-10 items-center gap-2.5 px-3 py-2.5 text-left',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                          )}
                          aria-expanded={isOpen}
                          onClick={() => onToggleCategory(ck)}
                        >
                          <span
                            className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border/40 bg-background/90 text-base leading-none shadow-sm"
                            aria-hidden
                          >
                            {catVisual.emoji}
                          </span>
                          <span className="min-w-0 flex-1 truncate text-sm font-medium capitalize tracking-tight text-foreground">
                            {categoryLabel}
                          </span>
                          <span className="shrink-0 tabular-nums rounded-md bg-muted/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            {cat.topics.length}
                          </span>
                          <ChevronDown
                            className={cn(
                              'size-4 shrink-0 text-muted-foreground transition-transform duration-200',
                              isOpen && 'rotate-180 text-foreground'
                            )}
                            aria-hidden
                          />
                        </button>

                        {isOpen ? (
                          <ul
                            className="border-t border-border/30 bg-background/60 py-1 dark:bg-background/35"
                            role="list"
                          >
                            {cat.topics.map((visTopic) => {
                              const jumpItem = flattenTopicItems(visTopic.items)[0];
                              if (!jumpItem) return null;
                              const isCurrentTopic = activeTopicId === visTopic.id;
                              const iconEl = visTopic.icon ?? (
                                <FileText className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
                              );

                              return (
                                <li key={visTopic.id}>
                                  <button
                                    type="button"
                                    aria-current={isCurrentTopic ? 'page' : undefined}
                                    className={cn(
                                      'flex w-full min-h-10 items-center gap-2.5 px-3 py-2 text-left text-[13px] transition-colors',
                                      'hover:bg-muted/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring',
                                      isCurrentTopic &&
                                        'bg-primary/10 font-medium text-foreground shadow-[inset_3px_0_0_0_hsl(var(--primary))]'
                                    )}
                                    onClick={() => onSelectTopic(jumpItem, visTopic.id)}
                                  >
                                    <span
                                      className={cn(
                                        'flex size-7 shrink-0 items-center justify-center rounded-md [&_svg]:size-3.5',
                                        isCurrentTopic
                                          ? 'bg-primary/15 text-primary'
                                          : 'bg-muted/40 text-muted-foreground'
                                      )}
                                    >
                                      {iconEl}
                                    </span>
                                    <span className="min-w-0 flex-1 truncate leading-snug">
                                      <TranslatedText text={visTopic.title} />
                                    </span>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
