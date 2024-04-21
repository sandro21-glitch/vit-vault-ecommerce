import Hamburger from "hamburger-react";
import Cart from "./general/Cart";
import Logo from "./general/Logo";
import SearchProduct from "./general/search/SearchProduct";
import UserAuth from "./general/UserAuth";

type GenHeaderTypes = {
  isMobileNav: boolean;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const GeneralHeader = ({ isMobileNav, isOpen, setOpen }: GenHeaderTypes) => {
  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="bg-white border border-b-gray-200 font-mono">
      <div className="section-center section-x">
        <ul className="h-[105px] flex items-center justify-between gap-5">
          {isMobileNav ? (
            <>
              <Hamburger size={20} toggled={isOpen} toggle={handleToggle} />
              <Logo />
            </>
          ) : (
            <>
              <Logo />
              <SearchProduct />
              <UserAuth />
            </>
          )}
          <Cart />
        </ul>
      </div>
    </div>
  );
};
export default GeneralHeader;
