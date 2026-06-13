import type { WorkflowPreset, WorkflowPresetConfig } from '@/features/workflow/types/presets';
import { htmlPreset } from './html';
import { ingestPreset } from './ingest';
import { javascriptPreset } from './javascript';

const PRESETS: Record<WorkflowPreset, WorkflowPresetConfig> = {
  ingest: ingestPreset,
  html: htmlPreset,
  javascript: javascriptPreset,
};

export function getWorkflowPreset(preset: WorkflowPreset): WorkflowPresetConfig {
  return PRESETS[preset];
}
