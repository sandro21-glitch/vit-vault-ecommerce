import SearchProduct from "../../general/SearchProduct";

const MobileNav = () => {
  return (
    <div className="fixed bg-white top-0 left-0 w-[60%] right-0 bottom-0 z-[99999]">
      <ul className="overflow-hidden">
        <SearchProduct />
      </ul>
    </div>
  );
};

export default MobileNav;
