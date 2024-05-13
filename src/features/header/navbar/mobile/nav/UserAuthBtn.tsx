import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { useAppDispatch } from "../../../../../hooks/hooks";
import { openLoginSidebar } from "../../../../slices/modalSlice";
type UserAuthBtnTypes = {
  setOpen: (open: boolean) => void;
};

const UserAuthBtn = ({ setOpen }: UserAuthBtnTypes) => {
  const dispatch = useAppDispatch();
  const handleOpenAuthSidebar = () => {
    setOpen(false);
    dispatch(openLoginSidebar());
  };

  return (
    <li
      onClick={handleOpenAuthSidebar}
      className="border-b list-none cursor-pointer text-[14px] font-semibold text-primaryGray"
    >
      <Link to="/discount" className="p-[14px] inline-flex items-center gap-2">
        <FaRegUser />
        <span>შესვლა / რეგისტრაცია</span>
      </Link>
    </li>
  );
};

export default UserAuthBtn;
