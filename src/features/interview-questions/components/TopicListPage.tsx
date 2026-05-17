import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, HelpCircle, Search, X } from 'lucide-react';
import { INTERVIEW_QUESTIONS, INTERVIEW_TOPICS, TOPIC_CATEGORIES } from '@/data/interviewQuestions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';

export function TopicListPage() {
  const { t } = useI18n();
  const categories = Object.keys(TOPIC_CATEGORIES);
  const [topicSearchQuery, setTopicSearchQuery] = useState('');
  const topicsByCategory = categories.reduce<Record<string, typeof INTERVIEW_TOPICS>>((acc, cat) => {
    acc[cat] = INTERVIEW_TOPICS.filter((t) => t.category === cat);
    return acc;
  }, {});

  const countForTopic = (topicId: string) => INTERVIEW_QUESTIONS.filter((q) => q.topicId === topicId).length;

  const totalQuestions = INTERVIEW_QUESTIONS.length;
  const totalTopics = INTERVIEW_TOPICS.length;
  const totalCategories = categories.length;
  const normalizedTopicSearchQuery = topicSearchQuery.trim().toLowerCase();

  const filteredTopicsByCategory = useMemo(() => {
    if (!normalizedTopicSearchQuery) return topicsByCategory;

    return categories.reduce<Record<string, typeof INTERVIEW_TOPICS>>((acc, category) => {
      const categoryMatches = category.toLowerCase().includes(normalizedTopicSearchQuery);
      acc[category] = topicsByCategory[category].filter((topic) => {
        if (categoryMatches) return true;
        return (
          topic.label.toLowerCase().includes(normalizedTopicSearchQuery) ||
          topic.id.toLowerCase().includes(normalizedTopicSearchQuery)
        );
      });
      return acc;
    }, {});
  }, [categories, normalizedTopicSearchQuery, topicsByCategory]);

  const filteredTopicsCount = useMemo(
    () => Object.values(filteredTopicsByCategory).reduce((count, topics) => count + topics.length, 0),
    [filteredTopicsByCategory]
  );
  const hasTopicSearch = Boolean(normalizedTopicSearchQuery);

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-4">
      <section className="relative overflow-hidden rounded-2xl border border-border/40 bg-linear-to-br from-card via-card to-primary/10 p-6 sm:p-8 shadow-[0_18px_45px_-32px_hsl(var(--foreground)/0.5)]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-border/35 bg-card/45 px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              {t('interview.backToOverview')}
            </Link>
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl border border-primary/20 bg-primary/10">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gradient-sheen">
                  {t('interview.pageTitle')}
                </h1>
                <p className="text-muted-foreground mt-1 max-w-2xl">{t('interview.pageDescription')}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="h-7 px-3 border border-border/35 bg-secondary/65">
              {t('interview.questions', { count: totalQuestions })}
            </Badge>
            <Badge variant="secondary" className="h-7 px-3 border border-border/35 bg-secondary/65">
              {t('interview.topics', { count: totalTopics })}
            </Badge>
            <Badge variant="secondary" className="h-7 px-3 border border-border/35 bg-secondary/65">
              {t('interview.categories', { count: totalCategories })}
            </Badge>
          </div>
        </div>
      </section>

      <Card className="border-border/40 bg-card/65 backdrop-blur-sm shadow-[0_14px_35px_-25px_hsl(var(--foreground)/0.65)]">
        <CardContent className="pt-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Search className="h-4 w-4 text-primary" />
              {t('interview.filters')}
            </div>
            <p className="text-xs text-muted-foreground">
              {t('interview.showing', { shown: filteredTopicsCount, total: totalTopics })}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder={t('interview.searchQuestions')}
                value={topicSearchQuery}
                onChange={(e) => setTopicSearchQuery(e.target.value)}
                className="pl-9 h-10 border-border/35 bg-background/85 focus-visible:ring-primary/30"
              />
            </div>
            {hasTopicSearch && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => setTopicSearchQuery('')}
              >
                <X className="h-4 w-4 mr-1" />
                {t('interview.clearFilters')}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {categories.map((category) => {
          const topics = filteredTopicsByCategory[category];
          if (!topics.length) return null;

          return (
            <section
              key={category}
              className="rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm p-5 sm:p-6 shadow-[0_12px_28px_-24px_hsl(var(--foreground)/0.65)]"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h2 className="text-lg font-semibold text-foreground">
                  <TranslatedText text={category} />
                </h2>
                <Badge variant="outline">{t('interview.topicCount', { count: topics.length })}</Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {topics.map((topic) => {
                  const count = countForTopic(topic.id);
                  const Icon = topic.icon;
                  return (
                    <Link
                      key={topic.id}
                      to={`/interview-questions/${topic.id}`}
                      className={cn(
                        'group rounded-xl border border-border/35 bg-card/85 backdrop-blur-sm p-4 transition-all duration-200 block shadow-[0_8px_20px_-18px_hsl(var(--foreground)/0.7)]',
                        'hover:border-primary/40 hover:bg-card hover:shadow-[0_14px_28px_-20px_hsl(var(--foreground)/0.6)] hover:-translate-y-0.5'
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-foreground truncate">
                              <TranslatedText text={topic.label} />
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {t('interview.topicQuestionsCount', { count })}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
        {filteredTopicsCount === 0 && (
          <Card className="border-dashed border-border/50 bg-card/50">
            <CardContent className="py-10 text-center">
              <p className="text-muted-foreground">{t('interview.noQuestionsMatch')}</p>
              {hasTopicSearch && (
                <Button variant="outline" size="sm" className="mt-4" onClick={() => setTopicSearchQuery('')}>
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
