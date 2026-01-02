import { useParams } from "react-router-dom";
import SidebarContent from "./SidebarContent";

const SidebarWrapperMobile = ({ close }: { close: () => void }) => {
  const { categoryId, slug } = useParams();
  return (
    <SidebarContent
      currentTopicId={categoryId}
      activeSlug={slug}
      closeSheet={close}
    />
  );
};
export default SidebarWrapperMobile;
