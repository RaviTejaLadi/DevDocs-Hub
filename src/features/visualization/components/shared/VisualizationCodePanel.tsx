import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type VisualizationCodePanelProps = {
  lines: readonly string[];
  activeLine: number;
};

export function VisualizationCodePanel({ lines, activeLine }: VisualizationCodePanelProps) {
  return (
    <Card className="border-border/40 shadow-none">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{'Code'}</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="overflow-x-auto rounded-xl border border-border/40 bg-muted/25 p-4 font-mono text-[0.82rem] leading-7 sm:text-sm">
          {lines.map((line, index) => {
            const lineNumber = index + 1;
            const isActive = activeLine === lineNumber;
            return (
              <div
                key={`${lineNumber}-${line}`}
                className={cn(
                  '-mx-2 flex gap-3 rounded-md px-2 transition-colors',
                  isActive && 'bg-emerald-500/12 ring-1 ring-emerald-500/25'
                )}
              >
                <span className="w-5 shrink-0 select-none text-right text-muted-foreground/70">{lineNumber}</span>
                <code className="text-foreground/90">{line}</code>
              </div>
            );
          })}
        </pre>
      </CardContent>
    </Card>
  );
}
