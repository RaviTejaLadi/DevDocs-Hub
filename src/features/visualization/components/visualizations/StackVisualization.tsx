import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function StackVisualization() {
  return <GenericConceptVisualization topicId="stack" config={GENERIC_VISUALIZATION_CONFIGS.stack} />;
}
