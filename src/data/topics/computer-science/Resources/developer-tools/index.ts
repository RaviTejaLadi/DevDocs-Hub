import type { TopicItem } from '@/data/topics';
import vscodeTips from './vscode-tips.md?raw';
import chromeDevtools from './chrome-devtools.md?raw';
import postmanApiTesting from './postman-api-testing.md?raw';
import dockerCli from './docker-cli.md?raw';
import gitWorkflow from './git-workflow.md?raw';
import npmYarnPnpm from './npm-yarn-pnpm.md?raw';
import linuxCommandLine from './linux-command-line.md?raw';

export const developerToolsTopics: TopicItem[] = [
  { id: 'resources-vscode-tips', title: '📝 VS Code Tips', content: vscodeTips },
  { id: 'resources-chrome-devtools', title: '🔍 Chrome DevTools', content: chromeDevtools },
  { id: 'resources-postman-api-testing', title: '📮 Postman & API Testing', content: postmanApiTesting },
  { id: 'resources-docker-cli', title: '🐳 Docker CLI', content: dockerCli },
  { id: 'resources-git-workflow', title: '🔧 Git Workflow', content: gitWorkflow },
  { id: 'resources-npm-yarn-pnpm', title: '📦 npm, Yarn & pnpm', content: npmYarnPnpm },
  { id: 'resources-linux-command-line', title: '🐧 Linux Command Line', content: linuxCommandLine },
];
