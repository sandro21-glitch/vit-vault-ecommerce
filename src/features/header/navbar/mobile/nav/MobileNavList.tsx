import { navItems } from "../../../../../constants/navItems";

const MobileNavList = () => {
  return (
    <ul>
      {navItems.map((listItem) => {
        const { id, name, color } = listItem;
        return (
          <li
            key={id}
            style={{ color: color ? color : "" }}
            className="p-[14px] font-semibold border-b cursor-pointer"
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileNavList;
