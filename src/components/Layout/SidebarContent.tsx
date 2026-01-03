import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TOPICS } from '../../topics';
import { BookOpen, ChevronLeft, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

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

  if (!topic)
    return (
      <div className="p-6 text-center">
        <BookOpen className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Select a topic to view contents</p>
      </div>
    );

  const filteredItems = topic.items.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex h-full flex-col bg-inherit">
      {/* Header */}
      <div className="px-6 py-4 border-b">
        <Link
          to="/"
          onClick={closeSheet}
          className="flex items-center gap-2 mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Overview</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg border bg-background">{topic.icon}</div>
          <div>
            <h2 className="font-semibold text-foreground">{topic.title}</h2>
            <p className="text-xs text-muted-foreground">
              {topic.items.length} {topic.items.length === 1 ? 'chapter' : 'chapters'}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-9 h-9"
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

      {/* Content */}
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">No topic found</p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isActive = activeSlug === item.id;
              const originalIndex = topic.items.findIndex((i) => i.id === item.id);

              return (
                <Button
                  key={item.id}
                  variant={isActive ? 'default' : 'ghost'}
                  className={`
                    w-full justify-start h-auto py-2.5 px-3 font-normal
                    ${isActive ? '' : 'text-muted-foreground hover:text-foreground'}
                  `}
                  onClick={() => {
                    navigate(`/docs/${topic.id}/${item.id}`);
                    if (closeSheet) closeSheet();
                  }}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-xs font-medium opacity-60">{String(originalIndex + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-left flex-1">{item.title}</span>
                  </div>
                </Button>
              );
            })
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SidebarContent;
