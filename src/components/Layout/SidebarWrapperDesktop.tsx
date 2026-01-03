import { useParams } from 'react-router-dom';
import SidebarContent from './SidebarContent';

const SidebarWrapperDesktop = () => {
  const { categoryId, slug } = useParams();
  return <SidebarContent currentTopicId={categoryId} activeSlug={slug} />;
};
export default SidebarWrapperDesktop;
