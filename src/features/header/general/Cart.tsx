import { MdOutlineShoppingBag } from "react-icons/md";
import CartOItemCount from "./cart/CartItemCount";
import CartModal from "./cart/CartModal";
import TotalCartSum from "./cart/TotalCartSum";

const Cart = () => {
  return (
    <li className="flex items-center cursor-pointer relative font-sans group">
      <MdOutlineShoppingBag size={30} />
      <TotalCartSum />
      <CartOItemCount />
      <CartModal />
    </li>
  );
};

export default Cart;
