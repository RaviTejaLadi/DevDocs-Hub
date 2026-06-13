import WorkflowCanvas from './WorkflowCanvas';
import { getWorkflowPreset } from '@/data/workflow-presets';
import type { WorkflowPreset } from '../types/presets';

type WorkflowShowcaseProps = {
  preset?: WorkflowPreset;
  className?: string;
  readOnly?: boolean;
};

export function WorkflowShowcase({ preset = 'ingest', className = '', readOnly = true }: WorkflowShowcaseProps) {
  const selectedPreset = getWorkflowPreset(preset);
  return (
    <div className={`w-full min-w-0 ${className}`}>
      <WorkflowCanvas nodes={selectedPreset.nodes} edges={selectedPreset.edges} className="w-full" readOnly={readOnly} />
    </div>
  );
}

export function WorkflowDemo({ preset = 'ingest' }: { preset?: WorkflowPreset }) {
  return (
    <div className="w-full min-w-0 rounded-2xl border border-border/50 bg-card/40 p-2 sm:p-3">
      <WorkflowShowcase preset={preset} />
    </div>
  );
}
