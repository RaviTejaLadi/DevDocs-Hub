import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Layers, Search, Sparkles, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { CATEGORY_VISUALS, TOPIC_VISUALS } from '../constants';
import { useTopicListFilter } from '../hooks';

function StatCard({ emoji, label, value }: { emoji: string; label: string; value: number }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/40 bg-card/70 px-4 py-3 backdrop-blur-sm shadow-[0_10px_28px_-22px_hsl(var(--foreground)/0.55)]">
      <div className="pointer-events-none absolute -right-3 -top-3 text-4xl opacity-[0.12] select-none" aria-hidden>
        {emoji}
      </div>
      <p className="text-2xl font-bold tabular-nums tracking-tight text-foreground">{value}</p>
      <p className="mt-0.5 text-xs font-medium text-muted-foreground">
        <span className="mr-1" aria-hidden>
          {emoji}
        </span>
        {label}
      </p>
    </div>
  );
}

export function TopicListPage() {
  const { t } = useI18n();
  const {
    categories,
    topicSearchQuery,
    setTopicSearchQuery,
    filteredTopicsByCategory,
    filteredTopicsCount,
    hasTopicSearch,
    clearTopicSearch,
    countForTopic,
    totalQuestions,
    totalTopics,
    totalCategories,
  } = useTopicListFilter();

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-4">
      <section
        className={cn(
          'group relative isolate overflow-hidden rounded-2xl border border-border/45',
          'bg-card/40 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_20px_50px_-28px_hsl(var(--foreground)/0.35)]',
          'backdrop-blur-xl dark:border-border/35 dark:bg-card/25'
        )}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-[20%] -top-[90%] h-52 w-52 rounded-full bg-primary/12 blur-3xl dark:bg-primary/16" />
          <div className="absolute -bottom-[70%] -left-[15%] h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-20%,hsl(var(--primary)/0.12),transparent_55%)]" />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-size-[22px_22px] opacity-[0.14] mask-[linear-gradient(to_bottom,black_40%,transparent_95%)]"
            aria-hidden
          />
        </div>

        <div className="relative p-6 sm:p-8 space-y-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-background hover:text-foreground hover:shadow-sm"
          >
            <ChevronLeft className="h-4 w-4" />
            {t('interview.backToOverview')}
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Interview prep hub
              </div>
              <div className="flex items-start gap-3.5">
                <span
                  className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-linear-to-br from-primary/15 to-primary/5 text-2xl shadow-[0_8px_24px_-12px_hsl(var(--primary)/0.45)]"
                  aria-hidden
                >
                  💼
                </span>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-sheen">
                    {t('interview.pageTitle')}
                  </h1>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base leading-relaxed">
                    {t('interview.pageDescription')}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full sm:w-auto sm:min-w-[280px]">
              <StatCard emoji="📝" label={t('interview.questionsLabel')} value={totalQuestions} />
              <StatCard emoji="🎯" label={t('interview.topicsLabel')} value={totalTopics} />
              <StatCard emoji="📂" label={t('interview.categoriesLabel')} value={totalCategories} />
            </div>
          </div>

          <p className="flex items-start gap-2 rounded-lg border border-border/35 bg-muted/25 px-3.5 py-2.5 text-xs sm:text-sm text-muted-foreground">
            <span className="text-base leading-none mt-0.5" aria-hidden>
              💡
            </span>
            {t('interview.practiceTip')}
          </p>
        </div>
      </section>

      <Card className="border-border/40 bg-card/65 backdrop-blur-sm shadow-[0_14px_35px_-25px_hsl(var(--foreground)/0.65)]">
        <CardContent className="pt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span aria-hidden>🔍</span>
              {t('interview.filters')}
            </div>
            <Badge variant="outline" className="h-6 px-2.5 text-xs font-medium border-border/45 bg-muted/30">
              {t('interview.showingTopics', { shown: filteredTopicsCount, total: totalTopics })}
            </Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder={t('interview.searchTopics')}
                value={topicSearchQuery}
                onChange={(e) => setTopicSearchQuery(e.target.value)}
                className="pl-9 h-11 border-border/35 bg-background/85 focus-visible:ring-primary/30 rounded-xl"
              />
            </div>
            {hasTopicSearch && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground rounded-xl"
                onClick={clearTopicSearch}
              >
                <X className="h-4 w-4 mr-1" />
                {t('interview.clearFilters')}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {categories.map((category) => {
          const topics = filteredTopicsByCategory[category];
          if (!topics.length) return null;
          const catVisual = CATEGORY_VISUALS[category] ?? {
            emoji: '📚',
            accent: 'from-primary/10 to-transparent',
            ring: 'border-primary/20',
          };

          return (
            <section
              key={category}
              className={cn(
                'relative overflow-hidden rounded-2xl border bg-card/55 backdrop-blur-sm p-5 sm:p-6',
                'shadow-[0_14px_32px_-26px_hsl(var(--foreground)/0.6)]',
                catVisual.ring
              )}
            >
              <div
                className={cn('pointer-events-none absolute inset-0 bg-linear-to-br opacity-80', catVisual.accent)}
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex size-9 items-center justify-center rounded-lg border border-border/40 bg-background/70 text-lg shadow-sm"
                      aria-hidden
                    >
                      {catVisual.emoji}
                    </span>
                    <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                      <TranslatedText text={category} />
                    </h2>
                  </div>
                  <Badge variant="secondary" className="h-7 px-3 border border-border/35 bg-secondary/65">
                    <Layers className="h-3.5 w-3.5 mr-1 opacity-70" />
                    {t('interview.topicCount', { count: topics.length })}
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {topics.map((topic) => {
                    const count = countForTopic(topic.id);
                    const Icon = topic.icon;
                    const visual = TOPIC_VISUALS[topic.id];
                    return (
                      <Link
                        key={topic.id}
                        to={`/interview-questions/${topic.id}`}
                        className={cn(
                          'group relative overflow-hidden rounded-xl border border-border/35 bg-card/90 backdrop-blur-sm p-4 transition-all duration-300 block',
                          'shadow-[0_8px_20px_-18px_hsl(var(--foreground)/0.7)]',
                          'hover:bg-card hover:-translate-y-1 hover:shadow-[0_18px_36px_-22px_hsl(var(--foreground)/0.55)]',
                          visual.cardHover
                        )}
                      >
                        <div
                          className={cn(
                            'pointer-events-none absolute -right-4 -top-4 text-5xl opacity-[0.07] transition-transform duration-300 group-hover:scale-110 group-hover:opacity-[0.12]'
                          )}
                          aria-hidden
                        >
                          {visual.emoji}
                        </div>
                        <div className="relative flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={cn(
                                'relative flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/30 shadow-sm transition-transform duration-300 group-hover:scale-105',
                                visual.iconBg
                              )}
                            >
                              <Icon className={cn('h-5 w-5', visual.iconColor)} />
                              <span
                                className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border border-border/40 bg-background text-[10px] shadow-sm"
                                aria-hidden
                              >
                                {visual.emoji}
                              </span>
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-foreground truncate transition-colors group-hover:text-primary">
                                <TranslatedText text={topic.label} />
                              </p>
                              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                <span aria-hidden>❓</span>
                                {t('interview.topicQuestionsCount', { count })}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary shrink-0 mt-1" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}
        {filteredTopicsCount === 0 && (
          <Card className="border-dashed border-border/50 bg-card/50">
            <CardContent className="py-12 text-center space-y-3">
              <span className="text-4xl block" aria-hidden>
                🔎
              </span>
              <p className="text-muted-foreground">{t('interview.noQuestionsMatch')}</p>
              {hasTopicSearch && (
                <Button variant="outline" size="sm" className="mt-2 rounded-xl" onClick={() => setTopicSearchQuery('')}>
                  {t('interview.resetFilters')}
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
