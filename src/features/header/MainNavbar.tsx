import { useEffect } from "react";
import DesktopNav from "./navbar/desktop/nav/DesktopNav";
import MobileNav from "./navbar/mobile/nav/MobileNav";

type MainNavTypes = {
  isMobileNav: boolean;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const MainNavbar = ({ isMobileNav, isOpen, setOpen }: MainNavTypes) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav
      className={`${isMobileNav ? "" : "border border-b-gray-200 h-[52px]"} `}
    >
      {isOpen && isMobileNav && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-0 w-screen h-screen bg-black z-[9999] opacity-65"
        ></div>
      )}
      {isMobileNav ? <MobileNav isOpen={isOpen} setOpen={setOpen} /> : <DesktopNav />}
    </nav>
  );
};

export default MainNavbar;
