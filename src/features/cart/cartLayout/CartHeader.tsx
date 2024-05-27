import { FaLongArrowAltRight } from "react-icons/fa";

type CartHeaderTypes = {
  cartPage: string;
};

const CartHeader = ({ cartPage }: CartHeaderTypes) => {
  return (
    <header className=" bg-black mb-[40px]">
      <div className=" section-center section-x">
        <ul className="flex justify-center items-center py-[15px] text-[22px]">
          <li
            className={`flex items-center cursor-pointer ${
              cartPage === "cart" ? "text-secondaryGreen" : "text-white"
            } font-semibold`}
          >
            საყიდლების კალათა
            <span className="mx-5 cursor-default hidden lg:inline text-white">
              <FaLongArrowAltRight />
            </span>
          </li>
          <li
            className={`items-center cursor-pointer ${
              cartPage === "payment" ? "text-secondaryGreen" : "text-white"
            } font-semibold hidden lg:flex`}
          >
            გადახდა
            <span className="mx-5 cursor-default text-white">
              <FaLongArrowAltRight />
            </span>
          </li>
          <li className="cursor-pointer text-white font-semibold hidden lg:block">
            გადახდის გვერდი
          </li>
        </ul>
      </div>
    </header>
  );
};

export default CartHeader;
