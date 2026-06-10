import { GENERIC_VISUALIZATION_CONFIGS } from '../../constants/genericVisualizationConfigs';
import { GenericConceptVisualization } from './GenericConceptVisualization';

export function ScopeChainVisualization() {
  return <GenericConceptVisualization topicId="scope-chain" config={GENERIC_VISUALIZATION_CONFIGS['scope-chain']} />;
}
