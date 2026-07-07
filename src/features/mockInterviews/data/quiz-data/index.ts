import type { Question } from '../../types/questions';
import { expressQuestions } from './backend/express';
import { mongoQuestions } from './backend/mongodb';
import { nodeQuestions } from './backend/node';
import { pythonQuestions } from './backend/python';
import { sqlQuestions } from './backend/sql';
import { awsQuestions } from './devops/aws';
import { azureQuestions } from './devops/azure';
import { dockerQuestions } from './devops/docker';
import { graphqlQuestions } from './backend/graphql';
import { angularQuestions } from './frontend/angular';
import { cssQuestions } from './frontend/css';
import { htmlQuestions } from './frontend/html';
import { jsQuestions } from './frontend/js';
import { nextjsQuestions } from './frontend/next';
import { reactQuestions } from './frontend/react';
import { svelteQuestions } from './frontend/svelte';
import { tailwindQuestions } from './frontend/tailwind';
import { typescriptQuestions } from './frontend/typescript';
import { vueQuestions } from './frontend/vue';
import { flutterQuestions } from './mobile/flutter';
import { reactNativeQuestions } from './mobile/reactNative';
import { redisQuestions } from './backend/redis';
import { fastApiQuestions } from './backend/fastapi';
import { postgreSqlQuestions } from './backend/postgresql';
import { springBootQuestions } from './backend/springboot';
import { jenkinsQuestions } from './devops/jenkins';
import { kubernetesQuestions } from './devops/kubernetes';
import { terraformQuestions } from './devops/terraform';
import { githubActionsQuestions } from './devops/github-actions';
import { kotlinQuestions } from './mobile/kotlin';
import { swiftQuestions } from './mobile/swift';
import { jestQuestions } from './testing/jest';
import { cypressQuestions } from './testing/cypress';
import { seleniumQuestions } from './testing/selenium';
import { kafkaQuestions } from './data & analytics/kafka';
import { elasticsearchQuestions } from './data & analytics/elasticsearch';
import { webSecurityQuestions } from './security/web-security';
import { oauthQuestions } from './security/oauth';

export const sampleQuestions: Record<string, Question[]> = {
  //frontend
  react: reactQuestions,
  html: htmlQuestions,
  javascript: jsQuestions,
  css: cssQuestions,
  tailwind: tailwindQuestions,
  nextjs: nextjsQuestions,
  vuejs: vueQuestions,
  typescript: typescriptQuestions,
  angular: angularQuestions,
  svelte: svelteQuestions,

  // backend
  nodejs: nodeQuestions,
  expressjs: expressQuestions,
  python: pythonQuestions,
  sql: sqlQuestions,
  mongodb: mongoQuestions,
  graphql: graphqlQuestions,
  redis: redisQuestions,
  postgresql: postgreSqlQuestions,
  fastapi: fastApiQuestions,
  'spring-boot': springBootQuestions,

  // devops
  docker: dockerQuestions,
  aws: awsQuestions,
  azure: azureQuestions,
  jenkins: jenkinsQuestions,
  kubernetes: kubernetesQuestions,
  terraform: terraformQuestions,
  'github-actions': githubActionsQuestions,

  //mobile
  'react-native': reactNativeQuestions,
  flutter: flutterQuestions,
  kotlin: kotlinQuestions,
  swift: swiftQuestions,

  //testing
  jest: jestQuestions,
  cypress: cypressQuestions,
  selenium: seleniumQuestions,

  //data & analytics
  elasticsearch: elasticsearchQuestions,
  kafka: kafkaQuestions,

  //security
  oauth: oauthQuestions,
  'web-security': webSecurityQuestions,
};
