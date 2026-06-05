import type { TopicItem } from '@/data/topics';
import vscodeTips from './vscode-tips.mdx?raw';
import chromeDevtools from './chrome-devtools.mdx?raw';
import postmanApiTesting from './postman-api-testing.mdx?raw';
import dockerCli from './docker-cli.mdx?raw';
import gitWorkflow from './git-workflow.mdx?raw';
import npmYarnPnpm from './npm-yarn-pnpm.mdx?raw';
import linuxCommandLine from './linux-command-line.mdx?raw';

export const developerToolsTopics: TopicItem[] = [
  { id: 'resources-vscode-tips', title: '📝 VS Code Tips', content: vscodeTips },
  { id: 'resources-chrome-devtools', title: '🔍 Chrome DevTools', content: chromeDevtools },
  { id: 'resources-postman-api-testing', title: '📮 Postman & API Testing', content: postmanApiTesting },
  { id: 'resources-docker-cli', title: '🐳 Docker CLI', content: dockerCli },
  { id: 'resources-git-workflow', title: '🔧 Git Workflow', content: gitWorkflow },
  { id: 'resources-npm-yarn-pnpm', title: '📦 npm, Yarn & pnpm', content: npmYarnPnpm },
  { id: 'resources-linux-command-line', title: '🐧 Linux Command Line', content: linuxCommandLine },
];
