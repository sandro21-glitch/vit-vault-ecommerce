import { Link } from "react-router-dom";
import Categories from "./navbar/Categories";
import NavList from "./navbar/NavList";

const MainNavbar = () => {
  return (
    <nav className="border border-b-gray-200 h-[52px]">
      <div className="section-center section-x flex items-center h-full">
        <Categories />
        <NavList />
        <li className="list-none cursor-pointer text-[14px] font-semibold text-primaryGreen">
          <Link to="/">ფასდაკლებები</Link>
        </li>
      </div>
    </nav>
  );
};

export default MainNavbar;
