import type { WorkflowPresetConfig } from '@/features/workflow/types/presets';

const nodes: WorkflowPresetConfig['nodes'] = [
  {
    id: 'j1',
    position: { x: 40, y: 200 },
    data: {
      label: 'Receive User Event',
      description: 'Button click or form submit triggers workflow.',
      type: 'trigger',
      status: 'success',
      duration: '1ms',
      meta: { source: 'ui-event', event: 'submit' },
    },
  },
  {
    id: 'j2',
    position: { x: 560, y: 40 },
    data: {
      label: 'Validate Inputs',
      description: 'Run schema checks before API call.',
      type: 'condition',
      status: 'success',
      duration: '9ms',
      meta: { library: 'zod', strict: true },
    },
  },
  {
    id: 'j3',
    position: { x: 560, y: 380 },
    data: {
      label: 'Transform Payload',
      description: 'Normalize data for backend contract.',
      type: 'transform',
      status: 'success',
      duration: '5ms',
      meta: { shape: 'camelCase', trim: true },
    },
  },
  {
    id: 'j4',
    position: { x: 1120, y: 200 },
    data: {
      label: 'Execute Async Call',
      description: 'POST payload and await response.',
      type: 'action',
      status: 'running',
      meta: { method: 'POST', retries: 2 },
    },
  },
  {
    id: 'j5',
    position: { x: 1700, y: 40 },
    data: {
      label: 'Render Success State',
      description: 'Update UI when promise resolves.',
      type: 'output',
      status: 'idle',
      meta: { component: 'ResultCard' },
    },
  },
  {
    id: 'j6',
    position: { x: 1700, y: 380 },
    data: {
      label: 'Handle Error State',
      description: 'Show fallback toast and capture diagnostics.',
      type: 'output',
      status: 'warning',
      meta: { component: 'ErrorToast', logging: 'sentry' },
    },
  },
];

const edges: WorkflowPresetConfig['edges'] = [
  { id: 'je1-2', source: 'j1', target: 'j2' },
  { id: 'je1-3', source: 'j1', target: 'j3' },
  { id: 'je2-4', source: 'j2', target: 'j4' },
  { id: 'je3-4', source: 'j3', target: 'j4' },
  { id: 'je4-5', source: 'j4', target: 'j5', data: { label: 'resolved' } },
  { id: 'je4-6', source: 'j4', target: 'j6', data: { label: 'rejected', dashed: true, color: '#f59e0b' } },
];

export const javascriptPreset: WorkflowPresetConfig = {
  title: 'JavaScript Workflow',
  subtitle: 'From UI event handling to async request outcomes.',
  nodes,
  edges,
};
