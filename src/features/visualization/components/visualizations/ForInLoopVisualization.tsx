import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function ForInLoopVisualization() {
  return <GenericConceptVisualization topicId="for-in-loop" config={GENERIC_VISUALIZATION_CONFIGS['for-in-loop']} />;
}
