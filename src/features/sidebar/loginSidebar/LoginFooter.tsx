import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hooks";
import { closeLoginSidebar } from "../../slices/modalSlice";

const LoginFooter = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="p-5 border-b font-poppins">
      <p className="flex justify-center text-gray-200 mb-5">
        <LuUser2 className="text-[5rem]" />
      </p>
      <p className="text-center mb-1 text-black font-semibold text-[18px]">
        ჯერ არ გაქვთ ანგარიში?
      </p>
      <p
        onClick={() => dispatch(closeLoginSidebar())}
        className="flex justify-center text-[18px] text-black font-semibold hover:text-primaryGray transition-colors ease-in duration-150"
      >
        <Link to="/register" className="border-b border-secondaryGreen">
          რეგისტრაცია
        </Link>
      </p>
    </div>
  );
};

export default LoginFooter;
