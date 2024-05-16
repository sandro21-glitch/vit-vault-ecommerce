import SidebarList from "./SidebarList";

const AccountSidebar = () => {
  return (
    <div className="max-w-[25%] pr-5 border-r h-full">
      <h4 className="border-b pb-3 pl-2">ჩემი ანგარიში</h4>
      <SidebarList />
    </div>
  );
};

export default AccountSidebar;
