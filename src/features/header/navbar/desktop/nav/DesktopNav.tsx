import { Link } from "react-router-dom";
import Categories from "../category/Categories";
import NavList from "./NavList";

const DesktopNav = () => {
  return (
    <div className="section-center section-x flex items-center h-full">
      <Categories />
      <NavList />
      <li className="list-none cursor-pointer text-[14px] font-semibold text-primaryGreen">
        <Link to="/">ფასდაკლებები</Link>
      </li>
    </div>
  );
};

export default DesktopNav;
