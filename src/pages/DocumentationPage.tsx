import { Link, useNavigate, useParams } from 'react-router-dom';
import { TOPICS, type TopicItem } from '../topics';
import { useEffect, useMemo } from 'react';
import { ChevronRight, Home, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { Separator } from '../components/ui/separator';
import MarkdownRender from '../components/MarkdownRender';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const findTopicItem = (items: TopicItem[], slug: string): TopicItem | undefined => {
  for (const item of items) {
    if (item.id === slug) {
      return item;
    }
    if (item.items) {
      const found = findTopicItem(item.items, slug);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
};

const flattenTopicItems = (items: TopicItem[]): TopicItem[] => {
  const flattened: TopicItem[] = [];
  for (const item of items) {
    if (item.content) {
      flattened.push(item);
    }
    if (item.items) {
      flattened.push(...flattenTopicItems(item.items));
    }
  }
  return flattened.filter((i) => i.content);
};

const DocumentationPage = ({
  isSidebarCollapsed,
  onToggleSidebar,
}: {
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}) => {
  const { t } = useI18n();
  const { categoryId, slug } = useParams();
  const navigate = useNavigate();
  const topic = TOPICS.find((t) => t.id === categoryId);

  const content = useMemo(() => {
    if (!topic || !slug) return undefined;
    return findTopicItem(topic.items, slug);
  }, [topic, slug]);

  useEffect(() => {
    if (content && !content.content && content.items?.[0]) {
      navigate(`/docs/${categoryId}/${content.items[0].id}`, { replace: true });
    }
  }, [content, categoryId, navigate]);

  const flatItems = useMemo(() => (topic ? flattenTopicItems(topic.items) : []), [topic]);
  const currentIndex = useMemo(() => flatItems.findIndex((i) => i.id === slug), [flatItems, slug]);

  const nextItem = currentIndex !== -1 ? flatItems[currentIndex + 1] : undefined;
  const prevItem = currentIndex !== -1 ? flatItems[currentIndex - 1] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, slug]);

  if (!topic || !content) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md border-none bg-inherit w-full">
          <CardContent className="pt-6  text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">{t('docs.pageNotFound')}</h2>
            <p className="text-muted-foreground mb-6">{t('docs.notFoundDescription')}</p>
            <Button onClick={() => navigate('/')} className="w-full">
              <Home className="mr-2 h-4 w-4" />
              {t('docs.backHome')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // If content has no actual content (it's a category), don't render the main page content
  if (!content.content) {
    // You can render a loading state or a specific category page here
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p>{t('docs.loading')}</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      <div className="flex items-start sm:items-center gap-2 sm:gap-3">
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={onToggleSidebar}
                aria-label={isSidebarCollapsed ? t('docs.showSidebar') : t('docs.hideSidebar')}
                className="hidden md:inline-flex h-9 w-9 shrink-0 p-0 border-border/40 bg-card/60 hover:bg-accent/60"
              >
                {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              {isSidebarCollapsed ? t('docs.showSidebar') : t('docs.hideSidebar')}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Breadcrumb className="min-w-0 flex-1">
          <BreadcrumbList className="flex-wrap min-h-9 gap-1 rounded-md border border-border/40 bg-card/45 backdrop-blur-sm px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-muted-foreground shadow-[0_10px_24px_-20px_hsl(var(--foreground)/0.35)]">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/"
                  className="rounded-md px-1.5 py-0.5 font-medium transition-colors hover:bg-accent/55 hover:text-foreground"
                >
                  {t('docs.breadcrumbDocs')}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-3.5 w-3.5 opacity-45" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to={`/docs/${topic.id}/${topic.items[0].id}`}
                  className="flex items-center gap-1.5 rounded-md px-1.5 py-0.5 font-medium transition-colors hover:bg-accent/55 hover:text-foreground"
                >
                  <span className="text-base opacity-85">{topic.icon}</span>
                  <span className="max-w-30 sm:max-w-none truncate">
                    <TranslatedText text={topic.title} />
                  </span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-3.5 w-3.5 opacity-45" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-38 sm:max-w-md truncate rounded-md bg-primary/8 px-2 py-0.5 font-semibold text-foreground">
                <TranslatedText text={content.title} />
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight">
        <MarkdownRender content={content.content} />
      </div>

      <Separator className="my-8" />

      <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" aria-label="Document navigation">
        {prevItem ? (
          <Button
            onClick={() => navigate(`/docs/${topic.id}/${prevItem.id}`)}
            variant="outline"
            className="h-auto p-4 justify-start text-left border-border/40 hover:bg-accent/50 hover:border-primary/20 transition-colors group"
          >
            <div className="w-full space-y-1">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{t('docs.previous')}</span>
              <div className="flex items-center gap-2 font-medium text-foreground">
                <ChevronRight className="w-4 h-4 rotate-180 shrink-0 group-hover:-translate-x-0.5 transition-transform" />
                <span className="truncate">
                  <TranslatedText text={prevItem.title} />
                </span>
              </div>
            </div>
          </Button>
        ) : (
          <div />
        )}
        {nextItem ? (
          <Button
            variant="outline"
            onClick={() => navigate(`/docs/${topic.id}/${nextItem.id}`)}
            className="h-auto p-4 justify-end text-right border-border/40 hover:bg-accent/50 hover:border-primary/20 transition-colors group"
          >
            <div className="w-full space-y-1">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{t('docs.next')}</span>
              <div className="flex items-center justify-end gap-2 font-medium text-foreground">
                <span className="truncate">
                  <TranslatedText text={nextItem.title} />
                </span>
                <ChevronRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Button>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
};

export default DocumentationPage;
