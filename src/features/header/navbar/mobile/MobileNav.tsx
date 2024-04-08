import SearchProduct from "../../general/SearchProduct";

type MobileNavTypes = {
  isOpen: boolean;
};

const MobileNav = ({ isOpen }: MobileNavTypes) => {
  return (
    <div
      className={`fixed ${
        isOpen ? "translate-x-0" : "translate-x-[-200%]"
      } bg-white top-0 left-0 w-[60%] right-0 bottom-0 z-[9999] transition-all ease-in duration-300 delay-100`}
    >
      <ul className="overflow-hidden">
        <SearchProduct />
      </ul>
    </div>
  );
};

export default MobileNav;
