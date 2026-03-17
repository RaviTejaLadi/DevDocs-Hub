/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TOPICS, type TopicItem } from '../topics';
import { useEffect, useMemo } from 'react';
import { ChevronRight, Home } from 'lucide-react';
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

const DocumentationPage = () => {
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
            <h2 className="text-2xl font-bold mb-2 text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground mb-6">This topic doesn't exist or couldn't be found.</p>
            <Button onClick={() => navigate('/')} className="w-full">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
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
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      <Breadcrumb>
        <BreadcrumbList className="flex-wrap gap-1 text-sm text-muted-foreground">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="hover:text-foreground transition-colors">
                Docs
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                to={`/docs/${topic.id}/${topic.items[0].id}`}
                className="hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                {topic.icon}
                <span>{topic.title}</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-foreground">{content.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight">
        <MarkdownRender content={content.content} />
      </div>

      <Separator className="my-8" />

      <nav className="grid grid-cols-2 gap-4" aria-label="Document navigation">
        {prevItem ? (
          <Button
            onClick={() => navigate(`/docs/${topic.id}/${prevItem.id}`)}
            variant="outline"
            className="h-auto p-4 justify-start text-left border-border hover:bg-accent/50 hover:border-primary/20 transition-colors group"
          >
            <div className="w-full space-y-1">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Previous</span>
              <div className="flex items-center gap-2 font-medium text-foreground">
                <ChevronRight className="w-4 h-4 rotate-180 shrink-0 group-hover:-translate-x-0.5 transition-transform" />
                <span className="truncate">{prevItem.title}</span>
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
            className="h-auto p-4 justify-end text-right border-border hover:bg-accent/50 hover:border-primary/20 transition-colors group"
          >
            <div className="w-full space-y-1">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Next</span>
              <div className="flex items-center justify-end gap-2 font-medium text-foreground">
                <span className="truncate">{nextItem.title}</span>
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
