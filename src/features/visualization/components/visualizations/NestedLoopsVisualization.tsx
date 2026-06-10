import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function NestedLoopsVisualization() {
  return <GenericConceptVisualization topicId="nested-loops" config={GENERIC_VISUALIZATION_CONFIGS['nested-loops']} />;
}
