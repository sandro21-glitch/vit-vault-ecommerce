import { useEffect, useState } from "react";
import GeneralHeader from "../features/header/GeneralHeader";
import MainNavbar from "../features/header/MainNavbar";
import TopBar from "../features/header/TopBar";

const Header = () => {
  const [isMobileNav, setIsMobileNav] = useState<boolean>(window.innerWidth < 1280);
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileNav(window.innerWidth < 1280);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <TopBar />
      <GeneralHeader
        isMobileNav={isMobileNav}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <MainNavbar isMobileNav={isMobileNav} />
    </header>
  );
};

export default Header;
