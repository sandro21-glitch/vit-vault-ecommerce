import CloseButton from "../../ui/CloseButton";

const SidebarHeader = () => {
  const handleCloseSidebar = () => {
    console.log("closed");
  };
  return (
    <header className="flex justify-between items-center px-4 py-5 border-b">
      <h4 className="font-semibold leading-7">საყიდლების კალათა</h4>
      <div className="flex items-center gap-2">
        <p className="text-[14px]">დახურვა</p>
        <CloseButton onClick={handleCloseSidebar} />
      </div>
    </header>
  );
};

export default SidebarHeader;
