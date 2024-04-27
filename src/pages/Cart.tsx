import CartHeader from "../features/cart/CartHeader";
import CartLayout from "../features/cart/CartLayout";

const Cart = () => {
  return (
    <section>
      <CartHeader />
      <div className="flex section-center section-x ">
        <CartLayout />
        <div className="w-full max-w-[25%] bg-red-900 ml-7">test</div>
      </div>
    </section>
  );
};

export default Cart;
