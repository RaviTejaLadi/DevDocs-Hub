import { useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Braces,
  ChevronLeft,
  ChevronRight,
  Database,
  PanelLeftClose,
  PanelLeftOpen,
  Repeat,
  Search,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarContent, SidebarInput, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { PageSEO } from '@/components/seo';
import { docsSidePanelNavSurfaceClass, docsSidebarTreeBranchClass } from '@/constants/docsSidePanel';
import { cn } from '@/lib/utils';
import { visualizationPath } from '@/app/routes/paths';
import { VISUALIZATION_CATEGORIES } from '../../constants/categories';
import { VISUALIZATIONS } from '../../constants/visualizations';
import type { VisualizationCategory } from '../../types';

type VisualizationPageShellProps = {
  category: VisualizationCategory;
  title: string;
  description: string;
  stepIndex: number;
  stepCount: number;
  children: ReactNode;
};

export function VisualizationPageShell({ title, description, children }: VisualizationPageShellProps) {
  const { visualizationId } = useParams<{ visualizationId?: string }>();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<VisualizationCategory, boolean>>({
    loops: true,
    'data-structures': false,
    javascript: false,
  });
  const visualizationsByCategory = VISUALIZATION_CATEGORIES.map((categoryItem) => ({
    category: categoryItem,
    items: VISUALIZATIONS.filter((item) => item.category === categoryItem.id),
  }));
  const categoryIcons: Record<VisualizationCategory, typeof Repeat> = {
    loops: Repeat,
    'data-structures': Database,
    javascript: Braces,
  };
  const categoryIconColorClass: Record<VisualizationCategory, string> = {
    loops: 'text-emerald-600 dark:text-emerald-400',
    'data-structures': 'text-sky-600 dark:text-sky-400',
    javascript: 'text-violet-600 dark:text-violet-400',
  };
  const sectionIndexLabel = (index: number) => String(index + 1).padStart(2, '0');

  const toggleCategory = (categoryId: VisualizationCategory) => {
    setExpandedCategories((current) => ({ ...current, [categoryId]: !current[categoryId] }));
  };

  return (
    <div className="mx-auto max-w-7xl space-y-3 pb-8">
      <PageSEO
        title={title}
        description={description}
        path={visualizationPath(visualizationId)}
        keywords={['programming visualization', title]}
      />
      {isSidebarCollapsed && (
        <div className="flex justify-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-md border-sidebar-border bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                onClick={() => setIsSidebarCollapsed(false)}
                aria-label="Show navigation"
              >
                <PanelLeftOpen className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">Show navigation</TooltipContent>
          </Tooltip>
        </div>
      )}

      <div className={cn('grid gap-5', !isSidebarCollapsed && 'lg:grid-cols-[17rem_minmax(0,1fr)]')}>
        {!isSidebarCollapsed && (
          <aside className="rounded-lg border border-sidebar-border bg-sidebar text-sidebar-foreground shadow-sm lg:sticky lg:top-4 lg:max-h-[calc(100dvh-7rem)]">
            <div className="border-b border-sidebar-border px-3 py-2.5">
              <div className="flex items-center gap-2">
                <div className="relative min-w-0 flex-1">
                  <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                  <SidebarInput
                    type="text"
                    placeholder={'Search in this section...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-8 bg-background pl-8 pr-8 text-sm"
                  />
                  {searchQuery ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-1/2 size-6 -translate-y-1/2 p-0"
                      onClick={() => setSearchQuery('')}
                      aria-label={'Clear search'}
                    >
                      <X className="size-3" />
                    </Button>
                  ) : null}
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-md border-sidebar-border bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      onClick={() => setIsSidebarCollapsed(true)}
                      aria-label="Hide navigation"
                    >
                      <PanelLeftClose className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">Hide navigation</TooltipContent>
                </Tooltip>
              </div>
            </div>

            <SidebarContent className="px-3 py-3">
              <div className={cn(docsSidePanelNavSurfaceClass, 'flex w-full min-w-0 flex-col gap-1')}>
                {visualizationsByCategory.map(({ category, items }, index) => {
                  const CategoryIcon = categoryIcons[category.id];
                  const iconColorClass = categoryIconColorClass[category.id];
                  const filteredItems = items.filter((item) =>
                    item.label.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                  if (searchQuery && filteredItems.length === 0) return null;

                  return (
                    <div
                      key={category.id}
                      className="w-full min-w-0 border-b border-border/20 pb-2 last:border-b-0 last:pb-0"
                    >
                      <button
                        type="button"
                        onClick={() => toggleCategory(category.id)}
                        className={cn(
                          'flex w-full min-w-0 items-center gap-2 rounded-lg px-2 py-2 text-left hover:bg-sidebar-accent/50',
                          expandedCategories[category.id] && 'bg-sidebar-accent/30'
                        )}
                        aria-label={
                          expandedCategories[category.id] ? `Collapse ${category.label}` : `Expand ${category.label}`
                        }
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-sidebar-border bg-background text-[11px] font-bold tabular-nums">
                          {sectionIndexLabel(index)}
                        </span>
                        <span className="flex min-w-0 flex-1 items-center gap-1.5 text-sm font-semibold">
                          <CategoryIcon className={cn('h-3.5 w-3.5', iconColorClass)} />
                          <span className="truncate">{category.label}</span>
                        </span>
                        <span className="text-xs font-semibold text-sidebar-foreground/70">{filteredItems.length}</span>
                        <ChevronRight
                          className={cn(
                            'h-3.5 w-3.5 text-sidebar-foreground/65 transition-transform',
                            expandedCategories[category.id] && 'rotate-90'
                          )}
                        />
                      </button>

                      {expandedCategories[category.id] && (
                        <div className={cn(docsSidebarTreeBranchClass, 'mt-1')}>
                          <SidebarMenu className="gap-0.5">
                            {filteredItems.map((item) => {
                              const isActive = item.id === visualizationId;
                              const ItemIcon = item.icon;
                              return (
                                <SidebarMenuItem key={item.id}>
                                  <Link
                                    to={visualizationPath(item.id)}
                                    className={cn(
                                      'flex w-full min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
                                      isActive
                                        ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                                        : 'text-sidebar-foreground/85 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                                    )}
                                  >
                                    <ItemIcon className={cn('h-3.5 w-3.5 shrink-0', iconColorClass)} />
                                    <span className="truncate">{item.label}</span>
                                  </Link>
                                </SidebarMenuItem>
                              );
                            })}
                          </SidebarMenu>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </SidebarContent>
          </aside>
        )}

        <div className="space-y-4 min-w-0">
          <Card className="group relative overflow-hidden border-border/45 bg-linear-to-br from-card via-card to-emerald-500/8 shadow-none">
            <div className="pointer-events-none absolute left-4 top-4 z-10 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="h-8 w-8 rounded-md border-border/35 bg-card/70 hover:bg-accent hover:text-accent-foreground"
                    aria-label="Back"
                  >
                    <Link to={visualizationPath()}>
                      <ChevronLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Back</TooltipContent>
              </Tooltip>
            </div>
            <CardHeader className="space-y-2 pb-4">
              <CardTitle className="text-2xl text-gradient-sheen sm:text-3xl">{title}</CardTitle>
              <CardDescription className="max-w-3xl text-sm leading-relaxed sm:text-base">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>

          {children}
        </div>
      </div>
    </div>
  );
}
