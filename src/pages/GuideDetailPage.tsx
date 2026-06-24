import { useParams } from 'react-router-dom';
import GuideDetailPage from '@/features/guides/components/GuideDetailPage';

export default function GuideDetailPageRoute() {
  const { slug } = useParams<{ slug: string }>();
  return <GuideDetailPage slug={slug} />;
}
