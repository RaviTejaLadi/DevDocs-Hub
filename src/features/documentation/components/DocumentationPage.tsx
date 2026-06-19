import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronUp, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MarkdownRender from '@/components/markdown';
import { DocsTopicBrowserSheet } from './DocsTopicBrowserSheet';
import { DocumentationTopicHero } from './DocumentationTopicHero';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import {
  docsFloatingActionButtonClass,
  docsFloatingActionStackClass,
  docsPageNavLinkClass,
  docsScrollToTopButtonClass,
} from '@/constants/docsSidePanel';
import { cn } from '@/lib/utils';
import { useDocumentationPage } from '../hooks';

const DocumentationPage = () => {
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
            {'Back to overview'}
          </Link>
        </Button>
        <Card className="border-dashed border-border/50 bg-card/50">
          <CardContent className="space-y-4 py-12 text-center">
            <span className="block text-5xl" aria-hidden>
              📚
            </span>
            <h2 className="text-2xl font-bold text-foreground">{'Page Not Found'}</h2>
            <p className="text-muted-foreground">{"This topic doesn't exist or couldn't be found."}</p>
            <Button onClick={() => navigate('/')} className="w-full rounded-xl sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              {'Back to Home'}
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
    <div className="mx-auto w-full min-w-0 max-w-6xl space-y-6 pb-8 sm:space-y-8 sm:pb-10">
      {/* <DocumentationTopicHero topic={topic} /> */}

      <MarkdownRender content={content.content} headingIdScope={categoryId} />

      {(prevArticle || nextArticle) && (
        <nav className="grid gap-3 border-t border-border/60 pt-8 sm:grid-cols-2" aria-label={'Page navigation'}>
          {prevArticle ? (
            <Link
              to={`/docs/${categoryId}/${prevArticle.id}`}
              state={DOCS_NAV_RESET_SCROLL}
              className={cn('group flex min-h-16 flex-col justify-center px-4 py-3', docsPageNavLinkClass)}
            >
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{'Previous'}</span>
              <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary">
                <ChevronLeft className="size-4 shrink-0" aria-hidden />
                {prevArticle.title}
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
                'group flex min-h-16 flex-col items-end justify-center px-4 py-3 text-right sm:col-start-2',
                docsPageNavLinkClass
              )}
            >
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{'Next'}</span>
              <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary">
                {nextArticle.title}
                <ChevronRight className="size-4 shrink-0" aria-hidden />
              </span>
            </Link>
          ) : null}
        </nav>
      )}

      <div className={docsFloatingActionStackClass}>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={scrollToTop}
          aria-label={'Scroll to top'}
          aria-hidden={!showScrollTop}
          tabIndex={showScrollTop ? 0 : -1}
          className={cn(
            docsFloatingActionButtonClass,
            docsScrollToTopButtonClass,
            showScrollTop
              ? 'pointer-events-auto scale-100 opacity-100'
              : 'pointer-events-none scale-95 opacity-0'
          )}
        >
          <ChevronUp className="size-5" />
        </Button>

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

      </div>
    </div>
  );
};

export default DocumentationPage;
