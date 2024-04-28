import { MdOutlineShoppingBag } from "react-icons/md";
import CartOItemCount from "./cart/CartItemCount";
import CartModal from "./cart/CartModal";

const Cart = () => {
  return (
    <li className="flex items-center cursor-pointer relative font-sans group">
      <MdOutlineShoppingBag size={30} />
      <span className="ml-3">0.00₾</span>
      <CartOItemCount />
      <CartModal />
    </li>
  );
};

export default Cart;
