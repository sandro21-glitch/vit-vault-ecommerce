import { useAppSelector } from "../../../hooks/hooks";
import SidebarList from "./SidebarList";

type SidebarListProps = {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
};

const AccountSidebar = ({ setSelectedTab, selectedTab }: SidebarListProps) => {
  const { user } = useAppSelector((store) => store.user);

  return (
    <div className="min-w-[25%] max-w-[25%] pr-5 border-r h-full">
      <h4 className="border-b pb-3 pl-2 uppercase font-semibold text-[18px]">{user?.email}</h4>
      <SidebarList setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
    </div>
  );
};

export default AccountSidebar;
