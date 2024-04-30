import SidebarHeader from "../features/sidebar/SidebarHeader";
import SidebarList from "../features/sidebar/SidebarList";

const SidebarCart = () => {
  // 340px
  return (
    <div className="fixed  inset-0 z-[9999999]">
      <div className="fixed inset-0 bg-black opacity-60 z-[-1]"></div>
      <aside className="w-[340px] bg-white float-end h-screen">
        <SidebarHeader />
        <SidebarList />
      </aside>
    </div>
  );
};

export default SidebarCart;
