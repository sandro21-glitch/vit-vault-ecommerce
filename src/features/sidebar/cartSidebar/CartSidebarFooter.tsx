import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { closeSidebar } from "../../slices/modalSlice";
import { formatToGeorgianLari } from "../../../utils/formatPrice";

const CartSidebarFooter = () => {
  const { totalSum } = useAppSelector((store) => store.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleNavigate = () => {
    navigate("/cart");
    dispatch(closeSidebar());
  };

  return (
    <footer className="border-t-2 px-4 py-10 w-full z-[99999] bg-white">
      <div className="flex justify-between w-full items-center mb-10">
        <p className="text-[22px] text-black font-semibold">ჯამი:</p>
        <p className="text-[22px] text-secondaryGreen font-semibold ">
          {formatToGeorgianLari(totalSum)}
        </p>
      </div>
      <button
        onClick={handleNavigate}
        className="w-full bg-veryLightGray text-primaryGray
       hover:text-black py-3 transition-colors ease-in duration-150"
      >
        კალათის ნახვა
      </button>
    </footer>
  );
};

export default CartSidebarFooter;
