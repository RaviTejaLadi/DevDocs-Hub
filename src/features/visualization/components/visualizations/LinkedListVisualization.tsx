import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function LinkedListVisualization() {
  return <GenericConceptVisualization topicId="linked-list" config={GENERIC_VISUALIZATION_CONFIGS['linked-list']} />;
}
