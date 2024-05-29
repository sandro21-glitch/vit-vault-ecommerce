import { FaRegUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { openLoginSidebar } from "../../../../slices/modalSlice";
import Skeleton from "react-loading-skeleton";
import LoggedInUser from "../../../general/LoggedInUser";
type UserAuthBtnTypes = {
  setOpen: (open: boolean) => void;
};

const UserAuthBtn = ({ setOpen }: UserAuthBtnTypes) => {
  const dispatch = useAppDispatch();
  const handleOpenAuthSidebar = () => {
    setOpen(false);
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
    return <LoggedInUser setOpen={setOpen} />;
  }
  return (
    <li
      onClick={handleOpenAuthSidebar}
      className="border-b list-none cursor-pointer text-[14px] font-semibold text-primaryGray"
    >
      <p className="p-[14px] inline-flex items-center gap-2">
        <FaRegUser />
        <span>შესვლა / რეგისტრაცია</span>
      </p>
    </li>
  );
};

export default UserAuthBtn;
