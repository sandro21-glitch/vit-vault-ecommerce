import CartHeader from "../features/cart/CartHeader";
import CartLayout from "../features/cart/CartLayout";

const Cart = () => {
  return (
    <section>
      <CartHeader />
      <div className="flex gap-5 section-center section-x ">
        <CartLayout />
        <div className="w-full max-w-[30%] bg-red-900">test</div>
      </div>
    </section>
  );
};

export default Cart;
