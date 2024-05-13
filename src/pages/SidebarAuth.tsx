import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import useOutsideClick from "../hooks/useOutsideClick";
import { closeLoginSidebar } from "../features/slices/modalSlice";
import SidebarHeader from "../features/sidebar/SidebarHeader";
import LoginForm from "../features/sidebar/loginSidebar/LoginForm";
import LoginFooter from "../features/sidebar/loginSidebar/LoginFooter";

const SidebarAuth = () => {
  const { loginSidebar } = useAppSelector((store) => store.modals);
  const [isVisible, setIsVisible] = useState(false);
  const asideRef = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();

  // hook to handle clicks outside the sidebar
  useOutsideClick(asideRef, () => {
    if (loginSidebar) {
      dispatch(closeLoginSidebar());
    }
  });

  useEffect(() => {
    if (loginSidebar) {
      // set isVisible to true after a short delay to allow for transition
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      // set isVisible to false after the transition duration to allow for animation
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [loginSidebar]);
  if (!loginSidebar) return null;
  return (
    <div
      className={`fixed inset-0 ${
        isVisible ? "opacity-100 z-[9999999]" : "opacity-0 z-[-9999]"
      } transition-all ease-in duration-200`}
    >
      <div className="fixed inset-0 bg-black opacity-60 z-[-1]"></div>
      <aside
        ref={asideRef}
        className={`w-[300px] lg:w-[350px] bg-white float-end h-screen
        ${isVisible ? "translate-x-0" : "translate-x-[200%]"}
        transition-all ease-in duration-200
      `}
      >
        <SidebarHeader title="შესვლა" />
        <LoginForm />
        <LoginFooter />
      </aside>
    </div>
  );
};

export default SidebarAuth;
