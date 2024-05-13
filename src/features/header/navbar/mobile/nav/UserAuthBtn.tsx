import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const UserAuthBtn = () => {
  return (
    <li className="border-b list-none cursor-pointer text-[14px] font-semibold text-primaryGray">
      <Link to="/discount" className="p-[14px] inline-flex items-center gap-2">
        <FaRegUser />
        <span>შესვლა / რეგისტრაცია</span>
      </Link>
    </li>
  );
};

export default UserAuthBtn;
