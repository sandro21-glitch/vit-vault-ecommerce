import DesktopNav from "./navbar/desktop/DesktopNav";
import MobileNav from "./navbar/mobile/MobileNav";

type MainNavTypes = {
  isMobileNav: boolean;
};

const MainNavbar = ({ isMobileNav }: MainNavTypes) => {
  return (
    <nav
      className={`${isMobileNav ? "" : "border border-b-gray-200 h-[52px]"} `}
    >
      {isMobileNav ? <MobileNav /> : <DesktopNav />}
    </nav>
  );
};

export default MainNavbar;
