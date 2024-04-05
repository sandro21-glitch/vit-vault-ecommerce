import logo from "/logo-no-background.svg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
const GeneralHeader = () => {
  return (
    <div className="bg-white border border-b-gray-200 font-mono">
      <div className="section-center px-[15px]">
        <ul className="h-[105px] flex items-center justify-between gap-5">
          <li>
            <img
              src={logo}
              alt="logo"
              className="max-w-[250px] max-h-[95px]"
            />
          </li>
          <li className="flex-1">
            <form className="relative">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="მოძებნე პროდუქცია"
                className="min-w-[290px] w-full border-2 outline-none p-5 h-[46px]"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-0 top-0 w-[50px] bg-transparent text-[#777] flex-center"
              >
                <CiSearch size={25} />
              </button>
            </form>
          </li>
          <li className="text-[#3f3f3f] font-semibold text-[13px]">შესვლა / რეგისტრაცია</li>
          <li className="flex items-center">
            <MdOutlineShoppingBag size={30} />
            <span>69₾</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GeneralHeader;
