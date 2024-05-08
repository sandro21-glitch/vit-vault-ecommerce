import { Link } from "react-router-dom";

type SingleNavItemTypes = {
  name: string;
  icon: string;
  path: string;
};
const SingleNavItem = ({ icon, name, path }: SingleNavItemTypes) => {
  return (
    <li>
      <Link
        to={path}
        className="flex items-center gap-1 cursor-pointer text-[14px] font-semibold hover:text-primaryGreen transition-colors ease-in duration-150"
      >
        <img src={icon} alt={name} className="w-[24px] h-[24px]" />
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default SingleNavItem;
