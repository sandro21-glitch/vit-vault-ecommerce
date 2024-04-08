import DesktopNav from "./navbar/desktop/DesktopNav";
import MobileNav from "./navbar/mobile/MobileNav";

type MainNavTypes = {
  isMobileNav: boolean;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const MainNavbar = ({ isMobileNav, isOpen, setOpen }: MainNavTypes) => {
  return (
    <nav
      className={`${isMobileNav ? "" : "border border-b-gray-200 h-[52px]"} `}
    >
      {isOpen && isMobileNav && (
        <div
          onClick={() => setOpen(false)}
          className="absolute top-0 w-screen h-screen bg-black z-[9999] opacity-65"
        ></div>
      )}
      {isMobileNav ? <MobileNav isOpen={isOpen} /> : <DesktopNav />}
    </nav>
  );
};

export default MainNavbar;
