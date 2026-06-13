import type { WorkflowPresetConfig } from '@/features/workflow/types/presets';

const nodes: WorkflowPresetConfig['nodes'] = [
  {
    id: 'h1',
    position: { x: 40, y: 200 },
    data: {
      label: 'Create HTML Document',
      description: 'Start with a valid HTML5 document using <!DOCTYPE html> and root html element.',
      meta: {
        purpose: 'document structure',
        output: 'html skeleton',
      },
    },
  },

  {
    id: 'h2',
    position: { x: 350, y: 40 },
    data: {
      label: 'Parse DOCTYPE',
      description: 'Browser reads <!DOCTYPE html> and switches to standards mode rendering.',
      meta: {
        browser: 'parser',
        result: 'standards mode',
      },
    },
  },

  {
    id: 'h3',
    position: { x: 350, y: 360 },
    data: {
      label: 'Read HTML Tree',
      description: 'Browser scans tags and creates nodes representing elements.',
      meta: {
        process: 'tokenization',
        output: 'tokens',
      },
    },
  },

  {
    id: 'h4',
    position: { x: 700, y: 40 },
    data: {
      label: 'Build DOM Tree',
      description: 'Tokens are converted into a Document Object Model hierarchy.',
      meta: {
        structure: 'DOM',
        type: 'tree',
      },
    },
  },

  {
    id: 'h5',
    position: { x: 700, y: 360 },
    data: {
      label: 'Load External Resources',
      description: 'Browser discovers CSS, JavaScript, images, fonts, and fetches them.',
      meta: {
        resources: 'css/js/images/fonts',
        network: 'http requests',
      },
    },
  },

  {
    id: 'h6',
    position: { x: 1050, y: 40 },
    data: {
      label: 'Apply Metadata',
      description: 'Head elements provide title, viewport, SEO, and social metadata.',
      meta: {
        tags: 'title/meta/link',
        area: 'head',
      },
    },
  },

  {
    id: 'h7',
    position: { x: 1050, y: 360 },
    data: {
      label: 'Apply CSS Styling',
      description: 'CSS rules are matched against DOM elements to compute styles.',
      meta: {
        output: 'CSSOM',
        process: 'style calculation',
      },
    },
  },

  {
    id: 'h8',
    position: { x: 1400, y: 40 },
    data: {
      label: 'Create Render Tree',
      description: 'Browser combines DOM and CSSOM into a render tree.',
      meta: {
        input: 'DOM + CSSOM',
        output: 'render tree',
      },
    },
  },

  {
    id: 'h9',
    position: { x: 1400, y: 360 },
    data: {
      label: 'Layout Calculation',
      description: 'Browser calculates size and position of every visible element.',
      meta: {
        stage: 'layout',
        alias: 'reflow',
      },
    },
  },

  {
    id: 'h10',
    position: { x: 1750, y: 40 },
    data: {
      label: 'Paint Elements',
      description: 'Text, backgrounds, borders, and images are painted to layers.',
      meta: {
        rendering: 'paint',
        output: 'pixels',
      },
    },
  },

  {
    id: 'h11',
    position: { x: 1750, y: 360 },
    data: {
      label: 'Composite Layers',
      description: 'GPU combines painted layers into the final screen output.',
      meta: {
        stage: 'compositing',
        hardware: 'GPU',
      },
    },
  },

  {
    id: 'h12',
    position: { x: 2100, y: 40 },
    data: {
      label: 'Accessibility Tree',
      description: 'Browser generates accessibility information for screen readers.',
      meta: {
        standards: 'ARIA',
        users: 'assistive technologies',
      },
    },
  },

  {
    id: 'h13',
    position: { x: 2100, y: 360 },
    data: {
      label: 'JavaScript Interaction',
      description: 'Scripts manipulate the DOM and update the page dynamically.',
      meta: {
        api: 'DOM API',
        behavior: 'dynamic updates',
      },
    },
  },

  {
    id: 'h14',
    position: { x: 2450, y: 200 },
    data: {
      label: 'Rendered Web Page',
      description: 'Final interactive webpage displayed to the user.',
      meta: {
        result: 'visible UI',
        state: 'interactive',
      },
    },
  },
];

const edges: WorkflowPresetConfig['edges'] = [
  {
    id: 'e1',
    source: 'h1',
    target: 'h2',
  },

  {
    id: 'e2',
    source: 'h2',
    target: 'h3',
  },

  {
    id: 'e3',
    source: 'h3',
    target: 'h4',
    data: { label: 'build DOM' },
  },

  {
    id: 'e4',
    source: 'h4',
    target: 'h5',
    data: { label: 'discover resources' },
  },

  {
    id: 'e5',
    source: 'h4',
    target: 'h6',
    data: { label: 'read head tags' },
  },

  {
    id: 'e6',
    source: 'h5',
    target: 'h7',
    data: { label: 'load CSS' },
  },

  {
    id: 'e7',
    source: 'h6',
    target: 'h8',
    data: { label: 'metadata ready' },
  },

  {
    id: 'e8',
    source: 'h7',
    target: 'h8',
    data: { label: 'CSSOM ready' },
  },

  {
    id: 'e9',
    source: 'h8',
    target: 'h9',
    data: { label: 'layout phase' },
  },

  {
    id: 'e10',
    source: 'h9',
    target: 'h10',
    data: { label: 'paint elements' },
  },

  {
    id: 'e11',
    source: 'h10',
    target: 'h11',
    data: { label: 'composite layers' },
  },

  {
    id: 'e12',
    source: 'h11',
    target: 'h12',
    data: { label: 'accessibility mapping' },
  },

  {
    id: 'e13',
    source: 'h11',
    target: 'h13',
    data: { label: 'attach JS behavior' },
  },

  {
    id: 'e14',
    source: 'h12',
    target: 'h14',
    data: { label: 'accessible UI' },
  },

  {
    id: 'e15',
    source: 'h13',
    target: 'h14',
    data: { label: 'interactive UI' },
  },
];

export const htmlPreset: WorkflowPresetConfig = {
  title: 'How HTML Works Internally',
  subtitle: 'From HTML document creation to DOM parsing, rendering, accessibility, and user interaction.',
  nodes,
  edges,
};
