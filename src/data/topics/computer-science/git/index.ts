import type { TopicItem } from '@/data/topics';
import gitIntroduction from './introduction.md?raw';
import gitInstallationAndSetup from './installation-and-setup.md?raw';
import gitVersionControlConcepts from './version-control-concepts.md?raw';
import gitBasics from './basics.md?raw';
import gitRepositoryAndCommits from './repository-and-commits.md?raw';
import gitStagingAreaAndWorkflow from './staging-area-and-workflow.md?raw';
import gitUndoingChanges from './undoing-changes.md?raw';
import gitignore from './gitignore.md?raw';
import gitViewingHistory from './viewing-history.md?raw';
import gitCommands from './git-commands.md?raw';
import gitBranching from './branching.md?raw';
import gitMerging from './merging.md?raw';
import gitRebasing from './rebasing.md?raw';
import gitMergeVsRebase from './merge-vs-rebase.md?raw';
import gitResolvingMergeConflicts from './resolving-merge-conflicts.md?raw';
import gitRemoteRepositories from './remote-repositories.md?raw';
import gitFetchPullPush from './fetch-pull-push.md?raw';
import gitGithubWorkflow from './github-workflow.md?raw';
import gitPullRequests from './pull-requests.md?raw';
import gitCodeReview from './code-review.md?raw';
import gitForkAndOpenSource from './fork-and-open-source.md?raw';
import gitGithubActionsBasics from './github-actions-basics.md?raw';
import gitBranchingStrategies from './branching-strategies.md?raw';
import gitCommitMessagesBestPractices from './commit-messages-best-practices.md?raw';
import gitStash from './stash.md?raw';
import gitCherryPick from './cherry-pick.md?raw';
import gitTagsAndReleases from './tags-and-releases.md?raw';
import gitHooks from './git-hooks.md?raw';
import gitSubmodules from './submodules.md?raw';
import gitBisect from './git-bisect.md?raw';
import gitReflog from './reflog.md?raw';
import gitTop25InterviewQuestions from './top-25-interview-questions.md?raw';

export const gitTopics: TopicItem[] = [
  {
    id: 'git-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'git-introduction', title: '📖 Introduction', content: gitIntroduction, badge: 'beginner' },
      { id: 'git-installation-and-setup', title: '🛠️ Installation & Setup', content: gitInstallationAndSetup },
      { id: 'git-version-control-concepts', title: '📚 Version Control Concepts', content: gitVersionControlConcepts },
      { id: 'git-basics', title: '🧱 Git Basics', content: gitBasics },
    ],
  },
  {
    id: 'git-core-workflow',
    title: '⚙️ Core Workflow',
    content: '',
    items: [
      { id: 'git-repository-and-commits', title: '📦 Repository & Commits', content: gitRepositoryAndCommits },
      { id: 'git-staging-area-and-workflow', title: '📥 Staging Area & Workflow', content: gitStagingAreaAndWorkflow },
      { id: 'git-git-commands', title: '⌨️ Essential Git Commands', content: gitCommands },
      { id: 'git-viewing-history', title: '📜 Viewing History (log & diff)', content: gitViewingHistory },
      { id: 'git-undoing-changes', title: '↩️ Undoing Changes', content: gitUndoingChanges },
      { id: 'git-gitignore', title: '🚫 .gitignore', content: gitignore },
    ],
  },
  {
    id: 'git-branching-merging',
    title: '🌿 Branching & Merging',
    content: '',
    items: [
      { id: 'git-branching', title: '🌿 Branching', content: gitBranching },
      { id: 'git-merging', title: '🔀 Merging', content: gitMerging },
      { id: 'git-rebasing', title: '♻️ Rebasing', content: gitRebasing },
      { id: 'git-merge-vs-rebase', title: '⚖️ Merge vs Rebase', content: gitMergeVsRebase },
      {
        id: 'git-resolving-merge-conflicts',
        title: '⚔️ Resolving Merge Conflicts',
        content: gitResolvingMergeConflicts,
      },
    ],
  },
  {
    id: 'git-remotes-collaboration',
    title: '🌐 Remotes & Collaboration',
    content: '',
    items: [
      { id: 'git-remote-repositories', title: '☁️ Remote Repositories', content: gitRemoteRepositories },
      { id: 'git-fetch-pull-push', title: '⬇️ Fetch, Pull & Push', content: gitFetchPullPush },
      { id: 'git-github-workflow', title: '🐙 GitHub Workflow', content: gitGithubWorkflow },
      { id: 'git-pull-requests', title: '🔃 Pull Requests', content: gitPullRequests },
      { id: 'git-code-review', title: '👀 Code Review', content: gitCodeReview },
      { id: 'git-fork-and-open-source', title: '🍴 Fork & Open Source Contribution', content: gitForkAndOpenSource },
      { id: 'git-github-actions-basics', title: '⚡ GitHub Actions Basics', content: gitGithubActionsBasics },
    ],
  },
  {
    id: 'git-advanced',
    title: '🔬 Advanced Git',
    content: '',
    items: [
      { id: 'git-stash', title: '📌 Stash', content: gitStash },
      { id: 'git-cherry-pick', title: '🍒 Cherry Pick', content: gitCherryPick },
      { id: 'git-tags-and-releases', title: '🏷️ Tags & Releases', content: gitTagsAndReleases },
      { id: 'git-hooks', title: '🪝 Git Hooks', content: gitHooks },
      { id: 'git-submodules', title: '📂 Submodules', content: gitSubmodules },
      { id: 'git-bisect', title: '🔍 Git Bisect', content: gitBisect },
      { id: 'git-reflog', title: '📋 Reflog', content: gitReflog },
    ],
  },
  {
    id: 'git-team-practices',
    title: '👥 Team Practices',
    content: '',
    items: [
      { id: 'git-branching-strategies', title: '🗺️ Branching Strategies', content: gitBranchingStrategies },
      {
        id: 'git-commit-messages-best-practices',
        title: '✍️ Commit Message Best Practices',
        content: gitCommitMessagesBestPractices,
      },
    ],
  },
  {
    id: 'git-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'git-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: gitTop25InterviewQuestions,
        badge: 'must-know',
      },
    ],
  },
];
