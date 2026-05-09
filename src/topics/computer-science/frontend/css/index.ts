import type { TopicItem } from '@/topics';
import intro from './intro.md?raw';
import top50QAndA from './top-50-q-and-a.md?raw';
import cssMustKnowTopics from './css-must-know-topics.md?raw';
import cssBasics from './css-basics.md?raw';
import selectorsAndCombinators from './selectors-and-combinators.md?raw';
import boxModelAndLayoutFundamentals from './box-model-and-layout-fundamentals.md?raw';
import displayPositioningAndZIndex from './display-positioning-and-z-index.md?raw';
// import colorsTypographyAndBackgrounds from './colors-typography-and-backgrounds.md?raw';
import unitsSizingAndSpacing from './units-sizing-and-spacing.md?raw';
// import cascadeSpecificityAndInheritance from './cascade-specificity-and-inheritance.md?raw';
// import flexbox from './flexbox.md?raw';
// import cssGrid from './css-grid.md?raw';
// import responsiveDesignAndMediaQueries from './responsive-design-and-media-queries.md?raw';
// import transitionsAndAnimations from './transitions-and-animations.md?raw';
// import transforms from './transforms.md?raw';
// import cssVariablesAndModernFeatures from './css-variables-and-modern-features.md?raw';
// import cssArchitectureAndOrganization from './css-architecture-and-organization.md?raw';
// import debuggingToolsAndPerformance from './debugging-tools-and-performance.md?raw';
// import commonCssMistakes from './common-css-mistakes.md?raw';
// import cssBestPractices from './best-practices.md?raw';

export const cssTopics: TopicItem[] = [
  {
    id: 'intro',
    title: 'Introduction',
    content: intro,
  },
  {
    id: 'css-q-and-a',
    title: 'Top 50 Q&A',
    content: top50QAndA,
  },
  {
    id: 'css-must-know-topics',
    title: 'CSS topics every developer must know',
    content: cssMustKnowTopics,
  },
  {
    id: 'css-basics',
    title: 'CSS Basics',
    content: cssBasics,
  },
  {
    id: 'selectors-and-combinators',
    title: 'Selectors & Combinators',
    content: selectorsAndCombinators,
  },
  {
    id: 'box-model-and-layout-fundamentals',
    title: 'Box Model & Layout Fundamentals',
    content: boxModelAndLayoutFundamentals,
  },
  {
    id: 'display-positioning-and-z-index',
    title: 'Display, Positioning & z-index',
    content: displayPositioningAndZIndex,
  },
  // {
  //   id: 'colors-typography-and-backgrounds',
  //   title: 'Colors, Typography & Backgrounds',
  //   content: colorsTypographyAndBackgrounds,
  // },
  {
    id: 'units-sizing-and-spacing',
    title: 'Units, Sizing & Spacing',
    content: unitsSizingAndSpacing,
  },
  // {
  //   id: 'cascade-specificity-and-inheritance',
  //   title: 'Cascade, Specificity & Inheritance',
  //   content: cascadeSpecificityAndInheritance,
  // },
  // {
  //   id: 'flexbox',
  //   title: 'Flexbox',
  //   content: flexbox,
  // },
  // {
  //   id: 'css-grid',
  //   title: 'CSS Grid',
  //   content: cssGrid,
  // },
  // {
  //   id: 'responsive-design-and-media-queries',
  //   title: 'Responsive Design & Media Queries',
  //   content: responsiveDesignAndMediaQueries,
  // },
  // {
  //   id: 'transitions-and-animations',
  //   title: 'Transitions & Animations',
  //   content: transitionsAndAnimations,
  // },
  // {
  //   id: 'transforms',
  //   title: '2D & 3D Transforms',
  //   content: transforms,
  // },
  // {
  //   id: 'css-variables-and-modern-features',
  //   title: 'CSS Variables & Modern Features',
  //   content: cssVariablesAndModernFeatures,
  // },
  // {
  //   id: 'css-architecture-and-organization',
  //   title: 'CSS Architecture & Organization',
  //   content: cssArchitectureAndOrganization,
  // },
  // {
  //   id: 'debugging-tools-and-performance',
  //   title: 'Debugging Tools & Performance',
  //   content: debuggingToolsAndPerformance,
  // },
  // {
  //   id: 'common-css-mistakes',
  //   title: 'Common CSS Mistakes',
  //   content: commonCssMistakes,
  // },
  // {
  //   id: 'css-best-practices',
  //   title: 'Best Practices',
  //   content: cssBestPractices,
  // },
];
