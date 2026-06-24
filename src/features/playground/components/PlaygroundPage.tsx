import { createElement } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PageSEO } from '@/components/seo';
import { playgroundPath } from '@/app/routes/paths';
import { getPlaygroundById } from '../constants';
import { getPlaygroundPageComponent, isImplementedPlaygroundId } from '../playgroundRegistry';
import { PlaygroundListPage } from './PlaygroundListPage';

const PlaygroundPage = () => {
  const { playgroundId } = useParams<{ playgroundId?: string }>();

  if (!playgroundId) {
    return <PlaygroundListPage />;
  }

  const playground = getPlaygroundById(playgroundId);

  if (!playground || !isImplementedPlaygroundId(playgroundId)) {
    return <Navigate to={playgroundPath()} replace />;
  }

  return (
    <>
      <PageSEO
        title={playground.label}
        description={playground.description}
        path={playgroundPath(playground.id)}
        keywords={['javascript playground', playground.label, playground.category]}
      />
      {createElement(getPlaygroundPageComponent(playgroundId)!)}
    </>
  );
};

export default PlaygroundPage;
