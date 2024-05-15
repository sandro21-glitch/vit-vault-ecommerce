import Skeleton from "react-loading-skeleton";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { openLoginSidebar } from "../../slices/modalSlice";
import LoggedInUser from "./LoggedInUser";
import "react-loading-skeleton/dist/skeleton.css";

const UserAuth = () => {
  const dispatch = useAppDispatch();
  const handleOpenAuthSidebar = () => {
    dispatch(openLoginSidebar());
  };
  const { error, isLoading, user } = useAppSelector((store) => store.user);

  if (isLoading) {
    return <Skeleton highlightColor="red" width={100} />;
  }

  if (error) {
    alert(error);
  }

  if (user) {
    return <LoggedInUser />;
  }

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
