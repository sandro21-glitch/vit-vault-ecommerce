import SidebarList from "./SidebarList";

type AccountSidebarTypes = {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
};

const AccountSidebar = ({
  setSelectedTab,
  selectedTab,
}: AccountSidebarTypes) => {
  return (
    <div className="max-w-[25%] pr-5 border-r h-full">
      <h4 className="border-b pb-3 pl-2">ჩემი ანგარიში</h4>
      <SidebarList setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
    </div>
  );
};

export default AccountSidebar;
