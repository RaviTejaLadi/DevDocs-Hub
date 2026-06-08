import { Search } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { cn } from '@/lib/utils';

import type { ObjectMethodCategory, ObjectMethodDefinition } from '../../types';
import { OBJECT_METHOD_CATEGORIES } from '../../constants/objectMethods';

const CATEGORY_ORDER: ObjectMethodCategory[] = ['static', 'inspection', 'transformation', 'mutation'];

type ObjectMethodListProps = {
  methods: ObjectMethodDefinition[];
  selectedId: string;
  onSelect: (id: string) => void;

  categoryFilter: ObjectMethodCategory | 'all';

  onCategoryChange: (cat: ObjectMethodCategory | 'all') => void;

  methodSearch: string;

  onMethodSearchChange: (q: string) => void;

  categoryCounts: Record<ObjectMethodCategory | 'all', number>;

  className?: string;

  onSelectAndClose?: () => void;
};

export function ObjectMethodList({
  methods,
  selectedId,
  onSelect,
  categoryFilter,
  onCategoryChange,
  methodSearch,
  onMethodSearchChange,
  categoryCounts,
  className,
  onSelectAndClose,
}: ObjectMethodListProps) {
  
  const handleSelect = (id: string) => {
    onSelect(id);

    onSelectAndClose?.();
  };

  return (
    <div className={cn('flex flex-col gap-3 min-h-0', className)}>
      <Tabs
        value={categoryFilter}
        onValueChange={(v) => onCategoryChange(v as ObjectMethodCategory | 'all')}
        className="w-full"
      >
        <ScrollArea className="w-full whitespace-nowrap">
          <TabsList
            variant="line"
            className="w-max min-w-full justify-start h-auto flex-wrap gap-0.5 p-0 bg-transparent"
          >
            <TabsTrigger value="all" className="text-xs px-2.5 py-1.5">
              {'All'}

              <Badge variant="secondary" className="ml-1 h-4 px-1 text-[10px]">
                {categoryCounts.all}
              </Badge>
            </TabsTrigger>

            {CATEGORY_ORDER.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="text-xs px-2.5 py-1.5">
                {OBJECT_METHOD_CATEGORIES[cat].label}

                <Badge variant="secondary" className="ml-1 h-4 px-1 text-[10px]">
                  {categoryCounts[cat]}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>
      </Tabs>

      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />

        <Input
          value={methodSearch}
          onChange={(e) => onMethodSearchChange(e.target.value)}
          placeholder={'Search methods...'}
          className="pl-8 h-9 text-sm border-border/35"
        />
      </div>

      <ScrollArea className="flex-1 min-h-[200px] max-h-[min(52vh,480px)] pr-2">
        <div className="space-y-0.5 pb-1">
          {methods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => handleSelect(method.id)}
              className={cn(
                'w-full text-left rounded-lg px-3 py-2.5 text-sm transition-all duration-150',
                selectedId === method.id
                  ? 'bg-cyan-500/15 text-foreground font-medium border border-cyan-500/30 shadow-none'
                  : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground border border-transparent'
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm">{method.name}</span>

                {method.mutates && (
                  <Badge
                    variant="outline"
                    className="h-4 px-1 text-[9px] border-amber-500/30 text-amber-600 dark:text-amber-400"
                  >
                    mut
                  </Badge>
                )}
              </div>

              <span className="block text-[10px] uppercase tracking-wide opacity-70 mt-0.5">
                {OBJECT_METHOD_CATEGORIES[method.category].label}
              </span>
            </button>
          ))}

          {methods.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">{'No methods match your filters.'}</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
