import type { WorkflowPresetConfig } from '@/features/workflow/types/presets';

const nodes: WorkflowPresetConfig['nodes'] = [
  {
    id: '1',
    position: { x: 40, y: 200 },
    data: {
      label: 'HTTP Webhook',
      description: 'Receives incoming POST requests from external services.',
      type: 'trigger',
      status: 'success',
      duration: '2ms',
      meta: { method: 'POST', path: '/hook/ingest' },
    },
  },
  {
    id: '2',
    position: { x: 540, y: 40 },
    data: {
      label: 'Validate Payload',
      description: 'Schema validation against JSON Schema draft-07.',
      type: 'condition',
      status: 'success',
      duration: '8ms',
      meta: { schema: 'v2.payload', strict: 'true' },
    },
  },
  {
    id: '3',
    position: { x: 540, y: 380 },
    data: {
      label: 'Enrich Metadata',
      description: 'Attaches geo + device context to the event payload.',
      type: 'transform',
      status: 'success',
      duration: '14ms',
      meta: { provider: 'ipstack', fields: 'geo,ua' },
    },
  },
  {
    id: '4',
    position: { x: 1060, y: 200 },
    data: {
      label: 'Claude AI — Classify',
      description: 'Classifies event intent using a few-shot prompt.',
      type: 'ai',
      status: 'running',
      meta: { model: 'claude-sonnet-4-6', temp: '0.2' },
    },
  },
  {
    id: '5',
    position: { x: 1580, y: 40 },
    data: {
      label: 'Send Slack Alert',
      description: 'Posts to #ops-alerts when confidence > 0.85.',
      type: 'action',
      status: 'idle',
      meta: { channel: '#ops-alerts', threshold: '0.85' },
    },
  },
  {
    id: '6',
    position: { x: 1580, y: 380 },
    data: {
      label: 'Store to Postgres',
      description: 'Upserts classified event into events table.',
      type: 'output',
      status: 'idle',
      meta: { table: 'events', strategy: 'upsert' },
    },
  },
  {
    id: '7',
    position: { x: 540, y: 700 },
    data: {
      label: 'Dead Letter Queue',
      description: 'Captures invalid payloads for manual review.',
      type: 'output',
      status: 'error',
      duration: '—',
      meta: { queue: 'dlq-ingest', retention: '7d' },
    },
  },
];

const edges: WorkflowPresetConfig['edges'] = [
  { id: 'e1-2', source: '1', target: '2', data: { label: 'valid' } },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5', data: { label: 'high conf' } },
  { id: 'e4-6', source: '4', target: '6' },
  { id: 'e2-7', source: '2', target: '7', data: { label: 'invalid', dashed: true, color: '#ef4444' } },
];

export const ingestPreset: WorkflowPresetConfig = {
  title: 'Ingest Pipeline',
  subtitle: 'Webhook to AI classification and persistence.',
  nodes,
  edges,
};
