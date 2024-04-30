import { MdOutlineShoppingBag } from "react-icons/md";
import CartOItemCount from "./cart/CartItemCount";
import CartModal from "./cart/CartModal";
import TotalCartSum from "./cart/TotalCartSum";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <li className="cursor-pointer relative font-sans group">
      <Link to="/cart" className="flex items-center">
        <MdOutlineShoppingBag size={30} />
        <TotalCartSum />
        <CartOItemCount />
        <CartModal />
      </Link>
    </li>
  );
};

export default Cart;
