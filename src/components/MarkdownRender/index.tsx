/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

const MAX_SLIDE_CHARS = 4200;
const MERGE_TINY_UNDER = 260;

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

  return slides.length > 0 ? slides : [normalized];
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
  return (line ?? '').replace(/^#+\s*/, '').trim().slice(0, 96) || '—';
}

function parseHeadingsFromSlides(slides: string[]): Heading[] {
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
      out.push({ id: `s${slideIndex}-${base}`, text, level, slideIndex });
    }
  });
  return out;
}

type MarkdownRenderProps = {
  content: string;
  slideMode?: boolean;
  hasNextDocument?: boolean;
  onReachDocumentEnd?: () => void;
  hasPrevDocument?: boolean;
  onReachDocumentStart?: () => void;
};

const MarkdownRender = ({
  content,
  slideMode = false,
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
  const [pendingScrollHeadingId, setPendingScrollHeadingId] = useState<string | null>(null);
  const viewportScrollRootRef = useScrollViewport();
  const slides = useMemo(() => splitMarkdownIntoSlides(translatedContent), [translatedContent]);
  const slideTitles = useMemo(() => slides.map(extractSlideTitle), [slides]);
  const [activeSlide, setActiveSlide] = useState(0);
  const endBumpLockRef = useRef(false);
  const startBumpLockRef = useRef(false);

  useEffect(() => {
    setActiveSlide(0);
  }, [translatedContent, slideMode]);

  useEffect(() => {
    if (slideMode) {
      setHeadings(parseHeadingsFromSlides(slides));
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
  }, [slideMode, slides, translatedContent]);

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

  useEffect(() => {
    if (!slideMode || !hasNextDocument || !onReachDocumentEnd) return;
    const viewport = viewportScrollRootRef?.current;
    if (!viewport) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY < 8) return;
      const { scrollTop, scrollHeight, clientHeight } = viewport;
      const overflow = scrollHeight - clientHeight;
      if (overflow < 64) return;
      if (scrollTop < overflow - 10) return;
      if (endBumpLockRef.current) return;
      endBumpLockRef.current = true;
      onReachDocumentEnd();
      window.setTimeout(() => {
        endBumpLockRef.current = false;
      }, 900);
    };

    viewport.addEventListener('wheel', onWheel, { passive: true });
    return () => viewport.removeEventListener('wheel', onWheel);
  }, [slideMode, hasNextDocument, onReachDocumentEnd, translatedContent, viewportScrollRootRef]);

  useEffect(() => {
    if (!slideMode || !hasPrevDocument || !onReachDocumentStart) return;
    const viewport = viewportScrollRootRef?.current;
    if (!viewport) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > -8) return;
      if (viewport.scrollTop > 10) return;
      if (startBumpLockRef.current) return;
      startBumpLockRef.current = true;
      onReachDocumentStart();
      window.setTimeout(() => {
        startBumpLockRef.current = false;
      }, 900);
    };

    viewport.addEventListener('wheel', onWheel, { passive: true });
    return () => viewport.removeEventListener('wheel', onWheel);
  }, [slideMode, hasPrevDocument, onReachDocumentStart, translatedContent, viewportScrollRootRef]);

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
    if (!slideMode) return;
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
  }, [slideMode, handlePrevSlide, handleNextSlide]);

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
    'md-render overflow-hidden rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm',
    'px-5 py-7 sm:px-8 sm:py-10 lg:px-12',
    'shadow-[0_18px_45px_-28px_hsl(var(--foreground)/0.35)]'
  );

  return (
    <div className="relative grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_18rem] gap-8 xl:gap-12">
      <div className="flex min-h-0 min-w-0 flex-col">
        <div ref={contentRef} className="min-h-0 min-w-0">
          {slideMode ? (
            <section className="w-full min-h-0 min-w-0 shrink-0 pb-0 pt-0">
              <div
                className={cn(
                  'flex w-full min-h-0 min-w-0 shrink-0 flex-col overflow-hidden',
                  // Fits below navbar + docs chrome so the whole card stays in view; body scrolls inside.
                  'h-[calc(100dvh-9rem)] max-h-[calc(100dvh-9rem)] sm:h-[calc(100dvh-9.5rem)] sm:max-h-[calc(100dvh-9.5rem)]',
                  'rounded-[1.35rem] border border-border/50 bg-card/65 backdrop-blur-md',
                  'shadow-[0_28px_70px_-32px_hsl(var(--foreground)/0.42)] ring-1 ring-black/4 dark:ring-white/6'
                )}
                role="region"
                aria-label={t('markdown.slideCarouselLabel')}
              >
                <header className="shrink-0 space-y-2 border-b border-border/35 px-5 pb-3 pt-4">
                  <div className="flex items-start gap-3">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-violet-500/90 to-fuchsia-500/90 text-xs font-bold text-white shadow-sm ring-2 ring-background"
                      aria-hidden
                    >
                      {activeSlide + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {t('markdown.slideLabel')} {activeSlide + 1}/{slides.length}
                      </p>
                      <h2 className="mt-1 text-lg font-semibold leading-snug tracking-tight text-foreground line-clamp-3">
                        {slideTitles[activeSlide] ?? '—'}
                      </h2>
                    </div>
                  </div>
                </header>

                <div
                  ref={slideBodyRef}
                  className="md-render min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain px-5 py-3"
                >
                  <div className="relative z-1">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={buildMarkdownComponents({
                        idPrefix: `s${activeSlide}-`,
                        isDarkTheme,
                        copiedKey,
                        t,
                        handleCopy,
                        scrollToId,
                      })}
                    >
                      {slides[activeSlide] ?? ''}
                    </ReactMarkdown>
                  </div>
                </div>

                <footer className="flex shrink-0 items-stretch gap-2 border-t border-border/40 bg-card/45 px-3 py-3 sm:px-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 flex-1 gap-2 border-border/50"
                    onClick={handlePrevSlide}
                    disabled={activeSlide === 0 && !hasPrevDocument}
                    aria-label={t('markdown.prevSlide')}
                  >
                    <ChevronLeft className="h-4 w-4 shrink-0" />
                    <span className="truncate">{t('markdown.prevSlide')}</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-11 flex-1 gap-2 border-border/50"
                    onClick={handleNextSlide}
                    disabled={activeSlide >= slides.length - 1 && !hasNextDocument}
                    aria-label={t('markdown.nextSlide')}
                  >
                    <span className="truncate">{t('markdown.nextSlide')}</span>
                    <ChevronRight className="h-4 w-4 shrink-0" />
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
      {headings.length > 0 && (
        <aside className="hidden xl:block w-72 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)]">
          <div className="rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-4 shadow-[0_12px_30px_-22px_hsl(var(--foreground)/0.25)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {t('markdown.onThisPage')}
              </span>
              <div
                ref={progressRingRef}
                className="md-progress-ring"
                data-label="0%"
                style={{ ['--progress' as any]: 0 }}
              />
            </div>
            <div className="-mx-1 mb-3 h-px bg-border/40" />

            <ScrollArea className="h-[calc(100vh-13rem)] pr-1.5">
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

export default MarkdownRender;
