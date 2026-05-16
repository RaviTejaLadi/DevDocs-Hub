/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '@/lib/utils';
import { useTranslatedText } from '@/i18n/useTranslatedText';
import { useI18n } from '@/i18n/I18nProvider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useScrollViewport } from '@/context/scrollViewportContext';
import { buildMarkdownComponents } from './buildMarkdownComponents';

type Heading = { id: string; text: string; level: number; slideIndex?: number };

/** Caps slide card + xl TOC height; card uses max-height so short slides do not leave a tall empty pane. */
const DOC_READING_PANE_MAX_CLASS = 'max-h-[calc(100dvh-9rem)] sm:max-h-[calc(100dvh-9.5rem)]';

/** Scrollable body max = pane cap minus slide footer (controls + border). */
const DOC_SLIDE_BODY_MAX_CLASS = 'max-h-[calc(100dvh-9rem-3rem)] sm:max-h-[calc(100dvh-9.5rem-3rem)]';

const MAX_SLIDE_CHARS = 4200;
const MERGE_TINY_UNDER = 260;
/** Merge H2-based chunks forward until roughly this full to reduce “one line + huge whitespace” slides. */
const TARGET_SLIDE_CHARS = 1050;

/**
 * Dynamic slides: primary split on `##` (code-fence aware), then sub-split only
 * oversized sections, and merge very small adjacent slides so the deck fits the content.
 */
export function splitMarkdownIntoSlides(markdown: string): string[] {
  const normalized = markdown.replace(/\r\n/g, '\n');
  if (normalized.trim().length === 0) return [normalized];

  let slides = splitByH2Headings(normalized);
  if (slides.length === 0) slides = [normalized];

  slides = slides.flatMap((s) => (s.length > MAX_SLIDE_CHARS ? splitRoughlyEvenChunk(s, MAX_SLIDE_CHARS) : [s]));

  slides = mergeAdjacentTinySlides(slides, MERGE_TINY_UNDER);
  slides = mergeForwardToTargetSize(slides, TARGET_SLIDE_CHARS, MAX_SLIDE_CHARS);

  return slides.length > 0 ? slides : [normalized];
}

/** Pack consecutive slides until the current buffer reaches target size (or merge would exceed max). */
function mergeForwardToTargetSize(slides: string[], targetMin: number, maxChars: number): string[] {
  if (slides.length <= 1) return slides;
  const out: string[] = [];
  let buf = slides[0];

  for (let i = 1; i < slides.length; i++) {
    const next = slides[i];
    const combined = buf.length + next.length + 2;
    if (buf.length < targetMin && combined <= maxChars) {
      buf = `${buf}\n\n${next}`;
    } else {
      out.push(buf);
      buf = next;
    }
  }
  out.push(buf);
  return out;
}

function splitByH2Headings(markdown: string): string[] {
  const lines = markdown.split('\n');
  const slides: string[] = [];
  let current: string[] = [];
  let inFence = false;

  const flush = () => {
    const chunk = current.join('\n').trimEnd();
    if (chunk.length > 0) slides.push(chunk);
    current = [];
  };

  for (const line of lines) {
    const trimmedLeading = line.replace(/^\s*/, '');
    if (trimmedLeading.startsWith('```')) {
      inFence = !inFence;
      current.push(line);
      continue;
    }
    if (!inFence && trimmedLeading.startsWith('## ') && current.length > 0) {
      flush();
    }
    current.push(line);
  }
  flush();

  return slides;
}

/** Split long text into evenly sized chunks (fence-aware); used only when a section overflows. */
function splitRoughlyEvenChunk(markdown: string, maxCharsPerSlide: number): string[] {
  const normalized = markdown.replace(/\r\n/g, '\n');
  const n = normalized.length;
  if (n <= maxCharsPerSlide) return [normalized];

  const approxSlides = Math.max(1, Math.ceil(n / maxCharsPerSlide));
  const target = Math.ceil(n / approxSlides);

  const lines = normalized.split('\n');
  const slides: string[] = [];
  let buf: string[] = [];
  let count = 0;
  let inFence = false;

  const flush = () => {
    const text = buf.join('\n').trimEnd();
    if (text.length > 0) slides.push(text);
    buf = [];
    count = 0;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lead = line.replace(/^\s*/, '');
    if (lead.startsWith('```')) {
      inFence = !inFence;
    }
    buf.push(line);
    count += line.length + 1;

    if (!inFence && count >= target) {
      const next = lines[i + 1];
      if (line === '' || next === '' || next === undefined) {
        flush();
      } else if (count >= Math.floor(target * 1.45)) {
        flush();
      }
    }
  }
  flush();

  if (slides.length === 0) return [normalized];
  const last = slides[slides.length - 1];
  if (slides.length > 1 && last.length < 280) {
    slides[slides.length - 2] = `${slides[slides.length - 2]}\n\n${last}`;
    slides.pop();
  }
  return slides;
}

function mergeAdjacentTinySlides(slides: string[], minChars: number): string[] {
  if (slides.length <= 1) return slides;
  const out: string[] = [];
  let acc = slides[0];

  for (let i = 1; i < slides.length; i++) {
    const s = slides[i];
    const combined = acc.length + s.length + 2;
    if (acc.length < minChars && s.length < minChars && combined <= MAX_SLIDE_CHARS) {
      acc = `${acc}\n\n${s}`;
    } else {
      out.push(acc);
      acc = s;
    }
  }
  out.push(acc);
  return out;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function extractSlideTitle(markdown: string): string {
  const m = /^\s*#\s+(.+)$/m.exec(markdown);
  if (m) return m[1].trim();
  const m2 = /^\s*##\s+(.+)$/m.exec(markdown);
  if (m2) return m2[1].trim();
  const line = markdown.split('\n').find((l) => l.trim().length > 0);
  return (
    (line ?? '')
      .replace(/^#+\s*/, '')
      .trim()
      .slice(0, 96) || '—'
  );
}

function scopePrefixFromTopicId(topicIdOrScope?: string): string {
  if (!topicIdOrScope) return '';
  const s = topicIdOrScope
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return s ? `${s}-` : '';
}

function parseHeadingsFromSlides(slides: string[], scopePrefix = ''): Heading[] {
  const out: Heading[] = [];
  slides.forEach((slide, slideIndex) => {
    const used = new Map<string, number>();
    for (const line of slide.split('\n')) {
      const m = /^(\#{1,4})\s+(.+)$/.exec(line.trim());
      if (!m) continue;
      const level = m[1].length;
      const text = m[2].trim();
      let base = slugifyHeading(text) || 'heading';
      const n = (used.get(base) ?? 0) + 1;
      used.set(base, n);
      if (n > 1) base = `${base}-${n}`;
      out.push({ id: `${scopePrefix}s${slideIndex}-${base}`, text, level, slideIndex });
    }
  });
  return out;
}

type MarkdownRenderProps = {
  content: string;
  slideMode?: boolean;
  /** Unique topic id (slug) prefix so DOM heading ids stay unique in multi-topic feeds. */
  headingIdScope?: string;
  /** Omit right-hand TOC (e.g. when rendering a stacked feed — sidebar lists topics already). */
  hideToc?: boolean;
  /** Only the foreground topic registers wheel → next/previous-topic behavior. */
  scrollIntentActive?: boolean;
  /** Arrow keys navigate slides only when this topic is the active feed item. */
  keyboardActive?: boolean;
  /** When true, slide + TOC stretch to fill a fixed-height feed card (parents must be flex + min-h-0). */
  fillViewportCard?: boolean;
  hasNextDocument?: boolean;
  onReachDocumentEnd?: () => void;
  hasPrevDocument?: boolean;
  onReachDocumentStart?: () => void;
};

const MarkdownRenderInner = ({
  content,
  slideMode = false,
  headingIdScope = '',
  hideToc = false,
  fillViewportCard = false,
  scrollIntentActive = true,
  keyboardActive = true,
  hasNextDocument = false,
  onReachDocumentEnd,
  hasPrevDocument = false,
  onReachDocumentStart,
}: MarkdownRenderProps) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const contentRef = useRef<HTMLDivElement | null>(null);
  const slideBodyRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const progressRingRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const { t } = useI18n();
  const isDarkTheme = theme === 'dark';
  const translatedContent = useTranslatedText(content);
  const headingPrefix = scopePrefixFromTopicId(headingIdScope);
  const slideIdPrefix = useMemo(() => `${headingPrefix}s`, [headingPrefix]);
  const [pendingScrollHeadingId, setPendingScrollHeadingId] = useState<string | null>(null);
  const viewportScrollRootRef = useScrollViewport();
  const slides = useMemo(() => splitMarkdownIntoSlides(translatedContent), [translatedContent]);
  const [activeSlide, setActiveSlide] = useState(0);
  const endBumpLockRef = useRef(false);
  const startBumpLockRef = useRef(false);
  const slideDocNavRef = useRef({
    activeSlide: 0,
    slidesLength: 1,
    hasNextDocument: false,
    hasPrevDocument: false,
    onReachDocumentEnd: undefined as (() => void) | undefined,
    onReachDocumentStart: undefined as (() => void) | undefined,
  });

  useLayoutEffect(() => {
    slideDocNavRef.current = {
      activeSlide,
      slidesLength: slides.length,
      hasNextDocument,
      hasPrevDocument,
      onReachDocumentEnd,
      onReachDocumentStart,
    };
  }, [activeSlide, slides.length, hasNextDocument, hasPrevDocument, onReachDocumentEnd, onReachDocumentStart]);

  useEffect(() => {
    setActiveSlide(0);
  }, [translatedContent, slideMode]);

  useEffect(() => {
    if (slideMode) {
      setHeadings(parseHeadingsFromSlides(slides, headingPrefix));
      return;
    }
    if (!contentRef.current) return;
    const elements = contentRef.current.querySelectorAll('h1, h2, h3, h4');
    const collected = Array.from(elements)
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: Number(el.tagName.substring(1)),
      }));
    setHeadings(collected);
  }, [slideMode, slides, translatedContent, headingPrefix]);

  // Scroll spy + reading-progress (TOC + ring) — slide body vs main viewport
  useEffect(() => {
    if (slideMode) {
      if (!slideBodyRef.current) return;
      const body = slideBodyRef.current;
      const headingEls = headings
        .filter((h) => h.slideIndex === activeSlide)
        .map((h) => document.getElementById(h.id))
        .filter((el): el is HTMLElement => Boolean(el));

      const observer =
        headingEls.length === 0
          ? null
          : new IntersectionObserver(
              (entries) => {
                const visible = entries
                  .filter((e) => e.isIntersecting)
                  .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]?.target.id) setActiveId(visible[0].target.id);
              },
              { root: body, rootMargin: '-12% 0px -50% 0px', threshold: [0, 0.25, 1] }
            );
      headingEls.forEach((el) => observer?.observe(el));
      scrollContainerRef.current = body;

      let frameId = 0;
      const updateProgress = () => {
        if (frameId) return;
        frameId = window.requestAnimationFrame(() => {
          frameId = 0;
          if (!progressRingRef.current || !slideBodyRef.current) return;
          const b = slideBodyRef.current;
          const max = b.scrollHeight - b.clientHeight;
          const intra = max > 0 ? (b.scrollTop / max) * (100 / Math.max(slides.length, 1)) : 0;
          const base = (activeSlide / Math.max(slides.length, 1)) * 100;
          const pct = Math.min(100, base + intra);
          progressRingRef.current.style.setProperty('--progress', String(pct));
          progressRingRef.current.dataset.label = `${Math.round(pct)}%`;
        });
      };
      body.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress();

      return () => {
        observer?.disconnect();
        body.removeEventListener('scroll', updateProgress);
        if (frameId) window.cancelAnimationFrame(frameId);
      };
    }

    if (!headings.length) return;

    if (!contentRef.current) return;
    const headingEls = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const scrollRoot = viewportScrollRootRef?.current ?? null;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      scrollRoot
        ? { root: scrollRoot, rootMargin: '-96px 0px -62% 0px', threshold: [0, 1] }
        : { rootMargin: '-96px 0px -68% 0px', threshold: [0, 1] }
    );
    headingEls.forEach((el) => observer.observe(el));

    let scrollEl: HTMLElement | null = scrollRoot;
    if (!scrollEl && contentRef.current) {
      scrollEl = contentRef.current.parentElement;
      while (scrollEl && scrollEl !== document.body) {
        const overflowY = window.getComputedStyle(scrollEl).overflowY;
        if (overflowY === 'auto' || overflowY === 'scroll') break;
        scrollEl = scrollEl.parentElement;
      }
    }
    scrollContainerRef.current = scrollEl ?? null;

    let frameId = 0;
    const updateProgress = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        if (!progressRingRef.current) return;

        const tgt = scrollContainerRef.current ?? document.scrollingElement ?? document.documentElement;
        const scrollTop = tgt.scrollTop;
        const max = tgt.scrollHeight - tgt.clientHeight;
        const progress = max > 0 ? Math.min(100, Math.max(0, (scrollTop / max) * 100)) : 0;

        progressRingRef.current.style.setProperty('--progress', String(progress));
        progressRingRef.current.dataset.label = `${Math.round(progress)}%`;
      });
    };
    const tgt = scrollContainerRef.current ?? window;
    tgt.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      tgt.removeEventListener('scroll', updateProgress);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [slideMode, activeSlide, headings, slides.length, translatedContent, viewportScrollRootRef]);

  useEffect(() => {
    slideBodyRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [activeSlide]);

  useEffect(() => {
    if (!pendingScrollHeadingId) return;
    const id = pendingScrollHeadingId;
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setPendingScrollHeadingId(null);
    });
  }, [activeSlide, pendingScrollHeadingId]);

  /**
   * “Infinite” doc nav: on last slide / first slide, when both the main scroll viewport and the
   * slide body are at the end (non-scrollable counts as at end), wheel crosses into next/prev topic.
   */
  useEffect(() => {
    if (!slideMode || !scrollIntentActive) return;
    const viewport = viewportScrollRootRef?.current;
    if (!viewport) return;

    const atVerticalEnd = (el: HTMLElement | null) => {
      if (!el) return true;
      const max = el.scrollHeight - el.clientHeight;
      if (max <= 12) return true;
      return el.scrollTop >= max - 12;
    };

    const atVerticalStart = (el: HTMLElement | null) => {
      if (!el) return true;
      return el.scrollTop <= 12;
    };

    const onWheel = (e: WheelEvent) => {
      const nav = slideDocNavRef.current;
      const body = slideBodyRef.current;
      const vpAtEnd = atVerticalEnd(viewport);
      const bodyAtEnd = atVerticalEnd(body);
      const vpAtStart = atVerticalStart(viewport);
      const bodyAtStart = atVerticalStart(body);

      if (e.deltaY > 8) {
        if (nav.activeSlide !== nav.slidesLength - 1) return;
        if (!nav.hasNextDocument || !nav.onReachDocumentEnd) return;
        if (!vpAtEnd || !bodyAtEnd) return;
        if (endBumpLockRef.current) return;
        endBumpLockRef.current = true;
        nav.onReachDocumentEnd();
        window.setTimeout(() => {
          endBumpLockRef.current = false;
        }, 900);
        return;
      }

      if (e.deltaY < -8) {
        if (nav.activeSlide !== 0) return;
        if (!nav.hasPrevDocument || !nav.onReachDocumentStart) return;
        if (!vpAtStart || !bodyAtStart) return;
        if (startBumpLockRef.current) return;
        startBumpLockRef.current = true;
        nav.onReachDocumentStart();
        window.setTimeout(() => {
          startBumpLockRef.current = false;
        }, 900);
      }
    };

    viewport.addEventListener('wheel', onWheel, { passive: true, capture: true });
    return () => viewport.removeEventListener('wheel', onWheel, true);
  }, [slideMode, scrollIntentActive, translatedContent, viewportScrollRootRef]);

  const handleCopy = useCallback((key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1800);
  }, []);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const activateHeadingFromToc = useCallback(
    (heading: Heading) => {
      if (slideMode && typeof heading.slideIndex === 'number') {
        setActiveSlide(heading.slideIndex);
        setPendingScrollHeadingId(heading.id);
        return;
      }
      scrollToId(heading.id);
    },
    [slideMode, scrollToId]
  );

  const handlePrevSlide = useCallback(() => {
    if (activeSlide > 0) {
      setActiveSlide((p) => p - 1);
      return;
    }
    if (hasPrevDocument) onReachDocumentStart?.();
  }, [activeSlide, hasPrevDocument, onReachDocumentStart]);

  const handleNextSlide = useCallback(() => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide((p) => p + 1);
      return;
    }
    if (hasNextDocument) onReachDocumentEnd?.();
  }, [activeSlide, hasNextDocument, onReachDocumentEnd, slides.length]);

  useEffect(() => {
    if (!slideMode || !keyboardActive) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevSlide();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextSlide();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slideMode, keyboardActive, handlePrevSlide, handleNextSlide]);

  const singleDocComponents = useMemo(
    () =>
      buildMarkdownComponents({
        idPrefix: '',
        isDarkTheme,
        copiedKey,
        t,
        handleCopy,
        scrollToId,
      }),
    [copiedKey, handleCopy, isDarkTheme, scrollToId, t]
  );

  const articleSurface = cn(
    'md-render overflow-hidden rounded-2xl border border-border/35 bg-card/55 backdrop-blur-sm',
    'px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-11',
    'shadow-[0_22px_52px_-30px_hsl(var(--foreground)/0.32)]'
  );

  return (
    <div
      className={cn(
        'relative grid gap-4 lg:gap-5',
        fillViewportCard && 'h-full min-h-0',
        hideToc ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem]',
        slideMode && !hideToc ? 'lg:items-stretch' : !hideToc ? 'lg:items-start' : undefined
      )}
    >
      <div className={cn('flex min-h-0 min-w-0 flex-col', fillViewportCard && 'h-full min-h-0')}>
        <div ref={contentRef} className={cn('min-h-0 min-w-0', fillViewportCard && 'flex h-full min-h-0 flex-col')}>
          {slideMode ? (
            <section
              className={cn(
                'w-full min-w-0 pb-0 pt-0',
                fillViewportCard ? 'flex min-h-0 flex-1 flex-col' : 'min-h-0 shrink-0'
              )}
            >
              <div
                className={cn(
                  'flex w-full min-w-0 shrink-0 flex-col overflow-hidden',
                  fillViewportCard ? 'h-full max-h-full min-h-0 flex-1' : DOC_READING_PANE_MAX_CLASS,
                  'rounded-2xl border border-border/40 bg-linear-to-b from-card/88 to-card/72 backdrop-blur-md sm:rounded-[1.4rem]',
                  'shadow-[0_24px_60px_-34px_hsl(var(--foreground)/0.38)] ring-1 ring-black/4 dark:from-card/60 dark:to-card/45 dark:ring-white/6'
                )}
                role="region"
                aria-label={t('markdown.slideCarouselLabel')}
              >
                <div
                  ref={slideBodyRef}
                  className={cn(
                    'md-render md-render-slide overflow-x-hidden overflow-y-auto overscroll-y-auto',
                    'px-5 pt-4 pb-5 sm:px-8 sm:pt-5 sm:pb-6',
                    fillViewportCard ? 'min-h-0 flex-1' : DOC_SLIDE_BODY_MAX_CLASS
                  )}
                >
                  <div className="relative z-10 mx-auto w-full max-w-200">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={buildMarkdownComponents({
                        idPrefix: `${slideIdPrefix}${activeSlide}-`,
                        isDarkTheme,
                        copiedKey,
                        t,
                        handleCopy,
                        scrollToId,
                        compactSlide: true,
                      })}
                    >
                      {slides[activeSlide] ?? ''}
                    </ReactMarkdown>
                  </div>
                </div>

                <footer className="flex shrink-0 items-center gap-2 border-t border-border/35 bg-muted/20 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 shrink-0 border-border/60 bg-background/80 px-2 shadow-none sm:min-w-19"
                    onClick={handlePrevSlide}
                    disabled={activeSlide === 0 && !hasPrevDocument}
                    aria-label={t('markdown.prevSlide')}
                  >
                    <ChevronLeft className="size-3.5 shrink-0 opacity-70" aria-hidden />
                    <span className="text-xs">{t('markdown.prevSlide')}</span>
                  </Button>
                  <div className="min-w-0 flex-1 text-center">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
                      {t('markdown.slideLabel')} {activeSlide + 1}/{slides.length}
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 shrink-0 border-border/60 bg-background/80 px-2 shadow-none sm:min-w-19"
                    onClick={handleNextSlide}
                    disabled={activeSlide >= slides.length - 1 && !hasNextDocument}
                    aria-label={t('markdown.nextSlide')}
                  >
                    <span className="text-xs">{t('markdown.nextSlide')}</span>
                    <ChevronRight className="size-3.5 shrink-0 opacity-70" aria-hidden />
                  </Button>
                </footer>
              </div>
            </section>
          ) : (
            <article className={cn('flex-1 min-w-0 mx-auto w-full', articleSurface)}>
              <div className="relative z-1">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={singleDocComponents}>
                  {translatedContent}
                </ReactMarkdown>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      {!hideToc && headings.length > 0 && (
        <aside
          className={cn(
            'hidden min-h-0 shrink-0 lg:flex lg:w-72 lg:flex-col',
            slideMode && 'lg:self-stretch',
            fillViewportCard ? 'lg:relative lg:top-auto' : 'sticky top-24',
            slideMode
              ? fillViewportCard
                ? 'h-full min-h-0 max-h-full'
                : DOC_READING_PANE_MAX_CLASS
              : 'max-h-[calc(100vh-7rem)]',
            !slideMode && 'self-start'
          )}
        >
          <div
            className={cn(
              'rounded-xl border border-border/35 bg-card/50 backdrop-blur-sm p-4 shadow-[0_14px_36px_-24px_hsl(var(--foreground)/0.28)]',
              slideMode && 'flex h-full min-h-0 flex-col overflow-hidden'
            )}
          >
            <div className="flex items-center justify-between mb-3.5 shrink-0">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t('markdown.onThisPage')}
              </span>
              <div
                ref={progressRingRef}
                className="md-progress-ring"
                data-label="0%"
                style={{ ['--progress' as any]: 0 }}
              />
            </div>
            <div className="-mx-1 mb-3 h-px shrink-0 bg-border/40" />

            <ScrollArea
              className={cn(
                'pr-1.5',
                slideMode ? 'flex min-h-0 flex-1 flex-col overflow-hidden' : 'h-[calc(100vh-13rem)]'
              )}
            >
              <TooltipProvider delayDuration={300}>
                <nav className="space-y-0.5">
                  {headings.map((heading) => {
                    const indent =
                      heading.level === 1
                        ? 'pl-3'
                        : heading.level === 2
                        ? 'pl-3'
                        : heading.level === 3
                        ? 'pl-7'
                        : 'pl-10';
                    const shouldShowHeadingTooltip = heading.text.length > 42;
                    if (!shouldShowHeadingTooltip) {
                      return (
                        <button
                          key={heading.id}
                          type="button"
                          onClick={() => activateHeadingFromToc(heading)}
                          className={cn('md-toc-item', indent, activeId === heading.id && 'active')}
                        >
                          <span className="block truncate">{heading.text}</span>
                        </button>
                      );
                    }

                    return (
                      <Tooltip key={heading.id}>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            onClick={() => activateHeadingFromToc(heading)}
                            className={cn('md-toc-item', indent, activeId === heading.id && 'active')}
                          >
                            <span className="block truncate">{heading.text}</span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="max-w-80 wrap-break-word">
                          {heading.text}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </nav>
              </TooltipProvider>
            </ScrollArea>
          </div>
        </aside>
      )}
    </div>
  );
};

const MarkdownRender = memo(MarkdownRenderInner);
MarkdownRender.displayName = 'MarkdownRender';

export default MarkdownRender;
