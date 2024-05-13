import { useAppDispatch } from "../../../hooks/hooks";
import { openLoginSidebar } from "../../slices/modalSlice";

const UserAuth = () => {
  const dispatch = useAppDispatch();
  const handleOpenAuthSidebar = () => {
    dispatch(openLoginSidebar());
  };

  return (
    <li
      onClick={handleOpenAuthSidebar}
      className="text-[#808080] font-bold text-[13px] cursor-pointer"
    >
      შესვლა / რეგისტრაცია
    </li>
  );
};

export default UserAuth;
