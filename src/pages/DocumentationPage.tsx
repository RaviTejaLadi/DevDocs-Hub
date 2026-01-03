/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TOPICS } from '../topics';
import { useEffect } from 'react';
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

const DocumentationPage = () => {
  const { categoryId, slug } = useParams();
  const topic = TOPICS.find((t) => t.id === categoryId);
  const content = topic?.items.find((i) => i.id === slug);
  const navigate = useNavigate();

  const currentIndex = topic?.items.findIndex((i) => i.id === slug) ?? -1;
  const nextItem = topic?.items[currentIndex + 1];
  const prevItem = topic?.items[currentIndex - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId, slug]);

  if (!topic || !content) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground mb-6">The documentation page you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/')} className="w-full">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center gap-1.5">
                <Home className="h-4 w-4" />
                <span>Documentation</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                to={`/docs/${topic.id}/${topic.items[0].id}`}
                className={`flex items-center gap-1.5 ${topic.color}`}
              >
                {topic.icon}
                <span>{topic.title}</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium">{content.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Separator />

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MarkdownRender content={content.content} />
      </div>

      <Separator className="mb-6 h-px!" />
      {/* Navigation Footer */}
      <div className="mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {prevItem ? (
            <Button
              onClick={() => navigate(`/docs/${topic.id}/${prevItem.id}`)}
              variant="outline"
              className="h-auto p-4  group  bg-inherit hover:bg-accent/40"
            >
              <div className="text-left w-full space-y-1">
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Previous</div>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
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
              className="h-auto p-4 group  bg-inherit hover:bg-accent/40"
            >
              <div className="text-right w-full space-y-1">
                <div className="text-xs font-medium uppercase tracking-wide opacity-90">Next</div>
                <div className="flex items-center justify-end gap-2 font-semibold">
                  <span className="truncate">{nextItem.title}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
