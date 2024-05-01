import CloseSidebar from "./CloseSidebar";

const SidebarHeader = () => {

  return (
    <header className="flex justify-between items-center p-5 border-b">
      <h4 className="font-semibold leading-7">საყიდლების კალათა</h4>
      <CloseSidebar />
    </header>
  );
};

export default SidebarHeader;
