import { MdOutlineShoppingBag } from "react-icons/md";
import CartOItemCount from "./cart/CartItemCount";
import CartModal from "./cart/CartModal";
import { formatToGeorgianLari } from "../../../utils/formatPrice";
import { useAppSelector } from "../../../hooks/hooks";

const Cart = () => {
  const { totalSum } = useAppSelector((store) => store.cart);

  return (
    <li className="flex items-center cursor-pointer relative font-sans group">
      <MdOutlineShoppingBag size={30} />
      <span className="ml-3 font-semibold text-[#333] text-[14px]">{formatToGeorgianLari(totalSum)}</span>
      <CartOItemCount />
      <CartModal />
    </li>
  );
};

export default Cart;
