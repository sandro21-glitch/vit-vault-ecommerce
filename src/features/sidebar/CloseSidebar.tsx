import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { closeLoginSidebar, closeSidebar } from "../slices/modalSlice";

const CloseSidebar = () => {
  const { loginSidebar, sidebar } = useAppSelector((store) => store.modals);
  const dispatch = useAppDispatch();
  const haneleCloseSidebar = () => {
    if (sidebar) {
      dispatch(closeSidebar());
    }
    if (loginSidebar) {
      dispatch(closeLoginSidebar());
    }
  };
  return (
    <button
      type="button"
      onClick={haneleCloseSidebar}
      className="flex items-center gap-1 group text-[13px] poppins-font font-semibold "
    >
      <p className="text-[#2d2a2a]">დახურვა</p>
      <p
        className="
    relative
    before:absolute before:left-0 before:w-[14px] before:h-[2px] before:bg-black before:-rotate-45 before:group-hover:rotate-0
    before:transition-all before:ease-in before:duration-200
    after:absolute after:left-0 after:w-[14px] after:h-[2px] after:bg-black after:rotate-45 after:group-hover:rotate-0
    after:transition-all after:ease-in after:duration-200"
      ></p>
    </button>
  );
};

export default CloseSidebar;
