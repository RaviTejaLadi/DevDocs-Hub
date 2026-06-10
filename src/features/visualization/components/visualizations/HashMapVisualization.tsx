import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function HashMapVisualization() {
  return <GenericConceptVisualization topicId="hash-map" config={GENERIC_VISUALIZATION_CONFIGS['hash-map']} />;
}
