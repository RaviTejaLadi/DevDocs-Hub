import { Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';

type VisualizationConsoleProps = {
  output: readonly string[];
  caption: string;
  extraLines?: readonly string[];
};

export function VisualizationConsole({ output, caption, extraLines = [] }: VisualizationConsoleProps) {
  const { t } = useI18n();

  return (
    <Card className="border-border/40 shadow-none">
      <CardHeader className="flex flex-row items-center gap-2 pb-3">
        <Terminal className="h-4 w-4 text-emerald-500" />
        <CardTitle className="text-base">{t('visualization.console')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="min-h-28 rounded-xl border border-border/40 bg-zinc-950 p-4 font-mono text-sm text-emerald-300">
          {output.length === 0 && extraLines.length === 0 ? (
            <span className="text-zinc-500">{t('visualization.consoleEmpty')}</span>
          ) : (
            <>
              {output.map((line, index) => (
                <div key={`${line}-${index}`} className="leading-7">
                  {line}
                </div>
              ))}
              {extraLines.map((line, index) => (
                <div key={`extra-${index}`} className="leading-7 text-sky-300">
                  {line}
                </div>
              ))}
            </>
          )}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{caption}</p>
      </CardContent>
    </Card>
  );
}
