import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function RecursionVisualization() {
  return <GenericConceptVisualization topicId="recursion" config={GENERIC_VISUALIZATION_CONFIGS.recursion} />;
}
