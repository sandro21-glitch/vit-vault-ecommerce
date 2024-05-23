import { useAppSelector } from "../../../hooks/hooks";
import SidebarList from "./SidebarList";

type SidebarListProps = {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
};

const AccountSidebar = ({ setSelectedTab, selectedTab }: SidebarListProps) => {
  const { user } = useAppSelector((store) => store.user);

  return (
    <div className="lg:min-w-[25%] lg:max-w-[25%] w-full pr-5 lg:border-r h-full">
      <h4 className="border-b pb-3 pl-2 uppercase font-semibold text-[18px]">
        {user?.email}
      </h4>
      <SidebarList setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
    </div>
  );
};

export default AccountSidebar;
