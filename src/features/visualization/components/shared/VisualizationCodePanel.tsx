import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

type VisualizationCodePanelProps = {
  lines: readonly string[];
  activeLine: number;
};

export function VisualizationCodePanel({ lines, activeLine }: VisualizationCodePanelProps) {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const source = lines.join('\n');

  return (
    <Card className="border-border/40 shadow-none">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{'Code'}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-xl border border-border/40 bg-muted/25">
          <SyntaxHighlighter
            style={isDarkTheme ? atomDark : prism}
            language="javascript"
            PreTag="div"
            className="m-0! bg-transparent! p-4! text-[0.82rem]! leading-7! sm:text-sm!"
            showLineNumbers
            wrapLines
            lineProps={(lineNumber) => ({
              className: cn(
                '-mx-2 block rounded-md px-2 transition-colors',
                activeLine === lineNumber && 'bg-emerald-500/12 ring-1 ring-emerald-500/25'
              ),
            })}
            lineNumberStyle={{
              minWidth: '1.5rem',
              paddingRight: '0.75rem',
              color: isDarkTheme ? 'rgba(161, 161, 170, 0.7)' : 'rgba(82, 82, 91, 0.7)',
            }}
            customStyle={{ background: 'transparent', margin: 0 }}
            codeTagProps={{ style: { background: 'transparent' } }}
          >
            {source}
          </SyntaxHighlighter>
        </div>
      </CardContent>
    </Card>
  );
}
