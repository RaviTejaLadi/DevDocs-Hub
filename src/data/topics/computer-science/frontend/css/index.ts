import type { TopicItem } from '@/data/topics';
import intro from './intro.mdx?raw';
import top50QAndA from './top-50-q-and-a.mdx?raw';
import cssMustKnowTopics from './css-must-know-topics.mdx?raw';
import cssBasics from './css-basics.mdx?raw';
import selectorsAndCombinators from './selectors-and-combinators.mdx?raw';
import boxModelAndLayoutFundamentals from './box-model-and-layout-fundamentals.mdx?raw';
import displayPositioningAndZIndex from './display-positioning-and-z-index.mdx?raw';
import colorsTypographyAndBackgrounds from './colors-typography-and-backgrounds.mdx?raw';
import unitsSizingAndSpacing from './units-sizing-and-spacing.mdx?raw';
import cascadeSpecificityAndInheritance from './cascade-specificity-and-inheritance.mdx?raw';
import pseudoClassesElements from './pseudo-classes-elements.mdx?raw';
import overflowAndScroll from './overflow-and-scroll.mdx?raw';
import flexbox from './flexbox.mdx?raw';
import cssGrid from './css-grid.mdx?raw';
import responsiveDesignAndMediaQueries from './responsive-design-and-media-queries.mdx?raw';
import transitionsAndAnimations from './transitions-and-animations.mdx?raw';
import transforms from './transforms.mdx?raw';
import filtersAndBlendModes from './filters-and-blend-modes.mdx?raw';
import cssVariablesAndModernFeatures from './css-variables-and-modern-features.mdx?raw';
import cssArchitectureAndOrganization from './css-architecture-and-organization.mdx?raw';
import cssPreprocessorsSass from './css-preprocessors-sass.mdx?raw';
import tailwindCssIntro from './tailwind-css-intro.mdx?raw';
import debuggingToolsAndPerformance from './debugging-tools-and-performance.mdx?raw';
import commonCssMistakes from './common-css-mistakes.mdx?raw';
import cssBestPractices from './best-practices.mdx?raw';

export const cssTopics: TopicItem[] = [
  {
    id: 'css-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'intro', title: '📖 Introduction', content: intro },
      { id: 'css-must-know-topics', title: '📌 CSS Topics Every Developer Must Know', content: cssMustKnowTopics },
      { id: 'css-basics', title: '🧱 CSS Basics', content: cssBasics },
      { id: 'selectors-and-combinators', title: '🎯 Selectors & Combinators', content: selectorsAndCombinators },
      {
        id: 'cascade-specificity-and-inheritance',
        title: '🌊 Cascade, Specificity & Inheritance',
        content: cascadeSpecificityAndInheritance,
      },
      {
        id: 'css-pseudo-classes-elements',
        title: '✨ Pseudo-classes & Pseudo-elements',
        content: pseudoClassesElements,
      },
    ],
  },
  {
    id: 'css-layout',
    title: '📐 Layout',
    content: '',
    items: [
      {
        id: 'box-model-and-layout-fundamentals',
        title: '📦 Box Model & Layout Fundamentals',
        content: boxModelAndLayoutFundamentals,
      },
      {
        id: 'display-positioning-and-z-index',
        title: '📍 Display, Positioning & z-index',
        content: displayPositioningAndZIndex,
      },
      { id: 'units-sizing-and-spacing', title: '📏 Units, Sizing & Spacing', content: unitsSizingAndSpacing },
      { id: 'css-overflow-and-scroll', title: '📜 Overflow & Scroll', content: overflowAndScroll },
      { id: 'flexbox', title: '🔲 Flexbox', content: flexbox },
      { id: 'css-grid', title: '⬛ CSS Grid', content: cssGrid },
      {
        id: 'responsive-design-and-media-queries',
        title: '📱 Responsive Design & Media Queries',
        content: responsiveDesignAndMediaQueries,
      },
    ],
  },
  {
    id: 'css-visual-design',
    title: '🎨 Visual Design',
    content: '',
    items: [
      {
        id: 'colors-typography-and-backgrounds',
        title: '🌈 Colors, Typography & Backgrounds',
        content: colorsTypographyAndBackgrounds,
      },
      { id: 'transitions-and-animations', title: '✨ Transitions & Animations', content: transitionsAndAnimations },
      { id: 'transforms', title: '🔄 2D & 3D Transforms', content: transforms },
      { id: 'css-filters-and-blend-modes', title: '🎭 Filters & Blend Modes', content: filtersAndBlendModes },
    ],
  },
  {
    id: 'css-modern-tooling',
    title: '🛠️ Modern CSS & Tooling',
    content: '',
    items: [
      {
        id: 'css-variables-and-modern-features',
        title: '💡 CSS Variables & Modern Features',
        content: cssVariablesAndModernFeatures,
      },
      {
        id: 'css-architecture-and-organization',
        title: '🏗️ CSS Architecture & Organization',
        content: cssArchitectureAndOrganization,
      },
      { id: 'css-preprocessors-sass', title: '🎀 CSS Preprocessors (SASS)', content: cssPreprocessorsSass },
      { id: 'css-tailwind-intro', title: '🌬️ Tailwind CSS Introduction', content: tailwindCssIntro },
      {
        id: 'debugging-tools-and-performance',
        title: '🐛 Debugging Tools & Performance',
        content: debuggingToolsAndPerformance,
      },
    ],
  },
  {
    id: 'css-quality-interview',
    title: '💼 Quality & Interview',
    content: '',
    items: [
      { id: 'common-css-mistakes', title: '⚠️ Common CSS Mistakes', content: commonCssMistakes },
      { id: 'css-best-practices', title: '✅ Best Practices', content: cssBestPractices },
      { id: 'css-q-and-a', title: '📌 Top 50 Q&A', content: top50QAndA },
    ],
  },
];
