import CloseSidebar from "./CloseSidebar";

type SidebarHeaderTypes = {
  title: string;
};

const SidebarHeader = ({ title }: SidebarHeaderTypes) => {
  return (
    <header className="flex justify-between items-center p-5 border-b">
      <h4 className="font-semibold leading-7">{title}</h4>
      <CloseSidebar />
    </header>
  );
};

export default SidebarHeader;
