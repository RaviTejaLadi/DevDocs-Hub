import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function ClosuresVisualization() {
  return <GenericConceptVisualization topicId="closures" config={GENERIC_VISUALIZATION_CONFIGS.closures} />;
}
