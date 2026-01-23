import { Link, useNavigate } from 'react-router-dom';
import { useState, useMemo, useCallback, type JSX } from 'react';
import { TOPICS, type TopicItem } from '../../topics';
import { BookOpen, ChevronLeft, Search, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

// Helper to flatten tree for searching
const flattenItems = (items: TopicItem[]): TopicItem[] => {
  return items.reduce((acc: TopicItem[], item) => {
    acc.push(item);
    if (item.items) {
      acc.push(...flattenItems(item.items));
    }
    return acc;
  }, []);
};

const SidebarContent = ({
  currentTopicId,
  activeSlug,
  closeSheet,
}: {
  currentTopicId: string | undefined;
  activeSlug?: string;
  closeSheet?: () => void;
}) => {
  const topic = TOPICS.find((t) => t.id === currentTopicId);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // State to track expanded parent items
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleNavigate = useCallback(
    (topicId: string, itemId: string) => {
      navigate(`/docs/${topicId}/${itemId}`);
      if (closeSheet) closeSheet();
    },
    [navigate, closeSheet]
  );

  // Recursive Render Component - moved outside useMemo
  const renderTree = useCallback(
    (items: TopicItem[], depth = 0): JSX.Element[] => {
      return items.map((item, index) => {
        const isActive = activeSlug === item.id;
        const hasChildren = item.items && item.items.length > 0;
        const isExpanded = expandedIds[item.id];

        return (
          <div key={item.id} className="w-full">
            <Button
              variant={isActive ? 'default' : 'ghost'}
              className={cn(
                'w-[95%] justify-start h-auto py-2 px-3 font-normal mb-0.5',
                isActive ? '' : 'text-muted-foreground hover:text-foreground'
              )}
              style={{ paddingLeft: `${depth * 12 + 12}px` }}
              onClick={() => topic && handleNavigate(topic.id, item.id)}
            >
              <div className="flex items-center gap-2 w-full">
                {depth === 0 && (
                  <span className="text-xs font-medium opacity-60 w-5">{String(index + 1).padStart(2, '0')}</span>
                )}

                <span className="text-sm truncate text-left flex-1">{item.title}</span>

                {hasChildren && (
                  <button
                    type="button"
                    onClick={(e) => toggleExpand(e, item.id)}
                    className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded shrink-0"
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 opacity-70" />
                    )}
                  </button>
                )}
              </div>
            </Button>

            {hasChildren && isExpanded && (
              <div className="border-l border-border/50 ml-5">{renderTree(item.items!, depth + 1)}</div>
            )}
          </div>
        );
      });
    },
    [activeSlug, expandedIds, toggleExpand, handleNavigate, topic]
  );

  if (!topic)
    return (
      <div className="p-6 text-center">
        <BookOpen className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Select a topic</p>
      </div>
    );

  // Filter Logic
  const displayContent = useMemo(() => {
    if (!searchQuery) return renderTree(topic.items);

    const allItems = flattenItems(topic.items);
    const filtered = allItems.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    if (filtered.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">No topic found</p>
        </div>
      );
    }

    return filtered.map((item) => (
      <Button
        key={item.id}
        variant={activeSlug === item.id ? 'default' : 'ghost'}
        className="w-[95%] justify-start py-2 px-3 font-normal"
        onClick={() => handleNavigate(topic.id, item.id)}
      >
        <span className="text-sm truncate">{item.title}</span>
      </Button>
    ));
  }, [topic.items, searchQuery, activeSlug, renderTree, handleNavigate, topic.id]);

  return (
    <div className="flex h-full flex-col bg-inherit rounded-md">
      <div className="shrink-0 px-6 py-4 border-b">
        <Link
          to="/"
          onClick={closeSheet}
          className="flex items-center gap-2 mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Overview</span>
        </Link>
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-md border bg-background">{topic.icon}</div>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Filter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-8 h-9 w-full"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full">
          <div className="p-3 space-y-0.5">{displayContent}</div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SidebarContent;
