import { useAppSelector } from "../../../../hooks/hooks";
import ClearCart from "./ClearCart";
import CouponCode from "./CouponCode";

const CartActions = () => {
  const { cartProducts } = useAppSelector((store) => store.cart);
  if (cartProducts.length < 1) return null;
  return (
    <div className="flex flex-col items-start lg:items-end">
      <CouponCode />
      <ClearCart />
    </div>
  );
};

export default CartActions;
