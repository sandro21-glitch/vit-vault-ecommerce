import { FaLongArrowAltRight } from "react-icons/fa";
const CartHeader = () => {
  return (
    <header className=" bg-secondaryGreen mb-[40px]">
      <div className=" section-center section-x">
        <ul className="flex justify-center items-center py-[15px] text-[22px]">
          <li className="flex items-center cursor-pointer text-white font-semibold">
            საყიდლების კალათა
            <span className="mx-5 cursor-default">
              <FaLongArrowAltRight />
            </span>
          </li>
          <li className="flex items-center cursor-pointer text-white font-semibold">
            გადახდა
            <span className="mx-5 cursor-default">
              <FaLongArrowAltRight />
            </span>
          </li>
          <li className="cursor-pointer text-white font-semibold">
            გადახდის გვერდი
          </li>
        </ul>
      </div>
    </header>
  );
};

export default CartHeader;
