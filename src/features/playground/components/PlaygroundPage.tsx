import { createElement } from 'react';
import { Navigate, useParams } from 'react-router-dom';
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

  return createElement(getPlaygroundPageComponent(playgroundId)!);
};

export default PlaygroundPage;
