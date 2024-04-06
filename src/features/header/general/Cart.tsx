import { MdOutlineShoppingBag } from "react-icons/md";

const Cart = () => {
  return (
    <li className="flex items-center">
      <MdOutlineShoppingBag size={30} />
      <span>69₾</span>
    </li>
  );
};

export default Cart;
