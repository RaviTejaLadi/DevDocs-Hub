import SidebarContent from "./SidebarContent";

const SidebarWrapperMobile = ({ close }: { close: () => void }) => {
  return <SidebarContent closeSheet={close} />;
};
export default SidebarWrapperMobile;
