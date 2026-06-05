import vueIntro from './intro.mdx?raw';
import vueInstallationAndSetup from './installation-and-setup.mdx?raw';
import vueFilesAndFoldersStructure from './files-and-folders-structure.mdx?raw';
import vueTemplateSyntax from './template-syntax.mdx?raw';
import vueReactivityFundamentals from './reactivity-fundamentals.mdx?raw';
import vueComputedProperties from './computed-properties.mdx?raw';
import vueWatchers from './watchers.mdx?raw';
import vueClassAndStyleBindings from './class-and-style-bindings.mdx?raw';
import vueConditionalRendering from './conditional-rendering.mdx?raw';
import vueListRendering from './list-rendering.mdx?raw';
import vueEventHandling from './event-handling.mdx?raw';
import vueFormInputBindings from './form-input-bindings.mdx?raw';
import vueComponentsBasics from './components-basics.mdx?raw';
import vueProps from './props.mdx?raw';
import vueComponentEvents from './component-events.mdx?raw';
import vueSlots from './slots.mdx?raw';
import vueProvideInject from './provide-inject.mdx?raw';
import vueSingleFileComponents from './single-file-components.mdx?raw';
import vueCompositionApi from './composition-api.mdx?raw';
import vueOptionsApi from './options-api.mdx?raw';
import vueScriptSetup from './script-setup.mdx?raw';
import vueComposables from './composables.mdx?raw';
import vueReactivityDeepDive from './reactivity-deep-dive.mdx?raw';
import vueDirectives from './directives.mdx?raw';
import vueCustomDirectives from './custom-directives.mdx?raw';
import vuePlugins from './plugins.mdx?raw';
import vueLifecycleHooks from './lifecycle-hooks.mdx?raw';
import vueRouter from './vue-router.mdx?raw';
import vuePinia from './pinia.mdx?raw';
import vueVuex from './vuex.mdx?raw';
import vueTeleport from './teleport.mdx?raw';
import vueKeepAlive from './keep-alive.mdx?raw';
import vueSuspense from './suspense.mdx?raw';
import vueDynamicAndAsyncComponents from './dynamic-and-async-components.mdx?raw';
import vueTransitionsAndAnimations from './transitions-and-animations.mdx?raw';
import vueTypescriptWithVue from './typescript-with-vue.mdx?raw';
import vueTesting from './testing.mdx?raw';
import vuePerformanceOptimization from './performance-optimization.mdx?raw';
import vueErrorHandling from './error-handling.mdx?raw';
import vueSsrAndNuxt from './ssr-and-nuxt.mdx?raw';
import vueViteAndBuildTools from './vite-and-build-tools.mdx?raw';
import vueTheoryQuestions from './theory-questions.mdx?raw';
import vueCodingQuestions from './coding-questions.mdx?raw';
import vueTop25InterviewQuestions from './top-25-interview-questions.mdx?raw';
import type { TopicItem } from '@/data/topics';

export const vueTopics: TopicItem[] = [
  {
    id: 'vue-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'vue-js-intro', title: '📚 Introduction', content: vueIntro },
      { id: 'vue-installation-and-setup', title: '🛠️ Installation & Setup', content: vueInstallationAndSetup },
      {
        id: 'vue-js-files-and-folders-structure',
        title: '📁 Files and Folders Structure',
        content: vueFilesAndFoldersStructure,
      },
    ],
  },
  {
    id: 'vue-fundamentals',
    title: '📖 Fundamentals',
    content: '',
    items: [
      { id: 'vue-template-syntax', title: '📝 Template Syntax', content: vueTemplateSyntax },
      { id: 'vue-reactivity-fundamentals', title: '⚡ Reactivity Fundamentals', content: vueReactivityFundamentals },
      { id: 'vue-computed-properties', title: '🧮 Computed Properties', content: vueComputedProperties },
      { id: 'vue-watchers', title: '👀 Watchers', content: vueWatchers },
      { id: 'vue-class-and-style-bindings', title: '🎨 Class & Style Bindings', content: vueClassAndStyleBindings },
      { id: 'vue-conditional-rendering', title: '🔀 Conditional Rendering', content: vueConditionalRendering },
      { id: 'vue-list-rendering', title: '📋 List Rendering', content: vueListRendering },
      { id: 'vue-event-handling', title: '🖱️ Event Handling', content: vueEventHandling },
      { id: 'vue-form-input-bindings', title: '📥 Form Input Bindings', content: vueFormInputBindings },
    ],
  },
  {
    id: 'vue-components',
    title: '🧩 Components',
    content: '',
    items: [
      { id: 'vue-components-basics', title: '🔧 Components Basics', content: vueComponentsBasics },
      { id: 'vue-props', title: '📤 Props', content: vueProps },
      { id: 'vue-component-events', title: '📣 Component Events', content: vueComponentEvents },
      { id: 'vue-slots', title: '🎰 Slots', content: vueSlots },
      { id: 'vue-provide-inject', title: '💉 Provide / Inject', content: vueProvideInject },
      { id: 'vue-single-file-components', title: '📄 Single File Components', content: vueSingleFileComponents },
      {
        id: 'vue-dynamic-and-async-components',
        title: '🔄 Dynamic & Async Components',
        content: vueDynamicAndAsyncComponents,
      },
      { id: 'vue-teleport', title: '🌀 Teleport', content: vueTeleport },
      { id: 'vue-keep-alive', title: '💾 KeepAlive', content: vueKeepAlive },
      { id: 'vue-suspense', title: '⏳ Suspense', content: vueSuspense },
    ],
  },
  {
    id: 'vue-api-styles',
    title: '🏗️ API Styles',
    content: '',
    items: [
      { id: 'vue-composition-api', title: '🧪 Composition API', content: vueCompositionApi },
      { id: 'vue-options-api', title: '⚙️ Options API', content: vueOptionsApi },
      { id: 'vue-script-setup', title: '📜 Script Setup', content: vueScriptSetup },
      { id: 'vue-composables', title: '♻️ Composables', content: vueComposables },
      { id: 'vue-reactivity-deep-dive', title: '🔬 Reactivity Deep Dive', content: vueReactivityDeepDive },
    ],
  },
  {
    id: 'vue-directives-and-plugins',
    title: '🧰 Directives & Plugins',
    content: '',
    items: [
      { id: 'vue-directives', title: '📌 Built-in Directives', content: vueDirectives },
      { id: 'vue-custom-directives', title: '✨ Custom Directives', content: vueCustomDirectives },
      { id: 'vue-plugins', title: '🔌 Plugins', content: vuePlugins },
      { id: 'vue-lifecycle-hooks', title: '⏱️ Lifecycle Hooks', content: vueLifecycleHooks },
    ],
  },
  {
    id: 'vue-routing-and-state',
    title: '🗺️ Routing & State',
    content: '',
    items: [
      { id: 'vue-router', title: '🛣️ Vue Router', content: vueRouter },
      { id: 'vue-pinia', title: '🍍 Pinia State Management', content: vuePinia },
      { id: 'vue-vuex', title: '📦 Vuex (Legacy)', content: vueVuex },
    ],
  },
  {
    id: 'vue-ui-and-animations',
    title: '🎬 UI & Animations',
    content: '',
    items: [
      {
        id: 'vue-transitions-and-animations',
        title: '✨ Transitions & Animations',
        content: vueTransitionsAndAnimations,
      },
    ],
  },
  {
    id: 'vue-ecosystem',
    title: '🌐 Ecosystem & Tooling',
    content: '',
    items: [
      { id: 'vue-typescript-with-vue', title: '📘 TypeScript with Vue', content: vueTypescriptWithVue },
      { id: 'vue-vite-and-build-tools', title: '⚡ Vite & Build Tools', content: vueViteAndBuildTools },
      { id: 'vue-ssr-and-nuxt', title: '🖥️ SSR & Nuxt', content: vueSsrAndNuxt },
      { id: 'vue-testing', title: '🧪 Testing', content: vueTesting },
      { id: 'vue-performance-optimization', title: '🚀 Performance Optimization', content: vuePerformanceOptimization },
      { id: 'vue-error-handling', title: '❌ Error Handling', content: vueErrorHandling },
    ],
  },
  {
    id: 'vue-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'vue-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: vueTop25InterviewQuestions,
      },
      { id: 'theory-vue-js-interview-questions', title: '❓ Theory Interview Questions', content: vueTheoryQuestions },
      { id: 'coding-vue-js-interview-questions', title: '💻 Coding Interview Questions', content: vueCodingQuestions },
    ],
  },
];
