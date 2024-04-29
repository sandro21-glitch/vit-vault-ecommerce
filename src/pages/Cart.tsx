import CartHeader from "../features/cart/CartHeader";
import CartLayout from "../features/cart/CartLayout";

const Cart = () => {
  return (
    <section>
      <CartHeader />
      <div
        style={{ marginBottom: "40px" }}
        className="flex flex-col lg:flex-row section-center section-x md:gap-7"
      >
        <CartLayout />
        <div className="w-full bg-red-900 lg:max-w-[25%]">test</div>
      </div>
    </section>
  );
};

export default Cart;
