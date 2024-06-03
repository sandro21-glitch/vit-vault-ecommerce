import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/hooks";
import { closeLoginSidebar } from "../../../slices/modalSlice";

const ForgotPasswordLink = () => {
  const dispatch = useAppDispatch();

  const handleCloseSidebar = () => {
    dispatch(closeLoginSidebar());
  };

  return (
    <Link
      onClick={handleCloseSidebar}
      to="/password-recovery"
      className="text-secondaryGreen mt-5 hover:underline cursor-pointer text-[20px] inline-block"
    >
      დაგავიწყდათ პაროლი?
    </Link>
  );
};

export default ForgotPasswordLink;
