
import { navItems } from "../../../utils/navItems";
import SingleNavItem from "./SingleNavItem";

const NavList = () => {
  return (
    <ul className="flex items-center gap-5 w-full">
      {navItems.map((item) => {
        return (
          <SingleNavItem key={item.id} name={item.name} icon={item.icon} />
        );
      })}
    </ul>
  );
};

export default NavList;
