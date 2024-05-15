import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { openLoginSidebar } from "../../slices/modalSlice";
import LoggedInUser from "./LoggedInUser";

const UserAuth = () => {
  const dispatch = useAppDispatch();
  const handleOpenAuthSidebar = () => {
    dispatch(openLoginSidebar());
  };
  const { error, isLoading, user } = useAppSelector((store) => store.user);
  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>Error...</p>;
  if (user) {
    return <LoggedInUser email={user.email} />;
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
