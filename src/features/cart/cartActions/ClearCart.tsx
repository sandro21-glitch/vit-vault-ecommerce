import toast from "react-hot-toast";
import { useAppDispatch } from "../../../hooks/hooks";
import { clearCart } from "../../slices/cartSlice";

const ClearCart = () => {
  const dispatch = useAppDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("თქვენი კალათა გასუფთავდა");
  };

  return (
    <button
      type="button"
      onClick={handleClearCart}
      className="bg-veryLightGray hover:bg-gray-200 transition-colors ease-in duration-150 py-[12px] px-[20px] font-semibold text-black text-[13px] leading-[18px]"
    >
      კალათის გასუფთავება
    </button>
  );
};

export default ClearCart;
