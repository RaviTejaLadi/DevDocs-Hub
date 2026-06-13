import type { WorkflowPreset, WorkflowPresetConfig } from '@/features/workflow/types/presets';
import { htmlPreset } from './html';
import { ingestPreset } from './ingest';
import { javascriptPreset } from './javascript';
import { frontendPreset } from './Roadmaps/frontend';

const PRESETS: Record<WorkflowPreset, WorkflowPresetConfig> = {
  ingest: ingestPreset,
  html: htmlPreset,
  javascript: javascriptPreset,
  frontend: frontendPreset,
};

export function getWorkflowPreset(preset: WorkflowPreset): WorkflowPresetConfig {
  return PRESETS[preset];
}
