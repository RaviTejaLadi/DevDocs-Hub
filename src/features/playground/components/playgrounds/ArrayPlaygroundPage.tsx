import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  ListOrdered,
  Menu,
  Play,
  RotateCcw,
  Terminal,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { playgroundPath } from '@/app/routes/paths';
import { ARRAY_METHOD_CATEGORIES } from '../../constants';
import { useArrayPlayground } from '../../hooks';
import { ArrayMethodList } from '../methodList/ArrayMethodList';

function formatValue(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

const CATEGORY_TOOLTIP_KEYS = {
  mutator: 'playground.categoryMutator',
  accessor: 'playground.categoryAccessor',
  iteration: 'playground.categoryIteration',
  search: 'playground.categorySearch',
  static: 'playground.categoryStatic',
} as const;

export function ArrayPlaygroundPage() {
  const { t } = useI18n();
  const [mobileMethodsOpen, setMobileMethodsOpen] = useState(false);

  const {
    selectedMethod,
    selectMethod,
    categoryFilter,
    setCategoryFilter,
    methodSearch,
    setMethodSearch,
    filteredMethods,
    arrayInput,
    setArrayInput,
    extraArgs,
    setExtraArgs,
    run,
    runResult,
    resetInputs,
    totalMethods,
    autoRun,
    setAutoRun,
    goToAdjacent,
    globalIndex,
    copiedKey,
    copyText,
    categoryCounts,
  } = useArrayPlayground();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        run();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [run]);

  const methodListProps = {
    methods: filteredMethods,
    selectedId: selectedMethod.id,
    onSelect: selectMethod,
    categoryFilter,
    onCategoryChange: setCategoryFilter,
    methodSearch,
    onMethodSearchChange: setMethodSearch,
    categoryCounts,
  };

  return (
    <div className="max-w-7xl mx-auto space-y-5 pb-8">
      <section className="relative overflow-hidden rounded-2xl border border-border/40 bg-linear-to-br from-card via-card to-violet-500/10 p-5 sm:p-6">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3 min-w-0">
            <Link
              to={playgroundPath()}
              className="inline-flex items-center gap-2 rounded-md border border-border/35 bg-card/45 px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              {t('playground.backToPlaygrounds')}
            </Link>
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl border border-violet-500/25 bg-violet-500/10 shrink-0">
                <ListOrdered className="h-5 w-5 text-violet-500" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight">{t('playground.arraysTitle')}</h1>
                <p className="text-sm text-muted-foreground mt-0.5 max-w-xl">{t('playground.arraysDescription')}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Badge variant="secondary" className="h-7 px-3 border border-border/35">
              {t('playground.methods', { count: totalMethods })}
            </Badge>
            <Badge variant="outline" className="h-7 px-3 font-mono text-xs">
              {t('playground.methodPosition', { current: globalIndex + 1, total: totalMethods })}
            </Badge>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_1fr] gap-4 lg:gap-6">
        <Card className="hidden lg:flex flex-col border-border/40 bg-card/60 min-h-[520px]">
          <CardHeader className="pb-2 shrink-0">
            <CardTitle className="text-sm font-medium">{t('playground.methodsList')}</CardTitle>
            <CardDescription className="text-xs">{t('playground.searchMethods')}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col min-h-0 pt-0">
            <ArrayMethodList {...methodListProps} className="flex-1" />
          </CardContent>
        </Card>

        <div className="space-y-4 min-w-0">
          <Card className="border-border/40 bg-card/70">
            <CardContent className="py-3 px-4">
              <div className="flex flex-wrap items-center gap-2 justify-between">
                <div className="flex items-center gap-1 min-w-0">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0"
                        onClick={() => goToAdjacent('prev')}
                        aria-label={t('playground.prevMethod')}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{t('playground.prevMethod')}</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0"
                        onClick={() => goToAdjacent('next')}
                        aria-label={t('playground.nextMethod')}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{t('playground.nextMethod')}</TooltipContent>
                  </Tooltip>
                  <Separator orientation="vertical" className="mx-1 h-6 hidden sm:block" />
                  <div className="min-w-0 pl-1">
                    <p className="font-mono text-base sm:text-lg font-semibold truncate">{selectedMethod.name}()</p>
                    <p className="font-mono text-xs text-muted-foreground truncate">{selectedMethod.signature}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Sheet open={mobileMethodsOpen} onOpenChange={setMobileMethodsOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden gap-2 flex-1 sm:flex-none">
                        <Menu className="h-4 w-4" />
                        {t('playground.changeMethod')}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[min(100vw-2rem,340px)] flex flex-col p-0">
                      <SheetHeader className="px-4 pt-4 pb-2 text-left">
                        <SheetTitle>{t('playground.browseMethods')}</SheetTitle>
                        <SheetDescription>{t('playground.searchMethods')}</SheetDescription>
                      </SheetHeader>
                      <div className="flex-1 px-4 pb-4 min-h-0">
                        <ArrayMethodList {...methodListProps} onSelectAndClose={() => setMobileMethodsOpen(false)} />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant={selectedMethod.mutates ? 'destructive' : 'secondary'}
                        className="hidden sm:inline-flex"
                      >
                        {selectedMethod.mutates ? t('playground.mutates') : t('playground.nonMutating')}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      {selectedMethod.mutates ? t('playground.mutatesTooltip') : t('playground.nonMutatingTooltip')}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-card/65">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1 min-w-0 flex-1">
                  <CardTitle className="text-base">{t('playground.reference')}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{selectedMethod.description}</CardDescription>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="text-xs capitalize shrink-0 cursor-default">
                      {ARRAY_METHOD_CATEGORIES[selectedMethod.category].label}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    {t(CATEGORY_TOOLTIP_KEYS[selectedMethod.category])}
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border/35 bg-muted/25 p-3 space-y-1">
                  <Label className="text-xs text-muted-foreground">{t('playground.returns')}</Label>
                  <code className="text-sm font-mono text-foreground block">{selectedMethod.returns}</code>
                </div>
                <div className="relative group rounded-lg border border-dashed border-border/40 bg-muted/20 p-3">
                  <Label className="text-xs text-muted-foreground mb-2 block">{t('playground.example')}</Label>
                  <pre className="text-xs sm:text-sm font-mono text-foreground overflow-x-auto pr-14">
                    {selectedMethod.example}
                  </pre>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="absolute top-2 right-2 h-7 gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                    onClick={() => copyText('example', selectedMethod.example)}
                  >
                    {copiedKey === 'example' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span className="sr-only">{t('playground.copyExample')}</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
            <Card className="border-violet-500/20 shadow-none">
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Play className="h-4 w-4 text-violet-500" />
                      {t('playground.tryIt')}
                    </CardTitle>
                    <CardDescription className="mt-1">{t('playground.tryItHint')}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border/35 bg-muted/30 px-3 py-2">
                    <Switch id="auto-run" checked={autoRun} onCheckedChange={setAutoRun} />
                    <Label htmlFor="auto-run" className="text-xs font-normal cursor-pointer">
                      {t('playground.autoRun')}
                    </Label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-[10px] text-muted-foreground border-l border-border/40 pl-2 ml-1 cursor-help">
                          ?
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>{t('playground.autoRunHint')}</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="array-input">{t('playground.arrayInput')}</Label>
                  <Textarea
                    id="array-input"
                    value={arrayInput}
                    onChange={(e) => setArrayInput(e.target.value)}
                    rows={3}
                    spellCheck={false}
                    className="font-mono text-sm resize-y min-h-18 focus-visible:ring-violet-500/30"
                    placeholder="[1, 2, 3]"
                  />
                </div>

                {selectedMethod.extraArgsLabel && (
                  <div className="space-y-2">
                    <Label htmlFor="extra-args">{selectedMethod.extraArgsLabel}</Label>
                    <Textarea
                      id="extra-args"
                      value={extraArgs}
                      onChange={(e) => setExtraArgs(e.target.value)}
                      rows={2}
                      spellCheck={false}
                      className="font-mono text-sm resize-y min-h-11 focus-visible:ring-violet-500/30"
                      placeholder={selectedMethod.extraArgsPlaceholder}
                    />
                  </div>
                )}

                <Separator />

                <div className="flex flex-wrap items-center gap-2">
                  <Button type="button" onClick={run} className="gap-2">
                    <Play className="h-4 w-4" />
                    {t('playground.run')}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetInputs} className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    {t('playground.reset')}
                  </Button>
                  <span className="text-xs text-muted-foreground ml-auto hidden sm:inline">
                    {t('playground.runShortcut')}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card
              className={cn(
                'min-h-[280px] xl:sticky xl:top-4',
                runResult && (runResult.ok ? 'border-emerald-500/25' : 'border-destructive/25')
              )}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-muted-foreground" />
                  {t('playground.output')}
                  {runResult && (
                    <span
                      className={cn('h-2 w-2 rounded-full', runResult.ok ? 'bg-emerald-500' : 'bg-destructive')}
                      aria-hidden
                    />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!runResult ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center text-muted-foreground border border-dashed border-border/40 rounded-lg bg-muted/15">
                    <Terminal className="h-9 w-9 mb-2 opacity-35" />
                    <p className="text-sm max-w-xs">{t('playground.noOutputYet')}</p>
                  </div>
                ) : runResult.ok ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <Label className="text-xs text-muted-foreground">{t('playground.result')}</Label>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-7 gap-1 text-xs"
                          onClick={() => copyText('result', formatValue(runResult.result))}
                        >
                          {copiedKey === 'result' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          {copiedKey === 'result' ? t('common.copied') : t('playground.copyResult')}
                        </Button>
                      </div>
                      <ScrollArea className="max-h-[160px] rounded-lg border border-emerald-500/20 bg-emerald-500/5">
                        <pre className="p-3 text-xs sm:text-sm font-mono text-foreground">
                          {formatValue(runResult.result)}
                        </pre>
                      </ScrollArea>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label className="text-xs text-muted-foreground">
                        {selectedMethod.mutates ? t('playground.arrayAfter') : t('playground.arrayUnchanged')}
                      </Label>
                      <ScrollArea className="max-h-[140px] rounded-lg border border-border/35 bg-muted/30">
                        <pre className="p-3 text-xs sm:text-sm font-mono text-foreground">
                          {formatValue(runResult.arrayAfter)}
                        </pre>
                      </ScrollArea>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3 rounded-lg bg-destructive/10 border border-destructive/25 p-4 text-sm text-destructive">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">{t('playground.runError')}</p>
                      <p className="text-xs mt-1 font-mono opacity-90">{runResult.error}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
