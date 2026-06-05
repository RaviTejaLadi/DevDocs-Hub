import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronUp, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import MarkdownRender from '@/components/markdown';
import { DocsTopicBrowserSheet } from './DocsTopicBrowserSheet';
import { DocumentationTopicHero } from './DocumentationTopicHero';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { cn } from '@/lib/utils';
import { useDocumentationPage } from '../hooks';

const DocumentationPage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const {
    categoryId,
    topic,
    content,
    docsTopicBrowserSections,
    topicBrowser,
    prevArticle,
    nextArticle,
    showScrollTop,
    scrollToTop,
  } = useDocumentationPage();

  const {
    topicBrowserOpen,
    activeStreamId,
    selectActiveStream,
    openCategories,
    setOpenCategories,
    setAllCategoriesInStream,
    onTopicBrowserOpenChange,
    setTopicBrowserOpen,
  } = topicBrowser;

  if (!topic || !content) {
    return (
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" size="sm" asChild className="mb-5 rounded-xl">
          <Link to="/" className="inline-flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            {t('sidebar.backToOverview')}
          </Link>
        </Button>
        <Card className="border-dashed border-border/50 bg-card/50">
          <CardContent className="space-y-4 py-12 text-center">
            <span className="block text-5xl" aria-hidden>
              📚
            </span>
            <h2 className="text-2xl font-bold text-foreground">{t('docs.pageNotFound')}</h2>
            <p className="text-muted-foreground">{t('docs.notFoundDescription')}</p>
            <Button onClick={() => navigate('/')} className="w-full rounded-xl sm:w-auto">
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
      <div className="mx-auto max-w-6xl space-y-6">
        <DocumentationTopicHero topic={topic} />
        <div className="space-y-3" aria-busy="true">
          <div className="h-8 w-2/3 max-w-md animate-pulse rounded-lg bg-muted/35" />
          <div className="h-64 animate-pulse rounded-2xl border border-border/35 bg-muted/20" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-6xl space-y-6 pb-10 sm:pb-12">
      <DocumentationTopicHero topic={topic} />

      <header className="space-y-1 px-0.5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {t('docs.nowReading')}
        </p>
        <h2 className="text-balance text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl">
          <TranslatedText text={content.title} />
        </h2>
      </header>

      <MarkdownRender content={content.content} headingIdScope={categoryId} />

      {(prevArticle || nextArticle) && (
        <nav
          className="grid gap-3 border-t border-border/60 pt-8 sm:grid-cols-2"
          aria-label={t('docs.pageNavigation')}
        >
          {prevArticle ? (
            <Link
              to={`/docs/${categoryId}/${prevArticle.id}`}
              state={DOCS_NAV_RESET_SCROLL}
              className={cn(
                'group flex min-h-16 flex-col justify-center rounded-xl border border-border/60 px-4 py-3 transition-colors',
                'hover:border-border hover:bg-muted/40'
              )}
            >
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {t('docs.previous')}
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary">
                <ChevronLeft className="size-4 shrink-0" aria-hidden />
                <TranslatedText text={prevArticle.title} />
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              to={`/docs/${categoryId}/${nextArticle.id}`}
              state={DOCS_NAV_RESET_SCROLL}
              className={cn(
                'group flex min-h-16 flex-col items-end justify-center rounded-xl border border-border/60 px-4 py-3 text-right transition-colors sm:col-start-2',
                'hover:border-border hover:bg-muted/40'
              )}
            >
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {t('docs.next')}
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary">
                <TranslatedText text={nextArticle.title} />
                <ChevronRight className="size-4 shrink-0" aria-hidden />
              </span>
            </Link>
          ) : null}
        </nav>
      )}

      <DocsTopicBrowserSheet
        open={topicBrowserOpen}
        onOpenChange={onTopicBrowserOpenChange}
        sections={docsTopicBrowserSections}
        activeTopicId={categoryId}
        activeStreamId={activeStreamId}
        onActiveStreamChange={selectActiveStream}
        openCategories={openCategories}
        onToggleCategory={(key) =>
          setOpenCategories((prev) => ({
            ...prev,
            [key]: !(prev[key] ?? false),
          }))
        }
        onExpandAllCategories={(streamId) => setAllCategoriesInStream(streamId, true)}
        onCollapseAllCategories={(streamId) => setAllCategoriesInStream(streamId, false)}
        onSelectTopic={(item, topicId) => {
          setTopicBrowserOpen(false);
          navigate(`/docs/${topicId}/${item.id}`, { state: DOCS_NAV_RESET_SCROLL });
        }}
      />

      {showScrollTop ? (
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 size-11 rounded-full border border-border/50 bg-card/90 shadow-lg backdrop-blur-sm hover:bg-card hover:shadow-xl md:right-8"
          aria-label={t('docs.scrollToTop')}
        >
          <ChevronUp className="size-5" />
        </Button>
      ) : null}
    </div>
  );
};

export default DocumentationPage;
