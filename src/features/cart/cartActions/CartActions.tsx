import ClearCart from "./ClearCart";
import CouponCode from "./CouponCode";

const CartActions = () => {
  return (
    <div className="flex flex-col items-end">
      <CouponCode />
      <ClearCart />
    </div>
  );
};

export default CartActions;
