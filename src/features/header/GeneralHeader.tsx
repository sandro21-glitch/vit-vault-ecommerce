import Cart from "./general/Cart";
import Logo from "./general/Logo";
import SearchProduct from "./general/SearchProduct";
import UserAuth from "./general/UserAuth";
const GeneralHeader = () => {
  return (
    <div className="bg-white border border-b-gray-200 font-mono">
      <div className="section-center section-x">
        <ul className="h-[105px] flex items-center justify-between gap-5">
          <Logo />
          <SearchProduct />
          <UserAuth />
          <Cart />
        </ul>
      </div>
    </div>
  );
};

export default GeneralHeader;
