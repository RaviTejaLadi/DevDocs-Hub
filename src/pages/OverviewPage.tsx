import { useEffect, useRef, useState, type ElementType } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  HelpCircle,
  Code2,
  FlaskConical,
  Eye,
  Layers,
  ArrowRight,
  BookMarked,
  Library,
  PenLine,
  Sparkles,
  TrendingUp,
  BarChart3,
  Activity,
  Target,
  Star,
  Zap,
  Compass,
} from 'lucide-react';
import { STREAMS, TOPICS, type Topic, type TopicItem } from '@/data/topics';
import { GUIDES } from '@/data/guides';
import { INTERVIEW_QUESTIONS, INTERVIEW_TOPICS } from '@/data/interviewQuestions';
import { VISUALIZATION_PAGE_COMPONENTS } from '@/features/visualization/visualizationRegistry';
import { PLAYGROUND_PAGE_COMPONENTS } from '@/features/playground/playgroundRegistry';
import { PageSEO } from '@/components/seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { colors } from '@/constants/colors';
import { getStreamEmoji } from '@/features/landing/constants';

function countItems(items: TopicItem[]): number {
  let count = 0;
  for (const item of items) {
    count++;
    if (item.items?.length) count += countItems(item.items);
  }
  return count;
}

const TOTAL_DOCS = TOPICS.reduce((sum, t) => sum + countItems(t.items), 0);
const INTERVIEW_TOPIC_COUNT = INTERVIEW_TOPICS.length;
const INTERACTIVE_TOOL_COUNT =
  Object.keys(VISUALIZATION_PAGE_COMPONENTS).length + Object.keys(PLAYGROUND_PAGE_COMPONENTS).length;

const STATS = [
  {
    label: 'Docs & Notes',
    value: TOTAL_DOCS,
    suffix: '+',
    icon: Library,
    emoji: '📝',
    accent: 'from-emerald-500/14 via-emerald-500/5 to-transparent',
    ring: 'border-emerald-500/25',
    iconClass: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/12',
    gradient: 'from-emerald-500 to-teal-600',
    featured: true,
  },
  {
    label: 'Streams',
    value: STREAMS.length,
    suffix: '',
    icon: Layers,
    emoji: '🎓',
    accent: 'from-violet-500/14 via-violet-500/5 to-transparent',
    ring: 'border-violet-500/25',
    iconClass: 'text-violet-600 dark:text-violet-400 bg-violet-500/12',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    label: 'Topics',
    value: TOPICS.length,
    suffix: '',
    icon: BookMarked,
    emoji: '📚',
    accent: 'from-blue-500/14 via-blue-500/5 to-transparent',
    ring: 'border-blue-500/25',
    iconClass: 'text-blue-600 dark:text-sky-400 bg-blue-500/12',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    label: 'Guides',
    value: GUIDES.length,
    suffix: '',
    icon: BookOpen,
    emoji: '📖',
    accent: 'from-amber-500/14 via-amber-500/5 to-transparent',
    ring: 'border-amber-500/25',
    iconClass: 'text-amber-600 dark:text-amber-400 bg-amber-500/12',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    label: 'Interview Qs',
    value: INTERVIEW_QUESTIONS.length,
    suffix: '+',
    icon: HelpCircle,
    emoji: '🎯',
    accent: 'from-rose-500/14 via-rose-500/5 to-transparent',
    ring: 'border-rose-500/25',
    iconClass: 'text-rose-600 dark:text-rose-400 bg-rose-500/12',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    label: 'Visualizations',
    value: Object.keys(VISUALIZATION_PAGE_COMPONENTS).length,
    suffix: '',
    icon: Eye,
    emoji: '🧠',
    accent: 'from-cyan-500/14 via-cyan-500/5 to-transparent',
    ring: 'border-cyan-500/25',
    iconClass: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/12',
    gradient: 'from-cyan-500 to-sky-600',
  },
  {
    label: 'Playgrounds',
    value: Object.keys(PLAYGROUND_PAGE_COMPONENTS).length,
    suffix: '',
    icon: FlaskConical,
    emoji: '🧪',
    accent: 'from-orange-500/14 via-orange-500/5 to-transparent',
    ring: 'border-orange-500/25',
    iconClass: 'text-orange-600 dark:text-orange-400 bg-orange-500/12',
    gradient: 'from-orange-500 to-amber-600',
  },
] as const;

const FEATURE_CARDS = [
  {
    title: 'Docs & Notes',
    description: 'Structured revision notes across every stream, organized from beginner to advanced.',
    icon: BookMarked,
    emoji: '📝',
    href: '/',
    accent: 'from-blue-500/14 via-blue-500/5 to-transparent',
    ring: 'border-blue-500/25',
    iconClass: 'text-blue-600 dark:text-sky-400 bg-blue-500/12',
    span: 'sm:col-span-2',
  },
  {
    title: 'Learning Guides',
    description: 'Long-form guides with diagrams, roadmaps, and deep-dive walkthroughs.',
    icon: BookOpen,
    emoji: '📖',
    href: '/guides',
    accent: 'from-amber-500/14 via-amber-500/5 to-transparent',
    ring: 'border-amber-500/25',
    iconClass: 'text-amber-600 dark:text-amber-400 bg-amber-500/12',
    span: '',
  },
  {
    title: 'Interview Questions',
    description: '19+ tech stacks with tiered questions — entry to expert level.',
    icon: HelpCircle,
    emoji: '🎯',
    href: '/interview-questions',
    accent: 'from-rose-500/14 via-rose-500/5 to-transparent',
    ring: 'border-rose-500/25',
    iconClass: 'text-rose-600 dark:text-rose-400 bg-rose-500/12',
    span: '',
  },
  {
    title: 'Visualizations',
    description: 'Run interactive animations of event loop, closures, data structures, and more.',
    icon: Eye,
    emoji: '🧠',
    href: '/visualizations',
    accent: 'from-cyan-500/14 via-cyan-500/5 to-transparent',
    ring: 'border-cyan-500/25',
    iconClass: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/12',
    span: '',
  },
  {
    title: 'Playgrounds',
    description: 'Hands-on coding sandboxes for arrays, objects, and algorithms.',
    icon: FlaskConical,
    emoji: '🧪',
    href: '/playground',
    accent: 'from-orange-500/14 via-orange-500/5 to-transparent',
    ring: 'border-orange-500/25',
    iconClass: 'text-orange-600 dark:text-orange-400 bg-orange-500/12',
    span: '',
  },
  {
    title: 'Code Editor',
    description: 'Full-featured live editor with Sandpack — write, run, and share code.',
    icon: Code2,
    emoji: '💻',
    href: '/code-editor',
    accent: 'from-violet-500/14 via-violet-500/5 to-transparent',
    ring: 'border-violet-500/25',
    iconClass: 'text-violet-600 dark:text-violet-400 bg-violet-500/12',
    span: 'sm:col-span-2',
  },
] as const;

const QUICK_LINKS = [
  { href: '/', label: 'Docs', icon: BookMarked },
  { href: '/guides', label: 'Guides', icon: BookOpen },
  { href: '/interview-questions', label: 'Interview', icon: HelpCircle },
  { href: '/visualizations', label: 'Visualize', icon: Eye },
  { href: '/playground', label: 'Playground', icon: FlaskConical },
  { href: '/code-editor', label: 'Code Editor', icon: Code2 },
] as const;

function countTopicItems(topic: Topic): number {
  return countItems(topic.items);
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || counted.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 1200;
          const step = Math.ceil(value / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setDisplay(value);
              clearInterval(timer);
            } else {
              setDisplay(start);
            }
          }, duration / 40);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  action,
}: {
  icon: ElementType;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="space-y-1.5">
        <div className="flex items-center gap-2.5">
          <div className="inline-flex size-8 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gradient-sheen">{title}</h2>
        </div>
        {subtitle && <p className="text-xs sm:text-sm text-muted-foreground pl-10.5">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export default function OverviewPage() {
  const totalDocs = TOTAL_DOCS;

  return (
    <div className="relative pb-16 sm:pb-20 max-w-6xl mx-auto w-full min-w-0 space-y-14 sm:space-y-20">
      <PageSEO
        title="Overview"
        description="Revise Stack overview — browse all streams, features, and learning resources in one place."
        path="/overview"
      />

      {/* Page ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-full max-w-4xl bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* ── Hero ── */}
      <section
        className={cn(
          'group relative isolate overflow-hidden rounded-2xl sm:rounded-3xl border border-border/45',
          'bg-card/40 shadow-[var(--panel-shadow)] backdrop-blur-xl',
          'dark:border-border/35 dark:bg-card/25 dark:shadow-none'
        )}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-[-15%] top-[-80%] h-64 w-64 rounded-full bg-primary/14 blur-3xl dark:bg-primary/18" />
          <div className="absolute bottom-[-60%] left-[-10%] h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-[80%] rounded-full bg-blue-500/6 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,hsl(var(--primary)/0.14),transparent_55%)]" />
        </div>

        <div className="relative px-6 py-10 sm:px-10 sm:py-14 text-center space-y-8">
          <div className="text-fade-up inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold text-primary shadow-none">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              {'Everything in one place'}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-fade-up text-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-gradient-sheen">{'Platform'}</span>
              <br />
              <span className="text-foreground/90">{'Overview'}</span>
            </h1>
            <p className="text-fade-up text-fade-up-delay-2 text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed text-balance">
              {'Explore '}
              <span className="font-semibold text-foreground">{STREAMS.length} streams</span>
              {', '}
              <span className="font-semibold text-foreground">{TOPICS.length} topics</span>
              {', and '}
              <span className="font-semibold text-foreground">{totalDocs}+ docs & notes</span>
              {' — all designed for fast, structured learning.'}
            </p>
          </div>

          <div className="text-fade-up text-fade-up-delay-3 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { label: 'Guides', value: GUIDES.length, icon: BookOpen },
              { label: 'Interview Qs', value: INTERVIEW_QUESTIONS.length, icon: HelpCircle },
              { label: 'Interview Topics', value: INTERVIEW_TOPIC_COUNT, icon: Target },
              { label: 'Interactive Tools', value: INTERACTIVE_TOOL_COUNT, icon: Activity },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className={cn(
                  'flex items-center gap-2 rounded-xl border border-border/35 bg-background/60 backdrop-blur-sm',
                  'px-3.5 py-2 shadow-none transition-all duration-300',
                  'hover:border-primary/30 hover:bg-background/90 hover:-translate-y-0.5'
                )}
              >
                <div className="flex size-6 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                </div>
                <span className="text-sm font-bold text-foreground tabular-nums">{value}</span>
                <span className="text-xs text-muted-foreground hidden sm:inline">{label}</span>
              </div>
            ))}
          </div>

          <div className="text-fade-up text-fade-up-delay-4 flex flex-wrap items-center justify-center gap-3 pt-1">
            <Button asChild size="lg" className="h-11 rounded-xl px-6 shadow-none gap-2">
              <Link to="/">
                <Compass className="h-4 w-4" />
                {'Browse topics'}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-xl px-6 border-border/40 bg-background/60 backdrop-blur-sm shadow-none gap-2"
            >
              <Link to="/guides">
                <BookOpen className="h-4 w-4" />
                {'View guides'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stats Bento ── */}
      <section className="space-y-6">
        <SectionHeader icon={Zap} title="By the numbers" subtitle="Live counts across the entire platform" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 motion-stagger">
          {STATS.map(({ label, value, suffix, icon: Icon, emoji, accent, ring, iconClass, gradient, ...rest }) => {
            const featured = 'featured' in rest && rest.featured;

            return (
              <div
                key={label}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border bg-card/70 backdrop-blur-md p-5 sm:p-6',
                  'shadow-none transition-all duration-500',
                  'hover:-translate-y-1 hover:shadow-[var(--panel-shadow-raised)] dark:hover:shadow-none',
                  ring,
                  featured && 'col-span-2 sm:col-span-2 sm:row-span-2 sm:p-8'
                )}
              >
                <div
                  className={cn('pointer-events-none absolute inset-0 bg-linear-to-br opacity-80', accent)}
                  aria-hidden
                />
                <div
                  className={cn(
                    'pointer-events-none absolute -right-3 -top-3 transition-opacity duration-500 opacity-[0.07] group-hover:opacity-[0.14]',
                    featured ? 'text-8xl' : 'text-6xl'
                  )}
                  aria-hidden
                >
                  {emoji}
                </div>
                <div
                  className="pointer-events-none absolute -bottom-8 -right-8 size-24 rounded-full bg-primary/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden
                />

                <div className={cn('relative space-y-3', featured && 'sm:space-y-5')}>
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        'inline-flex items-center justify-center rounded-xl border border-border/30 shadow-none',
                        iconClass,
                        featured ? 'size-12' : 'size-10 p-2.5'
                      )}
                    >
                      <Icon className={cn(featured ? 'h-6 w-6' : 'h-5 w-5')} />
                    </div>
                    {!featured && (
                      <span className="text-xl opacity-60" aria-hidden>
                        {emoji}
                      </span>
                    )}
                  </div>

                  <div>
                    <div
                      className={cn(
                        'font-bold tracking-tight bg-linear-to-br bg-clip-text text-transparent',
                        gradient,
                        featured ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-3xl sm:text-4xl'
                      )}
                    >
                      <AnimatedCounter value={value} suffix={suffix} />
                    </div>
                    <div
                      className={cn(
                        'text-muted-foreground mt-1 font-medium',
                        featured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                      )}
                    >
                      {label}
                    </div>
                    {featured && (
                      <p className="mt-3 text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-xs hidden sm:block">
                        {'Structured revision notes spanning every stream — your single source of truth.'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Streams ── */}
      <section className="space-y-6">
        <SectionHeader
          icon={BarChart3}
          title="Streams"
          subtitle={`${STREAMS.length} streams · ${TOPICS.length} topics · ${totalDocs} documents`}
          action={
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-border/35 bg-background/60 backdrop-blur-sm px-3.5 py-2 text-xs font-medium text-primary transition-all hover:border-primary/30 hover:bg-background hover:-translate-y-0.5"
            >
              {'Browse all topics'}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 motion-stagger">
          {STREAMS.map((stream, idx) => {
            const emoji = getStreamEmoji(stream.id);
            const topicCount = stream.topics.length;
            const docCount = stream.topics.reduce((sum, t) => sum + countTopicItems(t), 0);
            const color = colors[idx % colors.length];
            const topicPercent = TOPICS.length > 0 ? (topicCount / TOPICS.length) * 100 : 0;

            return (
              <Link
                key={stream.id}
                to="/"
                className={cn(
                  'group relative overflow-hidden rounded-2xl border bg-card/70 backdrop-blur-md p-5',
                  'shadow-none transition-all duration-300',
                  'hover:-translate-y-1 hover:shadow-[var(--panel-shadow-raised)] dark:hover:shadow-none',
                  color.border,
                  color.hover
                )}
              >
                <div
                  className={cn('pointer-events-none absolute inset-0 bg-linear-to-br opacity-70', color.gradient)}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-2 -top-2 text-6xl opacity-[0.06] transition-opacity group-hover:opacity-[0.12]"
                  aria-hidden
                >
                  {emoji}
                </div>

                <div className="absolute top-0 inset-x-0 h-0.5 bg-muted/40">
                  <div
                    className={cn(
                      'h-full rounded-full bg-linear-to-r transition-all duration-700 group-hover:opacity-100',
                      idx % 2 === 0 ? 'from-violet-500 to-purple-500' : 'from-blue-500 to-indigo-500'
                    )}
                    style={{ width: `${Math.max(topicPercent, 8)}%` }}
                  />
                </div>

                <div className="relative flex items-start gap-4">
                  <div
                    className={cn(
                      'relative flex size-12 shrink-0 items-center justify-center rounded-2xl border shadow-none',
                      'transition-transform duration-300 group-hover:scale-110',
                      color.iconBg,
                      color.border
                    )}
                  >
                    <span className="text-xl" aria-hidden>
                      {emoji}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors truncate">
                          {stream.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-0.5">
                          {stream.description}
                        </p>
                      </div>
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border/30 bg-background/50 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="h-3.5 w-3.5 text-primary" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant="outline"
                        className={cn('h-6 px-2.5 text-[11px] font-normal rounded-lg border-border/30', color.badge)}
                      >
                        <BookMarked className="h-3 w-3 mr-1 opacity-70" />
                        {topicCount} topics
                      </Badge>
                      <Badge
                        variant="outline"
                        className="h-6 px-2.5 text-[11px] border-border/30 bg-muted/20 font-normal rounded-lg"
                      >
                        <PenLine className="h-3 w-3 mr-1 opacity-70" />
                        {docCount} docs
                      </Badge>
                      <span className="text-[10px] text-muted-foreground/60 tabular-nums ml-auto">
                        {topicPercent.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          to="/"
          className="sm:hidden flex items-center justify-center gap-1.5 rounded-xl border border-border/35 bg-background/60 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-primary transition-all hover:border-primary/30"
        >
          {'Browse all topics'}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      {/* ── Features Bento ── */}
      <section className="space-y-6">
        <SectionHeader icon={Star} title="Features" subtitle="Every learning tool on the platform" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 motion-stagger">
          {FEATURE_CARDS.map(({ title, description, icon: Icon, emoji, href, accent, ring, iconClass, span }) => (
            <Link
              key={title}
              to={href}
              className={cn(
                'group relative overflow-hidden rounded-2xl border bg-card/70 backdrop-blur-md p-5 sm:p-6',
                'shadow-none transition-all duration-300 h-full',
                'hover:-translate-y-1 hover:shadow-[var(--panel-shadow-raised)] dark:hover:shadow-none',
                ring,
                span
              )}
            >
              <div
                className={cn('pointer-events-none absolute inset-0 bg-linear-to-br opacity-80', accent)}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-2 -top-2 text-7xl opacity-[0.06] transition-opacity group-hover:opacity-[0.12]"
                aria-hidden
              >
                {emoji}
              </div>
              <div
                className="pointer-events-none absolute -bottom-10 -right-10 size-28 rounded-full bg-primary/6 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden
              />

              <div className="relative flex flex-col h-full space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      'inline-flex p-2.5 rounded-xl border border-border/30 shadow-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3',
                      iconClass
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl opacity-50 group-hover:opacity-80 transition-opacity" aria-hidden>
                    {emoji}
                  </span>
                </div>

                <div className="space-y-1.5 flex-1">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary/70 group-hover:text-primary transition-colors pt-1">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-primary/8 px-2.5 py-1 group-hover:bg-primary/12 transition-colors">
                    {'Explore'}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/40',
            'bg-linear-to-br from-card/80 via-card/60 to-muted/30 backdrop-blur-xl p-6 sm:p-10',
            'shadow-[var(--panel-shadow)] dark:shadow-none'
          )}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/14 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,hsl(var(--primary)/0.1),transparent_60%)]" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-md">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary">
                <TrendingUp className="h-3.5 w-3.5" />
                {'Ready to dive in?'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gradient-sheen leading-tight">
                {'Start learning today'}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {'Quick access to every feature — docs, guides, interview prep, visualizations, and live coding.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5 w-full lg:w-auto lg:max-w-lg lg:justify-end">
              {QUICK_LINKS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  to={href}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-xl border border-border/35 bg-background/70 backdrop-blur-sm',
                    'px-3.5 py-2 text-xs sm:text-sm font-medium text-foreground/80',
                    'shadow-none transition-all duration-200',
                    'hover:-translate-y-0.5 hover:border-primary/35 hover:bg-background hover:text-primary hover:shadow-[var(--panel-shadow)]',
                    'dark:hover:shadow-none',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
