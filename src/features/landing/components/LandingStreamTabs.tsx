import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Stream } from '@/data/topics';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';

type LandingStreamTabsProps = {
  streams: Stream[];
  activeStreamId: string;
  activeStream: Stream | undefined;
  onSelectStream: (id: string) => void;
};

export function LandingStreamTabs({
  streams,
  activeStreamId,
  activeStream,
  onSelectStream,
}: LandingStreamTabsProps) {
  const { t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollAffordances = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const max = Math.max(0, scrollWidth - clientWidth);
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    updateScrollAffordances();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateScrollAffordances());
    ro.observe(el);
    const id = requestAnimationFrame(() => updateScrollAffordances());
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, [streams, updateScrollAffordances]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const tab = el.querySelector(`[data-stream-tab="${CSS.escape(activeStreamId)}"]`);
    if (tab instanceof HTMLElement) {
      tab.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }
    requestAnimationFrame(() => updateScrollAffordances());
  }, [activeStreamId, streams, updateScrollAffordances]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = Math.max(160, Math.floor(el.clientWidth * 0.55)) * dir;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div
      className={cn(
        'mb-8 flex min-w-0 items-stretch gap-1',
        'max-sm:rounded-2xl max-sm:border max-sm:border-border/45 max-sm:bg-card/45 max-sm:p-1 max-sm:shadow-sm',
        'max-sm:ring-1 max-sm:ring-border/25'
      )}
    >
      <Button
        type="button"
        variant="outline"
        size="icon"
        disabled={!canScrollLeft}
        aria-label={t('landing.streamTabsScrollLeft')}
        onClick={() => scrollByDir(-1)}
        className={cn(
          'hidden shrink-0 self-center',
          /** Chevrons only on narrow viewports where tabs don’t wrap */
          'max-sm:inline-flex',
          'h-10 w-10 rounded-xl border-border/50 bg-background/90 shadow-sm backdrop-blur-sm touch-manipulation',
          'disabled:pointer-events-none disabled:opacity-25'
        )}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </Button>

      <div className="relative min-h-10.5 min-w-0 flex-1">
        {canScrollLeft ? (
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-card from-25% to-transparent sm:hidden"
            aria-hidden
          />
        ) : null}
        {canScrollRight ? (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-card from-25% to-transparent sm:hidden"
            aria-hidden
          />
        ) : null}

        <nav
          aria-label={t('landing.streamTabs')}
          ref={scrollRef}
          onScroll={updateScrollAffordances}
          className={cn(
            'flex max-h-14 min-h-11 min-w-0 overflow-x-auto overflow-y-hidden overscroll-x-contain sm:max-h-none sm:overflow-visible',
            'touch-pan-x [-webkit-overflow-scrolling:touch]',
            '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
          )}
        >
          <div className="flex w-max items-center gap-2 px-0.5 py-0.5 sm:w-full sm:min-w-0 sm:flex-wrap sm:px-0 sm:py-0">
            {streams.map((stream) => {
              const isActive = stream.id === activeStream?.id;
              return (
                <button
                  key={stream.id}
                  type="button"
                  data-stream-tab={stream.id}
                  onClick={() => onSelectStream(stream.id)}
                  aria-pressed={isActive}
                  className={cn(
                    'inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm transition-all',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    'max-sm:shadow-sm',
                    isActive
                      ? 'border-primary/55 bg-primary/12 text-primary shadow-sm ring-1 ring-primary/15'
                      : 'border-border/45 bg-background/70 text-muted-foreground hover:bg-accent hover:text-foreground'
                  )}
                >
                  {stream.icon && <span className="shrink-0 [&_svg]:text-current">{stream.icon}</span>}
                  <span className="font-medium">
                    <TranslatedText text={stream.title} />
                  </span>
                  <span
                    className={cn(
                      'ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums',
                      isActive ? 'bg-primary/15 text-primary' : 'bg-muted/80 text-muted-foreground'
                    )}
                  >
                    {stream.topics.length}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <Button
        type="button"
        variant="outline"
        size="icon"
        disabled={!canScrollRight}
        aria-label={t('landing.streamTabsScrollRight')}
        onClick={() => scrollByDir(1)}
        className={cn(
          'hidden shrink-0 self-center',
          'max-sm:inline-flex',
          'h-10 w-10 rounded-xl border-border/50 bg-background/90 shadow-sm backdrop-blur-sm touch-manipulation',
          'disabled:pointer-events-none disabled:opacity-25'
        )}
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </Button>
    </div>
  );
}
