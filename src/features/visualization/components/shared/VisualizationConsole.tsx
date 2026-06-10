import { Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/hooks/useTheme';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

type VisualizationConsoleProps = {
  output: readonly string[];
  caption: string;
  extraLines?: readonly string[];
};

export function VisualizationConsole({ output, caption, extraLines = [] }: VisualizationConsoleProps) {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const allOutput = [...output, ...extraLines];
  const consoleText = allOutput.length === 0 ? 'No output yet - step into the loop body to log values.' : allOutput.join('\n');

  return (
    <Card className="border-border/40 shadow-none">
      <CardHeader className="flex flex-row items-center gap-2 pb-3">
        <Terminal className="h-4 w-4 text-emerald-500" />
        <CardTitle className="text-base">{'Console output'}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="min-h-28 overflow-x-auto rounded-xl border border-border/40 bg-zinc-950">
          <SyntaxHighlighter
            style={isDarkTheme ? atomDark : prism}
            language="bash"
            PreTag="div"
            className="m-0! bg-transparent! p-4! text-sm! leading-7!"
            showLineNumbers={false}
            wrapLongLines
            customStyle={{ background: 'transparent', margin: 0 }}
            codeTagProps={{ style: { background: 'transparent' } }}
          >
            {consoleText}
          </SyntaxHighlighter>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{caption}</p>
      </CardContent>
    </Card>
  );
}
