import { navItems } from "../../../../../constants/navItems";
import SingleNavItem from "./SingleNavItem";

const NavList = () => {
  return (
    <ul className="flex items-center gap-5 w-full">
      {navItems.map((item) => {
        return (
          <SingleNavItem
            key={item.id}
            name={item.name}
            icon={item.icon}
            path={item.path}
          />
        );
      })}
    </ul>
  );
};

export default NavList;
