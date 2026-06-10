import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function ReferencesVsValuesVisualization() {
  return (
    <GenericConceptVisualization
      topicId="references-vs-values"
      config={GENERIC_VISUALIZATION_CONFIGS['references-vs-values']}
    />
  );
}
