import intro from './intro.md?raw';
import htmlMustKnowTopics from './html-must-know-topics.md?raw';
import type { TopicItem } from '..';
import htmlBasics from './html-basics.md?raw';
import coreTextAndContentTags from './core-text-and-content-tags.md?raw';
import linksAndNavigation from './links-and-navigation.md?raw';
import imagesAndMedia from './images-and-media.md?raw';
import lists from './lists.md?raw';
import tables from './tables.md?raw';
import forms from './forms.md?raw';
import semanticHtml from './semantic-html.md?raw';
import metadataAndSeoBasics from './metadata-and-seo-basics.md?raw';
import htmlAttributes from './html-attributes.md?raw';
import accessibility from './accessibility.md?raw';
import htmlAndCssRelationship from './html-and-css-relationship.md?raw';
import htmlAndJsRelationship from './html-and-js-relationship.md?raw';
import html5Apis from './html5-apis.md?raw';
import bestPractices from './best-practices.md?raw';
import commonHtmlMistakes from './common-html-mistakes.md?raw';
import top50QAndA from './top-50-q-and-a.md?raw';

export const htmlTopics: TopicItem[] = [
  {
    id: 'intro',
    title: 'Introduction',
    content: intro,
  },
  {
    id: 'html-q-and-a',
    title: 'Top 50 Q&A',
    content: top50QAndA,
  },
  {
    id: 'html-must-know-topics',
    title: 'HTML topics every developer must know',
    content: htmlMustKnowTopics,
  },
  {
    id: 'html-basics',
    title: 'HTML Basics',
    content: htmlBasics,
  },
  {
    id: 'core-text-and-content-tags',
    title: 'Core Text & Content Tags',
    content: coreTextAndContentTags,
  },
  {
    id: 'links-and-navigation',
    title: 'Links & Navigation',
    content: linksAndNavigation,
  },
  {
    id: 'images-and-media',
    title: 'Images & Media',
    content: imagesAndMedia,
  },
  {
    id: 'lists',
    title: 'Lists',
    content: lists,
  },
  {
    id: 'tables',
    title: 'Tables',
    content: tables,
  },
  {
    id: 'forms',
    title: 'Forms',
    content: forms,
  },
  {
    id: 'semantic-html',
    title: 'Semantic HTML',
    content: semanticHtml,
  },
  {
    id: 'metadata-and-seo-basics',
    title: 'Metadata & SEO Basics',
    content: metadataAndSeoBasics,
  },
  {
    id: 'html-attributes',
    title: 'HTML Attributes',
    content: htmlAttributes,
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    content: accessibility,
  },
  {
    id: 'html-and-css-relationship',
    title: 'HTML & CSS Relationship',
    content: htmlAndCssRelationship,
  },
  {
    id: 'html-and-js-relationship',
    title: 'HTML & JavaScript Relationship',
    content: htmlAndJsRelationship,
  },
  {
    id: 'html5-apis',
    title: 'HTML5 APIs',
    content: html5Apis,
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    content: bestPractices,
  },
  {
    id: 'common-html-mistakes',
    title: 'Common HTML Mistakes',
    content: commonHtmlMistakes,
  },
];
