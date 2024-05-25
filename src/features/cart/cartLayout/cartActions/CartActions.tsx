import ClearCart from "./ClearCart";
import CouponCode from "./CouponCode";

const CartActions = () => {
  return (
    <div className="flex flex-col items-start lg:items-end">
      <CouponCode />
      <ClearCart />
    </div>
  );
};

export default CartActions;
