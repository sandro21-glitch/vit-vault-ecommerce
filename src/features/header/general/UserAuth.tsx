import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
  if (isLoading)
    return (
      <SkeletonTheme baseColor="#1eff00" highlightColor="#ff0000">
        <p>
          <Skeleton count={3} highlightColor="red" className="text-red-900 text-[10px]" />
        </p>
      </SkeletonTheme>
    );
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
