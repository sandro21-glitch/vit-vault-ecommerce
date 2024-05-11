import { Link } from "react-router-dom";
import { navItems } from "../../../../../constants/navItems";

type MobileNavListTypes = {
  setOpen: (open: boolean) => void;
};

const MobileNavList = ({ setOpen }: MobileNavListTypes) => {
  return (
    <ul>
      {navItems.map((listItem) => {
        const { id, name, color, path } = listItem;
        return (
          <li
            onClick={() => setOpen(false)}
            key={id}
            style={{ color: color ? color : "" }}
            className="border-b"
          >
            <Link to={path} className="p-[14px] font-semibold block">
              {name}
            </Link>
          </li>
        );
      })}
      <li className="border-b list-none cursor-pointer text-[14px] font-semibold text-secondaryGreen">
        <Link to="/discount" className="p-[14px] block">
          ფასდაკლებები
        </Link>
      </li>
    </ul>
  );
};

export default MobileNavList;
