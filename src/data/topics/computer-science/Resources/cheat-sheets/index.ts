import htmlCheatSheet from './html.md?raw';
import cssCheatSheet from './css.md?raw';
import sassCheatSheet from './sass.md?raw';
import jsCheatSheet from './js.md?raw';
import es6CheatSheet from './es6.md?raw';
import reactCheatSheet from './react.md?raw';
import reactRouterDomCheatSheet from './react-router-dom.md?raw';
import tailwindCheatSheet from './tailwind.md?raw';
import vueCheatSheet from './vue.md?raw';
import typescriptCheatSheet from './typescript.md?raw';
import nextjsCheatSheet from './nextjs.md?raw';
import nodeCheatSheet from './node.md?raw';
import expressCheatSheet from './express.md?raw';
import sqlCheatSheet from './sql.md?raw';
import mySqlCheatSheet from './my-sql.md?raw';
import mongoCheatSheet from './mongo.md?raw';
import postgresqlCheatSheet from './postgresql.md?raw';
import javaCheatSheet from './java.md?raw';
import pythonCheatSheet from './python.md?raw';
import gitCheatSheet from './git.md?raw';
import httpCheatSheet from './http.md?raw';
import dockerCheatSheet from './docker.md?raw';
import awsCheatSheet from './aws.md?raw';
import azureCheatSheet from './azure.md?raw';
import redisCheatSheet from './redis.md?raw';
import nginxCheatSheet from './nginx.md?raw';
import bashCheatSheet from './bash.md?raw';
import dsaCheatSheet from './dsa.md?raw';
import systemDesignCheatSheet from './system-design.md?raw';
import type { TopicItem } from '@/data/topics';

export const cheatSheetsGroups: { id: string; title: string; documents: TopicItem[] }[] = [
  {
    id: 'frontend-cheats',
    title: 'Frontend',
    documents: [
      { id: 'html-cheat-sheet', title: 'HTML 🧱', content: htmlCheatSheet },
      { id: 'css-cheat-sheet', title: 'CSS 🎨', content: cssCheatSheet },
      { id: 'sass-cheat-sheet', title: 'SASS 🎨', content: sassCheatSheet },
      { id: 'tailwind-cheat-sheet', title: 'Tailwind CSS 🌬️', content: tailwindCheatSheet },
      { id: 'js-cheat-sheet', title: 'JavaScript 📜', content: jsCheatSheet },
      { id: 'es6-cheat-sheet', title: 'ES6 📜', content: es6CheatSheet },
      { id: 'react-cheat-sheet', title: 'React ⚛️', content: reactCheatSheet },
      { id: 'react-router-dom-cheat-sheet', title: 'React Router Dom', content: reactRouterDomCheatSheet },
      { id: 'vue-cheat-sheet', title: 'Vue.js 💚', content: vueCheatSheet },
      { id: 'typescript-cheat-sheet', title: 'TypeScript 📘', content: typescriptCheatSheet },
      { id: 'nextjs-cheat-sheet', title: 'Next.js ▲', content: nextjsCheatSheet },
    ],
  },
  {
    id: 'backend-cheats',
    title: 'Backend',
    documents: [
      { id: 'node-cheat-sheet', title: 'Node.js 🟢', content: nodeCheatSheet },
      { id: 'express-cheat-sheet', title: 'Express 🚂', content: expressCheatSheet },
      { id: 'docker-cheat-sheet', title: 'Docker 🐳', content: dockerCheatSheet },
      { id: 'nginx-cheat-sheet', title: 'Nginx 🌐', content: nginxCheatSheet },
      { id: 'redis-cheat-sheet', title: 'Redis 🔴', content: redisCheatSheet },
    ],
  },
  {
    id: 'database-cheats',
    title: 'Databases',
    documents: [
      { id: 'sql-cheat-sheet', title: 'SQL 🗄️', content: sqlCheatSheet },
      { id: 'my-sql-cheat-sheet', title: 'MySQL 🗄️', content: mySqlCheatSheet },
      { id: 'mongo-cheat-sheet', title: 'MongoDB 🍃', content: mongoCheatSheet },
      { id: 'postgresql-cheat-sheet', title: 'PostgreSQL 🐘', content: postgresqlCheatSheet },
    ],
  },
  {
    id: 'languages-cheats',
    title: 'Languages',
    documents: [
      { id: 'java-cheat-sheet', title: 'Java ☕', content: javaCheatSheet },
      { id: 'Python-cheat-sheet', title: 'Python 🐍', content: pythonCheatSheet },
      { id: 'bash-cheat-sheet', title: 'Bash 💻', content: bashCheatSheet },
    ],
  },
  {
    id: 'cloud-cheats',
    title: 'Cloud',
    documents: [
      { id: 'aws-cheat-sheet', title: 'AWS ☁️', content: awsCheatSheet },
      { id: 'azure-cheat-sheet', title: 'Azure ☁️', content: azureCheatSheet },
    ],
  },
  {
    id: 'tools-and-protocols-cheats',
    title: 'Tools & Protocols',
    documents: [
      { id: 'git-cheat-sheet', title: 'Git 🔧', content: gitCheatSheet },
      { id: 'http-cheat-sheet', title: 'HTTP 🌐', content: httpCheatSheet },
    ],
  },
  {
    id: 'dsa-cheats',
    title: 'DSA & System Design',
    documents: [
      { id: 'dsa-cheat-sheet', title: 'DSA 🧠', content: dsaCheatSheet },
      { id: 'system-design-cheat-sheet', title: 'System Design 🏗️', content: systemDesignCheatSheet },
    ],
  },
];
