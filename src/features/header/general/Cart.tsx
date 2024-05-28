import { MdOutlineShoppingBag } from "react-icons/md";
import CartOItemCount from "./cart/CartItemCount";
import CartModal from "./cart/CartModal";
import TotalCartSum from "./cart/TotalCartSum";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate("/cart")}
      className="cursor-pointer relative font-sans group"
    >
      <div className="flex items-center">
        <MdOutlineShoppingBag size={30} />
        <TotalCartSum />
        <CartOItemCount />
        <CartModal />
      </div>
    </li>
  );
};

export default Cart;
