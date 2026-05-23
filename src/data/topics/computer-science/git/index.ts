import type { TopicItem } from '@/data/topics';
import basics from './basics.md?raw';
import branching from './branching.md?raw';
import git_commands from './git-commands.md?raw';
import github_workflow from './github-workflow.md?raw';
import introduction from './introduction.md?raw';
import merging from './merging.md?raw';
import rebasing from './rebasing.md?raw';

export const gitTopics: TopicItem[] = [
  { id: 'git-basics', title: 'Basics', content: basics },
  { id: 'git-branching', title: 'Branching', content: branching },
  { id: 'git-git-commands', title: 'Git Commands', content: git_commands },
  { id: 'git-github-workflow', title: 'Github Workflow', content: github_workflow },
  { id: 'git-introduction', title: '📖 Introduction', content: introduction },
  { id: 'git-merging', title: 'Merging', content: merging },
  { id: 'git-rebasing', title: 'Rebasing', content: rebasing },
];
