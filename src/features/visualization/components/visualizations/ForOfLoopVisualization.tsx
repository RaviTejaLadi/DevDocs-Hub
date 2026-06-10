import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function ForOfLoopVisualization() {
  return <GenericConceptVisualization topicId="for-of-loop" config={GENERIC_VISUALIZATION_CONFIGS['for-of-loop']} />;
}
