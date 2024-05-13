import { useAppSelector } from "../hooks/hooks";
import SidebarAuth from "./SidebarAuth";
import SidebarCart from "./SidebarCart";

const Sidebars = () => {
  const { loginSidebar, sidebar } = useAppSelector((store) => store.modals);
  return (
    <>{loginSidebar ? <SidebarAuth /> : sidebar ? <SidebarCart /> : null}</>
  );
};

export default Sidebars;
