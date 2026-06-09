/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, memo, type ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronLeft, ChevronRight, ListTree } from 'lucide-react';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useScrollViewport } from '@/context/scrollViewportContext';
import { docsArticleSurfaceClass, docsPanelShadowClass } from '@/constants/docsSidePanel';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { buildMarkdownComponents } from './buildMarkdownComponents';
import type { DocContent } from '@/types/docContent';
import { isDocContentString } from '@/types/docContent';

type Heading = { id: string; text: string; level: number; slideIndex?: number };

type TocTreeNode = { heading: Heading; children: TocTreeNode[] };

/** Nest flat headings into a tree by level (h2 under h1, h3 under h2, etc.). */
function buildTocTree(headings: Heading[]): TocTreeNode[] {
  const root: TocTreeNode[] = [];
  const stack: { level: number; node: TocTreeNode }[] = [];

  for (const heading of headings) {
    const node: TocTreeNode = { heading, children: [] };

    while (stack.length > 0 && stack[stack.length - 1]!.level >= heading.level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(node);
    } else {
      stack[stack.length - 1]!.node.children.push(node);
    }

    stack.push({ level: heading.level, node });
  }

  return root;
}

/** Flatten nested TOC nodes into sub-menu rows with depth padding. */
function renderTocSubRows(
  nodes: TocTreeNode[],
  depth: number,
  activeId: string,
  onActivate: (heading: Heading) => void
): ReactElement[] {
  return nodes.flatMap(({ heading, children }) => {
    const isActive = activeId === heading.id;
    const row = (
      <SidebarMenuSubItem key={heading.id}>
        <SidebarMenuSubButton asChild isActive={isActive} size="sm">
          <button type="button" style={{ paddingLeft: `${8 + depth * 10}px` }} onClick={() => onActivate(heading)}>
            <span className="truncate">{heading.text}</span>
          </button>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
    if (children.length === 0) return [row];
    return [row, ...renderTocSubRows(children, depth + 1, activeId, onActivate)];
  });
}

/** Caps slide card + xl TOC height; card uses max-height so short slides do not leave a tall empty pane. */
const DOC_READING_PANE_MAX_CLASS = 'max-h-[calc(100dvh-9rem)] sm:max-h-[calc(100dvh-9.5rem)]';

/** Scrollable body max = pane cap minus floating nav clearance. */
const DOC_SLIDE_BODY_MAX_CLASS = 'max-h-[calc(100dvh-9rem-2.5rem)] sm:max-h-[calc(100dvh-9.5rem-2.5rem)]';

const CARD_FLOAT_NAV_BTN_CLASS = cn(
  'absolute z-20 inline-flex size-10 shrink-0 items-center justify-center rounded-full',
  'border border-border/50 bg-card/90 text-foreground shadow-none backdrop-blur-sm',
  'transition-[transform,opacity,box-shadow] duration-200',
  'hover:bg-card hover:shadow-none active:scale-[0.96]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  'disabled:pointer-events-none disabled:opacity-30'
);

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

type DocBodyRendererProps = {
  content: DocContent;
  markdownBody: string;
  components: ReturnType<typeof buildMarkdownComponents>;
};

function DocBodyRenderer({ content, markdownBody, components }: DocBodyRendererProps) {
  if (!isDocContentString(content)) {
    const MdxDoc = content;
    return <MdxDoc components={components} />;
  }

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {markdownBody}
    </ReactMarkdown>
  );
}

type MarkdownRenderProps = {
  content: DocContent;
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
  const cardScrollMode = slideMode;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const contentRef = useRef<HTMLDivElement | null>(null);
  const slideBodyRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const progressRingRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const isStringContent = isDocContentString(content);
  const headingPrefix = scopePrefixFromTopicId(headingIdScope);
  const slideIdPrefix = useMemo(() => `${headingPrefix}s`, [headingPrefix]);
  const [pendingScrollHeadingId, setPendingScrollHeadingId] = useState<string | null>(null);
  const viewportScrollRootRef = useScrollViewport();
  const slides = useMemo(() => (isStringContent ? splitMarkdownIntoSlides(content) : ['']), [isStringContent, content]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [tocCollapsed, setTocCollapsed] = useState(false);
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
    /* eslint-disable-next-line react-hooks/set-state-in-effect -- reset deck when the bound document / topic changes */
    setActiveSlide(0);
    setTocCollapsed(false);
  }, [content, slideMode, headingIdScope]);

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
  }, [slideMode, slides, content, headingPrefix]);

  // Scroll spy + reading-progress (TOC + ring) — card scroll body vs main viewport
  useEffect(() => {
    if (cardScrollMode) {
      if (!slideBodyRef.current) return;
      const body = slideBodyRef.current;
      const headingEls = headings
        .filter((h) => (slideMode ? h.slideIndex === activeSlide : true))
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
          const intra = max > 0 ? b.scrollTop / max : 0;
          const base = slideMode ? (activeSlide / Math.max(slides.length, 1)) * 100 : 0;
          const pct = slideMode
            ? Math.min(100, base + intra * (100 / Math.max(slides.length, 1)))
            : Math.min(100, intra * 100);
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
  }, [cardScrollMode, slideMode, activeSlide, headings, slides.length, content, viewportScrollRootRef]);

  /** Reset card scroll body when the document or slide changes (topic jump must land at intro, not mid-card). */
  useLayoutEffect(() => {
    slideBodyRef.current?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [headingIdScope, content, slideMode ? activeSlide : -1]);

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
    if (!cardScrollMode || !scrollIntentActive) return;
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
        if (slideMode && nav.activeSlide !== nav.slidesLength - 1) return;
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
        if (slideMode && nav.activeSlide !== 0) return;
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
  }, [cardScrollMode, slideMode, scrollIntentActive, content, viewportScrollRootRef]);

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
    if (slideMode && activeSlide < slides.length - 1) {
      setActiveSlide((p) => p + 1);
      return;
    }
    if (hasNextDocument) onReachDocumentEnd?.();
  }, [activeSlide, hasNextDocument, onReachDocumentEnd, slideMode, slides.length]);

  const handleCardNavPrev = useCallback(() => {
    if (slideMode) {
      handlePrevSlide();
      return;
    }
    if (hasPrevDocument) onReachDocumentStart?.();
  }, [slideMode, handlePrevSlide, hasPrevDocument, onReachDocumentStart]);

  const handleCardNavNext = useCallback(() => {
    if (slideMode) {
      handleNextSlide();
      return;
    }
    if (hasNextDocument) onReachDocumentEnd?.();
  }, [slideMode, handleNextSlide, hasNextDocument, onReachDocumentEnd]);

  useEffect(() => {
    if (!slideMode || !keyboardActive) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleCardNavPrev();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleCardNavNext();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slideMode, keyboardActive, handleCardNavPrev, handleCardNavNext]);

  const singleDocComponents = useMemo(
    () =>
      buildMarkdownComponents({
        idPrefix: '',
        isDarkTheme,
        copiedKey,
        handleCopy,
        scrollToId,
      }),
    [copiedKey, handleCopy, isDarkTheme, scrollToId]
  );

  const articleSurface = cn('md-render', docsArticleSurfaceClass, 'px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-11');

  const tocTree = useMemo(() => buildTocTree(headings), [headings]);

  const tocNav = (
    <SidebarMenu>
      {tocTree.map(({ heading, children }) => {
        const isActive = activeId === heading.id;
        return (
          <SidebarMenuItem key={heading.id}>
            <SidebarMenuButton asChild isActive={isActive}>
              <button type="button" onClick={() => activateHeadingFromToc(heading)}>
                <span className="truncate">{heading.text}</span>
              </button>
            </SidebarMenuButton>
            {children.length > 0 ? (
              <SidebarMenuSub className="border-border/35">
                {renderTocSubRows(children, 1, activeId, activateHeadingFromToc)}
              </SidebarMenuSub>
            ) : null}
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );

  return (
    <div
      className={cn(
        'relative grid gap-4 lg:gap-4',
        fillViewportCard && 'h-full min-h-0',
        hideToc
          ? 'grid-cols-1'
          : tocCollapsed
          ? 'grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto]'
          : 'grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem]',
        cardScrollMode && !hideToc ? 'lg:items-stretch' : !hideToc ? 'lg:items-start' : undefined
      )}
    >
      <div className={cn('flex min-h-0 min-w-0 flex-col', fillViewportCard && 'h-full min-h-0')}>
        <div ref={contentRef} className={cn('min-h-0 min-w-0', fillViewportCard && 'flex h-full min-h-0 flex-col')}>
          {cardScrollMode ? (
            <section
              className={cn(
                'w-full min-w-0 pb-0 pt-0',
                fillViewportCard ? 'flex min-h-0 flex-1 flex-col' : 'min-h-0 shrink-0'
              )}
            >
              <div
                className={cn(
                  'relative flex w-full min-w-0 shrink-0 flex-col overflow-hidden',
                  fillViewportCard ? 'h-full max-h-full min-h-0 flex-1' : DOC_READING_PANE_MAX_CLASS,
                  'rounded-2xl bg-linear-to-b from-card/88 to-card/72 backdrop-blur-md sm:rounded-[1.4rem] ring-1 ring-black/4 dark:from-card/60 dark:to-card/45 dark:ring-white/6',
                  docsPanelShadowClass
                )}
                role="region"
                aria-label={slideMode ? 'Document slides' : undefined}
              >
                <div
                  ref={slideBodyRef}
                  className={cn(
                    'md-render md-render-slide overflow-x-hidden overflow-y-auto overscroll-y-auto',
                    'px-5 pt-4 pb-14 sm:px-8 sm:pt-5 sm:pb-16',
                    fillViewportCard ? 'min-h-0 flex-1' : DOC_SLIDE_BODY_MAX_CLASS
                  )}
                >
                  <div className="relative z-10 mx-auto w-full max-w-200">
                    <DocBodyRenderer
                      content={content}
                      markdownBody={slideMode ? slides[activeSlide] ?? '' : isStringContent ? content : ''}
                      components={buildMarkdownComponents({
                        idPrefix: slideMode ? `${slideIdPrefix}${activeSlide}-` : headingPrefix,
                        isDarkTheme,
                        copiedKey,
                        handleCopy,
                        scrollToId,
                        compactSlide: true,
                      })}
                    />
                  </div>
                </div>

                {slideMode ? (
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0.5 bg-border/30 dark:bg-border/40"
                    role="progressbar"
                    aria-valuenow={activeSlide + 1}
                    aria-valuemin={1}
                    aria-valuemax={slides.length}
                    aria-label={`${'Slide'} ${activeSlide + 1} of ${slides.length}`}
                  >
                    <div
                      className={cn(
                        'h-full bg-linear-to-r from-primary/50 via-primary to-primary/70 transition-[width] duration-300 ease-out',
                        keyboardActive && 'shadow-none'
                      )}
                      style={{ width: `${slides.length > 0 ? ((activeSlide + 1) / slides.length) * 100 : 0}%` }}
                    />
                  </div>
                ) : null}

                {slideMode ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className={cn(
                          CARD_FLOAT_NAV_BTN_CLASS,
                          'bottom-3 left-3 sm:bottom-4 sm:left-4',
                          keyboardActive && 'border-primary/30 shadow-none'
                        )}
                        onClick={handleCardNavPrev}
                        disabled={activeSlide === 0 && !hasPrevDocument}
                        aria-label={'Previous'}
                      >
                        <ChevronLeft className="size-5" aria-hidden />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">{'Previous'}</TooltipContent>
                  </Tooltip>
                ) : null}

                {slideMode ? (
                  <div
                    className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex max-w-[min(12rem,calc(100%-7rem))] -translate-x-1/2 flex-col items-center gap-1 sm:bottom-4"
                    aria-hidden
                  >
                    <span
                      className={cn(
                        'text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px]',
                        keyboardActive ? 'text-primary/85' : 'text-muted-foreground/85'
                      )}
                    >
                      {'Slide'}
                    </span>
                    {slides.length > 1 && slides.length <= 12 ? (
                      <div className="flex max-w-full items-center justify-center gap-1">
                        {slides.map((_, slideIdx) => (
                          <span
                            key={slideIdx}
                            className={cn(
                              'h-1 rounded-full transition-all duration-300',
                              slideIdx === activeSlide
                                ? 'w-4 bg-primary shadow-none'
                                : 'w-1 bg-border/55 dark:bg-border/65'
                            )}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {slideMode ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className={cn(
                          CARD_FLOAT_NAV_BTN_CLASS,
                          'bottom-3 right-3 sm:bottom-4 sm:right-4',
                          keyboardActive && 'border-primary/30 shadow-none'
                        )}
                        onClick={handleCardNavNext}
                        disabled={activeSlide >= slides.length - 1 && !hasNextDocument}
                        aria-label={'Next'}
                      >
                        <ChevronRight className="size-5" aria-hidden />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">{'Next'}</TooltipContent>
                  </Tooltip>
                ) : null}
              </div>
            </section>
          ) : (
            <article className={cn('flex-1 min-w-0 mx-auto w-full', articleSurface)}>
              <div className="relative z-1">
                <DocBodyRenderer
                  content={content}
                  markdownBody={isStringContent ? content : ''}
                  components={singleDocComponents}
                />
              </div>
            </article>
          )}
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      {!hideToc && headings.length > 0 && (
        <aside
          className={cn(
            'hidden min-h-0 shrink-0 lg:flex lg:flex-col',
            tocCollapsed ? 'lg:w-11' : 'lg:w-72',
            cardScrollMode && 'lg:self-stretch',
            fillViewportCard ? 'lg:relative lg:top-auto' : 'sticky top-24',
            cardScrollMode
              ? fillViewportCard
                ? 'h-full min-h-0 max-h-full'
                : DOC_READING_PANE_MAX_CLASS
              : 'max-h-[calc(100vh-7rem)]',
            !cardScrollMode && 'self-start'
          )}
        >
          <div
            className={cn(
              docsArticleSurfaceClass,
              'flex min-h-0 flex-col',
              tocCollapsed ? 'items-center p-2' : 'p-4',
              cardScrollMode && 'h-full overflow-hidden'
            )}
          >
            {tocCollapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-9 shrink-0 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    onClick={() => setTocCollapsed(false)}
                    aria-label={'Show on-this-page outline'}
                    aria-expanded={false}
                  >
                    <ListTree className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">{'Show on-this-page outline'}</TooltipContent>
              </Tooltip>
            ) : (
              <SidebarGroup className="flex min-h-0 flex-1 flex-col py-0">
                <SidebarGroupLabel className="mb-2 flex h-auto items-center justify-between gap-2 px-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{'On this page'}</span>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <div
                      ref={progressRingRef}
                      className="md-progress-ring"
                      data-label="0%"
                      style={{ ['--progress' as any]: 0 }}
                    />
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-8 shrink-0 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          onClick={() => setTocCollapsed(true)}
                          aria-label={'Hide on-this-page outline'}
                          aria-expanded={true}
                        >
                          <ChevronRight className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">{'Hide on-this-page outline'}</TooltipContent>
                    </Tooltip>
                  </div>
                </SidebarGroupLabel>
                <SidebarGroupContent className="min-h-0 flex-1">
                  <ScrollArea
                    className={cn(
                      'pr-1',
                      cardScrollMode ? 'flex min-h-0 flex-1 flex-col overflow-hidden' : 'h-[calc(100vh-13rem)]'
                    )}
                  >
                    <nav aria-label={'On this page'}>{tocNav}</nav>
                  </ScrollArea>
                </SidebarGroupContent>
              </SidebarGroup>
            )}
          </div>
        </aside>
      )}
    </div>
  );
};

const MarkdownRender = memo(MarkdownRenderInner);
MarkdownRender.displayName = 'MarkdownRender';

export default MarkdownRender;
