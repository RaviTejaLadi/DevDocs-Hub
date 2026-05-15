import { memo, useCallback, useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import type { TopicItem } from '../topics';
import MarkdownRender from '../components/MarkdownRender';
import { TranslatedText } from '@/i18n/TranslatedText';
import { cn } from '@/lib/utils';

const EAGER_MOUNT_COUNT = 2;
/** Prefetch band: ~one viewport above/below the scroll root so mounts happen before the card is centered. */
const LAZY_ROOT_MARGIN = '95% 0px 95% 0px';

export type DocsFeedNavHandlers = {
  goToNextFrom: (idx: number) => void;
  goToPrevFrom: (idx: number) => void;
};

type DocsFeedTopicSectionProps = {
  item: TopicItem;
  idx: number;
  total: number;
  routeSlug: string | undefined;
  viewportRef: RefObject<HTMLDivElement | null>;
  feedNav: DocsFeedNavHandlers;
  inViewSlug: string;
  sectionClassName: string;
};

function DocsFeedTopicSectionInner({
  item,
  idx,
  total,
  routeSlug,
  viewportRef,
  feedNav,
  inViewSlug,
  sectionClassName,
}: DocsFeedTopicSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [contentMounted, setContentMounted] = useState(
    () => idx < EAGER_MOUNT_COUNT || item.id === routeSlug
  );

  useEffect(() => {
    if (item.id === routeSlug) {
      setContentMounted(true);
    }
  }, [item.id, routeSlug]);

  useEffect(() => {
    if (contentMounted) return;

    let io: IntersectionObserver | null = null;
    let raf = 0;
    let cancelled = false;

    let attempts = 0;
    const maxAttempts = 300;

    const attach = () => {
      if (cancelled) return;
      const el = sectionRef.current;
      const root = viewportRef.current;
      if (!el || !root) {
        if (attempts < maxAttempts) {
          attempts += 1;
          raf = requestAnimationFrame(attach);
        }
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setContentMounted(true);
              io?.disconnect();
              io = null;
              return;
            }
          }
        },
        { root, rootMargin: LAZY_ROOT_MARGIN, threshold: 0 }
      );
      io.observe(el);
    };

    attach();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [contentMounted, viewportRef]);

  const onReachEnd = useCallback(() => feedNav.goToNextFrom(idx), [feedNav, idx]);
  const onReachStart = useCallback(() => feedNav.goToPrevFrom(idx), [feedNav, idx]);

  return (
    <section
      ref={sectionRef}
      id={`doc-feed-${item.id}`}
      className={cn('doc-feed-section', sectionClassName)}
    >
      <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-1 px-1">
        <span className="inline-flex h-7 shrink-0 items-center rounded-full border border-border/50 bg-muted/40 px-2.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground tabular-nums">
          {idx + 1}/{total}
        </span>
        <h2 className="min-w-0 text-balance text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
          <TranslatedText text={item.title} />
        </h2>
      </div>

      <div className="prose prose-slate dark:prose-invert flex min-h-0 flex-1 flex-col overflow-hidden max-w-none min-w-0 prose-headings:font-semibold prose-headings:tracking-tight">
        {contentMounted ? (
          <MarkdownRender
            content={item.content}
            slideMode
            fillViewportCard
            headingIdScope={item.id}
            scrollIntentActive={inViewSlug === item.id}
            keyboardActive={inViewSlug === item.id}
            hasNextDocument={idx < total - 1}
            hasPrevDocument={idx > 0}
            onReachDocumentEnd={onReachEnd}
            onReachDocumentStart={onReachStart}
          />
        ) : (
          <div
            className="min-h-0 flex-1 rounded-[1.25rem] border border-border/30 bg-muted/10"
            aria-hidden
          />
        )}
      </div>
    </section>
  );
}

/**
 * One topic “card” in the infinite feed. Heavy markdown/slide UI mounts only when the section
 * nears the viewport so scrolling stays smooth.
 */
const DocsFeedTopicSection = memo(DocsFeedTopicSectionInner);
export default DocsFeedTopicSection;
