import intro from './intro.mdx?raw';
import htmlInstallationAndSetup from './installation-and-setup.mdx?raw';
import htmlMustKnowTopics from './html-must-know-topics.mdx?raw';
import htmlBasics from './html-basics.mdx?raw';
import documentStructure from './document-structure.mdx?raw';
import headElement from './head-element.mdx?raw';
import coreTextAndContentTags from './core-text-and-content-tags.mdx?raw';
import linksAndNavigation from './links-and-navigation.mdx?raw';
import imagesAndMedia from './images-and-media.mdx?raw';
import lists from './lists.mdx?raw';
import tables from './tables.mdx?raw';
import forms from './forms.mdx?raw';
import canvasAndSvg from './canvas-and-svg.mdx?raw';
import iframesAndEmbeds from './iframes-and-embeds.mdx?raw';
import semanticHtml from './semantic-html.mdx?raw';
import metadataAndSeoBasics from './metadata-and-seo-basics.mdx?raw';
import htmlAttributes from './html-attributes.mdx?raw';
import dataAttributes from './data-attributes.mdx?raw';
import microdataSchema from './microdata-schema.mdx?raw';
import accessibility from './accessibility.mdx?raw';
import htmlAndCssRelationship from './html-and-css-relationship.mdx?raw';
import htmlAndJsRelationship from './html-and-js-relationship.mdx?raw';
import html5Apis from './html5-apis.mdx?raw';
import bestPractices from './best-practices.mdx?raw';
import commonHtmlMistakes from './common-html-mistakes.mdx?raw';
import top25InterviewQuestions from './top-25-interview-questions.mdx?raw';
import type { TopicItem } from '@/data/topics';

export const htmlTopics: TopicItem[] = [
  {
    id: 'html-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'intro', title: '📖 Introduction', content: intro },
      { id: 'html-installation-and-setup', title: '🛠️ Installation & Setup', content: htmlInstallationAndSetup },
      { id: 'html-must-know-topics', title: '📌 HTML Topics Every Developer Must Know', content: htmlMustKnowTopics },
      { id: 'html-basics', title: '🧱 HTML Basics', content: htmlBasics },
      { id: 'html-document-structure', title: '📄 Document Structure', content: documentStructure },
      { id: 'html-head-element', title: '🧠 The Head Element', content: headElement },
    ],
  },
  {
    id: 'html-content-structure',
    title: '📝 Content & Structure',
    content: '',
    items: [
      { id: 'core-text-and-content-tags', title: '✏️ Core Text & Content Tags', content: coreTextAndContentTags },
      { id: 'links-and-navigation', title: '🔗 Links & Navigation', content: linksAndNavigation },
      { id: 'lists', title: '📋 Lists', content: lists },
      { id: 'tables', title: '📊 Tables', content: tables },
      { id: 'images-and-media', title: '🖼️ Images & Media', content: imagesAndMedia },
      { id: 'html-canvas-and-svg', title: '🎨 Canvas & SVG', content: canvasAndSvg },
      { id: 'html-iframes-and-embeds', title: '📺 iframes & Embeds', content: iframesAndEmbeds },
    ],
  },
  {
    id: 'html-forms-interactive',
    title: '📥 Forms & Interactive',
    content: '',
    items: [
      { id: 'forms', title: '📋 Forms', content: forms },
      { id: 'html5-apis', title: '⚡ HTML5 APIs', content: html5Apis },
    ],
  },
  {
    id: 'html-semantic-seo',
    title: '🏷️ Semantic HTML & SEO',
    content: '',
    items: [
      { id: 'semantic-html', title: '🧩 Semantic HTML', content: semanticHtml },
      { id: 'metadata-and-seo-basics', title: '🔍 Metadata & SEO Basics', content: metadataAndSeoBasics },
      { id: 'html-attributes', title: '🏷️ HTML Attributes', content: htmlAttributes },
      { id: 'html-data-attributes', title: '📦 Data Attributes', content: dataAttributes },
      { id: 'html-microdata-schema', title: '📐 Microdata & Schema', content: microdataSchema },
    ],
  },
  {
    id: 'html-integration-quality',
    title: '🔗 Integration & Quality',
    content: '',
    items: [
      { id: 'html-and-css-relationship', title: '🎨 HTML & CSS Relationship', content: htmlAndCssRelationship },
      { id: 'html-and-js-relationship', title: '📜 HTML & JavaScript Relationship', content: htmlAndJsRelationship },
      { id: 'accessibility', title: '♿ Accessibility', content: accessibility },
      { id: 'best-practices', title: '✅ Best Practices', content: bestPractices },
      { id: 'common-html-mistakes', title: '⚠️ Common HTML Mistakes', content: commonHtmlMistakes },
    ],
  },
  {
    id: 'html-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'html-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: top25InterviewQuestions,
      },
    ],
  },
];
